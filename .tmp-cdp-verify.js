const http = require('http');

function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', reject);
  });
}

function send(ws, message) {
  ws.write(`${JSON.stringify(message)}`);
}

(async () => {
  const targets = await getJson('http://127.0.0.1:9223/json');
  const pageTarget = targets.find((target) => target.type === 'page');
  if (!pageTarget?.webSocketDebuggerUrl) throw new Error('No page target found');

  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
  let id = 0;
  const pending = new Map();

  ws.addEventListener('message', (event) => {
    const chunks = String(event.data).split('').filter(Boolean);
    for (const chunk of chunks) {
      const message = JSON.parse(chunk);
      if (message.id && pending.has(message.id)) {
        const { resolve, reject } = pending.get(message.id);
        pending.delete(message.id);
        if (message.error) reject(new Error(message.error.message));
        else resolve(message.result);
      }
    }
  });

  await new Promise((resolve, reject) => {
    ws.addEventListener('open', resolve, { once: true });
    ws.addEventListener('error', reject, { once: true });
  });

  const call = (method, params = {}) => new Promise((resolve, reject) => {
    const messageId = ++id;
    pending.set(messageId, { resolve, reject });
    ws.send(JSON.stringify({ id: messageId, method, params }));
  });

  await call('Runtime.enable');
  await call('Page.enable');

  const text = `自动化评论 ${Date.now()}`;
  const expression = `new Promise((resolve) => {
    const waitForOpen = () => {
      const open = document.querySelector('[data-open]');
      if (!open) {
        if (document.readyState !== 'complete') {
          setTimeout(waitForOpen, 200);
          return;
        }
        resolve({ ok: false, step: 'open-button-missing', readyState: document.readyState, body: document.body?.innerText?.slice(0, 200) || '' });
        return;
      }

      open.click();
      setTimeout(() => {
        const rating = document.querySelector('#comment-rating');
        const textarea = document.querySelector('#comment-text');
        const submit = document.querySelector('#comment-form button[type="submit"]');
        if (!rating || !textarea || !submit) {
          resolve({ ok: false, step: 'comment-form-missing' });
          return;
        }

        rating.value = '5';
        rating.dispatchEvent(new Event('change', { bubbles: true }));
        textarea.value = ${JSON.stringify(text)};
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
        submit.click();

        setTimeout(() => {
          const first = document.querySelector('#comment-list .comment-item p');
          const count = document.querySelector('#detail-comment-count')?.textContent || '';
          const immediate = first?.textContent || '';

          document.querySelector('#modal-exit')?.click();
          document.querySelector('[data-open]')?.click();

          setTimeout(() => {
            const reopened = document.querySelector('#comment-list .comment-item p')?.textContent || '';
            resolve({ ok: immediate === ${JSON.stringify(text)} && reopened === ${JSON.stringify(text)}, immediate, reopened, count });
          }, 300);
        }, 300);
      }, 300);
    };

    waitForOpen();
  })()`;

  const result = await call('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
  console.log(JSON.stringify(result.result.value));
  ws.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
