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
const games=[
{id:"galaxy-hunters",name:"Galaxy Hunters",genre:"动作射击",rating:4.8,players:"1-4 人",platform:"PC / 网页",description:"高速反应射击挑战，真假目标混入。",features:["真假目标","连击倍率","误点扣分"],image:createPoster({title:"GALAXY HUNTERS",subtitle:"Action Shooter",palette:["#071a52","#1f4287","#5be7ff"],icon:"✦"})},
{id:"crown-chess",name:"Crown Chess",genre:"策略战棋",rating:4.7,players:"单人",platform:"PC",description:"高压博弈，需要读懂对手节奏。",features:["回合博弈","资源管理","多轮胜负"],image:createPoster({title:"CROWN CHESS",subtitle:"Strategy",palette:["#3c2317","#7b4f2c","#d4a373"],icon:"♜"})},
{id:"neon-drift-x",name:"Neon Drift X",genre:"竞速",rating:4.6,players:"1-8 人",platform:"PC / 主机",description:"加速与热量管理并存的竞速挑战。",features:["热量系统","动态 AI","冲刺节奏"],image:createPoster({title:"NEON DRIFT X",subtitle:"Racing",palette:["#240046","#7b2cbf","#ff4d6d"],icon:"⚡"})},
{id:"dragon-fall",name:"Dragon Fall",genre:"角色扮演",rating:4.9,players:"单人",platform:"PC / 主机",description:"生命、补给、压力三线并行的冒险。",features:["多状态冒险","风险选择","多结局"],image:createPoster({title:"DRAGON FALL",subtitle:"RPG",palette:["#0b132b","#1c2541","#5bc0be"],icon:"⚔"})},
{id:"mirror-mind",name:"Mirror Mind",genre:"解谜",rating:4.5,players:"单人",platform:"网页 / 手机",description:"有限次数的 3 位密码推理。",features:["数字线索","尝试限制","位置反馈"],image:createPoster({title:"MIRROR MIND",subtitle:"Puzzle",palette:["#355070","#6d597a","#b56576"],icon:"◈"})},
{id:"harvest-town",name:"Harvest Town",genre:"模拟经营",rating:4.4,players:"1-2 人",platform:"PC / Switch",description:"限回合资源经营与建造。",features:["资源链","限回合","断电失败"],image:createPoster({title:"HARVEST TOWN",subtitle:"Sim",palette:["#386641","#6a994e","#f2e8cf"],icon:"❀"})},
{id:"orbit-base",name:"Orbit Base",genre:"生存建造",rating:4.6,players:"1-6 人",platform:"PC",description:"空间站资源压力与建造挑战。",features:["高压资源","阶段建造","失败惩罚"],image:createPoster({title:"ORBIT BASE",subtitle:"Build",palette:["#03045e","#0077b6","#90e0ef"],icon:"⬢"})},
{id:"arcane-deck",name:"Arcane Deck",genre:"卡牌对战",rating:4.3,players:"1-2 人",platform:"PC / 手机",description:"蓄力与重击的回合对战。",features:["读心博弈","爆发伤害","防守反打"],image:createPoster({title:"ARCANE DECK",subtitle:"Card Battle",palette:["#10002b","#3c096c","#c77dff"],icon:"♠"})},
{id:"mecha-cup",name:"Mecha Cup",genre:"体育竞技",rating:4.2,players:"2-6 人",platform:"PC / 主机",description:"高速机甲球赛与过热惩罚。",features:["热量平衡","高压对抗","冲刺时机"],image:createPoster({title:"MECHA CUP",subtitle:"Arena",palette:["#14213d","#2d6a4f","#fca311"],icon:"◉"})},
{id:"night-motel",name:"Night Motel",genre:"恐怖冒险",rating:4.5,players:"单人",platform:"PC",description:"精神压力不断上升的恐怖逃生。",features:["压力系统","路线选择","多结局"],image:createPoster({title:"NIGHT MOTEL",subtitle:"Horror",palette:["#111111","#3a0f0f","#9a031e"],icon:"☾"})},
{id:"pixel-quest",name:"Pixel Quest",genre:"像素冒险",rating:4.4,players:"1-4 人",platform:"网页 / PC",description:"像素风多状态冒险。",features:["补给管理","事件分支","风险抉择"],image:createPoster({title:"PIXEL QUEST",subtitle:"Pixel",palette:["#283618","#606c38","#dda15e"],icon:"▣"})},
{id:"sky-forge",name:"Sky Forge",genre:"沙盒创造",rating:4.7,players:"1-10 人",platform:"PC / 网页",description:"空岛核心区限回合建造。",features:["多资源联动","建筑顺序","失败惩罚"],image:createPoster({title:"SKY FORGE",subtitle:"Sandbox",palette:["#219ebc","#8ecae6","#ffb703"],icon:"⬡"})}
];
const modes={"动作射击":"target","策略战棋":"duel","竞速":"race","角色扮演":"story","解谜":"riddle","模拟经营":"builder","生存建造":"builder","卡牌对战":"duel","体育竞技":"race","恐怖冒险":"story","像素冒险":"story","沙盒创造":"builder"};
const $=s=>document.querySelector(s);
const els={search:$("#search-input"),genre:$("#genre-filter"),sort:$("#sort-filter"),grid:$("#game-grid"),gameCount:$("#game-count"),genreCount:$("#genre-count"),commentCount:$("#comment-count"),random:$("#random-pick"),modal:$("#game-modal"),modalContent:$("#modal-content"),modalClose:$("#modal-close"),modalExit:$("#modal-exit"),tpl:$("#game-detail-template"),authModal:$("#auth-modal"),authForm:$("#auth-form"),authName:$("#auth-name"),authPassword:$("#auth-password"),authStatus:$("#auth-status"),login:$("#login-trigger"),logout:$("#logout-button"),authClose:$("#auth-close"),authExit:$("#auth-exit"),userName:$("#user-name-display")};
let activeGameId=null,cleanup=null;
const getUser=()=>{try{return JSON.parse(localStorage.getItem(AUTH_KEY))||null}catch{return null}};
const setUser=u=>u?localStorage.setItem(AUTH_KEY,JSON.stringify(u)):localStorage.removeItem(AUTH_KEY);
const getComments=()=>{try{return JSON.parse(localStorage.getItem(COMMENT_KEY))||{}}catch{return {}}};
const saveComments=v=>localStorage.setItem(COMMENT_KEY,JSON.stringify(v));
const commentsFor=id=>getComments()[id]||[];
const totalComments=()=>Object.values(getComments()).reduce((a,b)=>a+b.length,0);
function renderUser(){const u=getUser();els.userName.textContent=u?u.name:"游客";els.login.textContent=u?"账号管理":"登录账号";els.authStatus.textContent=u?`已登录：${u.name}。评论会自动使用该昵称。`:"未登录时将以游客身份浏览，评论时建议先登录。";}
function openAuth(){const u=getUser();els.authName.value=u?.name||"";els.authPassword.value=u?.password||"";els.authModal.classList.remove("hidden");}
function closeAuth(){els.authModal.classList.add("hidden");}
function modeOf(g){return modes[g.genre]||"story"}
