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
  }
];

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
          <span class="tag">${game.platform}</span>
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

function renderMiniGame(game, stage) {
  stage.innerHTML = `
    <div class="score-box">
      <strong>${game.name}</strong>
      <p style="margin:10px 0 0;">小游戏模式已启用。你可以先测试登录、评论、详情展示是否正常。</p>
    </div>
  `;
}

function bindLaunch(game) {
  $("#play-mode-label").textContent = "站内小游戏模式";
  $("#launch-game").addEventListener("click", () => renderMiniGame(game, $("#game-stage")));
}

function openDetail(gameId, autoPlay = false) {
  const game = games.find((g) => g.id === gameId);
  if (!game) return;

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
  els.modal.classList.add("hidden");
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
  const game = list[Math.floor(Math.random() * list.length)];
  openDetail(game.id, true);
});
els.modalClose.addEventListener("click", closeDetail);
els.modalExit.addEventListener("click", closeDetail);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDetail();
    closeAuth();
  }
});

renderUser();
initGenres();
renderGames();
