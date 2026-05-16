const http = require('http');

function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
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

(async () => {
  const targets = await getJson('http://127.0.0.1:9224/json');
  const pageTarget = targets.find((target) => target.type === 'page' && target.url.includes('127.0.0.1:4173'));
  if (!pageTarget?.webSocketDebuggerUrl) throw new Error('No site page target found');

  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
  let id = 0;
  const pending = new Map();

  ws.addEventListener('message', (event) => {
    const message = JSON.parse(String(event.data));
    if (!message.id || !pending.has(message.id)) return;
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(message.error.message));
    else resolve(message.result);
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

  const evalValue = async (expression) => {
    const result = await call('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    return result.result.value;
  };

  const summary = await evalValue(`({
    gameCountText: document.querySelector('#game-count')?.textContent || '',
    gameCards: document.querySelectorAll('.game-card').length,
    hasSettingsButton: !!document.querySelector('#settings-trigger'),
    themeBefore: document.body.dataset.theme || ''
  })`);

  await evalValue(`document.querySelector('#settings-trigger').click(); 'ok'`);
  const settingsState = await evalValue(`({
    settingsVisible: !document.querySelector('#settings-modal')?.classList.contains('hidden'),
    themeToggleExists: !!document.querySelector('#theme-toggle')
  })`);
  await evalValue(`(() => { const toggle = document.querySelector('#theme-toggle'); toggle.checked = true; toggle.dispatchEvent(new Event('change', { bubbles: true })); return 'ok'; })()`);
  const themeState = await evalValue(`({
    themeAfter: document.body.dataset.theme || '',
    savedTheme: JSON.parse(localStorage.getItem('game_site_settings_v1') || '{}').theme || ''
  })`);
  await evalValue(`document.querySelector('#settings-exit').click(); 'ok'`);

  const gemBoards = [];
  for (let i = 0; i < 3; i += 1) {
    const board = await evalValue(`(() => {
      const button = Array.from(document.querySelectorAll('.game-card')).find((card) => card.textContent.includes('Gem Swap'))?.querySelector('[data-open]');
      button.click();
      document.querySelector('#launch-game').click();
      const value = Array.from(document.querySelectorAll('#game-stage .swap-cell')).map((node) => node.textContent).join('');
      document.querySelector('#modal-exit').click();
      return value;
    })()`);
    gemBoards.push(board);
  }

  const mazeSnapshots = [];
  for (let i = 0; i < 3; i += 1) {
    const maze = await evalValue(`(() => {
      const button = Array.from(document.querySelectorAll('.game-card')).find((card) => card.textContent.includes('Neon Maze'))?.querySelector('[data-open]');
      button.click();
      document.querySelector('#launch-game').click();
      const cells = Array.from(document.querySelectorAll('#game-stage .maze-cell')).map((node) => node.className).join('|');
      const steps = document.querySelector('#maze-steps')?.textContent || '';
      document.querySelector('#modal-exit').click();
      return { cells, steps };
    })()`);
    mazeSnapshots.push(maze);
  }

  console.log(JSON.stringify({ ...summary, ...settingsState, ...themeState, gemBoards, mazeSnapshots }));
  ws.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
