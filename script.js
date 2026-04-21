const AUTH_KEY = "game_site_auth_v2";
const COMMENT_KEY = "game_site_comments_v2";

function createPoster({ title, subtitle, palette, icon }) {
  const [a, b, c] = palette;
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${a}" />
          <stop offset="55%" stop-color="${b}" />
          <stop offset="100%" stop-color="${c}" />
        </linearGradient>
      </defs>
      <rect width="800" height="520" fill="url(#bg)" />
      <circle cx="640" cy="110" r="100" fill="rgba(255,255,255,0.12)" />
      <circle cx="160" cy="390" r="120" fill="rgba(255,255,255,0.08)" />
      <rect x="46" y="48" width="708" height="424" rx="26" fill="rgba(0,0,0,0.16)" stroke="rgba(255,255,255,0.18)" />
      <text x="76" y="145" fill="white" font-size="32" font-family="Arial, sans-serif" opacity="0.9">${subtitle}</text>
      <text x="76" y="250" fill="white" font-size="76" font-weight="700" font-family="Arial, sans-serif">${title}</text>
      <text x="76" y="360" fill="white" font-size="122" font-family="Arial, sans-serif">${icon}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const games = [
  {
    id: "star-sniper",
    name: "Star Sniper",
    genre: "动作射击",
    rating: 4.9,
    players: "单人",
    platform: "网页 / PC",
    description: "在 20 秒内命中尽可能多的目标，考验眼力和手速。",
    features: ["移动靶点", "限时得分", "连续命中奖励"],
    mode: "target",
    image: createPoster({ title: "STAR SNIPER", subtitle: "Action Shooter", palette: ["#051937", "#004d7a", "#00bf72"], icon: "A" })
  },
  {
    id: "cipher-room",
    name: "Cipher Room",
    genre: "解谜密室",
    rating: 4.8,
    players: "单人",
    platform: "网页 / 手机",
    description: "根据提示猜出隐藏密码，次数有限，越猜越紧张。",
    features: ["数字推理", "反馈提示", "有限尝试"],
    mode: "code",
    image: createPoster({ title: "CIPHER ROOM", subtitle: "Puzzle Escape", palette: ["#2b2d42", "#5c677d", "#ef8354"], icon: "A" })
  },
  {
    id: "turbo-lane",
    name: "Turbo Lane",
    genre: "极速竞赛",
    rating: 4.7,
    players: "单人",
    platform: "网页 / PC",
    description: "疯狂点击加速，和电脑比拼谁先冲过终点线。",
    features: ["冲刺节奏", "电脑对手", "短局对抗"],
    mode: "race",
    image: createPoster({ title: "TURBO LANE", subtitle: "Speed Race", palette: ["#10002b", "#7b2cbf", "#ff8500"], icon: "A" })
  },
  {
    id: "memory-ruins",
    name: "Memory Ruins",
    genre: "记忆挑战",
    rating: 4.6,
    players: "单人",
    platform: "网页",
    description: "翻出成对符号，步数越少越厉害。",
    features: ["记忆配对", "步数统计", "一局通关"],
    mode: "memory",
    image: createPoster({ title: "MEMORY RUINS", subtitle: "Memory Trial", palette: ["#283618", "#606c38", "#dda15e"], icon: "A" })
  },
  {
    id: "forge-keeper",
    name: "Forge Keeper",
    genre: "资源经营",
    rating: 4.7,
    players: "单人",
    platform: "网页 / PC",
    description: "在有限回合内收集资源并完成核心建造。",
    features: ["资源平衡", "回合限制", "建造目标"],
    mode: "builder",
    image: createPoster({ title: "FORGE KEEPER", subtitle: "Builder", palette: ["#1d3557", "#457b9d", "#e9c46a"], icon: "A" })
  },
  {
    id: "crown-duel",
    name: "Crown Duel",
    genre: "策略对战",
    rating: 4.8,
    players: "单人",
    platform: "网页 / PC",
    description: "选择攻击、防守或蓄力，先把对手血量压到零。",
    features: ["猜拳式博弈", "蓄力反打", "高风险决策"],
    mode: "duel",
    image: createPoster({ title: "CROWN DUEL", subtitle: "Mind Battle", palette: ["#3c1642", "#086375", "#f4d35e"], icon: "A" })
  },
  {
    id: "night-choice",
    name: "Night Choice",
    genre: "剧情冒险",
    rating: 4.5,
    players: "单人",
    platform: "网页",
    description: "在危机四伏的夜晚连续做出选择，撑到黎明。",
    features: ["多分支选择", "生命压力", "结局判定"],
    mode: "story",
    image: createPoster({ title: "NIGHT CHOICE", subtitle: "Story Adventure", palette: ["#111827", "#1f2937", "#ef4444"], icon: "A" })
  },
  {
    id: "signal-cards",
    name: "Signal Cards",
    genre: "反应判断",
    rating: 4.6,
    players: "单人",
    platform: "网页 / 手机",
    description: "快速判断哪张卡牌符合规则，越到后面越容易出错。",
    features: ["反应判断", "连胜加分", "节奏压迫"],
    mode: "cards",
    image: createPoster({ title: "SIGNAL CARDS", subtitle: "Reaction Test", palette: ["#001219", "#005f73", "#ee9b00"], icon: "A" })
  }
];

const $ = (selector) => document.querySelector(selector);
const queryElements = () => ({
  search: $("#search-input"),
  genre: $("#genre-filter"),
  sort: $("#sort-filter"),
  grid: $("#game-grid"),
  gameCount: $("#game-count"),
  genreCount: $("#genre-count"),
  commentCount: $("#comment-count"),
  random: $("#random-pick"),
  modal: $("#game-modal"),
  modalContent: $("#modal-content"),
  modalClose: $("#modal-close"),
  modalExit: $("#modal-exit"),
  tpl: $("#game-detail-template"),
  authModal: $("#auth-modal"),
  authForm: $("#auth-form"),
  authName: $("#auth-name"),
  authPassword: $("#auth-password"),
  authStatus: $("#auth-status"),
  login: $("#login-trigger"),
  logout: $("#logout-button"),
  authClose: $("#auth-close"),
  authExit: $("#auth-exit"),
  userName: $("#user-name-display"),
  zoomModal: $("#zoom-modal"),
  zoomClose: $("#zoom-close"),
  zoomExit: $("#zoom-exit"),
  zoomImage: $("#zoom-image"),
  zoomTitle: $("#zoom-title")
});
let els;

let activeGameId = null;
let cleanup = null;
let isInitialized = false;

const getStorage = () => {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
};

const readStorageJSON = (key, fallback) => {
  const storage = getStorage();
  if (!storage) return fallback;
  try {
    const raw = storage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const writeStorageJSON = (key, value) => {
  const storage = getStorage();
  if (!storage) return false;
  try {
    storage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
};

const removeStorageItem = (key) => {
  const storage = getStorage();
  if (!storage) return false;
  try {
    storage.removeItem(key);
    return true;
  } catch {
    return false;
  }
};

const getUser = () => {
  const user = readStorageJSON(AUTH_KEY, null);
  return user && typeof user === "object" ? user : null;
};

const setUser = (user) => {
  if (user) {
    writeStorageJSON(AUTH_KEY, user);
  } else {
    removeStorageItem(AUTH_KEY);
  }
};

const getComments = () => {
  const comments = readStorageJSON(COMMENT_KEY, {});
  return comments && typeof comments === "object" && !Array.isArray(comments) ? comments : {};
};

const saveComments = (value) => writeStorageJSON(COMMENT_KEY, value);
const commentsFor = (id) => getComments()[id] || [];
const totalComments = () => Object.values(getComments()).reduce((sum, item) => sum + item.length, 0);

function renderUser() {
  const user = getUser();
  els.userName.textContent = user ? user.name : "游客";
  els.login.textContent = user ? "账号管理" : "登录账号";
  els.authStatus.textContent = user
    ? `已登录：${user.name}。评论会自动使用该昵称。`
    : "未登录时将以游客身份浏览，评论时建议先登录。";
}

function openAuth() {
  const user = getUser();
  els.authName.value = user?.name || "";
  els.authPassword.value = user?.password || "";
  els.authModal.classList.remove("hidden");
}

function closeAuth() {
  els.authModal.classList.add("hidden");
}

function openZoom(src, title) {
  els.zoomImage.src = src;
  els.zoomTitle.textContent = title;
  els.zoomModal.classList.remove("hidden");
}

function closeZoom() {
  els.zoomModal.classList.add("hidden");
  els.zoomImage.removeAttribute("src");
}

function updateStats() {
  els.gameCount.textContent = String(games.length);
  els.genreCount.textContent = String(new Set(games.map((game) => game.genre)).size);
  els.commentCount.textContent = String(totalComments());
}

function populateGenres() {
  const genres = [...new Set(games.map((game) => game.genre))].sort((a, b) => a.localeCompare(b, "zh-CN"));
  genres.forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    els.genre.append(option);
  });
}

function filteredGames() {
  const keyword = els.search.value.trim().toLowerCase();
  const genre = els.genre.value;
  const sort = els.sort.value;
  let result = games.filter((game) => {
    const hitKeyword =
      !keyword ||
      game.name.toLowerCase().includes(keyword) ||
      game.genre.toLowerCase().includes(keyword) ||
      game.description.toLowerCase().includes(keyword);
    const hitGenre = genre === "all" || game.genre === genre;
    return hitKeyword && hitGenre;
  });

  result.sort((a, b) => {
    if (sort === "name") return a.name.localeCompare(b.name, "en");
    if (sort === "players") return a.players.localeCompare(b.players, "zh-CN");
    return b.rating - a.rating;
  });

  return result;
}

function renderGames() {
  const list = filteredGames();
  if (!list.length) {
    els.grid.innerHTML = '<div class="empty-state">没有找到符合条件的游戏，换个关键词试试。</div>';
    return;
  }

  els.grid.innerHTML = list.map((game) => `
    <article class="game-card">
      <div class="game-banner">
        <img class="cover-image zoomable" src="${game.image}" alt="${game.name}" data-zoom-src="${game.image}" data-zoom-title="${game.name}">
        <div class="game-banner-content">
          <span class="genre-chip">${game.genre}</span>
          <h3>${game.name}</h3>
        </div>
      </div>
      <div class="game-body">
        <div class="game-topline">
          <span class="rating-pill">评分 ${game.rating.toFixed(1)}</span>
          <span class="tag">${game.platform}</span>
        </div>
        <p>${game.description}</p>
        <div class="card-actions">
          <button class="button primary" type="button" data-open="${game.id}">开始游戏</button>
          <button class="button secondary" type="button" data-zoom-src="${game.image}" data-zoom-title="${game.name} 封面">放大封面</button>
        </div>
        <div class="game-footer">
          <span>${game.players}</span>
          <span>${commentsFor(game.id).length} 条评论</span>
        </div>
      </div>
    </article>
  `).join("");
}

function renderComments(gameId, root) {
  const list = commentsFor(gameId);
  root.querySelector("#detail-comment-count").textContent = `${list.length} 条`;
  root.querySelector("#comment-list").innerHTML = list.length
    ? list.map((item) => `
      <article class="comment-item">
        <div class="comment-meta">
          <strong>${item.name}</strong>
          <time>${item.time}</time>
        </div>
        <span class="rating-pill">${"★".repeat(item.rating)}</span>
        <p>${item.text}</p>
      </article>
    `).join("")
    : '<div class="empty-state">还没有评论，来发布第一条吧。</div>';
}

function showStageError(stage, message = "游戏启动失败，请刷新页面后重试。") {
  if (!stage) return;
  stage.innerHTML = `<div class="empty-stage">${message}</div>`;
}

function openGame(id) {
  const game = games.find((item) => item.id === id);
  if (!game) return;
  activeGameId = id;
  if (cleanup) cleanup();
  cleanup = null;
  if (!els?.tpl || !els?.modalContent || !els?.modal) return;

  const fragment = els.tpl.content.cloneNode(true);
  const root = document.createElement("div");
  root.append(fragment);

  root.querySelector("#detail-image").src = game.image;
  root.querySelector("#detail-image").alt = game.name;
  root.querySelector("#detail-image").dataset.zoomSrc = game.image;
  root.querySelector("#detail-image").dataset.zoomTitle = `${game.name} 封面`;
  root.querySelector("#detail-genre").textContent = game.genre;
  root.querySelector("#detail-title").textContent = game.name;
  root.querySelector("#detail-description").textContent = game.description;
  root.querySelector("#detail-rating").textContent = `评分 ${game.rating.toFixed(1)}`;
  root.querySelector("#detail-players").textContent = game.players;
  root.querySelector("#detail-platform").textContent = game.platform;
  root.querySelector("#play-mode-label").textContent = `${game.genre} | 站内可玩模式`;
  root.querySelector("#detail-features").innerHTML = game.features.map((item) => `<li>${item}</li>`).join("");

  const user = getUser();
  const commentName = root.querySelector("#comment-name");
  commentName.value = user?.name || "";
  renderComments(game.id, root);

  root.querySelector("#comment-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = commentName.value.trim() || "游客";
    const rating = Number(root.querySelector("#comment-rating").value);
    const text = root.querySelector("#comment-text").value.trim();
    if (!rating || !text) return;

    const comments = getComments();
    comments[game.id] = comments[game.id] || [];
    comments[game.id].unshift({
      name,
      rating,
      text,
      time: new Date().toLocaleString("zh-CN", { hour12: false })
    });
    saveComments(comments);
    root.querySelector("#comment-text").value = "";
    root.querySelector("#comment-rating").value = "";
    renderComments(game.id, root);
    updateStats();
    renderGames();
  });

  const launchButton = root.querySelector("#launch-game");
  const stage = root.querySelector("#game-stage");
  if (launchButton) {
    launchButton.addEventListener("click", () => {
      if (!stage) {
        showStageError(stage, "游戏区域加载失败，请关闭弹窗后重试。");
        return;
      }
      try {
        if (cleanup) cleanup();
        cleanup = launchMode(game, stage);
      } catch {
        cleanup = null;
        showStageError(stage);
      }
    });
  }

  root.addEventListener("click", (event) => {
    const target = event.target.closest("[data-zoom-src]");
    if (target) openZoom(target.dataset.zoomSrc, target.dataset.zoomTitle || game.name);
  });

  els.modalContent.innerHTML = "";
  els.modalContent.append(...root.childNodes);
  els.modal.classList.remove("hidden");
}

function closeGame() {
  els.modal.classList.add("hidden");
  if (cleanup) cleanup();
  cleanup = null;
}

function launchMode(game, stage) {
  if (game.mode === "target") return playTarget(stage);
  if (game.mode === "code") return playCode(stage);
  if (game.mode === "race") return playRace(stage);
  if (game.mode === "memory") return playMemory(stage);
  if (game.mode === "builder") return playBuilder(stage);
  if (game.mode === "duel") return playDuel(stage);
  if (game.mode === "story") return playStory(stage);
  return playCards(stage);
}

function playTarget(stage) {
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">得分<strong id="score">0</strong></span>
        <span class="status-pill">时间<strong id="timer">20</strong>s</span>
      </div>
      <div class="target-board" id="target-board"></div>
      <div class="stage-note">点击蓝绿色目标得分，20 秒结束。</div>
    </div>
  `;
  const board = stage.querySelector("#target-board");
  const scoreNode = stage.querySelector("#score");
  const timerNode = stage.querySelector("#timer");
  let score = 0;
  let timeLeft = 20;
  let spawnTimer = 0;

  const spawn = () => {
    const dot = document.createElement("button");
    dot.className = "target-dot";
    dot.textContent = "+1";
    dot.style.left = `${Math.random() * 78}%`;
    dot.style.top = `${Math.random() * 72}%`;
    dot.addEventListener("click", () => {
      score += 1;
      scoreNode.textContent = String(score);
      dot.remove();
    });
    board.append(dot);
    setTimeout(() => dot.remove(), 850);
  };

  spawn();
  spawnTimer = window.setInterval(spawn, 700);
  const clock = window.setInterval(() => {
    timeLeft -= 1;
    timerNode.textContent = String(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(clock);
      clearInterval(spawnTimer);
      board.innerHTML = `<div class="empty-stage">挑战结束，你命中了 ${score} 个目标。</div>`;
    }
  }, 1000);

  return () => {
    clearInterval(clock);
    clearInterval(spawnTimer);
  };
}

function playCode(stage) {
  const answer = String(100 + Math.floor(Math.random() * 900));
  let tries = 6;
  stage.innerHTML = `
    <div class="play-stage">
      <div class="score-box">规则：猜一个 3 位密码。每次会告诉你有几个数字正确且位置正确。</div>
      <div class="stage-toolbar">
        <input class="name-input" id="guess-input" maxlength="3" placeholder="输入 3 位数字">
        <button class="button primary" id="guess-button" type="button">提交</button>
      </div>
      <div class="status-line">
        <span class="status-pill">剩余次数<strong id="tries">${tries}</strong></span>
      </div>
      <div class="log-box" id="guess-log">开始解锁密码。</div>
    </div>
  `;
  const input = stage.querySelector("#guess-input");
  const log = stage.querySelector("#guess-log");
  const triesNode = stage.querySelector("#tries");
  const submit = () => {
    const value = input.value.trim();
    if (!/^\d{3}$/.test(value) || tries <= 0) return;
    tries -= 1;
    let exact = 0;
    [...value].forEach((n, index) => {
      if (answer[index] === n) exact += 1;
    });
    if (value === answer) {
      log.innerHTML = `<strong>破解成功：</strong>密码就是 ${answer}。`;
      tries = 0;
    } else if (tries === 0) {
      log.innerHTML += `<br>最后一次失败，正确密码是 ${answer}。`;
    } else {
      log.innerHTML += `<br>${value}：位置完全正确 ${exact} 个。`;
    }
    triesNode.textContent = String(tries);
    input.value = "";
  };
  stage.querySelector("#guess-button").addEventListener("click", submit);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") submit();
  });
  return () => {};
}

function playRace(stage) {
  let player = 0;
  let cpu = 0;
  stage.innerHTML = `
    <div class="play-stage">
      <div class="run-track">
        <span>你</span>
        <div class="runner-bar"><div class="runner-fill" id="player-fill"></div></div>
      </div>
      <div class="run-track">
        <span>电脑</span>
        <div class="runner-bar"><div class="runner-fill" id="cpu-fill"></div></div>
      </div>
      <div class="stage-toolbar">
        <button class="button primary" id="boost-button" type="button">猛点加速</button>
        <span class="stage-note" id="race-status">先到 100% 获胜。</span>
      </div>
    </div>
  `;
  const playerFill = stage.querySelector("#player-fill");
  const cpuFill = stage.querySelector("#cpu-fill");
  const status = stage.querySelector("#race-status");
  const button = stage.querySelector("#boost-button");
  const tick = window.setInterval(() => {
    cpu = Math.min(100, cpu + 3 + Math.floor(Math.random() * 5));
    cpuFill.style.width = `${cpu}%`;
    if (cpu >= 100) {
      status.textContent = "电脑率先冲线，再来一局吧。";
      clearInterval(tick);
      button.disabled = true;
    }
  }, 700);
  button.addEventListener("click", () => {
    if (player >= 100 || cpu >= 100) return;
    player = Math.min(100, player + 8);
    playerFill.style.width = `${player}%`;
    if (player >= 100) {
      status.textContent = "你赢下了这场冲刺。";
      clearInterval(tick);
      button.disabled = true;
    }
  });
  return () => clearInterval(tick);
}

function playMemory(stage) {
  const symbols = ["A", "B", "C", "D", "E", "F"];
  const deck = [...symbols, ...symbols].sort(() => Math.random() - 0.5);
  let opened = [];
  let matched = 0;
  let moves = 0;
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">步数<strong id="moves">0</strong></span>
        <span class="status-pill">配对<strong id="matched">0</strong>/6</span>
      </div>
      <div class="memory-grid" id="memory-grid"></div>
    </div>
  `;
  const grid = stage.querySelector("#memory-grid");
  const movesNode = stage.querySelector("#moves");
  const matchedNode = stage.querySelector("#matched");
  deck.forEach((symbol, index) => {
    const button = document.createElement("button");
    button.className = "memory-card";
    button.dataset.index = String(index);
    button.dataset.symbol = symbol;
    button.textContent = "?";
    grid.append(button);
  });

  const reveal = (button) => {
    button.textContent = button.dataset.symbol;
    button.classList.add("open");
  };

  const hide = (button) => {
    button.textContent = "?";
    button.classList.remove("open");
  };

  grid.addEventListener("click", (event) => {
    const button = event.target.closest(".memory-card");
    if (!button || button.classList.contains("open") || button.classList.contains("done") || opened.length === 2) return;
    reveal(button);
    opened.push(button);
    if (opened.length === 2) {
      moves += 1;
      movesNode.textContent = String(moves);
      const [a, b] = opened;
      if (a.dataset.symbol === b.dataset.symbol) {
        a.classList.add("done");
        b.classList.add("done");
        opened = [];
        matched += 1;
        matchedNode.textContent = String(matched);
        if (matched === symbols.length) {
          grid.insertAdjacentHTML("beforeend", '<div class="empty-stage">全部配对成功。</div>');
        }
      } else {
        window.setTimeout(() => {
          hide(a);
          hide(b);
          opened = [];
        }, 600);
      }
    }
  });
  return () => {};
}

function playBuilder(stage) {
  let turn = 8;
  let ore = 0;
  let power = 0;
  let core = 0;
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">回合<strong id="turn">${turn}</strong></span>
        <span class="status-pill">核心<strong id="core">${core}</strong>/3</span>
      </div>
      <div class="resource-grid">
        <div class="resource-card score-box">矿石<strong id="ore">${ore}</strong></div>
        <div class="resource-card score-box">电力<strong id="power">${power}</strong></div>
        <div class="resource-card score-box">核心段数<strong id="built">${core}</strong></div>
      </div>
      <div class="stage-toolbar">
        <button class="resource-button" id="mine-button" type="button">采矿 +2</button>
        <button class="resource-button" id="charge-button" type="button">充能 +2</button>
        <button class="resource-button" id="build-button" type="button">建造核心</button>
      </div>
      <div class="log-box" id="builder-log">8 回合内造出 3 段核心即可通关。</div>
    </div>
  `;
  const update = (text) => {
    stage.querySelector("#turn").textContent = String(turn);
    stage.querySelector("#ore").textContent = String(ore);
    stage.querySelector("#power").textContent = String(power);
    stage.querySelector("#core").textContent = String(core);
    stage.querySelector("#built").textContent = String(core);
    stage.querySelector("#builder-log").textContent = text;
    if (turn <= 0 && core < 3) {
      stage.querySelector("#builder-log").textContent = "时间耗尽，核心建造失败。";
      disable();
    }
    if (core >= 3) {
      stage.querySelector("#builder-log").textContent = "建造成功，你守住了基地。";
      disable();
    }
  };
  const disable = () => {
    stage.querySelectorAll(".resource-button").forEach((button) => {
      button.disabled = true;
    });
  };
  const spendTurn = () => {
    turn -= 1;
  };
  stage.querySelector("#mine-button").addEventListener("click", () => {
    spendTurn();
    ore += 2;
    update("矿石库存提升。");
  });
  stage.querySelector("#charge-button").addEventListener("click", () => {
    spendTurn();
    power += 2;
    update("电力系统补充完成。");
  });
  stage.querySelector("#build-button").addEventListener("click", () => {
    spendTurn();
    if (ore >= 2 && power >= 2) {
      ore -= 2;
      power -= 2;
      core += 1;
      update("成功建成一段核心。");
    } else {
      update("资源不足，无法建造。");
    }
  });
  return () => {};
}

function playDuel(stage) {
  let playerHp = 12;
  let cpuHp = 12;
  let charge = 0;
  let cpuCharge = 0;
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">你的生命<strong id="player-hp">${playerHp}</strong></span>
        <span class="status-pill">对手生命<strong id="cpu-hp">${cpuHp}</strong></span>
      </div>
      <div class="duel-grid">
        <button class="duel-option" data-act="attack" type="button">攻击 3 点</button>
        <button class="duel-option" data-act="guard" type="button">防守减伤</button>
        <button class="duel-option" data-act="charge" type="button">蓄力重击</button>
        <button class="duel-option" data-act="burst" type="button">爆发消耗 2 层蓄力</button>
      </div>
      <div class="log-box" id="duel-log">选择你的回合动作。</div>
    </div>
  `;
  const log = stage.querySelector("#duel-log");
  const buttons = stage.querySelectorAll(".duel-option");
  const update = () => {
    stage.querySelector("#player-hp").textContent = String(playerHp);
    stage.querySelector("#cpu-hp").textContent = String(cpuHp);
    if (playerHp <= 0 || cpuHp <= 0) {
      buttons.forEach((button) => {
        button.disabled = true;
      });
      log.textContent = cpuHp <= 0 ? "你赢下了这场王冠决斗。" : "你被对手击败了。";
    }
  };
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (playerHp <= 0 || cpuHp <= 0) return;
      const cpuActs = ["attack", "guard", "charge", cpuCharge >= 2 ? "burst" : "attack"];
      const cpuAct = cpuActs[Math.floor(Math.random() * cpuActs.length)];
      const act = button.dataset.act;
      let playerDamage = 0;
      let cpuDamage = 0;

      if (act === "charge") charge += 1;
      if (cpuAct === "charge") cpuCharge += 1;
      if (act === "attack") cpuDamage += 3;
      if (cpuAct === "attack") playerDamage += 3;
      if (act === "burst" && charge >= 2) {
        cpuDamage += 6;
        charge -= 2;
      }
      if (cpuAct === "burst" && cpuCharge >= 2) {
        playerDamage += 6;
        cpuCharge -= 2;
      }
      if (act === "guard") playerDamage = Math.max(0, playerDamage - 2);
      if (cpuAct === "guard") cpuDamage = Math.max(0, cpuDamage - 2);

      playerHp -= playerDamage;
      cpuHp -= cpuDamage;
      log.textContent = `你选择 ${labelForAct(act)}，对手选择 ${labelForAct(cpuAct)}。`;
      update();
    });
  });
  return () => {};
}

function labelForAct(act) {
  if (act === "attack") return "攻击";
  if (act === "guard") return "防守";
  if (act === "charge") return "蓄力";
  return "爆发";
}

function playStory(stage) {
  const scenes = [
    {
      text: "你在停电的旅馆醒来，外面传来敲门声。",
      options: [
        { label: "立刻开门", hp: -3, next: "门外没人，但你被惊吓。生命 -3。" },
        { label: "先找手电", hp: 0, next: "你找到手电，局势稍稳。" }
      ]
    },
    {
      text: "走廊尽头传来金属摩擦声。",
      options: [
        { label: "冲向出口", hp: -2, next: "你摔倒受伤，生命 -2。" },
        { label: "躲进房间观察", hp: 0, next: "你避开了危险。" }
      ]
    },
    {
      text: "天快亮了，地下室和楼顶都可能通向安全区。",
      options: [
        { label: "去地下室", hp: -2, next: "路很险，但你硬撑过来了。生命 -2。" },
        { label: "去楼顶", hp: 0, next: "你等到了救援灯光。" }
      ]
    }
  ];
  let hp = 8;
  let index = 0;
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">生命<strong id="story-hp">${hp}</strong></span>
      </div>
      <div class="score-box" id="story-text"></div>
      <div class="story-grid" id="story-options"></div>
    </div>
  `;
  const text = stage.querySelector("#story-text");
  const options = stage.querySelector("#story-options");
  const hpNode = stage.querySelector("#story-hp");

  const render = () => {
    if (hp <= 0) {
      text.textContent = "你没能撑到黎明，挑战失败。";
      options.innerHTML = "";
      return;
    }
    if (index >= scenes.length) {
      text.textContent = "你成功撑到了天亮，完成逃生。";
      options.innerHTML = "";
      return;
    }
    const scene = scenes[index];
    text.textContent = scene.text;
    options.innerHTML = scene.options.map((option, optionIndex) => `
      <button class="story-option" data-index="${optionIndex}" type="button">${option.label}</button>
    `).join("");
    options.querySelectorAll(".story-option").forEach((button) => {
      button.addEventListener("click", () => {
        const picked = scene.options[Number(button.dataset.index)];
        hp += picked.hp;
        hpNode.textContent = String(hp);
        text.textContent = picked.next;
        index += 1;
        window.setTimeout(render, 650);
      });
    });
  };

  render();
  return () => {};
}

function playCards(stage) {
  let score = 0;
  let round = 0;
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">得分<strong id="card-score">${score}</strong></span>
        <span class="status-pill">回合<strong id="card-round">${round}</strong>/6</span>
      </div>
      <div class="score-box" id="card-rule">找出“数字最大”的卡牌。</div>
      <div class="card-row" id="card-row"></div>
    </div>
  `;
  const scoreNode = stage.querySelector("#card-score");
  const roundNode = stage.querySelector("#card-round");
  const row = stage.querySelector("#card-row");
  const ruleNode = stage.querySelector("#card-rule");
  const rules = [
    { text: "找出数字最大的卡牌。", pick: (cards) => cards.indexOf(Math.max(...cards)) },
    { text: "找出唯一的偶数卡牌。", pick: (cards) => cards.findIndex((n) => n % 2 === 0) },
    { text: "找出最接近 10 的卡牌。", pick: (cards) => cards.indexOf(cards.slice().sort((a, b) => Math.abs(a - 10) - Math.abs(b - 10))[0]) }
  ];

  const nextRound = () => {
    if (round >= 6) {
      row.innerHTML = `<div class="empty-stage">挑战结束，最终得分 ${score}。</div>`;
      ruleNode.textContent = "本局已完成。";
      return;
    }
    round += 1;
    roundNode.textContent = String(round);
    const cards = Array.from({ length: 3 }, () => 1 + Math.floor(Math.random() * 13));
    const rule = rules[(round - 1) % rules.length];
    const answer = rule.pick(cards);
    ruleNode.textContent = rule.text;
    row.innerHTML = cards.map((card, index) => `
      <button class="card-button" data-index="${index}" type="button">卡牌 ${card}</button>
    `).join("");
    row.querySelectorAll(".card-button").forEach((button) => {
      button.addEventListener("click", () => {
        if (Number(button.dataset.index) === answer) score += 1;
        scoreNode.textContent = String(score);
        nextRound();
      });
    });
  };

  nextRound();
  return () => {};
}

function init() {
  if (isInitialized) return;
  els = queryElements();

  const requiredKeys = [
    "search",
    "genre",
    "sort",
    "grid",
    "gameCount",
    "genreCount",
    "commentCount",
    "random",
    "modal",
    "modalContent",
    "modalClose",
    "modalExit",
    "tpl",
    "authModal",
    "authForm",
    "authName",
    "authPassword",
    "authStatus",
    "login",
    "logout",
    "authClose",
    "authExit",
    "userName",
    "zoomModal",
    "zoomClose",
    "zoomExit",
    "zoomImage",
    "zoomTitle"
  ];

  if (requiredKeys.some((key) => !els[key])) return;

  els.search.addEventListener("input", renderGames);
  els.genre.addEventListener("change", renderGames);
  els.sort.addEventListener("change", renderGames);

  els.grid.addEventListener("click", (event) => {
    const openTarget = event.target.closest("[data-open]");
    if (openTarget) openGame(openTarget.dataset.open);
    const zoomTarget = event.target.closest("[data-zoom-src]");
    if (zoomTarget) openZoom(zoomTarget.dataset.zoomSrc, zoomTarget.dataset.zoomTitle || "封面");
  });

  els.random.addEventListener("click", () => {
    const randomGame = games[Math.floor(Math.random() * games.length)];
    openGame(randomGame.id);
  });

  els.modalClose.addEventListener("click", closeGame);
  els.modalExit.addEventListener("click", closeGame);
  els.authClose.addEventListener("click", closeAuth);
  els.authExit.addEventListener("click", closeAuth);
  els.zoomClose.addEventListener("click", closeZoom);
  els.zoomExit.addEventListener("click", closeZoom);
  els.login.addEventListener("click", openAuth);

  els.authForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = els.authName.value.trim();
    const password = els.authPassword.value.trim();
    if (!name || password.length < 4) return;
    setUser({ name, password });
    renderUser();
    closeAuth();
  });

  els.logout.addEventListener("click", () => {
    setUser(null);
    renderUser();
    els.authName.value = "";
    els.authPassword.value = "";
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeZoom();
      closeAuth();
      closeGame();
    }
  });

  populateGenres();
  renderUser();
  updateStats();
  renderGames();
  isInitialized = true;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
