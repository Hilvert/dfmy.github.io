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
      <circle cx="660" cy="110" r="88" fill="rgba(255,255,255,0.12)" />
      <circle cx="130" cy="390" r="120" fill="rgba(255,255,255,0.08)" />
      <rect x="46" y="48" width="708" height="424" rx="26" fill="rgba(0,0,0,0.18)" stroke="rgba(255,255,255,0.18)" />
      <text x="76" y="150" fill="white" font-size="32" font-family="Arial, sans-serif" opacity="0.88">${subtitle}</text>
      <text x="76" y="250" fill="white" font-size="82" font-weight="700" font-family="Arial, sans-serif">${title}</text>
      <text x="76" y="352" fill="white" font-size="124" font-family="Arial, sans-serif" opacity="0.92">${icon}</text>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const AUTH_KEY = "gameverse-user";
const COMMENT_KEY = "gameverse-comments";

const games = [
  {
    id: "galaxy-hunters",
    name: "Galaxy Hunters",
    genre: "动作射击",
    rating: 4.8,
    players: "1-4 人",
    platform: "PC / 网页",
    description: "高速反应射击挑战，真假目标混入。",
    features: ["真假目标", "连击倍率", "误点扣分"],
    image: createPoster({
      title: "GALAXY HUNTERS",
      subtitle: "Action Shooter",
      palette: ["#071a52", "#1f4287", "#5be7ff"],
      icon: "✦"
    })
  },
  {
    id: "crown-chess",
    name: "Crown Chess",
    genre: "策略战棋",
    rating: 4.7,
    players: "单人",
    platform: "PC",
    description: "高压博弈，需要读懂对手节奏。",
    features: ["回合博弈", "资源管理", "多轮胜负"],
    image: createPoster({
      title: "CROWN CHESS",
      subtitle: "Strategy",
      palette: ["#3c2317", "#7b4f2c", "#d4a373"],
      icon: "♜"
    })
  },
  {
    id: "neon-drift-x",
    name: "Neon Drift X",
    genre: "竞速",
    rating: 4.6,
    players: "1-8 人",
    platform: "PC / 主机",
    description: "加速与热量管理并存的竞速挑战。",
    features: ["热量系统", "动态 AI", "冲刺节奏"],
    image: createPoster({
      title: "NEON DRIFT X",
      subtitle: "Racing",
      palette: ["#240046", "#7b2cbf", "#ff4d6d"],
      icon: "⚡"
    })
  },
  {
    id: "dragon-fall",
    name: "Dragon Fall",
    genre: "角色扮演",
    rating: 4.9,
    players: "单人",
    platform: "PC / 主机",
    description: "生命、补给、压力三线并行的冒险。",
    features: ["多状态冒险", "风险选择", "多结局"],
    image: createPoster({
      title: "DRAGON FALL",
      subtitle: "RPG",
      palette: ["#0b132b", "#1c2541", "#5bc0be"],
      icon: "⚔"
    })
  },
  {
    id: "mirror-mind",
    name: "Mirror Mind",
    genre: "解谜",
    rating: 4.5,
    players: "单人",
    platform: "网页 / 手机",
    description: "有限次数的 3 位密码推理。",
    features: ["数字线索", "尝试限制", "位置反馈"],
    image: createPoster({
      title: "MIRROR MIND",
      subtitle: "Puzzle",
      palette: ["#355070", "#6d597a", "#b56576"],
      icon: "◈"
    })
  },
  {
    id: "harvest-town",
    name: "Harvest Town",
    genre: "模拟经营",
    rating: 4.4,
    players: "1-2 人",
    platform: "PC / Switch",
    description: "限回合资源经营与建造。",
    features: ["资源链", "限回合", "断电失败"],
    image: createPoster({
      title: "HARVEST TOWN",
      subtitle: "Sim",
      palette: ["#386641", "#6a994e", "#f2e8cf"],
      icon: "❀"
    })
  },
  {
    id: "orbit-base",
    name: "Orbit Base",
    genre: "生存建造",
    rating: 4.6,
    players: "1-6 人",
    platform: "PC",
    description: "空间站资源压力与建造挑战。",
    features: ["高压资源", "阶段建造", "失败惩罚"],
    image: createPoster({
      title: "ORBIT BASE",
      subtitle: "Build",
      palette: ["#03045e", "#0077b6", "#90e0ef"],
      icon: "⬢"
    })
  },
  {
    id: "arcane-deck",
    name: "Arcane Deck",
    genre: "卡牌对战",
    rating: 4.3,
    players: "1-2 人",
    platform: "PC / 手机",
    description: "蓄力与重击的回合对战。",
    features: ["读心博弈", "爆发伤害", "防守反打"],
    image: createPoster({
      title: "ARCANE DECK",
      subtitle: "Card Battle",
      palette: ["#10002b", "#3c096c", "#c77dff"],
      icon: "♠"
    })
  },
  {
    id: "mecha-cup",
    name: "Mecha Cup",
    genre: "体育竞技",
    rating: 4.2,
    players: "2-6 人",
    platform: "PC / 主机",
    description: "高速机甲球赛与过热惩罚。",
    features: ["热量平衡", "高压对抗", "冲刺时机"],
    image: createPoster({
      title: "MECHA CUP",
      subtitle: "Arena",
      palette: ["#14213d", "#2d6a4f", "#fca311"],
      icon: "◉"
    })
  },
  {
    id: "night-motel",
    name: "Night Motel",
    genre: "恐怖冒险",
    rating: 4.5,
    players: "单人",
    platform: "PC",
    description: "精神压力不断上升的恐怖逃生。",
    features: ["压力系统", "路线选择", "多结局"],
    image: createPoster({
      title: "NIGHT MOTEL",
      subtitle: "Horror",
      palette: ["#111111", "#3a0f0f", "#9a031e"],
      icon: "☾"
    })
  },
  {
    id: "pixel-quest",
    name: "Pixel Quest",
    genre: "像素冒险",
    rating: 4.4,
    players: "1-4 人",
    platform: "网页 / PC",
    description: "像素风多状态冒险。",
    features: ["补给管理", "事件分支", "风险抉择"],
    image: createPoster({
      title: "PIXEL QUEST",
      subtitle: "Pixel",
      palette: ["#283618", "#606c38", "#dda15e"],
      icon: "▣"
    })
  },
  {
    id: "sky-forge",
    name: "Sky Forge",
    genre: "沙盒创造",
    rating: 4.7,
    players: "1-10 人",
    platform: "PC / 网页",
    description: "空岛核心区限回合建造。",
    features: ["多资源联动", "建筑顺序", "失败惩罚"],
    image: createPoster({
      title: "SKY FORGE",
      subtitle: "Sandbox",
      palette: ["#219ebc", "#8ecae6", "#ffb703"],
      icon: "⬡"
    })
  }
];

const modeMap = {
  "动作射击": "target",
  "策略战棋": "duel",
  "竞速": "race",
  "角色扮演": "story",
  "解谜": "riddle",
  "模拟经营": "builder",
  "生存建造": "builder",
  "卡牌对战": "duel",
  "体育竞技": "race",
  "恐怖冒险": "story",
  "像素冒险": "story",
  "沙盒创造": "builder"
};

const $ = (s) => document.querySelector(s);

const els = {
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
  userName: $("#user-name-display")
};

let activeGameId = null;
let activeCleanup = null;

function getUser() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_KEY)) || null;
  } catch {
    return null;
  }
}

function setUser(user) {
  if (user) {
    localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(AUTH_KEY);
  }
}

function getComments() {
  try {
    return JSON.parse(localStorage.getItem(COMMENT_KEY)) || {};
  } catch {
    return {};
  }
}

function saveComments(data) {
  localStorage.setItem(COMMENT_KEY, JSON.stringify(data));
}

function commentsFor(gameId) {
  return getComments()[gameId] || [];
}

function totalComments() {
  return Object.values(getComments()).reduce((sum, list) => sum + list.length, 0);
}

function modeOf(game) {
  return modeMap[game.genre] || "story";
}

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

function filteredGames() {
  const keyword = els.search.value.trim().toLowerCase();
  const genre = els.genre.value;
  const sort = els.sort.value;

  const list = games.filter((game) => {
    const text = `${game.name} ${game.genre} ${game.description}`.toLowerCase();
    return text.includes(keyword) && (genre === "all" || game.genre === genre);
  });

  list.sort((a, b) => {
    if (sort === "name") return a.name.localeCompare(b.name, "en");
    if (sort === "players") return b.players.localeCompare(a.players, "zh-CN");
    return b.rating - a.rating;
  });

  return list;
}

function renderGames() {
  const list = filteredGames();
  els.gameCount.textContent = list.length;
  els.commentCount.textContent = totalComments();

  if (!list.length) {
    els.grid.innerHTML = '<div class="empty-state">没有找到符合条件的游戏。</div>';
    return;
  }

  els.grid.innerHTML = list.map((game) => `
    <article class="game-card" data-id="${game.id}" tabindex="0">
      <div class="game-banner">
        <img class="cover-image" src="${game.image}" alt="${game.name} 封面图">
        <div class="game-banner-content">
          <div class="genre-chip">${game.genre}</div>
          <h3>${game.name}</h3>
        </div>
      </div>
      <div class="game-body">
        <div class="game-topline">
          <span class="rating-pill">${game.rating.toFixed(1)} / 5</span>
          <span class="tag">${modeOf(game)}</span>
        </div>
        <p>${game.description}</p>
        <div class="game-footer">
          <span>${game.players}</span>
          <span>${commentsFor(game.id).length} 条评论</span>
        </div>
        <div class="card-actions">
          <button class="button primary play-now" data-id="${game.id}" type="button">开始游戏</button>
          <button class="button ghost view-detail" data-id="${game.id}" type="button">查看详情</button>
        </div>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".play-now").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openDetail(btn.dataset.id, true);
    });
  });

  document.querySelectorAll(".view-detail").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openDetail(btn.dataset.id, false);
    });
  });

  document.querySelectorAll(".game-card").forEach((card) => {
    card.addEventListener("click", () => openDetail(card.dataset.id, false));
  });
}

function renderCommentList(gameId) {
  const listEl = $("#comment-list");
  const countEl = $("#detail-comment-count");
  const items = commentsFor(gameId);

  countEl.textContent = `${items.length} 条`;

  if (!items.length) {
    listEl.innerHTML = '<div class="empty-state">还没有评论，来成为第一个发言的玩家吧。</div>';
    return;
  }

  listEl.innerHTML = items.slice().reverse().map((item) => `
    <article class="comment-item">
      <div class="comment-meta">
        <strong>${item.name}</strong>
        <time>${item.date}</time>
      </div>
      <span class="rating-pill">${item.rating} 星</span>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function bindCommentForm(gameId) {
  const form = $("#comment-form");
  const name = $("#comment-name");
  const rating = $("#comment-rating");
  const text = $("#comment-text");
  const user = getUser();

  name.readOnly = !!user;
  name.value = user?.name || "";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const payload = {
      name: name.value.trim(),
      rating: rating.value,
      text: text.value.trim(),
      date: new Date().toLocaleDateString("zh-CN")
    };

    if (!payload.name || !payload.rating || !payload.text) return;

    const data = getComments();
    data[gameId] = [...(data[gameId] || []), payload];
    saveComments(data);
    renderCommentList(gameId);
    renderGames();
    form.reset();
    bindCommentForm(gameId);
  }, { once: true });
}

function clearMiniGame() {
  if (typeof activeCleanup === "function") {
    activeCleanup();
  }
  activeCleanup = null;
}

function bindLaunch(game) {
  $("#play-mode-label").textContent = `${modeOf(game)} 可玩模式`;
  $("#launch-game").addEventListener("click", () => renderMiniGame(game, $("#game-stage")));
}

function openDetail(gameId, autoPlay = false) {
  activeGameId = gameId;
  const game = games.find((g) => g.id === gameId);
  if (!game) return;

  clearMiniGame();

  const frag = els.tpl.content.cloneNode(true);
  frag.querySelector("#detail-image").src = game.image;
  frag.querySelector("#detail-image").alt = `${game.name} 封面图`;
  frag.querySelector("#detail-genre").textContent = game.genre;
  frag.querySelector("#detail-title").textContent = game.name;
  frag.querySelector("#detail-description").textContent = game.description;
  frag.querySelector("#detail-rating").textContent = `综合评分 ${game.rating.toFixed(1)}`;
  frag.querySelector("#detail-players").textContent = `玩家数 ${game.players}`;
  frag.querySelector("#detail-platform").textContent = `平台 ${game.platform}`;
  frag.querySelector("#detail-features").innerHTML = game.features.map((f) => `<li>${f}</li>`).join("");

  els.modalContent.innerHTML = "";
  els.modalContent.append(frag);

  renderCommentList(gameId);
  bindCommentForm(gameId);
  bindLaunch(game);

  els.modal.classList.remove("hidden");

  if (autoPlay) {
    renderMiniGame(game, $("#game-stage"));
  }
}

function closeDetail() {
  activeGameId = null;
  clearMiniGame();
  els.modal.classList.add("hidden");
}

function renderMiniGame(game, stage) {
  const mode = modeOf(game);
  if (mode === "target") return renderTarget(stage);
  if (mode === "race") return renderRace(stage);
  if (mode === "duel") return renderDuel(stage);
  if (mode === "riddle") return renderRiddle(stage);
  return renderBuilder(stage);
}

function renderTarget(stage) {
  stage.innerHTML = `
    <div class="game-status">
      <span>30 秒内点中蓝球得分，红球扣分</span>
      <span id="score">得分 0</span>
    </div>
    <div class="game-status">
      <span id="time">剩余 30 秒</span>
      <button class="button ghost" id="restart" type="button">重开</button>
    </div>
    <div class="target-board" id="board"></div>
  `;

  const board = $("#board");
  const scoreEl = $("#score");
  const timeEl = $("#time");
  const restart = $("#restart");

  let score = 0;
  let time = 30;
  let spawnTimer = null;
  let countTimer = null;

  function spawn() {
    board.innerHTML = "";
    for (let i = 0; i < 4; i += 1) {
      const bad = Math.random() < 0.35;
      const target = document.createElement("button");
      target.className = `target ${bad ? "bad" : "good"}`;
      target.textContent = bad ? "-2" : "+1";
      target.style.left = `${Math.random() * 260}px`;
      target.style.top = `${Math.random() * 170}px`;
      target.addEventListener("click", () => {
        score = Math.max(0, score + (bad ? -2 : 1));
        scoreEl.textContent = `得分 ${score}`;
        spawn();
      });
      board.appendChild(target);
    }
  }

  function start() {
    score = 0;
    time = 30;
    scoreEl.textContent = "得分 0";
    timeEl.textContent = "剩余 30 秒";
    clearInterval(spawnTimer);
    clearInterval(countTimer);
    spawn();
    spawnTimer = setInterval(spawn, 1400);
    countTimer = setInterval(() => {
      time -= 1;
      timeEl.textContent = `剩余 ${time} 秒`;
      if (time <= 0) {
        clearInterval(spawnTimer);
        clearInterval(countTimer);
        board.innerHTML = `<div class="empty-stage">游戏结束<br>最终得分：${score}</div>`;
      }
    }, 1000);
  }

  restart.addEventListener("click", start);
  start();

  activeCleanup = () => {
    clearInterval(spawnTimer);
    clearInterval(countTimer);
  };
}

function renderRace(stage) {
  stage.innerHTML = `
    <div class="instructions">加速会升热，冷却能降热，先到 100% 获胜。</div>
    <div class="game-status">
      <span id="yd">你的进度 0%</span>
      <span id="ht">热量 0%</span>
      <span id="ad">AI 进度 0%</span>
    </div>
    <div class="progress-bar"><div class="progress-fill" id="yb"></div></div>
    <div class="progress-bar"><div class="progress-fill" id="ab"></div></div>
    <div class="action-row">
      <button class="button primary" id="boost" type="button">加速</button>
      <button class="button secondary" id="cool" type="button">冷却</button>
      <button class="button ghost" id="reset-race" type="button">重开</button>
    </div>
    <div class="score-box" id="result">准备开始。</div>
  `;

  const yd = $("#yd");
  const ht = $("#ht");
  const ad = $("#ad");
  const yb = $("#yb");
  const ab = $("#ab");
  const result = $("#result");
  const boost = $("#boost");
  const cool = $("#cool");
  const reset = $("#reset-race");

  let you = 0;
  let ai = 0;
  let heat = 0;
  let timer = null;
  let done = false;

  function paint() {
    yb.style.width = `${you}%`;
    ab.style.width = `${ai}%`;
    yd.textContent = `你的进度 ${you}%`;
    ad.textContent = `AI 进度 ${ai}%`;
    ht.textContent = `热量 ${heat}%`;
  }

  function start() {
    you = 0;
    ai = 0;
    heat = 0;
    done = false;
    result.textContent = "准备开始。";
    paint();
    clearInterval(timer);
    timer = setInterval(() => {
      if (done) return;
      ai = Math.min(100, ai + 4 + Math.floor(Math.random() * 4));
      heat = Math.max(0, heat - 3);
      paint();
      if (ai >= 100) {
        done = true;
        result.textContent = "AI 获胜";
      }
    }, 800);
  }

  boost.addEventListener("click", () => {
    if (done) return;
    heat = Math.min(100, heat + 18);
    you = Math.min(100, you + (heat > 80 ? 2 : heat > 60 ? 5 : 9));
    if (heat >= 100) {
      heat = 55;
      you = Math.max(0, you - 8);
      result.textContent = "过热掉速";
    }
    paint();
    if (you >= 100) {
      done = true;
      clearInterval(timer);
      result.textContent = "你获胜";
    }
  });

  cool.addEventListener("click", () => {
    if (done) return;
    heat = Math.max(0, heat - 22);
    paint();
  });

  reset.addEventListener("click", start);
  start();

  activeCleanup = () => clearInterval(timer);
}

function renderDuel(stage) {
  stage.innerHTML = `
    <div class="instructions">6 回合内击败电脑。重击需要 2 点能量。</div>
    <div class="game-status">
      <span id="round">第 1 / 6 回合</span>
      <span id="hp">你 18 : 电脑 18</span>
      <span id="en">能量 1 : 电脑 1</span>
    </div>
    <div class="duel-actions">
      <button class="duel-button" data-a="attack" type="button">进攻</button>
      <button class="duel-button" data-a="guard" type="button">格挡</button>
      <button class="duel-button" data-a="charge" type="button">蓄力</button>
      <button class="duel-button" data-a="heavy" type="button">重击</button>
    </div>
    <div class="log-box" id="log">开始对战。</div>
  `;

  const round = $("#round");
  const hp = $("#hp");
  const en = $("#en");
  const log = $("#log");

  let playerHp = 18;
  let enemyHp = 18;
  let playerEn = 1;
  let enemyEn = 1;
  let turn = 1;

  const text = {
    attack: "进攻",
    guard: "格挡",
    charge: "蓄力",
    heavy: "重击"
  };

  function update() {
    round.textContent = `第 ${Math.min(turn, 6)} / 6 回合`;
    hp.textContent = `你 ${playerHp} : 电脑 ${enemyHp}`;
    en.textContent = `能量 ${playerEn} : 电脑 ${enemyEn}`;
  }

  document.querySelectorAll(".duel-button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const playerAction = btn.dataset.a;
      if (turn > 6 || playerHp <= 0 || enemyHp <= 0) return;

      if (playerAction === "heavy" && playerEn < 2) {
        log.textContent = "重击至少需要 2 点能量。";
        return;
      }

      const options = enemyEn >= 2
        ? ["attack", "guard", "charge", "heavy"]
        : ["attack", "guard", "charge"];
      const enemyAction = options[Math.floor(Math.random() * options.length)];
      const logs = [];

      if (playerAction === "charge") playerEn += 1;
      if (enemyAction === "charge") enemyEn += 1;

      if (playerAction === "attack") {
        const dmg = enemyAction === "guard" ? 1 : 3;
        enemyHp -= dmg;
        logs.push(`你造成 ${dmg} 点伤害`);
      }

      if (enemyAction === "attack") {
        const dmg = playerAction === "guard" ? 1 : 3;
        playerHp -= dmg;
        logs.push(`电脑造成 ${dmg} 点伤害`);
      }

      if (playerAction === "heavy") {
        const dmg = enemyAction === "guard" ? 2 : 6;
        enemyHp -= dmg;
        playerEn -= 2;
        logs.push(`你的重击造成 ${dmg} 点伤害`);
      }

      if (enemyAction === "heavy") {
        const dmg = playerAction === "guard" ? 2 : 6;
        playerHp -= dmg;
        enemyEn -= 2;
        logs.push(`电脑重击造成 ${dmg} 点伤害`);
      }

      if (playerAction === "guard") playerEn = Math.min(3, playerEn + 1);
      if (enemyAction === "guard") enemyEn = Math.min(3, enemyEn + 1);

      turn += 1;
      update();
      log.textContent = `你选择${text[playerAction]}，电脑选择${text[enemyAction]}。${logs.join("，")}。`;

      if (turn > 6 || playerHp <= 0 || enemyHp <= 0) {
        log.textContent += playerHp === enemyHp ? " 平局。" : playerHp > enemyHp ? " 你获胜。" : " 电脑获胜。";
      }
    });
  });

  update();
}

function renderRiddle(stage) {
  const bank = [
    ["147", ["总和为 12", "第二位比第一位大 3", "第三位最大"]],
    ["259", ["总和为 16", "第一位是偶数", "最后一位比第二位大 4"]],
    ["368", ["总和为 17", "前两位差值 3", "最后一位不是奇数"]]
  ];
  const puzzle = bank[Math.floor(Math.random() * bank.length)];
  let attempts = 5;

  stage.innerHTML = `
    <div class="instructions">根据线索破解 3 位密码，只有 5 次机会。</div>
    <div class="code-panel">
      <div>${puzzle[1].map((c) => `<div>${c}</div>`).join("")}</div>
      <form id="rf" class="auth-form">
        <input id="ri" type="text" maxlength="3" placeholder="输入 3 位数字" required>
        <button class="button primary full" type="submit">提交猜测</button>
      </form>
      <div class="game-status">
        <span id="ra">剩余次数 ${attempts}</span>
        <span id="fb" class="status-pill">等待输入</span>
      </div>
      <div class="code-display" id="rh"></div>
    </div>
  `;

  $("#rf").addEventListener("submit", (e) => {
    e.preventDefault();
    const raw = $("#ri").value.trim();
    if (!/^\d{3}$/.test(raw) || attempts <= 0) return;

    let exact = 0;
    let present = 0;

    raw.split("").forEach((d, i) => {
      if (d === puzzle[0][i]) exact += 1;
      else if (puzzle[0].includes(d)) present += 1;
    });

    const item = document.createElement("span");
    item.textContent = `${raw} | 对 ${exact} 位 / 错位 ${present} 位`;
    $("#rh").appendChild(item);

    attempts -= 1;
    $("#ra").textContent = `剩余次数 ${attempts}`;

    if (exact === 3) {
      $("#fb").textContent = "破解成功";
      $("#ri").disabled = true;
      return;
    }

    $("#fb").textContent = `对 ${exact} 位，错位 ${present} 位`;

    if (attempts === 0) {
      $("#fb").textContent = `挑战失败，答案 ${puzzle[0]}`;
      $("#ri").disabled = true;
    }

    $("#rf").reset();
  });
}

function renderBuilder(stage) {
  stage.innerHTML = `
    <div class="instructions">6 回合内完成 4 次建造，能源见底直接失败。</div>
    <div class="game-status">
      <span id="br">回合 1 / 6</span>
      <span id="bs">金属 2 · 能源 2</span>
      <span id="bc">核心进度 0 / 4</span>
    </div>
    <div class="builder-actions">
      <button class="builder-button" id="mine" type="button">采矿 +2 金属</button>
      <button class="builder-button" id="power" type="button">发电 +2 能源</button>
      <button class="builder-button" id="build" type="button">建造 -2 金属 -1 能源</button>
    </div>
    <div class="score-box" id="blog">开始经营。</div>
  `;

  const br = $("#br");
  const bs = $("#bs");
  const bc = $("#bc");
  const blog = $("#blog");

  let metal = 2;
  let energy = 2;
  let core = 0;
  let round = 1;
  let done = false;

  function paint() {
    br.textContent = `回合 ${Math.min(round, 6)} / 6`;
    bs.textContent = `金属 ${metal} · 能源 ${energy}`;
    bc.textContent = `核心进度 ${core} / 4`;
  }

  function endTurn() {
    if (done) return;
    energy -= 1;

    if (energy < 0) {
      done = true;
      blog.textContent = "能源断档，挑战失败。";
      paint();
      return;
    }

    round += 1;
    paint();

    if (core >= 4) {
      done = true;
      blog.textContent = "你完成了基地建造，挑战成功。";
      return;
    }

    if (round > 6) {
      done = true;
      blog.textContent = core >= 4 ? "挑战成功。" : "回合耗尽，挑战失败。";
    }
  }

  $("#mine").addEventListener("click", () => {
    if (done) return;
    metal += 2;
    blog.textContent = "你获得了金属。";
    endTurn();
  });

  $("#power").addEventListener("click", () => {
    if (done) return;
    energy += 2;
    blog.textContent = "你补充了能源。";
    endTurn();
  });

  $("#build").addEventListener("click", () => {
    if (done) return;
    if (metal < 2 || energy < 1) {
      blog.textContent = "资源不足。";
      return;
    }
    metal -= 2;
    energy -= 1;
    core += 1;
    blog.textContent = "你推进了建造进度。";
    endTurn();
  });

  paint();
}

function initGenres() {
  const genres = [...new Set(games.map((g) => g.genre))].sort((a, b) => a.localeCompare(b, "zh-CN"));
  genres.forEach((genre) => {
    const option = document.createElement("option");
    option.value = genre;
    option.textContent = genre;
    els.genre.append(option);
  });
  els.genreCount.textContent = genres.length;
}

els.authForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = els.authName.value.trim();
  const password = els.authPassword.value.trim();

  if (!name || password.length < 4) {
    els.authStatus.textContent = "请输入昵称，并确保密码至少 4 位。";
    return;
  }

  setUser({ name, password });
  renderUser();
  closeAuth();
});

els.logout.addEventListener("click", () => {
  setUser(null);
  renderUser();
  els.authStatus.textContent = "你已退出登录。";
});

els.login.addEventListener("click", openAuth);
els.authClose.addEventListener("click", closeAuth);
els.authExit.addEventListener("click", closeAuth);
els.search.addEventListener("input", renderGames);
els.genre.addEventListener("change", renderGames);
els.sort.addEventListener("change", renderGames);
els.random.addEventListener("click", () => {
  const list = filteredGames();
  if (!list.length) return;
  openDetail(list[Math.floor(Math.random() * list.length)].id, true);
});
els.modalClose.addEventListener("click", closeDetail);
els.modalExit.addEventListener("click", closeDetail);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (activeGameId) closeDetail();
    if (!els.authModal.classList.contains("hidden")) closeAuth();
  }
});

renderUser();
initGenres();
renderGames();


renderUser();
initGenres();
renderGames();
