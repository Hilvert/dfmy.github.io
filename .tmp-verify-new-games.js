const http = require('http');

function getJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

(async () => {
  const targets = await getJson('http://127.0.0.1:9225/json');
  const pageTarget = targets.find((target) => target.type === 'page' && target.url.includes('127.0.0.1:4173'));
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

  const evalValue = async (expression) => {
    const result = await call('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    return result.result.value;
  };

  const inspectGame = async (name) => evalValue(`(() => {
    const button = Array.from(document.querySelectorAll('.game-card')).find((card) => card.textContent.includes(${JSON.stringify(name)}))?.querySelector('[data-open]');
    if (!button) return { name: ${JSON.stringify(name)}, error: 'not-found' };
    button.click();
    document.querySelector('#launch-game').click();
    const info = {
      name: ${JSON.stringify(name)},
      title: document.querySelector('#detail-title')?.textContent || '',
      markers: {
        vaultGrid: !!document.querySelector('#game-stage .vault-grid'),
        runeGrid: !!document.querySelector('#game-stage .rune-grid'),
        battleLine: !!document.querySelector('#game-stage .battle-line'),
        orbitBoard: !!document.querySelector('#game-stage .orbit-board'),
        metroGrid: !!document.querySelector('#game-stage .metro-grid'),
        guessInput: !!document.querySelector('#game-stage #guess-input'),
        memoryGrid: !!document.querySelector('#game-stage .memory-grid'),
        timingHit: !!document.querySelector('#game-stage #timing-hit'),
        laneBoard: !!document.querySelector('#game-stage .lane-board')
      },
      text: document.querySelector('#game-stage')?.innerText?.slice(0, 120) || ''
    };
    document.querySelector('#modal-exit').click();
    return info;
  })()`);

  const results = [];
  for (const name of ['Vault Zero', 'Rune Twins', 'Steel Clash', 'Orbit Pulse', 'Metro Shift']) {
    results.push(await inspectGame(name));
  }

  const oldChecks = [];
  for (const name of ['Cipher Room', 'Memory Ruins', 'Crown Duel', 'Pulse Lock', 'Drift Lane']) {
    oldChecks.push(await inspectGame(name));
  }

  console.log(JSON.stringify({ results, oldChecks }));
  ws.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
