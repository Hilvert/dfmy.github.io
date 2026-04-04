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

const games = [
  {
    id: "galaxy-hunters",
    name: "Galaxy Hunters",
    genre: "动作射击",
    rating: 4.8,
    players: "1-4 人",
    platform: "PC / 网页",
    description: "在星际废墟中追击机械军团，主打高速反应、误判惩罚与多目标选择。",
    features: ["真假目标混入", "连击倍率机制", "误点会扣分和扣时"],
    image: createPoster({ title: "GALAXY HUNTERS", subtitle: "Action Shooter", palette: ["#071a52", "#1f4287", "#5be7ff"], icon: "✦" })
  },
  {
    id: "crown-chess",
    name: "Crown Chess",
    genre: "策略战棋",
    rating: 4.7,
    players: "单人",
    platform: "PC",
    description: "率领王国军团推进版图，需要判断对手意图并规划资源节奏。",
    features: ["读心式博弈", "回合资源管理", "多轮胜负条件"],
    image: createPoster({ title: "CROWN CHESS", subtitle: "Strategy Tactics", palette: ["#3c2317", "#7b4f2c", "#d4a373"], icon: "♜" })
  },
  {
    id: "neon-drift-x",
    name: "Neon Drift X",
    genre: "竞速",
    rating: 4.6,
    players: "1-8 人",
    platform: "PC / 主机",
    description: "不仅要加速，还要在弯道节奏与耐热值管理中做决策。",
    features: ["弯道判定", "氮气与散热管理", "AI 动态提速"],
    image: createPoster({ title: "NEON DRIFT X", subtitle: "Street Racing", palette: ["#240046", "#7b2cbf", "#ff4d6d"], icon: "⚡" })
  },
  {
    id: "dragon-fall",
    name: "Dragon Fall",
    genre: "角色扮演",
    rating: 4.9,
    players: "单人",
    platform: "PC / 主机",
    description: "探索龙陨大陆，权衡战斗、补给和风险，做出真正影响结局的选择。",
    features: ["多资源状态", "隐藏分支", "失败路线也有信息收益"],
    image: createPoster({ title: "DRAGON FALL", subtitle: "Fantasy RPG", palette: ["#0b132b", "#1c2541", "#5bc0be"], icon: "⚔" })
  },
  {
    id: "mirror-mind",
    name: "Mirror Mind",
    genre: "解谜",
    rating: 4.5,
    players: "单人",
    platform: "网页 / 手机",
    description: "你需要观察规律、记忆符号并在有限尝试内找出正确序列。",
    features: ["数字密码推理", "有限尝试次数", "提示信息递进"],
    image: createPoster({ title: "MIRROR MIND", subtitle: "Puzzle", palette: ["#355070", "#6d597a", "#b56576"], icon: "◈" })
  },
  {
    id: "harvest-town",
    name: "Harvest Town",
    genre: "模拟经营",
    rating: 4.4,
    players: "1-2 人",
    platform: "PC / Switch",
    description: "经营庄园与店铺，在订单压力和资源转换之间保持平衡。",
    features: ["资源链规划", "限时订单", "连续回合经营"],
    image: createPoster({ title: "HARVEST TOWN", subtitle: "Simulation", palette: ["#386641", "#6a994e", "#f2e8cf"], icon: "❀" })
  },
  {
    id: "orbit-base",
    name: "Orbit Base",
    genre: "生存建造",
    rating: 4.6,
    players: "1-6 人",
    platform: "PC",
    description: "在空间站资源稀缺的条件下建造核心舱，错误决策会触发危机。",
    features: ["高压资源管理", "事件惩罚", "阶段式建造目标"],
    image: createPoster({ title: "ORBIT BASE", subtitle: "Survival Build", palette: ["#03045e", "#0077b6", "#90e0ef"], icon: "⬢" })
  },
  {
    id: "arcane-deck",
    name: "Arcane Deck",
    genre: "卡牌对战",
    rating: 4.3,
    players: "1-2 人",
    platform: "PC / 手机",
    description: "构筑元素卡组，在快节奏博弈中需要预判对手的蓄力和反制。",
    features: ["回合读心", "蓄力爆发", "防守反打"],
    image: createPoster({ title: "ARCANE DECK", subtitle: "Card Battle", palette: ["#10002b", "#3c096c", "#c77dff"], icon: "♠" })
  },
  {
    id: "mecha-cup",
    name: "Mecha Cup",
    genre: "体育竞技",
    rating: 4.2,
    players: "2-6 人",
    platform: "PC / 主机",
    description: "驾驶机甲高速竞球，既要冲刺又要防止过热和失误。",
    features: ["速度与热量平衡", "冲刺节奏", "高压对抗"],
    image: createPoster({ title: "MECHA CUP", subtitle: "Sports Arena", palette: ["#14213d", "#2d6a4f", "#fca311"], icon: "◉" })
  },
  {
    id: "night-motel",
    name: "Night Motel",
    genre: "恐怖冒险",
    rating: 4.5,
    players: "单人",
    platform: "PC",
    description: "深入废弃旅馆调查异象，你必须在压力值爆表前找到安全路线。",
    features: ["精神压力系统", "风险选择", "多结局逃生"],
    image: createPoster({ title: "NIGHT MOTEL", subtitle: "Horror Adventure", palette: ["#111111", "#3a0f0f", "#9a031e"], icon: "☾" })
  },
  {
    id: "pixel-quest",
    name: "Pixel Quest",
    genre: "像素冒险",
    rating: 4.4,
    players: "1-4 人",
    platform: "网页 / PC",
    description: "经典像素风刷宝冒险，重视路线、补给和局内抉择。",
    features: ["事件冒险", "战利品选择", "连续风险判断"],
    image: createPoster({ title: "PIXEL QUEST", subtitle: "Pixel Adventure", palette: ["#283618", "#606c38", "#dda15e"], icon: "▣" })
  },
  {
    id: "sky-forge",
    name: "Sky Forge",
    genre: "沙盒创造",
    rating: 4.7,
    players: "1-10 人",
    platform: "PC / 网页",
    description: "在有限回合内打造空岛核心区，需要精确调度材料与能量。",
    features: ["多资源联动", "建筑顺序要求", "失败惩罚"],
    image: createPoster({ title: "SKY FORGE", subtitle: "Sandbox", palette: ["#219ebc", "#8ecae6", "#ffb703"], icon: "⬡" })
  }
];

const gameModes = {
  "动作射击": { label: "极限反应", type: "target" },
  "策略战棋": { label: "高压博弈", type: "duel" },
  "竞速": { label: "热能竞速", type: "race" },
  "角色扮演": { label: "多状态冒险", type: "story" },
  "解谜": { label: "密码推理", type: "riddle" },
  "模拟经营": { label: "资源经营", type: "builder" },
  "生存建造": { label: "资源经营", type: "builder" },
  "卡牌对战": { label: "高压博弈", type: "duel" },
  "体育竞技": { label: "热能竞速", type: "race" },
  "恐怖冒险": { label: "多状态冒险", type: "story" },
  "像素冒险": { label: "多状态冒险", type: "story" },
  "沙盒创造": { label: "资源经营", type: "builder" }
};

const storyScenes = {
  start: {
    text: "你踏入危机区域。当前状态：生命 3、补给 2、压力 0。",
    choices: [
      { label: "快速推进", next: "hall", hp: 0, supply: -1, stress: 1, note: "你节省时间，但精神压力开始上升。" },
      { label: "谨慎搜查", next: "stash", hp: 0, supply: 0, stress: 0, note: "你放慢节奏，寻找额外补给。" }
    ]
  },
  hall: {
    text: "长廊尽头传来异响，你必须在体力和压力之间抉择。",
    choices: [
      { label: "冲刺穿过", next: "vault", hp: -1, supply: 0, stress: 1, note: "你受了点伤，但抢到了先机。" },
      { label: "原地隐藏", next: "ambush", hp: 0, supply: -1, stress: 0, note: "你耗费补给稳定呼吸。" }
    ]
  },
  stash: {
    text: "你找到一处储物间，里面有药剂和一张残缺地图。",
    choices: [
      { label: "拿药剂", next: "hall", hp: 1, supply: 0, stress: 0, note: "体力回升了一些。" },
      { label: "拿地图", next: "vault", hp: 0, supply: 1, stress: 0, note: "你掌握了更稳妥的路线。" }
    ]
  },
  ambush: {
    text: "潜伏者逼近，你已经没有太多回旋空间。",
    choices: [
      { label: "消耗补给突围", next: "vault", hp: 0, supply: -1, stress: 1, note: "你用补给硬撑过最危险的一段。" },
      { label: "赌一把硬闯", next: "collapse", hp: -2, supply: 0, stress: 2, note: "你成功率不高，但别无选择。" }
    ]
  },
  vault: {
    text: "核心大门已到眼前，是否立刻解锁？",
    choices: [
      { label: "立刻解锁", next: "win", hp: 0, supply: 0, stress: 1, note: "你顶住压力完成了解锁。" },
      { label: "重新校验线路", next: "safewin", hp: 0, supply: -1, stress: 0, note: "你花费补给换来更稳的结果。" }
    ]
  },
  collapse: { text: "你的状态在连续失误中彻底崩溃，本次任务失败。", ending: true },
  win: { text: "你压线完成任务，带着高风险收益返回基地。", ending: true },
  safewin: { text: "你用稳健策略成功通关，虽然代价不小，但结果完美。", ending: true }
};

const puzzleBank = [
  { code: [1, 4, 7], clues: ["总和为 12", "第二位比第一位大 3", "第三位是最大数字"] },
  { code: [2, 5, 9], clues: ["总和为 16", "第一位是偶数", "最后一位比第二位大 4"] },
  { code: [3, 6, 8], clues: ["总和为 17", "前两位差值为 3", "最后一位不是奇数"] },
  { code: [4, 6, 9], clues: ["总和为 19", "第二位是偶数", "最后一位比第一位大 5"] }
];

const AUTH_KEY = "gameverse-user";
const COMMENT_KEY = "gameverse-comments";

const searchInput = document.querySelector("#search-input");
const genreFilter = document.querySelector("#genre-filter");
const sortFilter = document.querySelector("#sort-filter");
const gameGrid = document.querySelector("#game-grid");
const gameCount = document.querySelector("#game-count");
const genreCount = document.querySelector("#genre-count");
const commentCount = document.querySelector("#comment-count");
const randomPickButton = document.querySelector("#random-pick");
const modal = document.querySelector("#game-modal");
const modalContent = document.querySelector("#modal-content");
const modalClose = document.querySelector("#modal-close");
const modalExit = document.querySelector("#modal-exit");
const detailTemplate = document.querySelector("#game-detail-template");
const authModal = document.querySelector("#auth-modal");
const authForm = document.querySelector("#auth-form");
const authName = document.querySelector("#auth-name");
const authPassword = document.querySelector("#auth-password");
const authStatus = document.querySelector("#auth-status");
const loginTrigger = document.querySelector("#login-trigger");
const logoutButton = document.querySelector("#logout-button");
const authClose = document.querySelector("#auth-close");
const authExit = document.querySelector("#auth-exit");
const userNameDisplay = document.querySelector("#user-name-display");

let activeGameId = null;
let activeCleanup = null;
