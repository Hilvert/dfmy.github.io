const AUTH_KEY = "game_site_auth_v2";
const ACCOUNTS_KEY = "game_site_accounts_v1";
const SESSION_KEY = "game_site_session_v1";
const COMMENT_KEY = "game_site_comments_v2";
const SETTINGS_KEY = "game_site_settings_v1";
const EASTER_EGG_URL = " https://hilvert.github.io/eggegg/";
const EASTER_EGG_ALT_TARGET = 5;
const EASTER_EGG_ALT_WINDOW = 2500;

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
  },
  {
    id: "pulse-lock",
    name: "Pulse Lock",
    genre: "节奏校准",
    rating: 4.7,
    players: "单人",
    platform: "网页 / 手机",
    description: "等指针进入高亮区再按下，连续命中即可解锁脉冲核心。",
    features: ["节奏判定", "连击计分", "短局挑战"],
    mode: "timing",
    image: createPoster({ title: "PULSE LOCK", subtitle: "Timing Core", palette: ["#081c15", "#2d6a4f", "#95d5b2"], icon: "A" })
  },
  {
    id: "neon-maze",
    name: "Neon Maze",
    genre: "迷宫突围",
    rating: 4.8,
    players: "单人",
    platform: "网页 / PC",
    description: "在霓虹迷宫中规划路线，避开墙体快速抵达终点。",
    features: ["方向移动", "迷宫路线", "步数限制"],
    mode: "maze",
    image: createPoster({ title: "NEON MAZE", subtitle: "Maze Escape", palette: ["#03045e", "#6a00f4", "#ff70a6"], icon: "A" })
  },
  {
    id: "sky-stack",
    name: "Sky Stack",
    genre: "高塔堆叠",
    rating: 4.6,
    players: "单人",
    platform: "网页 / 手机",
    description: "抓准时机落下平台，把空中塔台一层层堆到目标高度。",
    features: ["时机点击", "高度累计", "失误扣层"],
    mode: "stack",
    image: createPoster({ title: "SKY STACK", subtitle: "Tower Build", palette: ["#14213d", "#3a86ff", "#ffd166"], icon: "A" })
  },
  {
    id: "gem-swap",
    name: "Gem Swap",
    genre: "交换解阵",
    rating: 4.7,
    players: "单人",
    platform: "网页 / 手机",
    description: "交换相邻符号，让整行整列尽快回到正确顺序。",
    features: ["相邻交换", "顺序整理", "步数挑战"],
    mode: "swap",
    image: createPoster({ title: "GEM SWAP", subtitle: "Swap Puzzle", palette: ["#1a1a40", "#6930c3", "#80ffdb"], icon: "A" })
  },
  {
    id: "drift-lane",
    name: "Drift Lane",
    genre: "变道闪避",
    rating: 4.8,
    players: "单人",
    platform: "网页 / PC",
    description: "在三条高速车道间切换，躲开迎面障碍撑到终点。",
    features: ["左右变道", "障碍闪避", "存活通关"],
    mode: "lane",
    image: createPoster({ title: "DRIFT LANE", subtitle: "Lane Dodge", palette: ["#1b263b", "#415a77", "#e0e1dd"], icon: "A" })
  },
  {
    id: "vault-zero",
    name: "Vault Zero",
    genre: "终端解锁",
    rating: 4.7,
    players: "单人",
    platform: "网页 / 手机",
    description: "点击线路节点联动周围电路，在限定步数内让整块终端同步稳定。",
    features: ["节点联动", "步数限制", "全盘配平"],
    mode: "vault",
    image: createPoster({ title: "VAULT ZERO", subtitle: "Terminal Lock", palette: ["#0f172a", "#1d4ed8", "#38bdf8"], icon: "B" })
  },
  {
    id: "rune-twins",
    name: "Rune Twins",
    genre: "符文记忆",
    rating: 4.6,
    players: "单人",
    platform: "网页",
    description: "观察符文闪烁顺序后原样复现，序列会一轮轮变长。",
    features: ["顺序记忆", "轮次递增", "失误即败"],
    mode: "rune",
    image: createPoster({ title: "RUNE TWINS", subtitle: "Memory Match", palette: ["#3f3cbb", "#6366f1", "#c4b5fd"], icon: "B" })
  },
  {
    id: "steel-clash",
    name: "Steel Clash",
    genre: "机甲对决",
    rating: 4.8,
    players: "单人",
    platform: "网页 / PC",
    description: "通过推进、压制、充能和修复掌控战线，把敌军逼回基地。",
    features: ["战线推进", "能量管理", "战术回合"],
    mode: "clash",
    image: createPoster({ title: "STEEL CLASH", subtitle: "Mech Duel", palette: ["#1f2937", "#ef4444", "#f59e0b"], icon: "B" })
  },
  {
    id: "orbit-pulse",
    name: "Orbit Pulse",
    genre: "轨道校准",
    rating: 4.7,
    players: "单人",
    platform: "网页 / 手机",
    description: "切换不同颜色脉冲的导向开关，让它们落入正确轨道出口。",
    features: ["颜色分流", "实时防守", "波次挑战"],
    mode: "orbit",
    image: createPoster({ title: "ORBIT PULSE", subtitle: "Timing Orbit", palette: ["#052e16", "#0f766e", "#5eead4"], icon: "B" })
  },
  {
    id: "metro-shift",
    name: "Metro Shift",
    genre: "隧道穿梭",
    rating: 4.7,
    players: "单人",
    platform: "网页 / PC",
    description: "根据来车类型分配轨道，避免超载并完成同类编组发车。",
    features: ["轨道调度", "列车编组", "失误管理"],
    mode: "metro",
    image: createPoster({ title: "METRO SHIFT", subtitle: "Tunnel Dash", palette: ["#172554", "#2563eb", "#93c5fd"], icon: "B" })
  },
  {
    id: "relay-surge",
    name: "Relay Surge",
    genre: "能量接力",
    rating: 4.7,
    players: "单人",
    platform: "网页 / 手机",
    description: "按顺序点击能量节点，把电流从起点一路传到终点。",
    features: ["顺序点击", "节点接力", "失误重来"],
    mode: "relay",
    image: createPoster({ title: "RELAY SURGE", subtitle: "Energy Relay", palette: ["#0f172a", "#0ea5e9", "#22c55e"], icon: "C" })
  },
  {
    id: "glyph-decode",
    name: "Glyph Decode",
    genre: "图形破译",
    rating: 4.6,
    players: "单人",
    platform: "网页",
    description: "观察符号线索后，从三段密码片段中选出唯一正确答案。",
    features: ["图形线索", "唯一答案", "连续推理"],
    mode: "decode",
    image: createPoster({ title: "GLYPH DECODE", subtitle: "Cipher Symbols", palette: ["#3b0764", "#7c3aed", "#f0abfc"], icon: "C" })
  },
  {
    id: "balance-foundry",
    name: "Balance Foundry",
    genre: "天平配重",
    rating: 4.7,
    players: "单人",
    platform: "网页 / PC",
    description: "在有限回合内投放不同配重，让熔炉天平恢复平衡。",
    features: ["重量计算", "回合限制", "误差控制"],
    mode: "balance",
    image: createPoster({ title: "BALANCE FOUNDRY", subtitle: "Weight Forge", palette: ["#3f1d0f", "#ea580c", "#facc15"], icon: "C" })
  },
  {
    id: "rescue-route",
    name: "Rescue Route",
    genre: "救援路线",
    rating: 4.8,
    players: "单人",
    platform: "网页 / 手机",
    description: "每一段路都要从三条通道里挑出唯一安全路线，把队伍送到终点。",
    features: ["路线判断", "逐段推进", "容错有限"],
    mode: "rescue",
    image: createPoster({ title: "RESCUE ROUTE", subtitle: "Safe Passage", palette: ["#082f49", "#0891b2", "#67e8f9"], icon: "C" })
  },
  {
    id: "pulse-grid",
    name: "Pulse Grid",
    genre: "网格脉冲",
    rating: 4.7,
    players: "单人",
    platform: "网页 / 手机",
    description: "按提示节奏点亮指定格子，让整片脉冲网格完成同步。",
    features: ["节奏输入", "网格同步", "轮次提升"],
    mode: "pulsegrid",
    image: createPoster({ title: "PULSE GRID", subtitle: "Rhythm Matrix", palette: ["#111827", "#2563eb", "#a5b4fc"], icon: "C" })
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
  authLogin: $("#auth-login"),
  authRegister: $("#auth-register"),
  login: $("#login-trigger"),
  settingsTrigger: $("#settings-trigger"),
  settingsModal: $("#settings-modal"),
  settingsClose: $("#settings-close"),
  settingsExit: $("#settings-exit"),
  themeToggle: $("#theme-toggle"),
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
let altPressCount = 0;
let altWindowTimer = 0;

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

const getAccounts = () => {
  const accounts = readStorageJSON(ACCOUNTS_KEY, {});
  return accounts && typeof accounts === "object" && !Array.isArray(accounts) ? accounts : {};
};

const saveAccounts = (value) => writeStorageJSON(ACCOUNTS_KEY, value);

const getSession = () => {
  const session = readStorageJSON(SESSION_KEY, null);
  if (!session || typeof session !== "object") return null;
  const name = typeof session.name === "string" ? session.name.trim() : "";
  if (!name) return null;
  return {
    name,
    loggedInAt: typeof session.loggedInAt === "string" ? session.loggedInAt : "",
    updatedAt: typeof session.updatedAt === "string" ? session.updatedAt : ""
  };
};

const setSession = (session) => {
  if (!session) {
    removeStorageItem(SESSION_KEY);
    return;
  }
  writeStorageJSON(SESSION_KEY, {
    name: session.name.trim(),
    loggedInAt: session.loggedInAt || new Date().toISOString(),
    updatedAt: session.updatedAt || new Date().toISOString()
  });
};

const clearSession = () => removeStorageItem(SESSION_KEY);

const migrateLegacyAuth = () => {
  const accounts = getAccounts();
  const session = getSession();
  if (Object.keys(accounts).length || session) return;
  const legacy = readStorageJSON(AUTH_KEY, null);
  if (!legacy || typeof legacy !== "object") return;
  const name = typeof legacy.name === "string" ? legacy.name.trim() : "";
  const password = typeof legacy.password === "string" ? legacy.password : "";
  if (!name || password.length < 4) return;
  const nextAccounts = {
    [name]: {
      name,
      password,
      createdAt: typeof legacy.updatedAt === "string" ? legacy.updatedAt : new Date().toISOString(),
      updatedAt: typeof legacy.updatedAt === "string" ? legacy.updatedAt : new Date().toISOString()
    }
  };
  saveAccounts(nextAccounts);
  setSession({
    name,
    loggedInAt: new Date().toISOString(),
    updatedAt: typeof legacy.updatedAt === "string" ? legacy.updatedAt : new Date().toISOString()
  });
};

const getCurrentUser = () => {
  const session = getSession();
  if (!session) return null;
  const account = getAccounts()[session.name];
  if (!account || typeof account !== "object") return null;
  const name = typeof account.name === "string" ? account.name.trim() : "";
  const password = typeof account.password === "string" ? account.password : "";
  if (!name || password.length < 4) return null;
  return {
    name,
    password,
    createdAt: typeof account.createdAt === "string" ? account.createdAt : "",
    updatedAt: typeof account.updatedAt === "string" ? account.updatedAt : ""
  };
};

const normalizeComment = (item) => {
  if (!item || typeof item !== "object") return null;
  const name = typeof item.name === "string" && item.name.trim() ? item.name.trim() : "游客";
  const text = typeof item.text === "string" ? item.text.trim() : "";
  const rating = Number(item.rating);
  const time = typeof item.time === "string" && item.time.trim() ? item.time.trim() : "时间未知";
  if (!text || !Number.isInteger(rating) || rating < 1 || rating > 5) return null;
  return { name, text, rating, time };
};

const getComments = () => {
  const comments = readStorageJSON(COMMENT_KEY, {});
  return comments && typeof comments === "object" && !Array.isArray(comments) ? comments : {};
};

const saveComments = (value) => writeStorageJSON(COMMENT_KEY, value);
const getSettings = () => {
  const settings = readStorageJSON(SETTINGS_KEY, { theme: "dark" });
  return settings && typeof settings === "object" && !Array.isArray(settings)
    ? { theme: settings.theme === "light" ? "light" : "dark" }
    : { theme: "dark" };
};
const saveSettings = (value) => writeStorageJSON(SETTINGS_KEY, value);
const commentsFor = (id) => {
  const list = getComments()[id];
  if (!Array.isArray(list)) return [];
  return list.map(normalizeComment).filter(Boolean);
};
const totalComments = () => games.reduce((sum, game) => sum + commentsFor(game.id).length, 0);

function setAuthStatus(message) {
  els.authStatus.textContent = message;
}

function applyTheme(theme) {
  document.body.dataset.theme = theme === "light" ? "light" : "dark";
}

function openSettings() {
  const { theme } = getSettings();
  els.themeToggle.checked = theme === "light";
  els.settingsModal.classList.remove("hidden");
}

function closeSettings() {
  els.settingsModal.classList.add("hidden");
}

function renderUser() {
  const user = getCurrentUser();
  els.userName.textContent = user ? user.name : "游客";
  els.login.textContent = user ? "账号管理" : "账号登录";
  setAuthStatus(user ? `当前账号：${user.name}。评论将自动使用该账号名。` : "当前未登录，将以游客身份浏览和评论。");
}

function openAuth() {
  const session = getSession();
  els.authName.value = session?.name || "";
  els.authPassword.value = "";
  setAuthStatus(session ? `当前账号：${session.name}。如需切换账号，请输入正确密码登录。` : "当前未登录，将以游客身份浏览和评论。");
  els.authModal.classList.remove("hidden");
}

function closeAuth() {
  els.authModal.classList.add("hidden");
}

function renderCommentAccount(root) {
  const user = getCurrentUser();
  const accountStatus = root.querySelector("#comment-account-status");
  if (!accountStatus) return;
  accountStatus.textContent = user ? `当前将以账号 ${user.name} 发布评论。` : "当前以游客身份发表评论。";
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

function enterStageFullscreen(stage) {
  if (!stage) return;
  const request = stage.requestFullscreen || stage.webkitRequestFullscreen || stage.msRequestFullscreen;
  if (typeof request === "function") {
    request.call(stage);
  }
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
  const countNode = root.querySelector("#detail-comment-count");
  const listNode = root.querySelector("#comment-list");
  countNode.textContent = `${list.length} 条`;
  listNode.innerHTML = "";
  if (!list.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "还没有评论，来发布第一条吧。";
    listNode.append(empty);
    return;
  }

  list.forEach((item) => {
    const article = document.createElement("article");
    article.className = "comment-item";

    const meta = document.createElement("div");
    meta.className = "comment-meta";

    const name = document.createElement("strong");
    name.textContent = item.name;

    const time = document.createElement("time");
    time.textContent = item.time;

    const rating = document.createElement("span");
    rating.className = "rating-pill";
    rating.textContent = "★".repeat(item.rating);

    const text = document.createElement("p");
    text.textContent = item.text;

    meta.append(name, time);
    article.append(meta, rating, text);
    listNode.append(article);
  });
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

  const root = els.tpl.content.firstElementChild.cloneNode(true);

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

  renderCommentAccount(root);
  renderComments(game.id, root);

  root.querySelector("#comment-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const user = getCurrentUser();
    const name = user?.name || "游客";
    const rating = Number(root.querySelector("#comment-rating").value);
    const text = root.querySelector("#comment-text").value.trim();
    if (!Number.isInteger(rating) || rating < 1 || rating > 5 || !text) return;

    const comments = getComments();
    const current = Array.isArray(comments[game.id]) ? comments[game.id].map(normalizeComment).filter(Boolean) : [];
    comments[game.id] = [
      {
        name,
        rating,
        text,
        time: new Date().toLocaleString("zh-CN", { hour12: false })
      },
      ...current
    ];
    if (!saveComments(comments)) {
      const listNode = root.querySelector("#comment-list");
      if (listNode) {
        listNode.innerHTML = '<div class="empty-state">评论保存失败，请检查浏览器是否禁用了本地存储。</div>';
      }
      return;
    }

    root.querySelector("#comment-text").value = "";
    root.querySelector("#comment-rating").value = "";
    renderCommentAccount(root);
    renderComments(game.id, root);
    updateStats();
    renderGames();
  });

  const launchButton = root.querySelector("#launch-game");
  const expandButton = root.querySelector("#expand-stage");
  const stage = root.querySelector("#game-stage");
  if (expandButton) {
    expandButton.addEventListener("click", () => {
      enterStageFullscreen(stage);
    });
  }
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

  els.modalContent.replaceChildren(root);
  els.modal.classList.remove("hidden");
}

function closeGame() {
  els.modal.classList.add("hidden");
  activeGameId = null;
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
  if (game.mode === "cards") return playCards(stage);
  if (game.mode === "timing") return playTiming(stage);
  if (game.mode === "maze") return playMaze(stage);
  if (game.mode === "stack") return playStack(stage);
  if (game.mode === "swap") return playSwap(stage);
  if (game.mode === "vault") return playVault(stage);
  if (game.mode === "rune") return playRune(stage);
  if (game.mode === "clash") return playClash(stage);
  if (game.mode === "orbit") return playOrbit(stage);
  if (game.mode === "metro") return playMetro(stage);
  if (game.mode === "relay") return playRelay(stage);
  if (game.mode === "decode") return playDecode(stage);
  if (game.mode === "balance") return playBalance(stage);
  if (game.mode === "rescue") return playRescue(stage);
  if (game.mode === "pulsegrid") return playPulseGrid(stage);
  return playLane(stage);
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

function playVault(stage) {
  const size = 3;
  let moves = 8;
  let activeCount = 0;
  let finished = false;
  let cells = [];
  const indexOf = (row, col) => row * size + col;
  const neighbors = (row, col) => [
    [row, col],
    [row - 1, col],
    [row + 1, col],
    [row, col - 1],
    [row, col + 1]
  ].filter(([nextRow, nextCol]) => nextRow >= 0 && nextRow < size && nextCol >= 0 && nextCol < size);
  const createBoard = () => {
    const next = Array.from({ length: size * size }, () => Math.random() > 0.5);
    if (next.every(Boolean) || next.every((value) => !value)) return createBoard();
    return next;
  };
  cells = createBoard();
  stage.innerHTML = `
    <div class="play-stage">
      <div class="score-box">点击节点会联动周围线路，在 8 步内让整块终端全部亮起或全部熄灭。</div>
      <div class="status-line">
        <span class="status-pill">剩余步数<strong id="vault-moves">${moves}</strong></span>
        <span class="status-pill">激活节点<strong id="vault-count">0</strong>/9</span>
      </div>
      <div class="vault-grid" id="vault-grid"></div>
      <div class="log-box" id="vault-log">终端待校准。</div>
    </div>
  `;
  const grid = stage.querySelector("#vault-grid");
  const movesNode = stage.querySelector("#vault-moves");
  const countNode = stage.querySelector("#vault-count");
  const log = stage.querySelector("#vault-log");

  const finish = (text) => {
    finished = true;
    log.textContent = text;
    grid.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });
  };

  const render = () => {
    activeCount = cells.filter(Boolean).length;
    countNode.textContent = String(activeCount);
    movesNode.textContent = String(moves);
    grid.innerHTML = cells.map((active, index) => `
      <button class="vault-cell${active ? " active" : ""}" data-index="${index}" type="button">${active ? "通" : "断"}</button>
    `).join("");
    grid.querySelectorAll(".vault-cell").forEach((button) => {
      button.addEventListener("click", () => {
        if (finished || moves <= 0) return;
        const index = Number(button.dataset.index);
        const row = Math.floor(index / size);
        const col = index % size;
        neighbors(row, col).forEach(([nextRow, nextCol]) => {
          const nextIndex = indexOf(nextRow, nextCol);
          cells[nextIndex] = !cells[nextIndex];
        });
        moves -= 1;
        render();
        if (cells.every(Boolean) || cells.every((value) => !value)) {
          finish("终端线路同步成功，保险柜已解锁。");
          return;
        }
        if (moves <= 0) finish("步数耗尽，终端仍未稳定。");
      });
    });
  };

  render();
  return () => {};
}

function playRune(stage) {
  const runes = ["ᚠ", "ᚢ", "ᚱ", "ᚲ"];
  const targetRounds = 5;
  let round = 1;
  let sequence = [];
  let inputIndex = 0;
  let locked = true;
  let flashTimer = 0;
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">回合<strong id="rune-round">${round}</strong>/${targetRounds}</span>
        <span class="status-pill">序列长度<strong id="rune-length">0</strong></span>
      </div>
      <div class="score-box" id="rune-status">观察符文闪烁顺序。</div>
      <div class="rune-grid" id="rune-grid"></div>
      <div class="log-box" id="rune-log">成功复现 5 轮即可通关。</div>
    </div>
  `;
  const roundNode = stage.querySelector("#rune-round");
  const lengthNode = stage.querySelector("#rune-length");
  const status = stage.querySelector("#rune-status");
  const grid = stage.querySelector("#rune-grid");
  const log = stage.querySelector("#rune-log");

  const render = (activeIndex = -1) => {
    roundNode.textContent = String(round);
    lengthNode.textContent = String(sequence.length);
    grid.innerHTML = runes.map((rune, index) => `
      <button class="rune-button${activeIndex === index ? " flash" : ""}" data-index="${index}" type="button">${rune}</button>
    `).join("");
    grid.querySelectorAll(".rune-button").forEach((button) => {
      button.addEventListener("click", () => {
        if (locked) return;
        const index = Number(button.dataset.index);
        if (sequence[inputIndex] !== index) {
          locked = true;
          status.textContent = "符文顺序出错。";
          log.textContent = "遗迹回路中断，挑战失败。";
          render();
          grid.querySelectorAll("button").forEach((node) => {
            node.disabled = true;
          });
          return;
        }
        inputIndex += 1;
        status.textContent = `已输入 ${inputIndex}/${sequence.length}`;
        if (inputIndex < sequence.length) return;
        if (round >= targetRounds) {
          locked = true;
          status.textContent = "全部顺序复现完成。";
          log.textContent = "双子符文被完全唤醒。";
          render();
          grid.querySelectorAll("button").forEach((node) => {
            node.disabled = true;
          });
          return;
        }
        round += 1;
        status.textContent = "顺序正确，准备下一轮。";
        window.setTimeout(() => {
          sequence.push(Math.floor(Math.random() * runes.length));
          inputIndex = 0;
          showSequence();
        }, 500);
      });
    });
  };

  const showSequence = () => {
    locked = true;
    let step = 0;
    render();
    status.textContent = "观察中……";
    const flashNext = () => {
      if (step >= sequence.length) {
        render();
        status.textContent = "按顺序点击符文。";
        locked = false;
        return;
      }
      render(sequence[step]);
      flashTimer = window.setTimeout(() => {
        render();
        step += 1;
        flashTimer = window.setTimeout(flashNext, 220);
      }, 420);
    };
    flashNext();
  };

  sequence = [Math.floor(Math.random() * runes.length), Math.floor(Math.random() * runes.length)];
  showSequence();
  return () => clearTimeout(flashTimer);
}

function playClash(stage) {
  let front = 3;
  let shield = 3;
  let energy = 0;
  let turn = 1;
  const maxTurn = 8;
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">回合<strong id="clash-turn">${turn}</strong>/${maxTurn}</span>
        <span class="status-pill">护盾<strong id="clash-shield">${shield}</strong></span>
        <span class="status-pill">能量<strong id="clash-energy">${energy}</strong></span>
      </div>
      <div class="battle-line" id="battle-line"></div>
      <div class="duel-grid">
        <button class="duel-option" data-act="push" type="button">推进</button>
        <button class="duel-option" data-act="suppress" type="button">压制</button>
        <button class="duel-option" data-act="charge" type="button">充能</button>
        <button class="duel-option" data-act="repair" type="button">修复</button>
      </div>
      <div class="log-box" id="clash-log">把战线推到敌方基地即可获胜。</div>
    </div>
  `;
  const turnNode = stage.querySelector("#clash-turn");
  const shieldNode = stage.querySelector("#clash-shield");
  const energyNode = stage.querySelector("#clash-energy");
  const line = stage.querySelector("#battle-line");
  const log = stage.querySelector("#clash-log");
  const buttons = stage.querySelectorAll("[data-act]");

  const disable = () => buttons.forEach((button) => {
    button.disabled = true;
  });

  const render = () => {
    turnNode.textContent = String(turn);
    shieldNode.textContent = String(shield);
    energyNode.textContent = String(energy);
    line.innerHTML = Array.from({ length: 7 }, (_, index) => `<div class="battle-cell${index === front ? " front" : ""}"></div>`).join("");
  };

  const finish = (text) => {
    log.textContent = text;
    disable();
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.act;
      const enemyAction = ["push", "push", "charge", "suppress"][Math.floor(Math.random() * 4)];
      let pushed = 0;
      if (action === "charge") energy += 1;
      if (action === "repair") shield = Math.min(4, shield + 1);
      if (action === "push") pushed += energy > 0 ? 2 : 1;
      if (action === "suppress") pushed += enemyAction === "push" ? 1 : 0;
      if (enemyAction === "charge") shield = Math.max(0, shield - 0);
      if (enemyAction === "push") pushed -= action === "suppress" ? 0 : 1;
      if (action === "push" && energy > 0) energy -= 1;
      if (enemyAction === "suppress" && action === "repair") shield = Math.max(1, shield - 1);
      front = Math.max(0, Math.min(6, front + pushed));
      if (enemyAction === "push" && action !== "suppress" && pushed <= 0) shield -= 1;
      log.textContent = `你选择${button.textContent}，敌军执行${enemyAction === "push" ? "推进" : enemyAction === "suppress" ? "压制" : enemyAction === "charge" ? "充能" : "修复"}。`;
      render();
      if (front >= 6) {
        finish("敌军基地被你压制，机甲战线获胜。");
        return;
      }
      if (front <= 0 || shield <= 0) {
        finish("我方战线崩溃，推进失败。");
        return;
      }
      if (turn >= maxTurn) {
        finish(front >= 4 ? "时间结束，但你守住了优势。" : "回合耗尽，未能拿下战线。");
        return;
      }
      turn += 1;
      render();
    });
  });

  render();
  return () => {};
}

function playOrbit(stage) {
  let wave = 1;
  let stability = 3;
  let correctLane = Math.floor(Math.random() * 3);
  let selectedLane = 1;
  let progress = 0;
  let currentColor = ["赤", "蓝", "绿"][Math.floor(Math.random() * 3)];
  let tick = 0;
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">波次<strong id="orbit-wave">${wave}</strong>/8</span>
        <span class="status-pill">稳定度<strong id="orbit-stability">${stability}</strong></span>
      </div>
      <div class="score-box" id="orbit-status">将 ${currentColor} 色脉冲导入正确轨道。</div>
      <div class="orbit-board">
        <div class="orbit-lane"><div class="orbit-pulse" id="orbit-pulse"></div></div>
        <div class="orbit-targets">
          <button class="resource-button orbit-target active" data-lane="0" type="button">轨道 1</button>
          <button class="resource-button orbit-target" data-lane="1" type="button">轨道 2</button>
          <button class="resource-button orbit-target" data-lane="2" type="button">轨道 3</button>
        </div>
      </div>
      <div class="log-box" id="orbit-log">守住 8 波脉冲即可完成轨道校准。</div>
    </div>
  `;
  const waveNode = stage.querySelector("#orbit-wave");
  const stabilityNode = stage.querySelector("#orbit-stability");
  const status = stage.querySelector("#orbit-status");
  const pulse = stage.querySelector("#orbit-pulse");
  const log = stage.querySelector("#orbit-log");
  const buttons = stage.querySelectorAll(".orbit-target");

  const paint = () => {
    waveNode.textContent = String(wave);
    stabilityNode.textContent = String(stability);
    pulse.style.top = `${progress}%`;
    pulse.style.left = `${[16, 50, 84][selectedLane]}%`;
    pulse.textContent = currentColor;
    buttons.forEach((button) => {
      button.classList.toggle("active", Number(button.dataset.lane) === selectedLane);
    });
  };

  const nextWave = () => {
    wave += 1;
    progress = 0;
    selectedLane = 1;
    correctLane = Math.floor(Math.random() * 3);
    currentColor = ["赤", "蓝", "绿"][Math.floor(Math.random() * 3)];
    status.textContent = `将 ${currentColor} 色脉冲导入正确轨道。`;
    paint();
  };

  const finish = (text) => {
    clearInterval(tick);
    log.textContent = text;
    buttons.forEach((button) => {
      button.disabled = true;
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedLane = Number(button.dataset.lane);
      paint();
    });
  });

  tick = window.setInterval(() => {
    progress += 12;
    paint();
    if (progress < 96) return;
    if (selectedLane === correctLane) {
      log.textContent = `第 ${wave} 波导流成功。`;
      if (wave >= 8) {
        finish("全部脉冲导流完成，轨道恢复稳定。");
        return;
      }
      nextWave();
      return;
    }
    stability -= 1;
    log.textContent = `第 ${wave} 波导流失败，脉冲偏离至轨道 ${correctLane + 1}。`;
    if (stability <= 0) {
      finish("稳定度归零，轨道系统失控。");
      return;
    }
    nextWave();
  }, 520);

  paint();
  return () => clearInterval(tick);
}

function playMetro(stage) {
  const capacity = 3;
  const goals = ["A", "B", "C"];
  let served = 0;
  let mistakes = 0;
  let incoming = goals[Math.floor(Math.random() * goals.length)];
  let tracks = [[], [], []];
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">已发车<strong id="metro-served">${served}</strong>/5</span>
        <span class="status-pill">失误<strong id="metro-mistakes">${mistakes}</strong>/3</span>
      </div>
      <div class="score-box" id="metro-status">当前来车：${incoming} 号线，请选择正确轨道。</div>
      <div class="metro-grid" id="metro-grid"></div>
      <div class="stage-toolbar">
        <button class="button secondary" data-track="0" type="button">送入轨道 1</button>
        <button class="button secondary" data-track="1" type="button">送入轨道 2</button>
        <button class="button secondary" data-track="2" type="button">送入轨道 3</button>
      </div>
      <div class="log-box" id="metro-log">同类列车装满即可发车清空轨道。</div>
    </div>
  `;
  const servedNode = stage.querySelector("#metro-served");
  const mistakesNode = stage.querySelector("#metro-mistakes");
  const status = stage.querySelector("#metro-status");
  const grid = stage.querySelector("#metro-grid");
  const log = stage.querySelector("#metro-log");
  const buttons = stage.querySelectorAll("[data-track]");

  const render = () => {
    servedNode.textContent = String(served);
    mistakesNode.textContent = String(mistakes);
    status.textContent = `当前来车：${incoming} 号线，请选择正确轨道。`;
    grid.innerHTML = tracks.map((track, index) => `
      <div class="metro-track">
        <strong>轨道 ${index + 1}</strong>
        <div class="metro-trains">${track.map((item) => `<span class="metro-train">${item}</span>`).join("") || '<span class="empty-stage">空</span>'}</div>
      </div>
    `).join("");
  };

  const finish = (text) => {
    log.textContent = text;
    buttons.forEach((button) => {
      button.disabled = true;
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const trackIndex = Number(button.dataset.track);
      const targetType = goals[trackIndex];
      if (tracks[trackIndex].length >= capacity) {
        mistakes += 1;
        log.textContent = `轨道 ${trackIndex + 1} 已超载，调度失败。`;
      } else {
        tracks[trackIndex].push(incoming);
        if (incoming !== targetType) {
          mistakes += 1;
          log.textContent = `${incoming} 号线被送错轨道。`;
        } else {
          log.textContent = `${incoming} 号线顺利入轨。`;
        }
        if (tracks[trackIndex].length === capacity && tracks[trackIndex].every((item) => item === targetType)) {
          served += 1;
          tracks[trackIndex] = [];
          log.textContent = `轨道 ${trackIndex + 1} 编组完成，列车成功发车。`;
        }
      }
      if (served >= 5) {
        render();
        finish("全部调度完成，地铁网络恢复畅通。");
        return;
      }
      if (mistakes >= 3) {
        render();
        finish("失误过多，调度中心被迫停运。");
        return;
      }
      incoming = goals[Math.floor(Math.random() * goals.length)];
      render();
    });
  });

  render();
  return () => {};
}

function playRelay(stage) {
  let expected = 1;
  let stability = 3;
  const nodes = [1, 2, 3, 4, 5, 6].sort(() => Math.random() - 0.5);
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">下一节点<strong id="relay-next">${expected}</strong></span>
        <span class="status-pill">稳定度<strong id="relay-stability">${stability}</strong></span>
      </div>
      <div class="score-box">按 1 → 6 的顺序点击能量节点，把电流一路传到终点。</div>
      <div class="relay-grid" id="relay-grid"></div>
      <div class="log-box" id="relay-log">接力链路已启动。</div>
    </div>
  `;
  const nextNode = stage.querySelector("#relay-next");
  const stabilityNode = stage.querySelector("#relay-stability");
  const grid = stage.querySelector("#relay-grid");
  const log = stage.querySelector("#relay-log");
  let finished = false;

  const finish = (text) => {
    finished = true;
    log.textContent = text;
    grid.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });
  };

  const render = () => {
    nextNode.textContent = expected <= 6 ? String(expected) : "终点";
    stabilityNode.textContent = String(stability);
    grid.innerHTML = nodes.map((value) => `
      <button class="relay-node${value < expected ? " done" : ""}" data-value="${value}" type="button">${value}</button>
    `).join("");
    grid.querySelectorAll(".relay-node").forEach((button) => {
      button.addEventListener("click", () => {
        if (finished) return;
        const value = Number(button.dataset.value);
        if (value === expected) {
          expected += 1;
          if (expected > 6) {
            render();
            finish("能量成功传到终点，接力完成。");
            return;
          }
          log.textContent = `节点 ${value} 接通成功。`;
          render();
          return;
        }
        stability -= 1;
        expected = 1;
        log.textContent = `节点 ${value} 接错，链路已重置。`;
        if (stability <= 0) {
          render();
          finish("稳定度耗尽，接力失败。");
          return;
        }
        render();
      });
    });
  };

  render();
  return () => {};
}

function playDecode(stage) {
  const symbols = ["△", "○", "□", "◇"];
  let round = 1;
  let integrity = 2;
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">回合<strong id="decode-round">${round}</strong>/5</span>
        <span class="status-pill">容错<strong id="decode-integrity">${integrity}</strong></span>
      </div>
      <div class="score-box" id="decode-clue"></div>
      <div class="decode-grid" id="decode-grid"></div>
      <div class="log-box" id="decode-log">从三段符号中选出唯一满足线索的片段。</div>
    </div>
  `;
  const roundNode = stage.querySelector("#decode-round");
  const integrityNode = stage.querySelector("#decode-integrity");
  const clue = stage.querySelector("#decode-clue");
  const grid = stage.querySelector("#decode-grid");
  const log = stage.querySelector("#decode-log");

  const buildRound = () => {
    const first = symbols[Math.floor(Math.random() * symbols.length)];
    let second = symbols[Math.floor(Math.random() * symbols.length)];
    while (second === first) second = symbols[Math.floor(Math.random() * symbols.length)];
    let third = symbols[Math.floor(Math.random() * symbols.length)];
    while (third === first || third === second) third = symbols[Math.floor(Math.random() * symbols.length)];
    const correct = `${first}${second}`;
    const options = [correct, `${first}${third}`, `${third}${second}`].sort(() => Math.random() - 0.5);
    return {
      text: `线索：第一位是 ${first}，并且第二位必须是 ${second}。`,
      options,
      answer: options.indexOf(correct)
    };
  };

  let current = buildRound();

  const finish = (text) => {
    log.textContent = text;
    grid.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });
  };

  const render = () => {
    roundNode.textContent = String(round);
    integrityNode.textContent = String(integrity);
    clue.textContent = current.text;
    grid.innerHTML = current.options.map((option, index) => `
      <button class="decode-option" data-index="${index}" type="button">${option}</button>
    `).join("");
    grid.querySelectorAll(".decode-option").forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.index);
        if (index === current.answer) {
          if (round >= 5) {
            finish("所有符号片段破译完成。");
            return;
          }
          round += 1;
          current = buildRound();
          log.textContent = "破译正确，载入下一段线索。";
          render();
          return;
        }
        integrity -= 1;
        if (integrity <= 0) {
          render();
          finish("破译错误过多，密钥已锁死。");
          return;
        }
        current = buildRound();
        log.textContent = "线索判断错误，重新分析下一段。";
        render();
      });
    });
  };

  render();
  return () => {};
}

function playBalance(stage) {
  let round = 1;
  let mistakes = 0;
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">回合<strong id="balance-round">${round}</strong>/5</span>
        <span class="status-pill">失误<strong id="balance-mistakes">${mistakes}</strong>/2</span>
      </div>
      <div class="score-box" id="balance-clue"></div>
      <div class="balance-board" id="balance-board"></div>
      <div class="stage-toolbar" id="balance-actions"></div>
      <div class="log-box" id="balance-log">把正确重量的砝码放到较轻的一侧。</div>
    </div>
  `;
  const roundNode = stage.querySelector("#balance-round");
  const mistakesNode = stage.querySelector("#balance-mistakes");
  const clue = stage.querySelector("#balance-clue");
  const board = stage.querySelector("#balance-board");
  const actions = stage.querySelector("#balance-actions");
  const log = stage.querySelector("#balance-log");

  const buildRound = () => {
    const answer = 1 + Math.floor(Math.random() * 4);
    const base = 3 + Math.floor(Math.random() * 6);
    const leftHeavy = Math.random() > 0.5;
    return {
      answer,
      left: leftHeavy ? base + answer : base,
      right: leftHeavy ? base : base + answer,
      light: leftHeavy ? "右侧" : "左侧"
    };
  };

  let current = buildRound();

  const finish = (text) => {
    log.textContent = text;
    actions.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });
  };

  const render = () => {
    roundNode.textContent = String(round);
    mistakesNode.textContent = String(mistakes);
    clue.textContent = `较轻的一侧是${current.light}，请选择能刚好配平的砝码。`;
    board.innerHTML = `
      <div class="balance-side"><span>左侧负载</span><strong>${current.left}</strong></div>
      <div class="balance-side"><span>右侧负载</span><strong>${current.right}</strong></div>
    `;
    actions.innerHTML = [1, 2, 3, 4].map((weight) => `<button class="button secondary" data-weight="${weight}" type="button">砝码 ${weight}</button>`).join("");
    actions.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        const weight = Number(button.dataset.weight);
        if (weight === current.answer) {
          if (round >= 5) {
            finish("全部配重完成，熔炉已恢复平衡。");
            return;
          }
          round += 1;
          current = buildRound();
          log.textContent = "配重准确，进入下一轮。";
          render();
          return;
        }
        mistakes += 1;
        if (mistakes >= 2) {
          render();
          finish("误差过大，熔炉失衡。");
          return;
        }
        current = buildRound();
        log.textContent = "配重错误，重新校准下一轮。";
        render();
      });
    });
  };

  render();
  return () => {};
}

function playRescue(stage) {
  let segment = 1;
  let hull = 2;
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">路段<strong id="rescue-segment">${segment}</strong>/5</span>
        <span class="status-pill">容错<strong id="rescue-hull">${hull}</strong></span>
      </div>
      <div class="score-box">选择信号最强的通道；若信号相同，优先风险更低者。</div>
      <div class="rescue-grid" id="rescue-grid"></div>
      <div class="log-box" id="rescue-log">救援车队等待你的路线判断。</div>
    </div>
  `;
  const segmentNode = stage.querySelector("#rescue-segment");
  const hullNode = stage.querySelector("#rescue-hull");
  const grid = stage.querySelector("#rescue-grid");
  const log = stage.querySelector("#rescue-log");
  const labels = ["北线", "中线", "南线"];

  const compare = (a, b) => {
    if (a.signal !== b.signal) return a.signal - b.signal;
    return b.risk - a.risk;
  };

  const buildRoutes = () => {
    const routes = Array.from({ length: 3 }, () => ({
      signal: 2 + Math.floor(Math.random() * 4),
      risk: 1 + Math.floor(Math.random() * 4)
    }));
    const answer = routes.reduce((bestIndex, route, index) => {
      if (bestIndex === -1) return index;
      return compare(route, routes[bestIndex]) > 0 ? index : bestIndex;
    }, -1);
    const collisions = routes.filter((route, index) => index !== answer && compare(route, routes[answer]) === 0).length;
    if (collisions) return buildRoutes();
    return { routes, answer };
  };

  let current = buildRoutes();

  const finish = (text) => {
    log.textContent = text;
    grid.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });
  };

  const render = () => {
    segmentNode.textContent = String(segment);
    hullNode.textContent = String(hull);
    grid.innerHTML = current.routes.map((route, index) => `
      <button class="route-card" data-index="${index}" type="button">
        <strong>${labels[index]}</strong>
        <span>信号 ${route.signal}</span>
        <span>风险 ${route.risk}</span>
      </button>
    `).join("");
    grid.querySelectorAll(".route-card").forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.index);
        if (index === current.answer) {
          if (segment >= 5) {
            finish("所有路段判断正确，救援车队顺利抵达。");
            return;
          }
          segment += 1;
          current = buildRoutes();
          log.textContent = "路线判断正确，车队继续推进。";
          render();
          return;
        }
        hull -= 1;
        if (hull <= 0) {
          render();
          finish("路线误判过多，救援行动中断。");
          return;
        }
        current = buildRoutes();
        log.textContent = "误入危险路段，立即切换下一段路线。";
        render();
      });
    });
  };

  render();
  return () => {};
}

function playPulseGrid(stage) {
  let round = 1;
  let stability = 2;
  let previewTimer = 0;
  let target = [];
  let active = [];
  let inputEnabled = false;
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">回合<strong id="pulse-round">${round}</strong>/4</span>
        <span class="status-pill">稳定度<strong id="pulse-stability">${stability}</strong></span>
      </div>
      <div class="score-box" id="pulse-status">观察预览图案，然后复原同样的脉冲网格。</div>
      <div class="pulse-grid-board" id="pulse-grid-board"></div>
      <div class="stage-toolbar">
        <button class="button primary" id="pulse-check" type="button">同步检测</button>
        <button class="button secondary" id="pulse-clear" type="button">清空重排</button>
      </div>
      <div class="log-box" id="pulse-log">完成 4 轮网格同步即可通关。</div>
    </div>
  `;
  const roundNode = stage.querySelector("#pulse-round");
  const stabilityNode = stage.querySelector("#pulse-stability");
  const status = stage.querySelector("#pulse-status");
  const board = stage.querySelector("#pulse-grid-board");
  const log = stage.querySelector("#pulse-log");
  const checkButton = stage.querySelector("#pulse-check");
  const clearButton = stage.querySelector("#pulse-clear");

  const buildPattern = () => {
    const count = Math.min(2 + round, 5);
    const indexes = [];
    while (indexes.length < count) {
      const index = Math.floor(Math.random() * 9);
      if (!indexes.includes(index)) indexes.push(index);
    }
    return indexes;
  };

  const finish = (text) => {
    inputEnabled = false;
    log.textContent = text;
    checkButton.disabled = true;
    clearButton.disabled = true;
    board.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });
  };

  const samePattern = () => active.length === target.length && active.every((index) => target.includes(index));

  const render = (preview = false) => {
    roundNode.textContent = String(round);
    stabilityNode.textContent = String(stability);
    board.innerHTML = Array.from({ length: 9 }, (_, index) => `
      <button class="pulse-grid-cell${active.includes(index) ? " active" : ""}${preview && target.includes(index) ? " preview" : ""}" data-index="${index}" type="button"></button>
    `).join("");
    board.querySelectorAll(".pulse-grid-cell").forEach((button) => {
      button.addEventListener("click", () => {
        if (!inputEnabled) return;
        const index = Number(button.dataset.index);
        if (active.includes(index)) {
          active = active.filter((item) => item !== index);
        } else {
          active = [...active, index];
        }
        render();
      });
    });
  };

  const startRound = () => {
    target = buildPattern();
    active = [];
    inputEnabled = false;
    status.textContent = "观察预览图案。";
    render(true);
    previewTimer = window.setTimeout(() => {
      status.textContent = "点亮与预览相同的格子后点击同步检测。";
      inputEnabled = true;
      render();
    }, 850);
  };

  checkButton.addEventListener("click", () => {
    if (!inputEnabled) return;
    if (samePattern()) {
      if (round >= 4) {
        finish("网格同步全部完成，脉冲矩阵稳定。");
        return;
      }
      round += 1;
      log.textContent = "同步成功，载入下一组图案。";
      startRound();
      return;
    }
    stability -= 1;
    if (stability <= 0) {
      render();
      finish("同步失败过多，矩阵已离线。");
      return;
    }
    log.textContent = "图案不匹配，重新预览本轮。";
    startRound();
  });

  clearButton.addEventListener("click", () => {
    if (!inputEnabled) return;
    active = [];
    render();
  });

  startRound();
  return () => clearTimeout(previewTimer);
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
    cpu = Math.min(100, cpu + 5 + Math.floor(Math.random() * 6));
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
  let turn = 10;
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
      <div class="log-box" id="builder-log">10 回合内造出 3 段核心即可通关。</div>
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

  const uniqueRandom = (exclude = []) => {
    let value = 1 + Math.floor(Math.random() * 13);
    while (exclude.includes(value)) {
      value = 1 + Math.floor(Math.random() * 13);
    }
    return value;
  };

  const rules = [
    {
      text: "找出数字最大的卡牌。",
      build: () => {
        const max = 9 + Math.floor(Math.random() * 5);
        const others = [1 + Math.floor(Math.random() * (max - 1)), 1 + Math.floor(Math.random() * (max - 1))].map((n, index, arr) => {
          if (index === 1 && n === arr[0]) return Math.max(1, n - 1);
          return n;
        });
        const cards = [max, ...others].sort(() => Math.random() - 0.5);
        return { cards, answer: cards.indexOf(max) };
      }
    },
    {
      text: "找出唯一的偶数卡牌。",
      build: () => {
        const even = [2, 4, 6, 8, 10, 12][Math.floor(Math.random() * 6)];
        const oddA = [1, 3, 5, 7, 9, 11, 13][Math.floor(Math.random() * 7)];
        let oddB = [1, 3, 5, 7, 9, 11, 13][Math.floor(Math.random() * 7)];
        while (oddB === oddA) oddB = [1, 3, 5, 7, 9, 11, 13][Math.floor(Math.random() * 7)];
        const cards = [even, oddA, oddB].sort(() => Math.random() - 0.5);
        return { cards, answer: cards.indexOf(even) };
      }
    },
    {
      text: "找出最接近 10 的卡牌。",
      build: () => {
        const pivot = [8, 9, 10, 11, 12][Math.floor(Math.random() * 5)];
        const usedDistances = [Math.abs(pivot - 10)];
        const pickFar = () => {
          let value = uniqueRandom([pivot]);
          while (usedDistances.includes(Math.abs(value - 10))) {
            value = uniqueRandom([pivot]);
          }
          usedDistances.push(Math.abs(value - 10));
          return value;
        };
        const cards = [pivot, pickFar(), pickFar()].sort(() => Math.random() - 0.5);
        return { cards, answer: cards.indexOf(pivot) };
      }
    }
  ];

  const nextRound = () => {
    if (round >= 6) {
      row.innerHTML = `<div class="empty-stage">挑战结束，最终得分 ${score}。</div>`;
      ruleNode.textContent = "本局已完成。";
      return;
    }
    round += 1;
    roundNode.textContent = String(round);
    const rule = rules[(round - 1) % rules.length];
    const { cards, answer } = rule.build();
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

function playTiming(stage) {
  let score = 0;
  let round = 0;
  let pointer = 0;
  let direction = 1;
  let locked = false;
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">命中<strong id="timing-score">${score}</strong></span>
        <span class="status-pill">回合<strong id="timing-round">${round}</strong>/5</span>
      </div>
      <div class="timing-track">
        <div class="timing-zone"></div>
        <div class="timing-pointer" id="timing-pointer"></div>
      </div>
      <div class="stage-toolbar">
        <button class="button primary" id="timing-hit" type="button">立刻锁定</button>
        <span class="stage-note" id="timing-note">让指针停在高亮区。</span>
      </div>
    </div>
  `;
  const pointerNode = stage.querySelector("#timing-pointer");
  const scoreNode = stage.querySelector("#timing-score");
  const roundNode = stage.querySelector("#timing-round");
  const note = stage.querySelector("#timing-note");
  const button = stage.querySelector("#timing-hit");

  const resetRound = () => {
    locked = false;
    pointer = 0;
    direction = 1;
    pointerNode.style.left = "0%";
  };

  const finish = () => {
    button.disabled = true;
    note.textContent = `脉冲校准完成，最终命中 ${score} 次。`;
  };

  const tick = window.setInterval(() => {
    if (locked) return;
    pointer += direction * 4;
    if (pointer >= 100) {
      pointer = 100;
      direction = -1;
    }
    if (pointer <= 0) {
      pointer = 0;
      direction = 1;
    }
    pointerNode.style.left = `${pointer}%`;
  }, 80);

  button.addEventListener("click", () => {
    if (locked || round >= 5) return;
    locked = true;
    round += 1;
    roundNode.textContent = String(round);
    const hit = pointer >= 42 && pointer <= 58;
    if (hit) {
      score += 1;
      scoreNode.textContent = String(score);
      note.textContent = "命中高亮区，脉冲稳定。";
    } else {
      note.textContent = "偏离高亮区，重新校准。";
    }
    if (round >= 5) {
      finish();
      return;
    }
    window.setTimeout(resetRound, 420);
  });

  resetRound();
  return () => clearInterval(tick);
}

function playMaze(stage) {
  const size = 5;
  const start = { row: 0, col: 0 };
  const goal = { row: size - 1, col: size - 1 };
  const fallbackLayout = [
    [0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1],
    [0, 0, 0, 0, 1],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 1, 0]
  ];

  const shortestPath = (layout) => {
    const visited = Array.from({ length: size }, () => Array(size).fill(false));
    const queue = [{ row: start.row, col: start.col, dist: 0 }];
    visited[start.row][start.col] = true;

    while (queue.length) {
      const current = queue.shift();
      if (current.row === goal.row && current.col === goal.col) return current.dist;
      const moves = [
        [current.row - 1, current.col],
        [current.row + 1, current.col],
        [current.row, current.col - 1],
        [current.row, current.col + 1]
      ];
      moves.forEach(([row, col]) => {
        if (row < 0 || row >= size || col < 0 || col >= size) return;
        if (visited[row][col] || layout[row][col] === 1) return;
        visited[row][col] = true;
        queue.push({ row, col, dist: current.dist + 1 });
      });
    }

    return -1;
  };

  const buildLayout = () => {
    for (let attempt = 0; attempt < 50; attempt += 1) {
      const layout = Array.from({ length: size }, () => Array.from({ length: size }, () => (Math.random() < 0.26 ? 1 : 0)));
      layout[start.row][start.col] = 0;
      layout[goal.row][goal.col] = 0;
      const distance = shortestPath(layout);
      if (distance >= 6) {
        return { layout, distance };
      }
    }
    return { layout: fallbackLayout, distance: shortestPath(fallbackLayout) };
  };

  const { layout, distance } = buildLayout();
  let player = { ...start };
  let steps = Math.max(8, distance + 3);
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">剩余步数<strong id="maze-steps">${steps}</strong></span>
      </div>
      <div class="maze-grid" id="maze-grid"></div>
      <div class="stage-toolbar">
        <button class="button secondary" data-move="up" type="button">上</button>
        <button class="button secondary" data-move="left" type="button">左</button>
        <button class="button secondary" data-move="down" type="button">下</button>
        <button class="button secondary" data-move="right" type="button">右</button>
      </div>
      <div class="stage-note" id="maze-note">抵达右下角出口。</div>
    </div>
  `;
  const grid = stage.querySelector("#maze-grid");
  const stepsNode = stage.querySelector("#maze-steps");
  const note = stage.querySelector("#maze-note");
  const buttons = stage.querySelectorAll("[data-move]");

  const render = () => {
    grid.innerHTML = layout.map((cells, rowIndex) => cells.map((cell, colIndex) => {
      const classes = ["maze-cell"];
      if (cell === 1) classes.push("wall");
      if (rowIndex === goal.row && colIndex === goal.col) classes.push("goal");
      if (rowIndex === player.row && colIndex === player.col) classes.push("player");
      return `<div class="${classes.join(" ")}"></div>`;
    }).join("")).join("");
  };

  const finish = (text) => {
    note.textContent = text;
    buttons.forEach((button) => {
      button.disabled = true;
    });
  };

  const move = (direction) => {
    if (steps <= 0) return;
    const next = { ...player };
    if (direction === "up") next.row -= 1;
    if (direction === "down") next.row += 1;
    if (direction === "left") next.col -= 1;
    if (direction === "right") next.col += 1;
    if (next.row < 0 || next.row >= layout.length || next.col < 0 || next.col >= layout[0].length) return;
    if (layout[next.row][next.col] === 1) {
      note.textContent = "前方是墙体，换条路线。";
      return;
    }
    player = next;
    steps -= 1;
    stepsNode.textContent = String(steps);
    render();
    if (player.row === goal.row && player.col === goal.col) {
      finish("你成功穿过了霓虹迷宫。");
      return;
    }
    if (steps <= 0) finish("步数耗尽，仍未找到出口。");
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => move(button.dataset.move));
  });
  render();
  return () => {};
}

function playStack(stage) {
  let height = 0;
  let misses = 0;
  let position = 0;
  let direction = 1;
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">高度<strong id="stack-height">${height}</strong>/5</span>
        <span class="status-pill">失误<strong id="stack-miss">${misses}</strong>/3</span>
      </div>
      <div class="stack-tower" id="stack-tower"></div>
      <div class="stack-meter">
        <div class="stack-slider" id="stack-slider"></div>
      </div>
      <div class="stage-toolbar">
        <button class="button primary" id="stack-drop" type="button">落下平台</button>
        <span class="stage-note" id="stack-note">在中间区域落下可稳定堆叠。</span>
      </div>
    </div>
  `;
  const tower = stage.querySelector("#stack-tower");
  const slider = stage.querySelector("#stack-slider");
  const heightNode = stage.querySelector("#stack-height");
  const missNode = stage.querySelector("#stack-miss");
  const note = stage.querySelector("#stack-note");
  const button = stage.querySelector("#stack-drop");

  const paintTower = () => {
    tower.innerHTML = Array.from({ length: height }, () => '<div class="stack-block"></div>').join("") || '<div class="empty-stage">塔台还未开始搭建。</div>';
  };

  const tick = window.setInterval(() => {
    position += direction * 5;
    if (position >= 100) {
      position = 100;
      direction = -1;
    }
    if (position <= 0) {
      position = 0;
      direction = 1;
    }
    slider.style.left = `${position}%`;
  }, 90);

  button.addEventListener("click", () => {
    if (height >= 5 || misses >= 3) return;
    if (position >= 35 && position <= 65) {
      height += 1;
      heightNode.textContent = String(height);
      note.textContent = "落点稳定，塔层成功叠加。";
      paintTower();
      if (height >= 5) {
        note.textContent = "高塔建成，城市天际线被你点亮。";
        button.disabled = true;
      }
      return;
    }
    misses += 1;
    missNode.textContent = String(misses);
    note.textContent = "落点偏移，这一层滑落了。";
    if (misses >= 3) {
      note.textContent = "失误过多，塔台建造失败。";
      button.disabled = true;
    }
  });

  paintTower();
  return () => clearInterval(tick);
}

function playSwap(stage) {
  const targetBoard = ["A", "B", "C", "D"];
  let moves = 8;
  let selected = null;
  let board = [];
  const target = targetBoard.join("");
  const createBoard = () => {
    let nextBoard = [...targetBoard];
    let previousIndex = -1;
    const shuffleSteps = 4 + Math.floor(Math.random() * 5);
    for (let step = 0; step < shuffleSteps; step += 1) {
      const options = [0, 1, 2].filter((index) => index !== previousIndex);
      const index = options[Math.floor(Math.random() * options.length)];
      [nextBoard[index], nextBoard[index + 1]] = [nextBoard[index + 1], nextBoard[index]];
      previousIndex = index;
    }
    if (nextBoard.join("") === target) return createBoard();
    return nextBoard;
  };
  board = createBoard();
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">剩余交换<strong id="swap-moves">${moves}</strong></span>
      </div>
      <div class="swap-grid" id="swap-grid"></div>
      <div class="stage-note" id="swap-note">让四张卡牌恢复为 A-B-C-D 顺序。</div>
    </div>
  `;
  const grid = stage.querySelector("#swap-grid");
  const movesNode = stage.querySelector("#swap-moves");
  const note = stage.querySelector("#swap-note");

  const finish = (text) => {
    note.textContent = text;
    grid.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });
  };

  const render = () => {
    grid.innerHTML = board.map((item, index) => `
      <button class="swap-cell${selected === index ? " selected" : ""}" data-index="${index}" type="button">${item}</button>
    `).join("");
    grid.querySelectorAll(".swap-cell").forEach((button) => {
      button.addEventListener("click", () => {
        const index = Number(button.dataset.index);
        if (moves <= 0) return;
        if (selected === null) {
          selected = index;
          render();
          return;
        }
        if (selected === index) {
          selected = null;
          render();
          return;
        }
        if (Math.abs(selected - index) !== 1) {
          note.textContent = "只能交换相邻卡牌。";
          selected = null;
          render();
          return;
        }
        [board[selected], board[index]] = [board[index], board[selected]];
        selected = null;
        moves -= 1;
        movesNode.textContent = String(moves);
        render();
        if (board.join("") === target) {
          finish("顺序恢复完成，解阵成功。");
          return;
        }
        if (moves <= 0) finish("交换次数耗尽，阵列仍未复原。");
      });
    });
  };

  render();
  return () => {};
}

function playLane(stage) {
  let lane = 1;
  let distance = 0;
  let obstacleLane = 0;
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">里程<strong id="lane-distance">${distance}</strong>/12</span>
      </div>
      <div class="lane-board">
        <div class="lane-marker" id="lane-marker"></div>
        <div class="lane-obstacle" id="lane-obstacle"></div>
      </div>
      <div class="stage-toolbar">
        <button class="button secondary" data-lane-move="left" type="button">向左变道</button>
        <button class="button secondary" data-lane-move="right" type="button">向右变道</button>
      </div>
      <div class="stage-note" id="lane-note">避开障碍，存活到终点。</div>
    </div>
  `;
  const marker = stage.querySelector("#lane-marker");
  const obstacle = stage.querySelector("#lane-obstacle");
  const distanceNode = stage.querySelector("#lane-distance");
  const note = stage.querySelector("#lane-note");
  const buttons = stage.querySelectorAll("[data-lane-move]");
  const laneOffsets = [16, 50, 84];

  const render = () => {
    marker.style.left = `${laneOffsets[lane]}%`;
    obstacle.style.left = `${laneOffsets[obstacleLane]}%`;
  };

  const finish = (text) => {
    note.textContent = text;
    buttons.forEach((button) => {
      button.disabled = true;
    });
    clearInterval(tick);
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.laneMove === "left") lane = Math.max(0, lane - 1);
      if (button.dataset.laneMove === "right") lane = Math.min(2, lane + 1);
      render();
    });
  });

  const tick = window.setInterval(() => {
    obstacleLane = Math.floor(Math.random() * 3);
    distance += 1;
    distanceNode.textContent = String(distance);
    render();
    if (obstacleLane === lane) {
      finish("你撞上了障碍，冲刺中断。");
      return;
    }
    if (distance >= 12) finish("你成功穿过了整段高速弯道。");
  }, 900);

  render();
  return () => clearInterval(tick);
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
    "authLogin",
    "authRegister",
    "login",
    "settingsTrigger",
    "settingsModal",
    "settingsClose",
    "settingsExit",
    "themeToggle",
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

  applyTheme(getSettings().theme);

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
  els.login.addEventListener("click", () => {
    closeSettings();
    openAuth();
  });
  els.settingsTrigger.addEventListener("click", openSettings);
  els.settingsClose.addEventListener("click", closeSettings);
  els.settingsExit.addEventListener("click", closeSettings);
  els.themeToggle.addEventListener("change", () => {
    const theme = els.themeToggle.checked ? "light" : "dark";
    applyTheme(theme);
    saveSettings({ theme });
  });

  migrateLegacyAuth();

  const refreshActiveGame = () => {
    if (!activeGameId || els.modal.classList.contains("hidden")) return;
    openGame(activeGameId);
  };

  els.authForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = els.authName.value.trim();
    const password = els.authPassword.value.trim();
    if (!name || password.length < 4) {
      setAuthStatus("请输入账号名，并使用至少 4 位密码。");
      return;
    }
    const account = getAccounts()[name];
    if (!account) {
      setAuthStatus("账号不存在，请先注册。");
      return;
    }
    if (account.password !== password) {
      setAuthStatus("密码错误，请重新输入。");
      els.authPassword.value = "";
      return;
    }
    setSession({ name, loggedInAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
    renderUser();
    refreshActiveGame();
    closeAuth();
  });

  els.authRegister.addEventListener("click", () => {
    const name = els.authName.value.trim();
    const password = els.authPassword.value.trim();
    if (!name || password.length < 4) {
      setAuthStatus("请输入账号名，并使用至少 4 位密码。");
      return;
    }
    const accounts = getAccounts();
    if (accounts[name]) {
      setAuthStatus("该账号名已存在，请直接登录或更换账号名。");
      return;
    }
    accounts[name] = {
      name,
      password,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    saveAccounts(accounts);
    setSession({ name, loggedInAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
    renderUser();
    refreshActiveGame();
    closeAuth();
  });

  els.logout.addEventListener("click", () => {
    clearSession();
    renderUser();
    els.authName.value = "";
    els.authPassword.value = "";
    refreshActiveGame();
    closeAuth();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeZoom();
      closeSettings();
      closeAuth();
      closeGame();
      return;
    }
    if (event.key !== "Alt") return;
    if (!els.modal.classList.contains("hidden") || !els.authModal.classList.contains("hidden") || !els.settingsModal.classList.contains("hidden") || !els.zoomModal.classList.contains("hidden")) return;
    altPressCount += 1;
    clearTimeout(altWindowTimer);
    altWindowTimer = window.setTimeout(() => {
      altPressCount = 0;
    }, EASTER_EGG_ALT_WINDOW);
    if (altPressCount < EASTER_EGG_ALT_TARGET) return;
    altPressCount = 0;
    clearTimeout(altWindowTimer);
    window.location.href = EASTER_EGG_URL;
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
