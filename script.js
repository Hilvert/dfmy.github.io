const AUTH_KEY = "game_site_auth_v2";
const ACCOUNTS_KEY = "game_site_accounts_v1";
const SESSION_KEY = "game_site_session_v1";
const COMMENT_KEY = "game_site_comments_v2";
const SETTINGS_KEY = "game_site_settings_v1";
const EASTER_EGG_URL = " https://omg-by-clark.github.io";
const EASTER_EGG_T_TARGET = 3;
const EASTER_EGG_T_WINDOW = 2500;

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
  },
  {
    id: "beat-wave",
    name: "Beat Wave",
    genre: "波形配平",
    rating: 4.8,
    players: "单人",
    platform: "网页 / 手机",
    description: "调节三路能量条，让目标波形和当前波形尽量重合。",
    features: ["三路调节", "波形配平", "误差判定"],
    mode: "rhythm",
    image: createPoster({ title: "BEAT WAVE", subtitle: "Rhythm Click", palette: ["#120d31", "#3f37c9", "#4cc9f0"], icon: "A" })
  },
  {
    id: "word-flash",
    name: "Word Flash",
    genre: "字块拼装",
    rating: 4.7,
    players: "单人",
    platform: "网页 / PC",
    description: "从散落字块中拼出目标词条，而不是直接敲键盘。",
    features: ["字块拼装", "顺序重建", "限时挑战"],
    mode: "typing",
    image: createPoster({ title: "WORD FLASH", subtitle: "Typing Sprint", palette: ["#232946", "#eebbc3", "#fffffe"], icon: "A" })
  },
  {
    id: "echo-relay",
    name: "Echo Relay",
    genre: "路径记忆",
    rating: 4.6,
    players: "单人",
    platform: "网页 / 手机",
    description: "记住发光格子的移动路线，再按同样顺序点击回去。",
    features: ["空间记忆", "路径复现", "逐轮加长"],
    mode: "sequence",
    image: createPoster({ title: "ECHO RELAY", subtitle: "Memory Chain", palette: ["#052e16", "#16a34a", "#bef264"], icon: "A" })
  },
  {
    id: "grid-guard",
    name: "Grid Guard",
    genre: "封路布防",
    rating: 4.7,
    players: "单人",
    platform: "网页 / PC",
    description: "摆放墙块封住通路，让敌方找不到去往终点的路线。",
    features: ["墙块布置", "路径阻断", "回合策略"],
    mode: "defense",
    image: createPoster({ title: "GRID GUARD", subtitle: "Lane Defense", palette: ["#2d1e2f", "#8b5cf6", "#f59e0b"], icon: "A" })
  },
  {
    id: "gravity-dock",
    name: "Gravity Dock",
    genre: "弹道停靠",
    rating: 4.8,
    players: "单人",
    platform: "网页 / 手机",
    description: "调好方向与推力，把探针送进右下角的停靠区。",
    features: ["方向微调", "推力选择", "重力飞行"],
    mode: "gravity",
    image: createPoster({ title: "GRAVITY DOCK", subtitle: "Gravity Shift", palette: ["#0b132b", "#1c2541", "#3a506b"], icon: "A" })
  },
  {
    id: "pixel-snake",
    name: "Pixel Snake",
    genre: "街机生存",
    rating: 4.9,
    players: "单人",
    platform: "网页 / 手机",
    description: "操控不断前进的小蛇吃掉能量块，变长后别撞墙也别撞到自己。",
    features: ["持续移动", "身体增长", "撞击判负"],
    mode: "snake",
    image: createPoster({ title: "PIXEL SNAKE", subtitle: "Arcade Grow", palette: ["#052e16", "#16a34a", "#a3e635"], icon: "S" })
  },
  {
    id: "shadow-relics",
    name: "Shadow Relics",
    genre: "聚光找物",
    rating: 4.8,
    players: "单人",
    platform: "网页 / 手机",
    description: "拖动聚光灯在昏暗展厅里寻找遗失 relic，全部找到才算成功。",
    features: ["光圈搜索", "隐藏目标", "限时发现"],
    mode: "spotlight",
    image: createPoster({ title: "SHADOW RELICS", subtitle: "Spotlight Hunt", palette: ["#111827", "#0ea5e9", "#f8fafc"], icon: "L" })
  },
  {
    id: "laser-trace",
    name: "Laser Trace",
    genre: "路线描线",
    rating: 4.7,
    players: "单人",
    platform: "网页 / 手机",
    description: "从起点按住出发，沿发光通道一路描到终点，途中别偏离线路。",
    features: ["连续描线", "检查点推进", "轨迹控制"],
    mode: "tracer",
    image: createPoster({ title: "LASER TRACE", subtitle: "Path Draw", palette: ["#0f172a", "#22d3ee", "#a78bfa"], icon: "T" })
  },
  {
    id: "silent-heist",
    name: "Silent Heist",
    genre: "潜行逃脱",
    rating: 4.8,
    players: "单人",
    platform: "网页 / PC",
    description: "潜入警戒房间，绕开巡逻视线拿到钥匙，再摸到出口。",
    features: ["自由移动", "视野规避", "取钥逃脱"],
    mode: "stealth",
    image: createPoster({ title: "SILENT HEIST", subtitle: "Stealth Run", palette: ["#0b132b", "#5bc0be", "#f5f3f4"], icon: "H" })
  },
  {
    id: "vault-dial",
    name: "Vault Dial",
    genre: "拨盘破译",
    rating: 4.7,
    players: "单人",
    platform: "网页 / 手机",
    description: "按照指定方向和顺序对准保险箱组合数字，逐步拧开锁芯。",
    features: ["方向约束", "组合密码", "热冷反馈"],
    mode: "safe",
    image: createPoster({ title: "VAULT DIAL", subtitle: "Safe Combo", palette: ["#1e1b4b", "#8b5cf6", "#facc15"], icon: "V" })
  },
  {
    id: "snap-hunter",
    name: "Snap Hunter",
    genre: "抓拍取景",
    rating: 4.7,
    players: "单人",
    platform: "网页 / 手机",
    description: "调焦与变焦追拍移动主体，在最合适的时机按下快门拿高分。",
    features: ["构图评分", "焦距控制", "限次快门"],
    mode: "photo",
    image: createPoster({ title: "SNAP HUNTER", subtitle: "Photo Timing", palette: ["#3f1d0f", "#fb923c", "#fef3c7"], icon: "C" })
  },
  {
    id: "neon-pong",
    name: "Neon Pong",
    genre: "经典复刻",
    rating: 4.8,
    players: "单人",
    platform: "网页 / PC",
    description: "左右移动球拍，把球不断弹回并先拿到 5 分。",
    features: ["球拍反弹", "AI 对战", "先到先赢"],
    mode: "pong",
    image: createPoster({ title: "NEON PONG", subtitle: "Bounce Rally", palette: ["#0f172a", "#38bdf8", "#e879f9"], icon: "P" })
  },
  {
    id: "tetris-fall",
    name: "Tetris",
    genre: "方块堆叠",
    rating: 4.8,
    players: "单人",
    platform: "网页 / PC",
    description: "旋转与移动下落方块，拼满整行后消除并持续向上得分。",
    features: ["行消除", "旋转下落", "分数累积"],
    mode: "tetris",
    image: createPoster({ title: "TETRIS", subtitle: "Block Fall", palette: ["#1e293b", "#0ea5e9", "#f59e0b"], icon: "T" })
  },
  {
    id: "mine-grid",
    name: "Mine Grid",
    genre: "推理扫雷",
    rating: 4.7,
    players: "单人",
    platform: "网页 / PC",
    description: "在雷区里翻开安全格子，靠数字线索清空整张地图。",
    features: ["格子推理", "旗标标记", "踩雷结束"],
    mode: "minesweeper",
    image: createPoster({ title: "MINE GRID", subtitle: "Logic Sweep", palette: ["#0f172a", "#334155", "#22c55e"], icon: "M" })
  },
  {
    id: "cargo-shift",
    name: "Cargo Shift",
    genre: "推箱解谜",
    rating: 4.7,
    players: "单人",
    platform: "网页 / PC",
    description: "推动货箱移动到指定区域，卡住一步就要重新规划路线。",
    features: ["方向推进", "箱体阻挡", "目标点完成"],
    mode: "sokoban",
    image: createPoster({ title: "CARGO SHIFT", subtitle: "Box Push", palette: ["#3f2c1c", "#8d6e63", "#f4a261"], icon: "S" })
  },
  {
    id: "neon-pinball",
    name: "Neon Pinball",
    genre: "弹珠反弹",
    rating: 4.8,
    players: "单人",
    platform: "网页 / PC",
    description: "控制两侧拨片，借助挡板和弹珠把球顶住并不断刷分。",
    features: ["弹珠物理", "拨片控制", "碰撞得分"],
    mode: "pinball",
    image: createPoster({ title: "NEON PINBALL", subtitle: "Bumper Run", palette: ["#111827", "#7c3aed", "#22d3ee"], icon: "P" })
  },
  {
    id: "merge-flow",
    name: "Merge Flow",
    genre: "数字合并",
    rating: 4.7,
    players: "单人",
    platform: "网页 / 手机",
    description: "滑动方块让相同数字不断合并，尽量拼出更大的数字。",
    features: ["滑动合并", "连锁加分", "空位管理"],
    mode: "merge2048",
    image: createPoster({ title: "MERGE FLOW", subtitle: "Tile Merge", palette: ["#1e293b", "#f97316", "#fde68a"], icon: "2" })
  },
  {
    id: "link-four",
    name: "Link Four",
    genre: "四子连线",
    rating: 4.7,
    players: "单人",
    platform: "网页 / PC",
    description: "把棋子落入列中，先连成四个同色棋子的一方获胜。",
    features: ["列落子", "四连判定", "简单对战"],
    mode: "connect4",
    image: createPoster({ title: "LINK FOUR", subtitle: "Line Drop", palette: ["#0f172a", "#2563eb", "#ef4444"], icon: "4" })
  },
  {
    id: "signal-routing",
    name: "Signal Routing",
    genre: "线路推导",
    rating: 4.7,
    players: "单人",
    platform: "网页 / PC",
    description: "旋转中继节点，把信号同时送到两个终端。",
    features: ["节点旋转", "双终端连通", "路径判断"],
    mode: "signal-routing",
    image: createPoster({ title: "SIGNAL ROUTING", subtitle: "Circuit Route", palette: ["#020617", "#2563eb", "#22d3ee"], icon: "R" })
  },
  {
    id: "deduction-grid",
    name: "Deduction Grid",
    genre: "逻辑推理",
    rating: 4.7,
    players: "单人",
    platform: "网页 / 手机",
    description: "根据线索在三列信息中找出唯一正确组合。",
    features: ["线索排除", "单选锁定", "推理提交"],
    mode: "deduction-grid",
    image: createPoster({ title: "DEDUCTION GRID", subtitle: "Logic Table", palette: ["#111827", "#7c3aed", "#fbbf24"], icon: "D" })
  },
  {
    id: "resource-scheduling",
    name: "Resource Scheduling",
    genre: "资源调度",
    rating: 4.7,
    players: "单人",
    platform: "网页 / PC",
    description: "把有限工时分配给多个项目，按回合完成所有目标。",
    features: ["工时分配", "进度积累", "回合规划"],
    mode: "resource-scheduling",
    image: createPoster({ title: "RESOURCE SCHEDULING", subtitle: "Task Planner", palette: ["#0f172a", "#0ea5e9", "#f97316"], icon: "S" })
  },
  {
    id: "logic-sorting",
    name: "Logic Sorting",
    genre: "规则排序",
    rating: 4.7,
    players: "单人",
    platform: "网页 / 手机",
    description: "按提示把卡片重新排序，规则会比表面信息更重要。",
    features: ["上下换位", "规则识别", "顺序检验"],
    mode: "logic-sorting",
    image: createPoster({ title: "LOGIC SORTING", subtitle: "Order Puzzle", palette: ["#1f2937", "#22c55e", "#a3e635"], icon: "L" })
  },
  {
    id: "hidden-negotiation",
    name: "Hidden Negotiation",
    genre: "博弈谈判",
    rating: 4.8,
    players: "单人",
    platform: "网页 / PC",
    description: "在有限回合里读懂对手的诉求，把关系与成交同时抬高。",
    features: ["状态暗示", "多选策略", "双条评分"],
    mode: "hidden-negotiation",
    image: createPoster({ title: "HIDDEN NEGOTIATION", subtitle: "Deal Balance", palette: ["#111827", "#ef4444", "#f59e0b"], icon: "N" })
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
  settingsMain: $("#settings-main-panel"),
  creditsPanel: $("#credits-panel"),
  settingsLogin: $("#settings-login-trigger"),
  creditsTrigger: $("#credits-trigger"),
  creditsBack: $("#credits-back"),
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
let easterEggPressCount = 0;
let easterEggWindowTimer = 0;

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
  els.settingsMain.classList.remove("hidden");
  els.creditsPanel.classList.add("hidden");
  els.settingsModal.classList.remove("hidden");
}

function openCredits() {
  els.settingsMain.classList.add("hidden");
  els.creditsPanel.classList.remove("hidden");
}

function closeSettings() {
  els.settingsMain.classList.remove("hidden");
  els.creditsPanel.classList.add("hidden");
  els.settingsModal.classList.add("hidden");
}

function renderUser() {
  const user = getCurrentUser();
  if (els.userName) els.userName.textContent = user ? user.name : "游客";
  if (els.settingsLogin) els.settingsLogin.textContent = user ? "账号管理" : "账号登录";
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
  if (game.mode === "rhythm") return playRhythm(stage);
  if (game.mode === "typing") return playTyping(stage);
  if (game.mode === "sequence") return playSequence(stage);
  if (game.mode === "defense") return playDefense(stage);
  if (game.mode === "gravity") return playGravity(stage);
  if (game.mode === "snake") return playSnake(stage);
  if (game.mode === "spotlight") return playSpotlight(stage);
  if (game.mode === "tracer") return playTracer(stage);
  if (game.mode === "stealth") return playStealth(stage);
  if (game.mode === "safe") return playSafe(stage);
  if (game.mode === "photo") return playPhoto(stage);
  if (game.mode === "pong") return playPong(stage);
  if (game.mode === "tetris") return playTetris(stage);
  if (game.mode === "minesweeper") return playMinesweeper(stage);
  if (game.mode === "sokoban") return playSokoban(stage);
  if (game.mode === "pinball") return playPinball(stage);
  if (game.mode === "merge2048") return playMerge2048(stage);
  if (game.mode === "connect4") return playConnect4(stage);
  if (game.mode === "signal-routing") return playSignalRouting(stage);
  if (game.mode === "deduction-grid") return playDeductionGrid(stage);
  if (game.mode === "resource-scheduling") return playResourceScheduling(stage);
  if (game.mode === "logic-sorting") return playLogicSorting(stage);
  if (game.mode === "hidden-negotiation") return playHiddenNegotiation(stage);
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
  const wallCount = 7;
  const moves = {
    up: { row: -1, col: 0 },
    down: { row: 1, col: 0 },
    left: { row: 0, col: -1 },
    right: { row: 0, col: 1 }
  };
  const keyMap = {
    arrowup: "up",
    w: "up",
    arrowdown: "down",
    s: "down",
    arrowleft: "left",
    a: "left",
    arrowright: "right",
    d: "right"
  };
  const keyOf = (row, col) => `${row}-${col}`;
  const hasPath = (layout) => {
    const queue = [{ row: start.row, col: start.col }];
    const seen = new Set([keyOf(start.row, start.col)]);
    while (queue.length) {
      const current = queue.shift();
      if (current.row === goal.row && current.col === goal.col) return true;
      [
        { row: current.row - 1, col: current.col },
        { row: current.row + 1, col: current.col },
        { row: current.row, col: current.col - 1 },
        { row: current.row, col: current.col + 1 }
      ].forEach((next) => {
        if (next.row < 0 || next.row >= size || next.col < 0 || next.col >= size) return;
        if (layout[next.row][next.col] === 1) return;
        const cellKey = keyOf(next.row, next.col);
        if (seen.has(cellKey)) return;
        seen.add(cellKey);
        queue.push(next);
      });
    }
    return false;
  };
  const createLayout = () => {
    const layout = Array.from({ length: size }, () => Array(size).fill(0));
    const cells = [];
    for (let row = 0; row < size; row += 1) {
      for (let col = 0; col < size; col += 1) {
        if ((row === start.row && col === start.col) || (row === goal.row && col === goal.col)) continue;
        cells.push({ row, col });
      }
    }
    for (let attempt = 0; attempt < 200; attempt += 1) {
      cells.forEach(({ row, col }) => {
        layout[row][col] = 0;
      });
      const shuffled = [...cells].sort(() => Math.random() - 0.5);
      shuffled.slice(0, wallCount).forEach(({ row, col }) => {
        layout[row][col] = 1;
      });
      if (hasPath(layout)) return layout.map((row) => row.slice());
    }
    const fallback = Array.from({ length: size }, () => Array(size).fill(0));
    const path = [
      [0, 0], [0, 1], [0, 2], [1, 2], [2, 2], [2, 3], [2, 4], [3, 4], [4, 4]
    ];
    const pathKeys = new Set(path.map(([row, col]) => keyOf(row, col)));
    cells
      .filter(({ row, col }) => !pathKeys.has(keyOf(row, col)))
      .sort(() => Math.random() - 0.5)
      .slice(0, wallCount)
      .forEach(({ row, col }) => {
        fallback[row][col] = 1;
      });
    return fallback;
  };
  const randomLayout = createLayout();
  let layout = randomLayout.map((row) => row.slice());
  let player = { row: start.row, col: start.col };
  let steps = 14;
  let finished = false;
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">步数<strong id="maze-steps">${steps}</strong></span>
        <span class="status-pill">位置<strong id="maze-position">1,1</strong></span>
      </div>
      <div class="maze-grid" id="maze-grid"></div>
      <div class="stage-toolbar">
        <button class="button secondary" data-maze-move="up" type="button">上</button>
        <button class="button secondary" data-maze-move="left" type="button">左</button>
        <button class="button secondary" data-maze-move="down" type="button">下</button>
        <button class="button secondary" data-maze-move="right" type="button">右</button>
      </div>
      <div class="stage-note" id="maze-note">使用按钮或 W/A/S/D 抵达右下角。</div>
    </div>
  `;
  const grid = stage.querySelector("#maze-grid");
  const stepsNode = stage.querySelector("#maze-steps");
  const positionNode = stage.querySelector("#maze-position");
  const note = stage.querySelector("#maze-note");
  const buttons = stage.querySelectorAll("[data-maze-move]");

  const finish = (text) => {
    finished = true;
    note.textContent = text;
    buttons.forEach((button) => {
      button.disabled = true;
    });
  };

  const render = () => {
    stepsNode.textContent = String(steps);
    positionNode.textContent = `${player.row + 1},${player.col + 1}`;
    grid.innerHTML = layout.map((cells, rowIndex) => cells.map((cell, colIndex) => {
      const classes = ["maze-cell"];
      if (cell === 1) classes.push("wall");
      if (rowIndex === goal.row && colIndex === goal.col) classes.push("goal");
      if (rowIndex === player.row && colIndex === player.col) classes.push("player");
      return `<div class="${classes.join(" ")}"></div>`;
    }).join("")).join("");
  };

  const move = (direction) => {
    if (finished || steps <= 0) return;
    const delta = moves[direction];
    if (!delta) return;
    steps -= 1;
    const next = { row: player.row + delta.row, col: player.col + delta.col };
    if (next.row < 0 || next.row >= size || next.col < 0 || next.col >= size || layout[next.row][next.col] === 1) {
      note.textContent = "撞到墙体，继续找路。";
      if (steps <= 0) {
        render();
        finish("步数耗尽，迷宫突围失败。");
        return;
      }
      render();
      return;
    }
    player = next;
    if (player.row === goal.row && player.col === goal.col) {
      render();
      finish("成功穿越迷宫。");
      return;
    }
    if (steps <= 0) {
      render();
      finish("步数耗尽，迷宫突围失败。");
      return;
    }
    note.textContent = "路线正确，继续前进。";
    render();
  };

  const onKeyDown = (event) => {
    if (finished) return;
    if (event.target instanceof Element && event.target.closest("input, textarea, select, [contenteditable='true']")) return;
    const direction = keyMap[event.key.toLowerCase()];
    if (!direction) return;
    event.preventDefault();
    move(direction);
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => move(button.dataset.mazeMove));
  });

  window.addEventListener("keydown", onKeyDown);
  render();
  return () => {
    window.removeEventListener("keydown", onKeyDown);
  };
}

function playRhythm(stage) {
  const channels = [
    { key: "bass", label: "低频" },
    { key: "mid", label: "中频" },
    { key: "treble", label: "高频" }
  ];
  const tolerance = 12;
  let round = 1;
  let score = 0;
  let misses = 0;
  let timeLeft = 45;
  let finished = false;
  let target = channels.map(() => 50);
  let levels = channels.map(() => 50);
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">命中<strong id="rhythm-score">${score}</strong></span>
        <span class="status-pill">轮次<strong id="rhythm-round">${round}</strong>/5</span>
        <span class="status-pill">时间<strong id="rhythm-time">${timeLeft}</strong>s</span>
      </div>
      <div class="mixer-board" id="mixer-board"></div>
      <div class="stage-toolbar">
        <button class="button secondary" id="mixer-reset" type="button">重置当前波形</button>
        <button class="button primary" id="mixer-submit" type="button">锁定波形</button>
      </div>
      <div class="log-box" id="mixer-log">调整三路波形，让它们贴近目标线。</div>
    </div>
  `;
  const board = stage.querySelector("#mixer-board");
  const scoreNode = stage.querySelector("#rhythm-score");
  const roundNode = stage.querySelector("#rhythm-round");
  const timeNode = stage.querySelector("#rhythm-time");
  const log = stage.querySelector("#mixer-log");
  const clamp = (value) => Math.max(0, Math.min(100, value));

  const render = () => {
    board.innerHTML = channels.map((channel, index) => {
      const current = levels[index];
      const goal = target[index];
      return `
        <section class="mixer-card">
          <div class="mixer-card-head">
            <strong>${channel.label}</strong>
            <span>目标 ${goal}% / 当前 ${current}%</span>
          </div>
          <div class="mixer-meter" aria-hidden="true">
            <div class="mixer-current" style="height:${current}%"></div>
            <div class="mixer-target" style="bottom:${goal}%"></div>
          </div>
          <div class="mixer-controls">
            <button class="button secondary" data-mixer-index="${index}" data-mixer-delta="-10" type="button">-10</button>
            <button class="button secondary" data-mixer-index="${index}" data-mixer-delta="10" type="button">+10</button>
          </div>
        </section>
      `;
    }).join("");
    scoreNode.textContent = String(score);
    roundNode.textContent = String(round);
    timeNode.textContent = String(timeLeft);
  };

  const createRound = () => {
    target = channels.map(() => 20 + Math.floor(Math.random() * 61));
    levels = channels.map(() => 40 + Math.floor(Math.random() * 21));
    render();
  };

  const finish = (text) => {
    if (finished) return;
    finished = true;
    log.textContent = text;
    board.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });
    stage.querySelectorAll("#mixer-reset, #mixer-submit").forEach((button) => {
      button.disabled = true;
    });
    clearInterval(timer);
  };

  const submit = () => {
    if (finished) return;
    const success = target.every((goal, index) => Math.abs(goal - levels[index]) <= tolerance);
    if (success) {
      score += 1;
      log.textContent = "配平成功，波形已锁定。";
    } else {
      misses += 1;
      log.textContent = `偏差过大，当前偏移 ${target.map((goal, index) => Math.abs(goal - levels[index])).join(" / ")}`;
    }
    if (round >= 5) {
      render();
      finish(`波形合成结束，成功 ${score} 次，失误 ${misses} 次。`);
      return;
    }
    round += 1;
    createRound();
  };

  const onClick = (event) => {
    const control = event.target.closest("[data-mixer-index]");
    if (control) {
      if (finished) return;
      const index = Number(control.dataset.mixerIndex);
      const delta = Number(control.dataset.mixerDelta);
      levels[index] = clamp(levels[index] + delta);
      render();
      return;
    }
    if (event.target.closest("#mixer-reset")) {
      if (finished) return;
      levels = target.map(() => 50);
      log.textContent = "当前波形已重置。";
      render();
      return;
    }
    if (event.target.closest("#mixer-submit")) {
      submit();
    }
  };

  const timer = window.setInterval(() => {
    if (finished) return;
    timeLeft -= 1;
    if (timeLeft <= 0) {
      timeLeft = 0;
      render();
      finish(`时间结束，成功 ${score} 次。`);
      return;
    }
    render();
  }, 1000);

  stage.addEventListener("click", onClick);
  createRound();
  return () => {
    clearInterval(timer);
    stage.removeEventListener("click", onClick);
  };
}

function playTyping(stage) {
  const words = ["BOLT", "WARP", "CLOUD", "PIXEL", "FROST"];
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let index = 0;
  let score = 0;
  let misses = 0;
  let timeLeft = 50;
  let finished = false;
  let target = words[index];
  let tiles = [];
  let picked = [];
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">得分<strong id="typing-score">${score}</strong></span>
        <span class="status-pill">词条<strong id="typing-round">${index + 1}</strong>/5</span>
        <span class="status-pill">时间<strong id="typing-time">${timeLeft}</strong>s</span>
      </div>
      <div class="score-box">
        目标字块：<strong id="typing-word"></strong>
      </div>
      <div class="forge-board">
        <div class="forge-slots" id="forge-slots"></div>
        <div class="forge-bank" id="forge-bank"></div>
      </div>
      <div class="stage-toolbar">
        <button class="button secondary" id="forge-back" type="button">退回一块</button>
        <button class="button secondary" id="forge-clear" type="button">清空字块</button>
        <button class="button primary" id="forge-submit" type="button">确认字块</button>
      </div>
      <div class="log-box" id="typing-log">从字块中拼出目标词条，而不是直接输入。</div>
    </div>
  `;
  const scoreNode = stage.querySelector("#typing-score");
  const roundNode = stage.querySelector("#typing-round");
  const timeNode = stage.querySelector("#typing-time");
  const wordNode = stage.querySelector("#typing-word");
  const slots = stage.querySelector("#forge-slots");
  const bank = stage.querySelector("#forge-bank");
  const log = stage.querySelector("#typing-log");
  const shuffle = (items) => items.slice().sort(() => Math.random() - 0.5);

  const render = () => {
    scoreNode.textContent = String(score);
    roundNode.textContent = String(index + 1);
    timeNode.textContent = String(timeLeft);
    wordNode.textContent = target;
    slots.innerHTML = target.split("").map((_, slotIndex) => {
      const tile = picked[slotIndex];
      return `<div class="forge-slot${tile ? " filled" : ""}">${tile ? tile.char : ""}</div>`;
    }).join("");
    bank.innerHTML = tiles.map((tile) => `
      <button class="forge-tile${tile.used ? " used" : ""}" data-tile="${tile.id}" type="button" ${tile.used ? "disabled" : ""}>${tile.char}</button>
    `).join("");
  };

  const buildTiles = () => {
    const extras = shuffle(alphabet.filter((char) => !target.includes(char))).slice(0, 3);
    tiles = shuffle([
      ...target.split("").map((char, tileIndex) => ({ id: `t-${index}-${tileIndex}`, char, used: false })),
      ...extras.map((char, extraIndex) => ({ id: `x-${index}-${extraIndex}`, char, used: false }))
    ]);
    picked = [];
  };

  const finish = (text) => {
    if (finished) return;
    finished = true;
    log.textContent = text;
    bank.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });
    stage.querySelectorAll("#forge-back, #forge-clear, #forge-submit").forEach((button) => {
      button.disabled = true;
    });
    clearInterval(timer);
  };

  const nextRound = () => {
    index += 1;
    if (index >= words.length) {
      render();
      finish(`字块完成，成功 ${score} 次，失误 ${misses} 次。`);
      return;
    }
    target = words[index];
    buildTiles();
    log.textContent = `继续拼出：${target}`;
    render();
  };

  const submit = () => {
    if (finished) return;
    if (picked.length !== target.length) {
      misses += 1;
      log.textContent = "字块数量还不够。";
      render();
      return;
    }
    const answer = picked.map((tile) => tile.char).join("");
    if (answer !== target) {
      misses += 1;
      log.textContent = `顺序错误，当前答案 ${answer}`;
      render();
      return;
    }
    score += 1;
    log.textContent = `拼装成功：${target}`;
    render();
    nextRound();
  };

  const onClick = (event) => {
    const tileButton = event.target.closest("[data-tile]");
    if (tileButton) {
      if (finished) return;
      const tile = tiles.find((item) => item.id === tileButton.dataset.tile);
      if (!tile || tile.used || picked.length >= target.length) return;
      tile.used = true;
      picked.push(tile);
      log.textContent = `已选 ${picked.length}/${target.length}`;
      render();
      return;
    }
    if (event.target.closest("#forge-back")) {
      if (finished) return;
      const tile = picked.pop();
      if (!tile) return;
      tile.used = false;
      log.textContent = "退回一块字牌。";
      render();
      return;
    }
    if (event.target.closest("#forge-clear")) {
      if (finished) return;
      picked.forEach((tile) => {
        tile.used = false;
      });
      picked = [];
      log.textContent = "已清空字块。";
      render();
      return;
    }
    if (event.target.closest("#forge-submit")) {
      submit();
    }
  };

  const timer = window.setInterval(() => {
    if (finished) return;
    timeLeft -= 1;
    if (timeLeft <= 0) {
      timeLeft = 0;
      render();
      finish(`时间结束，成功 ${score} 次。`);
      return;
    }
    render();
  }, 1000);

  stage.addEventListener("click", onClick);
  buildTiles();
  render();
  log.textContent = `从字块中拼出：${target}`;
  return () => {
    clearInterval(timer);
    stage.removeEventListener("click", onClick);
  };
}

function playSequence(stage) {
  const size = 4;
  let round = 1;
  let score = 0;
  let misses = 0;
  let path = [];
  let input = [];
  let revealIndex = -1;
  let accepting = false;
  let finished = false;
  let timers = [];
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">完成<strong id="sequence-score">${score}</strong></span>
        <span class="status-pill">轮次<strong id="sequence-round">${round}</strong>/5</span>
        <span class="status-pill">失误<strong id="sequence-miss">${misses}</strong></span>
      </div>
      <div class="echo-board" id="echo-board"></div>
      <div class="log-box" id="sequence-log">观察发光路径，再按相同顺序点击格子。</div>
    </div>
  `;
  const board = stage.querySelector("#echo-board");
  const scoreNode = stage.querySelector("#sequence-score");
  const roundNode = stage.querySelector("#sequence-round");
  const missNode = stage.querySelector("#sequence-miss");
  const log = stage.querySelector("#sequence-log");

  const clearTimers = () => {
    timers.forEach((timer) => clearTimeout(timer));
    timers = [];
  };

  const keyOf = (cell) => `${cell.row}-${cell.col}`;
  const makePath = (length) => {
    const start = {
      row: Math.floor(Math.random() * size),
      col: Math.floor(Math.random() * size)
    };
    const nextPath = [start];
    const seen = new Set([keyOf(start)]);
    while (nextPath.length < length) {
      const last = nextPath[nextPath.length - 1];
      const options = [
        { row: last.row - 1, col: last.col },
        { row: last.row + 1, col: last.col },
        { row: last.row, col: last.col - 1 },
        { row: last.row, col: last.col + 1 }
      ].filter((cell) => cell.row >= 0 && cell.row < size && cell.col >= 0 && cell.col < size && !seen.has(keyOf(cell)));
      if (!options.length) return makePath(length);
      const choice = options[Math.floor(Math.random() * options.length)];
      seen.add(keyOf(choice));
      nextPath.push(choice);
    }
    return nextPath.map((cell) => ({ ...cell, index: cell.row * size + cell.col }));
  };

  const render = () => {
    board.innerHTML = Array.from({ length: size * size }, (_, index) => {
      const row = Math.floor(index / size);
      const col = index % size;
      const classes = ["echo-cell"];
      const revealCell = path[revealIndex];
      if (revealCell && revealCell.index === index) classes.push("active");
      if (input.includes(index)) classes.push("selected");
      return `<button class="${classes.join(" ")}" data-echo-index="${index}" type="button">${row + 1}:${col + 1}</button>`;
    }).join("");
    scoreNode.textContent = String(score);
    roundNode.textContent = String(round);
    missNode.textContent = String(misses);
  };

  const finish = (text) => {
    if (finished) return;
    finished = true;
    accepting = false;
    log.textContent = text;
    board.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });
    clearTimers();
  };

  const startRound = () => {
    clearTimers();
    accepting = false;
    input = [];
    revealIndex = -1;
    path = makePath(Math.min(3 + round, 7));
    render();
    log.textContent = `第 ${round} 轮：观察路径长度 ${path.length}。`;
    let step = 0;
    const pulse = () => {
      if (step >= path.length) {
        timers.push(window.setTimeout(() => {
          revealIndex = -1;
          render();
          accepting = true;
          log.textContent = "现在按同样顺序点击格子。";
        }, 320));
        return;
      }
      revealIndex = step;
      render();
      timers.push(window.setTimeout(() => {
        step += 1;
        pulse();
      }, 360));
    };
    timers.push(window.setTimeout(pulse, 260));
  };

  const onClick = (event) => {
    const button = event.target.closest("[data-echo-index]");
    if (!button || !accepting || finished) return;
    const index = Number(button.dataset.echoIndex);
    const expected = path[input.length]?.index;
    if (index !== expected) {
      misses += 1;
      render();
      finish(`路径错误，正确路线是 ${path.map((cell) => `${cell.row + 1}:${cell.col + 1}`).join(" → ")}`);
      return;
    }
    input.push(index);
    render();
    if (input.length >= path.length) {
      score += 1;
      if (round >= 5) {
        render();
        finish(`路径复现完成，成功 ${score} 次，失误 ${misses} 次。`);
        return;
      }
      round += 1;
      accepting = false;
      log.textContent = "路径正确，下一条会更长。";
      render();
      timers.push(window.setTimeout(startRound, 700));
      return;
    }
    log.textContent = `已完成 ${input.length}/${path.length}`;
  };

  stage.addEventListener("click", onClick);
  startRound();
  return () => {
    clearTimers();
    stage.removeEventListener("click", onClick);
  };
}

function playDefense(stage) {
  const size = 5;
  const maxBlocks = 4;
  const start = { row: 0, col: 0 };
  const goal = { row: 4, col: 4 };
  const templates = [
    [
      [0, 0, 0, 1, 0],
      [1, 0, 0, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 0, 0, 1],
      [0, 0, 0, 0, 0]
    ],
    [
      [0, 1, 0, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 0, 1, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 0, 1, 0]
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 1, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0]
    ],
    [
      [0, 0, 1, 0, 0],
      [1, 0, 1, 0, 1],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 1],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 0, 1, 1, 0],
      [0, 0, 0, 0, 0]
    ]
  ];
  let round = 1;
  let score = 0;
  let shields = 3;
  let blocked = new Set();
  let layout = templates[0].map((row) => row.slice());
  let finished = false;
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">封锁<strong id="defense-score">${score}</strong></span>
        <span class="status-pill">回合<strong id="defense-round">${round}</strong>/5</span>
        <span class="status-pill">护盾<strong id="defense-shield">${shields}</strong></span>
        <span class="status-pill">布防<strong id="defense-blocks">0/${maxBlocks}</strong></span>
      </div>
      <div class="guard-board" id="guard-board"></div>
      <div class="stage-toolbar">
        <button class="button secondary" id="guard-clear" type="button">重置布防</button>
        <button class="button primary" id="guard-deploy" type="button">部署阻断</button>
      </div>
      <div class="log-box" id="defense-log">点击空格布置墙块，把入侵路线彻底封死。</div>
    </div>
  `;
  const board = stage.querySelector("#guard-board");
  const scoreNode = stage.querySelector("#defense-score");
  const roundNode = stage.querySelector("#defense-round");
  const shieldNode = stage.querySelector("#defense-shield");
  const blocksNode = stage.querySelector("#defense-blocks");
  const log = stage.querySelector("#defense-log");

  const keyOf = (row, col) => `${row}-${col}`;
  const buildLayout = (roundIndex) => templates[(roundIndex - 1) % templates.length].map((row) => row.slice());
  const isBlocked = (row, col) => layout[row][col] === 1 || blocked.has(keyOf(row, col));

  const render = () => {
    scoreNode.textContent = String(score);
    roundNode.textContent = String(round);
    shieldNode.textContent = String(shields);
    blocksNode.textContent = `${blocked.size}/${maxBlocks}`;
    board.innerHTML = layout.map((cells, rowIndex) => cells.map((cell, colIndex) => {
      const classes = ["guard-cell"];
      const key = keyOf(rowIndex, colIndex);
      if (cell === 1) classes.push("fixed");
      if (blocked.has(key)) classes.push("placed");
      if (rowIndex === start.row && colIndex === start.col) classes.push("start");
      if (rowIndex === goal.row && colIndex === goal.col) classes.push("goal");
      const label = rowIndex === start.row && colIndex === start.col ? "S" : rowIndex === goal.row && colIndex === goal.col ? "G" : cell === 1 ? "◆" : blocked.has(key) ? "■" : "";
      return `<button class="${classes.join(" ")}" data-guard-index="${key}" type="button">${label}</button>`;
    }).join("")).join("");
  };

  const pathLength = () => {
    const queue = [{ row: start.row, col: start.col, dist: 0 }];
    const seen = new Set([keyOf(start.row, start.col)]);
    while (queue.length) {
      const current = queue.shift();
      if (current.row === goal.row && current.col === goal.col) return current.dist;
      [
        { row: current.row - 1, col: current.col },
        { row: current.row + 1, col: current.col },
        { row: current.row, col: current.col - 1 },
        { row: current.row, col: current.col + 1 }
      ].forEach((next) => {
        if (next.row < 0 || next.row >= size || next.col < 0 || next.col >= size) return;
        const nextKey = keyOf(next.row, next.col);
        if (seen.has(nextKey) || isBlocked(next.row, next.col)) return;
        seen.add(nextKey);
        queue.push({ ...next, dist: current.dist + 1 });
      });
    }
    return null;
  };

  const finish = (text) => {
    if (finished) return;
    finished = true;
    log.textContent = text;
    stage.querySelectorAll("#guard-clear, #guard-deploy").forEach((button) => {
      button.disabled = true;
    });
    board.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });
  };

  const resetRound = () => {
    blocked = new Set();
    layout = buildLayout(round);
    render();
  };

  const advanceRound = (message) => {
    if (round >= 5) {
      finish(message);
      return;
    }
    round += 1;
    resetRound();
    log.textContent = message;
  };

  const deploy = () => {
    if (finished) return;
    const distance = pathLength();
    if (distance === null) {
      score += 1;
      render();
      advanceRound("通路已封死，入侵者无路可走。");
      if (round > 5) finish(`封路完成，成功 ${score} 次。`);
      return;
    }
    shields -= 1;
    render();
    if (shields <= 0) {
      finish(`防线被突破，最短路线仍有 ${distance} 步。`);
      return;
    }
    advanceRound(`仍有通路，最短路线 ${distance} 步。`);
  };

  const onClick = (event) => {
    const cellButton = event.target.closest("[data-guard-index]");
    if (cellButton) {
      if (finished) return;
      const [row, col] = cellButton.dataset.guardIndex.split("-").map(Number);
      if ((row === start.row && col === start.col) || (row === goal.row && col === goal.col)) return;
      const cellKey = keyOf(row, col);
      if (blocked.has(cellKey)) {
        blocked.delete(cellKey);
      } else if (blocked.size < maxBlocks) {
        blocked.add(cellKey);
      } else {
        log.textContent = `布防点已满，最多只能放置 ${maxBlocks} 个墙块。`;
        return;
      }
      render();
      return;
    }
    if (event.target.closest("#guard-clear")) {
      if (finished) return;
      blocked.clear();
      log.textContent = "布防已清空。";
      render();
      return;
    }
    if (event.target.closest("#guard-deploy")) {
      deploy();
    }
  };

  stage.addEventListener("click", onClick);
  render();
  return () => {
    stage.removeEventListener("click", onClick);
  };
}

function playGravity(stage) {
  const size = 5;
  const start = { row: 0, col: 0 };
  const goal = { row: 4, col: 4 };
  const layouts = [
    [
      [0, 0, 0, 1, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 1, 0],
      [1, 0, 0, 0, 0],
      [0, 0, 1, 0, 0]
    ],
    [
      [0, 0, 0, 1, 0],
      [1, 0, 0, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0]
    ]
  ];
  const directions = {
    up: { label: "上", x: 0, y: -1 },
    down: { label: "下", x: 0, y: 1 },
    left: { label: "左", x: -1, y: 0 },
    right: { label: "右", x: 1, y: 0 }
  };
  let round = 1;
  let score = 0;
  let hull = 3;
  let power = 2;
  let direction = "right";
  let layout = layouts[0].map((row) => row.slice());
  let probe = { x: start.col + 0.5, y: start.row + 0.5 };
  let velocity = { x: 0, y: 0 };
  let launching = false;
  let finished = false;
  let flightTimer = 0;
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">停靠<strong id="gravity-score">${score}</strong></span>
        <span class="status-pill">回合<strong id="gravity-round">${round}</strong>/5</span>
        <span class="status-pill">护壳<strong id="gravity-hull">${hull}</strong></span>
        <span class="status-pill">方向<strong id="gravity-direction-label"></strong></span>
        <span class="status-pill">推力<strong id="gravity-power-label"></strong></span>
      </div>
      <div class="dock-board" id="dock-board"></div>
      <div class="dock-controls">
        <div class="stage-toolbar" id="dock-direction-controls"></div>
        <div class="stage-toolbar" id="dock-power-controls"></div>
      </div>
      <div class="stage-toolbar">
        <button class="button secondary" id="dock-reset" type="button">重置飞行器</button>
        <button class="button primary" id="dock-launch" type="button">发射探针</button>
      </div>
      <div class="log-box" id="gravity-log">调好方向与推力，把探针送入右下角停靠区。</div>
    </div>
  `;
  const board = stage.querySelector("#dock-board");
  const scoreNode = stage.querySelector("#gravity-score");
  const roundNode = stage.querySelector("#gravity-round");
  const hullNode = stage.querySelector("#gravity-hull");
  const directionLabel = stage.querySelector("#gravity-direction-label");
  const powerLabel = stage.querySelector("#gravity-power-label");
  const directionControls = stage.querySelector("#dock-direction-controls");
  const powerControls = stage.querySelector("#dock-power-controls");
  const resetButton = stage.querySelector("#dock-reset");
  const launchButton = stage.querySelector("#dock-launch");
  const log = stage.querySelector("#gravity-log");

  const currentLayout = () => layouts[(round - 1) % layouts.length].map((row) => row.slice());
  const renderControls = () => {
    directionLabel.textContent = directions[direction].label;
    powerLabel.textContent = String(power);
    directionControls.innerHTML = Object.entries(directions).map(([key, item]) => `
      <button class="button secondary${direction === key ? " active" : ""}" data-dock-direction="${key}" type="button">${item.label}</button>
    `).join("");
    powerControls.innerHTML = [1, 2, 3, 4].map((value) => `
      <button class="button secondary${power === value ? " active" : ""}" data-dock-power="${value}" type="button">推力 ${value}</button>
    `).join("");
  };

  const render = () => {
    layout = currentLayout();
    scoreNode.textContent = String(score);
    roundNode.textContent = String(round);
    hullNode.textContent = String(hull);
    renderControls();
    board.innerHTML = layout.map((cells, rowIndex) => cells.map((cell, colIndex) => {
      const classes = ["dock-cell"];
      if (cell === 1) classes.push("wall");
      if (rowIndex === goal.row && colIndex === goal.col) classes.push("goal");
      if (rowIndex === start.row && colIndex === start.col && !launching) classes.push("start");
      return `<div class="${classes.join(" ")}"></div>`;
    }).join("")).join("") + `<div class="dock-probe" id="dock-probe" style="left:${(probe.x / (size - 1)) * 100}%;top:${(probe.y / (size - 1)) * 100}%;"></div>`;
    const probeNode = stage.querySelector("#dock-probe");
    if (probeNode) {
      probeNode.style.left = `${(probe.x / (size - 1)) * 100}%`;
      probeNode.style.top = `${(probe.y / (size - 1)) * 100}%`;
    }
  };

  const finish = (text) => {
    if (finished) return;
    finished = true;
    clearInterval(flightTimer);
    log.textContent = text;
    stage.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });
  };

  const resetProbe = () => {
    launching = false;
    probe = { x: start.col + 0.5, y: start.row + 0.5 };
    velocity = { x: 0, y: 0 };
    render();
  };

  const startRound = () => {
    layout = currentLayout();
    resetProbe();
    log.textContent = `第 ${round} 轮：挑选推力后发射。`;
  };

  const advanceRound = (text, success) => {
    clearInterval(flightTimer);
    launching = false;
    if (success) {
      score += 1;
    } else {
      hull -= 1;
    }
    render();
    log.textContent = text;
    if (hull <= 0) {
      finish(`飞行器失稳，成功停靠 ${score} 次。`);
      return;
    }
    if (round >= 5) {
      finish(`停靠完成，成功 ${score} 次，护壳剩余 ${hull}。`);
      return;
    }
    round += 1;
    window.setTimeout(startRound, 650);
  };

  const launch = () => {
    if (finished || launching) return;
    launching = true;
    probe = { x: start.col + 0.5, y: start.row + 0.5 };
    const vector = directions[direction];
    velocity = {
      x: vector.x * power * 0.34,
      y: vector.y * power * 0.34
    };
    let ticks = 0;
    clearInterval(flightTimer);
    flightTimer = window.setInterval(() => {
      if (finished) return;
      velocity.y += 0.1;
      probe.x += velocity.x;
      probe.y += velocity.y;
      ticks += 1;
      const row = Math.floor(probe.y);
      const col = Math.floor(probe.x);
      if (row < 0 || row >= size || col < 0 || col >= size) {
        advanceRound("探针偏离轨道，飞出停靠区。", false);
        return;
      }
      if (layout[row][col] === 1) {
        advanceRound("撞上碎石带，轨迹被打断。", false);
        return;
      }
      if (row === goal.row && col === goal.col) {
        if (Math.abs(velocity.x) + Math.abs(velocity.y) <= 1.25) {
          advanceRound("精准停靠，推力校准成功。", true);
        } else {
          advanceRound("掠过停靠区，速度过快。", false);
        }
        return;
      }
      if (ticks >= 18) {
        advanceRound("推力耗尽，未能进入停靠区。", false);
        return;
      }
      render();
    }, 120);
  };

  const onClick = (event) => {
    const directionButton = event.target.closest("[data-dock-direction]");
    if (directionButton) {
      if (finished || launching) return;
      direction = directionButton.dataset.dockDirection;
      render();
      return;
    }
    const powerButton = event.target.closest("[data-dock-power]");
    if (powerButton) {
      if (finished || launching) return;
      power = Number(powerButton.dataset.dockPower);
      render();
      return;
    }
    if (event.target.closest("#dock-reset")) {
      if (finished || launching) return;
      resetProbe();
      log.textContent = "飞行器已重置。";
      return;
    }
    if (event.target.closest("#dock-launch")) {
      launch();
    }
  };

  stage.addEventListener("click", onClick);
  render();
  return () => {
    clearInterval(flightTimer);
    stage.removeEventListener("click", onClick);
  };
}


function playSignalRouting(stage) {
  const rows = 4;
  const cols = 4;
  const directions = {
    up: { row: -1, col: 0, opposite: 'down' },
    down: { row: 1, col: 0, opposite: 'up' },
    left: { row: 0, col: -1, opposite: 'right' },
    right: { row: 0, col: 1, opposite: 'left' }
  };
  const baseLayout = [
    { row: 0, col: 0, type: 'source', rotation: 0, fixed: true },
    { row: 0, col: 1, type: 'line', rotation: 0 },
    { row: 0, col: 2, type: 'tee', rotation: 1 },
    { row: 0, col: 3, type: 'target', rotation: 0, fixed: true, target: 'A' },
    { row: 1, col: 2, type: 'corner', rotation: 0 },
    { row: 1, col: 3, type: 'line', rotation: 1 },
    { row: 2, col: 3, type: 'line', rotation: 1 },
    { row: 3, col: 3, type: 'target', rotation: 0, fixed: true, target: 'B' }
  ];
  const tiles = baseLayout.map((tile) => ({
    ...tile,
    rotation: tile.fixed ? tile.rotation : Math.floor(Math.random() * 4)
  }));
  let steps = 0;
  let finished = false;
  const tileMap = new Map(tiles.map((tile) => [`${tile.row}:${tile.col}`, tile]));
  stage.innerHTML = `
    <div class='play-stage'>
      <div class='status-line'>
        <span class='status-pill'>连通<strong id='routing-linked'>0</strong>/2</span>
        <span class='status-pill'>步数<strong id='routing-steps'>0</strong></span>
      </div>
      <div class='score-box'>旋转中继节点，把信号从左上角导向两个终端。</div>
      <div class='routing-board' id='routing-board'></div>
      <div class='stage-note' id='routing-note'>点击节点旋转，连通全部终端即可通关。</div>
    </div>
  `;
  const board = stage.querySelector('#routing-board');
  const linkedNode = stage.querySelector('#routing-linked');
  const stepsNode = stage.querySelector('#routing-steps');
  const note = stage.querySelector('#routing-note');
  const activeTargets = ['0:3', '3:3'];

  const openDirs = (tile) => {
    if (tile.type === 'source') return ['right'];
    if (tile.type === 'target' && tile.target === 'A') return ['left'];
    if (tile.type === 'target' && tile.target === 'B') return ['up'];
    if (tile.type === 'line') return tile.rotation % 2 === 0 ? ['left', 'right'] : ['up', 'down'];
    if (tile.type === 'corner') {
      return [
        ['up', 'right'],
        ['right', 'down'],
        ['down', 'left'],
        ['left', 'up']
      ][tile.rotation % 4];
    }
    return [
      ['up', 'right', 'down'],
      ['right', 'down', 'left'],
      ['down', 'left', 'up'],
      ['left', 'up', 'right']
    ][tile.rotation % 4];
  };

  const glyphFor = (tile) => {
    if (tile.type === 'source') return 'S';
    if (tile.type === 'target') return tile.target;
    if (tile.type === 'line') return tile.rotation % 2 === 0 ? '─' : '│';
    if (tile.type === 'corner') return ['└', '┌', '┐', '┘'][tile.rotation % 4];
    return ['┴', '├', '┬', '┤'][tile.rotation % 4];
  };

  const traverse = () => {
    const visited = new Set();
    const queue = ['0:0'];
    visited.add('0:0');
    while (queue.length) {
      const current = queue.shift();
      const tile = tileMap.get(current);
      if (!tile) continue;
      for (const dir of openDirs(tile)) {
        const nextRow = tile.row + directions[dir].row;
        const nextCol = tile.col + directions[dir].col;
        if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols) continue;
        const nextKey = `${nextRow}:${nextCol}`;
        const nextTile = tileMap.get(nextKey);
        if (!nextTile) continue;
        if (!openDirs(nextTile).includes(directions[dir].opposite)) continue;
        if (!visited.has(nextKey)) {
          visited.add(nextKey);
          queue.push(nextKey);
        }
      }
    }
    return visited;
  };

  const finish = (text) => {
    if (finished) return;
    finished = true;
    note.textContent = text;
    render();
  };

  const render = () => {
    const visited = traverse();
    const linked = activeTargets.filter((key) => visited.has(key)).length;
    linkedNode.textContent = String(linked);
    stepsNode.textContent = String(steps);
    board.innerHTML = Array.from({ length: rows * cols }, (_, index) => {
      const row = Math.floor(index / cols);
      const col = index % cols;
      const key = `${row}:${col}`;
      const tile = tileMap.get(key);
      if (!tile) {
        return `<div class='routing-hole' aria-hidden='true'></div>`;
      }
      const classes = ['routing-cell', `type-${tile.type}`];
      if (visited.has(key)) classes.push('live');
      if (tile.type === 'source' || tile.type === 'target') classes.push('fixed');
      const disabled = tile.fixed || finished ? 'disabled' : '';
      return `<button class='${classes.join(' ')}' type='button' data-routing-key='${key}' ${disabled}>${glyphFor(tile)}</button>`;
    }).join('');
    if (!finished && linked === activeTargets.length) {
      finish('全部终端已连通，线路稳定。');
    }
  };

  const onClick = (event) => {
    const target = event.target.closest('[data-routing-key]');
    if (!target || finished) return;
    const tile = tileMap.get(target.dataset.routingKey);
    if (!tile || tile.fixed) return;
    tile.rotation = (tile.rotation + 1) % 4;
    steps += 1;
    render();
  };

  stage.addEventListener('click', onClick);
  render();
  return () => {
    stage.removeEventListener('click', onClick);
  };
}

function playDeductionGrid(stage) {
  const suspects = [
    { name: '红伞', clue: '红伞不在档案室。' },
    { name: '蓝鞋', clue: '蓝鞋不在天台。' },
    { name: '绿灯', clue: '绿灯不在温室。' }
  ];
  const rooms = ['档案室', '天台', '温室'];
  const solution = [1, 0, 2];
  const selection = Array.from({ length: suspects.length }, () => null);
  let attempts = 3;
  let finished = false;
  stage.innerHTML = `
    <div class='play-stage'>
      <div class='status-line'>
        <span class='status-pill'>尝试<strong id='deduction-attempts'>3</strong></span>
        <span class='status-pill'>已选<strong id='deduction-selected'>0</strong>/3</span>
      </div>
      <div class='score-box'>根据线索锁定每一行唯一正确的房间。</div>
      <div class='deduction-board' id='deduction-board'></div>
      <div class='stage-toolbar'>
        <button class='button secondary' id='deduction-reset' type='button'>重置选择</button>
        <button class='button primary' id='deduction-submit' type='button'>提交推理</button>
      </div>
      <div class='log-box' id='deduction-log'>每一行只能选一个房间，三条线索都对上就算成功。</div>
    </div>
  `;
  const board = stage.querySelector('#deduction-board');
  const attemptsNode = stage.querySelector('#deduction-attempts');
  const selectedNode = stage.querySelector('#deduction-selected');
  const log = stage.querySelector('#deduction-log');

  const complete = () => selection.every((value, index) => value === solution[index]);

  const finish = (text) => {
    if (finished) return;
    finished = true;
    log.textContent = text;
    render();
  };

  const render = () => {
    attemptsNode.textContent = String(attempts);
    selectedNode.textContent = String(selection.filter((value) => value !== null).length);
    board.innerHTML = suspects.map((suspect, row) => `
      <section class='deduction-row'>
        <div class='deduction-row-head'>
          <strong>${suspect.name}</strong>
          <span>${suspect.clue}</span>
        </div>
        <div class='deduction-options'>
          ${rooms.map((room, col) => {
            const selected = selection[row] === col ? ' selected' : '';
            const disabled = finished ? 'disabled' : '';
            return `<button class='deduction-cell${selected}' type='button' data-deduction-row='${row}' data-deduction-col='${col}' ${disabled}>${room}</button>`;
          }).join('')}
        </div>
      </section>
    `).join('');
  };

  const submit = () => {
    if (finished) return;
    if (selection.some((value) => value === null)) {
      log.textContent = '先把三行都选完。';
      return;
    }
    if (complete()) {
      finish('所有线索吻合，推理完成。');
      return;
    }
    attempts -= 1;
    if (attempts <= 0) {
      finish('推理次数用尽，答案仍然没有对上。');
      return;
    }
    log.textContent = `还有 ${attempts} 次机会，重新核对线索。`;
    render();
  };

  const onClick = (event) => {
    const choice = event.target.closest('[data-deduction-row]');
    if (choice && !finished) {
      const row = Number(choice.dataset.deductionRow);
      const col = Number(choice.dataset.deductionCol);
      selection[row] = col;
      render();
      return;
    }
    if (event.target.closest('#deduction-reset')) {
      if (finished) return;
      for (let index = 0; index < selection.length; index += 1) {
        selection[index] = null;
      }
      log.textContent = '选择已清空。';
      render();
      return;
    }
    if (event.target.closest('#deduction-submit')) {
      submit();
    }
  };

  stage.addEventListener('click', onClick);
  render();
  return () => {
    stage.removeEventListener('click', onClick);
  };
}

function playResourceScheduling(stage) {
  const projects = [
    { name: '矿场', need: 7, color: '#22c55e' },
    { name: '供电', need: 6, color: '#38bdf8' },
    { name: '维修', need: 5, color: '#f59e0b' }
  ];
  let progress = [0, 0, 0];
  let allocation = [0, 0, 0];
  let pool = 5;
  let turn = 1;
  let finished = false;
  stage.innerHTML = `
    <div class='play-stage'>
      <div class='status-line'>
        <span class='status-pill'>回合<strong id='schedule-turn'>1</strong>/5</span>
        <span class='status-pill'>剩余工时<strong id='schedule-pool'>5</strong></span>
        <span class='status-pill'>完成<strong id='schedule-complete'>0</strong>/3</span>
      </div>
      <div class='score-box'>每回合分配 5 点工时，完成所有项目才算成功。</div>
      <div class='schedule-board' id='schedule-board'></div>
      <div class='stage-toolbar'>
        <button class='button secondary' id='schedule-reset' type='button'>清空分配</button>
        <button class='button primary' id='schedule-commit' type='button'>结算本轮</button>
      </div>
      <div class='log-box' id='schedule-log'>先把有限工时分到最重要的项目上。</div>
    </div>
  `;
  const board = stage.querySelector('#schedule-board');
  const turnNode = stage.querySelector('#schedule-turn');
  const poolNode = stage.querySelector('#schedule-pool');
  const completeNode = stage.querySelector('#schedule-complete');
  const log = stage.querySelector('#schedule-log');

  const completeCount = () => progress.filter((value, index) => value >= projects[index].need).length;
  const allComplete = () => completeCount() === projects.length;

  const finish = (text) => {
    if (finished) return;
    finished = true;
    log.textContent = text;
    render();
  };

  const render = () => {
    turnNode.textContent = String(turn);
    poolNode.textContent = String(pool);
    completeNode.textContent = String(completeCount());
    board.innerHTML = projects.map((project, index) => {
      const filled = Math.min(100, Math.round((progress[index] / project.need) * 100));
      const done = progress[index] >= project.need;
      return `
        <section class='schedule-task${done ? ' done' : ''}'>
          <div class='deduction-row-head'>
            <strong>${project.name}</strong>
            <span>${progress[index]}/${project.need}</span>
          </div>
          <div class='schedule-meter'><div class='schedule-fill' style='width:${filled}%; background:${project.color};'></div></div>
          <div class='stage-note'>本轮分配 <strong>${allocation[index]}</strong> 点工时。</div>
          <div class='schedule-controls'>
            <button class='button secondary' type='button' data-schedule-index='${index}' data-schedule-delta='-1' ${done || allocation[index] <= 0 ? 'disabled' : ''}>-1</button>
            <button class='button secondary' type='button' data-schedule-index='${index}' data-schedule-delta='1' ${done || pool <= 0 || finished ? 'disabled' : ''}>+1</button>
          </div>
        </section>
      `;
    }).join('');
    if (!finished && allComplete()) {
      finish('所有项目都已完成，调度成功。');
    }
  };

  const commit = () => {
    if (finished) return;
    progress = progress.map((value, index) => Math.min(projects[index].need, value + allocation[index]));
    allocation = [0, 0, 0];
    pool = 5;
    if (allComplete()) {
      render();
      finish('所有项目都已完成，调度成功。');
      return;
    }
    if (turn >= 5) {
      render();
      finish('回合结束，仍有项目没有完成。');
      return;
    }
    turn += 1;
    log.textContent = `第 ${turn} 回合开始，重新分配工时。`;
    render();
  };

  const onClick = (event) => {
    const action = event.target.closest('[data-schedule-index]');
    if (action && !finished) {
      const index = Number(action.dataset.scheduleIndex);
      const delta = Number(action.dataset.scheduleDelta);
      if (delta > 0) {
        if (pool <= 0 || progress[index] >= projects[index].need) return;
        allocation[index] += 1;
        pool -= 1;
      } else if (allocation[index] > 0) {
        allocation[index] -= 1;
        pool += 1;
      }
      render();
      return;
    }
    if (event.target.closest('#schedule-reset')) {
      if (finished) return;
      pool += allocation.reduce((sum, value) => sum + value, 0);
      allocation = [0, 0, 0];
      log.textContent = '本轮分配已清空。';
      render();
      return;
    }
    if (event.target.closest('#schedule-commit')) {
      commit();
    }
  };

  stage.addEventListener('click', onClick);
  render();
  return () => {
    stage.removeEventListener('click', onClick);
  };
}

function playLogicSorting(stage) {
  const items = [
    { name: '甲', dots: 4 },
    { name: '乙', dots: 1 },
    { name: '丙', dots: 5 },
    { name: '丁', dots: 2 },
    { name: '戊', dots: 3 }
  ];
  const order = items.map((_, index) => index).sort(() => Math.random() - 0.5);
  let finished = false;
  stage.innerHTML = `
    <div class='play-stage'>
      <div class='status-line'>
        <span class='status-pill'>位置<strong id='sorting-count'>5</strong></span>
        <span class='status-pill'>提示<strong>按点数从少到多</strong></span>
      </div>
      <div class='score-box'>用上下换位把卡片排成正确顺序。</div>
      <div class='sorting-list' id='sorting-list'></div>
      <div class='stage-note' id='sorting-note'>点数越少越靠前。</div>
    </div>
  `;
  const list = stage.querySelector('#sorting-list');
  const note = stage.querySelector('#sorting-note');

  const isSorted = () => order.every((itemIndex, index) => index === 0 || items[order[index - 1]].dots <= items[itemIndex].dots);

  const finish = (text) => {
    if (finished) return;
    finished = true;
    note.textContent = text;
    render();
  };

  const render = () => {
    stage.querySelector('#sorting-count').textContent = String(order.length);
    list.innerHTML = order.map((itemIndex, index) => {
      const item = items[itemIndex];
      return `
        <section class='sorting-card'>
          <div class='sorting-rank'>${index + 1}</div>
          <div>
            <strong>${item.name}</strong>
            <div class='sorting-dots'>${'●'.repeat(item.dots)}</div>
          </div>
          <div class='sorting-actions'>
            <button class='button secondary' type='button' data-sort-index='${index}' data-sort-direction='up' ${finished || index === 0 ? 'disabled' : ''}>上移</button>
            <button class='button secondary' type='button' data-sort-index='${index}' data-sort-direction='down' ${finished || index === order.length - 1 ? 'disabled' : ''}>下移</button>
          </div>
        </section>
      `;
    }).join('');
    if (!finished && isSorted()) {
      finish('排序正确，规则已完成。');
    }
  };

  const swap = (index, nextIndex) => {
    const temp = order[index];
    order[index] = order[nextIndex];
    order[nextIndex] = temp;
  };

  const onClick = (event) => {
    const control = event.target.closest('[data-sort-index]');
    if (!control || finished) return;
    const index = Number(control.dataset.sortIndex);
    const direction = control.dataset.sortDirection;
    if (direction === 'up' && index > 0) swap(index, index - 1);
    if (direction === 'down' && index < order.length - 1) swap(index, index + 1);
    render();
  };

  stage.addEventListener('click', onClick);
  render();
  return () => {
    stage.removeEventListener('click', onClick);
  };
}

function playHiddenNegotiation(stage) {
  const profiles = [
    {
      name: '赶时间',
      hint: '对方一直看向计时器，像是急着收尾。',
      outcomes: [
        { deal: 2, trust: -1, text: '强压条件拿到了更高成交，但气氛变冷。' },
        { deal: 0, trust: 2, text: '先安抚关系，信任明显上升。' },
        { deal: 1, trust: 1, text: '交换条件，双方都愿意继续谈。' }
      ]
    },
    {
      name: '看成本',
      hint: '对方反复确认每一笔开销。',
      outcomes: [
        { deal: 1, trust: -1, text: '压价有效，但对方略有戒心。' },
        { deal: 0, trust: 2, text: '稳住预期，谈判气氛更顺。' },
        { deal: 2, trust: 1, text: '拿条件换成交，收益很高。' }
      ]
    },
    {
      name: '重关系',
      hint: '对方更在意合作是否长期可靠。',
      outcomes: [
        { deal: 0, trust: -1, text: '太强硬了，关系有所下滑。' },
        { deal: 1, trust: 2, text: '先给出善意，关系迅速升温。' },
        { deal: 1, trust: 1, text: '拿出交换方案，合作继续推进。' }
      ]
    }
  ];
  const profile = profiles[Math.floor(Math.random() * profiles.length)];
  let round = 1;
  let deal = 2;
  let trust = 2;
  let finished = false;
  stage.innerHTML = `
    <div class='play-stage'>
      <div class='status-line'>
        <span class='status-pill'>回合<strong id='negotiation-round'>1</strong>/5</span>
        <span class='status-pill'>成交<strong id='negotiation-deal'>2</strong></span>
        <span class='status-pill'>关系<strong id='negotiation-trust'>2</strong></span>
      </div>
      <div class='score-box'>观察有限线索，尽量同时抬高成交和关系。</div>
      <div class='negotiation-board'>
        <section class='negotiation-clue'>
          <strong>对手状态</strong>
          <p>${profile.hint}</p>
        </section>
        <div class='negotiation-meters'>
          <div class='negotiation-meter'><div class='negotiation-fill deal' id='negotiation-deal-fill'></div></div>
          <div class='negotiation-meter'><div class='negotiation-fill trust' id='negotiation-trust-fill'></div></div>
        </div>
        <div class='negotiation-choices' id='negotiation-choices'></div>
      </div>
      <div class='log-box' id='negotiation-log'>第 1 回合，先试探对方的底线。</div>
    </div>
  `;
  const roundNode = stage.querySelector('#negotiation-round');
  const dealNode = stage.querySelector('#negotiation-deal');
  const trustNode = stage.querySelector('#negotiation-trust');
  const dealFill = stage.querySelector('#negotiation-deal-fill');
  const trustFill = stage.querySelector('#negotiation-trust-fill');
  const choices = stage.querySelector('#negotiation-choices');
  const log = stage.querySelector('#negotiation-log');
  const actions = ['强势压价', '稳住关系', '交换条件'];

  const finish = (text) => {
    if (finished) return;
    finished = true;
    log.textContent = text;
    render();
  };

  const render = () => {
    roundNode.textContent = String(round);
    dealNode.textContent = String(deal);
    trustNode.textContent = String(trust);
    dealFill.style.width = `${Math.min(100, deal * 12)}%`;
    trustFill.style.width = `${Math.min(100, trust * 12)}%`;
    choices.innerHTML = actions.map((action, index) => `
      <button class='button primary' type='button' data-negotiation-action='${index}' ${finished ? 'disabled' : ''}>${action}</button>
    `).join('');
    if (!finished && round > 5) {
      if (deal >= 7 && trust >= 6) {
        finish('谈判成功，双方达成了满意结果。');
      } else {
        finish('回合结束，条件还不够理想。');
      }
    }
  };

  const onClick = (event) => {
    const action = event.target.closest('[data-negotiation-action]');
    if (!action || finished) return;
    const index = Number(action.dataset.negotiationAction);
    const outcome = profile.outcomes[index];
    deal = Math.max(0, Math.min(10, deal + outcome.deal));
    trust = Math.max(0, Math.min(10, trust + outcome.trust));
    log.textContent = outcome.text;
    round += 1;
    if (round > 5) {
      render();
      return;
    }
    render();
  };

  stage.addEventListener('click', onClick);
  render();
  return () => {
    stage.removeEventListener('click', onClick);
  };
}

function playMinesweeper(stage) {
  const rows = 8;
  const cols = 8;
  const minesTotal = 10;
  const totalSafe = rows * cols - minesTotal;
  const cells = Array.from({ length: rows * cols }, () => ({ mine: false, revealed: false, flagged: false, adjacent: 0 }));
  let revealed = 0;
  let flagCount = 0;
  let finished = false;

  const positions = Array.from({ length: rows * cols }, (_, index) => index).sort(() => Math.random() - 0.5).slice(0, minesTotal);
  positions.forEach((index) => {
    cells[index].mine = true;
  });

  const indexOf = (row, col) => row * cols + col;
  const neighbors = (row, col) => {
    const list = [];
    for (let y = row - 1; y <= row + 1; y += 1) {
      for (let x = col - 1; x <= col + 1; x += 1) {
        if (y === row && x === col) continue;
        if (y < 0 || y >= rows || x < 0 || x >= cols) continue;
        list.push(indexOf(y, x));
      }
    }
    return list;
  };

  cells.forEach((cell, index) => {
    if (cell.mine) return;
    const row = Math.floor(index / cols);
    const col = index % cols;
    cell.adjacent = neighbors(row, col).filter((neighbor) => cells[neighbor].mine).length;
  });

  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">剩余雷<strong id="mine-left">${minesTotal}</strong></span>
        <span class="status-pill">安全格<strong id="mine-safe">${totalSafe}</strong></span>
      </div>
      <div class="mines-board" id="mines-board"></div>
      <div class="stage-note" id="mine-note">左键翻开，右键标记。</div>
    </div>
  `;

  const board = stage.querySelector("#mines-board");
  const leftNode = stage.querySelector("#mine-left");
  const safeNode = stage.querySelector("#mine-safe");
  const note = stage.querySelector("#mine-note");

  const finish = (message) => {
    if (finished) return;
    finished = true;
    note.textContent = message;
    cells.forEach((cell) => {
      cell.revealed = true;
    });
    draw();
  };

  function draw() {
    leftNode.textContent = String(Math.max(0, minesTotal - flagCount));
    safeNode.textContent = String(Math.max(0, totalSafe - revealed));
    board.innerHTML = cells.map((cell, index) => {
      const classes = ["mines-cell"];
      if (cell.revealed) classes.push("revealed");
      if (cell.flagged) classes.push("flagged");
      if (finished && cell.mine) classes.push("mine");
      let label = "";
      if (cell.revealed) {
        label = cell.mine ? "✹" : (cell.adjacent ? String(cell.adjacent) : "");
      } else if (cell.flagged) {
        label = "⚑";
      }
      return `<button class="${classes.join(" ")}" type="button" data-index="${index}">${label}</button>`;
    }).join("");
  }

  const reveal = (startIndex) => {
    const stack = [startIndex];
    while (stack.length) {
      const index = stack.pop();
      const cell = cells[index];
      if (cell.revealed || cell.flagged) continue;
      cell.revealed = true;
      revealed += 1;
      if (cell.mine) {
        finish("踩到地雷了，游戏结束。");
        return;
      }
      if (cell.adjacent === 0) {
        const row = Math.floor(index / cols);
        const col = index % cols;
        neighbors(row, col).forEach((neighbor) => {
          if (!cells[neighbor].revealed && !cells[neighbor].flagged) {
            stack.push(neighbor);
          }
        });
      }
    }
    if (revealed >= totalSafe) {
      finish("你已经清空了雷区。");
      return;
    }
    draw();
  };

  board.addEventListener("click", (event) => {
    const target = event.target.closest("button[data-index]");
    if (!target || finished) return;
    const index = Number(target.dataset.index);
    const cell = cells[index];
    if (cell.flagged || cell.revealed) return;
    reveal(index);
  });

  board.addEventListener("contextmenu", (event) => {
    const target = event.target.closest("button[data-index]");
    if (!target || finished) return;
    event.preventDefault();
    const index = Number(target.dataset.index);
    const cell = cells[index];
    if (cell.revealed) return;
    cell.flagged = !cell.flagged;
    flagCount += cell.flagged ? 1 : -1;
    draw();
  });

  draw();
  return () => {
    finished = true;
  };
}

function playSokoban(stage) {
  const level = [
    "#########",
    "#   .   #",
    "#  B#B  #",
    "#   #   #",
    "#   P   #",
    "#   .   #",
    "#########"
  ];
  const rows = level.length;
  const cols = level[0].length;
  const goals = new Set();
  const boxes = new Set();
  let player = { row: 4, col: 4 };
  let moves = 0;
  let finished = false;

  const key = (row, col) => `${row}:${col}`;
  const parse = () => {
    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        const tile = level[row][col];
        if (tile === ".") goals.add(key(row, col));
        if (tile === "B") boxes.add(key(row, col));
        if (tile === "P") player = { row, col };
      }
    }
  };
  parse();

  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">步数<strong id="soko-moves">0</strong></span>
        <span class="status-pill">目标<strong id="soko-goals">${goals.size}</strong></span>
      </div>
      <div class="sokoban-board" id="sokoban-board"></div>
      <div class="stage-note" id="soko-note">方向键或 WASD 推动货箱。</div>
    </div>
  `;

  const board = stage.querySelector("#sokoban-board");
  const movesNode = stage.querySelector("#soko-moves");
  const note = stage.querySelector("#soko-note");

  const isWall = (row, col) => level[row]?.[col] === "#";
  const isGoal = (row, col) => goals.has(key(row, col));
  const hasBox = (row, col) => boxes.has(key(row, col));
  const hasSolved = () => [...goals].every((spot) => boxes.has(spot));

  function draw() {
    movesNode.textContent = String(moves);
    board.innerHTML = "";
    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        const cell = document.createElement("div");
        cell.className = "sokoban-cell";
        if (isWall(row, col)) {
          cell.classList.add("wall");
        } else {
          if (isGoal(row, col)) cell.classList.add("goal");
          if (hasBox(row, col)) cell.classList.add("box");
          if (player.row === row && player.col === col) cell.classList.add("player");
        }
        if (isWall(row, col)) {
          cell.textContent = "";
        } else if (player.row === row && player.col === col) {
          cell.textContent = "●";
        } else if (hasBox(row, col) && isGoal(row, col)) {
          cell.textContent = "◆";
        } else if (hasBox(row, col)) {
          cell.textContent = "■";
        } else if (isGoal(row, col)) {
          cell.textContent = "•";
        }
        board.append(cell);
      }
    }
  }

  const finish = (message) => {
    if (finished) return;
    finished = true;
    note.textContent = message;
    draw();
  };

  const move = (dr, dc) => {
    if (finished) return;
    const nextRow = player.row + dr;
    const nextCol = player.col + dc;
    if (isWall(nextRow, nextCol)) return;
    if (hasBox(nextRow, nextCol)) {
      const pushRow = nextRow + dr;
      const pushCol = nextCol + dc;
      if (isWall(pushRow, pushCol) || hasBox(pushRow, pushCol)) return;
      boxes.delete(key(nextRow, nextCol));
      boxes.add(key(pushRow, pushCol));
    }
    player = { row: nextRow, col: nextCol };
    moves += 1;
    note.textContent = hasSolved() ? "货箱全部到位！" : "继续把箱子推向目标。";
    draw();
    if (hasSolved()) finish("货箱全部到位！");
  };

  const onKeyDown = (event) => {
    const controls = {
      ArrowUp: [-1, 0],
      w: [-1, 0],
      W: [-1, 0],
      ArrowDown: [1, 0],
      s: [1, 0],
      S: [1, 0],
      ArrowLeft: [0, -1],
      a: [0, -1],
      A: [0, -1],
      ArrowRight: [0, 1],
      d: [0, 1],
      D: [0, 1]
    };
    const moveDelta = controls[event.key];
    if (!moveDelta) return;
    event.preventDefault();
    move(moveDelta[0], moveDelta[1]);
  };

  window.addEventListener("keydown", onKeyDown);
  draw();

  return () => {
    finished = true;
    window.removeEventListener("keydown", onKeyDown);
  };
}

function playPinball(stage) {
  const width = 480;
  const height = 620;
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">分数<strong id="pinball-score">0</strong></span>
        <span class="status-pill">剩余<strong id="pinball-lives">3</strong></span>
      </div>
      <canvas class="pinball-canvas" id="pinball-canvas" width="${width}" height="${height}"></canvas>
      <div class="stage-note" id="pinball-note">左右方向键控制拨片，尽量让弹珠留在场内。</div>
    </div>
  `;

  const canvas = stage.querySelector("#pinball-canvas");
  const ctx = canvas.getContext("2d");
  const scoreNode = stage.querySelector("#pinball-score");
  const livesNode = stage.querySelector("#pinball-lives");
  const note = stage.querySelector("#pinball-note");
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const ball = { x: width / 2, y: 120, vx: 2.5, vy: 0.2, r: 11 };
  const bumpers = [
    { x: 146, y: 168, r: 26, score: 40 },
    { x: 334, y: 150, r: 24, score: 50 },
    { x: 240, y: 290, r: 32, score: 60 }
  ];
  const paddles = {
    left: { x: 118, y: 530, w: 96, h: 16, lift: 490 },
    right: { x: 266, y: 530, w: 96, h: 16, lift: 490 }
  };
  let leftActive = false;
  let rightActive = false;
  let score = 0;
  let lives = 3;
  let finished = false;

  const resetBall = (serve = false) => {
    ball.x = width / 2;
    ball.y = 120;
    ball.vx = serve ? (Math.random() < 0.5 ? -2.7 : 2.7) : (Math.random() * 3.5 - 1.75);
    ball.vy = 0.2;
  };

  const finish = (message) => {
    if (finished) return;
    finished = true;
    note.textContent = message;
    draw();
  };

  const hitCircle = (cx, cy, radius, bonus) => {
    const dx = ball.x - cx;
    const dy = ball.y - cy;
    const distance = Math.hypot(dx, dy);
    const limit = ball.r + radius;
    if (distance >= limit) return false;
    const nx = dx / (distance || 1);
    const ny = dy / (distance || 1);
    const dot = ball.vx * nx + ball.vy * ny;
    if (dot < 0) {
      ball.vx -= 2 * dot * nx;
      ball.vy -= 2 * dot * ny;
    }
    ball.x = cx + nx * (limit + 0.5);
    ball.y = cy + ny * (limit + 0.5);
    ball.vx += nx * 0.4;
    ball.vy += ny * 0.4;
    score += bonus;
    scoreNode.textContent = String(score);
    return true;
  };

  const hitRect = (rect, boost) => {
    const closestX = clamp(ball.x, rect.x, rect.x + rect.w);
    const closestY = clamp(ball.y, rect.y, rect.y + rect.h);
    const dx = ball.x - closestX;
    const dy = ball.y - closestY;
    const distance = Math.hypot(dx, dy);
    if (distance >= ball.r) return false;
    if (Math.abs(dx) > Math.abs(dy)) {
      ball.vx = dx < 0 ? -Math.abs(ball.vx) : Math.abs(ball.vx);
    } else {
      ball.vy = dy < 0 ? -Math.abs(ball.vy) : Math.abs(ball.vy);
    }
    ball.vy -= boost;
    ball.x = closestX + (dx === 0 ? 0 : Math.sign(dx)) * (ball.r + 0.5);
    ball.y = closestY + (dy === 0 ? 0 : Math.sign(dy)) * (ball.r + 0.5);
    return true;
  };

  function draw() {
    ctx.clearRect(0, 0, width, height);
    const background = ctx.createLinearGradient(0, 0, 0, height);
    background.addColorStop(0, "#08111f");
    background.addColorStop(1, "#101d36");
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = "rgba(255,255,255,0.12)";
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(18, 18);
    ctx.lineTo(18, height - 20);
    ctx.lineTo(width / 2 - 52, height - 20);
    ctx.moveTo(width - 18, 18);
    ctx.lineTo(width - 18, height - 20);
    ctx.lineTo(width / 2 + 52, height - 20);
    ctx.stroke();

    bumpers.forEach((bumper) => {
      ctx.beginPath();
      ctx.fillStyle = "rgba(56, 189, 248, 0.92)";
      ctx.arc(bumper.x, bumper.y, bumper.r + 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = "rgba(255,255,255,0.22)";
      ctx.arc(bumper.x, bumper.y, bumper.r, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.fillStyle = leftActive ? "#38bdf8" : "#64748b";
    ctx.fillRect(paddles.left.x, paddles.left.y, paddles.left.w, paddles.left.h);
    ctx.fillStyle = rightActive ? "#f472b6" : "#64748b";
    ctx.fillRect(paddles.right.x, paddles.right.y, paddles.right.w, paddles.right.h);

    ctx.beginPath();
    ctx.fillStyle = "#f8fafc";
    ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
    ctx.fill();

    if (finished) {
      ctx.fillStyle = "rgba(8, 17, 31, 0.6)";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "#f8fafc";
      ctx.font = "700 28px Bebas Neue, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("GAME OVER", width / 2, height / 2);
    }
  }

  const tick = () => {
    if (finished) return;
    paddles.left.y = leftActive ? paddles.left.lift : 530;
    paddles.right.y = rightActive ? paddles.right.lift : 530;

    ball.vy += 0.18;
    ball.x += ball.vx;
    ball.y += ball.vy;

    if (ball.x < ball.r) {
      ball.x = ball.r;
      ball.vx = Math.abs(ball.vx) * 0.96;
    } else if (ball.x > width - ball.r) {
      ball.x = width - ball.r;
      ball.vx = -Math.abs(ball.vx) * 0.96;
    }
    if (ball.y < ball.r) {
      ball.y = ball.r;
      ball.vy = Math.abs(ball.vy) * 0.95;
    }

    bumpers.forEach((bumper) => {
      if (hitCircle(bumper.x, bumper.y, bumper.r, bumper.score)) {
        note.textContent = "命中弹簧挡板，继续保持节奏。";
      }
    });

    if (hitRect(paddles.left, leftActive ? 0.95 : 0.45) || hitRect(paddles.right, rightActive ? 0.95 : 0.45)) {
      note.textContent = "拨片顶回了弹珠。";
    }

    if (ball.y > height + 40) {
      lives -= 1;
      livesNode.textContent = String(lives);
      if (lives <= 0) {
        finish("弹珠耗尽，游戏结束。");
        return;
      }
      note.textContent = "失去一颗球，重新开球。";
      resetBall(true);
    }

    draw();
  };

  const onKeyDown = (event) => {
    if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {
      leftActive = true;
      event.preventDefault();
    }
    if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") {
      rightActive = true;
      event.preventDefault();
    }
  };

  const onKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {
      leftActive = false;
      event.preventDefault();
    }
    if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") {
      rightActive = false;
      event.preventDefault();
    }
  };

  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("keyup", onKeyUp);
  resetBall(false);
  draw();
  const interval = window.setInterval(tick, 16);

  return () => {
    finished = true;
    window.clearInterval(interval);
    window.removeEventListener("keydown", onKeyDown);
    window.removeEventListener("keyup", onKeyUp);
  };
}

function playMerge2048(stage) {
  const size = 4;
  const colors = {
    2: ["#eee4da", "#776e65"],
    4: ["#ede0c8", "#776e65"],
    8: ["#f2b179", "#f8fafc"],
    16: ["#f59563", "#f8fafc"],
    32: ["#f67c5f", "#f8fafc"],
    64: ["#f65e3b", "#f8fafc"],
    128: ["#edcf72", "#f8fafc"],
    256: ["#edcc61", "#f8fafc"],
    512: ["#edc850", "#f8fafc"],
    1024: ["#edc53f", "#f8fafc"],
    2048: ["#edc22e", "#f8fafc"]
  };
  let grid = Array.from({ length: size }, () => Array(size).fill(0));
  let score = 0;
  let won = false;
  let finished = false;

  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">分数<strong id="merge-score">0</strong></span>
        <span class="status-pill">最高<strong id="merge-best">0</strong></span>
      </div>
      <div class="merge-board" id="merge-board"></div>
      <div class="stage-note" id="merge-note">方向键或 WASD 合并相同数字。</div>
    </div>
  `;

  const board = stage.querySelector("#merge-board");
  const scoreNode = stage.querySelector("#merge-score");
  const bestNode = stage.querySelector("#merge-best");
  const note = stage.querySelector("#merge-note");

  const spawn = () => {
    const empty = [];
    grid.forEach((row, rowIndex) => {
      row.forEach((value, colIndex) => {
        if (!value) empty.push([rowIndex, colIndex]);
      });
    });
    if (!empty.length) return false;
    const [row, col] = empty[Math.floor(Math.random() * empty.length)];
    grid[row][col] = Math.random() < 0.9 ? 2 : 4;
    return true;
  };

  const hasMoves = () => {
    if (grid.some((row) => row.some((value) => !value))) return true;
    for (let row = 0; row < size; row += 1) {
      for (let col = 0; col < size; col += 1) {
        const value = grid[row][col];
        if (row + 1 < size && grid[row + 1][col] === value) return true;
        if (col + 1 < size && grid[row][col + 1] === value) return true;
      }
    }
    return false;
  };

  const draw = () => {
    scoreNode.textContent = String(score);
    bestNode.textContent = String(grid.flat().reduce((best, value) => Math.max(best, value), 0));
    board.innerHTML = grid.map((row) => row.map((value) => {
      const label = value ? String(value) : "";
      return `<div class="merge-cell ${value ? "filled" : ""}" data-value="${value}">${label}</div>`;
    }).join("")).join("");

    board.querySelectorAll(".merge-cell").forEach((cell) => {
      const value = Number(cell.dataset.value || 0);
      const palette = colors[value] || ["#1f2937", "#f8fafc"];
      cell.style.background = palette[0];
      cell.style.color = palette[1];
      cell.style.fontSize = value >= 1024 ? "1.1rem" : "1.35rem";
    });
  };

  const compress = (line) => {
    const values = line.filter(Boolean);
    const merged = [];
    let gained = 0;
    for (let index = 0; index < values.length; index += 1) {
      if (values[index] === values[index + 1]) {
        const result = values[index] * 2;
        merged.push(result);
        gained += result;
        index += 1;
      } else {
        merged.push(values[index]);
      }
    }
    while (merged.length < size) merged.push(0);
    return { line: merged, gained };
  };

  const move = (direction) => {
    if (finished) return;
    const before = grid.map((row) => row.slice());
    let gained = 0;

    if (direction === "left" || direction === "right") {
      for (let row = 0; row < size; row += 1) {
        const source = direction === "left" ? grid[row].slice() : grid[row].slice().reverse();
        const result = compress(source);
        gained += result.gained;
        grid[row] = direction === "left" ? result.line : result.line.slice().reverse();
      }
    } else {
      for (let col = 0; col < size; col += 1) {
        const source = [];
        for (let row = 0; row < size; row += 1) {
          source.push(direction === "up" ? grid[row][col] : grid[size - 1 - row][col]);
        }
        const result = compress(source);
        gained += result.gained;
        for (let row = 0; row < size; row += 1) {
          grid[direction === "up" ? row : size - 1 - row][col] = result.line[row];
        }
      }
    }

    const changed = grid.some((row, rowIndex) => row.some((value, colIndex) => value !== before[rowIndex][colIndex]));
    if (!changed) return;

    score += gained;
    spawn();
    if (!won && grid.some((row) => row.some((value) => value >= 2048))) {
      won = true;
      note.textContent = "已经合成 2048，继续刷新更高数字。";
    } else {
      note.textContent = "继续滑动，保持空间。";
    }
    if (!hasMoves()) {
      finished = true;
      note.textContent = "没有可走的步了。";
    }
    draw();
  };

  const onKeyDown = (event) => {
    const controls = {
      ArrowUp: "up",
      w: "up",
      W: "up",
      ArrowDown: "down",
      s: "down",
      S: "down",
      ArrowLeft: "left",
      a: "left",
      A: "left",
      ArrowRight: "right",
      d: "right",
      D: "right"
    };
    const direction = controls[event.key];
    if (!direction) return;
    event.preventDefault();
    move(direction);
  };

  window.addEventListener("keydown", onKeyDown);
  spawn();
  spawn();
  draw();

  return () => {
    finished = true;
    window.removeEventListener("keydown", onKeyDown);
  };
}

function playConnect4(stage) {
  const rows = 6;
  const cols = 7;
  const boardState = Array.from({ length: rows }, () => Array(cols).fill(0));
  let current = 1;
  let waiting = false;
  let finished = false;
  let aiTimer = 0;

  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">回合<strong id="connect-turn">红方</strong></span>
        <span class="status-pill">状态<strong id="connect-state">轮到你了</strong></span>
      </div>
      <div class="connect-controls" id="connect-controls"></div>
      <div class="connect-board" id="connect-board"></div>
      <div class="stage-note" id="connect-note">点击上方列按钮落子。</div>
    </div>
  `;

  const controls = stage.querySelector("#connect-controls");
  const board = stage.querySelector("#connect-board");
  const turnNode = stage.querySelector("#connect-turn");
  const stateNode = stage.querySelector("#connect-state");
  const note = stage.querySelector("#connect-note");

  const render = () => {
    controls.innerHTML = Array.from({ length: cols }, (_, col) => {
      const disabled = finished || waiting || boardState[0][col];
      return `<button class="connect-drop" type="button" data-col="${col}" ${disabled ? "disabled" : ""}>${col + 1}</button>`;
    }).join("");
    board.innerHTML = boardState.map((row, rowIndex) => row.map((value, colIndex) => {
      const classes = ["connect-cell"];
      if (value === 1) classes.push("red");
      if (value === 2) classes.push("yellow");
      return `<div class="${classes.join(" ")}" data-row="${rowIndex}" data-col="${colIndex}"></div>`;
    }).join("")).join("");
    turnNode.textContent = current === 1 ? "红方" : "黄方";
    stateNode.textContent = finished ? "已结束" : waiting ? "对手思考中" : "轮到你了";
  };

  const dropPiece = (col, player) => {
    for (let row = rows - 1; row >= 0; row -= 1) {
      if (!boardState[row][col]) {
        boardState[row][col] = player;
        return row;
      }
    }
    return -1;
  };

  const checkWin = (player) => {
    const lines = [[1, 0], [0, 1], [1, 1], [1, -1]];
    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        if (boardState[row][col] !== player) continue;
        for (const [dr, dc] of lines) {
          let count = 1;
          for (let step = 1; step < 4; step += 1) {
            const nextRow = row + dr * step;
            const nextCol = col + dc * step;
            if (nextRow < 0 || nextRow >= rows || nextCol < 0 || nextCol >= cols) break;
            if (boardState[nextRow][nextCol] !== player) break;
            count += 1;
          }
          if (count >= 4) return true;
        }
      }
    }
    return false;
  };

  const isDraw = () => boardState[0].every(Boolean);

  const end = (message) => {
    if (finished) return;
    finished = true;
    waiting = false;
    note.textContent = message;
    render();
  };

  const aiMove = () => {
    if (finished) return;
    const valid = [];
    for (let col = 0; col < cols; col += 1) {
      if (!boardState[0][col]) valid.push(col);
    }
    if (!valid.length) {
      end("平局。");
      return;
    }
    const col = valid[Math.floor(Math.random() * valid.length)];
    dropPiece(col, 2);
    if (checkWin(2)) {
      render();
      end("黄方连成四子。");
      return;
    }
    if (isDraw()) {
      render();
      end("平局。");
      return;
    }
    waiting = false;
    current = 1;
    note.textContent = "轮到你了。";
    render();
  };

  const playerMove = (col) => {
    if (finished || waiting) return;
    if (dropPiece(col, 1) === -1) return;
    render();
    if (checkWin(1)) {
      end("红方连成四子。");
      return;
    }
    if (isDraw()) {
      end("平局。");
      return;
    }
    current = 2;
    waiting = true;
    note.textContent = "对手思考中...";
    render();
    aiTimer = window.setTimeout(aiMove, 320);
  };

  controls.addEventListener("click", (event) => {
    const target = event.target.closest("button[data-col]");
    if (!target) return;
    playerMove(Number(target.dataset.col));
  });

  render();

  return () => {
    finished = true;
    waiting = false;
    window.clearTimeout(aiTimer);
  };
}

function playSnake(stage) {
  const size = 12;
  const directions = {
    up: { row: -1, col: 0 },
    down: { row: 1, col: 0 },
    left: { row: 0, col: -1 },
    right: { row: 0, col: 1 }
  };
  const opposite = { up: "down", down: "up", left: "right", right: "left" };
  const keyMap = {
    arrowup: "up",
    w: "up",
    arrowdown: "down",
    s: "down",
    arrowleft: "left",
    a: "left",
    arrowright: "right",
    d: "right"
  };
  let snake = [
    { row: 6, col: 6 },
    { row: 6, col: 5 },
    { row: 6, col: 4 }
  ];
  let direction = "right";
  let nextDirection = "right";
  let score = 0;
  let best = 0;
  let finished = false;
  let tick = 0;
  const randomFood = () => {
    const free = [];
    for (let row = 0; row < size; row += 1) {
      for (let col = 0; col < size; col += 1) {
        if (!snake.some((cell) => cell.row === row && cell.col === col)) free.push({ row, col });
      }
    }
    return free[Math.floor(Math.random() * free.length)] || { row: 0, col: 0 };
  };
  let food = randomFood();
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">长度<strong id="snake-score">${snake.length}</strong></span>
        <span class="status-pill">进食<strong id="snake-food">${score}</strong></span>
        <span class="status-pill">纪录<strong id="snake-best">${best}</strong></span>
      </div>
      <div class="snake-board" id="snake-board"></div>
      <div class="stage-toolbar">
        <button class="button secondary" data-snake-move="up" type="button">上</button>
        <button class="button secondary" data-snake-move="left" type="button">左</button>
        <button class="button secondary" data-snake-move="down" type="button">下</button>
        <button class="button secondary" data-snake-move="right" type="button">右</button>
      </div>
      <div class="log-box" id="snake-log">方向键或 W/A/S/D 控制，小蛇会持续前进。</div>
    </div>
  `;
  const board = stage.querySelector("#snake-board");
  const scoreNode = stage.querySelector("#snake-score");
  const foodNode = stage.querySelector("#snake-food");
  const bestNode = stage.querySelector("#snake-best");
  const log = stage.querySelector("#snake-log");
  const buttons = stage.querySelectorAll("[data-snake-move]");

  const render = () => {
    scoreNode.textContent = String(snake.length);
    foodNode.textContent = String(score);
    bestNode.textContent = String(best);
    board.innerHTML = Array.from({ length: size * size }, (_, index) => {
      const row = Math.floor(index / size);
      const col = index % size;
      const classes = ["snake-cell"];
      const partIndex = snake.findIndex((cell) => cell.row === row && cell.col === col);
      if (partIndex === 0) classes.push("head");
      else if (partIndex > 0) classes.push("body");
      if (food.row === row && food.col === col) classes.push("food");
      return `<div class="${classes.join(" ")}"></div>`;
    }).join("");
  };

  const finish = (text) => {
    finished = true;
    clearInterval(tick);
    log.textContent = text;
    buttons.forEach((button) => {
      button.disabled = true;
    });
  };

  const setDirection = (value) => {
    if (finished) return;
    if (opposite[direction] === value || opposite[nextDirection] === value) return;
    nextDirection = value;
  };

  const step = () => {
    if (finished) return;
    direction = nextDirection;
    const delta = directions[direction];
    const nextHead = { row: snake[0].row + delta.row, col: snake[0].col + delta.col };
    if (nextHead.row < 0 || nextHead.row >= size || nextHead.col < 0 || nextHead.col >= size) {
      render();
      finish(`撞墙了，本局吃到 ${score} 个能量块。`);
      return;
    }
    const willGrow = nextHead.row === food.row && nextHead.col === food.col;
    const bodyToCheck = willGrow ? snake : snake.slice(0, -1);
    if (bodyToCheck.some((cell) => cell.row === nextHead.row && cell.col === nextHead.col)) {
      render();
      finish(`撞到自己了，本局吃到 ${score} 个能量块。`);
      return;
    }
    snake.unshift(nextHead);
    if (willGrow) {
      score += 1;
      best = Math.max(best, score);
      food = randomFood();
      log.textContent = "吃到能量块，身体变长了。";
      if (snake.length >= size * size) {
        render();
        finish("整张棋盘都被占满，完美通关。", true);
        return;
      }
    } else {
      snake.pop();
    }
    render();
  };

  const onKeyDown = (event) => {
    if (event.target instanceof Element && event.target.closest("input, textarea, select, [contenteditable='true']")) return;
    const mapped = keyMap[event.key.toLowerCase()];
    if (!mapped) return;
    event.preventDefault();
    setDirection(mapped);
  };

  stage.addEventListener("click", (event) => {
    const button = event.target.closest("[data-snake-move]");
    if (!button) return;
    setDirection(button.dataset.snakeMove);
  });
  window.addEventListener("keydown", onKeyDown);
  render();
  tick = window.setInterval(step, 250);
  return () => {
    clearInterval(tick);
    window.removeEventListener("keydown", onKeyDown);
  };
}

function playPong(stage) {
  const paddleHeight = 24;
  const paddleWidth = 2.5;
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  let playerScore = 0;
  let aiScore = 0;
  let playerY = 38;
  let aiY = 38;
  let upPressed = false;
  let downPressed = false;
  let finished = false;
  let loop = 0;
  let ball = { x: 50, y: 50, vx: 1.2, vy: 0.6 };

  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">玩家<strong id="pong-player-score">0</strong></span>
        <span class="status-pill">电脑<strong id="pong-ai-score">0</strong></span>
      </div>
      <div class="pong-board" id="pong-board">
        <div class="pong-center-line"></div>
        <div class="pong-paddle left" id="pong-player"></div>
        <div class="pong-paddle right" id="pong-ai"></div>
        <div class="pong-ball" id="pong-ball"></div>
      </div>
      <div class="stage-toolbar">
        <button class="button secondary" data-pong-control="up" type="button">上移</button>
        <button class="button secondary" data-pong-control="down" type="button">下移</button>
      </div>
      <div class="log-box" id="pong-log">上下移动球拍，把球先弹到 5 分。</div>
    </div>
  `;

  const playerNode = stage.querySelector("#pong-player");
  const aiNode = stage.querySelector("#pong-ai");
  const ballNode = stage.querySelector("#pong-ball");
  const playerScoreNode = stage.querySelector("#pong-player-score");
  const aiScoreNode = stage.querySelector("#pong-ai-score");
  const log = stage.querySelector("#pong-log");

  const render = () => {
    playerScoreNode.textContent = String(playerScore);
    aiScoreNode.textContent = String(aiScore);
    playerNode.style.top = `${playerY}%`;
    aiNode.style.top = `${aiY}%`;
    ballNode.style.left = `${ball.x}%`;
    ballNode.style.top = `${ball.y}%`;
  };

  const serve = (towardLeft) => {
    ball = {
      x: 50,
      y: 50,
      vx: towardLeft ? -1.2 : 1.2,
      vy: (Math.random() * 1.2) - 0.6
    };
    if (Math.abs(ball.vy) < 0.3) ball.vy = ball.vy < 0 ? -0.3 : 0.3;
  };

  const finish = (text) => {
    finished = true;
    clearInterval(loop);
    log.textContent = text;
    stage.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });
  };

  const paddleContains = (top, y) => y >= top && y <= top + paddleHeight;

  const scorePoint = (forPlayer) => {
    if (forPlayer) {
      playerScore += 1;
      log.textContent = "漂亮得分。";
      if (playerScore >= 5) {
        render();
        finish(`玩家获胜，比分 ${playerScore}:${aiScore}。`);
        return true;
      }
      serve(false);
      return false;
    }
    aiScore += 1;
    log.textContent = "电脑追回一分。";
    if (aiScore >= 5) {
      render();
      finish(`电脑获胜，比分 ${playerScore}:${aiScore}。`);
      return true;
    }
    serve(true);
    return false;
  };

  const onKeyDown = (event) => {
    if (event.target instanceof Element && event.target.closest("input, textarea, select, [contenteditable='true']")) return;
    if (["ArrowUp", "w", "W"].includes(event.key)) {
      upPressed = true;
      event.preventDefault();
    }
    if (["ArrowDown", "s", "S"].includes(event.key)) {
      downPressed = true;
      event.preventDefault();
    }
  };

  const onKeyUp = (event) => {
    if (["ArrowUp", "w", "W"].includes(event.key)) upPressed = false;
    if (["ArrowDown", "s", "S"].includes(event.key)) downPressed = false;
  };

  const onControlDown = (event) => {
    const control = event.target.closest("[data-pong-control]");
    if (!control || finished) return;
    const value = control.dataset.pongControl;
    if (value === "up") upPressed = true;
    if (value === "down") downPressed = true;
    event.preventDefault();
  };

  const onControlUp = () => {
    upPressed = false;
    downPressed = false;
  };

  stage.addEventListener("pointerdown", onControlDown);
  stage.addEventListener("pointerup", onControlUp);
  stage.addEventListener("pointerleave", onControlUp);
  window.addEventListener("pointerup", onControlUp);
  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("keyup", onKeyUp);

  render();
  serve(false);
  loop = window.setInterval(() => {
    if (finished) return;
    if (upPressed) playerY -= 2.8;
    if (downPressed) playerY += 2.8;
    playerY = clamp(playerY, 0, 100 - paddleHeight);
    aiY = clamp(aiY + ((ball.y - (aiY + paddleHeight / 2)) * 0.06), 0, 100 - paddleHeight);

    ball.x += ball.vx;
    ball.y += ball.vy;

    if (ball.y <= 1) {
      ball.y = 1;
      ball.vy = Math.abs(ball.vy);
    }
    if (ball.y >= 99) {
      ball.y = 99;
      ball.vy = -Math.abs(ball.vy);
    }

    if (ball.x <= paddleWidth + 2) {
      if (paddleContains(playerY, ball.y)) {
        ball.x = paddleWidth + 2;
        const speed = clamp(Math.abs(ball.vx) + 0.08, 1.05, 2.4);
        ball.vx = speed;
        ball.vy += ((ball.y - (playerY + paddleHeight / 2)) / paddleHeight) * 1.2;
        log.textContent = "球拍回击成功。";
      } else if (scorePoint(false)) {
        return;
      }
    }

    if (ball.x >= 100 - paddleWidth - 2) {
      if (paddleContains(aiY, ball.y)) {
        ball.x = 100 - paddleWidth - 2;
        const speed = clamp(Math.abs(ball.vx) + 0.08, 1.05, 2.4);
        ball.vx = -speed;
        ball.vy += ((ball.y - (aiY + paddleHeight / 2)) / paddleHeight) * 1.2;
      } else if (scorePoint(true)) {
        return;
      }
    }

    render();
  }, 20);

  return () => {
    clearInterval(loop);
    stage.removeEventListener("pointerdown", onControlDown);
    stage.removeEventListener("pointerup", onControlUp);
    stage.removeEventListener("pointerleave", onControlUp);
    window.removeEventListener("pointerup", onControlUp);
    window.removeEventListener("keydown", onKeyDown);
    window.removeEventListener("keyup", onKeyUp);
  };
}

function playTetris(stage) {
  const width = 10;
  const height = 20;
  const colors = {
    I: "#22d3ee",
    O: "#facc15",
    T: "#a855f7",
    L: "#fb923c",
    J: "#3b82f6",
    S: "#22c55e",
    Z: "#ef4444"
  };
  const pieces = [
    { key: "I", matrix: [[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]] },
    { key: "O", matrix: [[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]] },
    { key: "T", matrix: [[0,0,0,0],[0,1,0,0],[1,1,1,0],[0,0,0,0]] },
    { key: "L", matrix: [[0,0,0,0],[1,0,0,0],[1,1,1,0],[0,0,0,0]] },
    { key: "J", matrix: [[0,0,0,0],[0,0,1,0],[1,1,1,0],[0,0,0,0]] },
    { key: "S", matrix: [[0,0,0,0],[0,1,1,0],[1,1,0,0],[0,0,0,0]] },
    { key: "Z", matrix: [[0,0,0,0],[1,1,0,0],[0,1,1,0],[0,0,0,0]] }
  ];
  const clone = (matrix) => matrix.map((row) => row.slice());
  const rotate = (matrix) => matrix[0].map((_, index) => matrix.map((row) => row[index]).reverse());
  const emptyRow = () => Array(width).fill(null);

  let board = Array.from({ length: height }, emptyRow);
  let current = null;
  let score = 0;
  let lines = 0;
  let level = 1;
  let finished = false;
  let dropTimer = 0;

  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">得分<strong id="tetris-score">0</strong></span>
        <span class="status-pill">行数<strong id="tetris-lines">0</strong></span>
        <span class="status-pill">等级<strong id="tetris-level">1</strong></span>
      </div>
      <div class="tetris-board" id="tetris-board"></div>
      <div class="stage-toolbar">
        <button class="button secondary" data-tetris-control="left" type="button">左</button>
        <button class="button secondary" data-tetris-control="rotate" type="button">旋转</button>
        <button class="button secondary" data-tetris-control="right" type="button">右</button>
        <button class="button primary" data-tetris-control="down" type="button">下落</button>
      </div>
      <div class="log-box" id="tetris-log">移动并旋转方块，拼满整行就会消除。</div>
    </div>
  `;

  const boardNode = stage.querySelector("#tetris-board");
  const scoreNode = stage.querySelector("#tetris-score");
  const linesNode = stage.querySelector("#tetris-lines");
  const levelNode = stage.querySelector("#tetris-level");
  const log = stage.querySelector("#tetris-log");

  const randomPiece = () => {
    const template = pieces[Math.floor(Math.random() * pieces.length)];
    return {
      key: template.key,
      color: colors[template.key],
      matrix: clone(template.matrix),
      x: 3,
      y: 0
    };
  };

  const collides = (matrix, x, y) => matrix.some((row, rowIndex) => row.some((cell, colIndex) => {
    if (!cell) return false;
    const boardRow = y + rowIndex;
    const boardCol = x + colIndex;
    if (boardCol < 0 || boardCol >= width || boardRow >= height) return true;
    if (boardRow < 0) return false;
    return Boolean(board[boardRow][boardCol]);
  }));

  const spawn = () => {
    current = randomPiece();
    if (collides(current.matrix, current.x, current.y)) {
      finish("方块堆满顶部，游戏结束。");
      return false;
    }
    return true;
  };

  const merge = () => {
    current.matrix.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (!cell) return;
        const boardRow = current.y + rowIndex;
        const boardCol = current.x + colIndex;
        if (boardRow < 0) return;
        if (boardRow < height && boardCol >= 0 && boardCol < width) {
          board[boardRow][boardCol] = current.color;
        }
      });
    });
  };

  const clearLines = () => {
    let cleared = 0;
    for (let row = height - 1; row >= 0; row -= 1) {
      if (board[row].every(Boolean)) {
        board.splice(row, 1);
        board.unshift(emptyRow());
        cleared += 1;
        row += 1;
      }
    }
    if (cleared > 0) {
      lines += cleared;
      score += [0, 100, 300, 500, 800][cleared] || cleared * 200;
      level = 1 + Math.floor(lines / 5);
      log.textContent = `消除了 ${cleared} 行。`;
    }
  };

  const finish = (text) => {
    finished = true;
    clearTimeout(dropTimer);
    log.textContent = text;
    stage.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });
  };

  const render = () => {
    scoreNode.textContent = String(score);
    linesNode.textContent = String(lines);
    levelNode.textContent = String(level);
    const activeCells = new Map();
    if (current) {
      current.matrix.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          if (!cell) return;
          const boardRow = current.y + rowIndex;
          const boardCol = current.x + colIndex;
          if (boardRow >= 0 && boardRow < height && boardCol >= 0 && boardCol < width) {
            activeCells.set(`${boardRow}-${boardCol}`, current.color);
          }
        });
      });
    }
    boardNode.innerHTML = Array.from({ length: height * width }, (_, index) => {
      const row = Math.floor(index / width);
      const col = index % width;
      const lockedColor = board[row][col];
      const activeColor = activeCells.get(`${row}-${col}`);
      const color = activeColor || lockedColor || "";
      const classes = ["tetris-cell"];
      if (lockedColor) classes.push("locked");
      if (activeColor) classes.push("active");
      return `<div class="${classes.join(" ")}"${color ? ` style="background:${color};"` : ""}></div>`;
    }).join("");
  };

  const move = (dx, dy) => {
    if (finished || !current) return false;
    const nextX = current.x + dx;
    const nextY = current.y + dy;
    if (collides(current.matrix, nextX, nextY)) return false;
    current.x = nextX;
    current.y = nextY;
    render();
    return true;
  };

  const rotateCurrent = () => {
    if (finished || !current) return false;
    const rotated = rotate(current.matrix);
    const kicks = [0, -1, 1, -2, 2];
    for (const kick of kicks) {
      if (!collides(rotated, current.x + kick, current.y)) {
        current.matrix = rotated;
        current.x += kick;
        render();
        return true;
      }
    }
    return false;
  };

  const lockPiece = () => {
    merge();
    clearLines();
    if (!spawn()) return;
    render();
  };

  const stepDown = () => {
    if (!move(0, 1)) lockPiece();
  };

  const hardDrop = () => {
    if (finished || !current) return;
    while (move(0, 1));
    lockPiece();
  };

  const scheduleDrop = () => {
    clearTimeout(dropTimer);
    if (finished) return;
    const delay = Math.max(120, 560 - (level - 1) * 40);
    dropTimer = window.setTimeout(() => {
      if (finished) return;
      stepDown();
      scheduleDrop();
    }, delay);
  };

  const onKeyDown = (event) => {
    if (event.target instanceof Element && event.target.closest("input, textarea, select, [contenteditable='true']")) return;
    if (["ArrowLeft", "a", "A"].includes(event.key)) {
      event.preventDefault();
      move(-1, 0);
      return;
    }
    if (["ArrowRight", "d", "D"].includes(event.key)) {
      event.preventDefault();
      move(1, 0);
      return;
    }
    if (["ArrowDown", "s", "S"].includes(event.key)) {
      event.preventDefault();
      stepDown();
      return;
    }
    if (["ArrowUp", "w", "W", " ", "Spacebar"].includes(event.key)) {
      event.preventDefault();
      rotateCurrent();
    }
  };

  const onControl = (event) => {
    const control = event.target.closest("[data-tetris-control]");
    if (!control || finished) return;
    const value = control.dataset.tetrisControl;
    if (value === "left") move(-1, 0);
    if (value === "right") move(1, 0);
    if (value === "rotate") rotateCurrent();
    if (value === "down") stepDown();
  };

  stage.addEventListener("click", onControl);
  window.addEventListener("keydown", onKeyDown);

  spawn();
  render();
  scheduleDrop();

  return () => {
    clearTimeout(dropTimer);
    stage.removeEventListener("click", onControl);
    window.removeEventListener("keydown", onKeyDown);
  };
}

function playSpotlight(stage) {
  const totalRelics = 4;
  let timeLeft = 28;
  let found = 0;
  let finished = false;
  let timer = 0;
  let spotlight = { x: 50, y: 50 };
  const relics = [
    { x: 18, y: 26, found: false },
    { x: 74, y: 22, found: false },
    { x: 34, y: 72, found: false },
    { x: 81, y: 68, found: false }
  ];
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">遗物<strong id="spotlight-found">0</strong>/${totalRelics}</span>
        <span class="status-pill">时间<strong id="spotlight-time">${timeLeft}</strong>s</span>
      </div>
      <div class="spotlight-board" id="spotlight-board">
        <div class="spotlight-scene" id="spotlight-scene"></div>
      </div>
      <div class="log-box" id="spotlight-log">拖动聚光区域寻找遗物，点中后即可收集。</div>
    </div>
  `;
  const board = stage.querySelector("#spotlight-board");
  const scene = stage.querySelector("#spotlight-scene");
  const foundNode = stage.querySelector("#spotlight-found");
  const timeNode = stage.querySelector("#spotlight-time");
  const log = stage.querySelector("#spotlight-log");

  const setSpotlight = (clientX, clientY) => {
    const rect = board.getBoundingClientRect();
    spotlight = {
      x: ((clientX - rect.left) / rect.width) * 100,
      y: ((clientY - rect.top) / rect.height) * 100
    };
    render();
  };

  const render = () => {
    foundNode.textContent = String(found);
    timeNode.textContent = String(timeLeft);
    board.style.setProperty("--spotlight-x", `${spotlight.x}%`);
    board.style.setProperty("--spotlight-y", `${spotlight.y}%`);
    scene.innerHTML = relics.map((relic, index) => `
      <button class="spotlight-relic${relic.found ? " found" : ""}" data-relic="${index}" style="left:${relic.x}%;top:${relic.y}%;" type="button">${relic.found ? "✓" : "◆"}</button>
    `).join("") + '<div class="spotlight-overlay"></div>';
  };

  const finish = (text) => {
    finished = true;
    clearInterval(timer);
    log.textContent = text;
    render();
    scene.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });
  };

  const handlePointer = (event) => {
    const point = event.touches?.[0] || event;
    setSpotlight(point.clientX, point.clientY);
  };

  stage.addEventListener("mousemove", handlePointer);
  stage.addEventListener("touchmove", handlePointer, { passive: true });
  stage.addEventListener("click", (event) => {
    const target = event.target.closest("[data-relic]");
    if (!target || finished) return;
    const relic = relics[Number(target.dataset.relic)];
    if (!relic || relic.found) return;
    relic.found = true;
    found += 1;
    log.textContent = `已找到 ${found}/${totalRelics} 件遗物。`;
    render();
    if (found >= totalRelics) finish("全部遗物都已找到。", true);
  });

  render();
  timer = window.setInterval(() => {
    if (finished) return;
    timeLeft -= 1;
    if (timeLeft <= 0) {
      timeLeft = 0;
      finish(`时间到，只找到 ${found} 件遗物。`);
      return;
    }
    render();
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}

function playTracer(stage) {
  const checkpoints = [
    { x: 18, y: 78 },
    { x: 34, y: 58 },
    { x: 48, y: 44 },
    { x: 66, y: 30 },
    { x: 82, y: 18 }
  ];
  const segments = checkpoints.slice(0, -1).map((point, index) => ({ from: point, to: checkpoints[index + 1] }));
  let progress = 0;
  let drift = 0;
  let tracing = false;
  let finished = false;
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">检查点<strong id="tracer-progress">0</strong>/${checkpoints.length - 1}</span>
        <span class="status-pill">偏离<strong id="tracer-drift">0</strong>/8</span>
      </div>
      <div class="tracer-board" id="tracer-board">
        <div class="tracer-canvas" id="tracer-canvas"></div>
      </div>
      <div class="log-box" id="tracer-log">按住起点开始描线，沿光路滑到终点。</div>
    </div>
  `;
  const board = stage.querySelector("#tracer-board");
  const canvas = stage.querySelector("#tracer-canvas");
  const progressNode = stage.querySelector("#tracer-progress");
  const driftNode = stage.querySelector("#tracer-drift");
  const log = stage.querySelector("#tracer-log");

  const distanceToSegment = (point, from, to) => {
    const ax = from.x;
    const ay = from.y;
    const bx = to.x;
    const by = to.y;
    const px = point.x;
    const py = point.y;
    const abx = bx - ax;
    const aby = by - ay;
    const ab2 = abx * abx + aby * aby;
    const t = ab2 === 0 ? 0 : Math.max(0, Math.min(1, ((px - ax) * abx + (py - ay) * aby) / ab2));
    const cx = ax + abx * t;
    const cy = ay + aby * t;
    return Math.hypot(px - cx, py - cy);
  };

  const render = () => {
    progressNode.textContent = String(progress);
    driftNode.textContent = String(drift);
    canvas.innerHTML = segments.map((segment) => `
      <div class="tracer-path" style="left:${segment.from.x}%;top:${segment.from.y}%;width:${Math.hypot(segment.to.x - segment.from.x, segment.to.y - segment.from.y)}%;transform: rotate(${Math.atan2(segment.to.y - segment.from.y, segment.to.x - segment.from.x)}rad);"></div>
    `).join("") + checkpoints.map((point, index) => `
      <div class="tracer-checkpoint${index <= progress ? " hit" : ""}${index === 0 ? " start" : ""}${index === checkpoints.length - 1 ? " goal" : ""}" style="left:${point.x}%;top:${point.y}%;"></div>
    `).join("");
  };

  const finish = (text) => {
    finished = true;
    tracing = false;
    log.textContent = text;
    render();
  };

  const positionFromEvent = (event) => {
    const point = event.touches?.[0] || event;
    const rect = board.getBoundingClientRect();
    return {
      x: ((point.clientX - rect.left) / rect.width) * 100,
      y: ((point.clientY - rect.top) / rect.height) * 100
    };
  };

  const evaluatePoint = (event) => {
    if (!tracing || finished) return;
    const point = positionFromEvent(event);
    const segment = segments[Math.min(progress, segments.length - 1)];
    const distance = distanceToSegment(point, segment.from, segment.to);
    if (distance > 9) {
      drift += 1;
      driftNode.textContent = String(drift);
      if (drift >= 8) {
        finish("偏离线路太多，描线失败。");
      }
      return;
    }
    const goal = checkpoints[Math.min(progress + 1, checkpoints.length - 1)];
    if (Math.hypot(point.x - goal.x, point.y - goal.y) <= 7) {
      progress += 1;
      render();
      if (progress >= checkpoints.length - 1) {
        finish("整条激光路线都已描完。", true);
      }
    }
  };

  const beginTrace = (event) => {
    if (finished) return;
    const point = positionFromEvent(event);
    if (Math.hypot(point.x - checkpoints[0].x, point.y - checkpoints[0].y) > 7) {
      log.textContent = "必须从起点开始。";
      return;
    }
    tracing = true;
    log.textContent = "保持按住并沿着光路移动。";
  };

  const endTrace = () => {
    if (!finished) tracing = false;
  };

  board.addEventListener("pointerdown", beginTrace);
  board.addEventListener("pointermove", evaluatePoint);
  board.addEventListener("pointerup", endTrace);
  board.addEventListener("pointerleave", endTrace);
  render();
  return () => {};
}

function playStealth(stage) {
  const walls = [
    { x: 22, y: 18, w: 18, h: 10 },
    { x: 56, y: 42, w: 14, h: 24 },
    { x: 18, y: 64, w: 24, h: 10 }
  ];
  const guards = [
    { x: 72, y: 24, angle: 160, speed: 2 },
    { x: 32, y: 78, angle: -40, speed: -2.5 }
  ];
  const key = { x: 16, y: 44 };
  const exit = { x: 84, y: 78 };
  let player = { x: 10, y: 84 };
  let hasKey = false;
  let finished = false;
  let loop = 0;
  const keys = { up: false, down: false, left: false, right: false };
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">钥匙<strong id="stealth-key-status">未拿到</strong></span>
        <span class="status-pill">状态<strong id="stealth-state">潜入中</strong></span>
      </div>
      <div class="stealth-board" id="stealth-board"></div>
      <div class="log-box" id="stealth-log">避开警戒扇区，先拿钥匙再走到出口。</div>
    </div>
  `;
  const board = stage.querySelector("#stealth-board");
  const keyNode = stage.querySelector("#stealth-key-status");
  const stateNode = stage.querySelector("#stealth-state");
  const log = stage.querySelector("#stealth-log");

  const collidesWall = (x, y) => walls.some((wall) => x > wall.x && x < wall.x + wall.w && y > wall.y && y < wall.y + wall.h);
  const render = () => {
    keyNode.textContent = hasKey ? "已拿到" : "未拿到";
    board.innerHTML = walls.map((wall) => `<div class="stealth-wall" style="left:${wall.x}%;top:${wall.y}%;width:${wall.w}%;height:${wall.h}%;"></div>`).join("")
      + guards.map((guard, index) => `<div class="stealth-cone" style="left:${guard.x}%;top:${guard.y}%;transform: translate(-50%, -50%) rotate(${guard.angle}deg);"></div><div class="stealth-guard" data-guard="${index}" style="left:${guard.x}%;top:${guard.y}%;"></div>`).join("")
      + (!hasKey ? `<div class="stealth-key" style="left:${key.x}%;top:${key.y}%;"></div>` : "")
      + `<div class="stealth-exit" style="left:${exit.x}%;top:${exit.y}%;"></div><div class="stealth-player" style="left:${player.x}%;top:${player.y}%;"></div>`;
  };

  const finish = (text) => {
    finished = true;
    clearInterval(loop);
    stateNode.textContent = "结束";
    log.textContent = text;
    render();
  };

  const seenByGuard = (guard) => {
    const dx = player.x - guard.x;
    const dy = player.y - guard.y;
    const distance = Math.hypot(dx, dy);
    if (distance > 22) return false;
    const angleToPlayer = Math.atan2(dy, dx) * (180 / Math.PI);
    let delta = ((angleToPlayer - guard.angle + 540) % 360) - 180;
    return Math.abs(delta) <= 26;
  };

  const onKey = (event, pressed) => {
    if (event.target instanceof Element && event.target.closest("input, textarea, select, [contenteditable='true']")) return;
    if (["ArrowUp", "w", "W"].includes(event.key)) keys.up = pressed;
    if (["ArrowDown", "s", "S"].includes(event.key)) keys.down = pressed;
    if (["ArrowLeft", "a", "A"].includes(event.key)) keys.left = pressed;
    if (["ArrowRight", "d", "D"].includes(event.key)) keys.right = pressed;
  };
  const down = (event) => onKey(event, true);
  const up = (event) => onKey(event, false);
  window.addEventListener("keydown", down);
  window.addEventListener("keyup", up);

  render();
  loop = window.setInterval(() => {
    if (finished) return;
    let nextX = player.x + (keys.right ? 1.5 : 0) - (keys.left ? 1.5 : 0);
    let nextY = player.y + (keys.down ? 1.5 : 0) - (keys.up ? 1.5 : 0);
    nextX = Math.max(6, Math.min(94, nextX));
    nextY = Math.max(6, Math.min(94, nextY));
    if (!collidesWall(nextX, player.y)) player.x = nextX;
    if (!collidesWall(player.x, nextY)) player.y = nextY;
    guards.forEach((guard) => {
      guard.angle += guard.speed;
      if (guard.angle > 220 || guard.angle < -220) guard.speed *= -1;
    });
    if (!hasKey && Math.hypot(player.x - key.x, player.y - key.y) <= 6) {
      hasKey = true;
      log.textContent = "已拿到钥匙，立刻前往出口。";
    }
    if (guards.some(seenByGuard)) {
      finish("你被守卫发现了，潜行失败。");
      return;
    }
    if (hasKey && Math.hypot(player.x - exit.x, player.y - exit.y) <= 7) {
      finish("成功带着钥匙逃离房间。", true);
      return;
    }
    render();
  }, 60);

  return () => {
    clearInterval(loop);
    window.removeEventListener("keydown", down);
    window.removeEventListener("keyup", up);
  };
}

function playSafe(stage) {
  const combo = [14, 62, 31];
  const directions = ["cw", "ccw", "cw"];
  let angle = 0;
  let step = 0;
  let attempts = 0;
  let finished = false;
  let lastMove = "cw";
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">步骤<strong id="safe-step">1</strong>/3</span>
        <span class="status-pill">尝试<strong id="safe-attempts">0</strong></span>
        <span class="status-pill">刻度<strong id="safe-value">0</strong></span>
      </div>
      <div class="safe-board">
        <div class="safe-dial" id="safe-dial">
          <div class="safe-pointer"></div>
          <div class="safe-center" id="safe-center">0</div>
        </div>
      </div>
      <div class="stage-toolbar safe-controls">
        <button class="button secondary" data-safe-turn="ccw" type="button">逆时针</button>
        <button class="button secondary" data-safe-turn="cw" type="button">顺时针</button>
        <button class="button primary" id="safe-confirm" type="button">确认刻度</button>
      </div>
      <div class="log-box" id="safe-log">按要求方向把刻度对准组合数字：先顺时针，再逆时针，再顺时针。</div>
    </div>
  `;
  const stepNode = stage.querySelector("#safe-step");
  const attemptsNode = stage.querySelector("#safe-attempts");
  const valueNode = stage.querySelector("#safe-value");
  const centerNode = stage.querySelector("#safe-center");
  const dial = stage.querySelector("#safe-dial");
  const log = stage.querySelector("#safe-log");

  const currentValue = () => ((Math.round(angle / 3.6) % 100) + 100) % 100;
  const render = () => {
    const value = currentValue();
    stepNode.textContent = String(step + 1);
    attemptsNode.textContent = String(attempts);
    valueNode.textContent = String(value);
    centerNode.textContent = String(value);
    dial.style.transform = `rotate(${angle}deg)`;
  };

  const finish = (text) => {
    finished = true;
    log.textContent = text;
    stage.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });
  };

  stage.addEventListener("click", (event) => {
    const turn = event.target.closest("[data-safe-turn]");
    if (turn && !finished) {
      lastMove = turn.dataset.safeTurn;
      angle += lastMove === "cw" ? 18 : -18;
      render();
      return;
    }
    if (event.target.closest("#safe-confirm") && !finished) {
      attempts += 1;
      const value = currentValue();
      const target = combo[step];
      if (lastMove !== directions[step]) {
        log.textContent = `方向错了，这一步必须${directions[step] === "cw" ? "顺时针" : "逆时针"}。`;
        render();
        return;
      }
      if (Math.abs(value - target) > 3) {
        log.textContent = value < target ? "还不够，再往上拧一点。" : "过头了，往回一点。";
        render();
        return;
      }
      step += 1;
      render();
      if (step >= combo.length) {
        finish(`保险箱已打开，共尝试 ${attempts} 次。`, true);
        return;
      }
      log.textContent = `第 ${step + 1} 组继续，方向改为${directions[step] === "cw" ? "顺时针" : "逆时针"}。`;
    }
  });

  render();
  return () => {};
}

function playPhoto(stage) {
  let shots = 3;
  let focus = 50;
  let zoom = 50;
  let score = 0;
  let subject = { x: 18, y: 44, size: 12, focus: 58 };
  let direction = 1;
  let finished = false;
  let loop = 0;
  stage.innerHTML = `
    <div class="play-stage">
      <div class="status-line">
        <span class="status-pill">快门<strong id="photo-shots">${shots}</strong></span>
        <span class="status-pill">得分<strong id="photo-score">${score}</strong></span>
        <span class="status-pill">焦距<strong id="photo-focus">${focus}</strong></span>
        <span class="status-pill">变焦<strong id="photo-zoom">${zoom}</strong></span>
      </div>
      <div class="photo-board" id="photo-board">
        <div class="photo-frame"></div>
        <div class="photo-subject" id="photo-subject"></div>
      </div>
      <div class="stage-toolbar photo-controls">
        <button class="button secondary" data-photo-focus="-8" type="button">焦距 -</button>
        <button class="button secondary" data-photo-focus="8" type="button">焦距 +</button>
        <button class="button secondary" data-photo-zoom="-8" type="button">变焦 -</button>
        <button class="button secondary" data-photo-zoom="8" type="button">变焦 +</button>
        <button class="button primary" id="photo-shutter" type="button">按下快门</button>
      </div>
      <div class="log-box" id="photo-log">尽量让主体居中、清晰、大小合适再拍。</div>
    </div>
  `;
  const subjectNode = stage.querySelector("#photo-subject");
  const shotsNode = stage.querySelector("#photo-shots");
  const scoreNode = stage.querySelector("#photo-score");
  const focusNode = stage.querySelector("#photo-focus");
  const zoomNode = stage.querySelector("#photo-zoom");
  const log = stage.querySelector("#photo-log");

  const render = () => {
    shotsNode.textContent = String(shots);
    scoreNode.textContent = String(score);
    focusNode.textContent = String(focus);
    zoomNode.textContent = String(zoom);
    subjectNode.style.left = `${subject.x}%`;
    subjectNode.style.top = `${subject.y}%`;
    subjectNode.style.width = `${subject.size + (zoom - 50) * 0.2}%`;
    subjectNode.style.height = `${subject.size + (zoom - 50) * 0.2}%`;
    subjectNode.style.filter = `blur(${Math.abs(focus - subject.focus) * 0.08}px)`;
  };

  const finish = (text) => {
    finished = true;
    clearInterval(loop);
    log.textContent = text;
    stage.querySelectorAll("button").forEach((button) => {
      button.disabled = true;
    });
  };

  stage.addEventListener("click", (event) => {
    const focusButton = event.target.closest("[data-photo-focus]");
    if (focusButton && !finished) {
      focus = Math.max(0, Math.min(100, focus + Number(focusButton.dataset.photoFocus)));
      render();
      return;
    }
    const zoomButton = event.target.closest("[data-photo-zoom]");
    if (zoomButton && !finished) {
      zoom = Math.max(10, Math.min(100, zoom + Number(zoomButton.dataset.photoZoom)));
      render();
      return;
    }
    if (event.target.closest("#photo-shutter") && !finished) {
      shots -= 1;
      const centerScore = Math.max(0, 50 - Math.abs(subject.x - 50) - Math.abs(subject.y - 50));
      const focusScore = Math.max(0, 40 - Math.abs(focus - subject.focus));
      const zoomScore = Math.max(0, 30 - Math.abs(zoom - 62));
      const shotScore = Math.max(0, Math.round(centerScore + focusScore + zoomScore));
      score += shotScore;
      log.textContent = `本次抓拍得分 ${shotScore}。`;
      render();
      if (shots <= 0) {
        finish(`拍摄结束，总分 ${score}。`, true);
      }
    }
  });

  render();
  loop = window.setInterval(() => {
    if (finished) return;
    subject.x += direction * 2.8;
    subject.y = 46 + Math.sin(subject.x / 10) * 18;
    subject.focus = 42 + Math.sin(subject.x / 8) * 22;
    if (subject.x >= 84 || subject.x <= 16) direction *= -1;
    render();
  }, 120);

  return () => {
    clearInterval(loop);
  };
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
    "settingsTrigger",
    "settingsModal",
    "settingsClose",
    "settingsExit",
    "settingsMain",
    "creditsPanel",
    "settingsLogin",
    "creditsTrigger",
    "creditsBack",
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

  if (els.random) {
    els.random.addEventListener("click", () => {
      const randomGame = games[Math.floor(Math.random() * games.length)];
      openGame(randomGame.id);
    });
  }

  els.modalClose.addEventListener("click", closeGame);
  els.modalExit.addEventListener("click", closeGame);
  els.authClose.addEventListener("click", closeAuth);
  els.authExit.addEventListener("click", closeAuth);
  els.zoomClose.addEventListener("click", closeZoom);
  els.zoomExit.addEventListener("click", closeZoom);
  if (els.login) {
    els.login.addEventListener("click", () => {
      closeSettings();
      openAuth();
    });
  }
  els.settingsTrigger.addEventListener("click", openSettings);
  els.settingsLogin.addEventListener("click", () => {
    closeSettings();
    openAuth();
  });
  els.creditsTrigger.addEventListener("click", openCredits);
  els.creditsBack.addEventListener("click", openSettings);
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
    if (event.repeat || event.ctrlKey || event.altKey || event.metaKey) return;
    if (event.key.toLowerCase() !== "t") return;
    if (!els.modal.classList.contains("hidden") || !els.authModal.classList.contains("hidden") || !els.settingsModal.classList.contains("hidden") || !els.zoomModal.classList.contains("hidden")) return;
    easterEggPressCount += 1;
    clearTimeout(easterEggWindowTimer);
    easterEggWindowTimer = window.setTimeout(() => {
      easterEggPressCount = 0;
    }, EASTER_EGG_T_WINDOW);
    if (easterEggPressCount < EASTER_EGG_T_TARGET) return;
    easterEggPressCount = 0;
    clearTimeout(easterEggWindowTimer);
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
