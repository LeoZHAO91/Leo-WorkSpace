// ===== 字段定义（与后端 schema 一致，label 为 key）=====
const FIELDS = {
  inventory: {
    api: '/api/metrics',
    title: '数据项',
    columns: [
      { key: '数据项', label: '数据项', type: 'title' },
      { key: '区组', label: '区组', type: 'text' },
      { key: '指标', label: '指标', type: 'text' },
      { key: '数值', label: '数值', type: 'number' },
      { key: '单位', label: '单位', type: 'text' },
      { key: '市场', label: '市场', type: 'text' },
      { key: '数据期', label: '数据期', type: 'date' },
      { key: '确认状态', label: '确认状态', type: 'status', tag: st => ({ '已确认': 'tag-confirm', '待确认': 'tag-pending', '已失效': 'tag-invalid' }[st] || 'tag-pending') },
    ],
    filters: [
      { key: '区组', label: '区组', options: ['东盟', '中东非', '印度', '跨区组'] },
      { key: '指标', label: '指标', options: ['收入', '利润', '销量', '均价', '毛利率', '费用率', '预测', '要货'] },
      { key: '确认状态', label: '确认状态', options: ['待确认', '已确认', '已失效'] },
    ],
  },
  // 以上是 inventory，form 复用 metrics

  tasks: {
    api: '/api/tasks',
    title: '待办事项',
    columns: [
      { key: '待办事项', label: '待办事项', type: 'title' },
      { key: '优先级', label: '优先级', type: 'select', tag: pri => 'tag-' + (pri || 'p3').replace(' ', '') },
      { key: '区域', label: '区域', type: 'text' },
      { key: '状态', label: '状态', type: 'status', tag: st => ({ '待开始': 'tag-todo', '进行中': 'tag-progress', '等待他人': 'tag-wait', '已完成': 'tag-done' }[st] || 'tag-todo') },
      { key: '类型', label: '类型', type: 'text' },
      { key: '截止日期', label: '截止日期', type: 'date' },
      { key: '来源链接', label: '来源链接', type: 'link' },
    ],
    form: [
      { key: '待办事项', label: '待办事项', type: 'text', required: true },
      { key: '优先级', label: '优先级', type: 'select', options: ['P0 紧急', 'P1 重要', 'P2 常规', 'P3 低'] },
      { key: '区域', label: '区域', type: 'select', options: ['东盟', '中东非', '印度', '全球'] },
      { key: '状态', label: '状态', type: 'select', options: ['待开始', '进行中', '等待他人', '已完成'] },
      { key: '类型', label: '类型', type: 'select', options: ['项目', '会议', '跟进', '风险', '资料'] },
      { key: '截止日期', label: '截止日期', type: 'date' },
      { key: '来源链接', label: '来源链接', type: 'text' },
      { key: '备注', label: '备注', type: 'textarea' },
    ],
    filters: [
      { key: '状态', label: '状态', options: ['待开始', '进行中', '等待他人', '已完成'] },
      { key: '优先级', label: '优先级', options: ['P0 紧急', 'P1 重要', 'P2 常规', 'P3 低'] },
      { key: '区域', label: '区域', options: ['东盟', '中东非', '印度', '全球'] },
    ],
  },
  metrics: {
    api: '/api/metrics',
    title: '数据项',
    columns: [
      { key: '数据项', label: '数据项', type: 'title' },
      { key: '区组', label: '区组', type: 'text' },
      { key: '指标', label: '指标', type: 'text' },
      { key: '数值', label: '数值', type: 'number' },
      { key: '单位', label: '单位', type: 'text' },
      { key: '市场', label: '市场', type: 'text' },
      { key: '数据期', label: '数据期', type: 'date' },
      { key: '确认状态', label: '确认状态', type: 'status', tag: st => ({ '已确认': 'tag-confirm', '待确认': 'tag-pending', '已失效': 'tag-invalid' }[st] || 'tag-pending') },
      { key: '来源类型', label: '来源类型', type: 'text' },
    ],
    form: [
      { key: '数据项', label: '数据项', type: 'text', required: true },
      { key: '区组', label: '区组', type: 'select', options: ['东盟', '中东非', '印度', '跨区组'] },
      { key: '指标', label: '指标', type: 'select', options: ['收入', '利润', '销量', '均价', '毛利率', '费用率', '预测', '要货'] },
      { key: '数值', label: '数值', type: 'number' },
      { key: '单位', label: '单位', type: 'select', options: ['万美元', '万元', '台', '美元/台', '%', 'pp'] },
      { key: '市场', label: '市场', type: 'text' },
      { key: '数据期', label: '数据期', type: 'date' },
      { key: '来源类型', label: '来源类型', type: 'select', options: ['截图', 'Excel/CSV', 'Outlook邮件', 'Notion', 'SharePoint/OneDrive'] },
      { key: '确认状态', label: '确认状态', type: 'select', options: ['待确认', '已确认', '已失效'] },
      { key: '来源链接', label: '来源链接', type: 'text' },
      { key: '备注', label: '备注', type: 'textarea' },
    ],
    filters: [
      { key: '区组', label: '区组', options: ['东盟', '中东非', '印度', '跨区组'] },
      { key: '指标', label: '指标', options: ['收入', '利润', '销量', '均价', '毛利率', '费用率', '预测', '要货'] },
      { key: '确认状态', label: '确认状态', options: ['待确认', '已确认', '已失效'] },
    ],
  },
  milestones: {
    api: '/api/milestones',
    title: '节点名称',
    form: [
      { key: '节点名称', label: '节点名称', type: 'text', required: true },
      { key: '区域', label: '区域', type: 'select', options: ['东盟', '中东非', '印度', '全球'] },
      { key: '状态', label: '状态', type: 'select', options: ['立项中', '进行中', '节点达成', '交付完成', '搁置'] },
      { key: '优先级', label: '优先级', type: 'select', options: ['P0 紧急', 'P1 重要', 'P2 常规', 'P3 低'] },
      { key: '负责人', label: '负责人', type: 'text' },
      { key: '下次关键节点日', label: '下次关键节点日', type: 'date' },
      { key: '交付截止日', label: '交付截止日', type: 'date' },
      { key: '进展描述', label: '进展描述', type: 'textarea' },
      { key: '依赖资源', label: '依赖资源', type: 'textarea' },
      { key: '项目卡点', label: '项目卡点', type: 'textarea' },
    ],
  },
};

const VIEW_TITLES = {
  ai: 'AI 工作区', today: '今日工作', mail: '邮件情报', regional: '区域经营',
  projects: '项目与待办', meetings: '会议与日历', 'meeting-notes': '会议纪要',
  'product-initiatives': '产品专项', inventory: '要货与产销存',
  insights: '资讯与洞察', market: '市场分析', sync: 'Notion 同步中枢',
  skills: 'Agent 与 Skill 管理', settings: '入口与偏好设置', summary: '汇总分析',
  personal: 'Personal Space',
};

const VIEW_BREADCRUMBS = {
  ai: '工作台 / AI 工作区', today: '工作台 / 今日工作', mail: '工作台 / 邮件情报', regional: '工作台 / 区域经营',
  projects: '工作台 / 项目与待办', meetings: '工作台 / 会议与日历', 'meeting-notes': '工作台 / 会议纪要',
  'product-initiatives': '工作台 / 产品专项', inventory: '工作台 / 要货与产销存',
  insights: '工作台 / 资讯与洞察', market: '工作台 / 市场分析', sync: '工作台 / Notion 同步中枢',
  skills: '工作台 / Agent 与 Skill 管理', settings: '工作台 / 入口与偏好设置', summary: '工作台 / 汇总分析',
  personal: '工作台 / 个人空间',
};

let aseanData = null;

let currentView = 'today';
let currentRegion = null;
let cache = { tasks: [], metrics: [] };
let editing = null;
let selectedFolderId = null;
let selectedFolderName = '收件箱';
let aiFiles = [];
let todayData = null;
let skills = [];
let insightData = null;

// ===== 工具 =====
const $ = (sel) => document.querySelector(sel);

// ---- 静态模式（GitHub Pages）----
// 部署到 Pages 时没有后端，改为读取随仓库发布的 data.json 快照。
// STATIC_MODE 优先级：URL 带 ?static=1 强制开启 > 自动探测（无后端时开启）
const STATIC_MODE = (() => {
  if (location.search.indexOf('static=1') >= 0) return true;
  // github.io 域名下必然无后端
  if (/\.github\.io$/.test(location.hostname)) return true;
  return false;
})();
let __snapshot = null;
async function loadSnapshot() {
  if (__snapshot) return __snapshot;
  const res = await fetch('data.json?t=' + Date.now());
  if (!res.ok) throw new Error('快照加载失败 HTTP ' + res.status);
  __snapshot = await res.json();
  return __snapshot;
}
// 静态模式下接口缺失时的兜底返回，保证界面不因 404 报错
function STATIC_FALLBACK(base) {
  if (base.indexOf('/api/mail') === 0) return { folders: [], messages: [] };
  if (base.indexOf('/api/tasks') === 0) return { tasks: [] };
  if (base.indexOf('/api/metrics') === 0) return { metrics: [] };
  if (base.indexOf('/api/skills') === 0) return { skills: [] };
  if (base.indexOf('/api/executions') === 0) return { executions: [] };
  if (base.indexOf('/api/personal/dbs') === 0) return { dbs: [] };
  return {};
}

async function api(path, opts = {}) {
  // 静态模式：从快照取数；写操作直接拒绝（Pages 只读）
  if (STATIC_MODE) {
    const snap = await loadSnapshot();
    const method = (opts.method || 'GET').toUpperCase();
    if (method !== 'GET') {
      throw new Error('静态快照为只读模式，写操作请在本地工作台进行');
    }
    const base = path.split('?')[0];
    const E = snap.endpoints;
    // 1) 精确命中
    if (Object.prototype.hasOwnProperty.call(E, base)) return E[base];
    // 2) 前缀命中（去掉尾部动态段再试，如 /api/personal/db/xxx）
    const seg = base.split('/').filter(Boolean);
    for (let i = seg.length - 1; i >= 2; i--) {
      const prefix = '/' + seg.slice(0, i).join('/');
      if (Object.prototype.hasOwnProperty.call(E, prefix)) return E[prefix];
    }
    // 3) 带查询参数的接口：退化为无参版本（快照只存了默认视图）
    if (Object.prototype.hasOwnProperty.call(E, base)) return E[base];
    // 4) 无数据 -> 返回空壳并按接口类型给合理默认，避免界面报 404
    return STATIC_FALLBACK(base);
  }

  const headers = { 'Content-Type': 'application/json' };
  const key = localStorage.getItem('wb_key');
  if (key) headers['X-Access-Key'] = key;
  // 本设备标识：后端用它标记事件来源，广播回来的事件才能被本机精确识别并跳过
  if (myClientId) headers['X-Client-Id'] = myClientId;
  const pt = sessionStorage.getItem('wb_ptok');
  if (pt && path.indexOf('/api/personal') === 0) headers['X-Personal-Token'] = pt;
  const res = await fetch(path, {
    headers,
    ...opts,
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (res.status === 401 && data.needPersonalAuth) {
    // 个人空间的 401：走个人门；若门已经开着（例如正是从个人门发出的验证请求），
    // 只抛出错误交给调用方显示，不重复打开第二个门 —— 这正是"输入两次密码"的根因。
    if ($('#login-mask') && $('#login-mask').classList.contains('hidden')) showLogin();
    throw new PersonalAuthError(data.error);
  }
  if (res.status === 401) {
    // 工作台主密钥 401：个人门开着时不要抢焦点，等它走完
    const mask = $('#login-mask');
    if (!mask || mask.classList.contains('hidden')) showLogin();
    throw new Error('需要登录');
  }
  if (!res.ok) throw new Error(data.error || data.detail || ('HTTP ' + res.status));
  return data;
}
class PersonalAuthError extends Error {}

// ============ 跨设备实时同步（SSE + dataVersion 兜底）============
// 设计（Leo 2026-09-22 定案）：
//  - SSE 只做「数据变了」的通知，不推送业务数据本体
//  - 收到事件 → 按 entity 精准刷新受影响的模块（不是全量重载）
//  - 兜底：EventSource 断线自动重连；回前台（visibilitychange/pageshow）
//    主动比对 /api/sync/version，落后就补齐 —— iPhone 后台休眠漏事件也能追上
const syncState = {
  version: null,   // 本地已知的 dataVersion
  seq: 0,          // 本地已知事件序号
  es: null,        // EventSource 实例
  retry: 0,        // 重连退避计数
  timer: null,
  lastPull: 0,
  connected: false,
};

// entity → 需要刷新的动作。只有当前正在看的视图才真正重载，
// 避免后台标签页做无谓请求。返回 true 表示已处理。
function syncApplyEvent(evt) {
  const t = evt.entity || (evt.type || '').split('.')[0];
  const active = currentView;
  const reload = (fn) => { try { fn(); } catch (e) { console.warn('[sync] reload failed', e); } };

  switch (t) {
    case 'task':
      // 待办出现在：今日工作 / 项目与待办 / 概览 / 会议（行动项反写）四个视图
      if (['today', 'projects', 'summary', 'meetings'].indexOf(active) >= 0) reload(loadTasks);
      break;
    case 'metric':
      if (['metrics', 'inventory', 'summary'].indexOf(active) >= 0) reload(loadMetrics);
      break;
    case 'milestone':
      if (['summary', 'projects'].indexOf(active) >= 0) reload(loadSummary);
      break;
    case 'meeting':
      if (['meetings', 'meeting-notes', 'projects'].indexOf(active) >= 0) reload(loadMeetings);
      break;
    case 'asean':
      // 东盟区块挂在项目与待办页内
      if (['projects', 'today'].indexOf(active) >= 0) reload(() => { loadTasks(); });
      break;
    case 'calendar':
      if (['meetings', 'today'].indexOf(active) >= 0) reload(loadMeetings);
      break;
    case 'intake':
      if (['today', 'projects'].indexOf(active) >= 0) reload(loadTasks);
      break;
    default:
      // 未知实体：保守处理，刷新当前视图
      reload(() => switchView(active));
      break;
  }
  syncToast(evt);
}

// 轻量提示条：让用户知道「另一台设备改了什么」
let _syncToastTimer = null;
function syncToast(evt) {
  const el = $('#sync-toast');
  if (!el) return;
  const label = { task: '待办', metric: '经营数据', milestone: '里程碑', meeting: '会议',
    asean: '东盟项目', calendar: '日程', intake: '智能投放' }[evt.entity] || '数据';
  const op = (evt.extra && evt.extra.op) || '';
  const opText = op === 'create' ? '新增' : (op === 'delete' ? '删除' : '更新');
  el.textContent = '另一台设备' + opText + '了' + label + '，已自动同步';
  el.hidden = false;
  clearTimeout(_syncToastTimer);
  _syncToastTimer = setTimeout(() => { el.hidden = true; }, 2600);
}

// 处理一条事件：去重（seq）→ 更新本地版本 → 精准刷新
function syncHandleEvent(evt) {
  if (!evt) return;
  if (typeof evt.seq === 'number') {
    if (evt.seq <= syncState.seq) return; // 已处理过
    syncState.seq = evt.seq;
  }
  if (typeof evt.dataVersion === 'number') syncState.version = evt.dataVersion;
  // 本机刚刚自己写入的 → 不重复刷新、不弹提示（前端已在写成功后自行重载）
  if (isSelfWrite(evt)) return;
  syncApplyEvent(evt);
}

// 兜底：主动拉版本号。since=本地 seq 时顺带补齐断线期间漏掉的事件
async function syncPullVersion(quiet) {
  if (STATIC_MODE) return;
  const now = Date.now();
  if (quiet && now - syncState.lastPull < 1500) return; // 防抖
  syncState.lastPull = now;
  try {
    const r = await api('/api/sync/version?since=' + syncState.seq);
    if (!r) return;
    const serverV = r.dataVersion;
    if (typeof serverV === 'number') {
      const behind = syncState.version !== null && serverV !== syncState.version;
      const missed = Array.isArray(r.changes) ? r.changes : [];
      if (missed.length) {
        // 断线期间漏掉的事件，逐条补应用
        for (const e of missed) syncHandleEvent(e);
      }
      if (behind && !missed.length) {
        // 版本不一致但没有明细（例如别的设备触发了非 SSE 写入）：刷新当前视图
        syncState.version = serverV;
        syncApplyEvent({ entity: null, type: 'unknown.updated', seq: r.seq });
      }
      syncState.version = serverV;
      if (typeof r.seq === 'number') syncState.seq = Math.max(syncState.seq, r.seq);
    }
  } catch (e) {
    if (!quiet) console.warn('[sync] version pull failed', e && e.message);
  }
}

// 建立 SSE 连接（含指数退避重连）
function syncConnect() {
  if (STATIC_MODE) return;
  if (syncState.es) { try { syncState.es.close(); } catch (e) {} syncState.es = null; }

  let key = '';
  try { key = localStorage.getItem('wb_key') || ''; } catch (e) {}
  // EventSource 不能自定义 header，密钥走 query（后端对本接口做同样校验）
  // cid = 本设备标识：后端广播时透传，用于精确识别「这条是不是我自己改的」
  const url = '/api/sync/stream?key=' + encodeURIComponent(key) + '&cid=' + encodeURIComponent(myClientId || '');

  let es;
  try { es = new EventSource(url); } catch (e) { return; }
  syncState.es = es;

  es.addEventListener('hello', (m) => {
    syncState.connected = true;
    syncState.retry = 0;
    try {
      const d = JSON.parse(m.data);
      if (typeof d.dataVersion === 'number') {
        // 首帧就发现自己落后 → 立即补齐
        if (syncState.version !== null && d.dataVersion !== syncState.version) syncPullVersion(true);
        syncState.version = d.dataVersion;
      }
      if (typeof d.seq === 'number') syncState.seq = Math.max(syncState.seq, d.seq);
    } catch (e) {}
  });

  // 业务事件：都是 <entity>.updated 形式
  const onBiz = (m) => { try { syncHandleEvent(JSON.parse(m.data)); } catch (e) {} };
  ['task', 'metric', 'milestone', 'meeting', 'asean', 'calendar', 'intake'].forEach((t) => {
    es.addEventListener(t + '.updated', onBiz);
  });
  es.onmessage = onBiz; // 兜底：无 event 名的消息

  es.onerror = () => {
    syncState.connected = false;
    try { es.close(); } catch (e) {}
    syncState.es = null;
    // 指数退避：1s,2s,4s,8s… 上限 30s
    const wait = Math.min(1000 * Math.pow(2, syncState.retry++), 30000);
    clearTimeout(syncState.timer);
    syncState.timer = setTimeout(() => {
      syncPullVersion(true).finally(syncConnect);
    }, wait);
  };
}

// 回前台 / 网络恢复：立即校验版本，追上后台期间漏掉的变更
function syncOnForeground() {
  if (STATIC_MODE) return;
  if (document.visibilityState && document.visibilityState !== 'visible') return;
  syncPullVersion(false);
  // SSE 可能已被系统回收，确认连接还在
  if (!syncState.es || !syncState.connected) syncConnect();
}

let myClientId = null;
// 本设备标识：尽早生成，保证任何写操作都能带上（api() 会加 X-Client-Id）
try {
  myClientId = sessionStorage.getItem('wb_cid') || '';
  if (!myClientId) {
    myClientId = 'c' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    sessionStorage.setItem('wb_cid', myClientId);
  }
} catch (e) {
  myClientId = 'c' + Math.random().toString(36).slice(2, 10);
}
// 本机刚刚发起的写操作：仅在【后端未透传 clientId】时才退化为时间窗抑制。
// 注意：窗口不能太长。Notion 写入约 3-5 秒，若窗口过长会把「另一台设备」
// 在窗口内到达的事件误判成本机自触发，导致反向同步丢失（2026-09-22 实测踩坑）。
const selfWrites = { until: 0, entity: null };
function markSelfWrite(entity) {
  selfWrites.entity = entity;
  selfWrites.until = Date.now() + 1500;
}
// 判断事件是否来自本机：优先用后端透传的 clientId（精确）；
// 仅当事件没带 clientId 时才用「同 entity + 短时间窗」兜底
function isSelfWrite(evt) {
  const evtCid = evt && evt.clientId;
  if (evtCid) return !!(myClientId && evtCid === myClientId);
  const entity = evt && evt.entity;
  return selfWrites.entity === entity && Date.now() < selfWrites.until;
}

function initRealtimeSync() {
  if (STATIC_MODE) return;
  syncConnect();
  // 回前台 / 网络恢复 → 立即校验版本（手机锁屏后必追上）
  document.addEventListener('visibilitychange', syncOnForeground);
  window.addEventListener('pageshow', syncOnForeground);
  window.addEventListener('online', syncOnForeground);
  window.addEventListener('focus', () => syncPullVersion(true));
  // 低频兜底心跳：SSE 全挂时也不至于长期不同步
  setInterval(() => { if (!syncState.connected) syncPullVersion(true); }, 20000);
}


// ===== 改完自动推：数据变更后触发手机端发布 =====
// 后端限流（10 分钟一次），前端静默调用即可，不打扰用户。
let _publishQueued = false;
function triggerPublish() {
  if (STATIC_MODE) return; // 静态端只读，不触发
  if (_publishQueued) return;
  _publishQueued = true;
  // 稍等几百毫秒，等当前写操作的数据真正落库后再推
  setTimeout(async () => {
    try { await api('/api/publish', { method: 'POST', body: {} }); }
    catch (e) { /* 静默失败：发布是尽力而为，不影响主流程 */ }
    finally { _publishQueued = false; }
  }, 800);
}

function fmtDate(d) { return d ? d.slice(0, 10) : ''; }
// ISO 时间戳 → "M/D HH:MM"（会议纪要透视的更新时间用）
function fmtTime(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  if (isNaN(d.getTime())) return '';
  const p = n => String(n).padStart(2, '0');
  return (d.getMonth() + 1) + '/' + d.getDate() + ' ' + p(d.getHours()) + ':' + p(d.getMinutes());
}
const ESC_MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ESC_MAP[c]); }
// 纯文本：先转义，再把 http(s) 地址变成可点链接（用于 AI 生成的摘要/草稿，可能与链接同段）
function escRich(s) {
  return esc(s).replace(/(https?:\/\/[^\s<>"']+)/g, '<a class="text-link" href="$1" target="_blank" rel="noopener">$1</a>');
}
function fmtNum(n) { return n == null ? '-' : Number(n).toLocaleString('zh-CN'); }
// 坐标轴数字：万级省略小数，千级用 k
function fmtAxis(v) {
  const a = Math.abs(v);
  if (a >= 10000) return (v / 10000).toFixed(a >= 100000 ? 0 : 1) + '万';
  if (a >= 1000) return (v / 1000).toFixed(a >= 10000 ? 0 : 1) + 'k';
  if (a >= 10) return Math.round(v).toString();
  return v.toFixed(a >= 1 ? 1 : 2);
}

// 智能投放输入框自适应高度：4 行（默认）→ 24 行（封顶，超过滚动条）
function autoresizeIntake(el) {
  el.style.height = 'auto';
  const lineH = 22;
  const minH = lineH * 4 + 14;
  const maxH = lineH * 24 + 14;
  const want = Math.min(Math.max(el.scrollHeight, minH), maxH);
  el.style.height = want + 'px';
}

// ===== 连接状态 =====
async function checkHealth() {
  const el = $('#conn-status');
  try {
    const h = await api('/api/health');
    if (h.tokenConfigured) {
      el.className = 'conn-status ok';
      el.querySelector('.conn-text').textContent = '数据源正常';
    } else {
      el.className = 'conn-status err';
      el.querySelector('.conn-text').textContent = '数据源未配置';
    }
  } catch (e) {
    el.className = 'conn-status err';
    el.querySelector('.conn-text').textContent = '连接失败';
  }
}

// ===== 导航 =====
function switchView(view, region) {
  // 自动锁：从 Personal Space 切到任何其它视图 -> 立即锁定并折叠（隐私）
  if (view !== 'personal' && currentView === 'personal') lockPersonalNow();
  currentView = view;
  currentRegion = region || null;
  document.querySelectorAll('.nav-item').forEach((n) => {
    const r = n.dataset.region;
    const v = n.dataset.view;
    n.classList.toggle('active', v === view && (region ? r === region : !r));
  });
  $('#view-title').textContent = region ? VIEW_TITLES[view] + ' · ' + region : VIEW_TITLES[view];
  $('#breadcrumbs').textContent = region ? VIEW_BREADCRUMBS[view] + ' / ' + region : VIEW_BREADCRUMBS[view];
  document.querySelectorAll('.view').forEach((v) => (v.hidden = true));
  $('#view-' + view).hidden = false;

  if (view === 'today') loadToday();
  if (view === 'projects') loadTasks();
  if (view === 'inventory') loadInventory();
  if (view === 'summary') loadSummary();
  if (view === 'ai') loadAiView();
  if (view === 'mail') loadMailView();
  if (view === 'regional') loadRegional(region || '东盟');
  if (view === 'meetings') loadMeetings();
  if (view === 'meeting-notes') loadMeetingNotes();
  if (view === 'product-initiatives') { loadLineup(); loadProductInitiatives(); }
  if (view === 'insights') loadInsights();
  if (view === 'market') loadMarket(currentRegion || null);
  if (view === 'sync') loadSync();
  if (view === 'skills') loadSkills();
  if (view === 'personal') enterPersonal(currentPersonal || 'finance');
  updateNewButton();
}
document.querySelectorAll('.nav-item').forEach((n) => {
  n.addEventListener('click', () => {
    if (n.dataset.view === 'personal') { enterPersonal(n.dataset.section); return; }
    switchView(n.dataset.view, n.dataset.region || null);
  });
});

function updateNewButton() {
  const btn = $('#btn-new');
  if (currentView === 'skills') { btn.textContent = '+ 新建 Skill'; }
  else if (currentView === 'metrics' || currentView === 'inventory') { btn.textContent = '+ 新建数据'; }
  else { btn.textContent = '+ 新增工作'; }
}

function newWork() {
  if (currentView === 'skills') { openSkillForm(); return; }
  if (currentView === 'metrics' || currentView === 'inventory') { openCreateMetrics(); return; }
  openCreateTasks();
}

// ===== 筛选器 =====
function buildFilters(view) {
  const conf = FIELDS[view];
  const box = $('#filters-' + view);
  if (!box) return;
  box.innerHTML = '';
  conf.filters.forEach((f) => {
    const sel = document.createElement('select');
    sel.className = 'filter-select';
    sel.dataset.key = f.key;
    sel.innerHTML = '<option value="">' + f.label + '（全部）</option>' + f.options.map((o) => '<option>' + o + '</option>').join('');
    sel.addEventListener('change', () => {
      if (view === 'tasks') loadTasks();
      if (view === 'metrics' || view === 'inventory') loadMetrics();
    });
    box.appendChild(sel);
  });
}

// ===== 项目与待办 =====
async function loadTasks() {
  const qs = new URLSearchParams();
  document.querySelectorAll('#filters-tasks select').forEach((s) => { if (s.value) qs.set(s.dataset.key, s.value); });
  try {
    const [d, m] = await Promise.all([
      api('/api/tasks' + (qs.toString() ? '?' + qs : '')),
      api('/api/milestones').catch(() => ({ items: [] })),
    ]);
    cache.tasks = d.items;
    cache.milestones = m.items;
    renderTaskCards(d.items, m.items);
    $('#badge-tasks').textContent = d.total || '';
  } catch (e) { showError('tasks', e.message); }
}

// ===== 项目与待办：上「全球」按状态 + 下「区域」按区两块（待办清单 + 项目节点） =====
const GLOBAL_GROUPS = [
  { key: '进行中', label: '进行中', ico: '◐', color: '#3f5ee8' },
  { key: '等待他人', label: '等待他人', ico: '◔', color: '#d97706' },
  { key: '已完成', label: '已完成', ico: '✓', color: '#18a058' },
];

const REGION_LIST = [
  { key: '东盟', label: '东盟', ico: '🌊', color: '#0ea5e9' },
  { key: '中东非', label: '中东非', ico: '🌍', color: '#d97706' },
  { key: '印度', label: '印度', ico: '🇮🇳', color: '#8b5cf6' },
];

const REGION_COLOR = { '东盟': '#0ea5e9', '中东非': '#d97706', '印度': '#8b5cf6', '全球': '#64748b' };

const MILESTONE_STATUS_COLOR = {
  '立项中': '#b7791f',
  '进行中': '#3f5ee8',
  '节点达成': '#18a058',
  '交付完成': '#18a058',
  '搁置': '#6b7280',
};

function priColor(p) {
  p = (p || '').trim();
  if (p.startsWith('P0')) return '#d5443c';
  if (p.startsWith('P1')) return '#d97706';
  if (p.startsWith('P2')) return '#3f5ee8';
  return '#6b7280';
}

function regionColor(r) {
  return REGION_COLOR[r] || '#64748b';
}

function renderTaskCards(rows, milestones) {
  const globalGrid = $('#task-global-grid');
  const regionList = $('#task-region-list');
  const empty = $('#empty-tasks');
  const stats = $('#task-stats');
  rows = rows || [];
  milestones = milestones || [];

  // 统计：仅待办数据
  const total = rows.length;
  const done = rows.filter(r => (r['状态'] || '') === '已完成').length;
  const open = total - done;
  stats.innerHTML =
    '<span class="task-stat"><b>' + total + '</b> 全部</span>' +
    '<span class="task-stat"><b>' + open + '</b> 未完成</span>' +
    '<span class="task-stat"><b>' + done + '</b> 已完成</span>' +
    '<span class="task-stat" style="color:var(--text-sub)">点击圆圈即可勾选完成 / 撤销，自动保存</span>';

  if (!total && !milestones.length) { if (globalGrid) globalGrid.innerHTML = ''; if (regionList) regionList.innerHTML = ''; empty.hidden = false; return; }
  empty.hidden = true;

  // 上：全球待办（按状态 3 卡，只含「区域=全球」的项）
  const globalRows = rows.filter(r => (r['区域'] || '') === '全球' && (r['状态'] || '') !== '待开始');
  if (globalGrid) globalGrid.innerHTML = renderGlobalCards(globalRows);

  // 下：区域列表（每区两块：待办清单 + 项目节点）
  if (regionList) regionList.innerHTML = renderRegionList(rows, milestones);

  // 下下：东盟大区项目进度（按国家 → 紧急程度分层）
  loadAseanInline();
}

function renderGlobalCards(rows) {
  if (!rows.length) return '<div class="task-empty-region">暂无「全球」运营中心待办（更新Q3预测、等待领导确认等归这里）</div>';
  return GLOBAL_GROUPS.map(g => {
    const items = rows.filter(r => (r['状态'] || '') === g.key);
    return '<div class="task-card" data-group="' + g.key + '">' +
      '<div class="task-card-head" style="border-top:3px solid ' + g.color + '">' +
        '<span class="task-card-ico" style="color:' + g.color + '">' + g.ico + '</span>' +
        '<h3>' + g.label + '</h3>' +
        '<span class="intel-count">' + items.length + '</span>' +
      '</div>' +
      '<div class="task-card-body">' +
        (items.length ? items.map(r => renderTaskItem(r, g, '状态')).join('') : '<div class="task-none">空</div>') +
      '</div>' +
    '</div>';
  }).join('');
}

function renderRegionList(rows, milestones) {
  return REGION_LIST.map(rg => {
    const regionRows = rows.filter(r => (r['区域'] || '') === rg.key);
    const regionMilestones = milestones.filter(m => (m['区域'] || '') === rg.key);
    const open = regionRows.filter(r => (r['状态'] || '') !== '已完成');
    const done = regionRows.filter(r => (r['状态'] || '') === '已完成');
    return '<div class="task-region-block" data-region="' + rg.key + '">' +
      '<div class="task-region-head" style="border-left:4px solid ' + rg.color + '">' +
        '<span class="task-region-ico" style="color:' + rg.color + '">' + rg.ico + '</span>' +
        '<h2>' + rg.label + '</h2>' +
        '<span class="task-region-meta">' + regionRows.length + ' 待办 · ' + regionMilestones.length + ' 节点</span>' +
      '</div>' +
      '<div class="task-region-body">' +
        '<div class="task-sub-block">' +
          '<div class="task-sub-head">📋 待办清单</div>' +
          renderRegionTodoSubBlock(open, done) +
        '</div>' +
        '<div class="task-sub-block">' +
          '<div class="task-sub-head">🪜 项目节点</div>' +
          renderMilestoneSubBlock(regionMilestones) +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');
}

function renderRegionTodoSubBlock(openRows, doneRows) {
  const g1 = { key: 'open', label: '未完成', ico: '◐', color: '#3f5ee8' };
  const g2 = { key: 'done', label: '已完成', ico: '✓', color: '#18a058' };
  if (!openRows.length && !doneRows.length) return '<div class="task-empty">本区域暂无待办</div>';
  return renderRegionStatusCards([
    { g: g1, rows: openRows },
    { g: g2, rows: doneRows },
  ]);
}

function renderRegionStatusCards(list) {
  return '<div class="task-status-cards">' + list.map(({ g, rows }) => {
    return '<div class="task-mini-card">' +
      '<div class="task-mini-head" style="border-left:3px solid ' + g.color + '">' +
        '<span class="task-card-ico" style="color:' + g.color + '">' + g.ico + '</span>' +
        '<span class="task-mini-label">' + g.label + '</span>' +
        '<span class="intel-count">' + rows.length + '</span>' +
      '</div>' +
      '<div class="task-mini-body">' +
        (rows.length ? rows.map(r => renderTaskItem(r, g, '区域')).join('') : '<div class="task-none">空</div>') +
      '</div>' +
    '</div>';
  }).join('') + '</div>';
}

function renderMilestoneSubBlock(milestones) {
  if (!milestones.length) return '<div class="task-empty">本区域暂无项目节点</div>';
  // 按状态分组
  const STATUS_ORDER = ['进行中', '立项中', '节点达成', '交付完成', '搁置'];
  return milestones
    .slice()
    .sort((a, b) => STATUS_ORDER.indexOf(a['状态'] || '进行中') - STATUS_ORDER.indexOf(b['状态'] || '进行中'))
    .map(m => renderMilestoneItem(m))
    .join('');
}

function renderMilestoneItem(m) {
  const title = m['节点名称'] || '(未命名)';
  const status = m['状态'] || '进行中';
  const statusColor = MILESTONE_STATUS_COLOR[status] || '#6b7280';
  const pri = m['优先级'] || '';
  const owner = m['负责人'] || '';
  const due = m['下次关键节点日'] || m['交付截止日'] || '';
  const progress = m['进展描述'] || '';
  const blocker = m['项目卡点'] || '';
  const chips = [
    pri ? '<span class="task-chip" style="color:' + priColor(pri) + ';border-color:' + priColor(pri) + '">' + esc(pri) + '</span>' : '',
    owner ? '<span class="task-chip">👤 ' + esc(owner) + '</span>' : '',
    due ? '<span class="task-chip" style="color:#3f5ee8;border-color:#3f5ee8">📅 ' + esc(fmtDate(due)) + '</span>' : '',
  ].join('');
  const progressHtml = progress ? '<div class="task-progress-text">' + esc(progress) + '</div>' : '';
  const blockerHtml = blocker ? '<div class="task-blocker">⚠️ ' + esc(blocker) + '</div>' : '';
  return '<div class="milestone-item" style="border-left:3px solid ' + statusColor + '">' +
    '<div class="milestone-head">' +
      '<span class="milestone-status" style="background:' + statusColor + '">' + esc(status) + '</span>' +
      '<div class="milestone-title">' + esc(title) + '</div>' +
      '<button class="task-edit" title="编辑" onclick="event.stopPropagation();openEditMilestone(\'' + m.id + '\')">✎</button>' +
    '</div>' +
    (chips || progressHtml || blockerHtml ? '<div class="task-meta">' + chips + '</div>' : '') +
    progressHtml + blockerHtml +
  '</div>';
}

function renderTaskItem(r, g, dim) {
  const isDone = (r['状态'] || '') === '已完成';
  const title = r['待办事项'] || '(未命名)';
  const pri = r['优先级'] || '';
  const region = r['区域'] || '';
  const due = r['截止日期'];
  const link = r['来源链接'] || r['原邮件'];   // 会议来源的待办把原邮件链接也当入口
  const note = r['备注'] || '';
  const isMeeting = (r['类型'] || '') === '会议' || /\[MT::/.test(note);
  // 会议来源：从备注里解析责任人 / 来源会议名
  const ownerM = note.match(/责任人\s*([^\n]+)/);
  const meetM = note.match(/来源：会议纪要《([^》]*)》/);

  const priChip = pri ? '<span class="task-chip" style="color:' + priColor(pri) + ';border-color:' + priColor(pri) + '">' + esc(pri) + '</span>' : '';
  const regionChip = region ? '<span class="task-chip" style="color:' + regionColor(region) + ';border-color:' + regionColor(region) + '">' + esc(region) + '</span>' : '';
  const meetChip = isMeeting ? '<span class="task-chip task-chip-meet" title="' + esc(meetM ? '来自《' + meetM[1] + '》' : '来自会议纪要') + '">会议</span>' : '';
  const ownerChip = (isMeeting && ownerM) ? '<span class="task-chip">👤 ' + esc(ownerM[1].trim()) + '</span>' : '';
  // 状态维度卡片里显示区域；区域维度卡片里显示状态（避免重复展示本维度）
  const meta = (dim === '区域' ? priChip : priChip + regionChip) + meetChip + ownerChip;
  const dueHtml = due ? '<span class="task-due">' + (isOverdue(due) && !isDone ? '⚠ ' : '📅 ') + fmtDate(due) + '</span>' : '';
  const linkHtml = link ? '<a class="link" href="' + esc(link) + '" target="_blank" onclick="event.stopPropagation()">' + (isMeeting ? '原邮件 ↗' : '打开') + '</a>' : '';
  const editHtml = '<button class="task-edit" title="编辑" onclick="event.stopPropagation();openEdit(\'tasks\',\'' + r.id + '\')">✎</button>';
  return '<div class="task-item' + (isDone ? ' is-done' : '') + '" onclick="toggleTaskDone(\'' + r.id + '\',' + !isDone + ')">' +
    '<span class="task-check" style="' + (isDone ? 'background:' + g.color + ';border-color:' + g.color + ';color:#fff' : '') + '">' + (isDone ? '✓' : '') + '</span>' +
    '<div class="task-item-main">' +
      '<div class="task-title">' + esc(title) + '</div>' +
      '<div class="task-meta">' + meta + dueHtml + linkHtml + '</div>' +
    '</div>' +
    editHtml +
  '</div>';
}

function isOverdue(d) {
  if (!d) return false;
  const t = new Date(d);
  if (isNaN(t)) return false;
  const today = new Date(); today.setHours(0, 0, 0, 0);
  return t < today;
}

async function toggleTaskDone(id, done) {
  const body = { '状态': done ? '已完成' : '进行中' };
  try {
    markSelfWrite('task');
    await api('/api/tasks/' + id, { method: 'PATCH', body });
    await loadTasks();
    triggerPublish();
  } catch (e) { alert('操作失败：' + e.message); }
}

// ===== 项目待办：智能拆解（贴一段话 → 自动拆成多条待办 → 写 Notion） =====
let _parseItems = [];

function openTaskParse() {
  $('#task-parse-text').value = '';
  $('#task-parse-preview').innerHTML = '';
  $('#task-parse-msg').textContent = '';
  _parseItems = [];
  $('#task-parse-modal').hidden = false;
  setTimeout(() => $('#task-parse-text').focus(), 50);
}
function closeTaskParse() { $('#task-parse-modal').hidden = true; }

// 把一段话拆成多条待办草稿
function parseTaskText(raw) {
  const s = (raw || '').trim();
  if (!s) return [];
  // 按 换行 / 分号 / 中文句号。 分割
  const parts = s.split(/[\n;；]+|(?<=[。！？])\s*/).map(x => x.trim()).filter(x => x);
  // 单段也算一条（test 等极短输入也接受）
  const segs = parts.length ? parts : [s];

  return segs.map(seg => {
    if (!seg) return null;
    let title = seg;
    let priority = '';
    let region = '';
    let type = '';
    let due = '';
    let time = '';
    let targetTypes = []; // 尾标签：「待办+日历」→ ['待办','日历']

    // === 尾标签抽取：「待办+日历」「邮件,市场」等 ===
    const tailMatch = seg.match(/[，,。；;\s]+(待办|日历|会议|节点|邮件情报?|邮件|市场分析?|市场|项目|资料|风险|跟进|短信|提醒)\s*([+＋、，,/／\s]+(待办|日历|会议|节点|邮件情报?|邮件|市场分析?|市场|项目|资料|风险|跟进|短信|提醒))*\s*$/);
    if (tailMatch) {
      const tokens = (tailMatch[0].match(/待办|日历|会议|节点|邮件情报?|邮件|市场分析?|市场|项目|资料|风险|跟进|短信|提醒/g) || []);
      targetTypes = Array.from(new Set(tokens.map(t => {
        if (t === '邮件') return '邮件情报';
        if (t === '市场') return '市场分析';
        return t;
      })));
      seg = seg.slice(0, tailMatch.index).trim();
    }

    // === 「提醒我/麻烦/记一下」语气助词前缀剥除 ===
    seg = seg.replace(/^(提醒我|麻烦|麻烦你|劳驾|请帮我|帮我|记一下|记录一下|稍后提醒|提醒一下|提醒)/, '').trim();

    // 区域
    if (/中东非|非洲|中东北非/.test(seg)) region = '中东非';
    else if (/东盟|东南亚/.test(seg)) region = '东盟';
    else if (/印度/.test(seg)) region = '印度';
    else if (/全球|总部|海外/.test(seg)) region = '全球';

    // 优先级（互斥，避免 test 误判）
    if (/\bP0\b|紧急|特急|加急|urgent|立刻|马上|立即/.test(seg)) priority = 'P0 紧急';
    else if (/\bP1\b|重要|关键|重点/.test(seg)) priority = 'P1 重要';
    else if (/\bP2\b|常规|一般/.test(seg)) priority = 'P2 常规';
    else if (/\bP3\b|低优先|不急/.test(seg)) priority = 'P3 低';

    // 类型（更严格的会议关键词，避免 test 误中）
    if (/会议|碰头|评审|对齐|周会|月会|meeting|stand[\s-]?up/i.test(seg)) type = '会议';
    else if (/沟通|约时间|约个时间|约定时间|面谈|会谈|约访|约见|约一下/.test(seg)) type = '沟通';
    else if (/跟进|催|催办|盯|落实/.test(seg)) type = '跟进';
    else if (/风险|问题|异常|隐患|合规/.test(seg)) type = '风险';
    else if (/数据|口径|资料|文档|梳理/.test(seg)) type = '资料';
    else if (/ppt|演示|汇报|报告|领导版|材料|pptx/i.test(seg)) type = '项目';

    // 截止日期（先粗排，然后根据时间词修正）
    due = parseDueDate(seg);

    // 时间（修复 2026-09-14：「下午2点」→ 14:00，不是02:00；「明天下2点」也支持）
    // 「明天下2点」=「明天下午2点」= 14:00；但不能误改已存在的「下午」
    // 先把整段「明天下+数字」统一替成「明天下午+数字」，再把独立「下+数字」也替（不会冲突，因为前一步已经把「明天下」吃完了）
    const segForTime = seg
      .replace(/明天下(\d{1,2})/g, '明天下午$1')
      .replace(/(^|[^午])下(\d{1,2})/g, '$1下午$2');
    const ampmTime = segForTime.match(/(上午|早上|早晨|下午|傍晚|晚上|夜里|晚)\s*(\d{1,2})\s*[:点]\s*(\d{1,2})?/);
    if (ampmTime) {
      const period = ampmTime[1];
      let hh = parseInt(ampmTime[2], 10);
      const mm = ampmTime[3] ? parseInt(ampmTime[3], 10) : 0;
      // 上下午/晚上换算
      if (/下午|傍晚/.test(period)) {
        if (hh < 12) hh += 12;
      } else if (/晚上|夜里|晚/.test(period)) {
        if (hh < 12) hh += 12; // 晚上6点以下也合理
        if (hh === 12) hh = 12; // 保持 12=中午
      }
      time = String(hh).padStart(2, '0') + ':' + String(mm).padStart(2, '0');
    } else {
      // 仅时间段词
      if (/上午|早上|早晨/.test(seg)) time = '上午';
      else if (/下午|傍晚/.test(seg)) time = '下午';
      else if (/晚上|夜里|晚/.test(seg)) time = '晚上';
    }

    // 「下午/上午」单独出现但无日期 → 默认今天
    if (time && /^(上午|下午|晚上)$/.test(time) && !due) {
      due = new Date().toISOString().slice(0, 10);
    }

    // === 智能识别：涉及「沟通/碰头/约定时间」+ 有时间词 → 自动加「日历」（默认落待办+日历）===
    const meetVerb = /(沟通|碰头|碰一下|约定时间|约个时间|约一下|约个|约时间|约会议|开会|开会聊|面谈|会谈|沟通会|约访|约见|聊一下)/;
    if (!targetTypes.length && meetVerb.test(seg)) {
      // 有日期 或 有具体时间/时间词 → 同时落日历（沟通/约时间/碰头 这类动词默认就要进日历）
      if (due || time) {
        targetTypes = ['待办', '日历'];
      }
    }

    // 清洗标题：先整段剥日期（避免"周"/"三"被独立撕裂），再剥优先级/动作词
    let cleaned = stripDatePhrases(seg);
    // 剥 "上午N点"/"下午N点"/"晚上N点" 一体化
    cleaned = cleaned.replace(/(上午|早上|早晨|下午|傍晚|晚上|夜里|晚)\s*\d{1,2}\s*[:点]\s*\d{1,2}?/g, '');
    cleaned = cleaned.replace(/(上午|早上|早晨|下午|傍晚|晚上|夜里)/g, '');
    cleaned = cleaned
      .replace(/P[0-3]\s*(紧急|重要|常规|低)?/gi, '')
      .replace(/紧急|特急|加急|重要|关键|重点|常规|一般|低优先|不急/g, '')
      .replace(/中东非|中东北非|东盟|东南亚|印度|全球|海外/g, '')
      // 「前」「之内」「要」是日期修饰词，剥除（避免「下周三前出PPT」剩「前出PPT」）
      .replace(/(前|之内|要)+(?=(出|锁定|落地|交付|提交|确认|盘点|梳理|跟进|对齐|沟通|做|写|弄|发|完成))/g, '')
      .replace(/[:：,，。；;\s]+$/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    // 兜底：清洗过度（剩 < 2 字）就回退到只剥明示标签的版本
    if (!cleaned || cleaned.length < 2) {
      cleaned = seg
        .replace(/P[0-3]\s*(紧急|重要|常规|低)?/gi, '')
        .replace(/中东非|中东北非|东盟|东南亚|印度|全球|海外/g, '')
        .replace(/[:：,，。；;]+$/g, '')
        .replace(/\s+/g, ' ')
        .trim();
    }
    if (!cleaned) cleaned = seg.trim();
    title = cleaned;

    return { title, priority, region, type, due, time, targetTypes, checked: true };
  }).filter(Boolean);
}

// 一次剥除整段日期/时间表达，避免单独剥"周"/"三"导致标题撕裂（修复 2026-09-14）
function stripDatePhrases(seg) {
  let s = seg;
  s = s.replace(/(?:下|本)?周[一二三四五六日天]/g, '');
  s = s.replace(/(?:今天|今晚|明天|明早|后天|大后天|早上|上午|早晨|下午|傍晚|晚上|夜里|晚)(?![\u4e00-\u9fa5])/g, '');
  s = s.replace(/(\d{1,2})\s*月\s*\d{1,2}\s*[日号]?/g, '');
  s = s.replace(/(\d{1,2})[\/\-](\d{1,2})(?!\d)/g, '');
  s = s.replace(/(\d{1,2})\s*[:点]\s*(\d{1,2})/g, '');
  return s;
}


function parseDueDate(seg) {
  const today = new Date();
  const mk = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  const add = n => { const d = new Date(today); d.setDate(d.getDate() + n); return d; };
  const W = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 日: 0, 天: 0 };

  if (/今天|今晚/.test(seg)) return mk(add(0));
  if (/明天|明早/.test(seg)) return mk(add(1));
  if (/后天/.test(seg)) return mk(add(2));
  if (/大后天/.test(seg)) return mk(add(3));

  let m = seg.match(/(?:下|本)?周([一二三四五六日天])/);
  if (m) {
    const target = W[m[1]];
    let delta = (target - today.getDay() + 7) % 7;
    if (/下周/.test(seg) && delta === 0) delta = 7;
    return mk(add(delta));
  }

  m = seg.match(/(\d{1,2})\s*月\s*(\d{1,2})[日号]?/);
  if (m) {
    const d = new Date(today.getFullYear(), parseInt(m[1], 10) - 1, parseInt(m[2], 10));
    return isNaN(d.getTime()) ? '' : mk(d);
  }
  m = seg.match(/(\d{1,2})[\/\-](\d{1,2})/);
  if (m) {
    const d = new Date(today.getFullYear(), parseInt(m[1], 10) - 1, parseInt(m[2], 10));
    return isNaN(d.getTime()) ? '' : mk(d);
  }
  return '';
}

function renderTaskParsePreview() {
  const box = $('#task-parse-preview');
  if (!box) return;
  if (!_parseItems.length) { box.innerHTML = ''; return; }
  box.innerHTML = '<div class="task-parse-head">已拆解 ' + _parseItems.length + ' 条（点右侧勾选，不想要的取消）</div>' +
    _parseItems.map((it, i) => {
      const chips = [
        it.priority ? '<span class="task-chip" style="color:' + priColor(it.priority) + ';border-color:' + priColor(it.priority) + '">' + esc(it.priority) + '</span>' : '',
        it.region ? '<span class="task-chip" style="color:' + regionColor(it.region) + ';border-color:' + regionColor(it.region) + '">' + esc(it.region) + '</span>' : '',
        it.type ? '<span class="task-chip">' + esc(it.type) + '</span>' : '',
        it.due ? '<span class="task-chip">📅 ' + esc(it.due) + '</span>' : '',
      ].join('');
      return '<div class="task-parse-item' + (it.checked ? '' : ' is-off') + '">' +
        '<div class="task-parse-main"><div class="task-title">' + esc(it.title) + '</div>' +
        '<div class="task-meta">' + (chips || '<span class="task-chip">未识别附加信息</span>') + '</div></div>' +
        '<label class="task-parse-toggle" onclick="event.stopPropagation()"><input type="checkbox" ' + (it.checked ? 'checked' : '') + ' onchange="_parseItems[' + i + '].checked=this.checked;this.closest(\'.task-parse-item\').classList.toggle(\'is-off\',!this.checked)">写</label>' +
      '</div>';
    }).join('');
}

function applyTaskParse() {
  _parseItems = parseTaskText($('#task-parse-text').value);
  renderTaskParsePreview();
}

async function submitTaskParse() {
  const toWrite = _parseItems.filter(it => it.checked);
  if (!toWrite.length) { $('#task-parse-msg').textContent = '没有勾选任何待办'; return; }
  const btn = $('#task-parse-submit');
  const msg = $('#task-parse-msg');
  btn.disabled = true;
  msg.textContent = '写入中 0/' + toWrite.length + '…';
  let ok = 0, fail = 0;
  for (let i = 0; i < toWrite.length; i++) {
    const it = toWrite[i];
    const payload = { '待办事项': it.title };
    if (it.priority) payload['优先级'] = it.priority;
    if (it.region) payload['区域'] = it.region;
    if (it.type) payload['类型'] = it.type;
    if (it.due) payload['截止日期'] = it.due;
    payload['状态'] = '待开始';
    try {
      await api('/api/tasks', { method: 'POST', body: payload });
      ok++;
    } catch (e) { fail++; }
    msg.textContent = '写入中 ' + (i + 1) + '/' + toWrite.length + '…';
  }
  btn.disabled = false;
  msg.textContent = '完成：成功 ' + ok + ' 条' + (fail ? '，失败 ' + fail + ' 条' : '') + ' ✓';
  closeTaskParse();
  await loadTasks();
  triggerPublish();
}

// ===== 智能投放：多目标复合投料 → 确认后批量落库 =====
let _intakeItems = [];

// 附件：多形式投料（文件/截图），先存本地引用，随文字一起提交
let _intakeFiles = [];
function onIntakeFiles(input) {
  const list = Array.from(input.files || []);
  _intakeFiles = list.map(f => ({ name: f.name, size: f.size, type: f.type }));
  const target = input.id === 'intake-hero-file' ? '#intake-hero-filelist' : '#intake-filelist';
  const el = document.querySelector(target);
  if (el) {
    el.textContent = list.length ? list.map(f => '📎 ' + f.name).join('，') : '';
  }
  // 把文件名拼进投料文本，供解析与落库携带
  if (list.length) {
    const txt = input.id === 'intake-hero-file' ? $('#intake-hero-text') : $('#intake-text');
    if (txt) {
      const names = list.map(f => f.name).join('、');
      txt.value = (txt.value ? txt.value + '\n' : '') + '[附件] ' + names;
      if (input.id === 'intake-hero-file') applyIntakeHero(); else applyIntake();
    }
  }
}

function openIntake() {
  $('#intake-text').value = '';
  $('#intake-preview').innerHTML = '';
  $('#intake-msg').textContent = '';
  _intakeItems = [];
  $('#intake-modal').hidden = false;
  setTimeout(() => $('#intake-text').focus(), 50);
}
function closeIntake() { $('#intake-modal').hidden = true; }

const INTAKE_TARGET_EMOJI = { '待办':'📋', '日历':'📅', '会议':'🗓', '节点':'🎯', '邮件情报':'📨', '市场分析':'📊', '项目':'📊', '资料':'📁', '风险':'⚠️', '跟进':'🔁' };

function renderIntakePreview() {
  const box = $('#intake-preview');
  if (!box) return;
  if (!_intakeItems.length) { box.innerHTML = ''; return; }
  box.innerHTML = '<div class="task-parse-head">已识别 ' + _intakeItems.length + ' 条（点右侧勾选，不想要的取消）</div>' +
    _intakeItems.map((it, i) => {
      const chips = [
        it.priority ? '<span class="task-chip" style="color:' + priColor(it.priority) + ';border-color:' + priColor(it.priority) + '">' + esc(it.priority) + '</span>' : '',
        it.region ? '<span class="task-chip" style="color:' + regionColor(it.region) + ';border-color:' + regionColor(it.region) + '">' + esc(it.region) + '</span>' : '',
        it.due ? '<span class="task-chip">📅 ' + esc(it.due) + '</span>' : '',
        it.time ? '<span class="task-chip">⏰ ' + esc(it.time) + '</span>' : '',
      ].join('');
      const targets = (it.targetTypes && it.targetTypes.length)
        ? it.targetTypes.map(t => '<span class="intake-target-chip">' + (INTAKE_TARGET_EMOJI[t] || '📋') + ' ' + esc(t) + '</span>').join('')
        : '<span class="intake-target-chip">📋 待办</span>';
      return '<div class="task-parse-item' + (it.checked ? '' : ' is-off') + '">' +
        '<div class="task-parse-main"><div class="task-title">' + esc(it.title) + '</div>' +
        '<div class="task-meta">' + (chips || '') + '</div>' +
        '<div class="intake-targets">将落到：' + targets + '</div></div>' +
        '<label class="task-parse-toggle" onclick="event.stopPropagation()"><input type="checkbox" ' + (it.checked ? 'checked' : '') + ' onchange="_intakeItems[' + i + '].checked=this.checked;this.closest(\'.task-parse-item\').classList.toggle(\'is-off\',!this.checked)">写</label>' +
      '</div>';
    }).join('');
}

function applyIntake() {
  _intakeItems = parseTaskText($('#intake-text').value);
  renderIntakePreview();
}

async function submitIntake() {
  const toWrite = _intakeItems.filter(it => it.checked);
  if (!toWrite.length) { $('#intake-msg').textContent = '没有勾选任何候选'; return; }
  const btn = $('#intake-submit');
  const msg = $('#intake-msg');
  btn.disabled = true;
  msg.textContent = '写入中…';
  try {
    const res = await api('/api/intake/commit', { method: 'POST', body: { items: toWrite } });
    const fail = (res.results || []).filter(r => !r.ok);
    msg.textContent = '完成：落库 ' + res.created + ' 条' + (fail.length ? '，失败 ' + fail.length + ' 条' : '') + ' ✓';
    closeIntake();
    await loadTasks(); // loadTasks 内部已并行刷新 tasks + milestones
    triggerPublish();
  } catch (e) {
    msg.textContent = '失败：' + (e.message || e);
  } finally {
    btn.disabled = false;
  }
}

function initIntake() {
  const text = $('#intake-text');
  if (text) text.addEventListener('input', applyIntake);
  document.querySelectorAll('[data-intake-close]').forEach(el => {
    el.addEventListener('click', closeIntake);
  });
  const submit = $('#intake-submit');
  if (submit) submit.addEventListener('click', submitIntake);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && $('#intake-modal') && !$('#intake-modal').hidden) closeIntake();
  });

  // 会议素材投放箱：文字输入实时预拆
  const mnText = $('#mn-text');
  if (mnText) mnText.addEventListener('input', applyMnIntake);
}

// ===== 顶部常驻投料区（今日工作板块顶部）=====
function applyIntakeHero() {
  const txt = $('#intake-hero-text');
  if (!txt) return;
  _intakeItems = parseTaskText(txt.value);
  renderIntakeHeroPreview();
}

function renderIntakeHeroPreview() {
  const box = $('#intake-hero-preview');
  const hint = $('#intake-hero-hint');
  if (!box) return;
  if (!_intakeItems.length) { box.innerHTML = ''; if (hint) hint.textContent = '自动识别 区域 / 优先级 / 时间 / 目标库'; return; }
  if (hint) hint.textContent = '已识别 ' + _intakeItems.length + ' 条，确认后落库';
  box.innerHTML = '<div class="task-parse-head">识别预览（点右侧勾选，不想要的取消）</div>' +
    _intakeItems.map((it, i) => {
      const chips = [
        it.priority ? '<span class="task-chip" style="color:' + priColor(it.priority) + ';border-color:' + priColor(it.priority) + '">' + esc(it.priority) + '</span>' : '',
        it.region ? '<span class="task-chip" style="color:' + regionColor(it.region) + ';border-color:' + regionColor(it.region) + '">' + esc(it.region) + '</span>' : '',
        it.due ? '<span class="task-chip">📅 ' + esc(it.due) + '</span>' : '',
        it.time ? '<span class="task-chip">⏰ ' + esc(it.time) + '</span>' : '',
      ].join('');
      const targets = (it.targetTypes && it.targetTypes.length)
        ? it.targetTypes.map(t => '<span class="intake-target-chip">' + (INTAKE_TARGET_EMOJI[t] || '📋') + ' ' + esc(t) + '</span>').join('')
        : '<span class="intake-target-chip">📋 待办</span>';
      return '<div class="task-parse-item' + (it.checked ? '' : ' is-off') + '">' +
        '<div class="task-parse-main"><div class="task-title">' + esc(it.title) + '</div>' +
        '<div class="task-meta">' + (chips || '') + '</div>' +
        '<div class="intake-targets">将落到：' + targets + '</div></div>' +
        '<label class="task-parse-toggle" onclick="event.stopPropagation()"><input type="checkbox" ' + (it.checked ? 'checked' : '') + ' onchange="_intakeItems[' + i + '].checked=this.checked;this.closest(\'.task-parse-item\').classList.toggle(\'is-off\',!this.checked)">写</label>' +
      '</div>';
    }).join('');
}

async function submitIntakeHero() {
  const txt = $('#intake-hero-text');
  const msg = $('#intake-hero-hint');
  if (!txt || !txt.value.trim()) { if (msg) msg.textContent = '请先输入要投放的内容'; return; }
  _intakeItems = parseTaskText(txt.value);
  const toWrite = _intakeItems.filter(it => it.checked);
  if (!toWrite.length) { if (msg) msg.textContent = '没有勾选任何候选'; return; }
  const btn = $('#intake-hero-submit');
  btn.disabled = true;
  msg.textContent = '写入中…';
  try {
    const res = await api('/api/intake/commit', { method: 'POST', body: { items: toWrite } });
    const fail = (res.results || []).filter(r => !r.ok);
    msg.textContent = '完成：落库 ' + res.created + ' 条' + (fail.length ? '，失败 ' + fail.length + ' 条' : '') + ' ✓';
    txt.value = '';
    $('#intake-hero-file').value = '';
    $('#intake-hero-filelist').textContent = '';
    _intakeFiles = [];
    _intakeItems = [];
    renderIntakeHeroPreview();
    await loadTasks();
    triggerPublish();
  } catch (e) {
    msg.textContent = '失败：' + (e.message || e);
  } finally {
    btn.disabled = false;
  }
}

function initTaskParse() {
  const text = $('#task-parse-text');
  if (text) text.addEventListener('input', applyTaskParse);
  document.querySelectorAll('[data-task-close]').forEach(el => {
    el.addEventListener('click', closeTaskParse);
  });
  const submit = $('#task-parse-submit');
  if (submit) submit.addEventListener('click', submitTaskParse);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && $('#task-parse-modal') && !$('#task-parse-modal').hidden) closeTaskParse();
  });
}

// ===== 项目节点：智能拆解（贴一段项目进展 → 拆成多条节点 → 写 Notion） =====
let _msItems = [];

function openMilestoneParse() {
  $('#milestone-parse-text').value = '';
  $('#milestone-parse-preview').innerHTML = '';
  $('#milestone-parse-msg').textContent = '';
  _msItems = [];
  $('#milestone-parse-modal').hidden = false;
  setTimeout(() => $('#milestone-parse-text').focus(), 50);
}
function closeMilestoneParse() { $('#milestone-parse-modal').hidden = true; }

function parseMilestoneText(raw) {
  const s = (raw || '').trim();
  if (!s) return [];
  // 按 换行 / 分号 / 句号 拆条
  const parts = s.split(/[\n;；]+|(?<=[。！？])\s*/).map(x => x.trim()).filter(x => x && x.length > 2);
  const segs = parts.length ? parts : [s];

  return segs.map(seg => {
    let title = seg;
    let status = '进行中';
    let priority = '';
    let region = '';
    let owner = '';
    let nextNode = '';
    let due = '';
    let progress = '';
    let blocker = '';

    // 区域
    if (/中东非|非洲|中东北非/.test(seg)) region = '中东非';
    else if (/东盟|东南亚/.test(seg)) region = '东盟';
    else if (/印度/.test(seg)) region = '印度';
    else if (/全球|总部/.test(seg)) region = '全球';

    // 状态（关键词识别）
    if (/立项完成|已立项|立项了/.test(seg)) status = '进行中';  // 已立项默认进行中
    else if (/立项中|准备立项|拟立项/.test(seg)) status = '立项中';
    else if (/节点达成|节点完成|已达成/.test(seg)) status = '节点达成';
    else if (/交付完成|已交付|已完成交付/.test(seg)) status = '交付完成';
    else if (/搁置|暂停|暂缓/.test(seg)) status = '搁置';

    // 优先级
    if (/P0|紧急|特急|加急/.test(seg)) priority = 'P0 紧急';
    else if (/P1|重要|关键|重点/.test(seg)) priority = 'P1 重要';
    else if (/P2|常规/.test(seg)) priority = 'P2 常规';

    // 负责人（识别「负责人X」「X负责」）
    let m = seg.match(/负责人\s*([^\s，,。；;]{1,8})/);
    if (m) owner = m[1];
    else {
      m = seg.match(/([^\s，,。；;]{1,8})\s*负责/);
      if (m) owner = m[1];
    }

    // 下次关键节点日 / 交付截止日
    m = seg.match(/下次(?:关键)?节点[是为]?(\d{1,2}\s*月\s*\d{1,2}[日号]?|\d{1,2}[\/\-]\d{1,2}|周[一二三四五六日天]|本周|下周)/);
    if (m) nextNode = m[1];
    m = seg.match(/(?:交付)?截止[日是]?(\d{1,2}\s*月\s*\d{1,2}[日号]?|\d{1,2}[\/\-]\d{1,2}|周[一二三四五六日天]|本周|下周)/);
    if (m) due = m[1];

    // 卡点
    m = seg.match(/卡点\s*[:：]?\s*([^；;。\n]{1,40})/);
    if (m) blocker = m[1].trim();

    // 进展描述（去除已识别的关键词后剩下的当作进展）
    progress = seg
      .replace(/[Pp][0-3]\s*(紧急|重要|常规|低)?/g, '')
      .replace(/立项中|已立项|立项完成|准备立项|拟立项|节点达成|交付完成|搁置|暂停/g, '')
      .replace(/负责人\s*[^\s，,。；;]{1,8}/g, '')
      .replace(/[^\s，,。；;]{1,8}\s*负责/g, '')
      .replace(/下次(?:关键)?节点[是为]?(\d{1,2}\s*月\s*\d{1,2}[日号]?|\d{1,2}[\/\-]\d{1,2}|周[一二三四五六日天]|本周|下周)/g, '')
      .replace(/(?:交付)?截止[日是]?(\d{1,2}\s*月\s*\d{1,2}[日号]?|\d{1,2}[\/\-]\d{1,2}|周[一二三四五六日天]|本周|下周)/g, '')
      .replace(/卡点\s*[:：]?\s*([^；;。\n]{1,40})/g, '')
      .replace(/中东非|中东北非|东盟|东南亚|印度|全球|总部/g, '')
      .replace(/[:：,，。；;]+$/g, '')
      .trim();
    title = progress;
    if (!title) title = seg.slice(0, 40);

    // 把自然语言日期转标准日期
    const parseNLDate = (txt) => {
      if (!txt) return '';
      const today = new Date();
      const mk = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
      const add = n => { const d = new Date(today); d.setDate(d.getDate() + n); return d; };
      const W = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 日: 0, 天: 0 };
      if (/本周/.test(txt)) { let d = (6 - today.getDay() + 7) % 7; return mk(add(d || 0)); }
      if (/下周/.test(txt)) { let d = (1 - today.getDay() + 7) % 7; return mk(add(d === 0 ? 7 : d)); }
      let m2 = txt.match(/周([一二三四五六日天])/);
      if (m2) { let d = (W[m2[1]] - today.getDay() + 7) % 7; if (d === 0) d = 7; return mk(add(d)); }
      m2 = txt.match(/(\d{1,2})\s*月\s*(\d{1,2})[日号]?/);
      if (m2) return today.getFullYear() + '-' + String(m2[1]).padStart(2, '0') + '-' + String(m2[2]).padStart(2, '0');
      m2 = txt.match(/(\d{1,2})[\/\-](\d{1,2})/);
      if (m2) return today.getFullYear() + '-' + String(m2[1]).padStart(2, '0') + '-' + String(m2[2]).padStart(2, '0');
      return '';
    };
    nextNode = parseNLDate(nextNode);
    due = parseNLDate(due);

    return { title, status, priority, region, owner, nextNode, due, progress: seg, blocker, checked: true };
  });
}

function renderMilestoneParsePreview() {
  const box = $('#milestone-parse-preview');
  if (!box) return;
  if (!_msItems.length) { box.innerHTML = ''; return; }
  box.innerHTML = '<div class="task-parse-head">已拆解 ' + _msItems.length + ' 个项目节点（点右侧勾选，不想要的取消）</div>' +
    _msItems.map((it, i) => {
      const chips = [
        it.status ? '<span class="task-chip" style="color:' + (MILESTONE_STATUS_COLOR[it.status] || '#6b7280') + ';border-color:' + (MILESTONE_STATUS_COLOR[it.status] || '#6b7280') + '">' + esc(it.status) + '</span>' : '',
        it.priority ? '<span class="task-chip" style="color:' + priColor(it.priority) + ';border-color:' + priColor(it.priority) + '">' + esc(it.priority) + '</span>' : '',
        it.region ? '<span class="task-chip" style="color:' + regionColor(it.region) + ';border-color:' + regionColor(it.region) + '">' + esc(it.region) + '</span>' : '',
        it.owner ? '<span class="task-chip">👤 ' + esc(it.owner) + '</span>' : '',
        it.nextNode ? '<span class="task-chip">下次节点 ' + esc(it.nextNode) + '</span>' : '',
        it.due ? '<span class="task-chip">交付截止 ' + esc(it.due) + '</span>' : '',
      ].join('');
      return '<div class="task-parse-item' + (it.checked ? '' : ' is-off') + '">' +
        '<div class="task-parse-main"><div class="task-title">' + esc(it.title) + '</div>' +
        '<div class="task-meta">' + (chips || '<span class="task-chip">未识别附加信息</span>') + '</div></div>' +
        '<label class="task-parse-toggle" onclick="event.stopPropagation()"><input type="checkbox" ' + (it.checked ? 'checked' : '') + ' onchange="_msItems[' + i + '].checked=this.checked;this.closest(\'.task-parse-item\').classList.toggle(\'is-off\',!this.checked)">写</label>' +
      '</div>';
    }).join('');
}

function applyMilestoneParse() {
  _msItems = parseMilestoneText($('#milestone-parse-text').value);
  renderMilestoneParsePreview();
}

async function submitMilestoneParse() {
  const toWrite = _msItems.filter(it => it.checked);
  if (!toWrite.length) { $('#milestone-parse-msg').textContent = '没有勾选任何节点'; return; }
  const btn = $('#milestone-parse-submit');
  const msg = $('#milestone-parse-msg');
  btn.disabled = true;
  msg.textContent = '写入中 0/' + toWrite.length + '…';
  let ok = 0, fail = 0;
  for (let i = 0; i < toWrite.length; i++) {
    const it = toWrite[i];
    const payload = { '节点名称': it.title, '状态': it.status };
    if (it.priority) payload['优先级'] = it.priority;
    if (it.region) payload['区域'] = it.region;
    if (it.owner) payload['负责人'] = it.owner;
    if (it.nextNode) payload['下次关键节点日'] = it.nextNode;
    if (it.due) payload['交付截止日'] = it.due;
    if (it.progress) payload['进展描述'] = it.progress;
    if (it.blocker) payload['项目卡点'] = it.blocker;
    try {
      await api('/api/milestones', { method: 'POST', body: payload });
      ok++;
    } catch (e) { fail++; }
    msg.textContent = '写入中 ' + (i + 1) + '/' + toWrite.length + '…';
  }
  btn.disabled = false;
  msg.textContent = '完成：成功 ' + ok + ' 个' + (fail ? '，失败 ' + fail + ' 个' : '') + ' ✓';
  closeMilestoneParse();
  await loadTasks();
  triggerPublish();
}

function initMilestoneParse() {
  const text = $('#milestone-parse-text');
  if (text) text.addEventListener('input', applyMilestoneParse);
  document.querySelectorAll('[data-milestone-close]').forEach(el => {
    el.addEventListener('click', closeMilestoneParse);
  });
  const submit = $('#milestone-parse-submit');
  if (submit) submit.addEventListener('click', submitMilestoneParse);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && $('#milestone-parse-modal') && !$('#milestone-parse-modal').hidden) closeMilestoneParse();
  });
}

async function loadMetrics() {
  const qs = new URLSearchParams();
  document.querySelectorAll('#filters-metrics select, #filters-inventory select').forEach((s) => { if (s.value) qs.set(s.dataset.key, s.value); });
  try {
    const d = await api('/api/metrics' + (qs.toString() ? '?' + qs : ''));
    cache.metrics = d.items;
    if (currentView === 'inventory') renderTable('inventory', d.items);
    else renderTable('metrics', d.items);
  } catch (e) { showError(currentView === 'inventory' ? 'inventory' : 'metrics', e.message); }
}

function renderTable(view, rows) {
  const conf = FIELDS[view === 'inventory' ? 'metrics' : view];
  if (!conf) return;
  const thead = $('#table-' + view + ' thead');
  const tbody = $('#table-' + view + ' tbody');
  const empty = $('#empty-' + view);
  thead.innerHTML = '<tr>' + conf.columns.map((c) => '<th>' + c.label + '</th>').join('') + '<th></th></tr>';
  if (!rows.length) { tbody.innerHTML = ''; empty.hidden = false; return; }
  empty.hidden = true;
  tbody.innerHTML = rows.map((r) => {
    let cells = conf.columns.map((c) => {
      let v = r[c.key];
      if (c.type === 'title') return '<td class="num" style="font-weight:600">' + esc(v) + '</td>';
      if (c.type === 'date') return '<td>' + fmtDate(v) + '</td>';
      if (c.type === 'number') return '<td class="num">' + (v == null ? '' : v) + '</td>';
      if (c.type === 'link') return v ? '<td><a class="link" href="' + esc(v) + '" target="_blank">打开</a></td>' : '<td></td>';
      if (c.type === 'select') return '<td><span class="tag ' + (c.tag ? c.tag(v) : '') + '">' + esc(v || '') + '</span></td>';
      if (c.type === 'status') return '<td><span class="tag ' + (c.tag ? c.tag(v) : '') + '">' + esc(v || '') + '</span></td>';
      return '<td>' + esc(v || '') + '</td>';
    }).join('');
    const actions = '<td style="text-align:right;white-space:nowrap">' +
      (view === 'metrics' && r['确认状态'] === '待确认' ? '<button class="btn btn-sm" onclick="quickConfirm(\'' + r.id + '\')">确认</button> ' : '') +
      '<button class="btn btn-sm" onclick="openEdit(\'' + (view === 'inventory' ? 'metrics' : view) + '\',\'' + r.id + '\')">编辑</button>' +
      '</td>';
    return '<tr>' + cells + actions + '</tr>';
  }).join('');
}

function showError(view, msg) {
  const empty = $('#empty-' + view);
  if (!empty) return;
  empty.hidden = false;
  empty.innerHTML = '<div class="banner" style="margin:16px">⚠️ ' + esc(msg) + '</div>';
  const tb = $('#table-' + view + ' tbody');
  if (tb) tb.innerHTML = '';
}

// ===== 弹窗 =====
function openCreateTasks() { editing = null; $('#modal-title').textContent = '新建 · 待办'; renderForm('tasks', {}); $('#modal').hidden = false; }
function openCreateMetrics() { editing = null; $('#modal-title').textContent = '新建 · 经营数据'; renderForm('metrics', {}); $('#modal').hidden = false; }
function openEdit(view, id) {
  const row = cache[view].find((r) => r.id === id);
  if (!row) return;
  editing = { view, id };
  const name = { metrics: '经营数据', tasks: '待办', milestones: '项目节点' }[view] || '数据';
  $('#modal-title').textContent = '编辑 · ' + name;
  renderForm(view, row);
  $('#modal').hidden = false;
}
function openEditMilestone(id) {
  const row = (cache.milestones || []).find((r) => r.id === id);
  if (!row) return;
  editing = { view: 'milestones', id };
  $('#modal-title').textContent = '编辑 · 项目节点';
  renderForm('milestones', row);
  $('#modal').hidden = false;
}
function closeModal() { $('#modal').hidden = true; }

function renderForm(view, data) {
  const conf = FIELDS[view];
  const body = $('#modal-body');
  body.innerHTML = conf.form.map((f) => {
    const val = data[f.key] == null ? '' : data[f.key];
    const escVal = esc(String(val));
    if (f.type === 'select') {
      return '<div class="form-row"><label>' + f.label + '</label><select data-key="' + f.key + '">' +
        '<option value="">（未选）</option>' + f.options.map((o) => '<option' + (o === val ? ' selected' : '') + '>' + o + '</option>').join('') +
        '</select></div>';
    }
    if (f.type === 'textarea') {
      return '<div class="form-row"><label>' + f.label + '</label><textarea data-key="' + f.key + '">' + escVal + '</textarea></div>';
    }
    return '<div class="form-row"><label>' + f.label + (f.required ? ' *' : '') + '</label><input type="' + f.type + '" data-key="' + f.key + '" value="' + escVal + '"></div>';
  }).join('');
}

async function submitModal() {
  let view = editing ? editing.view : (currentView === 'inventory' || currentView === 'metrics' ? 'metrics' : 'tasks');
  const conf = FIELDS[view];
  const payload = {};
  document.querySelectorAll('#modal-body [data-key]').forEach((el) => {
    const v = el.value.trim ? el.value.trim() : el.value;
    if (v !== '') payload[el.dataset.key] = v;
  });
  const titleKey = conf.title;
  if (!editing && !payload[titleKey]) { alert('请填写「' + titleKey + '」'); return; }
  try {
    if (editing) { await api(conf.api + '/' + editing.id, { method: 'PATCH', body: payload }); }
    else { await api(conf.api, { method: 'POST', body: payload }); }
    closeModal();
    if (view === 'tasks' || view === 'milestones') loadTasks(); else loadMetrics();
    triggerPublish();
  } catch (e) { alert('保存失败：' + e.message); }
}

async function quickConfirm(id) {
  try { await api('/api/metrics/' + id, { method: 'PATCH', body: { '确认状态': '已确认' } }); loadMetrics(); }
  catch (e) { alert('操作失败：' + e.message); }
}

// ===== 今日工作 =====
async function loadToday() {
  try {
    todayData = await api('/api/today');
    renderToday();
  } catch (e) { $('#today-stats').innerHTML = '<div class="banner">⚠️ ' + esc(e.message) + '</div>'; }
}

function renderToday() {
  const s = todayData.stats;
  $('#badge-today').textContent = s.urgent || '';
  const allTasks = todayData.allTasks || (todayData.urgentTasks || []); // /api/today 不返回全量时用 urgentTasks 兜底
  const today = new Date().toISOString().slice(0, 10);
  const isClosed = st => ['已完成', '已闭环', '已关闭'].includes(st || '');
  const dueTodayList = allTasks.filter(t => t['截止日期'] && String(t['截止日期']).startsWith(today) && !isClosed(t['状态'])).slice(0, 8);
  const urgentList = (todayData.urgentTasks || []).filter(t => !isClosed(t['状态']));
  const waitingList = allTasks.filter(t => t['状态'] === '等待他人').slice(0, 8);

  // === 东盟项目提醒置顶（该关注了）· 用 /api/asean 现算，与「项目与待办」同源 ===
  renderTodayAseanAlert(todayData.aseanAlerts);
  loadTodayAseanAlert();

  // === 报警区：按区域分组的小卡片（总部/全球合并） ===
  $('#alarm-body').innerHTML = renderAlarm(urgentList, allTasks);

  // === 统计卡（直接显示，不再点开覆盖 alarm-body）===
  $('#today-stats').innerHTML = [
    { label: 'A 类紧急事项', value: s.urgent, sub: '', openKey: '' },
    { label: '进行中', value: s.inProgress, sub: '', openKey: '' },
    { label: '需状态反馈', value: s.waiting, sub: '', openKey: '' },
    { label: '今日到期', value: s.dueToday, sub: '', openKey: '' },
    { label: '待办总数', value: s.tasks, sub: 'Master Tasks', openKey: '' },
    { label: '经营数据', value: s.metrics, sub: '数据源台账', openKey: '' },
  ].map(c => '<div class="stat-card">' +
    '<div class="label">' + c.label + '</div><div class="value">' + c.value + '</div>' +
    (c.sub ? '<div class="sub">' + c.sub + '</div>' : '') +
  '</div>').join('');

  // === 卡片式三列模块：今日日程 / 项目 / 待回复邮件 ===
  renderTodayModules({ allTasks, today });
  $('#today-insights').innerHTML = (todayData.insights || []).slice(0, 3).map(x => {
    const tag = x.category || '资讯';
    const date = x.date ? x.date.slice(5, 10).replace('-', '/') : '';
    return '<div class="insight-card"><span class="tag-label">' + esc(tag) + '</span><h4>' + esc(x.title) + '</h4><p>' + esc(x.summary || '') + '</p><div style="font-size:11px;color:var(--text-sub)">' + (date ? date + ' · ' : '') + '来自数据快照</div></div>';
  }).join('');
}

// 报警区按区域分组渲染（总部+全球同色）
function renderAlarm(urgentList, allTasks) {
  const isClosed = st => ['已完成', '已闭环', '已关闭'].includes(st || '');
  const waitingList = allTasks.filter(t => t['状态'] === '等待他人');
  const urgentIds = new Set(urgentList.map(t => t.id || t['待办事项']));
  const waitingOnly = waitingList.filter(t => !urgentIds.has(t.id || t['待办事项']));
  const combined = [...urgentList, ...waitingOnly];

  if (!combined.length) {
    return '当前没有 A 类紧急事项等待处理。状态确认仍请去「项目与待办」核验。';
  }

  const regOf = (t) => {
    const r = (t['区域'] || '未分配').trim();
    if (r === '总部' || r === '全球' || r === '总部+全球') return '总部+全球';
    return r;
  };

  const regionOrder = ['东盟', '中东非', '印度', '总部+全球'];
  const regionColor = { '东盟': 'region-asean', '中东非': 'region-mea', '印度': 'region-india', '总部+全球': 'region-global' };
  const regionLabel = { '东盟': '🇸🇬 东盟', '中东非': '🌍 中东非', '印度': '🇮🇳 印度', '总部+全球': '🌐 总部+全球' };

  const groups = {};
  for (const t of combined) {
    const r = regOf(t);
    if (!groups[r]) groups[r] = [];
    groups[r].push(t);
  }

  const statusCls = st => {
    if (['已完成', '已闭环', '已关闭'].includes(st)) return 'st-done';
    if (st === '进行中') return 'st-doing';
    if (['待开始', '未开始'].includes(st)) return 'st-todo';
    if (st === '等待他人') return 'st-wait';
    return 'st-todo';
  };
  const statusIcon = st => {
    if (['已完成', '已闭环', '已关闭'].includes(st)) return '✅';
    if (st === '进行中') return '🔵';
    if (['待开始', '未开始'].includes(st)) return '⚪';
    if (st === '等待他人') return '🟡';
    return '⚪';
  };
  const prioCls = p => {
    if (!p) return '';
    if (p.startsWith('P0')) return 'prio-p0';
    if (p.startsWith('P1')) return 'prio-p1';
    if (p.startsWith('P2')) return 'prio-p2';
    return '';
  };

  const itemHtml = (t) => {
    const subj = t['待办事项'] || '(无标题)';
    const link = t.url || '#';
    const st = t['状态'] || '';
    const prio = t['优先级'] || '';
    return '<a class="alarm-item" href="' + esc(link) + '" target="_blank">' +
      '<span class="alarm-prio ' + prioCls(prio) + '">' + esc(prio || '无') + '</span>' +
      '<span class="alarm-status ' + statusCls(st) + '">' + statusIcon(st) + ' ' + esc(st) + '</span>' +
      '<span class="alarm-subj">' + esc(subj) + '</span>' +
    '</a>';
  };

  const ordered = [...regionOrder.filter(r => groups[r]), ...Object.keys(groups).filter(r => !regionOrder.includes(r))];

  let html = '<div class="alarm-grid">';
  for (const r of ordered) {
    const tasks = groups[r];
    html += '<div class="alarm-tile ' + (regionColor[r] || 'region-other') + '">' +
      '<div class="alarm-tile-head">' +
        '<span class="alarm-tile-title">' + (regionLabel[r] || r) + '</span>' +
        '<span class="alarm-tile-count">' + tasks.length + ' 项</span>' +
      '</div>' +
      '<div class="alarm-tile-body">' + tasks.map(itemHtml).join('') + '</div>' +
    '</div>';
  }
  html += '</div>';
  return html;
}

// ===== 东盟项目进度（已并入「项目与待办」）=====

// 今日工作页顶部「东盟项目 · 该关注了」提醒卡（数据来自 /api/today 的 aseanAlerts）
function renderTodayAseanAlert(alerts) {
  const card = $('#today-asean-alert');
  if (!card) return;
  if (!alerts) { card.hidden = true; return; }
  const s = alerts.summary || { today: 0, upcoming: 0, overdue: 0, stalled: 0 };
  const total = (s.today || 0) + (s.upcoming || 0) + (s.overdue || 0) + (s.stalled || 0);
  if (!total) { card.hidden = true; return; }
  card.hidden = false;

  $('#today-asean-alert-sub').innerHTML =
    '<span class="aa-badge aa-overdue">超期 ' + (s.overdue || 0) + '</span>' +
    '<span class="aa-badge aa-today">今天 ' + (s.today || 0) + '</span>' +
    '<span class="aa-badge aa-upcoming">未来7天 ' + (s.upcoming || 0) + '</span>' +
    '<span class="aa-badge aa-stalled">停滞中 ' + (s.stalled || 0) + '</span>';

  const items = [];
  const itemHtml = (it, cls) => {
    const area = it.area ? '<span class="aa-area">' + esc(it.area) + '</span>' : '';
    const owner = it.owner ? '<span class="aa-owner">' + esc(it.owner) + '</span>' : '';
    return '<div class="aa-item ' + cls + '">' +
      '<span class="aa-label">' + esc(it.label) + '</span>' +
      '<span class="aa-desc">' + esc(it.desc) + '</span>' + area + owner +
      (it.issue ? '<span class="aa-issue">' + esc(it.issue) + '</span>' : '') +
    '</div>';
  };
  (alerts.overdue || []).slice(0, 3).forEach(it => items.push(itemHtml(it, 'aa-overdue')));
  (alerts.today || []).slice(0, 2).forEach(it => items.push(itemHtml(it, 'aa-today')));
  (alerts.upcoming || []).slice(0, 3).forEach(it => items.push(itemHtml(it, 'aa-upcoming')));
  (alerts.stalled || []).slice(0, 2).forEach(it => items.push(itemHtml(it, 'aa-stalled')));

  $('#today-asean-alert-body').innerHTML = items.join('');
}

// /api/today 未带 aseanAlerts 时，用 /api/asean 现场补算
async function loadTodayAseanAlert() {
  const card = $('#today-asean-alert');
  if (!card || !card.hidden) return; // 已有数据就不重复请求
  try {
    if (!aseanData) aseanData = await api('/api/asean');
    renderTodayAseanAlert(aseanData.alerts);
  } catch (e) { /* 静默：顶部提醒非关键路径 */ }
}

// ===== 东盟大区 · 项目进度（驾驶舱 A + 总表 B 双视图）=====
// 层级：项目 → 国家 → 进展；超期/停滞/临近到期置顶标红
const ASEAN_COUNTRY_ORDER = ['越南', '泰国', '印尼', '马来', '菲律宾', '新加坡', '缅甸', '柬埔寨', '老挝', '文莱', '东盟', '平台项目（跨国家）'];
const ASEAN_OTHER_LABEL = '平台项目（跨国家）';

const ASEAN_KEY_NODES = [
  { key: 'ir', label: 'IR产', full: 'IR产时间' },
  { key: 'firstOrder', label: '首单', full: '首单协议' },
  { key: 'certDone', label: '认证', full: '认证完成' },
  { key: 'done', label: '完成', full: '完成时间' },
];

const ASEAN_URG_CLS = { overdue: 'p-urg-red', stalled: 'p-urg-red', soon: 'p-urg-amber', doing: 'p-urg-blue', todo: 'p-urg-gray', done: 'p-urg-green' };

// 视图状态（A 驾驶舱 / B 总表）
const aseanView = {
  mode: 'A',        // A=驾驶舱 B=总表
  min: 'all',       // all | overdue | stalled | doing | done
  kw: '',
  open: {},         // 展开的项目（A）
  openGroup: {},    // 展开的分组（B）
};

function aseanToday() { return new Date().toISOString().slice(0, 10); }
function aseanMd(d) { return (d && /^\d{4}-\d{2}-\d{2}$/.test(d)) ? d.slice(5).replace('-', '/') : ''; }

// 紧急程度：0=超期 1=停滞 2=临近到期 3=进行中 4=待开始 5=已完成/取消
function aseanUrgency(r, todayStr) {
  const prog = r.progress || '';
  if (r.manualDone || ['已完成', '取消'].includes(prog)) return { rank: 5, key: 'done', label: prog || '已完结', cls: 'done' };
  if (prog === '停滞中') return { rank: 1, key: 'stalled', label: '停滞', cls: 'stalled' };
  const nodes = [r.ir, r.firstOrder, r.certDone, r.done].filter(d => d && /^\d{4}-\d{2}-\d{2}$/.test(d));
  const past = nodes.filter(d => d < todayStr).sort();
  if (past.length) {
    const days = Math.round((new Date(todayStr + 'T00:00:00') - new Date(past[0] + 'T00:00:00')) / 86400000);
    return { rank: 0, key: 'overdue', label: '超期' + days + '天', short: days + 'd', cls: 'overdue', overdueDays: days };
  }
  const next = nodes.filter(d => d >= todayStr).sort()[0];
  if (next) {
    const days = Math.round((new Date(next + 'T00:00:00') - new Date(todayStr + 'T00:00:00')) / 86400000);
    if (days <= 7) return { rank: 2, key: 'soon', label: days === 0 ? '今天到期' : days + '天后', short: days + 'd', cls: 'soon' };
    return { rank: 3, key: 'doing', label: prog || '进行中', cls: 'doing' };
  }
  if (prog === '待开始') return { rank: 4, key: 'todo', label: '待开始', cls: 'todo' };
  return { rank: 3, key: 'doing', label: prog || '进行中', cls: 'doing' };
}

// 节点状态：done/late/soon/ok/none
function nodeState(dateStr, todayStr, isDone) {
  if (!dateStr || !/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return { cls: 'none', txt: '—' };
  if (isDone) return { cls: 'done', txt: dateStr.slice(5) };
  if (dateStr < todayStr) return { cls: 'late', txt: dateStr.slice(5) };
  const days = Math.round((new Date(dateStr + 'T00:00:00') - new Date(todayStr + 'T00:00:00')) / 86400000);
  if (days <= 7) return { cls: 'soon', txt: dateStr.slice(5) };
  return { cls: 'ok', txt: dateStr.slice(5) };
}

// 国家推断：area 为空时用同父项目兄弟行回填，仍无法判断归「平台项目（跨国家）」
function inferAseanCountry(r, all) {
  if (r.area) return r.area;
  const sibs = (all || []).filter(y => y.area && y.parentId && y.parentId === r.parentId);
  if (sibs.length) {
    const tally = {};
    for (const s of sibs) tally[s.area] = (tally[s.area] || 0) + 1;
    return Object.keys(tally).sort((a, b) => tally[b] - tally[a])[0];
  }
  return ASEAN_OTHER_LABEL;
}

// 项目名拆两段：过长的一坨标题拆成主标题 + 附注
function splitAseanTitle(name) {
  const s = String(name || '').trim();
  const m = s.match(/^(.*?)[：:]\s*(.+)$/);
  if (m) return { main: m[1].trim(), sub: m[2].trim() };
  if (s.length > 18) return { main: s.slice(0, 16), sub: s.slice(16) };
  return { main: s, sub: '' };
}

// 下一个待办节点（超期优先）
function aseanNextNode(r, todayStr) {
  if (!r) return null;
  const done = r.manualDone || ['已完成', '取消'].includes(r.progress || '');
  if (done) return null;
  const cands = ASEAN_KEY_NODES.map(n => ({ label: n.label, full: n.full, d: r[n.key] }))
    .filter(n => n.d && /^\d{4}-\d{2}-\d{2}$/.test(n.d));
  if (!cands.length) return null;
  const late = cands.filter(n => n.d < todayStr).sort((a, b) => a.d.localeCompare(b.d))[0];
  if (late) return { label: late.label, full: late.full, d: late.d, late: true, days: Math.round((new Date(todayStr + 'T00:00:00') - new Date(late.d + 'T00:00:00')) / 86400000) };
  const nx = cands.filter(n => n.d >= todayStr).sort((a, b) => a.d.localeCompare(b.d))[0];
  if (nx) return { label: nx.label, full: nx.full, d: nx.d, late: false, days: Math.round((new Date(nx.d + 'T00:00:00') - new Date(todayStr + 'T00:00:00')) / 86400000) };
  return null;
}

let _aseanModel = null;

// 数据整理：项目 → 国家 → 进展（A/B 共用同一份 model）
function buildAseanModel() {
  const all = (aseanData && aseanData.records) || [];
  const t = aseanToday();
  const eff = all.filter(r => r.progress || r.owner || r.ir || r.firstOrder || r.certDone || r.done || r.issue || r.note);
  const byId = new Map(all.map(r => [r.id, r]));

  const projects = new Map();
  for (const r of eff) {
    const isChild = r.parentId && byId.has(r.parentId);
    let name = isChild ? (r.parentDesc || '') : (r.desc || r.parentDesc || '');
    name = String(name).replace(/^[;；\s]+/, '').trim() || '(未命名项目)';
    if (!projects.has(name)) projects.set(name, { name, rows: [], top: null });
    const p = projects.get(name);
    p.rows.push(r);
    if (!isChild) p.top = r;
  }

  const list = [...projects.values()].map(p => {
    const countries = new Map();
    for (const r of p.rows) {
      const c = inferAseanCountry(r, all);
      if (!countries.has(c)) countries.set(c, []);
      countries.get(c).push(r);
    }
    for (const [, rows] of countries) {
      rows.sort((a, b) => {
        const ua = aseanUrgency(a, t), ub = aseanUrgency(b, t);
        return ua.rank - ub.rank || (ub.overdueDays || 0) - (ua.overdueDays || 0) || String(a.desc).localeCompare(String(b.desc));
      });
    }
    const urg = p.rows.map(r => aseanUrgency(r, t));
    const best = urg.slice().sort((a, b) => a.rank - b.rank)[0] || { rank: 9 };
    const nodeSrc = p.top || p.rows[0] || {};
    const allDone = p.rows.length > 0 && p.rows.every(r => r.manualDone || ['已完成', '取消'].includes(r.progress || ''));
    return {
      name: p.name, parts: splitAseanTitle(p.name), rows: p.rows, countries, top: p.top, nodeSrc,
      rank: best.rank,
      overdue: urg.filter(u => u.key === 'overdue').length,
      stalled: urg.filter(u => u.key === 'stalled').length,
      doing: urg.filter(u => ['doing', 'soon'].includes(u.key)).length,
      done: urg.filter(u => u.key === 'done').length,
      allDone,
      next: aseanNextNode(nodeSrc, t),
    };
  });

  list.sort((a, b) => (b.overdue - a.overdue) || (b.stalled - a.stalled) || (a.rank - b.rank) || a.name.localeCompare(b.name));

  const allUrg = eff.map(r => aseanUrgency(r, t));
  const model = {
    list, eff, all,
    stat: {
      projects: list.length,
      rows: eff.length,
      overdue: allUrg.filter(u => u.key === 'overdue').length,
      stalled: allUrg.filter(u => u.key === 'stalled').length,
      doing: allUrg.filter(u => ['doing', 'soon'].includes(u.key)).length,
      done: allUrg.filter(u => u.key === 'done').length,
      countries: new Set(eff.map(r => inferAseanCountry(r, all)).filter(c => c !== ASEAN_OTHER_LABEL)).size,
    },
  };
  _aseanModel = model;
  return model;
}

function aseanMatch(r, min, kw, t) {
  const u = aseanUrgency(r, t);
  if (min === 'overdue' && u.key !== 'overdue') return false;
  if (min === 'stalled' && u.key !== 'stalled') return false;
  if (min === 'doing' && !['doing', 'soon'].includes(u.key)) return false;
  if (min === 'done' && u.key !== 'done') return false;
  if (kw) {
    const hay = [r.desc, r.parentDesc, r.area, r.owner, r.issue, r.note, r.platform, r.type].filter(Boolean).join(' ').toLowerCase();
    if (hay.indexOf(kw) < 0) return false;
  }
  return true;
}

function aseanFilterModel(m) {
  const min = aseanView.min, kw = aseanView.kw.trim().toLowerCase();
  if (min === 'all' && !kw) return m.list.map(p => ({ p, rows: p.rows, keep: true }));
  const out = [];
  const t = aseanToday();
  for (const p of m.list) {
    const rows = p.rows.filter(r => aseanMatch(r, min, kw, t));
    if (rows.length) out.push({ p, rows, keep: false });
  }
  return out;
}

function aseanUrgDot(u) {
  return '<span class="p-urg ' + (ASEAN_URG_CLS[u.key] || 'p-urg-gray') + '" title="' + esc(u.label) + '"><i></i>' + esc(u.key === 'done' ? (u.label || '完成') : u.label) + '</span>';
}

function aseanNodesRow(r, t) {
  const isDone = r.manualDone || ['已完成', '取消'].includes(r.progress || '');
  return ASEAN_KEY_NODES.map(n => {
    const st = nodeState(r[n.key], t, isDone);
    return '<span class="p-nd p-nd-' + st.cls + '" title="' + esc(n.full) + '：' + esc(st.txt) + '"><i>' + esc(n.label) + '</i><b>' + esc(st.txt) + '</b></span>';
  }).join('');
}

function aseanProjId(name) {
  let h = 0;
  const s = String(name || '');
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return 'ap-' + h.toString(36);
}

// ===== 视图 A：驾驶舱（概览瓷砖 → 需要关注 → 项目矩阵，默认收起）=====
function renderAseanCockpit(m) {
  const t = aseanToday();
  const filtered = aseanFilterModel(m);
  const s = m.stat;

  const tile = (k, v, cls, sub, min) =>
    '<button type="button" class="p-a-tile p-a-tile-' + cls + (aseanView.min === min && min !== 'all' ? ' on' : '') + '" onclick="aseanChip(\'' + min + '\')">' +
      '<div class="p-a-tile-v">' + v + '</div>' +
      '<div class="p-a-tile-k">' + k + '<span>' + esc(sub) + '</span></div></button>';

  const overview =
    '<div class="p-a-overview">' +
      tile('超期', s.overdue, 'red', s.overdue ? '需要今天处理' : '无超期', 'overdue') +
      tile('停滞', s.stalled, 'red', s.stalled ? '推不动' : '无停滞', 'stalled') +
      tile('推进中', s.doing, 'blue', '含 7 天内到期', 'doing') +
      tile('已完结', s.done, 'green', '完成 / 取消', 'done') +
      tile('项目', s.projects, 'ink', '共 ' + s.rows + ' 产品行', 'all') +
      tile('国家', s.countries, 'ink', '覆盖东盟', 'all') +
    '</div>';

  // 需要关注：跨项目聚合
  const hotRows = [];
  for (const p of m.list) for (const r of p.rows) {
    const u = aseanUrgency(r, t);
    if (u.key === 'overdue' || u.key === 'stalled' || u.key === 'soon') hotRows.push({ p, r, u });
  }
  hotRows.sort((a, b) => a.u.rank - b.u.rank || (b.u.overdueDays || 0) - (a.u.overdueDays || 0));

  const hot = hotRows.length
    ? '<div class="p-a-hot">' +
        '<div class="p-a-hot-head"><span class="p-a-hot-t">需要关注</span><span class="p-a-hot-n">' + hotRows.length + ' 项</span>' +
          '<span class="p-a-hot-tip">点一行跳到下面的项目</span></div>' +
        '<div class="p-a-hot-body">' +
          hotRows.map(({ p, r, u }) => {
            const c = inferAseanCountry(r, m.all);
            return '<div class="p-a-hot-row" onclick="aseanJump(\'' + esc(r.id) + '\')">' +
              aseanUrgDot(u) +
              '<span class="p-a-hot-desc">' + esc(r.desc || '(未命名)') + '</span>' +
              '<span class="p-a-hot-proj">' + esc(p.parts.main) + '</span>' +
              '<span class="p-a-hot-area">' + esc(c) + '</span>' +
            '</div>';
          }).join('') +
        '</div>' +
      '</div>'
    : '<div class="p-a-hot p-a-hot-clear">✓ 没有超期 / 停滞项</div>';

  // 项目矩阵
  const matrix = filtered.length
    ? filtered.map(({ p, rows, keep }) => {
        const open = !!aseanView.open[p.name] && !p.allDone;
        const countryBlocks = [...p.countries.entries()]
          .sort((a, b) => {
            const ia = ASEAN_COUNTRY_ORDER.indexOf(a[0]), ib = ASEAN_COUNTRY_ORDER.indexOf(b[0]);
            return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib) || a[0].localeCompare(b[0]);
          })
          .map(([c, crows]) => {
            const shown = keep ? crows : crows.filter(r => rows.includes(r));
            if (!shown.length) return '';
            const ob = shown.filter(r => aseanUrgency(r, t).key === 'overdue').length;
            const stN = shown.filter(r => aseanUrgency(r, t).key === 'stalled').length;
            const listRows = (keep ? shown.slice(0, 3) : shown);
            const more = shown.length - listRows.length;
            return '<div class="p-country">' +
                '<div class="p-country-head"><i class="p-country-ico"></i>' + esc(c) +
                  '<span class="p-country-n">' + shown.length + ' 项</span>' +
                  (ob ? '<span class="p-tag p-tag-red">超期 ' + ob + '</span>' : '') +
                  (stN ? '<span class="p-tag p-tag-amber">停滞 ' + stN + '</span>' : '') +
                '</div>' +
                listRows.map(r => {
                  const u = aseanUrgency(r, t);
                  const done = r.manualDone || ['已完成', '取消'].includes(r.progress || '');
                  return '<div class="p-a-row p-a-row-c' + (done ? ' p-row-done' : '') + '" data-rid="' + esc(r.id) + '">' +
                    '<div class="p-a-line1">' +
                      aseanUrgDot(u) +
                      '<span class="p-a-row-desc">' + esc(r.desc || '(未命名)') + '</span>' +
                      (r.platform ? '<span class="p-tag p-tag-blue">' + esc(r.platform) + '</span>' : '') +
                      (r.type ? '<span class="p-tag p-tag-violet">' + esc(r.type) + '</span>' : '') +
                      (r.owner ? '<span class="p-a-owner">' + esc(r.owner) + '</span>' : '') +
                      '<span class="p-c-acts">' +
                        '<button type="button" onclick="openAseanNote(\'' + esc(r.id) + '\')" title="备注">✎</button>' +
                        '<button type="button" class="p-act-done" onclick="toggleAseanDone(\'' + esc(r.id) + '\',' + (done ? 'false' : 'true') + ')" title="' + (r.manualDone ? '撤销完成' : '标记完成') + '">' + (r.manualDone ? '↺' : '✓') + '</button>' +
                      '</span>' +
                    '</div>' +
                    '<div class="p-a-line2">' + aseanNodesRow(r, t) + '</div>' +
                    (r.issue ? '<div class="p-a-row-issue">' + esc(r.issue) + '</div>' : '') +
                    (r.note ? '<div class="p-note">' + esc(r.note) + '</div>' : '') +
                  '</div>';
                }).join('') +
                (more > 0 ? '<div class="p-a-more">还有 ' + more + ' 项，展开项目看全部</div>' : '') +
              '</div>';
          }).join('');

        return '<div class="p-proj p-a-proj' + (p.allDone ? ' p-done' : '') + '" id="asean-' + esc(aseanProjId(p.name)) + '">' +
          '<div class="p-proj-head" onclick="aseanToggle(\'' + esc(p.name).replace(/'/g, "\\'") + '\')">' +
            '<span class="p-proj-caret' + (open ? ' open' : '') + '">▸</span>' +
            '<span class="p-a-urgbar p-a-urgbar-' + (p.overdue ? 'red' : p.stalled ? 'amber' : p.allDone ? 'green' : 'blue') + '"></span>' +
            '<span class="p-proj-name">' + esc(p.parts.main) + '</span>' +
            (p.parts.sub ? '<span class="p-proj-sub">' + esc(p.parts.sub) + '</span>' : '') +
            (p.allDone ? '<span class="p-tag p-tag-done">已完结</span>' : '') +
            (p.overdue ? '<span class="p-tag p-tag-red">超期 ' + p.overdue + '</span>' : '') +
            (p.stalled ? '<span class="p-tag p-tag-amber">停滞 ' + p.stalled + '</span>' : '') +
            '<span class="p-proj-right">' +
              (p.next ? '<span class="p-a-next' + (p.next.late ? ' late' : '') + '">下一个：' + esc(p.next.full) + ' ' + esc(aseanMd(p.next.d)) + (p.next.late ? '（超 ' + p.next.days + ' 天）' : '（' + p.next.days + ' 天后）') + '</span>' : '') +
              '<span class="p-proj-count">' + p.rows.length + ' 行 · ' + p.countries.size + ' 国</span>' +
            '</span>' +
          '</div>' +
          (open ? '<div class="p-proj-body">' + countryBlocks + '</div>' : '') +
        '</div>';
      }).join('')
    : '<div class="p-empty">没有符合条件的项目</div>';

  return overview + hot + '<div class="p-matrix">' + matrix + '</div>';
}

// ===== 视图 B：总表（紧凑一行一条，可扫读）=====
function renderAseanTable(m) {
  const t = aseanToday();
  const filtered = aseanFilterModel(m);
  const flat = [];
  for (const { p, rows } of filtered) for (const r of rows) flat.push({ p, r });

  const rowsHtml = flat.map(({ p, r }) => {
    const u = aseanUrgency(r, t);
    const c = inferAseanCountry(r, m.all);
    const done = r.manualDone || ['已完成', '取消'].includes(r.progress || '');
    const nx = aseanNextNode(r, t);
    return '<tr class="' + (done ? 'p-b-done' : '') + '">' +
      '<td class="p-b-c1">' + aseanUrgDot(u) + '</td>' +
      '<td class="p-b-c2" title="' + esc(r.desc) + '">' + esc(r.desc || '(未命名)') +
        (r.issue ? '<div class="p-b-issue">' + esc(r.issue) + '</div>' : '') + '</td>' +
      '<td class="p-b-c3" title="' + esc(p.name) + '">' + esc(p.name.split(/[\n;；]/)[0].trim()) + '</td>' +
      '<td class="p-b-c4">' + esc(c) + '</td>' +
      '<td class="p-b-c5">' + (nx ? '<span class="p-b-next' + (nx.late ? ' late' : '') + '">' + esc(nx.label) + ' ' + esc(aseanMd(nx.d)) + '</span>' : '<span class="p-mute">—</span>') + '</td>' +
      '<td class="p-b-c6">' + (r.owner ? esc(r.owner) : '<span class="p-mute">—</span>') + '</td>' +
      '<td class="p-b-c7"><button type="button" class="p-b-ck' + (done ? ' on' : '') + '" title="' + (done ? '撤销完成' : '标记完成') + '" onclick="toggleAseanDone(\'' + esc(r.id) + '\',' + (done ? 'false' : 'true') + ')">' + (done ? '✓' : '') + '</button></td>' +
      '<td class="p-b-c8"><button type="button" class="p-b-note" title="' + (r.note ? esc(r.note) : '添加备注') + '" onclick="openAseanNote(\'' + esc(r.id) + '\')">' + (r.note ? '✎' : '+') + '</button></td>' +
    '</tr>';
  }).join('');

  return '<div class="p-b-wrap">' +
    '<div class="p-b-bar">' +
      '<span>共 <b>' + flat.length + '</b> 行</span>' +
      '<span class="p-b-sep"></span>' +
      '<span class="p-b-hint">点最左圆圈勾完成 · 点最右 ✎ 加备注</span>' +
    '</div>' +
    '<div class="p-b-scroll">' +
      '<table class="p-b">' +
        '<thead><tr>' +
          '<th class="p-b-c1"></th>' +
          '<th class="p-b-c2">产品 / 进展</th>' +
          '<th class="p-b-c3">项目</th>' +
          '<th class="p-b-c4">国家</th>' +
          '<th class="p-b-c5">最近节点</th>' +
          '<th class="p-b-c6">责任人</th>' +
          '<th class="p-b-c7">完成</th>' +
          '<th class="p-b-c8">备注</th>' +
        '</tr></thead>' +
        '<tbody>' + (rowsHtml || '<tr><td colspan="8" class="p-empty">没有符合条件的数据</td></tr>') + '</tbody>' +
      '</table>' +
    '</div>' +
  '</div>';
}

// ===== 统一渲染入口 =====
function renderAseanInline() {
  const box = $('#asean-inline-body');
  if (!box || !aseanData) return;
  const m = buildAseanModel();
  const s = m.stat;

  const info = $('#asean-inline-info');
  if (info) info.textContent = s.projects + ' 项目 · ' + s.rows + ' 产品行 · 超期 ' + s.overdue + ' / 停滞 ' + s.stalled + ' / 推进中 ' + s.doing + ' / 已完结 ' + s.done;

  const tabs = $('#asean-inline-tabs');
  if (tabs) [].forEach.call(tabs.querySelectorAll('.asean-tab'), el => el.classList.toggle('on', el.getAttribute('data-view') === aseanView.mode));
  const chips = $('#asean-inline-chips');
  if (chips) [].forEach.call(chips.querySelectorAll('.apoc-chip'), el => el.classList.toggle('on', el.getAttribute('data-min') === aseanView.min));
  const kwEl = $('#asean-inline-kw');
  if (kwEl && document.activeElement !== kwEl && kwEl.value !== aseanView.kw) kwEl.value = aseanView.kw;

  box.innerHTML = aseanView.mode === 'B' ? renderAseanTable(m) : renderAseanCockpit(m);
}

// ===== 交互 =====
function aseanViewMode(v) { aseanView.mode = v; renderAseanInline(); }
function aseanChip(min) {
  aseanView.min = (aseanView.min === min || min === 'all') ? 'all' : min;
  renderAseanInline();
}
function aseanSearch(v) { aseanView.kw = v; renderAseanInline(); }
function aseanToggle(name) {
  aseanView.open[name] = !aseanView.open[name];
  renderAseanInline();
}
function aseanJump(rid) {
  const m = _aseanModel;
  let projName = '';
  if (m) for (const p of m.list) if (p.rows.some(r => r.id === rid)) { projName = p.name; break; }
  if (projName) aseanView.open[projName] = true;
  renderAseanInline();
  const el = document.querySelector('.p-a-row[data-rid="' + rid + '"]');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.classList.add('p-flash');
    setTimeout(() => el.classList.remove('p-flash'), 1500);
  }
}

async function loadAseanInline(force) {
  const box = $('#asean-inline-body');
  if (!box) return;
  if (aseanData && !force) { renderAseanInline(); return; }
  box.innerHTML = '<div class="p-empty">正在加载东盟项目进度…</div>';
  try {
    aseanData = await api('/api/asean');
    renderAseanInline();
  } catch (e) {
    box.innerHTML = '<div class="banner">⚠️ 东盟项目数据加载失败：' + esc(e.message) + '</div>';
  }
}

// ===== 东盟项目：手写备注 / 手动完成（落本地覆盖层）=====
let _aseanNoteId = '';

function openAseanNote(id) {
  const r = ((aseanData && aseanData.records) || []).find(x => x.id === id);
  if (!r) return;
  _aseanNoteId = id;
  $('#asean-note-title').textContent = r.desc || r.parentDesc || '(未命名)';
  $('#asean-note-text').value = r.note || '';
  $('#asean-note-msg').textContent = '';
  $('#asean-note-modal').hidden = false;
  setTimeout(() => $('#asean-note-text').focus(), 50);
}

function closeAseanNote() { $('#asean-note-modal').hidden = true; }

async function saveAseanNote() {
  const id = _aseanNoteId;
  if (!id) return;
  const msg = $('#asean-note-msg');
  const text = $('#asean-note-text').value;
  msg.textContent = '保存中…';
  try {
    await api('/api/asean/update', { method: 'POST', body: { id, note: text } });
    if (aseanData && Array.isArray(aseanData.records)) {
      const r = aseanData.records.find(x => x.id === id);
      if (r) r.note = String(text || '').trim();
    }
    msg.textContent = '✓ 已保存';
    setTimeout(() => { closeAseanNote(); renderAseanInline(); }, 500);
  } catch (e) {
    msg.textContent = '保存失败：' + (e.message || e);
  }
}

async function toggleAseanDone(id, done) {
  if (!id) return;
  try {
    markSelfWrite('asean');
    await api('/api/asean/update', { method: 'POST', body: { id, done: !!done } });
    if (aseanData && Array.isArray(aseanData.records)) {
      const r = aseanData.records.find(x => x.id === id);
      if (r) {
        r.manualDone = !!done;
        r.manualDoneAt = done ? new Date().toISOString().slice(0, 10) : '';
        r.progress = done ? '已完成' : (r.progress === '已完成' && !done ? '进行中' : r.progress);
      }
    }
    renderAseanInline();
  } catch (e) { alert('操作失败：' + (e.message || e)); }
}



// ===== 今日工作：卡片式三列模块（日程 / 项目 / 邮件）=====
function renderTodayModules({ allTasks, today }) {
  const isClosed = st => ['已完成', '已闭环', '已关闭'].includes(st || '');

  // === 左列：今日日程 ===
  renderTodaySchedule(today);

  // === 中列：项目 ===
  renderTodayProjects(allTasks, today, isClosed);

  // === 右列：待回复邮件 ===
  renderTodayMail(today);
}

// 左列：今日日程（会议 + 日历，只看今天）
function renderTodaySchedule(today) {
  const box = $('#today-schedule');
  if (!box) return;
  const meetings = (todayData.meetings || []).filter(m => m.start && new Date(m.start).toISOString().slice(0, 10) === today)
    .sort((a, b) => new Date(a.start || 0) - new Date(b.start || 0));

  if (!meetings.length) {
    box.innerHTML = '<div class="today-empty">今天没有会议 · 可以约个会 ☕️</div>';
    return;
  }

  box.innerHTML = meetings.map(m => {
    const start = new Date(m.start);
    const time = String(start.getHours()).padStart(2, '0') + ':' + String(start.getMinutes()).padStart(2, '0');
    const end = m.end ? new Date(m.end) : null;
    const endTime = end ? String(end.getHours()).padStart(2, '0') + ':' + String(end.getMinutes()).padStart(2, '0') : '';
    const loc = m.location ? '<div class="tm-loc">📍 ' + esc(m.location) + '</div>' : '';
    const url = m.url || (m.id ? 'https://calendar.google.com/calendar/r/eventedit/' + encodeURIComponent(m.id) : '#');
    const noteUrl = null; // 用 openNoteModal 弹草稿框写纪要
    return '<div class="tm-card">' +
      '<div class="tm-time"><strong>' + time + '</strong>' + (endTime ? '<span>' + endTime + '</span>' : '') + '</div>' +
      '<div class="tm-body">' +
        '<a class="tm-title" href="' + esc(url) + '" target="_blank">' + esc(m.title || '(无标题)') + '</a>' +
        loc +
        '<div class="tm-actions">' +
          '<button type="button" class="tm-note-btn" data-note-title="' + esc(m.title || '') + '" data-note-time="' + esc(time) + '" title="为这场会议写纪要">📝 纪要</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');
}

// 中列：项目（今日该办 + 本周其他）
function renderTodayProjects(allTasks, today, isClosed) {
  const box = $('#today-project');
  if (!box) return;

  const dueToday = allTasks.filter(t => t['截止日期'] && String(t['截止日期']).startsWith(today) && !isClosed(t['状态']));
  const waiting = allTasks.filter(t => t['状态'] === '等待他人' && !isClosed(t['状态']));
  const inProgress = allTasks.filter(t => t['状态'] === '进行中' && !isClosed(t['状态']));

  // 今日该办：今日到期 + 等待他人 + 进行中（去重）
  const todaySet = new Map();
  [...dueToday, ...waiting, ...inProgress].forEach(t => {
    const key = t['待办事项'] + '|' + (t['截止日期'] || '');
    if (!todaySet.has(key)) todaySet.set(key, t);
  });
  const todayItems = [...todaySet.values()];

  // 本周其他：截止日期在本周内（非今日），且未完成
  const now = new Date();
  const weekStart = new Date(now); weekStart.setDate(now.getDate() - now.getDay() + 1); weekStart.setHours(0,0,0,0);
  const weekEnd = new Date(weekStart); weekEnd.setDate(weekStart.getDate() + 7);
  const weekItems = allTasks.filter(t => {
    if (isClosed(t['状态'])) return false;
    const due = t['截止日期'];
    if (!due) return false;
    const d = new Date(due);
    if (isNaN(d)) return false;
    return d >= weekStart && d < weekEnd && String(due).slice(0, 10) !== today;
  }).sort((a, b) => String(a['截止日期']).localeCompare(String(b['截止日期'])));

  const taskCard = (t, tag) => {
    const due = t['截止日期'] || '';
    const pri = t['优先级'] || '';
    const priColor = pri.startsWith('P0') ? 'var(--red)' : pri.startsWith('P1') ? 'var(--orange)' : 'var(--accent)';
    const priLabel = pri.startsWith('P0') ? 'P0' : pri.startsWith('P1') ? 'P1' : (pri ? pri.replace(/[^0-9P]/g,'') : '');
    const dueShort = due ? due.slice(5).replace('-', '/') : '';
    return '<a class="tp-item" href="' + esc(t.url || '#') + '" target="_blank">' +
      '<div class="tp-tag" style="background:' + priColor + '">' + (tag || '') + '</div>' +
      '<div class="tp-body">' +
        '<div class="tp-title">' + esc(t['待办事项'] || '(无标题)') + '</div>' +
        '<div class="tp-meta">' + esc(t['区域'] || '未分类') + (dueShort ? ' · 截止 ' + dueShort : '') + '</div>' +
      '</div>' +
    '</a>';
  };

  let html = '';
  if (todayItems.length) {
    html += '<div class="tp-section">今日该办 <span class="tp-count">' + todayItems.length + '</span></div>';
    html += todayItems.map(t => {
      const tag = t['状态'] === '等待他人' ? '待反馈' : t['状态'] === '进行中' ? '进行中' : '到期';
      return taskCard(t, tag);
    }).join('');
  } else {
    html += '<div class="tp-section">今日该办 <span class="tp-count">0</span></div><div class="today-empty">今日无到期/待反馈事项</div>';
  }

  if (weekItems.length) {
    html += '<div class="tp-section" style="margin-top:14px">本周其他 <span class="tp-count">' + weekItems.length + '</span></div>';
    html += weekItems.slice(0, 5).map(t => taskCard(t, '本周')).join('');
    if (weekItems.length > 5) html += '<div class="tp-more">还有 ' + (weekItems.length - 5) + ' 项，去「全部待办」查看</div>';
  }

  box.innerHTML = html;
}

// 右列：待回复邮件 = 红色旗标（含已读）+ 需草拟回复 文件夹，合并去重，每条带来源标签
function renderTodayMail(today) {
  const box = $('#today-mail');
  const metaBox = $('#today-mail-meta');
  if (!box) return;
  const mails = (todayData.mailItems || []);

  if (metaBox) {
    const flagN = mails.filter(m => (m.tags || []).includes('flag')).length;
    const draftN = mails.filter(m => (m.tags || []).includes('draft')).length;
    metaBox.textContent = '🔴 红旗标 ' + flagN + ' · ✍️ 需草拟回复 ' + draftN;
  }

  if (!mails.length) {
    box.innerHTML = '<div class="today-empty">暂无待回复邮件</div>' +
      '<div class="tm-hint">红旗标（Outlook 跟进旗标）或「01_需草拟回复」文件夹里的邮件会出现在这里。</div>';
    return;
  }

  const isToday = m => m.date && String(m.date).slice(0, 10) === today;
  const todayMails = mails.filter(isToday);
  const otherMails = mails.filter(m => !isToday(m));

  const tagHtml = (m) => {
    const tags = m.tags || [];
    let t = '';
    if (tags.includes('flag')) t += '<span class="tm-tag tm-tag-flag">🔴 红旗标</span>';
    if (tags.includes('draft')) t += '<span class="tm-tag tm-tag-draft">✍️ 草拟回复</span>';
    return t;
  };

  const mailItem = (m) => {
    const from = m.from || '';
    const subject = m.subject || '(无主题)';
    const link = mailOpenUrl(m);
    const dateShort = m.date ? m.date.slice(5).replace('-', '/') : '';
    const unread = m.isRead === false ? '<span class="tm-unread">未读</span>' : '';
    const inner =
      '<div class="tm-subject">' + subject + ' ' + unread + '</div>' +
      '<div class="tm-from">' + esc(from) + (dateShort ? ' · ' + dateShort : '') + ' ' + tagHtml(m) + '</div>' +
      '<div class="tm-open">打开原邮件 →</div>';
    // 标题整体超链接到网页版 Outlook（新窗口打开）
    return link
      ? '<a class="tm-item" href="' + esc(link) + '" target="_blank" rel="noopener">' + inner + '</a>'
      : '<div class="tm-item tm-item-nolink">' + inner + '</div>';
  };

  let html = '';
  if (todayMails.length) {
    html += '<div class="tp-section">今天 <span class="tp-count">' + todayMails.length + '</span></div>';
    html += todayMails.map(mailItem).join('');
  }
  if (otherMails.length) {
    html += '<div class="tp-section" style="margin-top:14px">之前 <span class="tp-count">' + otherMails.length + '</span></div>';
    html += otherMails.slice(0, 12).map(mailItem).join('');
    if (otherMails.length > 12) html += '<div class="tm-more">还有 ' + (otherMails.length - 12) + ' 封，去「邮件中心」查看</div>';
  }

  box.innerHTML = html;
}

// ===== 邮件情报中心 =====
let intelData = null;

async function loadMailView() {
  await loadIntel();
}

async function loadIntel() {
  const box = $('#intel-content');
  box.innerHTML = '<div class="empty">正在加载邮件情报…</div>';
  try {
    intelData = await api('/api/mail/intel');
    renderIntel(intelData);
  } catch (e) {
    box.innerHTML = '<div class="empty">' + esc(e.message) + '</div>';
  }
}

async function generateIntel() {
  const box = $('#intel-content');
  const btn = $('#btn-gen-intel');
  btn.disabled = true;
  btn.textContent = '生成中…（约 30–60 秒）';
  box.innerHTML = '<div class="empty">正在拉取各文件夹邮件并用 DeepSeek 提炼情报，请稍候…<br><span style="font-size:12px;color:var(--text-sub)">首次生成约 30–60 秒，结果会缓存到本地</span></div>';
  try {
    intelData = await api('/api/mail/intel/generate', { method: 'POST' });
    renderIntel(intelData);
  } catch (e) {
    box.innerHTML = '<div class="empty">生成失败：' + esc(e.message) + '</div>';
  } finally {
    btn.disabled = false;
    btn.textContent = '生成情报';
  }
}

function toggleRawMail() {
  const raw = $('#mail-raw');
  const btn = $('#btn-raw-mail');
  const show = raw.classList.contains('hidden');
  raw.classList.toggle('hidden', !show);
  btn.textContent = show ? '返回情报' : '查看原始邮件';
  if (show) {
    if (!mailFolderTree.length) loadMailFolders();
    if (!selectedFolderId) { /* 由 loadMailFolders 后选定 */ }
  }
}

function regionTagClass(region) {
  const r = (region || '').trim();
  if (r.includes('东盟')) return 'tag-p1';
  if (r.includes('中东非')) return 'tag-p2';
  if (r.includes('印度')) return 'tag-p3';
  if (r.includes('全球')) return 'tag-progress';
  return 'tag-todo';
}
function regionTag(region) {
  const r = (region || '').trim();
  return r ? '<span class="tag ' + regionTagClass(r) + '">' + esc(r) + '</span>' : '';
}

function intelSection(title, count, accent, inner, extra) {
  const n = count == null ? '' : '<span class="intel-count">' + count + '</span>';
  return '<div class="card intel-section" style="border-left:3px solid ' + accent + '">' +
    '<div class="card-head"><h3>' + title + ' ' + n + '</h3>' + (extra || '') + '</div>' +
    '<div class="intel-body">' + inner + '</div></div>';
}

// 邮件回链：每条情报/邮件标题都直接超链接到「网页版 Outlook」对应邮件（target=_blank）。
// 多封同议题对话（Re/Fw 多轮）由后端去重，只保留最新一封的链接 —— 点进去就是最新进展。
function mailOpenUrl(x) {
  return (x && (x.webLink || x.url)) || '';
}

// 卡片里的小按钮（保留作为显式入口，标题本身也可点）
function mailLinks(x) {
  const web = mailOpenUrl(x);
  if (!web) return '';
  return '<span class="intel-maillinks">' +
    '<a class="intel-maillink" href="' + esc(web) + '" target="_blank" rel="noopener" title="在网页版 Outlook 打开这封邮件">打开邮件 ↗</a>' +
  '</span>';
}

// 标题超链接：有链接时标题整体可点，无链接时退化为纯文本
function mailTitle(x, text) {
  const web = mailOpenUrl(x);
  const t = esc(text || '(无主题)');
  if (!web) return '<span class="mail-title-plain">' + t + '</span>';
  return '<a class="mail-title-link" href="' + esc(web) + '" target="_blank" rel="noopener" title="在网页版 Outlook 打开这封邮件">' + t + '</a>';
}

function renderIntel(full) {
  const box = $('#intel-content');
  const a = full.analysis;
  const c = full.collected;
  const folders = c.folders || {};

  // 元信息
  const metaParts = [];
  if (a) metaParts.push('情报生成于 ' + (a.generatedAt ? new Date(a.generatedAt).toLocaleString('zh-CN') : '—'));
  else metaParts.push('尚未生成情报');
  metaParts.push('邮件采集于 ' + (c.collectedAt ? new Date(c.collectedAt).toLocaleString('zh-CN') : '—'));
  if (a && a.model) metaParts.push('模型 ' + a.model);
  $('#intel-meta').textContent = metaParts.join(' ｜ ');

  if (!a) {
    box.innerHTML = '<div class="card"><div class="empty" style="padding:40px">' +
      '<div style="font-size:16px;margin-bottom:8px">还没有情报，先点右上角「生成情报」</div>' +
      '<div style="font-size:12px;color:var(--text-sub)">我会拉取你各分类文件夹的邮件，按「领导关注 / 待办 / 草拟回复 / 经营透视 / 区域动态 / 会议待办」提炼成情报</div>' +
      '</div></div>';
    return;
  }

  let html = '';

  // 0. 概览统计
  const flaggedCount = (c.flagged || []).length;
  const statCards = [
    { label: '领导·特别关注', value: folders.leader ? folders.leader.messages.length : 0, color: 'var(--red)' },
    { label: '你标记的旗标', value: flaggedCount, color: 'var(--orange)' },
    { label: '每日透视待处理', value: folders.daily_pending ? folders.daily_pending.messages.length : 0, color: 'var(--accent)' },
    { label: '已闭环(仅计数)', value: folders.closed ? folders.closed.total : 0, color: 'var(--text-sub)' },
  ];
  html += '<div class="intel-stats">' + statCards.map(s =>
    '<div class="stat-card"><div class="label">' + s.label + '</div><div class="value" style="color:' + s.color + '">' + s.value + '</div></div>'
  ).join('') + '</div>';

  // ===== 核心 5 类卡片：待回复 / 重要 / 东盟 / 中东非 / 印度 =====
  // 卡片统一样式：顶部色条 + 图标 + 标题 + 计数 + 紧凑列表
  const regions = a.regions || { asean: [], mea: [], india: [] };

  const replyItems = (a.replies || []).map(x =>
    '<div class="intel-item reply">' +
    '<div class="intel-item-head"><span class="intel-date">' + esc(x.date || '') + '</span><b>' + esc(x.from || '') + '</b>' + mailLinks(x) + '</div>' +
    '<div class="intel-core">' + mailTitle(x, x.subject || '') + '</div>' +
    (x.draft ? '<div class="intel-draft"><div class="intel-draft-label">回复草稿</div>' + esc(x.draft) + '</div>' : '') +
    '</div>'
  ).join('') || '<div class="empty" style="padding:16px">暂无待回复</div>';

  const importantItems = (a.leader || []).map(x =>
    '<div class="intel-item leader">' +
    '<div class="intel-item-head"><span class="intel-date">' + esc(x.date || '') + '</span><b>' + esc(x.from || '') + '</b>' + regionTag(x.region) + mailLinks(x) + '</div>' +
    '<div class="intel-core">' + mailTitle(x, x.subject || '') + '</div>' +
    (x.action ? '<div class="intel-action">→ ' + esc(x.action) + '</div>' : '') +
    '</div>'
  ).join('') || '<div class="empty" style="padding:16px">暂无重要邮件</div>';

  const regionCardItems = (list) => list.length ? list.map(x =>
    '<div class="intel-item region">' +
    '<div class="intel-core">' + mailTitle(x, x.topic || '') + (x.count ? ' <span class="badge">' + esc(x.count) + '封</span>' : '') + '</div>' +
    '<div class="intel-summary">' + escRich(x.summary || '') + '</div>' +
    (x.trend ? '<div class="intel-action">' + escRich(x.trend) + '</div>' : '') +
    (mailOpenUrl(x) ? '<div class="intel-region-link">' + mailLinks(x) + '</div>' : '') +
    '</div>'
  ).join('') : '<div class="empty" style="padding:16px">近30天暂无</div>';

  const fiveCards = [
    { icon: '✉️', title: '待回复', count: (a.replies || []).length, color: 'var(--orange)', inner: replyItems },
    { icon: '⭐', title: '重要', count: (a.leader || []).length, color: 'var(--red)', inner: importantItems },
    { icon: '🌊', title: '东盟', count: (regions.asean || []).length, color: 'var(--accent)', inner: regionCardItems(regions.asean || []) },
    { icon: '🌍', title: '中东非', count: (regions.mea || []).length, color: 'var(--purple)', inner: regionCardItems(regions.mea || []) },
    { icon: '🇮🇳', title: '印度', count: (regions.india || []).length, color: 'var(--green)', inner: regionCardItems(regions.india || []) },
  ];
  html += '<div class="intel-card-grid">' + fiveCards.map(k =>
    '<div class="card intel-card" style="border-top:3px solid ' + k.color + '">' +
    '<div class="intel-card-head"><span class="intel-card-ico">' + k.icon + '</span><h3>' + k.title + '</h3><span class="intel-count">' + k.count + '</span></div>' +
    '<div class="intel-body">' + k.inner + '</div>' +
    '</div>'
  ).join('') + '</div>';

  // ===== 次要分区：每日待处理 / 经营透视 / 日报关注 / 会议待办 / 已闭环 =====
  if (a.pending && a.pending.length) {
    const items = a.pending.map(x =>
      '<div class="intel-item pending">' +
      '<div class="intel-item-head"><span class="intel-date">' + esc(x.date || '') + '</span><span class="tag ' + (x.priority === '高' ? 'tag-p0' : x.priority === '中' ? 'tag-p1' : 'tag-p3') + '">' + esc(x.priority || '') + '</span>' + mailLinks(x) + '</div>' +
      '<div class="intel-core">' + mailTitle(x, x.subject || '') + '</div>' +
      (x.action ? '<div class="intel-action">→ ' + esc(x.action) + '</div>' : '') +
      '</div>'
    ).join('');
    html += intelSection('每日透视 · 待处理', a.pending.length, 'var(--accent)', items);
  }

  if (a.business && a.business.length) {
    const items = a.business.map(x =>
      '<div class="intel-item business">' +
      '<div class="intel-core">' + esc(x.point || '') + '</div>' +
      '<div class="intel-meta-line">' + (x.metric ? '<span class="badge">' + esc(x.metric) + '</span>' : '') + regionTag(x.region) + (x.date ? '<span class="intel-date">' + esc(x.date) + '</span>' : '') + '</div>' +
      '</div>'
    ).join('');
    html += intelSection('经营分析 · 业绩透视', a.business.length, 'var(--green)', items);
  }

  // 6. 日报关注变化
  if (a.dailyWatch && a.dailyWatch.length) {
    const items = a.dailyWatch.map(x =>
      '<div class="intel-item watch">' +
      '<div class="intel-item-head"><span class="intel-date">' + esc(x.date || '') + '</span>' + regionTag(x.region) + '</div>' +
      '<div class="intel-core">' + esc(x.change || '') + '</div>' +
      (x.source ? '<div class="intel-summary">来源：' + esc(x.source) + '</div>' : '') +
      '</div>'
    ).join('');
    html += intelSection('日报关注 · 动态更新', a.dailyWatch.length, 'var(--green)', items);
  }

  // 7. 会议纪要 → 待办
  if (a.meeting && a.meeting.length) {
    const items = a.meeting.map(x =>
      '<div class="intel-item todo">' +
      '<div class="intel-core">☐ ' + esc(x.todo || '') + '</div>' +
      '<div class="intel-meta-line">' + (x.owner ? '<span class="badge">' + esc(x.owner) + '</span>' : '') + (x.due ? '<span class="badge">' + esc(x.due) + '</span>' : '') + (x.source ? '<span class="intel-summary">' + esc(x.source) + '</span>' : '') + '</div>' +
      '</div>'
    ).join('');
    html += intelSection('会议纪要 → 待办', a.meeting.length, 'var(--purple)', items);
  }

  // 8. 已闭环（仅了解）
  if (folders.closed) {
    html += '<div class="card intel-section" style="border-left:3px solid var(--text-sub)">' +
      '<div class="card-head"><h3>已闭环 <span class="intel-count">' + folders.closed.total + '</span></h3></div>' +
      '<div class="intel-body"><div class="intel-summary">仅做了解，不做提炼。共 ' + folders.closed.total + ' 封已闭环邮件（未读 ' + (folders.closed.unread || 0) + '）。</div></div></div>';
  }

  box.innerHTML = html;
}

// ===== 原始邮件（降级钻取）=====
let mailFolderTree = [];

function findFolderId(folders) {
  for (const f of folders) {
    const name = (f.displayName || '').toLowerCase();
    if (name === 'inbox' || name === '收件箱' || name === '00_每日透视_待处理') return f.id;
    if (f.childFolders && f.childFolders.length) {
      const child = findFolderId(f.childFolders);
      if (child) return child;
    }
  }
  return folders[0] && folders[0].id;
}

async function loadMailFolders() {
  $('#mail-folders').innerHTML = '加载中…';
  try {
    const data = await api('/api/mail/folders');
    mailFolderTree = data.folders || [];
    renderFolders(mailFolderTree, $('#mail-folders'), 0);
    if (!selectedFolderId) { selectedFolderId = findFolderId(mailFolderTree); selectedFolderName = '收件箱'; }
  } catch (e) { $('#mail-folders').innerHTML = '<div class="empty">' + esc(e.message) + '</div>'; }
}

function renderFolders(folders, container, depth) {
  container.innerHTML = '';
  if (!folders.length) { container.innerHTML = '<div class="empty">无文件夹</div>'; return; }
  const ul = document.createElement('div');
  folders.forEach(f => {
    const div = document.createElement('div');
    div.className = 'folder-item' + (f.id === selectedFolderId ? ' active' : '');
    div.style.paddingLeft = (8 + depth * 12) + 'px';
    div.innerHTML = '<span>' + esc(f.displayName) + '</span><span class="count">' + (f.unreadItemCount ? f.unreadItemCount + '/' : '') + (f.totalItemCount || 0) + '</span>';
    div.onclick = () => { selectedFolderId = f.id; selectedFolderName = f.displayName; loadMailMessages(); renderFolders(mailFolderTree, $('#mail-folders'), 0); };
    ul.appendChild(div);
    if (f.childFolders && f.childFolders.length) {
      const child = document.createElement('div');
      child.className = 'folder-children';
      renderFolders(f.childFolders, child, depth + 1);
      ul.appendChild(child);
    }
  });
  container.appendChild(ul);
}

async function loadMailMessages() {
  const list = $('#mail-list');
  if (!selectedFolderId) { list.innerHTML = '<div class="empty">请先在左侧选择文件夹</div>'; return; }
  list.innerHTML = '<div class="empty">加载中…</div>';
  $('#mail-list-title').textContent = esc(selectedFolderName);
  try {
    const search = $('#mail-search').value.trim();
    const data = await api('/api/mail/messages?folderId=' + encodeURIComponent(selectedFolderId) + (search ? '&search=' + encodeURIComponent(search) : ''));
    renderMailList(data.items || []);
  } catch (e) { list.innerHTML = '<div class="empty">' + esc(e.message) + '</div>'; }
}

function normMailSubject(s) {
  let t = String(s || '').trim();
  let prev;
  do { prev = t; t = t.replace(/^(re|fw|fwd|回复|转发|答复)\s*[:：]?\s*/i, ''); } while (t !== prev);
  return t || String(s || '').trim();
}

function renderMailList(items) {
  const list = $('#mail-list');
  if (!items.length) { list.innerHTML = '<div class="empty">该文件夹没有邮件</div>'; return; }

  // 按会话分组（同主题归并，保留最新一封做代表）
  const threads = new Map();
  for (const m of items) {
    const key = normMailSubject(m.subject) || '(无主题)';
    if (!threads.has(key)) { threads.set(key, { rep: m, count: 1, unread: m.isRead ? 0 : 1, hasAttach: !!m.hasAttachments, important: m.importance === 'high' }); }
    else {
      const t = threads.get(key);
      t.count++;
      if (!m.isRead) t.unread++;
      if (m.hasAttachments) t.hasAttach = true;
      if (m.importance === 'high') t.important = true;
      if ((m.receivedDateTime || '') > (t.rep.receivedDateTime || '')) t.rep = m;
    }
  }
  const groups = [...threads.values()].sort((a, b) => (b.rep.receivedDateTime || '').localeCompare(a.rep.receivedDateTime || ''));

  // 统计条
  const totalUnread = groups.reduce((s, g) => s + g.unread, 0);
  const importantCount = groups.filter(g => g.important).length;
  const attachCount = groups.filter(g => g.hasAttach).length;

  let html = '<div class="mail-toolbar">' +
    '<span class="mail-stat">共 ' + groups.length + ' 个会话 · ' + items.length + ' 封</span>' +
    (totalUnread ? '<span class="mail-stat warn">未读 ' + totalUnread + '</span>' : '') +
    (importantCount ? '<span class="mail-stat red">重要 ' + importantCount + '</span>' : '') +
    (attachCount ? '<span class="mail-stat">📎 ' + attachCount + '</span>' : '') +
    '<button class="btn btn-sm" onclick="toggleThreadBodies(this)">全部展开</button>' +
    '</div>';

  html += '<div class="mail-threads">' + groups.map((g, i) => {
    const m = g.rep;
    const from = m.from ? (m.from.emailAddress ? (m.from.emailAddress.name || m.from.emailAddress.address) : m.from) : '(无发件人)';
    const date = m.receivedDateTime ? new Date(m.receivedDateTime).toLocaleString('zh-CN', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }) : '';
    const badges =
      (g.important ? '<span class="mail-flag red">重要</span>' : '') +
      (g.unread ? '<span class="mail-flag blue">未读 ' + g.unread + '</span>' : '') +
      (g.hasAttach ? '<span class="mail-flag gray">📎</span>' : '');
    const preview = esc(m.bodyPreview || '').slice(0, 60);
    // 会话内多封只链最新一封（g.rep 即最新），点标题直达网页版 Outlook
    const web = m.webLink || '';
    const subjText = esc(normMailSubject(m.subject) || '(无主题)');
    const subjHtml = web
      ? '<a class="mail-title-link" href="' + esc(web) + '" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="在网页版 Outlook 打开这封邮件">' + subjText + '</a>'
      : subjText;
    return '<div class="mail-thread' + (g.unread ? ' unread' : '') + '">' +
      '<div class="mail-thread-head" onclick="toggleThread(this)">' +
        '<span class="thread-arrow">▸</span>' +
        '<div class="thread-main">' +
          '<div class="thread-subject">' + subjHtml + badges + '</div>' +
          '<div class="thread-meta">' + esc(from) + (g.count > 1 ? ' · ' + g.count + ' 封' : '') + ' · ' + date + '</div>' +
          (preview ? '<div class="thread-preview">' + preview + '</div>' : '') +
        '</div>' +
        (web ? '<a class="btn btn-sm" href="' + esc(web) + '" target="_blank" rel="noopener" onclick="event.stopPropagation()">打开 ↗</a>' : '') +
        '<button class="btn btn-sm" onclick="event.stopPropagation();openMail(\'' + esc(m.id) + '\')">查看</button>' +
      '</div>' +
      '</div>';
  }).join('') + '</div>';
  list.innerHTML = html;
}

function toggleThread(headEl) {
  const thread = headEl.parentElement;
  const arrow = headEl.querySelector('.thread-arrow');
  const open = thread.classList.toggle('open');
  arrow.textContent = open ? '▾' : '▸';
}

function toggleThreadBodies(btn) {
  const box = btn.closest('.mail-main');
  const threads = box.querySelectorAll('.mail-thread');
  const anyClosed = [...threads].some(t => !t.classList.contains('open'));
  threads.forEach(t => {
    t.classList.toggle('open', anyClosed);
    const arrow = t.querySelector('.thread-arrow');
    if (arrow) arrow.textContent = anyClosed ? '▾' : '▸';
  });
  btn.textContent = anyClosed ? '全部收起' : '全部展开';
}

function searchMail() { loadMailMessages(); }

async function openMail(id) {
  const body = $('#mail-modal-body');
  $('#mail-modal-title').textContent = '邮件详情';
  body.innerHTML = '<div class="empty">加载中…</div>';
  $('#mail-modal').classList.remove('hidden');
  try {
    const m = await api('/api/mail/messages/' + encodeURIComponent(id));
    const from = m.from ? (m.from.emailAddress ? m.from.emailAddress.address : m.from) : '';
    const to = (m.toRecipients || []).map(r => r.emailAddress ? r.emailAddress.address : '').filter(Boolean).join(', ');
    const html = (m.body && m.body.contentType === 'html') ? m.body.content : ('<pre>' + esc(m.bodyPreview || '') + '</pre>');
    $('#mail-modal-title').textContent = esc(m.subject || '(无主题)');
    body.innerHTML = '<div class="mail-detail-meta">' +
      '<div><b>发件人：</b>' + esc(from) + '</div>' +
      '<div><b>收件人：</b>' + esc(to) + '</div>' +
      '<div><b>时间：</b>' + esc(m.receivedDateTime ? new Date(m.receivedDateTime).toLocaleString('zh-CN') : '') + '</div>' +
      '</div>' +
      '<div class="mail-detail-body">' + html + '</div>';
  } catch (e) { body.innerHTML = '<div class="empty">' + esc(e.message) + '</div>'; }
}
function closeMailModal() { $('#mail-modal').classList.add('hidden'); }

// ===== 区域经营 =====
// ===== 区域经营（1-8月经营看板）=====
// 数据源：public/market-data/经营/1-8月经营-data.json（由 tools/biz-intel-build.js 生成）
// 结构：regions[].units[]（大区整体 + 各国），每个 unit 含 series / cats / catDetail / gmAll / gmCat
// 口径：东盟不分直发；沙特/迪拜合并直发；南非拆内销出口；产品结构用「产品类别」6 类；
//      可比机型 = 产品类别 + 系列 + 公斤 三者完全相等。
let bizData = null;
let bizUnit = null;              // 当前单位对象
let bizRegion = null;            // 当前大区数据
let bizCountryKey = '__all__';   // 当前国家 key
let bizPeriod = { kind: 'ytd' }; // {kind:'ytd'|'q'|'m', q?:1..4, m?:1..8}
let bizSub = null;               // 南非子口径：(内销)/(出口)
let bizCat = null;               // 产品结构当前下钻品类
let bizGmCat = null;             // 毛利当前下钻品类
// bizDataReady 不做「已加载」缓存——每次进区域经营都重新拉，保证手机端看到最新数据
const KG_COLORS = ['#4a7fd4', '#3aa6a0', '#e8a33d', '#c9694f', '#8b6cc4', '#5aa356', '#d4718f', '#7b8ba3', '#b8901f', '#4aa3c9', '#a05fa5', '#6b8e23', '#cf6a3a', '#5f7fa8', '#c4a35a', '#8f9bb0'];

async function loadRegional(region) {
  // 每次都重新拉最新 JSON（带时间戳防缓存），手机端看到的是最后一次 push 的版本，不是快照版本
  try {
    const r = await fetch('market-data/经营/1-8月经营-data.json?t=' + Date.now());
    if (!r.ok) throw new Error('HTTP ' + r.status);
    bizData = await r.json();
  } catch (e2) {
    // 降级：走快照（本地服务或旧快照）
    try {
      const d = await api('/api/biz-intel');
      bizData = d;
    } catch (e) {
      $('#biz-regions').innerHTML = '<div class="empty">经营数据未接入：' + esc(e.message) + '</div>';
      return;
    }
  }
  // 大区：默认东盟
  const want = region === '中东非' ? '中东非' : '东盟';
  if (!bizRegion || bizRegion.code !== want || bizCountryKey === undefined) {
    bizRegion = (bizData.regions || []).find(r => r.code === want) || (bizData.regions || [])[0];
    bizCountryKey = '__all__';
    bizSub = null;
    bizCat = null; bizGmCat = null;
  }
  refreshBiz();
}

// ── 统一刷新入口：所有渲染函数由这里按固定顺序调用，渲染函数之间互不调用 ──
function refreshBiz() {
  if (!bizRegion) return;
  bizUnit = pickBizUnit();
  renderBizTop();
  renderBizKpis();
  renderBizChart();
  renderBizAsp();
  renderBizStruct();
  renderBizGm();
  renderBizProfit();
}

function pickBizUnit() {
  const units = bizRegion.units || [];
  let u = units.find(x => String(x.key) === String(bizCountryKey)) || units[0];
  if (bizSub && u.subs) {
    const s = u.subs.find(x => x.label === bizSub);
    if (s) {
      let lb = s.label;
      if (/^南非\(|\)$/.test(lb)) lb = lb.replace(/^南非\(|\)$/g, '');
      else if (lb === '沙特直发' || lb === 'H总部直发-迪拜') lb = '直发';
      else if (lb === '沙特' || lb === '迪拜') lb = '品牌';
      return Object.assign({}, s, { label: u.label + '·' + lb, kind: 'sub', _parent: u });
    }
  }
  return u;
}

// ── 时间维度：把 series（按月）折叠成当前区间 ──
function bizRange() {
  const n = (bizUnit && bizUnit.series && bizUnit.series.cur) ? bizUnit.series.cur.length : 8;
  const p = bizPeriod;
  if (p.kind === 'm') return { idx: [p.m - 1], label: p.m + '月' };
  if (p.kind === 'q') {
    const a = (p.q - 1) * 3;
    return { idx: [a, a + 1, a + 2].filter(i => i < n), label: 'Q' + p.q };
  }
  return { idx: Array.from({ length: n }, (_, i) => i), label: 'YTD 1-' + n + '月' };
}

function bizAgg(idxList) {
  const s = bizUnit.series.cur;
  const a = { c_rev: 0, p_rev: 0, c_qty: 0, p_qty: 0, c_gm: 0, p_gm: 0 };
  idxList.forEach(i => {
    const r = s[i]; if (!r) return;
    a.c_rev += r.c_rev; a.p_rev += r.p_rev;
    a.c_qty += r.c_qty; a.p_qty += r.p_qty;
    a.c_gm += r.c_gm; a.p_gm += r.p_gm;
  });
  a.c_price = a.c_qty ? a.c_rev * 10000 / a.c_qty : 0;
  a.p_price = a.p_qty ? a.p_rev * 10000 / a.p_qty : 0;
  a.c_gmr = a.c_rev ? a.c_gm / a.c_rev : 0;
  a.p_gmr = a.p_rev ? a.p_gm / a.p_rev : 0;
  return a;
}

// ── 顶部导航 ──
function renderBizTop() {
  // 大区
  $('#biz-regions').innerHTML = (bizData.regions || []).map(r =>
    '<button class="biz-tab ' + (r.code === bizRegion.code ? 'active' : '') + '" onclick="pickBizRegion(\'' + esc(r.code) + '\')">' + esc(r.name.replace('区', '')) + '</button>'
  ).join('');

  // 时间维度
  const n = (bizUnit && bizUnit.series ? bizUnit.series.cur.length : 8);
  const btns = [];
  btns.push({ k: 'ytd', label: 'YTD 1-' + n + '月', on: bizPeriod.kind === 'ytd' });
  const qn = Math.ceil(n / 3);
  for (let q = 1; q <= qn; q++) btns.push({ k: 'q', q: q, label: 'Q' + q, on: bizPeriod.kind === 'q' && bizPeriod.q === q });
  for (let m = 1; m <= n; m++) btns.push({ k: 'm', m: m, label: m + '月', on: bizPeriod.kind === 'm' && bizPeriod.m === m });
  $('#biz-time').innerHTML = '<span class="biz-time-lbl">时间</span>' + btns.map(b => {
    const act = 'biz-chip' + (b.on ? ' active' : '');
    const fn = b.k === 'ytd' ? 'pickBizPeriod(\'ytd\')' : b.k === 'q' ? 'pickBizPeriod(\'q\',' + b.q + ')' : 'pickBizPeriod(\'m\',' + b.m + ')';
    return '<button class="' + act + '" onclick="' + fn + '">' + b.label + '</button>';
  }).join('');

  // 国家（按收入排序，源数据已排好）
  const units = bizRegion.units || [];
  const items = units.filter(u => u.kind === 'country').map(u => {
    const on = String(u.key) === String(bizCountryKey);
    return '<button class="biz-cc' + (on ? ' active' : '') + '" onclick="pickBizCountry(\'' + esc(u.key).replace(/'/g, "\\'") + '\')">' + esc(u.label) + '</button>';
  });
  const allOn = String(bizCountryKey) === '__all__';
  $('#biz-countries').innerHTML =
    '<button class="biz-cc all' + (allOn ? ' active' : '') + '" onclick="pickBizCountry(\'__all__\')">' + esc(bizRegion.code) + '整体</button>' +
    '<span class="biz-cc-sep"></span>' + items.join('');

  // 上下文条：子口径切换（南非内销/出口、沙特品牌/直发、迪拜品牌/直发）
  const u = bizUnit;
  const host = (u && u._parent && u._parent.subs) ? u._parent : (u && u.subs ? u : null);
  const subbar = host ? (function () {
    const base = '<button class="biz-chip' + (!bizSub ? ' active' : '') + '" onclick="pickBizSub(\'\')">合计</button>';
    return base + host.subs.map(s => {
      // 标签：南非(内销)→内销 · 沙特直发→直发 · 沙特→品牌 · H总部直发-迪拜→直发 · 迪拜→品牌
      let lb = s.label;
      if (/^南非\(|\)$/.test(lb)) lb = lb.replace(/^南非\(|\)$/g, '');
      else if (lb === '沙特直发' || lb === 'H总部直发-迪拜') lb = '直发';
      else if (lb === '沙特' || lb === '迪拜') lb = '品牌';
      return '<button class="biz-chip' + (bizSub === s.label ? ' active' : '') + '" onclick="pickBizSub(\'' + esc(s.label) + '\')">' + esc(lb) + '</button>';
    }).join('');
  })() : '';
  const range = bizRange();
  const agg = bizAgg(range.idx);
  const parts = [
    '<span class="biz-ctx-strong">' + esc(bizUnit ? bizUnit.label : '') + '</span>',
    '<span class="biz-ctx-period">' + esc(range.label) + '</span>'
  ];
  if (subbar) parts.push('<span class="biz-ctx-sub">口径：' + subbar + '</span>');
  parts.push('<span class="biz-ctx-d">收入 ' + fmtNum(agg.c_rev) + ' 万美元 · 销量 ' + fmtNum(Math.round(agg.c_qty)) + ' 台 · 均价 ' + agg.c_price.toFixed(1) + ' 美元</span>');
  $('#biz-ctxbar').innerHTML = parts.join('');

  // 页头标题
  const t = $('#view-title');
  if (t) t.textContent = '区域经营 · ' + bizRegion.code + (String(bizCountryKey) === '__all__' ? '' : ' / ' + bizUnit.label);
}

function pickBizRegion(code) {
  bizRegion = (bizData.regions || []).find(r => r.code === code) || bizRegion;
  bizCountryKey = '__all__'; bizSub = null; bizCat = null; bizGmCat = null;
  refreshBiz();
}
function pickBizCountry(key) {
  bizCountryKey = key; bizSub = null; bizCat = null; bizGmCat = null;
  refreshBiz();
}
function pickBizSub(label) {
  if (!label) { bizSub = null; refreshBiz(); return; }
  const u = bizUnit._parent || bizUnit;
  bizSub = (bizSub === label) ? null : label;
  bizCountryKey = u.key;
  refreshBiz();
}
function pickBizPeriod(kind, v) {
  bizPeriod = kind === 'ytd' ? { kind: 'ytd' } : kind === 'q' ? { kind: 'q', q: v } : { kind: 'm', m: v };
  refreshBiz();
}

// ── ① 业绩趋势 ──
function renderBizKpis() {
  const range = bizRange();
  const a = bizAgg(range.idx);
  const yoy = (c, p) => p ? (c / p - 1) : 0;
  const kpis = [
    { name: '收入', cur: a.c_rev, pre: a.p_rev, unit: '万美元', yoy: yoy(a.c_rev, a.p_rev), dec: 1, dAbs: +(a.c_rev - a.p_rev).toFixed(1) },
    { name: '销量', cur: a.c_qty, pre: a.p_qty, unit: '台', yoy: yoy(a.c_qty, a.p_qty), dec: 0, dAbs: Math.round(a.c_qty - a.p_qty) },
    { name: '毛利额', cur: a.c_gm, pre: a.p_gm, unit: '万美元', yoy: yoy(a.c_gm, a.p_gm), dec: 1, dAbs: +(a.c_gm - a.p_gm).toFixed(1) },
    { name: '毛利率', cur: a.c_gmr * 100, pre: a.p_gmr * 100, unit: '%', yoy: 0, dec: 1, dAbs: +((a.c_gmr - a.p_gmr) * 100).toFixed(1) }
  ];
  $('#biz-kpis').innerHTML = kpis.map(k => {
    const isRate = k.name === '毛利率';
    const dir = k.dAbs > 0 ? 'up' : k.dAbs < 0 ? 'down' : 'flat';
    const arrow = k.dAbs > 0 ? '▲' : k.dAbs < 0 ? '▼' : '—';
    const main = isRate ? k.cur.toFixed(k.dec) + '%' : fmtNum(+k.cur.toFixed(k.dec));
    const sub = isRate
      ? '同期 ' + k.pre.toFixed(k.dec) + '%　' + arrow + ' ' + (k.dAbs > 0 ? '+' : '') + k.dAbs + 'pp'
      : '同期 ' + fmtNum(+k.pre.toFixed(k.dec)) + '　' + arrow + ' ' + (k.yoy > 0 ? '+' : '') + (k.yoy * 100).toFixed(1) + '%';
    return '<div class="biz-kpi"><div class="bk-name">' + k.name + '<span class="bk-unit">' + k.unit + '</span></div>' +
      '<div class="bk-val">' + main + '</div>' +
      '<div class="bk-sub ' + dir + '">' + sub + '</div></div>';
  }).join('');

  $('#biz-s1-meta').textContent = bizUnit.label + ' · ' + range.label + ' · 对比同期';
}

function renderBizChart() {
  const s = bizUnit.series.cur;
  const months = bizData.months || [];
  const N = months.length;

  // 柱=收入(万美元，左轴) · 线=销量(台，右轴)。均价已移到「均价透视」区块单独展示。
  const W = 900, H = 300, PL = 56, PR = 62, PT = 22, PB = 42;
  const iw = W - PL - PR, ih = H - PT - PB;
  const slots = Array.from({ length: 12 }, (_, i) => i + 1);

  let maxRev = 0, maxQty = 0;
  slots.forEach(m => {
    const r = s[m - 1];
    if (!r) return;
    maxRev = Math.max(maxRev, r.c_rev, r.p_rev);
    maxQty = Math.max(maxQty, r.c_qty, r.p_qty);
  });
  maxRev = maxRev || 1; maxQty = maxQty || 1;
  const nice = v => { const e = Math.pow(10, Math.floor(Math.log10(v || 1))); return Math.ceil(v / e * 2) / 2 * e; };
  const topRev = nice(maxRev), topQty = nice(maxQty);

  const segW = iw / 12;
  const barW = segW * 0.30;
  const yBar = v => PT + ih - (v / topRev) * ih;
  const yLine = v => PT + ih - (v / topQty) * ih;
  const xc = m => PL + segW * (m - 1) + segW / 2;

  const hl = bizPeriod.kind === 'm' ? [bizPeriod.m] : bizPeriod.kind === 'q' ? [0, 1, 2].map(i => (bizPeriod.q - 1) * 3 + i + 1) : slots;
  let out = '<svg class="biz-svg" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="xMidYMid meet">';
  // 网格
  for (let g = 0; g <= 4; g++) {
    const y = PT + ih * g / 4;
    out += '<line x1="' + PL + '" y1="' + y.toFixed(1) + '" x2="' + (W - PR) + '" y2="' + y.toFixed(1) + '" class="bz-grid"/>';
    out += '<text x="' + (PL - 6) + '" y="' + (y + 3.5).toFixed(1) + '" class="bz-ytick" text-anchor="end">' + fmtAxis(topRev * (1 - g / 4)) + '</text>';
    out += '<text x="' + (W - PR + 6) + '" y="' + (y + 3.5).toFixed(1) + '" class="bz-ytick2" text-anchor="start">' + fmtAxis(topQty * (1 - g / 4)) + '</text>';
  }
  // 高亮区
  hl.forEach(m => { if (m <= 12) out += '<rect x="' + (PL + segW * (m - 1)).toFixed(1) + '" y="' + PT + '" width="' + segW.toFixed(1) + '" height="' + ih + '" class="bz-hl"/>'; });
  // 柱：本期收入（蓝）+ 同期收入（灰）
  slots.forEach(m => {
    const r = s[m - 1];
    const cx = xc(m);
    if (!r) { out += '<rect x="' + (cx - barW).toFixed(1) + '" y="' + PT.toFixed(1) + '" width="' + barW.toFixed(1) + '" height="' + ih + '" class="bz-fill"/>'; return; }
    const h1 = Math.max(0, (r.c_rev / topRev) * ih), h2 = Math.max(0, (r.p_rev / topRev) * ih);
    const isDim = bizPeriod.kind !== 'ytd' && hl.indexOf(m) < 0;
    out += '<rect x="' + (cx - barW - 1).toFixed(1) + '" y="' + (PT + ih - h1).toFixed(1) + '" width="' + barW.toFixed(1) + '" height="' + h1.toFixed(1) + '" class="bz-bar' + (isDim ? ' dim' : '') + '"/>';
    out += '<rect x="' + (cx + 1).toFixed(1) + '" y="' + (PT + ih - h2).toFixed(1) + '" width="' + barW.toFixed(1) + '" height="' + h2.toFixed(1) + '" class="bz-bar-pre' + (isDim ? ' dim' : '') + '"/>';
    // 柱顶标收入数值（本期 + 同期）
    out += '<text x="' + (cx - barW / 2 - 1).toFixed(1) + '" y="' + (PT + ih - h1 - 4).toFixed(1) + '" class="bz-val-cur" text-anchor="middle">' + r.c_rev.toFixed(0) + '</text>';
    if (r.p_rev > 0) out += '<text x="' + (cx + barW / 2 + 1).toFixed(1) + '" y="' + (PT + ih - h2 - 4).toFixed(1) + '" class="bz-val-pre" text-anchor="middle">' + r.p_rev.toFixed(0) + '</text>';
  });
  // 销量折线：本期实线 + 同期虚线，点上标数值
  [['p_qty', 'bz-line-pre'], ['c_qty', 'bz-line']].forEach(pair => {
    const pts = [];
    s.forEach((r, i) => { if (r[pair[0]] > 0) pts.push(xc(i + 1).toFixed(1) + ',' + yLine(r[pair[0]]).toFixed(1)); });
    if (pts.length > 1) out += '<polyline points="' + pts.join(' ') + '" class="' + pair[1] + '"/>';
  });
  s.forEach((r, i) => {
    if (r.c_qty > 0) {
      out += '<circle cx="' + xc(i + 1).toFixed(1) + '" cy="' + yLine(r.c_qty).toFixed(1) + '" r="2.6" class="bz-dot"/>';
      out += '<text x="' + xc(i + 1).toFixed(1) + '" y="' + (yLine(r.c_qty) - 6).toFixed(1) + '" class="bz-val-line" text-anchor="middle">' + fmtAxis(r.c_qty) + '</text>';
    }
  });
  // X 轴 + 柱底同比（收入）
  slots.forEach(m => {
    const isNo = m > N;
    const r = s[m - 1];
    out += '<text x="' + xc(m).toFixed(1) + '" y="' + (H - 22) + '" class="bz-xtick' + (isNo ? ' off' : '') + '" text-anchor="middle">' + m + '月</text>';
    if (r && r.p_rev > 0 && !isNo) {
      const dd = (r.c_rev / r.p_rev - 1) * 100;
      out += '<text x="' + xc(m).toFixed(1) + '" y="' + (H - 9) + '" class="bz-xsub ' + (dd > 0 ? 'up' : dd < 0 ? 'down' : '') + '" text-anchor="middle">' + (dd > 0 ? '+' : '') + dd.toFixed(0) + '%</text>';
    }
  });
  out += '</svg>';
  $('#biz-chart').innerHTML = out;

  $('#biz-s1-legend').innerHTML =
    '<span class="bz-leg"><i class="bz-bar"></i>收入（本期，万美元）</span>' +
    '<span class="bz-leg"><i class="bz-bar-pre"></i>收入（去年同期）</span>' +
    '<span class="bz-leg"><i class="bz-line"></i>销量（本期，台）</span>' +
    '<span class="bz-leg"><i class="bz-line-pre2"></i>销量（去年同期，虚线）</span>' +
    '<span class="bz-leg"><i class="bz-fill"></i>9-12月无本期数据</span>';
  renderBizInsight1();
}

// ── 版块提示（规则生成，不废话） ──
function bizInsHtml(tips) {
  return tips.length ? '<div class="bz-ins-title">关注</div>' + tips.map(x => '<div class="bz-ins-item ' + x.d + '">' + esc(x.t) + '</div>').join('') : '';
}

function renderBizInsight1() {
  const range = bizRange();
  const a = bizAgg(range.idx);
  const yoy = (c, p) => p ? (c / p - 1) : 0;
  const tips = [];
  const revY = yoy(a.c_rev, a.p_rev) * 100, qtyY = yoy(a.c_qty, a.p_qty) * 100, priY = yoy(a.c_price, a.p_price) * 100;
  if (Math.abs(revY) >= 1) tips.push({ t: '收入' + (revY > 0 ? '增长 ' + revY.toFixed(1) + '%' : '下滑 ' + Math.abs(revY).toFixed(1) + '%') + '（' + a.c_rev.toFixed(0) + '万 vs 同期 ' + a.p_rev.toFixed(0) + '万）', d: revY > 0 ? 'up' : 'down' });
  if (Math.abs(qtyY) >= 1) tips.push({ t: '销量' + (qtyY > 0 ? '增长 ' + qtyY.toFixed(1) + '%' : '下滑 ' + Math.abs(qtyY).toFixed(1) + '%') + '（' + fmtNum(Math.round(a.c_qty)) + ' 台）', d: qtyY > 0 ? 'up' : 'down' });
  if (Math.abs(priY) >= 1) tips.push({ t: '均价' + (priY > 0 ? '上移 ' + priY.toFixed(1) + '%' : '下移 ' + Math.abs(priY).toFixed(1) + '%') + '（' + a.c_price.toFixed(1) + ' 美元，同期 ' + a.p_price.toFixed(1) + '）', d: priY > 0 ? 'up' : 'down' });
  if (revY > 0 && priY < 0) tips.push({ t: '量增价跌：收入 +' + revY.toFixed(1) + '% 但均价 ' + priY.toFixed(1) + '%，结构或价格在下沉', d: 'warn' });
  const dgm = (a.c_gmr - a.p_gmr) * 100;
  if (Math.abs(dgm) >= 0.3) tips.push({ t: '毛利率' + (dgm > 0 ? '改善 ' + dgm.toFixed(1) + 'pp' : '恶化 ' + Math.abs(dgm).toFixed(1) + 'pp') + '（' + (a.c_gmr * 100).toFixed(1) + '% vs 同期 ' + (a.p_gmr * 100).toFixed(1) + '%）', d: dgm > 0 ? 'up' : 'down' });
  if (bizUnit.kind === 'region' && bizRegion.units) {
    const rows = bizRegion.units.filter(u => u.kind === 'country').map(u => {
      const c = u.series.cur.reduce((o, s) => o + s.c_rev, 0), p = u.series.cur.reduce((o, s) => o + s.p_rev, 0);
      return { l: u.label, c, p, yoy: p ? (c / p - 1) : 0 };
    }).filter(x => Math.abs(x.yoy) >= 0.05).sort((a2, b2) => Math.abs(b2.yoy) - Math.abs(a2.yoy));
    if (rows[0]) tips.push({ t: rows[0].l + ' 收入 ' + (rows[0].yoy > 0 ? '+' : '') + (rows[0].yoy * 100).toFixed(0) + '%（' + rows[0].c.toFixed(0) + ' 万），为该区最大变动市场', d: rows[0].yoy > 0 ? 'up' : 'down' });
  }
  $('#biz-ins1').innerHTML = bizInsHtml(tips);
}

// ── ② 均价透视 ──
let bizAspPath = { cat: '', ser: '', kg: '' };

function renderBizAsp() {
  const s = bizUnit.series.cur;
  const months = bizData.months || [];
  const N = months.length;
  const a = bizAgg(Array.from({ length: N }, (_, i) => i));
  const yoyP = a.p_price ? (a.c_price / a.p_price - 1) : 0;
  const first = s.find(x => x.c_price > 0), last = s.slice().reverse().find(x => x.c_price > 0);
  $('#biz-asp-side').innerHTML =
    '<div class="bz-asp-card"><div class="bz-asp-lbl">YTD 均价</div><div class="bz-asp-val">' + a.c_price.toFixed(1) + '</div><div class="bz-asp-sub ' + (yoyP > 0 ? 'up' : 'down') + '">同比 ' + (yoyP > 0 ? '+' : '') + (yoyP * 100).toFixed(1) + '%</div></div>' +
    '<div class="bz-asp-card dim"><div class="bz-asp-lbl">同期均价</div><div class="bz-asp-val">' + a.p_price.toFixed(1) + '</div><div class="bz-asp-sub">美元/台</div></div>' +
    '<div class="bz-asp-card dim"><div class="bz-asp-lbl">月度走势</div><div class="bz-asp-val">' + (first ? first.c_price.toFixed(0) : '—') + ' → ' + (last ? last.c_price.toFixed(0) : '—') + '</div><div class="bz-asp-sub">' + (first ? months[0].slice(5) : '') + ' 至 ' + (last ? months[N - 1].slice(5) : '') + '</div></div>';
  renderAspChart(aspSeries('', '', ''), '整体 · 均价趋势');
  $('#biz-asp-meta').textContent = bizUnit.label + ' · ' + bizRange().label;
  renderAspDrillOpts();
}

function renderAspChart(seq, title) {
  const months = bizData.months || [];
  const N = months.length;
  const W = 620, H = 240, PL = 48, PR = 14, PT = 14, PB = 30;
  const iw = W - PL - PR, ih = H - PT - PB;
  let pMin = Infinity, pMax = -Infinity;
  seq.forEach(r => { if (r.c > 0) { pMin = Math.min(pMin, r.c); pMax = Math.max(pMax, r.c); } if (r.p > 0) { pMin = Math.min(pMin, r.p); pMax = Math.max(pMax, r.p); } });
  if (!isFinite(pMin)) { pMin = 0; pMax = 1; }
  const pad = (pMax - pMin) * 0.15 || 10;
  const pLo = Math.max(0, pMin - pad), pHi = pMax + pad;
  const yP = v => PT + ih - ((v - pLo) / (pHi - pLo || 1)) * ih;
  const xc = m => PL + (iw / 12) * (m - 1) + (iw / 12) / 2;
  let svg = '<svg class="biz-svg" viewBox="0 0 ' + W + ' ' + H + '">';
  for (let g = 0; g <= 4; g++) {
    const yy = PT + ih * g / 4;
    svg += '<line x1="' + PL + '" y1="' + yy.toFixed(1) + '" x2="' + (W - PR) + '" y2="' + yy.toFixed(1) + '" class="bz-grid"/>';
    svg += '<text x="' + (PL - 5) + '" y="' + (yy + 3.5).toFixed(1) + '" class="bz-ytick" text-anchor="end">' + (pLo + (pHi - pLo) * (1 - g / 4)).toFixed(0) + '</text>';
  }
  [['p', 'bz-line-pre'], ['c', 'bz-line']].forEach(pair => {
    const pts = [];
    seq.forEach((r, i) => { if (r[pair[0]] > 0) pts.push(xc(i + 1).toFixed(1) + ',' + yP(r[pair[0]]).toFixed(1)); });
    if (pts.length > 1) svg += '<polyline points="' + pts.join(' ') + '" class="' + pair[1] + '"/>';
  });
  seq.forEach((r, i) => { if (r.c > 0) svg += '<circle cx="' + xc(i + 1).toFixed(1) + '" cy="' + yP(r.c).toFixed(1) + '" r="2.4" class="bz-dot"/>'; });
  for (let m = 1; m <= N; m++) svg += '<text x="' + xc(m).toFixed(1) + '" y="' + (H - 10) + '" class="bz-xtick" text-anchor="middle">' + m + '</text>';
  svg += '</svg>';
  $('#biz-asp-chart').innerHTML = '<div class="bz-asp-drill-h">' + esc(title) + '</div>' + svg +
    '<div class="bz-asp-leg"><span class="bz-leg"><i class="bz-line"></i>本期</span><span class="bz-leg"><i class="bz-line-pre2"></i>同期</span></div>';
}

function renderAspDrillOpts() {
  const cats = bizData.cats || [];
  const cd = bizUnit.catDetail || {};
  const { cat, ser, kg } = bizAspPath;
  // 品类：点击 chip
  $('#biz-asp-cat').innerHTML = '<button class="biz-chip' + (!cat ? ' active' : '') + '" onclick="aspPick(\'\',\'\',\'\')">整体</button>' +
    cats.map(c => '<button class="biz-chip' + (cat === c ? ' active' : '') + '" onclick="aspPick(\'' + esc(c) + '\',\'\',\'\')">' + esc(c) + '</button>').join('');
  // 系列：选中品类后出现
  const sers = cat && cd[cat] ? (cd[cat].series || []).map(x => x.name) : [];
  $('#biz-asp-ser').innerHTML = cat
    ? '<span class="bz-asp-l2">系列</span>' + '<button class="biz-chip sm' + (!ser ? ' active' : '') + '" onclick="aspPick(\'' + esc(cat) + '\',\'\',\'\')">全部</button>' + sers.map(x => '<button class="biz-chip sm' + (ser === x ? ' active' : '') + '" onclick="aspPick(\'' + esc(cat) + '\',\'' + esc(x) + '\',\'\')">' + esc(x) + '</button>').join('')
    : '';
  // kg：选中品类后出现（有系列时再过滤到该系列的 kg）
  const kgs = cat && cd[cat] ? (cd[cat].kgs || []).filter(k => !ser || (k.series || []).some(x => x.name === ser)).map(k => k.kg) : [];
  $('#biz-asp-kg').innerHTML = cat
    ? '<span class="bz-asp-l2">kg</span>' + '<button class="biz-chip sm' + (!kg ? ' active' : '') + '" onclick="aspPick(\'' + esc(cat) + '\',\'' + esc(ser || '') + '\',\'\')">全部</button>' + kgs.map(k => '<button class="biz-chip sm' + (kg === k ? ' active' : '') + '" onclick="aspPick(\'' + esc(cat) + '\',\'' + esc(ser || '') + '\',\'' + esc(k) + '\')">' + esc(k) + '</button>').join('')
    : '';
}

function aspPick(cat, ser, kg) {
  bizAspPath.cat = cat; bizAspPath.ser = ser; bizAspPath.kg = kg;
  renderAspDrillOpts();
  const seq = aspSeries(cat, ser, kg);
  const label = [cat, ser, kg].filter(Boolean).join(' / ') || '整体';
  renderAspChart(seq, label + ' · 均价趋势');
  const ytd = seq.reduce((o, r) => { if (r.c > 0) { o.c += r.c; o.cq++; } if (r.p > 0) { o.p += r.p; o.pq++; } return o; }, { c: 0, p: 0, cq: 0, pq: 0 });
  const avgC = ytd.cq ? ytd.c / ytd.cq : 0, avgP = ytd.pq ? ytd.p / ytd.pq : 0;
  const yy = avgP ? (avgC / avgP - 1) : 0;
  $('#biz-asp-side').innerHTML =
    '<div class="bz-asp-card"><div class="bz-asp-lbl">' + esc(label) + '</div><div class="bz-asp-val">' + avgC.toFixed(1) + '</div><div class="bz-asp-sub ' + (yy > 0 ? 'up' : 'down') + '">同比 ' + (yy > 0 ? '+' : '') + (yy * 100).toFixed(1) + '%</div></div>' +
    '<div class="bz-asp-card dim"><div class="bz-asp-lbl">同期均价</div><div class="bz-asp-val">' + avgP.toFixed(1) + '</div><div class="bz-asp-sub">美元/台</div></div>';
}

function aspSeries(cat, ser, kg) {
  const s = bizUnit.series.cur;
  const csm = bizUnit.catSeriesMon || {};
  if (cat && ser && csm[cat] && csm[cat][ser]) {
    return csm[cat][ser].mon.map(m => ({ c: m.c_qty ? m.c_rev * 10000 / m.c_qty : 0, p: m.p_qty ? m.p_rev * 10000 / m.p_qty : 0 }));
  }
  if (cat && csm[cat]) {
    const acc = s.map(() => ({ c_rev: 0, c_qty: 0, p_rev: 0, p_qty: 0 }));
    Object.values(csm[cat]).forEach(sv => sv.mon.forEach((m, i) => { acc[i].c_rev += m.c_rev; acc[i].c_qty += m.c_qty; acc[i].p_rev += m.p_rev; acc[i].p_qty += m.p_qty; }));
    return acc.map(m => ({ c: m.c_qty ? m.c_rev * 10000 / m.c_qty : 0, p: m.p_qty ? m.p_rev * 10000 / m.p_qty : 0 }));
  }
  return s.map(r => ({ c: r.c_price, p: r.p_price }));
}

// ── ② 产品结构 ──
function renderBizStruct() {
  const range = bizRange();
  const full = range.idx.length >= (bizUnit.series.cur.length);
  const cats = bizData.cats || [];
  const cs = bizUnit.cats;
  // 非全量区间时，结构数据不可按区间重算（预聚合口径为 1-8 月），给出说明
  const CCOLORS = { '波轮': '#4a7fd4', '双缸': '#8ea9d0', '滚筒': '#3aa6a0', '洗烘': '#e8a33d', '干衣机': '#c9694f', '其他': '#a9adb6' };

  function donut(map, total, label, isRev) {
    const R = 74, r = 44, cx = 92, cy = 92;
    const arr = cats.map(c => ({ c: c, v: map[c] ? map[c].qty : 0 })).filter(x => x.v > 0.5);
    const T = arr.reduce((a, x) => a + x.v, 0) || 1;
    let ang = -Math.PI / 2;
    let paths = '';
    arr.forEach(x => {
      const a2 = ang + x.v / T * Math.PI * 2;
      const large = (a2 - ang) > Math.PI ? 1 : 0;
      const p = (rad, a) => [(cx + rad * Math.cos(a)).toFixed(2), (cy + rad * Math.sin(a)).toFixed(2)];
      const [x1, y1] = p(R, ang), [x2, y2] = p(R, a2), [x3, y3] = p(r, a2), [x4, y4] = p(r, ang);
      const pct = (x.v / T * 100);
      const tip = x.c + '　' + (isRev ? fmtNum(+(x.v / 10000).toFixed(1)) + ' 万美元' : fmtNum(Math.round(x.v)) + ' 台') + '　' + pct.toFixed(1) + '%';
      paths += '<path d="M' + x1 + ' ' + y1 + ' A' + R + ' ' + R + ' 0 ' + large + ' 1 ' + x2 + ' ' + y2 + ' L' + x3 + ' ' + y3 + ' A' + r + ' ' + r + ' 0 ' + large + ' 0 ' + x4 + ' ' + y4 + ' Z" fill="' + CCOLORS[x.c] + '" class="bz-slice' + (bizCat === x.c ? ' on' : '') + '" onclick="pickBizCat(\'' + esc(x.c) + '\')"><title>' + esc(tip) + '</title></path>';
      // 占比标签（>=4% 才放，避免重叠）
      if (pct >= 4) {
        const mid = (ang + a2) / 2, lr = (R + r) / 2;
        const lx = cx + lr * Math.cos(mid), ly = cy + lr * Math.sin(mid);
        paths += '<text x="' + lx.toFixed(1) + '" y="' + ly.toFixed(1) + '" class="bz-donut-pct" text-anchor="middle" dominant-baseline="middle">' + pct.toFixed(0) + '%</text>';
      }
      ang = a2;
    });
    return '<svg viewBox="0 0 184 184" class="bz-donut">' + paths +
      '<text x="92" y="88" class="bz-donut-t" text-anchor="middle">' + label + '</text>' +
      '<text x="92" y="106" class="bz-donut-v" text-anchor="middle">' + fmtAxis(T) + '</text></svg>';
  }

  function bars(map, total, cat) {
    const arr = cats.map(c => ({ c: c, cur: map.cur[c] ? map.cur[c].qty : 0, pre: map.pre[c] ? map.pre[c].qty : 0 }));
    const T = arr.reduce((a, x) => a + x.cur, 0) || 1;
    return arr.map(x => {
      const w1 = Math.max(0, x.cur / T * 100), w2 = Math.max(0, x.pre / T * 100);
      const d = x.pre ? (x.cur / x.pre - 1) * 100 : 0;
      const pct = (x.cur / T * 100).toFixed(1);
      return '<div class="bz-brow' + (bizCat === x.c ? ' on' : '') + '" onclick="pickBizCat(\'' + esc(x.c) + '\')"><div class="bz-bname">' + esc(x.c) + '<span class="bz-bpct">' + pct + '%</span></div>' +
        '<div class="bz-bbars"><div class="bz-bb cur" style="width:' + w1.toFixed(2) + '%;background:' + CCOLORS[x.c] + '"></div>' +
        '<div class="bz-bb pre" style="width:' + w2.toFixed(2) + '%"></div></div>' +
        '<div class="bz-bval">' + fmtNum(Math.round(x.cur)) + '<span class="bz-bdelta ' + (d > 0 ? 'up' : d < 0 ? 'down' : '') + '">' + (d > 0 ? '+' : '') + d.toFixed(1) + '%</span></div></div>';
    }).join('');
  }

  const mkQ = o => ({ cur: o.cur, pre: o.pre });
  const qmap = { cur: {}, pre: {} }, rmap = { cur: {}, pre: {} };
  cats.forEach(c => {
    qmap.cur[c] = { qty: cs.cur[c].qty }; qmap.pre[c] = { qty: cs.pre[c].qty };
    rmap.cur[c] = { qty: cs.cur[c].rev * 10000 }; rmap.pre[c] = { qty: cs.pre[c].rev * 10000 };
  });

  const tq = cats.reduce((a, c) => a + cs.cur[c].qty, 0) || 1;

  let html = '<div class="bz-cat-legend">' + cats.map(c => '<span class="bz-leg"><i style="background:' + CCOLORS[c] + '"></i>' + esc(c) + '</span>').join('') + '</div>';
  html += '<div class="bz-struct-row"><div class="bz-struct-cell"><div class="bz-struct-h">量 · 当期</div>' + donut(qmap.cur, tq, '销量(台)') + '</div>' +
    '<div class="bz-struct-cell"><div class="bz-struct-h">量 · 去年同期</div>' + donut(qmap.pre, tq, '销量(台)') + '</div>' +
    '<div class="bz-struct-cell"><div class="bz-struct-h">额 · 当期</div>' + donut(rmap.cur, 0, '收入(万$)', true) + '</div>' +
    '<div class="bz-struct-cell"><div class="bz-struct-h">额 · 去年同期</div>' + donut(rmap.pre, 0, '收入(万$)', true) + '</div></div>';
  html += '<div class="bz-struct-row cols2">' +
    '<div class="bz-struct-cell wide"><div class="bz-struct-h">量组成对比（深=本期 / 浅=同期）</div>' + bars(qmap, tq) + '</div>' +
    '<div class="bz-struct-cell wide"><div class="bz-struct-h">额组成对比（深=本期 / 浅=同期）</div>' + bars(rmap, 0) + '</div>' +
    '</div>';

  html += '<div class="bz-drill-title">点击品类下钻：' + cats.map(c =>
    '<button class="biz-chip' + (bizCat === c ? ' active' : '') + '" onclick="pickBizCat(\'' + esc(c) + '\')">' + esc(c) + '</button>').join('') + '</div>';
  if (!full) html = '<div class="bz-warn">当前选择「' + range.label + '」，产品结构与毛利分析为 1-8 月累计口径（预聚合）。点位/月度的结构拆解需源表按月明细，暂未接入。</div>' + html;
  $('#biz-struct').innerHTML = html;

  renderBizDrill();
  renderBizInsight2();
}

function renderBizInsight2() {
  const cs = bizUnit.cats, cats = bizData.cats || [];
  const tips = [];
  let best = null;
  cats.forEach(c => {
    const cq = cs.cur[c].qty, pq = cs.pre[c].qty;
    if (!cq || !pq) return;
    const tcq = cats.reduce((a, x) => a + cs.cur[x].qty, 0), tpq = cats.reduce((a, x) => a + cs.pre[x].qty, 0);
    const cur = cq / tcq, pre = pq / tpq;
    const d = cur - pre;
    if (!best || Math.abs(d) > Math.abs(best.d)) best = { c, d, cur, pre };
  });
  if (best && Math.abs(best.d * 100) >= 1) tips.push({ t: best.c + ' 量占比 ' + (best.d > 0 ? '提升 ' : '下滑 ') + Math.abs(best.d * 100).toFixed(1) + 'pp（' + (best.cur * 100).toFixed(1) + '% vs 同期 ' + (best.pre * 100).toFixed(1) + '%）', d: best.d > 0 ? 'up' : 'down' });
  let g = null, dn = null;
  cats.forEach(c => {
    const cq = cs.cur[c].qty, pq = cs.pre[c].qty;
    if (!pq) return;
    const r = cq / pq - 1;
    if (!g || r > g.r) g = { c, r };
    if (!dn || r < dn.r) dn = { c, r };
  });
  if (g && g.r > 0.05) tips.push({ t: g.c + ' 量增长最快 +' + (g.r * 100).toFixed(0) + '%（' + fmtNum(Math.round(cs.cur[g.c].qty)) + ' 台）', d: 'up' });
  if (dn && dn.r < -0.05) tips.push({ t: dn.c + ' 量下滑 ' + (dn.r * 100).toFixed(0) + '%（' + fmtNum(Math.round(cs.cur[dn.c].qty)) + ' 台）', d: 'down' });
  if (bizCat) {
    const d = (bizUnit.catDetail || {})[bizCat];
    if (d) {
      const kgs = (d.kgs || []).filter(k => k.pq > 0).map(k => ({ k: k.kg, r: k.cq / k.pq - 1 })).sort((a, b) => a.r - b.r);
      if (kgs[0] && kgs[0].r < -0.05) tips.push({ t: bizCat + ' 中 ' + kgs[0].k + 'kg 量下滑 ' + (kgs[0].r * 100).toFixed(0) + '%，为该品类最大拖累段', d: 'down' });
      if (kgs[kgs.length - 1] && kgs[kgs.length - 1].r > 0.05) tips.push({ t: bizCat + ' 中 ' + kgs[kgs.length - 1].k + 'kg 量增长 +' + (kgs[kgs.length - 1].r * 100).toFixed(0) + '%，为该品类主要增量', d: 'up' });
    }
  }
  $('#biz-ins2').innerHTML = bizInsHtml(tips);
}

function renderBizDrill() {
  const box = $('#biz-drill');
  if (!bizCat) { box.innerHTML = '<div class="empty">选择上方品类，查看 kg 分布与系列同比（销量口径）。</div>'; return; }
  const d = bizUnit.catDetail && bizUnit.catDetail[bizCat];
  if (!d) { box.innerHTML = '<div class="empty">无数据</div>'; return; }
  // 按本期销量从大到小排序（kq=0 的同期-only kg 排到最后）
  const kgs = (d.kgs || []).slice().sort((a, b) => (b.cq - a.cq) || (b.pq - a.pq));
  const maxQ = Math.max(1, ...kgs.map(k => Math.max(k.cq, k.pq)));
  const SER_COLORS = ['#4a7fd4', '#e8a33d', '#3aa6a0', '#c9694f', '#8b6cc4', '#5aa356', '#d4718f', '#7b8ba3', '#b8901f', '#4aa3c9', '#a05fa5', '#6b8e23', '#cf6a3a', '#5f7fa8', '#c4a35a'];

  // kg 堆叠柱（按系列分色）
  const allSer = [...new Set(kgs.flatMap(k => (k.series || []).map(s => s.name)))];
  const colorOf = {}; allSer.forEach((s, i) => colorOf[s] = SER_COLORS[i % SER_COLORS.length]);

  const W = 900, H = 250, PL = 52, PR = 12, PT = 14, PB = 42;
  const iw = W - PL - PR, ih = H - PT - PB;
  const n = kgs.length || 1;
  const segW = iw / n, barW = Math.min(46, segW * 0.52);
  const y = v => PT + ih - (v / maxQ) * ih;
  let svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" class="biz-svg">';
  for (let g = 0; g <= 4; g++) {
    const yy = PT + ih * g / 4;
    svg += '<line x1="' + PL + '" y1="' + yy.toFixed(1) + '" x2="' + (W - PR) + '" y2="' + yy.toFixed(1) + '" class="bz-grid"/>';
    svg += '<text x="' + (PL - 6) + '" y="' + (yy + 3.5).toFixed(1) + '" class="bz-ytick" text-anchor="end">' + fmtAxis(maxQ * (1 - g / 4)) + '</text>';
  }
  kgs.forEach((k, i) => {
    const cx = PL + segW * i + segW / 2;
    // 本期堆叠
    let acc = 0;
    const cur = (k.series || []).filter(s => s.cq > 0).sort((a, b) => b.cq - a.cq);
    cur.forEach(s => {
      const h = Math.max(0, (s.cq / maxQ) * ih);
      svg += '<rect x="' + (cx - barW - 1).toFixed(1) + '" y="' + (y(acc + s.cq)).toFixed(1) + '" width="' + barW.toFixed(1) + '" height="' + h.toFixed(1) + '" fill="' + colorOf[s.name] + '"><title>' + esc(s.name + ' ' + k.kg + 'kg 本期 ' + s.cq + '台（同期 ' + s.pq + '）') + '</title></rect>';
      acc += s.cq;
    });
    // 同期堆叠（灰）
    let acc2 = 0;
    (k.series || []).filter(s => s.pq > 0).sort((a, b) => b.pq - a.pq).forEach(s => {
      const h2 = Math.max(0, (s.pq / maxQ) * ih);
      svg += '<rect x="' + (cx + 1).toFixed(1) + '" y="' + (y(acc2 + s.pq)).toFixed(1) + '" width="' + barW.toFixed(1) + '" height="' + h2.toFixed(1) + '" class="bz-pre-stack"><title>' + esc(s.name + ' ' + k.kg + 'kg 同期 ' + s.pq + '台') + '</title></rect>';
      acc2 += s.pq;
    });
    svg += '<text x="' + cx.toFixed(1) + '" y="' + (H - 24) + '" class="bz-xtick" text-anchor="middle">' + esc(k.kg) + 'kg</text>';
    const dd = k.pq ? (k.cq / k.pq - 1) * 100 : 0;
    svg += '<text x="' + cx.toFixed(1) + '" y="' + (H - 10) + '" class="bz-xsub ' + (dd > 0 ? 'up' : dd < 0 ? 'down' : '') + '" text-anchor="middle">' + (dd > 0 ? '+' : '') + dd.toFixed(0) + '%</text>';
  });
  svg += '</svg>';

  // 系列同比：按 kg 分段分色（每行一个系列，本期按 kg 堆叠 / 灰=同期）
  const sers = (d.series || []).slice(0, 14);
  // 该品类所有 kg（排序后用于分色）
  const allKg = kgs.map(k => k.kg);
  const kgColor = {}; allKg.forEach((k, i) => kgColor[k] = KG_COLORS[i % KG_COLORS.length]);
  const maxS = Math.max(1, ...sers.map(s => Math.max(s.cq, s.pq)));
  const SW = 900, SH = 40 + sers.length * 26;
  let svg2 = '<svg viewBox="0 0 ' + SW + ' ' + Math.max(120, SH) + '" class="biz-svg">';
  sers.forEach((s, i) => {
    const yy = 16 + i * 26;
    // 该系列各 kg 的销量分布（从 kg 段反查）
    let x0 = 80;
    kgs.forEach(k => {
      const so = (k.series || []).find(x => x.name === s.name);
      if (!so || !(so.cq > 0)) return;
      const w = Math.max(0, so.cq / maxS * 560);
      if (w > 0) {
        svg2 += '<rect x="' + x0.toFixed(1) + '" y="' + yy + '" width="' + w.toFixed(1) + '" height="11" fill="' + kgColor[k.kg] + '"><title>' + esc(k.kg + 'kg 本期 ' + so.cq + ' 台' + (so.pq ? '（同期 ' + so.pq + '）' : '（同期 0）')) + '</title></rect>';
        x0 += w;
      }
    });
    const w2 = Math.max(0, s.pq / maxS * 560);
    if (w2 > 0) svg2 += '<rect x="80" y="' + (yy + 13) + '" width="' + w2.toFixed(1) + '" height="9" class="bz-pre-stack"><title>' + esc('同期 ' + s.pq + ' 台') + '</title></rect>';
    const dd = s.pq ? (s.cq / s.pq - 1) * 100 : 0;
    svg2 += '<text x="72" y="' + (yy + 9) + '" class="bz-ytick" text-anchor="end">' + esc(s.name) + '</text>';
    svg2 += '<text x="660" y="' + (yy + 9) + '" class="bz-sval">' + fmtNum(s.cq) + '</text>';
    svg2 += '<text x="756" y="' + (yy + 9) + '" class="bz-sdelta ' + (dd > 0 ? 'up' : dd < 0 ? 'down' : '') + '">' + (dd > 0 ? '+' : '') + dd.toFixed(1) + '%</text>';
    svg2 += '<text x="830" y="' + (yy + 9) + '" class="bz-sprice">' + (s.cprice || 0).toFixed(0) + '</text>';
    svg2 += '<text x="884" y="' + (yy + 9) + '" class="bz-sprice2">' + (s.pprice || 0).toFixed(0) + '</text>';
  });
  svg2 += '</svg>';

  const leg = allSer.slice(0, 16).map(s => '<span class="bz-leg"><i style="background:' + colorOf[s] + '"></i>' + esc(s) + '</span>').join('');
  const kgLeg = allKg.map(k => '<span class="bz-leg"><i style="background:' + kgColor[k] + '"></i>' + esc(k) + 'kg</span>').join('');
  box.innerHTML =
    '<div class="bz-drill-head">「' + esc(bizCat) + '」kg 分布（按销量从大到小；左=本期按系列分色 / 右=灰=同期；同期为 0 的也会显示）</div>' +
    '<div class="bz-chart-wrap">' + svg + '</div>' +
    '<div class="bz-leg-wrap">' + leg + '</div>' +
    '<div class="bz-drill-head">系列同比（每行一个系列；本期按 kg 分段分色 / 灰=同期）　' +
    '<span class="bz-hint">系列名 ｜ 本期量 ｜ 同比 ｜ 本期均价 ｜ 同期均价</span></div>' +
    '<div class="bz-chart-wrap">' + svg2 + '</div>' +
    '<div class="bz-leg-wrap">' + kgLeg + '</div>';
}
function pickBizCat(c) { bizCat = (bizCat === c) ? null : c; renderBizStruct(); }

// ── ③ 毛利分析 ──
function renderBizGm() {
  // 大区层：先列国家贡献（Leo 2026-09-20 要求：看大区先看哪个国家在做负贡献）
  if (bizUnit.kind === 'region') {
    const rows = (bizRegion.units || []).filter(u => u.kind === 'country').map(u => {
      const g = u.gmAll;
      const r = (g.items || []).reduce((a, x) => a + x.curRev, 0), gr = (g.items || []).reduce((a, x) => a + x.curGm, 0);
      const r0 = (g.items || []).reduce((a, x) => a + x.preRev, 0), g0 = (g.items || []).reduce((a, x) => a + x.preGm, 0);
      const cur = r ? gr / r : 0, pre = r0 ? g0 / r0 : 0;
      const eff = (g.items || []).reduce((a, x) => a + (x.eff || 0), 0);
      return { key: u.key, label: u.label, cur, pre, dg: (cur - pre) * 100, eff, r };
    }).filter(x => x.r > 0).sort((a, b) => a.eff - b.eff);
    const maxAbs = Math.max(1, ...rows.map(x => Math.abs(x.eff)));
    $('#biz-gm-countries').innerHTML = '<div class="bz-gm-block-h">各国毛利贡献（可比机型口径，点击下钻）</div>' +
      rows.map(x => {
        const w = Math.max(0, Math.abs(x.eff) / maxAbs * 100);
        return '<div class="bz-gmc-row" onclick="pickBizCountry(\'' + esc(x.key).replace(/'/g, "\\'") + '\')">' +
          '<div class="bz-gmc-name">' + esc(x.label) + '</div>' +
          '<div class="bz-gmc-rate">' + (x.cur * 100).toFixed(1) + '%<span class="bz-gmc-pre"> / ' + (x.pre * 100).toFixed(1) + '%</span></div>' +
          '<div class="bz-gmc-dg ' + (x.dg > 0 ? 'up' : 'down') + '">' + (x.dg > 0 ? '+' : '') + x.dg.toFixed(1) + 'pp</div>' +
          '<div class="bz-gmc-bar-wrap"><div class="bz-gmc-bar ' + (x.eff < 0 ? 'neg' : 'pos') + '" style="width:' + w.toFixed(1) + '%"></div></div>' +
          '<div class="bz-gmc-eff">' + (x.eff > 0 ? '+' : '') + x.eff.toFixed(1) + '</div>' +
          '</div>';
      }).join('') +
      '<div class="bz-note">「可比影响」= 该国内所有可比机型（单期≥100台）影响之和，单位万美元。负数=拖累，正数=改善。</div>';
  } else {
    $('#biz-gm-countries').innerHTML = '';
  }

  const cats = bizData.cats || [];
  const cur = {}, pre = {};
  const gmCat = bizUnit.gmCat || {};
  const agg = (g) => {
    const r = (g.items || []).reduce((a, x) => a + x.curRev, 0);
    const gr = (g.items || []).reduce((a, x) => a + x.curGm, 0);
    const r0 = (g.items || []).reduce((a, x) => a + x.preRev, 0);
    const g0 = (g.items || []).reduce((a, x) => a + x.preGm, 0);
    return { r: r, g: gr, r0: r0, g0: g0, cur: r ? gr / r : 0, pre: r0 ? g0 / r0 : 0 };
  };
  const rows = [{ label: bizUnit.label + '整体', a: agg(bizUnit.gmAll) }];
  cats.forEach(c => { if (gmCat[c]) rows.push({ label: c, a: agg(gmCat[c]) }); });

  $('#biz-gm-cats').innerHTML = '<div class="bz-gmrow head"><span>品类</span><span>当期毛利率</span><span>同期毛利率</span><span>变化</span><span>当期收入(万$)</span><span>毛利额变化(万$)</span></div>' +
    rows.map((x, i) => {
      const d = (x.a.cur - x.a.pre) * 100;
      const dg = x.a.g - x.a.g0;
      const clickable = i > 0;
      return '<div class="bz-gmrow' + (clickable ? ' clickable' : '') + (clickable && bizGmCat === x.label ? ' active' : '') + '"' +
        (clickable ? ' onclick="pickBizGmCat(\'' + esc(x.label) + '\')"' : '') + '>' +
        '<span class="bz-gmname">' + esc(x.label) + '</span>' +
        '<span class="bz-gmcur">' + (x.a.cur * 100).toFixed(1) + '%</span>' +
        '<span class="bz-gmpre">' + (x.a.pre * 100).toFixed(1) + '%</span>' +
        '<span class="bz-gmd ' + (d > 0.05 ? 'up' : d < -0.05 ? 'down' : 'flat') + '">' + (d > 0 ? '+' : '') + d.toFixed(1) + 'pp</span>' +
        '<span class="bz-gmrev">' + fmtNum(+x.a.r.toFixed(1)) + '</span>' +
        '<span class="bz-gmgm ' + (dg > 0 ? 'up' : dg < 0 ? 'down' : '') + '">' + (dg > 0 ? '+' : '') + fmtNum(+dg.toFixed(1)) + '</span>' +
        '</div>';
    }).join('');

  renderBizGmDrill();
  renderBizInsight3();
}

function renderBizInsight3() {
  const tips = [];
  const a = (bizUnit.gmAll.items || []).reduce((o, x) => { o.r += x.curRev; o.g += x.curGm; o.r0 += x.preRev; o.g0 += x.preGm; o.eff += (x.eff || 0); return o; }, { r: 0, g: 0, r0: 0, g0: 0, eff: 0 });
  const cur = a.r ? a.g / a.r : 0, pre = a.r0 ? a.g0 / a.r0 : 0;
  const dg = (cur - pre) * 100;
  if (Math.abs(dg) >= 0.3) tips.push({ t: bizUnit.label + ' 毛利率 ' + (dg > 0 ? '改善 ' : '恶化 ') + Math.abs(dg).toFixed(1) + 'pp（' + (cur * 100).toFixed(1) + '% vs 同期 ' + (pre * 100).toFixed(1) + '%），可比影响 ' + (a.eff > 0 ? '+' : '') + a.eff.toFixed(1) + ' 万美元', d: dg > 0 ? 'up' : 'down' });
  if (bizUnit.kind === 'region' && bizRegion.units) {
    const rows = bizRegion.units.filter(u => u.kind === 'country').map(u => {
      const g = u.gmAll;
      const r = (g.items || []).reduce((a2, x) => a2 + x.curRev, 0), gr = (g.items || []).reduce((a2, x) => a2 + x.curGm, 0);
      const r0 = (g.items || []).reduce((a2, x) => a2 + x.preRev, 0), g0 = (g.items || []).reduce((a2, x) => a2 + x.preGm, 0);
      const eff = (g.items || []).reduce((a2, x) => a2 + (x.eff || 0), 0);
      return { l: u.label, cur: r ? gr / r : 0, pre: r0 ? g0 / r0 : 0, eff };
    }).filter(x => x.eff < -0.5).sort((a2, b2) => a2.eff - b2.eff);
    if (rows[0]) tips.push({ t: rows[0].l + ' 毛利恶化最严重（可比影响 ' + rows[0].eff.toFixed(1) + ' 万美元，毛利率 ' + (rows[0].cur * 100).toFixed(1) + '% vs 同期 ' + (rows[0].pre * 100).toFixed(1) + '%）', d: 'down' });
    if (rows[1]) tips.push({ t: rows[1].l + ' 同样为负贡献（' + rows[1].eff.toFixed(1) + ' 万美元）', d: 'down' });
  }
  const cats = bizData.cats || [];
  const gmCat = bizUnit.gmCat || {};
  let worst = null;
  cats.forEach(c => {
    const g = gmCat[c]; if (!g) return;
    const r = (g.items || []).reduce((a2, x) => a2 + x.curRev, 0), gr = (g.items || []).reduce((a2, x) => a2 + x.curGm, 0);
    const r0 = (g.items || []).reduce((a2, x) => a2 + x.preRev, 0), g0 = (g.items || []).reduce((a2, x) => a2 + x.preGm, 0);
    const cur2 = r ? gr / r : 0, pre2 = r0 ? g0 / r0 : 0;
    const d2 = (cur2 - pre2) * 100;
    if (!worst || d2 < worst.d) worst = { c, d: d2, cur: cur2, pre: pre2 };
  });
  if (worst && worst.d < -0.5) tips.push({ t: worst.c + ' 毛利率恶化 ' + Math.abs(worst.d).toFixed(1) + 'pp（' + (worst.cur * 100).toFixed(1) + '% vs 同期 ' + (worst.pre * 100).toFixed(1) + '%），为恶化最大品类', d: 'down' });
  $('#biz-ins3').innerHTML = bizInsHtml(tips);
}

function renderBizGmDrill() {
  const box = $('#biz-gm-drill');
  if (!bizGmCat) {
    box.innerHTML = '<div class="empty">点击上方品类，查看「可比机型」正/负贡献排行。</div>';
    return;
  }
  const g = (bizUnit.gmCat || {})[bizGmCat];
  if (!g) { box.innerHTML = '<div class="empty">无数据</div>'; return; }
  // 完全可比 = 产品类别+系列+公斤 完全相等且两期都有量
  const comparable = (g.items || []).filter(x => x.comparable);
  // 大盘毛利额，用于算「对大盘实际影响」
  const totalGm = Math.abs(comparable.reduce((a, x) => a + (x.curGm || 0), 0)) || 1;
  const totalGm0 = Math.abs(comparable.reduce((a, x) => a + (x.preGm || 0), 0)) || 1;
  // 「有意义样本」：两期毛利额合计占大盘 ≥1%，剔除只卖几台的失真样本
  const meaningful = comparable.filter(x => ((Math.abs(x.curGm) + Math.abs(x.preGm)) / (totalGm + totalGm0) * 2) >= 0.01 || (x.curRev + x.preRev) / 2 >= 100);
  const pool = meaningful.length >= 3 ? meaningful : comparable.filter(x => (x.curQty >= 100 || x.preQty >= 100));
  // 按「对大盘实际影响」= |毛利额变化| 排序
  const byImpact = (a, b) => Math.abs(b.mgm) - Math.abs(a.mgm);
  const neg = pool.slice().filter(x => x.mgm < 0).sort(byImpact).slice(0, 10);
  const pos = pool.slice().filter(x => x.mgm > 0).sort(byImpact).slice(0, 10);
  const newM = (g.items || []).filter(x => !x.comparable && x.curQty > 0 && x.preQty === 0).sort((a, b) => b.curQty - a.curQty).slice(0, 8);
  const gone = (g.items || []).filter(x => !x.comparable && x.preQty > 0 && x.curQty === 0).sort((a, b) => b.preQty - a.preQty).slice(0, 8);
  // 被剔除的失真样本（信息透明）
  const noise = comparable.filter(x => pool.indexOf(x) < 0).sort((a, b) => Math.abs(b.mgm) - Math.abs(a.mgm)).slice(0, 6);

  const maxAbs = Math.max(1, ...pool.map(x => Math.abs(x.mgm)), 1);
  function row(x, kind) {
    const w = Math.max(0, Math.abs(x.mgm) / maxAbs * 100);
    const cls = x.mgm < 0 ? 'neg' : 'pos';
    const share = (Math.abs(x.curGm) / totalGm * 100).toFixed(1);
    return '<div class="bz-gmitem">' +
      '<div class="bz-gm-i1">' + esc(x.series) + '</div>' +
      '<div class="bz-gm-i2">' + esc(x.kg) + 'kg</div>' +
      '<div class="bz-gm-i3">' + fmtNum(x.curQty) + '<span class="bz-gm-vs">/' + fmtNum(x.preQty) + '</span></div>' +
      '<div class="bz-gm-i4">' + (x.curGmr * 100).toFixed(1) + '%<span class="bz-gm-vs">/' + (x.preGmr * 100).toFixed(1) + '%</span></div>' +
      '<div class="bz-gm-i5 ' + (x.dGmr > 0 ? 'up' : 'down') + '">' + (x.dGmr > 0 ? '+' : '') + x.dGmr.toFixed(1) + 'pp</div>' +
      '<div class="bz-gm-i6"><div class="bz-gm-bar ' + cls + '" style="width:' + w.toFixed(1) + '%"></div></div>' +
      '<div class="bz-gm-i7">' + (x.mgm > 0 ? '+' : '') + x.mgm.toFixed(1) + '</div>' +
      '<div class="bz-gm-i8">' + share + '%</div>' +
      '</div>';
  }
  const head = '<div class="bz-gmitem head"><div>系列</div><div>kg</div><div>本期/同期量</div><div>毛利率 今/去</div><div>变化</div><div>对大盘影响</div><div>毛利额Δ(万$)</div><div>毛利额占比</div></div>';

  box.innerHTML =
    '<div class="bz-gm-block"><div class="bz-gm-block-h neg">负贡献 Top（拖累大盘毛利）</div>' + head + neg.map(x => row(x)).join('') + '</div>' +
    '<div class="bz-gm-block"><div class="bz-gm-block-h pos">正贡献 Top（改善大盘毛利）</div>' + head + pos.map(x => row(x)).join('') + '</div>' +
    (noise.length ? '<div class="bz-gm-block"><div class="bz-gm-block-h">已剔除的失真样本（两期毛利额占大盘 <1%，仅卖几台）</div><div class="bz-tags">' + noise.map(x => '<span class="bz-tag">' + esc(x.series + ' · ' + x.kg + 'kg') + '　本期 ' + fmtNum(x.curQty) + ' 台 / 同期 ' + fmtNum(x.preQty) + ' 台　毛利率 ' + (x.curGmr * 100).toFixed(1) + '% / ' + (x.preGmr * 100).toFixed(1) + '%</span>').join('') + '</div></div>' : '') +
    '<div class="bz-gm-block"><div class="bz-gm-block-h">本期新增机型（同期无销量，不可比）</div>' +
    (newM.length ? '<div class="bz-tags">' + newM.map(x => '<span class="bz-tag">' + esc(x.series + ' · ' + x.kg + 'kg') + '　' + fmtNum(x.curQty) + '台　毛利率 ' + (x.curGmr * 100).toFixed(1) + '%</span>').join('') + '</div>' : '<div class="empty">无</div>') + '</div>' +
    '<div class="bz-gm-block"><div class="bz-gm-block-h">同期有、本期退出机型</div>' +
    (gone.length ? '<div class="bz-tags">' + gone.map(x => '<span class="bz-tag">' + esc(x.series + ' · ' + x.kg + 'kg') + '　同期 ' + fmtNum(x.preQty) + '台　同期毛利率 ' + (x.preGmr * 100).toFixed(1) + '%</span>').join('') + '</div>' : '<div class="empty">无</div>') + '</div>' +
    '<div class="bz-note">「对大盘影响」= 该机型毛利额变化（本期−同期，万美元），按绝对值排序。只保留两期毛利额合计占大盘 ≥1% 的机型——收入占比大、毛利率变化的才是真问题；只卖 1-2 台的清仓样本已单独列在下方「失真样本」。毛利额占比 = 该机型本期毛利额 / 大盘毛利额。</div>';
}
function pickBizGmCat(c) { bizGmCat = (bizGmCat === c) ? null : c; renderBizGm(); }

// ── ⑤ 利润额 ──
function renderBizProfit() {
  const range = bizRange();
  // 汇总当前单位的逐月利润
  const s = bizUnit.series.cur;
  const c_profit = range.idx.reduce((a, i) => a + (s[i] ? s[i].c_profit : 0), 0);
  const p_profit = range.idx.reduce((a, i) => a + (s[i] ? s[i].p_profit : 0), 0);

  // 逐月利润柱状图（以 0 为中线）
  const months = bizData.months || [];
  const maxAbs = Math.max(1, ...range.idx.map(i => Math.max(Math.abs(s[i] ? s[i].c_profit : 0), Math.abs(s[i] ? s[i].p_profit : 0))));
  const W = 900, H = 220, PL = 56, PR = 14, PT = 14, PB = 34;
  const iw = W - PL - PR, ih = H - PT - PB;
  const zeroY = PT + ih / 2;
  const segW = iw / Math.max(1, range.idx.length);
  const barW = segW * 0.32;
  let svg = '<svg class="biz-svg" viewBox="0 0 ' + W + ' ' + H + '">';
  // 0 线
  svg += '<line x1="' + PL + '" y1="' + zeroY.toFixed(1) + '" x2="' + (W - PR) + '" y2="' + zeroY.toFixed(1) + '" class="bz-grid" style="stroke-width:1.5;stroke:#9aa3b2"/>';
  // 网格
  for (let g = -2; g <= 2; g++) {
    if (g === 0) continue;
    const y = zeroY + (ih / 2) * (g / 2);
    svg += '<line x1="' + PL + '" y1="' + y.toFixed(1) + '" x2="' + (W - PR) + '" y2="' + y.toFixed(1) + '" class="bz-grid"/>';
    svg += '<text x="' + (PL - 6) + '" y="' + (y + 3.5).toFixed(1) + '" class="bz-ytick" text-anchor="end">' + (maxAbs * (-g / 2)).toFixed(0) + '</text>';
  }
  range.idx.forEach((i, k) => {
    const r = s[i]; if (!r) return;
    const cx = PL + segW * k + segW / 2;
    const h1 = (r.c_profit / maxAbs) * (ih / 2), h2 = (r.p_profit / maxAbs) * (ih / 2);
    const y1 = r.c_profit >= 0 ? zeroY - h1 : zeroY;
    const y2 = r.p_profit >= 0 ? zeroY - h2 : zeroY;
    const neg = r.c_profit < 0;
    const isDim = bizPeriod.kind !== 'ytd' && bizPeriod.kind === 'm' && bizPeriod.m !== (i + 1);
    svg += '<rect x="' + (cx - barW - 1).toFixed(1) + '" y="' + y1.toFixed(1) + '" width="' + barW.toFixed(1) + '" height="' + Math.abs(h1).toFixed(1) + '" class="' + (neg ? 'bz-bar-neg' : 'bz-bar') + (isDim ? ' dim' : '') + '"/>';
    if (r.p_profit !== 0) svg += '<rect x="' + (cx + 1).toFixed(1) + '" y="' + y2.toFixed(1) + '" width="' + barW.toFixed(1) + '" height="' + Math.abs(h2).toFixed(1) + '" class="bz-bar-pre"/>';
    svg += '<text x="' + cx.toFixed(1) + '" y="' + (H - 12) + '" class="bz-xtick" text-anchor="middle">' + months[i].slice(5) + '</text>';
  });
  svg += '</svg>';

  // 大区层：国家贡献（以 0 为中线）
  let countryHtml = '';
  if (bizUnit.kind === 'region') {
    const rows = (bizRegion.units || []).filter(u => u.kind === 'country').map(u => {
      const p = range.idx.reduce((a, i) => a + (u.series.cur[i] ? u.series.cur[i].c_profit : 0), 0);
      const p0 = range.idx.reduce((a, i) => a + (u.series.cur[i] ? u.series.cur[i].p_profit : 0), 0);
      return { key: u.key, label: u.label, cur: p, pre: p0 };
    }).filter(x => Math.abs(x.cur) > 0.01 || Math.abs(x.pre) > 0.01).sort((a, b) => a.cur - b.cur);
    const maxC = Math.max(1, ...rows.map(x => Math.abs(x.cur)));
    countryHtml = '<div class="bz-gm-block-h">各国利润贡献（万美元，点击下钻）</div>' +
      '<div class="bz-profit-countries">' + rows.map(x => {
        const w = Math.max(0, Math.abs(x.cur) / maxC * 100);
        const neg = x.cur < 0;
        return '<div class="bz-profit-row" onclick="pickBizCountry(\'' + esc(x.key).replace(/'/g, "\\'") + '\')">' +
          '<div class="bz-profit-name">' + esc(x.label) + '</div>' +
          '<div class="bz-profit-bar-wrap"><div class="bz-profit-bar ' + (neg ? 'neg' : 'pos') + '" style="width:' + w.toFixed(1) + '%"></div></div>' +
          '<div class="bz-profit-val ' + (neg ? 'neg' : 'pos') + '">' + (x.cur > 0 ? '+' : '') + x.cur.toFixed(1) + '</div>' +
          '</div>';
      }).join('') + '</div>';
  }

  // 产品层：正负 Top10（利润额）
  const items = (bizUnit.gmAll.items || []).filter(x => Math.abs(x.curProfit) > 0.01 || Math.abs(x.preProfit) > 0.01);
  const negT = items.slice().filter(x => x.curProfit < 0).sort((a, b) => a.curProfit - b.curProfit).slice(0, 10);
  const posT = items.slice().filter(x => x.curProfit > 0).sort((a, b) => b.curProfit - a.curProfit).slice(0, 10);
  const maxP = Math.max(1, ...items.map(x => Math.abs(x.curProfit)));
  function prow(x) {
    const w = Math.max(0, Math.abs(x.curProfit) / maxP * 100);
    const neg = x.curProfit < 0;
    return '<div class="bz-profit-prow">' +
      '<div class="bz-profit-pname">' + esc(x.series + ' · ' + x.kg + 'kg') + '</div>' +
      '<div class="bz-profit-pqty">' + fmtNum(x.curQty) + ' 台</div>' +
      '<div class="bz-profit-bar-wrap"><div class="bz-profit-bar ' + (neg ? 'neg' : 'pos') + '" style="width:' + w.toFixed(1) + '%"></div></div>' +
      '<div class="bz-profit-val ' + (neg ? 'neg' : 'pos') + '">' + (x.curProfit > 0 ? '+' : '') + x.curProfit.toFixed(1) + '</div>' +
      '</div>';
  }

  $('#biz-profit-meta').textContent = bizUnit.label + ' · ' + range.label + ' · 本期 ' + (c_profit >= 0 ? '+' : '') + c_profit.toFixed(0) + ' 万美元 · 同期 ' + (p_profit >= 0 ? '+' : '') + p_profit.toFixed(0) + ' 万美元';
  $('#biz-profit').innerHTML =
    '<div class="bz-gm-block-h">逐月利润（以 0 为中线）</div>' +
    '<div class="bz-chart-wrap">' + svg + '</div>' +
    countryHtml +
    '<div class="bz-profit-grid">' +
    '<div><div class="bz-gm-block-h neg">负贡献 Top10（拖累利润）</div>' + (negT.length ? negT.map(prow).join('') : '<div class="empty">无</div>') + '</div>' +
    '<div><div class="bz-gm-block-h pos">正贡献 Top10（贡献利润）</div>' + (posT.length ? posT.map(prow).join('') : '<div class="empty">无</div>') + '</div>' +
    '</div>' +
    '<div class="bz-note">利润额 = 毛利额 − 费用额，单位万美元。负值柱向下（亏损），正值柱向上（盈利）。</div>';
}



// ===== 市场分析（大区 → 点位/国家）=====
// 点位目录：按业务口径预置（东盟=各国；中东非=国家 + 海外办事处 + 大区综合，含印度）。
// 档案 json 文件放在 market-data/{region}/{点位}.json，country 字段=点位名即匹配；
// 尚未接入档案的点位显示「待接入」占位，不会凭空出现不实内容。
const REGION_SLOTS = {
  '东盟':   ['泰国', '越南', '马来西亚', '印度尼西亚', '菲律宾', '新加坡'],
  '中东非': ['南非', '迪拜', '西非', '沙特', '埃及', '东非', '阿尔及利亚', '中东非综合', '印度', '27年产品规划']
};
const REGION_ORDER = ['东盟', '中东非'];
let marketCacheData = null;
let marketRegion = null;   // 当前大区
let marketSlot = null;     // 当前点位
async function loadMarket(region) {
  if (region) marketRegion = region;
  if (!marketCacheData) {
    try {
      const d = await api('/api/market');
      marketCacheData = d.regions || [];
    } catch (e) { marketCacheData = []; }
  }
  renderMarket();
}
function selectMarketRegion(r) {
  marketRegion = r;
  marketSlot = null;                 // 切换大区后回到未选点位
  renderMarket();
}
function selectMarketSlot(s) {
  marketSlot = s;
  renderMarket();
}
// 取某大区在数据目录里已接入的档案（country == 点位名）
function regionData(name) {
  const r = (marketCacheData || []).find(x => x.name === name);
  return (r && r.countries) ? r.countries : [];
}
function renderMarket() {
  // 1) 大区 tabs：只用业务预置的大区，去掉「全球」
  const regions = marketCacheData || [];
  const available = regions.map(r => r.name);
  // 预置大区在前，数据目录中出现的新大区追加在后
  const allTabs = [];
  REGION_ORDER.forEach(r => { if (available.includes(r) || REGION_SLOTS[r]) allTabs.push(r); });
  regions.forEach(r => { if (!allTabs.includes(r.name)) allTabs.push(r.name); });
  if (!allTabs.length) { allTabs.push('中东非'); }
  if (!allTabs.includes(marketRegion)) {
    // 默认优先选「已有档案」的大区（如有），其次第一个大区
    marketRegion = allTabs.find(r => regionData(r).length) || allTabs[0];
  }

  $('#market-region-tabs').innerHTML = allTabs.map(r =>
    '<button class="region-tab ' + (r === marketRegion ? 'active' : '') + '" onclick="selectMarketRegion(\'' + r + '\')">' + r + '</button>'
  ).join('');

  // 2) 点位菜单（下一级）
  const slots = REGION_SLOTS[marketRegion] || [];
  const navBox = $('#market-slot-nav');
  const box = $('#market-countries');
  const empty = $('#market-empty');
  if (slots.length) {
    navBox.hidden = false;
    navBox.innerHTML = slots.map(s =>
      '<button class="slot-chip ' + (s === marketSlot ? 'active' : '') + '" onclick="selectMarketSlot(\'' + s + '\')">' + esc(s) + '</button>'
    ).join('');
  } else {
    navBox.hidden = true;
  }

  // 3) 档案展示
  box.innerHTML = '';
  empty.hidden = true;
  if (!slots.length) {
    const found = regionData(marketRegion);
    if (found.length) { empty.hidden = false; empty.textContent = '该大区档案直接展示：'; box.innerHTML = found.map(c => renderCountryCard(c, marketRegion)).join(''); }
    else { empty.hidden = false; empty.textContent = '该大区暂无档案。'; }
    return;
  }
  if (!marketSlot) {
    // 未选点位：默认选中第一个已有档案的点位，否则提示点选
    const firstHas = slots.find(s => regionData(marketRegion).some(c => c.country === s));
    if (firstHas) { marketSlot = firstHas; }
    else { empty.hidden = false; empty.textContent = '点击上方点位查看该国家/办事处的市场档案。'; return; }
  }
  const profile = regionData(marketRegion).find(c => c.country === marketSlot);
  if (profile) {
    box.innerHTML = renderCountryCard(profile, marketRegion);
  } else {
    empty.hidden = false;
    empty.innerHTML = '「' + esc(marketSlot) + '」市场数据待接入。新一期数据落地后此点位会自动出现。';
  }
}
function renderCountryCard(c, regionName) {
  const report = c.reportUrl ? '<a class="btn btn-sm" href="' + esc(c.reportUrl) + '" target="_blank" rel="noopener">查看完整报告 →</a>' : '';
  // 卡片顶部 KPI 只显示前 2 个（避免与下方完整报告重复——完整报告里图表全量）
  const topKpis = (c.kpis || []).slice(0, 2);
  const restKpis = (c.kpis || []).slice(2);
  const kpiTopHtml = topKpis.length
    ? '<div class="summary-grid" style="grid-template-columns:repeat(auto-fill,minmax(220px,1fr));margin-bottom:0">' + topKpis.map(k =>
        '<div class="stat-card"><div class="label">' + esc(k.label) + '</div><div class="value" style="font-size:22px">' + esc(k.value) + '</div>' +
        (k.change ? '<div class="sub">' + esc(k.change) + '</div>' : '') + '</div>'
      ).join('') + '</div>'
    : '';
  const kpiMoreHtml = restKpis.length
    ? '<details class="market-more"><summary>展开其余 ' + restKpis.length + ' 个 KPI / 洞察 / 行动建议</summary><div class="market-cols">' +
      (restKpis.length
        ? '<div><div class="market-block-title">更多 KPI</div><div class="summary-grid" style="grid-template-columns:repeat(auto-fill,minmax(150px,1fr))">' + restKpis.map(k =>
            '<div class="stat-card"><div class="label">' + esc(k.label) + '</div><div class="value" style="font-size:18px">' + esc(k.value) + '</div>' +
            (k.change ? '<div class="sub">' + esc(k.change) + '</div>' : '') + '</div>'
          ).join('') + '</div></div>' : '') +
      ((c.insights && c.insights.length)
        ? '<div><div class="market-block-title">市场洞察（' + c.insights.length + '）</div><ol class="market-insights">' + c.insights.map(i =>
            '<li><b>' + esc(i.n + '. ' + i.title) + '</b><div class="meta">' + esc(i.detail) + '</div></li>'
          ).join('') + '</ol></div>' : '') +
      ((c.suggestions && c.suggestions.length)
        ? '<div><div class="market-block-title">行动建议（' + c.suggestions.length + '）</div><ul class="market-suggestions">' + c.suggestions.map(s => {
            const lv = (s.level || '').toUpperCase();
            return '<li><span class="tag ' + (lv === 'P0' ? 'tag-p0' : lv === 'P1' ? 'tag-p1' : lv === 'P2' ? 'tag-p2' : 'tag-p3') + '">' + esc(lv) + '</span><div class="meta"><b>' + esc(s.title) + '</b> · ' + esc(s.detail) + '</div></li>';
          }).join('') + '</ul></div>' : '') +
      '</div></details>'
    : '';
  // 数据出处徽章（GfK / 欧睿 / 出口数据 …）
  const srcBadge = c.sourceType ? '<span class="tag src-badge">' + esc(c.sourceType) + '</span>' : '';
  const regionBread = regionName ? '<span class="tag tag-done">' + esc(regionName) + '</span>' : '';
  return '<div class="card market-card">' +
    '<div class="market-head">' +
      '<div><h3 class="market-country">' + srcBadge + ' ' + esc(c.country) + (c.market ? '<span class="meta"> · ' + esc(c.market) + '</span>' : '') + '</h3>' +
      '<div class="meta">' + regionBread + (c.period ? '统计期 ' + esc(c.period) : '') + (c.updated ? ' · 更新 ' + esc(c.updated) : '') + (c.source && c.source !== c.sourceType ? ' · ' + esc(c.source) : '') + '</div>' +
      '</div><div>' + report + '</div>' +
    '</div>' +
    (c.headline ? '<div class="market-headline">' + esc(c.headline) + '</div>' : '') +
    kpiTopHtml + kpiMoreHtml +
    (c.reportUrl ? '<div class="market-report-block">' +
      '<div class="market-block-title">完整报告（' + ((c.kpis && c.kpis.length) || 0) + ' 项 KPI / 5-7 洞察 / 5-6 建议 全收录）</div>' +
      '<iframe class="market-report-frame" src="' + esc(c.reportUrl) + '" loading="lazy" onload="fitMarketReport(this)"></iframe>' +
    '</div>' : '') +
  '</div>';
}
// 自适应报告 iframe 高度（同源允许读取 contentDocument）
function fitMarketReport(iframe) {
  try {
    const doc = iframe.contentDocument || (iframe.contentWindow && iframe.contentWindow.document);
    if (!doc) return;
    const h = Math.max(
      doc.documentElement.scrollHeight,
      doc.body ? doc.body.scrollHeight : 0,
      600
    );
    iframe.style.height = h + 'px';
  } catch (e) { /* 跨域时静默 */ }
}
window.addEventListener('resize', () => {
  document.querySelectorAll('.market-report-frame').forEach((f) => fitMarketReport(f));
});
// ===== 东盟产品阵容矩阵（产品专项内 · 原 PPT 布局复刻）=====
// 颜色语义取自 PPT 右上角图例（2026-09-18 修正）：
//   单洗=浅蓝 / 干衣机=橙 / 洗烘=橙红 / 线上O=绿 / Exclusive=红
let luCache = null;
let luCat = '滚筒';
let luKw = '';
let luShowFeat = false;
let luYear = 'both';    // both | 2026 | 2027
let luSelCountry = '';  // 选中的国家（跨左右两组同步高亮）
let luSelKg = '';       // 选中的容量（如 '8kg'）
let luSelSeries = '';   // 选中的系列
let luHideOther = false; // 选中容量时：其余隐藏 or 淡化

const LU_TONE_LABEL = { single: '单洗', dryer: '干衣机', washdry: '洗烘', online: '线上 O', exclusive: 'Exclusive' };

async function loadLineup(force) {
  if (luCache && !force) { renderLineup(); return; }
  const body = $('#lu-body');
  try {
    const r = await api('/api/lineup');
    luCache = r || null;
  } catch (e) {
    try {
      const rr = await fetch('market-data/东盟/东盟26-27年产品阵容-layout.json');
      luCache = await rr.json();
    } catch (e2) { luCache = null; }
  }
  if (!luCache || !(luCache.pages || []).length) {
    if (body) body.innerHTML = '';
    const em = $('#lu-empty'); if (em) em.hidden = false;
    return;
  }
  const em = $('#lu-empty'); if (em) em.hidden = true;
  renderLineup();
}

function luPage() {
  const pages = (luCache && luCache.pages) || [];
  return pages.find(p => p.category === luCat) || pages[0];
}

function luHit(text) {
  if (!luKw) return true;
  return String(text || '').toLowerCase().indexOf(luKw.toLowerCase()) >= 0;
}

// 从容量文本抽出 kg 数（'10.5/7kg' → ['10.5','7']）
function luKgs(raw) {
  const s = String(raw || '').replace(/\s*O\s*$/, '');
  const m = s.match(/([\d.]+)(?:\s*\/\s*([\d.]+))?\s*kg/i);
  if (!m) return [];
  const out = [m[1] + 'kg'];
  if (m[2]) out.push(m[2] + 'kg');
  return out;
}

// 容量胶囊：带色 + 可点
function luCapHtml(c, side, ci, ri) {
  const cls = 'lu-cap' + (c.tone ? ' t-' + c.tone : '');
  const kgs = luKgs(c.raw);
  const hitKg = luSelKg && kgs.indexOf(luSelKg) >= 0;
  const hitSeries = luSelSeries && luSelSeries === c._series;
  const dimByKg = (luSelKg || luSelSeries) && !hitKg && !hitSeries;
  const hideByKg = luHideOther && dimByKg;
  let t = esc(c.raw.replace(/\s*O\s*$/, ''));
  if (c.tone === 'online' || c.online) t += '<i class="lu-o">O</i>';
  return '<span class="' + cls + (hitKg ? ' hit-kg' : '') + (hideByKg ? ' hide-kg' : (dimByKg ? ' dim-kg' : '')) +
    '" data-lu-cap="' + esc(c.raw) + '" data-lu-kg="' + esc(kgs[0] || '') + '" title="' + esc(c.toneLabel || '常规') + '">' + t + '</span>';
}

function luSideHtml(p, side) {
  const grid = p['grid_' + side] || [];
  const heads = p.headers[side] || [];
  let h = '<table class="lu-mtx"><thead><tr><th class="lu-ser-th">系列</th>';
  heads.forEach(c => {
    const kwOk = luHit(c.name);
    const sel = luSelCountry === c.name;
    h += '<th class="lu-cc-th' + (kwOk ? '' : ' dim') + (sel ? ' sel-cc' : '') + '" data-lu-cc="' + esc(c.name) + '">' +
      esc(c.name) + (c.mark ? '<i class="lu-mk">√</i>' : '') + '</th>';
  });
  h += '</tr></thead><tbody>';
  grid.forEach(row => {
    row.cells.forEach((cs, ci) => { (cs || []).forEach(c => { c._series = row.series; }); });
    const rowText = row.series + ' ' + row.cells.map(cs => (cs || []).map(c => c.raw).join(' ')).join(' ');
    const show = luHit(rowText);
    const selSer = luSelSeries === row.series;
    const dimBySer = luSelSeries && !selSer;
    h += '<tr class="' + (show ? '' : 'dim') + (selSer ? ' sel-ser' : '') + (dimBySer ? ' dim-ser' : '') + '" data-lu-srow="' + esc(row.series) + '">';
    h += '<td class="lu-ser"><span class="lu-ser-v">' + esc(row.series) + '</span></td>';
    row.cells.forEach((cs, ci) => {
      const ccName = (heads[ci] || {}).name || '';
      const selCol = luSelCountry && ccName === luSelCountry;
      if (!cs || !cs.length) { h += '<td class="lu-cell empty' + (selCol ? ' sel-cc' : '') + '"></td>'; return; }
      h += '<td class="lu-cell' + (selCol ? ' sel-cc' : '') + '">' + cs.map(c => luCapHtml(c, side, ci, -1)).join('') + '</td>';
    });
    h += '</tr>';
    if (luShowFeat && row.feat) {
      h += '<tr class="' + (show ? '' : 'dim') + ' lu-feat-row"><td class="lu-ser-sub">卖点</td><td class="lu-feat-cell" colspan="' + heads.length + '">' + esc(row.feat) + '</td></tr>';
    }
  });
  h += '</tbody></table>';
  return h;
}

function renderLineup() {
  const p = luPage();
  if (!p) return;
  // 品类 tab
  const cats = (luCache.pages || []).map(c => c.category);
  const ct = $('#lu-cats');
  if (ct) {
    ct.innerHTML = cats.map(c => '<button class="apoc-chip' + (c === p.category ? ' active' : '') + '" data-lu-cat="' + esc(c) + '" type="button">' + esc(c) + '</button>').join('');
    ct.querySelectorAll('[data-lu-cat]').forEach(b => {
      b.onclick = () => { luCat = b.dataset.luCat; luSelKg = ''; luSelSeries = ''; renderLineup(); };
    });
  }
  // 开关
  const sf = $('#lu-show-feat');
  if (sf && !sf._b) { sf._b = true; sf.onchange = () => { luShowFeat = sf.checked; renderLineup(); }; }
  if (sf) sf.checked = luShowFeat;
  // 搜索
  const kw = $('#lu-kw');
  if (kw && !kw._b) { kw._b = true; kw.oninput = () => { luKw = kw.value.trim(); renderLineup(); }; }
  if (kw && kw.value !== luKw) kw.value = luKw;
  // 刷新
  const rf = $('#lu-refresh');
  if (rf && !rf._b) { rf._b = true; rf.onclick = () => { luCache = null; loadLineup(true); }; }

  // 年度横条
  const yr = $('#lu-years');
  if (yr) {
    const rows = [['both', '26 ⇄ 27 对照'], ['2026', 'Hisense-2026'], ['2027', 'Hisense 2027~2028']];
    yr.innerHTML = rows.map(([k, label]) =>
      '<button class="lu-ychip' + (k === luYear ? ' active' : '') + '" data-lu-year="' + k + '" type="button">' + esc(label) + '</button>'
    ).join('');
    yr.querySelectorAll('[data-lu-year]').forEach(b => {
      b.onclick = () => { luYear = b.dataset.luYear; renderLineup(); };
    });
  }

  // 图例（按 PPT 原图例 + 色块）
  const lg = $('#lu-legend');
  if (lg) lg.innerHTML = ['single', 'washdry', 'dryer', 'online', 'exclusive'].map(t =>
    '<span class="lu-lg"><i class="sw ' + t + '"></i>' + luToneLabel(t) + '</span>'
  ).join('') + '<span class="lu-lg-tip">点国家高亮整列 · 点容量高亮同 kg · 点系列高亮整行</span>';

  // 选中状态提示条
  const st = $('#lu-selbar');
  if (st) {
    const parts = [];
    if (luSelCountry) parts.push('<b>国家</b> ' + esc(luSelCountry));
    if (luSelKg) parts.push('<b>容量</b> ' + esc(luSelKg));
    if (luSelSeries) parts.push('<b>系列</b> ' + esc(luSelSeries));
    if (parts.length) {
      st.innerHTML = '<span class="lu-sel-txt">筛选：' + parts.join(' · ') + '</span>' +
        '<label class="lu-toggle"><input type="checkbox" id="lu-hide-other"' + (luHideOther ? ' checked' : '') + ' /> 隐藏其他</label>' +
        '<button class="btn btn-sm" id="lu-clear" type="button">清除筛选</button>';
      st.hidden = false;
      const hb = $('#lu-hide-other');
      if (hb) hb.onchange = () => { luHideOther = hb.checked; renderLineup(); };
      const cb = $('#lu-clear');
      if (cb) cb.onclick = () => { luSelCountry = ''; luSelKg = ''; luSelSeries = ''; renderLineup(); };
    } else {
      st.hidden = true; st.innerHTML = '';
    }
  }

  const body = $('#lu-body');
  if (!body) return;
  const dimL = luYear === '2027' ? ' dim-side' : '';
  const dimR = luYear === '2026' ? ' dim-side' : '';
  let h = '<div class="lu-wrap2">';
  h += '<div class="lu-grp' + dimL + '">' + luSideHtml(p, 'left') + '</div>';
  h += '<div class="lu-grp' + dimR + '">' + luSideHtml(p, 'right') + '</div>';
  h += '</div>';
  body.innerHTML = h;
  luBindClicks();
}

function luToneLabel(t) {
  return LU_TONE_LABEL[t] || t;
}

// 绑定：点国家 / 点容量 / 点系列
function luBindClicks() {
  const body = $('#lu-body');
  if (!body || body._bound) { if (body) luBindClicks._apply(); return; }
  body._bound = true;
  body.addEventListener('click', (ev) => {
    const cc = ev.target.closest('[data-lu-cc]');
    if (cc) {
      const n = cc.dataset.luCc;
      luSelCountry = luSelCountry === n ? '' : n;
      renderLineup(); return;
    }
    const cap = ev.target.closest('[data-lu-cap]');
    if (cap) {
      const kg = cap.dataset.luKg;
      luSelKg = luSelKg === kg ? '' : kg;
      luSelSeries = '';
      renderLineup(); return;
    }
    const sr = ev.target.closest('[data-lu-srow]');
    if (sr) {
      // 点行头（系列名）才切系列
      const serCell = ev.target.closest('.lu-ser');
      if (serCell) {
        const n = sr.dataset.luSrow;
        luSelSeries = luSelSeries === n ? '' : n;
        luSelKg = '';
        renderLineup();
      }
      return;
    }
  });
  luBindClicks._apply = () => { };
}

function statusTagClass(s) {
  if (s === '已完成') return 'tag-done';
  if (s === '进行中') return 'tag-progress';
  if (s === '等待他人') return 'tag-wait';
  return 'tag-todo';
}

// ===== 会议与日历 =====
async function loadMeetings() {
  try {
    const d = await api('/api/calendar');
    let events = d.events || [];

    // ===== 去重：同标题只保留最早一条 =====
    const seenTitle = new Set();
    const dupCount = {};
    events = events.filter(e => {
      const t = String(e.title || '').trim();
      if (!t) return true;
      if (seenTitle.has(t)) { dupCount[t] = (dupCount[t] || 0) + 1; return false; }
      seenTitle.add(t); return true;
    });

    // ===== 会议关键词/链接标记（仅用于加「↗」图标，不再左右分栏） =====
    const MEET_URL_RE = /zoom|teams\.|meet\.google|meeting\.tencent|wemeet|feishu|larksuite|gotomeeting|webex/i;
    const hasMeetLink = (e) => {
      const u = e.url || '';
      const loc = e.location || '';
      return MEET_URL_RE.test(u) || MEET_URL_RE.test(loc);
    };

    const W = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    const today = new Date(); today.setHours(0, 0, 0, 0);

    const fmtDate = (s) => { const t = new Date(s); return `${t.getMonth() + 1}月${t.getDate()}日 · ${W[t.getDay()]}`; };
    const fmtTime = (e) => {
      if (!e.start) return '';
      if (/^\d{4}-\d{2}-\d{2}$/.test(String(e.start))) return '全天';
      const t = new Date(e.start);
      return String(t.getHours()).padStart(2, '0') + ':' + String(t.getMinutes()).padStart(2, '0');
    };
    const dayDiff = (s) => s ? Math.round((new Date(s) - today) / 86400000) : null;
    const dayTag = (s) => {
      const dd = dayDiff(s);
      if (dd === 0) return '<span class="mt-tag mt-tag-today">今天</span>';
      if (dd === 1) return '<span class="mt-tag mt-tag-tomorrow">明天</span>';
      if (dd !== null && dd < 0) return '<span class="mt-tag mt-tag-past">已过</span>';
      return '';
    };

    // ===== 单栏：所有事件按日分组 =====
    const groups = new Map(); const order = [];
    for (const e of events) {
      const s = e.start ? new Date(e.start) : null;
      let key = '__none__';
      if (s && !isNaN(s.getTime())) key = `${s.getFullYear()}-${String(s.getMonth() + 1)}-${String(s.getDate())}`;
      if (!groups.has(key)) {
        groups.set(key, { key, date: s, items: [] });
        order.push(key);
      }
      groups.get(key).items.push(e);
    }
    let html = '';
    if (order.length) {
      html = order.map(key => {
        const g = groups.get(key);
        const label = key === '__none__' ? '未排定' : fmtDate(g.date);
        const items = g.items.map(e => {
          const loc = e.location ? '<span class="mt-loc">📍 ' + esc(e.location) + '</span>' : '';
          const isMeet = hasMeetLink(e);
          const link = e.url ? '<a class="mt-link' + (isMeet ? ' mt-link-meet' : '') + '" href="' + esc(e.url) + '" target="_blank" title="' + (isMeet ? '加入会议' : '打开日历') + '">↗</a>' : '';
          const meetBadge = isMeet ? '<span class="mt-badge">会议</span>' : '';
          return '<div class="mt-row">'
            + '<div class="mt-time">' + fmtTime(e) + '</div>'
            + '<div class="mt-main"><div class="mt-title">' + esc(e.title || '(无标题)') + meetBadge + '</div>' + (loc ? '<div class="mt-sub">' + loc + '</div>' : '') + '</div>'
            + link
            + '</div>';
        }).join('');
        return '<div class="mt-day">'
          + '<div class="mt-day-head"><span class="mt-day-dot"></span>' + esc(label) + dayTag(g.date) + '<span class="mt-day-count">' + g.items.length + '</span></div>'
          + '<div class="mt-day-body">' + items + '</div>'
          + '</div>';
      }).join('');
    } else {
      html = '<div class="mt-empty">暂无日程安排</div>';
    }

    $('#meetings-list').innerHTML = html;

    if (d.collectedAt) {
      const t = new Date(d.collectedAt).toLocaleString('zh-CN');
      const src = d.source === 'google' ? 'Google 日历实时' : '本地快照';
      const dupKeys = Object.keys(dupCount);
      let meta = src + ' · ' + t;
      if (dupKeys.length) meta += ' · 已合并 ' + dupKeys.length + ' 项重复';
      $('#meetings-list').insertAdjacentHTML('beforeend', '<div class="mt-meta">' + esc(meta) + '</div>');
    }
  } catch (e) {
    $('#meetings-list').innerHTML = '<div class="empty">' + esc(e.message) + '</div>';
  }
}

// ===== 会议纪要（总结 + 关键结论 + 附件） - 可折叠大卡片 =====
function noteCardHtml(item) {
  const conclusions = (item['关键决策'] || '').split(/\n+/).map(s => s.trim()).filter(Boolean)
    .map(c => '<li>' + esc(c) + '</li>').join('');
  const summary = (item['总结'] || '').trim();
  const participants = (item['参与人'] || '').trim();
  const topic = (item['客户议题'] || '').trim();
  const next = (item['下一步'] || '').trim();
  const action = (item['行动项'] || '').trim();
  const attachments = (item['附件'] || []).map(a =>
    '<a class="note-attach" href="' + esc(a.url || '#') + '" target="_blank" rel="noreferrer" download>📎 ' + esc(a.name) + '</a>'
  ).join('');
  const date = item['日期'] ? esc(String(item['日期']).slice(0, 10)) : '';
  const region = item['区域'] || '';
  const status = item['状态'] || '';
  const statusKey = statusClassKey(status);
  const editLink = '';
  const title = item['会议主题'] || '(无标题)';
  const teaser = summary ? summary.split(/\n+/)[0].slice(0, 90) : (topic || '点击展开查看完整总结、关键决策和行动项');

  return '<article class="note-card note-card-big" data-region="' + esc(region) + '" data-status="' + esc(status) + '">'
    + '<div class="note-card-strip"></div>'
    + '<div class="note-card-body">'
    +   '<button class="note-card-toggle" type="button" aria-expanded="false">'
    +     '<div class="note-card-head">'
    +       '<div class="note-card-title">' + esc(title) + '<span class="note-card-arrow" aria-hidden="true">▾</span></div>'
    +       '<div class="note-card-teaser">' + esc(teaser) + '</div>'
    +       '<div class="note-card-meta">'
    +         (date ? '<span class="note-meta-item note-meta-date">📅 ' + date + '</span>' : '')
    +         (region ? '<span class="note-tag note-tag-region">' + esc(region) + '</span>' : '')
    +         (status ? '<span class="note-tag note-tag-status s-' + statusKey + '">' + esc(status) + '</span>' : '')
    +       '</div>'
    +     '</div>'
    +   '</button>'
    +   '<div class="note-card-detail" hidden>'
    +     (summary ? '<div class="note-block"><div class="note-label">总结</div><div class="note-text note-text-long">' + esc(summary) + '</div></div>' : '')
    +     (participants ? '<div class="note-block"><div class="note-label">参与人</div><div class="note-text">' + esc(participants) + '</div></div>' : '')
    +     (topic ? '<div class="note-block"><div class="note-label">客户议题</div><div class="note-text">' + esc(topic) + '</div></div>' : '')
    +     (conclusions ? '<div class="note-block"><div class="note-label">关键决策</div><ol class="note-concl">' + conclusions + '</ol></div>' : '')
    +     (action ? '<div class="note-block"><div class="note-label">行动项</div><div class="note-text">' + esc(action) + '</div></div>' : '')
    +     (next ? '<div class="note-block"><div class="note-label">下一步</div><div class="note-text">' + esc(next) + '</div></div>' : '')
    +     (attachments ? '<div class="note-block"><div class="note-label">附件</div><div class="note-attach-row">' + attachments + '</div></div>' : '')
    +     '<div class="note-card-actions">' + editLink + '</div>'
    +   '</div>'
    + '</div>'
    + '</article>';
}

// 状态颜色映射（红/黄/绿/灰）
function statusClassKey(s) {
  if (!s) return 'gray';
  if (/已闭|完成|闭环|done/i.test(s)) return 'green';
  if (/待|未|pending|待决策/i.test(s)) return 'red';
  if (/进行|跟进|ing|跟/i.test(s)) return 'amber';
  return 'gray';
}

// 通用空态（带提示和操作）
function notesEmptyHtml(view, hint) {
  return '<div class="notes-empty">'
    + '<div class="notes-empty-title">这里还没有内容</div>'
    + '<div class="notes-empty-body">' + esc(hint) + '</div>'
    + '</div>';
}

// 筛选 chip 行为
function bindFilterChips(prefix, attr, callback) {
  document.querySelectorAll('[data-' + prefix + '-' + attr + ']').forEach(btn => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', () => {
      btn.parentElement.querySelectorAll('.notes-chip').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      callback();
    });
  });
}

// 通用卡片点击折叠展开
function bindCardToggles(scope) {
  document.querySelectorAll(scope + ' .note-card-toggle').forEach(btn => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', () => {
      const card = btn.closest('.note-card');
      const detail = card.querySelector('.note-card-detail');
      const arrow = card.querySelector('.note-card-arrow');
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        detail.hidden = true;
        btn.setAttribute('aria-expanded', 'false');
        card.classList.remove('expanded');
        if (arrow) arrow.textContent = '▾';
      } else {
        detail.hidden = false;
        btn.setAttribute('aria-expanded', 'true');
        card.classList.add('expanded');
        if (arrow) arrow.textContent = '▴';
      }
    });
  });
}

// ===== 会议素材投放箱：文字 / 图片 / 附件 → 自动拆待办 → 联动「项目与待办」=====
let _mnFiles = [];
let _mnItems = [];

function onMnFiles(input) {
  const list = Array.from(input.files || []);
  _mnFiles = _mnFiles.concat(list.map(f => ({ name: f.name, size: f.size, type: f.type })));
  const el = $('#mn-filelist');
  if (el) el.textContent = _mnFiles.length ? _mnFiles.map(f => '📎 ' + f.name).join('，') : '';
  applyMnIntake();
}

function applyMnIntake() {
  const txt = $('#mn-text');
  if (!txt) return;
  const raw = txt.value + (_mnFiles.length ? '\n[附件] ' + _mnFiles.map(f => f.name).join('、') : '');
  _mnItems = parseTaskText(raw);
  renderMnPreview();
}

function renderMnPreview() {
  const box = $('#mn-preview');
  if (!box) return;
  if (!_mnItems.length) { box.innerHTML = ''; return; }
  box.innerHTML = '<div class="task-parse-head">已拆出 ' + _mnItems.length + ' 条待办（取消勾选可不要）</div>' +
    _mnItems.map((it, i) => {
      const chips = [
        it.priority ? '<span class="task-chip" style="color:' + priColor(it.priority) + ';border-color:' + priColor(it.priority) + '">' + esc(it.priority) + '</span>' : '',
        it.region ? '<span class="task-chip" style="color:' + regionColor(it.region) + ';border-color:' + regionColor(it.region) + '">' + esc(it.region) + '</span>' : '',
        it.due ? '<span class="task-chip">📅 ' + esc(it.due) + '</span>' : '',
      ].join('');
      return '<div class="task-parse-item' + (it.checked ? '' : ' is-off') + '">' +
        '<div class="task-parse-main"><div class="task-title">' + esc(it.title) + '</div>' +
        '<div class="task-meta">' + (chips || '<span class="task-chip">无标签</span>') + '</div></div>' +
        '<label class="task-parse-toggle" onclick="event.stopPropagation()"><input type="checkbox" ' + (it.checked ? 'checked' : '') + ' onchange="_mnItems[' + i + '].checked=this.checked;this.closest(\'.task-parse-item\').classList.toggle(\'is-off\',!this.checked)">写</label>' +
      '</div>';
    }).join('');
}

async function submitMnIntake() {
  const txt = $('#mn-text');
  const msg = $('#mn-hint');
  const btn = $('#mn-submit');
  if (!txt) return;
  applyMnIntake();
  const toWrite = _mnItems.filter(it => it.checked);
  if (!toWrite.length && !txt.value.trim()) { if (msg) msg.textContent = '请先投放会议文字、图片或附件'; return; }

  const title = ($('#mn-title') && $('#mn-title').value.trim()) || '';
  const region = toWrite.find(it => it.region) ? toWrite.find(it => it.region).region : '';
  const files = _mnFiles.map(f => ({ name: f.name, size: f.size, type: f.type }));

  btn.disabled = true;
  if (msg) msg.textContent = '拆解落库中…';
  try {
    // ① 会议纪要本体
    await api('/api/meeting-notes', {
      method: 'POST',
      body: {
        '会议主题': title || ('会议素材 ' + new Date().toISOString().slice(0, 10) + (files.length ? '（含 ' + files.length + ' 个附件）' : '')),
        '日期': new Date().toISOString().slice(0, 10),
        '区域': region,
        '状态': '待跟进',
        '总结': txt.value.trim() || (files.length ? '本次投放含附件：' + files.map(f => f.name).join('、') : ''),
        '关键决策': toWrite.map(it => it.title),
        '行动项': toWrite.map(it => it.title).join('\n'),
        '附件': files,
      },
    });

    // ② 拆出的待办 → 联动写入「项目与待办」（Notion 统一待办）
    let created = 0;
    if (toWrite.length) {
      const items = toWrite.map(it => ({
        title: it.title,
        priority: it.priority || 'P2 常规',
        region: it.region || region || '',
        due: it.due || '',
        type: '会议',
        targetTypes: ['待办'],
        reason: '来自会议素材投放',
      }));
      const res = await api('/api/intake/commit', { method: 'POST', body: { items } });
      created = res.created || 0;
    }

    if (msg) msg.textContent = '✓ 已归档会议纪要，并联动写入 ' + created + ' 条待办到「项目与待办」';
    txt.value = '';
    _mnFiles = [];
    _mnItems = [];
    $('#mn-filelist').textContent = '';
    if ($('#mn-title')) $('#mn-title').value = '';
    renderMnPreview();
    await loadMeetingNotes();
    if (typeof loadTasks === 'function') await loadTasks();
    triggerPublish();
  } catch (e) {
    if (msg) msg.textContent = '失败：' + (e.message || e);
  } finally {
    btn.disabled = false;
  }
}

async function loadMeetingNotes() {
  loadMeetingIntel(false);
  loadMnHistory();
  initMnToolbar();
}

// 透视区工具栏：只看未完 / 全部展开（只绑一次）
let _mnToolbarBound = false;
function initMnToolbar() {
  if (_mnToolbarBound) return;
  _mnToolbarBound = true;
  const bar = $('#mn-intel-toolbar');
  if (!bar) { _mnToolbarBound = false; return; }
  bar.querySelectorAll('[data-mn-only]').forEach(btn => {
    btn.addEventListener('click', () => {
      bar.querySelectorAll('[data-mn-only]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      _mnOnlyOpen = btn.dataset.mnOnly === 'open';
      if (_mnIntel) renderMeetingIntel(_mnIntel);
    });
  });
  const exp = bar.querySelector('[data-mn-expand]');
  if (exp) exp.addEventListener('click', toggleMnAllExpand);
}

// ===== 一、会议纪要（邮件）透视：标题折叠 + 行动项可勾选 =====
let _mnIntel = null;
let _mnIntelLoading = false;
let _mnIntelFull = {};     // id -> 全量详情（按需拉取后缓存）
let _mnIntelOpen = {};     // id -> 是否展开
let _mnOnlyOpen = false;   // 只看未完行动项

async function loadMeetingIntel(force) {
  const listEl = $('#mn-intel-list');
  if (!listEl || _mnIntelLoading) return;
  _mnIntelLoading = true;
  const state = $('#mn-sync-state');
  if (force) {
    if (state) state.textContent = '正在透视…';
    listEl.innerHTML = '<div class="mn-loading">正在读取 Outlook 会议纪要文件夹并让 AI 提炼…（约 20-60 秒）</div>';
  } else if (!_mnIntel) {
    listEl.innerHTML = '<div class="mn-loading">加载中…</div>';
  }
  try {
    const d = await api('/api/meeting-intel' + (force ? '?refresh=1' : ''));
    _mnIntel = d;
    if (force) { _mnIntelFull = {}; _mnIntelOpen = {}; }
    renderMeetingIntel(d);
    if (state) state.textContent = '共 ' + (d.count || 0) + ' 份 · 更新于 ' + fmtTime(d.generatedAt);
  } catch (e) {
    listEl.innerHTML = '<div class="mn-loading mn-err">透视失败：' + esc(e.message || e) + '</div>';
    if (state) state.textContent = '';
  } finally {
    _mnIntelLoading = false;
  }
}

// 拉取某封的全量详情（首次展开时才拉）
async function loadMnItem(id) {
  if (_mnIntelFull[id]) return _mnIntelFull[id];
  const item = await api('/api/meeting-intel/item?id=' + encodeURIComponent(id));
  _mnIntelFull[id] = item;
  return item;
}

// 点击标题：折叠/展开（展开时按需拉详情）
async function toggleMnCard(id) {
  const on = !_mnIntelOpen[id];
  _mnIntelOpen[id] = on;
  const card = document.querySelector('.mn-card[data-mn-id="' + cssEsc(id) + '"]');
  if (!card) return;
  const body = card.querySelector('.mn-card-detail');
  const arrow = card.querySelector('.mn-card-arrow');
  card.classList.toggle('expanded', on);
  if (arrow) arrow.textContent = on ? '▴' : '▾';
  if (!body) return;
  if (!on) { body.hidden = true; return; }
  body.hidden = false;
  if (!_mnIntelFull[id]) {
    body.innerHTML = '<div class="mn-loading">加载详情…</div>';
    try {
      const full = await loadMnItem(id);
      body.innerHTML = mnDetailHtml(full);
    } catch (e) {
      body.innerHTML = '<div class="mn-loading mn-err">详情加载失败：' + esc(e.message || e) + '</div>';
    }
  }
}

// 展开/收起全部
function toggleMnAllExpand() {
  const ids = (_mnIntel && _mnIntel.items || []).map(x => x.id);
  const anyClosed = ids.some(id => !_mnIntelOpen[id]);
  ids.forEach(id => { _mnIntelOpen[id] = anyClosed; });
  const btn = document.querySelector('[data-mn-expand]');
  if (btn) btn.textContent = anyClosed ? '全部收起' : '全部展开';
  renderMeetingIntel(_mnIntel);
  if (anyClosed) ids.forEach(id => { if (!_mnIntelFull[id]) toggleMnCard(id); });
}

// 勾选行动项：本地覆盖层 + 后端反向同步「项目与待办」里带同指纹的待办
async function mnToggleAction(id, idx, done, ev) {
  if (ev) ev.stopPropagation();
  const card = document.querySelector('.mn-card[data-mn-id="' + cssEsc(id) + '"]');
  const row = card && card.querySelector('.mn-action-row[data-mn-idx="' + idx + '"]');
  if (row) row.classList.toggle('done', !!done);

  try {
    markSelfWrite('meeting');
    const res = await api('/api/meeting-intel/action', { method: 'POST', body: { id, index: idx, done } });
    // 更新本地缓存里的 doneAt
    const src = (_mnIntelFull[id] && _mnIntelFull[id].actions) || [];
    if (src[idx]) src[idx].doneAt = done ? new Date().toISOString().slice(0, 10) : '';
    const cnt = (_mnIntel.items || []).find(x => x.id === id);
    if (cnt && cnt.counts) cnt.counts.openActions = Math.max(0, (cnt.counts.openActions || 0) + (done ? -1 : 1));
    // 同步更新折叠态预览
    if (cnt && cnt.pending) {
      const full = _mnIntelFull[id];
      const what = (full && full.actions[idx] && full.actions[idx].what) || (cnt.pending.find(p => !p.doneAt) || {}).what;
      cnt.pending = (full ? full.actions : []).filter(a => !a.doneAt).slice(0, 6).map(a => ({ what: a.what, owner: a.owner, due: a.due }));
    }
    updateMnStats();

    const state = $('#mn-sync-state');
    if (state) state.textContent = res.synced ? '已同步 ' + res.synced + ' 条待办' : '';
    // 项目与待办那边刷新一下，保证两处一致
    if (res.synced) await loadTasks().catch(() => {});
    triggerPublish();
  } catch (e) {
    if (row) row.classList.toggle('done', !done);
    alert('同步失败：' + (e.message || e));
  }
}

// 行动项 → 统一待办库（幂等：已推过的不重复建，只同步完成状态）
async function pushMnActions() {
  const btn = $('#mn-push');
  const state = $('#mn-sync-state');
  if (btn) btn.disabled = true;
  if (state) state.textContent = '正在写入待办…';
  try {
    const res = await api('/api/meeting-intel/push-tasks', { method: 'POST', body: {} });
    if (state) state.textContent = '新增 ' + res.created + ' 条 · 同步 ' + res.updated + ' 条 · 已有 ' + res.skipped + ' 条';
    await loadTasks().catch(() => {});
    triggerPublish();
  } catch (e) {
    if (state) state.textContent = '写入失败：' + (e.message || e);
  } finally {
    if (btn) btn.disabled = false;
  }
}

function updateMnStats() {
  if (!_mnIntel) return;
  const items = _mnIntel.items || [];
  let decisions = 0, actions = 0, openActions = 0, risks = 0, nums = 0;
  for (const it of items) {
    const c = it.counts || {};
    decisions += c.decisions || 0;
    actions += c.actions || 0;
    openActions += c.openActions || 0;
    risks += c.risks || 0;
    nums += c.keyNumbers || 0;
  }
  const stats = $('#mn-intel-stats');
  if (!stats) return;
  stats.innerHTML = [
    { k: '会议纪要', v: items.length, s: '份' },
    { k: '关键决策', v: decisions, s: '条' },
    { k: '行动项', v: actions, s: '条' },
    { k: '待完成', v: openActions, s: '条', hl: openActions > 0 },
    { k: '风险/待论证', v: risks, s: '条' },
    { k: '量化目标', v: nums, s: '条' },
  ].map(x => '<div class="mn-stat' + (x.hl ? ' mn-stat-hl' : '') + '"><div class="mn-stat-v">' + x.v + '</div><div class="mn-stat-k">' + x.k + '<span>' + x.s + '</span></div></div>').join('');
}

function renderMeetingIntel(d) {
  const items = (d && d.items) || [];
  const cnt = $('#mn-intel-count');
  if (cnt) cnt.textContent = items.length ? '（' + items.length + ' 份）' : '';
  const timeEl = $('#mn-intel-time');
  if (timeEl) timeEl.textContent = d.generatedAt ? '更新于 ' + fmtTime(d.generatedAt) : '';

  updateMnStats();

  let shown = items;
  if (_mnOnlyOpen) shown = items.filter(it => (it.counts && it.counts.openActions) > 0);

  $('#mn-intel-list').innerHTML = shown.length
    ? shown.map(mnIntelCard).join('')
    : '<div class="today-empty">' + (_mnOnlyOpen ? '暂无未完成的行动项' : '会议纪要文件夹暂无可透视内容') + '</div>';
}
function mnIntelCard(it) {
  const id = it.id;
  const open = !!_mnIntelOpen[id];
  const full = _mnIntelFull[id];
  const c = it.counts || {};
  const link = it.webLink || '';
  const titleHtml = link
    ? '<a class="mn-title-link" href="' + esc(link) + '" target="_blank" rel="noopener" title="在网页版 Outlook 打开原邮件" onclick="event.stopPropagation()">' + esc(it.title || it.originalSubject || '(无标题)') + ' ↗</a>'
    : '<span class="mn-title-plain">' + esc(it.title || it.originalSubject || '(无标题)') + '</span>';

  const meta = [];
  if (it.meetingDate) meta.push('<span class="mn-meta-item">📅 ' + esc(it.meetingDate) + '</span>');
  if (it.region) meta.push('<span class="mn-tag mn-tag-region">' + esc(it.region) + '</span>');
  if (c.openActions > 0) meta.push('<span class="mn-tag mn-tag-open">待完成 ' + c.openActions + '</span>');
  else if (c.actions > 0) meta.push('<span class="mn-tag mn-tag-ok">行动项已清</span>');

  const chips = [];
  if (c.decisions) chips.push('<span class="mn-chip">决策 ' + c.decisions + '</span>');
  if (c.actions) chips.push('<span class="mn-chip">行动 ' + c.actions + '</span>');
  if (c.risks) chips.push('<span class="mn-chip">风险 ' + c.risks + '</span>');
  if (c.keyNumbers) chips.push('<span class="mn-chip">量化 ' + c.keyNumbers + '</span>');

  // 折叠时只露未完成的行动项（最多 3 条），一眼看到要干什么
  let peek = '';
  if (!open) {
    const pend = (full && full.actions) ? full.actions.filter(a => !a.doneAt) : (it.pending || []);
    if (pend.length) {
      peek = '<div class="mn-peek">' + pend.slice(0, 3).map(a =>
        '<div class="mn-peek-row"><span class="mn-peek-dot"></span><span>' + esc(a.what) + '</span>' +
        (a.owner ? '<span class="mn-owner">' + esc(a.owner) + '</span>' : '') +
        (a.due ? '<span class="mn-due">' + esc(a.due) + '</span>' : '') +
        '</div>').join('') +
        (pend.length > 3 ? '<div class="mn-peek-more">还有 ' + (pend.length - 3) + ' 条…</div>' : '') +
        '</div>';
    }
  }

  return '<article class="mn-card' + (it.failed ? ' mn-card-failed' : '') + (open ? ' expanded' : '') + '" data-mn-id="' + esc(id) + '">'
    + '<div class="mn-card-head" onclick="toggleMnCard(\'' + attrEsc(id) + '\')">'
    +   '<div class="mn-card-title"><span class="mn-card-arrow" aria-hidden="true">' + (open ? '▴' : '▾') + '</span>' + titleHtml + '</div>'
    +   '<div class="mn-card-meta">' + meta.join('') + '</div>'
    +   (it.summary ? '<div class="mn-card-summary">' + esc(it.summary) + '</div>' : '')
    +   (chips.length ? '<div class="mn-card-chips">' + chips.join('') + '</div>' : '')
    +   peek
    + '</div>'
    + '<div class="mn-card-detail"' + (open ? '' : ' hidden') + '>'
    +   (open && full ? mnDetailHtml(full) : (open ? '<div class="mn-loading">加载详情…</div>' : ''))
    + '</div>'
    + '</article>';
}

// 展开后的完整内容（含可勾选行动项）
function mnDetailHtml(it) {
  const sec = (label, cls, body) => body
    ? '<div class="mn-sec ' + cls + '"><div class="mn-sec-label">' + label + '</div>' + body + '</div>' : '';
  const ul = (arr) => '<ul class="mn-ul">' + arr.map(x => '<li>' + esc(x) + '</li>').join('') + '</ul>';

  const attendees = (it.attendees || []).length
    ? '<div class="mn-attendees">' + it.attendees.map(x => '<span class="mn-person">' + esc(x) + '</span>').join('') + '</div>' : '';

  const actions = (it.actions || []).length
    ? '<div class="mn-actions">' + it.actions.map((a, i) => {
        const done = !!a.doneAt;
        const tag = [];
        if (a.owner) tag.push('<span class="mn-owner">' + esc(a.owner) + '</span>');
        if (a.due) tag.push('<span class="mn-due">' + esc(a.due) + '</span>');
        if (a.region) tag.push('<span class="mn-tag mn-tag-region">' + esc(a.region) + '</span>');
        return '<div class="mn-action-row' + (done ? ' done' : '') + '" data-mn-idx="' + i + '">'
          + '<button class="mn-check" type="button" onclick="mnToggleAction(\'' + attrEsc(it.id) + '\',' + i + ',' + (!done) + ',event)" title="勾选即完成，同时同步「项目与待办」">' + (done ? '✓' : '') + '</button>'
          + '<span class="mn-action-what">' + esc(a.what || '') + '</span>'
          + (tag.length ? '<span class="mn-action-tags">' + tag.join('') + '</span>' : '')
          + '</div>';
      }).join('') + '</div>'
    : '<div class="mn-none">本封未拆出行动项</div>';

  const decisions = (it.decisions || []).length ? ul(it.decisions) : '';
  const risks = (it.risks || []).length ? ul(it.risks) : '';
  const nums = (it.keyNumbers || []).length ? '<div class="mn-nums">' + it.keyNumbers.map(x => '<span class="mn-num">' + esc(x) + '</span>').join('') + '</div>' : '';

  return (it.location ? '<div class="mn-detail-line">📍 ' + esc(it.location) + '</div>' : '')
    + (it.attachments && it.attachments.length ? '<div class="mn-detail-line">📎 ' + esc(it.attachments.join('、')) + '</div>' : '')
    + (attendees ? '<div class="mn-sec"><div class="mn-sec-label">参会人</div>' + attendees + '</div>' : '')
    + sec('行动项（勾选即完成，同步「项目与待办」）', 'mn-sec-actions', actions)
    + sec('关键决策', 'mn-sec-decisions', decisions)
    + sec('风险 / 待论证', 'mn-sec-risks', risks)
    + sec('量化目标', 'mn-sec-nums', nums);
}

// 属性里的 id 转义（Graph id 含特殊字符）
function attrEsc(s) { return String(s == null ? '' : s).replace(/\\/g, '\\\\').replace(/'/g, "\\'"); }
function cssEsc(s) { return String(s == null ? '' : s).replace(/["\\]/g, '\\$&'); }

// ===== 二、投放箱已入库记录 =====
async function loadMnHistory() {
  try {
    const d = await api('/api/meeting-notes');
    const allRows = (d.items || []).sort((a, b) => String(b['日期'] || '').localeCompare(String(a['日期'] || '')));
    const draw = () => {
      const rBtn = $('#view-meeting-notes [data-filter-region].active');
      const r = rBtn ? rBtn.dataset.filterRegion : 'all';
      const list = allRows.filter(it => r === 'all' || (it['区域'] || '') === r);
      $('#meeting-notes-count').textContent = list.length;
      $('#meeting-notes-list').innerHTML = list.length
        ? list.map(noteCardHtml).join('')
        : '<div class="today-empty">还没有投放箱入库记录。把会议文字/附件丢进上面投放箱试试。</div>';
      bindCardToggles('#meeting-notes-list');
    };
    bindFilterChips('filter', 'region', draw);
    draw();
  } catch (e) {
    $('#meeting-notes-list').innerHTML = '<div class="empty">' + esc(e.message) + '</div>';
  }
}

// ===== 通用结构化卡片（特别关注 / 产品专项 / 产品知识库） - 可折叠 =====
function genericCardHtml(item, textFields, opts) {
  opts = opts || {};
  const blocks = textFields.map(f => {
    const v = (item[f.label] || '').trim();
    if (!v) return '';
    const cls = (opts.longFields || []).includes(f.label) ? 'note-text-long' : 'note-text';
    return '<div class="note-block"><div class="note-label">' + esc(f.label) + '</div><div class="note-text ' + cls + '">' + esc(v) + '</div></div>';
  }).join('');
  const attachments = (item['附件'] || []).map(a =>
    '<a class="note-attach" href="' + esc(a.url || '#') + '" target="_blank" rel="noreferrer" download>📎 ' + esc(a.name) + '</a>'
  ).join('');
  const date = (item['日期'] || item['截止日期'] || '') ? esc(String(item['日期'] || item['截止日期'] || '').slice(0, 10)) : '';
  const region = item['区域'] || '';
  const status = item['状态'] || '';
  const statusKey = statusClassKey(status);
  const source = item['来源'] || '';
  const cat = item['品类'] || '';
  const editLink = '';
  const srcLink = item['来源链接'] ? '<a class="note-edit-link" href="' + esc(item['来源链接']) + '" target="_blank" rel="noreferrer">↗ 来源</a>' : '';
  const title = item['标题'] || '(无标题)';
  // 引导摘要：取第一个 non-empty 的 text field 的第一行
  let teaser = textFields.map(f => (item[f.label] || '').trim()).find(Boolean) || '点击展开查看详情';
  teaser = teaser.split(/\n+/)[0].slice(0, 90);

  return '<article class="note-card note-card-big" data-region="' + esc(region) + '" data-status="' + esc(status) + '" data-cat="' + esc(cat) + '" data-source="' + esc(source) + '">'
    + '<div class="note-card-strip"></div>'
    + '<div class="note-card-body">'
    +   '<button class="note-card-toggle" type="button" aria-expanded="false">'
    +     '<div class="note-card-head">'
    +       '<div class="note-card-title">' + esc(title) + '<span class="note-card-arrow" aria-hidden="true">▾</span></div>'
    +       '<div class="note-card-teaser">' + esc(teaser) + '</div>'
    +       '<div class="note-card-meta">'
    +         (date ? '<span class="note-meta-item note-meta-date">📅 ' + date + '</span>' : '')
    +         (region ? '<span class="note-tag note-tag-region">' + esc(region) + '</span>' : '')
    +         (status ? '<span class="note-tag note-tag-status s-' + statusKey + '">' + esc(status) + '</span>' : '')
    +         (source ? '<span class="note-tag note-tag-source">' + esc(source) + '</span>' : '')
    +         (cat ? '<span class="note-tag note-tag-cat">' + esc(cat) + '</span>' : '')
    +       '</div>'
    +     '</div>'
    +   '</button>'
    +   '<div class="note-card-detail" hidden>'
    +     blocks
    +     (attachments ? '<div class="note-block"><div class="note-label">附件</div><div class="note-attach-row">' + attachments + '</div></div>' : '')
    +     '<div class="note-card-actions">' + editLink + srcLink + '</div>'
    +   '</div>'
    + '</div>'
    + '</article>';
}

async function loadProductInitiatives() {
  try {
    const d = await api('/api/product-initiatives');
    const allRows = (d.items || []).sort((a, b) => String(b['截止日期'] || '').localeCompare(String(a['截止日期'] || '')));
    const draw = () => {
      const rBtn = $('#view-product-initiatives [data-pi-filter-region].active');
      const sBtn = $('#view-product-initiatives [data-pi-filter-status].active');
      const r = rBtn ? rBtn.dataset.piFilterRegion : 'all';
      const s = sBtn ? sBtn.dataset.piFilterStatus : 'all';
      const list = allRows.filter(it => {
        if (r !== 'all' && (it['区域'] || '') !== r) return false;
        if (s !== 'all' && (it['状态'] || '') !== s) return false;
        return true;
      });
      $('#product-initiatives-count').textContent = list.length;
      $('#product-initiatives-list').innerHTML = list.length
        ? list.map(r => genericCardHtml(r, [
            { label: '产品/品类' }, { label: '议题' }, { label: '结论' }, { label: '负责人' },
          ], { longFields: ['议题', '结论'] })).join('')
        : notesEmptyHtml('product-initiatives', '产品相关议题、结论、Owner、Deadline 落到这里。');
      bindCardToggles('#product-initiatives-list');
    };
    bindFilterChips('pi-filter', 'region', draw);
    bindFilterChips('pi-filter', 'status', draw);
    draw();
  } catch (e) {
    $('#product-initiatives-list').innerHTML = '<div class="empty">' + esc(e.message) + '</div>';
  }
}

// ===== 新增日程/会议（写 Google + Notion） =====
let _calKind = 'timed'; // timed | allday
let _calType = 'schedule'; // schedule | meeting

function openCalModal(type) {
  _calType = type;
  const isMeet = type === 'meeting';
  $('#cal-modal-title').textContent = isMeet ? '新增会议' : '新增日程';
  $('#cal-f-meet-wrap').hidden = !isMeet;
  // 默认日期=今天，时间=下一整点
  const now = new Date();
  const dd = now.toISOString().slice(0, 10);
  const hh = String(now.getHours() + 1 > 23 ? 9 : now.getHours() + 1).padStart(2, '0');
  $('#cal-f-date').value = dd;
  $('#cal-f-time').value = hh + ':00';
  $('#cal-f-endtime').value = hh + ':30';
  $('#cal-f-title').value = '';
  $('#cal-f-location').value = '';
  $('#cal-f-meet').value = '';
  $('#cal-f-desc').value = '';
  $('#cal-f-quick').value = '';
  $('#cal-quick-hint').textContent = '';
  $('#cal-f-msg').textContent = '';
  setCalKind('timed');
  $('#cal-modal').hidden = false;
  setTimeout(() => $('#cal-f-quick').focus(), 50);
}
function closeCalModal() { $('#cal-modal').hidden = true; }

// ===== 今日日程：会议纪要草稿框 =====
let _noteConclRows = 0;

function openNoteModal(opts) {
  const today = new Date().toISOString().slice(0, 10);
  $('#note-f-title').textContent = (opts && opts.title) || '(无标题)';
  $('#note-f-date').textContent = today;
  $('#note-f-theme').value = (opts && opts.title) || '';
  $('#note-f-date2').value = today;
  $('#note-f-region').value = '';
  $('#note-f-status').value = '进行中';
  $('#note-f-participants').value = '';
  $('#note-f-summary').value = '';
  $('#note-f-next').value = '';
  $('#note-f-msg').textContent = '';
  $('#note-f-concl-list').innerHTML = '';
  _noteConclRows = 0;
  addNoteConclRow();
  $('#note-modal').hidden = false;
  setTimeout(() => $('#note-f-summary').focus(), 50);
}

function closeNoteModal() {
  $('#note-modal').hidden = true;
}

function addNoteConclRow(val) {
  _noteConclRows += 1;
  const id = 'note-concl-' + _noteConclRows;
  const html = '<div class="note-concl-row" style="display:flex;gap:6px;margin-bottom:6px;">'
    + '<span style="color:var(--text-sub);line-height:32px;min-width:18px">' + _noteConclRows + '.</span>'
    + '<input type="text" id="' + id + '" placeholder="关键决策/结论（按回车或点 + 加下一条）" value="' + esc(val || '') + '" style="flex:1" />'
    + '<button class="btn btn-sm" type="button" data-del-concl="' + _noteConclRows + '" style="background:#f4f4f6">−</button>'
    + '</div>';
  $('#note-f-concl-list').insertAdjacentHTML('beforeend', html);
}

async function submitNote() {
  const msg = $('#note-f-msg');
  const btn = $('#note-f-submit');
  const theme = $('#note-f-theme').value.trim();
  if (!theme) { msg.textContent = '会议主题必填'; $('#note-f-theme').focus(); return; }
  const concls = Array.from(document.querySelectorAll('#note-f-concl-list input[type="text"]'))
    .map(el => el.value.trim()).filter(Boolean);

  const payload = {
    '会议主题': theme,
    '日期': $('#note-f-date2').value || new Date().toISOString().slice(0, 10),
    '参与人': $('#note-f-participants').value.trim(),
    '客户议题': '',
    '总结': $('#note-f-summary').value.trim(),
    '关键决策': concls,
    '行动项': '',
    '下一步': $('#note-f-next').value.trim(),
    '区域': $('#note-f-region').value || '',
    '状态': $('#note-f-status').value || '进行中',
  };

  btn.disabled = true;
  msg.textContent = '写入中…';
  try {
    const page = await api('/api/meeting-notes', { method: 'POST', body: payload });
    msg.textContent = '✓ 已保存到会议纪要库，手机电脑同步可见';
    setTimeout(() => {
      closeNoteModal();
      btn.disabled = false;
      // 刷新会议纪要看板
      if (typeof loadMeetingNotes === 'function') loadMeetingNotes();
    }, 1200);
  } catch (e) {
    msg.textContent = '保存失败：' + (e.message || e);
    btn.disabled = false;
  }
}
function setCalKind(kind) {
  _calKind = kind;
  const isAllday = kind === 'allday';
  $('#cal-f-time').disabled = isAllday;
  $('#cal-f-endtime').disabled = isAllday;
  document.querySelectorAll('#cal-f-kind .cal-seg-item').forEach(b => {
    b.classList.toggle('active', b.dataset.kind === kind);
  });
}

// ===== 一句话快记：自然语言解析 =====
// 从自由文本里提取 日期/时间/标题/地点/是否会议/是否全天
function parseQuickText(raw) {
  const s = (raw || '').trim();
  if (!s) return null;
  const W = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 日: 0, 天: 0 };

  // --- 日期 ---
  let date = null, allDay = false;
  const today = new Date();
  const mkDate = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  const addDays = (n) => { const d = new Date(today); d.setDate(d.getDate() + n); return d; };

  if (/(今天|今晚|今儿)/.test(s)) date = addDays(0);
  else if (/(明天|明早|明日)/.test(s)) date = addDays(1);
  else if (/(后天)/.test(s)) date = addDays(2);
  else if (/(大后天)/.test(s)) date = addDays(3);
  else {
    // 周X / 下周X / 本周X
    let m = s.match(/(?:下|本)?周([一二三四五六日天])/);
    if (m) {
      const target = W[m[1]];
      let delta = (target - today.getDay() + 7) % 7;
      if (s.includes('下周') && delta === 0) delta = 7;
      else if (!s.includes('下周') && !s.includes('本周') && delta === 0) delta = 0;
      date = addDays(delta);
    } else {
      // 具体日期 9月14 / 9-14 / 09/14
      m = s.match(/(\d{1,2})\s*月\s*(\d{1,2})[日号]?/);
      if (m) {
        const mo = parseInt(m[1], 10), da = parseInt(m[2], 10);
        date = new Date(today.getFullYear(), mo - 1, da);
        if (isNaN(date.getTime())) date = null;
      } else {
        m = s.match(/(\d{1,2})[\/\-](\d{1,2})/);
        if (m) {
          const mo = parseInt(m[1], 10), da = parseInt(m[2], 10);
          date = new Date(today.getFullYear(), mo - 1, da);
          if (isNaN(date.getTime())) date = null;
        }
      }
    }
  }
  const dateStr = date ? mkDate(date) : null;

  // --- 时间 ---
  let time = null, endTime = null;
  let tm = s.match(/(?:(\d{1,2})[:：点](\d{1,2})?)/);
  if (tm) {
    let h = parseInt(tm[1], 10), min = tm[2] ? parseInt(tm[2], 10) : 0;
    // 处理「下午3点」「晚上8点」「下午三点」「今晚」里的「晚」
    const isPm = /(下午|晚上|傍晚|今晚|晚)/.test(s);
    if (isPm && h < 12) h += 12;
    if (/凌晨/.test(s) && h === 12) h = 0;
    time = String(h).padStart(2, '0') + ':' + String(min).padStart(2, '0');
    // 结束时间（若提到「到X点」或「-X点」）
    const em = s.match(/[到至\-～~]\s*(?:(\d{1,2})[:：点](\d{1,2})?)/);
    if (em) {
      let eh = parseInt(em[1], 10), emin = em[2] ? parseInt(em[2], 10) : 0;
      if (isPm && eh < 12) eh += 12;
      endTime = String(eh).padStart(2, '0') + ':' + String(emin).padStart(2, '0');
    }
  }
  // 「全天」
  if (/(全天|一整天|整天)/.test(s)) allDay = true;

  // --- 地点（「在XX」「去XX」或已知地点词）---
  let location = '';
  const locM = s.match(/在\s*([^\s，,。]+)/);
  if (locM) location = locM[1];
  else if (/(线上|线下|会议室|公司|家里|健身房|游泳馆|银行|医院)/.test(s)) {
    location = s.match(/(线上|线下|会议室|公司|家里|健身房|游泳馆|银行|医院)/)[1];
  }

  // --- 标题：去掉时间/日期/地点词后剩下的核心文本 ---
  let title = s
    .replace(/今天|今晚|明天|明早|后天|大后天|本周|下周/g, '')
    .replace(/[上下]午|晚上|傍晚|凌晨/g, '')
    .replace(/全天|一整天|整天/g, '')          // 先删整词「全天」
    .replace(/\d{1,2}[:：点]\d{0,2}分?/g, '')
    .replace(/(\d{1,2})\s*月\s*(\d{1,2})[日号]?/g, '')
    .replace(/(\d{1,2})[\/\-](\d{1,2})/g, '')
    .replace(/周[一二三四五六日天]/g, '')
    .replace(/[一二三四五六日天]/g, '')        // 残留的「下周三」里的「三」等
    .replace(/在\s*[^\s，,。]+/g, '')
    .replace(/[到至\-～~]\s*\d{1,2}[:：点]\d{0,2}分?/g, '')
    .replace(/^\s*[到至]\s*/g, '')             // 「到11点」被时间替换后残留的「到」
    .replace(/\s[到至]\s/g, ' ')
    .replace(/线上|线下/g, '')
    .replace(/[，,。、：:；;]\s*$/g, '')       // 尾部标点
    .replace(/^\s*[，,。、：:和跟与]\s*/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  // --- 是否会议 ---
  const isMeeting = /会|沟通|评审|例会|周会|复盘|谈判|汇报|对齐|同步|访谈|答疑|见面/.test(s);

  return { title: title || s, date: dateStr, time, endTime, location, allDay, isMeeting };
}

// 把解析结果填进表单
function applyQuickParse() {
  const quick = $('#cal-f-quick');
  if (!quick) return;
  const hint = $('#cal-quick-hint');
  const p = parseQuickText(quick.value);
  if (!p) { hint.textContent = ''; return; }
  if (p.date) $('#cal-f-date').value = p.date;
  if (p.time) $('#cal-f-time').value = p.time;
  if (p.endTime) $('#cal-f-endtime').value = p.endTime;
  if (p.location) $('#cal-f-location').value = p.location;
  if (p.title) $('#cal-f-title').value = p.title;
  if (p.allDay) setCalKind('allday'); else setCalKind('timed');
  // 会议判定影响类型提示
  const parts = [];
  if (p.date) parts.push('📅 ' + p.date);
  if (p.time) parts.push('🕐 ' + p.time + (p.endTime ? '~' + p.endTime : ''));
  if (p.allDay) parts.push('全天');
  if (p.location) parts.push('📍 ' + p.location);
  if (p.isMeeting) parts.push('📞 会议');
  hint.textContent = parts.length ? ('识别：' + parts.join(' · ')) : '识别：' + (p.title || '');
}

async function submitCalForm() {
  const title = $('#cal-f-title').value.trim();
  if (!title) { $('#cal-f-msg').textContent = '请填写标题'; $('#cal-f-title').focus(); return; }
  const date = $('#cal-f-date').value;
  if (!date) { $('#cal-f-msg').textContent = '请选择日期'; return; }
  const isMeet = _calType === 'meeting';
  const meetUrl = $('#cal-f-meet').value.trim();
  // 会议类型但没填链接 → 仍可保存（标注为会议主题，Google 侧可加 Meet）
  const withMeet = isMeet && !!meetUrl && /zoom|teams|meet|tencent|wemeet|feishu/i.test(meetUrl);

  let start, end, allDay = false;
  if (_calKind === 'allday') {
    allDay = true;
    start = date; end = date;
  } else {
    const t = $('#cal-f-time').value || '09:00';
    const e = $('#cal-f-endtime').value || t;
    start = date + ' ' + t;
    end = date + ' ' + e;
    if (e <= t) { $('#cal-f-msg').textContent = '结束时间需晚于开始时间'; return; }
  }

  const body = {
    title, start, end, allDay, withMeet,
    location: $('#cal-f-location').value.trim(),
    description: $('#cal-f-desc').value.trim(),
  };
  // 会议链接作为 description 附加（Google 侧 location 或 desc），有链接则带上
  if (meetUrl) body.description = (body.description ? body.description + '\n' : '') + '会议链接：' + meetUrl;

  const btn = $('#cal-f-submit');
  btn.disabled = true;
  $('#cal-f-msg').textContent = '保存中…';
  try {
    const r = await api('/api/calendar', { method: 'POST', body });
    if (r.ok) {
      $('#cal-f-msg').textContent = '已写入 Google 日历 ✓';
      triggerPublish();
      setTimeout(() => { closeCalModal(); loadMeetings(); }, 700);
    } else {
      $('#cal-f-msg').textContent = r.error || '保存失败';
    }
  } catch (err) {
    $('#cal-f-msg').textContent = err.message || '保存失败';
  } finally {
    btn.disabled = false;
  }
}

function initCalAdd() {
  document.querySelectorAll('.cal-add-btn').forEach(b => {
    b.addEventListener('click', () => openCalModal(b.dataset.addType));
  });
  document.querySelectorAll('[data-cal-close]').forEach(el => {
    el.addEventListener('click', closeCalModal);
  });
  document.querySelectorAll('#cal-f-kind .cal-seg-item').forEach(b => {
    b.addEventListener('click', () => setCalKind(b.dataset.kind));
  });
  const submit = $('#cal-f-submit');
  if (submit) submit.addEventListener('click', submitCalForm);
  // 一句话快记：实时解析 + Ctrl/Cmd+Enter 或 Enter（无 Shift）直接保存
  const quick = $('#cal-f-quick');
  if (quick) {
    quick.addEventListener('input', applyQuickParse);
    quick.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        // 若标题为空则先用解析结果补全
        if (!$('#cal-f-title').value.trim()) applyQuickParse();
        submitCalForm();
      }
    });
  }
  // ESC 关闭
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && $('#cal-modal') && !$('#cal-modal').hidden) closeCalModal();
  });
}

function initNoteAdd() {
  // 关闭按钮
  document.querySelectorAll('[data-note-close]').forEach(el => {
    el.addEventListener('click', closeNoteModal);
  });
  // 加结论行
  const addBtn = $('#note-f-add-concl');
  if (addBtn) addBtn.addEventListener('click', () => addNoteConclRow());
  // 委托：点 .tm-note-btn 弹草稿框（每次日程重渲后重新挂）
  const scheduleBox = $('#today-schedule');
  if (scheduleBox && !scheduleBox.dataset.noteBound) {
    scheduleBox.addEventListener('click', (e) => {
      const btn = e.target.closest('.tm-note-btn');
      if (!btn) return;
      openNoteModal({ title: btn.dataset.noteTitle || '' });
    });
    scheduleBox.dataset.noteBound = '1';
  }
  // 委托：删除某条结论
  const conclList = $('#note-f-concl-list');
  if (conclList) conclList.addEventListener('click', (e) => {
    const del = e.target.closest('[data-del-concl]');
    if (!del) return;
    const row = del.closest('.note-concl-row');
    if (row) row.remove();
  });
  // 提交
  const submit = $('#note-f-submit');
  if (submit) submit.addEventListener('click', submitNote);
  // 结论行内回车 → 自动加新行
  if (conclList) conclList.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.matches('input[type="text"]')) {
      e.preventDefault();
      const rows = conclList.querySelectorAll('.note-concl-row');
      const idx = Array.from(rows).indexOf(e.target.closest('.note-concl-row'));
      if (idx === rows.length - 1) addNoteConclRow();
      const next = conclList.querySelectorAll('input[type="text"]')[idx + 1];
      if (next) setTimeout(() => next.focus(), 30);
    }
  });
  // Esc 关闭
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && $('#note-modal') && !$('#note-modal').hidden) closeNoteModal();
  });
}

// ===== 要货与产销存 =====
async function loadInventory() {
  buildFilters('inventory');
  const qs = new URLSearchParams();
  document.querySelectorAll('#filters-inventory select').forEach(s => { if (s.value) qs.set(s.dataset.key, s.value); });
  qs.set('指标', '要货');
  try {
    const d = await api('/api/metrics?' + qs.toString());
    renderTable('inventory', d.items);
    $('#inventory-stats').innerHTML = [
      { label: '本批有效行', value: d.items.length },
      { label: '需核查 / 无法判断', value: d.items.filter(x => x['确认状态'] !== '已确认').length },
      { label: '数据观察范围', value: '未导入' },
    ].map(c => '<div class="stat-card"><div class="label">' + c.label + '</div><div class="value">' + c.value + '</div></div>').join('');
  } catch (e) { showError('inventory', e.message); }
}

// ===== 资讯与洞察 =====
const INSIGHT_CAT_META = {
  '中东非': { icon: '🌍', color: 'var(--purple)' },
  '印度': { icon: '🇮🇳', color: 'var(--orange)' },
  '东盟': { icon: '🌊', color: 'var(--accent)' },
  'AI 与效率': { icon: '🤖', color: 'var(--green)' },
  '家电行业': { icon: '🏠', color: 'var(--text-sub)' },
};

async function loadInsights() {
  const list = $('#insights-list');
  list.innerHTML = '<div class="empty">加载资讯中…</div>';
  try {
    const d = await api('/api/insights');
    insightData = d;
    renderInsights(d);
  } catch (e) { list.innerHTML = '<div class="empty">' + esc(e.message) + '</div>'; }
}

function renderInsights(d) {
  const box = $('#insights-list');
  const cats = d.categories || {};
  let html = '';

  // AI 透视大卡
  html += '<div class="card ai-outlook-card">' +
    '<div class="card-head"><h3>🧠 今日透视 · 需要我关注什么</h3>' +
      '<div style="display:flex;gap:8px;align-items:center">' +
      (d.generatedAt ? '<span class="intel-meta">' + new Date(d.generatedAt).toLocaleString('zh-CN') + '</span>' : '') +
      '<button class="btn btn-primary btn-sm" id="btn-outlook" onclick="genOutlook()">' + (d.aiOutlook ? '重新透视' : 'AI 透视') + '</button>' +
      '</div></div>' +
    '<div id="outlook-body">' + (d.aiOutlook
      ? '<div class="markdown">' + markdownToHtml(d.aiOutlook) + '</div>'
      : '<div class="empty">点「AI 透视」，我把今天资讯里值得你关注的点和行动建议提炼出来（约 20 秒）</div>') + '</div>' +
    '</div>';

  // 分类卡
  let anyNews = false;
  for (const [cat, meta] of Object.entries(INSIGHT_CAT_META)) {
    const items = cats[cat] || [];
    if (!items.length) continue;
    anyNews = true;
    html += '<div class="card insight-cat-card" style="border-top:3px solid ' + meta.color + '">' +
      '<div class="card-head"><h3>' + meta.icon + ' ' + cat + ' <span class="intel-count">' + items.length + '</span></h3></div>' +
      '<div class="insight-cat-body">' + items.map(n =>
        '<div class="insight-item">' +
          '<div class="insight-title">' + (n.url ? '<a href="' + esc(n.url) + '" target="_blank">' + esc(n.title || '(无标题)') + '</a>' : esc(n.title || '(无标题)')) + '</div>' +
          (n.summary ? '<div class="insight-summary">' + esc(n.summary) + '</div>' : '') +
          (n.suggestion ? '<div class="insight-suggest">💡 ' + esc(n.suggestion) + '</div>' : '') +
          (n.date ? '<div class="insight-date">' + esc(String(n.date).slice(0, 10)) + '</div>' : '') +
        '</div>'
      ).join('') + '</div></div>';
  }
  if (!anyNews) html += '<div class="card"><div class="empty">快照中暂无资讯，等下一次同步后回来</div></div>';
  box.innerHTML = html;
}

async function genOutlook() {
  const btn = $('#btn-outlook');
  const body = $('#outlook-body');
  btn.disabled = true; btn.textContent = '透视中…';
  body.innerHTML = '<div class="empty">正在读今日资讯并生成关注点与建议…</div>';
  try {
    const d = await api('/api/insights/outlook', { method: 'POST' });
    body.innerHTML = '<div class="markdown">' + markdownToHtml(d.aiOutlook || '') + '</div>';
    if (d.generatedAt) btn.insertAdjacentHTML('beforebegin', '<span class="intel-meta">' + new Date(d.generatedAt).toLocaleString('zh-CN') + '</span>');
    btn.textContent = '重新透视';
  } catch (e) {
    body.innerHTML = '<div class="empty">透视失败：' + esc(e.message) + '</div>';
    btn.textContent = 'AI 透视';
  } finally { btn.disabled = false; }
}

// ===== Notion 同步中枢 =====
async function loadSync() {
  $('#sync-connections').innerHTML = '加载中…';
  try {
    const s = await api('/api/sync/status');
    $('#sync-connections').innerHTML = [
      { name: 'Notion 持续读写', status: s.notion.ok ? '已连接' : '异常', ok: s.notion.ok },
      { name: 'Microsoft Graph 邮件', status: s.mail.ok ? '已连接' : '未就绪', ok: s.mail.ok },
      { name: 'Skill 库', status: s.skills + ' 个 Skill', ok: true },
      { name: '最后同步', status: new Date(s.lastSyncAt).toLocaleString('zh-CN'), ok: true },
    ].map(x => '<div class="sync-row"><span>' + esc(x.name) + '</span><span class="status ' + (x.ok ? 'ok' : 'warn') + '">' + esc(x.status) + '</span></div>').join('');
    $('#sync-conflicts').innerHTML = '<div class="empty">当前没有同步冲突</div>';
  } catch (e) { $('#sync-connections').innerHTML = '<div class="empty">' + esc(e.message) + '</div>'; }
}

// ===== AI 工作区 =====
let aiMode = 'chat';
let chatHistory = [];

function setAiMode(mode) {
  aiMode = mode;
  $('#tab-ai-chat').classList.toggle('active', mode === 'chat');
  $('#tab-ai-report').classList.toggle('active', mode === 'report');
  $('#ai-chat-panel').hidden = mode !== 'chat';
  $('#ai-report-panel').hidden = mode !== 'report';
  if (mode === 'report') loadAiView();
}

async function sendChat() {
  const input = $('#ai-chat-text');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  const log = $('#ai-chat-log');
  log.insertAdjacentHTML('beforeend', '<div class="chat-msg user"><div class="chat-bubble">' + esc(text) + '</div></div>');
  log.scrollTop = log.scrollHeight;
  const btn = $('#btn-send-chat');
  btn.disabled = true;
  log.insertAdjacentHTML('beforeend', '<div class="chat-msg bot" id="chat-thinking"><div class="chat-bubble thinking">思考中…</div></div>');
  log.scrollTop = log.scrollHeight;
  try {
    const out = await api('/api/ai/chat', { method: 'POST', body: { message: text, history: chatHistory } });
    chatHistory.push({ role: 'user', content: text });
    chatHistory.push({ role: 'assistant', content: out.reply });
    if (chatHistory.length > 20) chatHistory = chatHistory.slice(-20);
    $('#chat-thinking').remove();
    log.insertAdjacentHTML('beforeend', '<div class="chat-msg bot"><div class="chat-bubble">' + markdownToHtml(out.reply) + '</div></div>');
  } catch (e) {
    $('#chat-thinking').remove();
    log.insertAdjacentHTML('beforeend', '<div class="chat-msg bot"><div class="chat-bubble">⚠️ ' + esc(e.message) + '</div></div>');
  } finally {
    btn.disabled = false;
    log.scrollTop = log.scrollHeight;
    input.focus();
  }
}

async function loadAiView() {
  try {
    skills = (await api('/api/skills')).skills || [];
    const enabled = skills.filter(s => s.enabled);
    const sel = $('#ai-skill');
    sel.innerHTML = '<option value="">自动匹配 Skill</option>' + enabled.map(s => '<option value="' + esc(s.id) + '">' + esc(SKILL_LABEL[s.id] || s.title || s.name || s.id) + (s.command ? ' ' + esc(s.command) : '') + '</option>').join('');
    const recs = await api('/api/executions');
    renderExecutions(recs.executions || []);
  } catch (e) { $('#ai-records').innerHTML = '<div class="empty">' + esc(e.message) + '</div>'; }
}

function onAiFiles(input) {
  aiFiles = Array.from(input.files || []);
  $('#ai-file-list').textContent = aiFiles.map(f => f.name).join(', ') || '';
}

async function runAi() {
  const prompt = $('#ai-prompt').value.trim();
  if (!prompt) { alert('请填写任务需求'); return; }
  const btn = $('#btn-run-ai');
  btn.textContent = '执行中…'; btn.disabled = true;
  try {
    const rec = await api('/api/ai/execute', {
      method: 'POST',
      body: {
        prompt,
        skill: $('#ai-skill').value,
        audience: $('#ai-audience').value,
        scope: $('#ai-scope').value,
        period: $('#ai-period').value,
        attachments: aiFiles.map(f => f.name),
      },
    });
    $('#ai-result').hidden = false;
    $('#ai-result-body').innerHTML = markdownToHtml(rec.result);
    $('#ai-prompt').value = '';
    aiFiles = []; $('#ai-file-list').textContent = '';
    loadAiView();
  } catch (e) { alert('执行失败：' + e.message); }
  finally { btn.textContent = '开始执行 →'; btn.disabled = false; }
}

function saveAiResult() {
  const html = $('#ai-result-body').innerHTML;
  if (!html.trim()) return;
  openCreateTasks();
  const title = document.querySelector('#modal-body [data-key="待办事项"]');
  if (title) title.value = 'AI 结论：' + $('#ai-prompt').value.trim().slice(0, 20);
  const note = document.querySelector('#modal-body [data-key="备注"]');
  if (note) note.value = $('#ai-result-body').innerText.slice(0, 500);
}

function renderExecutions(list) {
  $('#ai-records').innerHTML = list.length
    ? '<div class="exec-list">' + list.slice(0, 10).map(x =>
      '<div class="exec-item"><span class="prompt">' + esc(x.prompt.slice(0, 50)) + (x.prompt.length > 50 ? '…' : '') + '</span><span class="time">' + new Date(x.createdAt).toLocaleString('zh-CN') + '</span></div>'
    ).join('') + '</div>'
    : '<div class="empty">还没有执行记录</div>';
}

function markdownToHtml(md) {
  return esc(md)
    .replace(/^## (.*)$/gm, '<h2>$1</h2>')
    .replace(/^### (.*)$/gm, '<h3>$1</h3>')
    .replace(/^- (.*)$/gm, '<li>$1</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^<li>(.*)<\/li>$/gm, '<ul><li>$1</li></ul>');
}

// ===== Skill 管理 =====
async function loadSkills() {
  try {
    skills = (await api('/api/skills')).skills || [];
    if (!skills.length) {
      $('#skill-list').innerHTML = '<div class="empty">还没有自定义 Skill</div>';
      return;
    }

    // leo-agent 作为总控 Agent 置顶
    const agentIdx = skills.findIndex(s => s.id === 'leo-agent');
    const agent = agentIdx >= 0 ? skills.splice(agentIdx, 1)[0] : null;

    let html = '';
    if (agent) {
      html += renderAgentCard(agent);
    }

    html += '<div class="skill-grid">' + skills.map(s => renderSkillCard(s)).join('') + '</div>';
    $('#skill-list').innerHTML = html;
  } catch (e) { $('#skill-list').innerHTML = '<div class="empty">' + esc(e.message) + '</div>'; }
}

const SKILL_LABEL = { 'leo-agent': '小雷欧总控', 'leo-prefs': '长期偏好', 'leo-email': '邮件偏好', 'leo-weekly-report': '周报偏好', 'leo-project-report': '项目报告偏好', 'leo-ppt': 'PPT偏好', 'leo-excel': 'Excel偏好', 'leo-context-router': '语境分流' };

function skillTitle(s) {
  let t = s.title || s.name || s.id;
  if (/^(name|title)\s*:/.test(t)) t = s.id; // 防 frontmatter 残留
  t = t.replace(/^(name|description|command|version|summary)\s*:\s*/i, '').trim();
  return SKILL_LABEL[s.id] || t || s.id;
}

async function toggleSkill(id, btn) {
  const s = skills.find(x => x.id === id);
  if (!s) return;
  const next = !s.enabled;
  try {
    await api('/api/skills/' + encodeURIComponent(id), { method: 'PATCH', body: { enabled: next } });
    s.enabled = next;
    loadSkills();
  } catch (e) { alert('切换失败：' + e.message); }
}

function renderAgentCard(s) {
  const on = !!s.enabled;
  return '<div class="skill-agent-card' + (on ? '' : ' skill-agent-off') + '">' +
    '<div class="skill-agent-main">' +
      '<div class="skill-agent-title">🦁 ' + esc(skillTitle(s)) +
        '<span class="skill-status ' + (on ? 'on' : 'off') + '">' + (on ? '● 已连接' : '○ 已停用') + '</span>' +
      '</div>' +
      '<div class="skill-agent-desc">' + esc(s.summary || '') + '</div>' +
      '<div class="skill-agent-meta">调用命令：<code>' + esc(s.command || '/' + s.id) + '</code> · ' + esc(s.version || 'v1.0.0') + '</div>' +
    '</div>' +
    '<div class="skill-agent-actions">' +
      '<button class="btn ' + (on ? 'btn-danger' : 'btn-primary') + '" onclick="toggleSkill(\'' + esc(s.id) + '\', this)">' + (on ? '关闭 Agent' : '启动 Agent') + '</button>' +
      '<button class="btn btn-sm" onclick="editSkill(\'' + esc(s.id) + '\')">偏好与规则</button>' +
    '</div>' +
  '</div>';
}

function renderSkillCard(s) {
  const on = !!s.enabled;
  return '<div class="skill-card' + (on ? '' : ' skill-card-off') + '">' +
    '<div class="skill-card-head">' +
      '<div class="skill-card-title">' + esc(skillTitle(s)) + '</div>' +
      '<label class="skill-switch" title="' + (on ? '点击停用' : '点击启用') + '">' +
        '<input type="checkbox" ' + (on ? 'checked' : '') + ' onchange="toggleSkill(\'' + esc(s.id) + '\', this)">' +
        '<span class="skill-switch-slider"></span>' +
      '</label>' +
    '</div>' +
    '<div class="skill-card-command">调用命令：<code>' + esc(s.command || '/' + s.id) + '</code></div>' +
    '<div class="skill-card-desc">' + esc(s.summary || '') + '</div>' +
    '<div class="skill-card-status">' + (on ? '已启用 · ' : '已停用 · ') + esc(s.version || 'v1.0.0') + '</div>' +
    '<div class="skill-card-actions">' +
      '<button class="btn btn-primary" onclick="invokeSkill(\'' + esc(s.id) + '\')">调用</button>' +
      '<button class="btn btn-sm" onclick="editSkill(\'' + esc(s.id) + '\')">偏好与规则</button>' +
    '</div>' +
  '</div>';
}

function invokeSkill(id) {
  const sel = $('#ai-skill');
  if (sel) sel.value = id;
  switchView('ai');
  const input = $('#ai-prompt');
  if (input) input.focus();
}

async function editSkill(id) {
  let d;
  try { d = (await api('/api/skills/' + encodeURIComponent(id))).skill; }
  catch (e) { alert('读取 Skill 失败：' + e.message); return; }
  $('#skill-detail-title').textContent = '偏好与规则 · ' + (SKILL_LABEL[id] || d.title || id);
  $('#skill-detail-body').innerHTML =
    '<div class="form-row"><label>中文名称</label><input id="sd-title" type="text" value="' + esc(d.title || '') + '"></div>' +
    '<div class="form-row"><label>触发场景（何时自动启用，写清楚触发词）</label><textarea id="sd-desc" rows="2" placeholder="用于……时触发">' + esc(d.description || '') + '</textarea></div>' +
    '<div class="form-row"><label>调用命令</label><input id="sd-cmd" type="text" value="' + esc(d.command || '') + '"></div>' +
    '<div class="form-row"><label>偏好与规则（Markdown，保存后写回 SKILL.md，立即生效）</label><textarea id="sd-body" rows="14" style="font-family:Consolas,monospace">' + esc(d.body || '') + '</textarea></div>' +
    '<div class="form-row" style="display:flex;gap:8px">' +
      '<button class="btn btn-primary" onclick="saveSkillEdit(\'' + esc(id) + '\')">保存并生效</button>' +
      '<button class="btn btn-sm" onclick="closeSkillDetail()">取消</button>' +
    '</div>';
  $('#skill-detail-card').hidden = false;
  $('#skill-form-card').hidden = true;
  $('#skill-detail-card').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

async function saveSkillEdit(id) {
  const body = {
    title: $('#sd-title').value.trim(),
    description: $('#sd-desc').value.trim(),
    command: $('#sd-cmd').value.trim(),
    body: $('#sd-body').value,
  };
  if (!body.title) { alert('请填写中文名称'); return; }
  try {
    await api('/api/skills/' + encodeURIComponent(id), { method: 'PUT', body });
    closeSkillDetail();
    loadSkills();
    alert('已保存，规则立即生效');
  } catch (e) { alert('保存失败：' + e.message); }
}

function closeSkillDetail() {
  $('#skill-detail-card').hidden = true;
}

function openSkillForm() {
  $('#skill-form-card').hidden = false;
  $('#skill-detail-card').hidden = true;
  if (currentView !== 'skills') switchView('skills');
}

async function saveSkill() {
  const name = $('#skill-name').value.trim();
  const body = $('#skill-body').value.trim();
  if (!name || !body) { alert('请填写名称和规则'); return; }
  try {
    await api('/api/skills', { method: 'POST', body: { name, body, trigger: $('#skill-trigger').value.trim() } });
    $('#skill-name').value = ''; $('#skill-body').value = ''; $('#skill-trigger').value = '';
    $('#skill-form-card').hidden = true;
    loadSkills();
  } catch (e) { alert('保存失败：' + e.message); }
}

// ===== 设置 =====
function saveSettings() {
  const key = $('#settings-key').value.trim();
  if (!key) { alert('请输入新密钥'); return; }
  localStorage.setItem('wb_key', key);
  alert('已保存到当前会话，请同步修改服务端 config.json 中的 accessKey');
}

// ===== 汇总分析（原） =====
async function loadSummary() {
  const grid = $('#summary-grid');
  grid.innerHTML = '<div class="empty">加载中…</div>';
  try {
    const [t, m] = await Promise.all([api('/api/summary/tasks'), api('/api/summary/metrics')]);
    renderSummaryCards(t, m);
    renderChart(m);
  } catch (e) { grid.innerHTML = '<div class="banner">⚠️ ' + esc(e.message) + '</div>'; }
}

function renderSummaryCards(t, m) {
  const grid = $('#summary-grid');
  const cards = [];
  cards.push({ label: '待办总数', value: t.rows, sub: 'Master Tasks' });
  cards.push({ label: '经营数据条目', value: m.rows, sub: '数据源台账' });
  if (t.byRegion) {
    const all = {};
    Object.values(t.byRegion).forEach((rg) => Object.entries(rg).forEach(([k, v]) => { all[k] = (all[k] || 0) + v.count; }));
    if (all['已完成'] != null) cards.push({ label: '已完成待办', value: all['已完成'], sub: '占 ' + t.rows + ' 项' });
    if (all['进行中'] != null) cards.push({ label: '进行中', value: all['进行中'], sub: '等待他人 ' + (all['等待他人'] || 0) });
  }
  grid.innerHTML = cards.map((c) => '<div class="stat-card"><div class="label">' + c.label + '</div><div class="value">' + c.value + '</div><div class="sub">' + c.sub + '</div></div>').join('');
}

function renderChart(m) {
  const box = $('#chart-box');
  if (!m.byRegion || Object.keys(m.byRegion).length === 0) { box.innerHTML = '<div class="empty">暂无数据</div>'; return; }
  const regions = Object.keys(m.byRegion);
  const metricSet = new Set();
  regions.forEach((r) => Object.keys(m.byRegion[r]).forEach((k) => metricSet.add(k)));
  const metrics = ['收入', '利润', '销量', '均价', '毛利率', '费用率', '预测', '要货'].filter((k) => metricSet.has(k));
  const w = 640, barH = 26, gap = 10, groupGap = 40;
  const colors = ['#4f6ef7', '#18a058', '#f59e0b', '#8b5cf6', '#e5484d', '#06b6d4', '#64748b', '#ec4899'];
  const maxVal = Math.max(1, ...regions.flatMap((r) => metrics.map((k) => m.byRegion[r][k] ? m.byRegion[r][k].sum : 0)));
  const h = regions.length * (metrics.length * (barH + gap) + groupGap) + 40;
  let svg = '<svg viewBox="0 0 ' + w + ' ' + h + '" style="width:100%;height:auto" xmlns="http://www.w3.org/2000/svg">';
  let y = 20;
  regions.forEach((r) => {
    svg += '<text x="0" y="' + (y + 12) + '" font-size="13" font-weight="700" fill="#1f2937">' + esc(r) + '</text>';
    y += 20;
    metrics.forEach((k, i) => {
      const val = m.byRegion[r][k] ? m.byRegion[r][k].sum : 0;
      const bw = Math.max(2, (val / maxVal) * (w - 140));
      svg += '<text x="0" y="' + (y + barH - 8) + '" font-size="11" fill="#6b7280">' + esc(k) + '</text>';
      svg += '<rect x="90" y="' + y + '" width="' + bw + '" height="' + barH + '" rx="4" fill="' + colors[i % colors.length] + '"/>';
      svg += '<text x="' + (90 + bw + 6) + '" y="' + (y + barH - 8) + '" font-size="11" fill="#6b7280">' + Math.round(val) + '</text>';
      y += barH + gap;
    });
    y += groupGap - gap;
  });
  svg += '</svg>';
  box.innerHTML = svg;
}

// ===== 个人空间（二级密码 + 板块，数据来自 Notion 个人库）=====
let currentPersonal = 'finance';
let personalSections = {};   // id -> {name,icon,db,titleProp,fields,url,desc}
let personalCache = {};      // sectionId -> {items, fields, titleProp, at}
let personalAuthedOnce = false;
let personalDashboardUrl = '';

const PERSONAL_COLOR = {
  finance: '#18a058', stocks: '#d5443c', career: '#f59e0b', reading: '#8b5cf6', health: '#06b6d4', growth: '#ec4899',
};

function personalToken() { return sessionStorage.getItem('wb_ptok') || ''; }
function personalAuthed() { return !!personalToken(); }

// 统一的「门」状态：'workbench' = 工作台主密钥，'personal' = 个人空间密码
// 两者共用同一个弹窗（#login-mask），一次只弹一个，避免叠两层密码。
let gateMode = 'workbench';

// 打开个人空间门（由侧栏入口 / 数据 401 / 锁定后进入触发）
function showPersonalAuth() { openGate('personal'); }
function closePersonalLogin() { closeGate(); }
function doPersonalLogin() { doLogin(); }

// 打开门；mode 决定标题/提示/校验目标
function openGate(mode) {
  gateMode = mode === 'personal' ? 'personal' : 'workbench';
  const personal = gateMode === 'personal';
  $('#login-title').textContent = personal ? '🔒 解锁个人空间' : '🔒 输入访问密码';
  $('#login-label').textContent = '访问密码';
  $('#login-key').placeholder = '请输入访问密码';
  $('#login-hint').textContent = personal
    ? '个人空间与工作台共用同一密码。本会话内不再重复询问。'
    : '';
  $('#login-hint').style.display = personal ? '' : 'none';
  $('#login-key').value = '';
  $('#login-error').textContent = '';
  $('#login-btn').textContent = personal ? '解锁个人空间' : '进入工作台';
  $('#login-mask').classList.remove('hidden');
  setTimeout(() => { try { $('#login-key').focus(); } catch (e) {} }, 30);
}

// 关门。个人空间门若被取消，需要回退到安全视图，避免停在「解锁中」的死界面。
// 注意：一定要先读 gateMode 再隐藏；并且在静态版/无 supabase 场景也不能抛异常。
function closeGate() {
  const mask = $('#login-mask');
  if (!mask) return;
  const wasPersonal = gateMode === 'personal';
  gateMode = 'workbench';           // 复位，下次默认走主密钥门
  mask.classList.add('hidden');
  const key = $('#login-key');
  if (key) key.value = '';
  const err = $('#login-error');
  if (err) err.textContent = '';
  if (wasPersonal) {
    // 取消解锁：清掉未通过验证的遗留状态，回到「未解锁」占位
    personalAuthedOnce = false;
    if (currentView === 'personal') {
      currentPersonal = '';
      const content = $('#personal-content');
      if (content) content.innerHTML = '<div class="empty">🔒 已取消解锁。点左侧「Personal Space」或上方板块按钮可重新解锁。</div>';
    }
    try { renderPersonalSections(); } catch (e) {}
    try { renderPersonalLock(); } catch (e) {}
  }
}

// 关闭个人空间密码设置弹窗（× / 取消 / Esc 共用）
function closePersonalSetup() {
  const m = $('#personal-setup-mask');
  if (m) m.classList.add('hidden');
  const k = $('#personal-setup-key');
  if (k) k.value = '';
  const e2 = $('#personal-setup-error');
  if (e2) e2.textContent = '';
}

function openPersonalSetup() {
  $('#personal-setup-key').value = '';
  $('#personal-setup-error').textContent = '';
  $('#personal-setup-mask').classList.remove('hidden');
  $('#personal-setup-key').focus();
}
async function savePersonalSetup() {
  const pw = $('#personal-setup-key').value;
  if (!pw || pw.length < 4) { $('#personal-setup-error').textContent = '至少 4 位'; return; }
  try {
    await api('/api/personal/config', { method: 'PUT', body: { action: 'password', password: pw, oldPassword: '' } });
    closePersonalSetup();
    showPersonalAuth(); // 设置后立即要求验证一次
  } catch (e) { $('#personal-setup-error').textContent = e.message; }
}

async function personalLock() {
  const tk = personalToken();
  // 先同步折叠锁定（不等待登出网络请求），保证切走后立即不暴露板块
  lockPersonalNow();
  if (tk) { try { await api('/api/personal/logout', { method: 'POST', body: { token: tk } }); } catch (e) {} }
}

// 同步锁定 + 折叠（无网络依赖）。任何非 personal 视图切入时自动调用
function lockPersonalNow() {
  sessionStorage.removeItem('wb_ptok');
  personalAuthedOnce = false;
  renderPersonalLock();
  renderPersonalSections();
  renderPersonalDashboard();
  $('#personal-content').innerHTML = '<div class="empty">🔒 已锁定个人空间</div>';
}

async function loadPersonalSections() {
  try {
    const d = await api('/api/personal/sections');
    personalSections = d.sections || {};
    personalDashboardUrl = d.dashboardUrl || '';
  } catch (e) { personalSections = {}; personalDashboardUrl = ''; }
}

function renderPersonalSections() {
  const box = $('#personal-sections');
  if (!box) return;
  const ids = Object.keys(personalSections);
  if (!ids.length) { box.innerHTML = '<div class="empty">未配置板块（config.personal.sections 为空）</div>'; return; }
  // 未解锁时不渲染具体板块，只显示 lock 占位
  if (!personalAuthed()) {
    box.innerHTML = '<div class="empty">🔒 解锁后显示 6 个板块入口</div>';
    return;
  }
  // 板块做成可点击 tab：点击后在工作台内展示该板块数据（不再跳 Notion）
  box.innerHTML = ids.map((id) => {
    const s = personalSections[id];
    const color = PERSONAL_COLOR[id] || '#8b5cf6';
    const active = id === currentPersonal;
    return '<button class="psec-tab ' + (active ? 'active' : '') + '" data-sec="' + id + '" ' +
      'onclick="enterPersonal(\'' + id + '\')" style="--pc:' + color + '">' +
      '<span class="psec-ico">' + esc(s.icon || '·') + '</span>' +
      '<span class="psec-name">' + esc(s.name || id) + '</span>' +
      (s.mode === 'dash' ? '<span class="psec-tag" title="界面直连数据">仪表</span>' : '') +
    '</button>';
  }).join('');
}

// 渲染顶部 LIFE Dashboard 直达卡
function renderPersonalDashboard() {
  const el = $('#personal-dashboard-link');
  if (!el) return;
  if (!personalAuthed()) { el.hidden = true; el.href = '#'; return; }
  const url = (personalDashboardUrl || '').trim();
  if (url) {
    el.href = url;
    el.hidden = false;
  } else {
    el.hidden = true;
  }
}

function enterPersonal(section) {
  // 入口锁：data-section=__gate__ 表示用户点的是"个人空间🔒"这个门
  // 未解锁状态下永远走分支，不会把板块名暴露在 URL/currentPersonal
  if (section === '__gate__' || !section) section = '';
  currentPersonal = section;
  currentView = 'personal';
  currentRegion = null;
  // sidebar 高亮：未解锁时只让门入口高亮，不高亮具体板块
  document.querySelectorAll('.nav-item').forEach((n) => {
    if (n.dataset.view !== 'personal') { n.classList.toggle('active', false); return; }
    const authed = personalAuthed();
    if (!authed || !section) {
      n.classList.toggle('active', n.classList.contains('personal-gate'));
    } else {
      n.classList.toggle('active', n.dataset.section === section);
    }
  });
  $('#view-title').textContent = 'Personal Space';
  $('#breadcrumbs').textContent = '工作台 / Personal Space';
  document.querySelectorAll('.view').forEach((v) => (v.hidden = true));
  $('#view-personal').hidden = false;
  renderPersonalSections();
  renderPersonalDashboard();
  renderPersonalLock();
  updateNewButton();
  // 未解锁 -> 弹二级门，并清空 currentPersonal 以避免泄漏
  if (!personalAuthed()) {
    currentPersonal = '';
    $('#personal-content').innerHTML = '<div class="empty">🔒 个人空间受二级密码保护，解锁后查看财务 / 股票 / 健康等私密数据。</div>';
    showPersonalAuth();
    return;
  }
  // 从门进入（无具体板块）：默认落到「财务状况」展示（数据最完整）
  if (!currentPersonal) {
    currentPersonal = 'finance';
    renderPersonalSections();  // 重新渲染让 finance tab 高亮
    renderPersonalLock();
  }
  loadPersonalCurrent();
}

function renderPersonalLock() {
  const el = $('#personal-lock-state');
  if (!el) return;
  el.textContent = personalAuthed() ? '已解锁' : '未解锁';
  el.className = 'personal-lock-badge ' + (personalAuthed() ? 'on' : 'off');
  // 侧边栏：未解锁时只留一个 🔒 入口，不显示具体板块
  const list = $('#personal-nav-list');
  if (list) list.hidden = !personalAuthed();
}

// 动态加载「支出分层透视」组件（幂等），加载完成后渲染进 box；组件已存在则直接渲染
function mountFinanceLayers(box) {
  if (!box) return;
  const doRender = function () {
    if (!window.renderFinanceSpendLayers) return;
    window.renderFinanceSpendLayers(box);
  };
  if (window.renderFinanceSpendLayers) { doRender(); return; }
  box.innerHTML = '<div class="empty" style="padding:6px">加载分层透视…</div>';
  const s = document.createElement('script');
  s.src = '/personal/finance-spend-layers.js?v=' + Date.now();
  s.onload = doRender;
  s.onerror = function () {
    if (box.innerHTML.indexOf('支出分层') === -1) {
      box.innerHTML = '<div class="banner">分层透视组件加载失败，请刷新页面重试。</div>';
    }
  };
  document.head.appendChild(s);
}

// 动态加载「月度预算锚点」组件（幂等），置于分层透视卡之下
function mountFinanceBudget(box) {
  if (!box) return;
  const doRender = function () {
    if (!window.renderFinanceBudget) return;
    window.renderFinanceBudget(box);
  };
  if (window.renderFinanceBudget) { doRender(); return; }
  box.innerHTML = '<div class="empty" style="padding:6px">加载预算锚点…</div>';
  const s = document.createElement('script');
  s.src = '/personal/finance-budget.js?v=' + Date.now();
  s.onload = doRender;
  s.onerror = function () {
    if (box.innerHTML.indexOf('月度预算') === -1) {
      box.innerHTML = '<div class="banner">预算锚点组件加载失败，请刷新页面重试。</div>';
    }
  };
  document.head.appendChild(s);
}

// 动态加载「股票实时盯盘看板」组件（幂等），数据来自后端东财行情接口
function mountStockBoard(box) {
  if (!box) return;
  const doRender = function () {
    if (!window.renderStockBoard) return;
    window.renderStockBoard(box);
  };
  if (window.renderStockBoard) { doRender(); return; }
  box.innerHTML = '<div class="empty" style="padding:6px">加载股票看板…</div>';
  const s = document.createElement('script');
  s.src = '/personal/stock-board.js?v=' + Date.now();
  s.onload = doRender;
  s.onerror = function () {
    if (box.innerHTML.indexOf('实时行情') === -1) {
      box.innerHTML = '<div class="banner">股票看板组件加载失败，请刷新页面重试。</div>';
    }
  };
  document.head.appendChild(s);
}

// ===== 财务板块 v5：同期对比 + 构成 + 下钻 + 剔除大额 =====

// 分类颜色映射（支出分类用暖色系，收入分类用冷色系）
const FIN_CAT_COLORS = {
  '贷款': '#ef4444', '税费': '#f97316', '购物': '#f59e0b', '餐饮': '#84cc16',
  '住宿': '#14b8a6', '交通': '#06b6d4', '娱乐': '#8b5cf6', '医疗': '#ec4899',
  '日常': '#a855f7', '酒水': '#fbbf24', '礼品': '#fb7185', '礼金': '#f43f5e',
  '旅行': '#22c55e', '门票': '#4ade80', '通信': '#60a5fa', 'Communication': '#60a5fa',
  '其他': '#94a3b8', 'Education': '#2dd4bf',
  '工资': '#3b82f6', '奖金': '#22c55e', '投资': '#8b5cf6', '股权': '#a78bfa',
  '其他收入': '#94a3b8', '红包': '#f59e0b'
};
function finCatColor(name) { return FIN_CAT_COLORS[name] || '#94a3b8'; }

function finFmt(n) { return n == null ? '—' : Math.round(n).toLocaleString('zh-CN'); }
function finPct(n) { return (n == null || isNaN(n)) ? '—' : ((n >= 0 ? '+' : '') + n.toFixed(1) + '%'); }

// 一句话结论生成
function buildFinanceConclusions(d) {
  const yoy = d.yoy || {};
  const ytd = d.ytd || {};
  const ly = d.lastYear || {};
  const out = [];
  // 1) 收入结论
  if (yoy.income) {
    let s = '今年收入 ' + finFmt(yoy.income.this) + '，同比 ' + finPct(yoy.income.deltaPct);
    if (ytd.bigIncome && ly.ytd) {
      const dailyIncPct = ly.ytd.dailyIncome > 0 ? ((ytd.dailyIncome - ly.ytd.dailyIncome) / ly.ytd.dailyIncome) * 100 : null;
      s += '；剔除股权（¥' + finFmt(ytd.bigIncome) + '）后日常收入 ' + finFmt(ytd.dailyIncome) + '，' + (dailyIncPct == null ? '—' : (dailyIncPct >= 0 ? '增长 ' : '下降 ') + Math.abs(dailyIncPct).toFixed(1) + '%');
    }
    out.push({ icon: '📈', tone: yoy.income.deltaPct >= 0 ? 'up' : 'down', text: s });
  }
  // 2) 支出结论
  if (yoy.expense) {
    let s = '今年支出 ' + finFmt(yoy.expense.this) + '，同比 ' + finPct(yoy.expense.deltaPct);
    if (ytd.bigExpense && ly.ytd) {
      const dailyExpPct = ly.ytd.dailyExpense > 0 ? ((ytd.dailyExpense - ly.ytd.dailyExpense) / ly.ytd.dailyExpense) * 100 : null;
      s += '；剔除大额必要（提前还款/税费 ¥' + finFmt(ytd.bigExpense) + '）后日常消费 ' + finFmt(ytd.dailyExpense) + '，' + (dailyExpPct == null ? '—' : (dailyExpPct >= 0 ? '增长 ' : '下降 ') + Math.abs(dailyExpPct).toFixed(1) + '%');
    }
    out.push({ icon: '💸', tone: yoy.expense.deltaPct >= 30 ? 'down' : 'up', text: s });
  }
  // 3) 结余结论
  if (ytd.balance != null) {
    out.push({ icon: '💰', tone: ytd.balance >= 0 ? 'up' : 'down', text: '当前结余 ' + finFmt(ytd.balance) + (ytd.balance >= 0 ? '，正向储蓄。' : '，入不敷出需注意。') });
  }
  // 4) 大额提示
  if (ytd.bigExpense && ytd.bigExpense > 0) {
    out.push({ icon: '🏠', tone: 'neutral', text: '大额必要支出 ' + finFmt(ytd.bigExpense) + '（提前还款/税费/房租等一次性），不计入日常消费口径。' });
  }
  return out;
}

// 堆叠构成条（横向，各分类着色）
function buildStackBar(entries, total) {
  if (!entries.length) return '<div class="empty">暂无数据</div>';
  const sum = total || entries.reduce(function (a, e) { return a + e[1]; }, 0) || 1;
  let segs = '';
  let acc = 0;
  for (const [name, amt] of entries) {
    const w = (amt / sum) * 100;
    segs += '<div class="fin-stack-seg" title="' + name + ' ¥' + finFmt(amt) + '" style="left:' + acc.toFixed(2) + '%;width:' + w.toFixed(2) + '%;background:' + finCatColor(name) + '"></div>';
    acc += w;
  }
  return '<div class="fin-stack">' + segs + '</div>';
}

// 构成图例（分类名 + 金额 + 占比，色点）
function buildLegend(entries, total) {
  const sum = total || entries.reduce(function (a, e) { return a + e[1]; }, 0) || 1;
  return '<div class="fin-legend">' + entries.map(function (e) {
    const pct = (e[1] / sum) * 100;
    return '<div class="fin-legend-item"><i style="background:' + finCatColor(e[0]) + '"></i><span class="fin-legend-name">' + e[0] + '</span><span class="fin-legend-v">' + finFmt(e[1]) + '</span><span class="fin-legend-pct">' + pct.toFixed(1) + '%</span></div>';
  }).join('') + '</div>';
}

// 同期对比柱状图（今年彩柱 + 去年灰柱）
// ===== 财务柱状图 v6：全年12月 + 今年堆叠分类彩柱 + 去年灰柱 + 金额/同比标注 + 分类收拢 =====
// 参数 d：财务数据；mode：'expense' | 'income'；chartW：SVG 宽度
function buildFinanceChart(d, mode, chartW) {
  const thisYear = String(d.year || new Date().getFullYear());
  const lastYear = String(Number(thisYear) - 1);
  // 今年逐月（含分类）—— month 字段兼容 label（adaptBaaToBoard 产出的是 label）
  const thisMonths = (d.months || []).reduce(function (acc, m) {
    const mk = (m.month || m.label || '').slice(5) || (m.month || m.label || '');
    acc[mk] = m; // 以 '01'..'09' 为 key
    return acc;
  }, {});
  // 去年逐月（含分类）
  const lastMonths = (d.lastYear && d.lastYear.byMonth || []).reduce(function (acc, m) {
    const mk = (m.month || '').slice(5) || m.month || '';
    acc[mk] = m;
    return acc;
  }, {});

  const keys = ['01','02','03','04','05','06','07','08','09','10','11','12'];

  const getThis = function (k) { return thisMonths[k] || null; };
  const getLast = function (k) { return lastMonths[k] || null; };

  // 分类名 -> 金额的取值：支出用 categories，收入用 incomeCats
  const catField = mode === 'income' ? 'incomeCats' : 'categories';
  const thisTotalField = mode === 'income' ? 'income' : 'expense';
  const lastTotalField = mode === 'income' ? 'income' : 'expense';

  // 收集今年所有分类，构建统一颜色顺序
  const catSet = {};
  keys.forEach(function (k) {
    const m = getThis(k);
    if (m && m[catField]) Object.keys(m[catField]).forEach(function (c) { catSet[c] = true; });
  });
  const cats = Object.keys(catSet);

  // 计算全年（含去年）最大值，用于 y 轴 scale
  let maxV = 1;
  keys.forEach(function (k) {
    const t = getThis(k), l = getLast(k);
    if (t) maxV = Math.max(maxV, t[thisTotalField] || 0);
    if (l) maxV = Math.max(maxV, l[thisTotalField] || 0);
  });

  const chartH = 220, padX = 18, padTop = 34; // 顶部留空间给金额/同比标注
  const n = 12;
  const groupW = (chartW - padX * 2) / n;
  const barW = Math.max(5, groupW * 0.34);
  const plotH = chartH - padTop - 30; // 可绘制高度
  const baseY = padTop + plotH;

  let bars = '', labels = '';
  keys.forEach(function (k, i) {
    const cx = padX + groupW * i + groupW / 2;
    const t = getThis(k), l = getLast(k);
    const thisV = t ? (t[thisTotalField] || 0) : 0;
    const lastV = l ? (l[thisTotalField] || 0) : 0;

    // 今年柱：堆叠分类
    if (t && thisV > 0 && t[catField]) {
      let accY = baseY;
      const entries = Object.entries(t[catField]).sort(function (a, b) { return b[1] - a[1]; });
      entries.forEach(function (e) {
        const segH = (e[1] / maxV) * plotH;
        if (segH < 0.5) return; // 太小不画
        const y = accY - segH;
        bars += '<rect x="' + (cx - barW - 2) + '" y="' + y + '" width="' + barW + '" height="' + segH + '" fill="' + finCatColor(e[0]) + '" data-month="' + thisYear + '-' + k + '" data-cat="' + esc(e[0]) + '" class="fin-seg" style="cursor:pointer"/>';
        accY = y;
      });
      // 今年总金额标注（柱顶）
      bars += '<text x="' + (cx - barW / 2 - 2) + '" y="' + (baseY - (thisV / maxV) * plotH - 4) + '" text-anchor="middle" font-size="8.5" fill="#d5443c" font-weight="600">' + finShort(thisV) + '</text>';
    } else if (t) {
      // 无分类但有权重
      const thisH = (thisV / maxV) * plotH;
      bars += '<rect x="' + (cx - barW - 2) + '" y="' + (baseY - thisH) + '" width="' + barW + '" height="' + thisH + '" fill="#d5443c" data-month="' + thisYear + '-' + k + '" class="fin-seg" style="cursor:pointer"/>';
    }

    // 去年柱（灰色细柱）
    if (l && lastV > 0) {
      const lastH = (lastV / maxV) * plotH;
      bars += '<rect x="' + (cx + 2) + '" y="' + (baseY - lastH) + '" width="' + Math.max(3, barW * 0.5) + '" height="' + lastH + '" fill="#cbd5e1" data-month="' + lastYear + '-' + k + '" data-cat="__last__" class="fin-seg" style="cursor:pointer"/>';
    }

    // 同比标注（今年 vs 去年同月）
    if (t && l && lastV > 0) {
      const pct = ((thisV - lastV) / lastV) * 100;
      const isUp = pct >= 0;
      bars += '<text x="' + cx + '" y="' + (padTop - 14) + '" text-anchor="middle" font-size="8" fill="' + (isUp ? '#d5443c' : '#18a058') + '">' + (isUp ? '▲' : '▼') + Math.abs(pct).toFixed(0) + '%</text>';
    } else if (t && thisV > 0) {
      bars += '<text x="' + cx + '" y="' + (padTop - 14) + '" text-anchor="middle" font-size="8" fill="#94a3b8">新增</text>';
    }

    // 月份标签
    labels += '<text x="' + cx + '" y="' + (chartH - 2) + '" text-anchor="middle" font-size="9" fill="#9099a6">' + Number(k) + '月</text>';
  });

  return '<svg viewBox="0 0 ' + chartW + ' ' + chartH + '" style="width:100%;height:auto;display:block">' +
    '<line x1="' + (padX - 4) + '" y1="' + baseY + '" x2="' + (chartW - 6) + '" y2="' + baseY + '" stroke="#e2e8f0" stroke-width="1"/>' +
    bars + labels + '</svg>';
}

// 金额缩写：>1万 显示 "1.2万"，否则取整
function finShort(n) {
  if (n == null) return '';
  if (n >= 10000) return (n / 10000).toFixed(1) + '万';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
  return String(Math.round(n));
}

// 分类收拢视图：点分类后，整图聚焦该分类的逐月（今年堆叠里只显示该分类 + 去年该分类灰柱）
function buildCatFocusChart(d, mode, catName, chartW) {
  const thisYear = String(d.year || new Date().getFullYear());
  const lastYear = String(Number(thisYear) - 1);
  const thisMonths = (d.months || []).reduce(function (acc, m) { const mk = (m.month || m.label || '').slice(5) || (m.month || m.label || ''); acc[mk] = m; return acc; }, {});
  const lastMonths = (d.lastYear && d.lastYear.byMonth || []).reduce(function (acc, m) { const mk = (m.month || '').slice(5) || m.month || ''; acc[mk] = m; return acc; }, {});
  const keys = ['01','02','03','04','05','06','07','08','09','10','11','12'];
  const catField = mode === 'income' ? 'incomeCats' : 'categories';
  const thisTotalField = mode === 'income' ? 'income' : 'expense';
  const lastTotalField = mode === 'income' ? 'income' : 'expense';

  // 收集该分类的逐月金额
  const series = [];
  let maxV = 1;
  keys.forEach(function (k) {
    const t = thisMonths[k], l = lastMonths[k];
    const tv = (t && t[catField] && t[catField][catName]) || 0;
    const lv = (l && l[catField] && l[catField][catName]) || 0;
    series.push({ k: k, tv: tv, lv: lv, thisTotal: (t ? t[thisTotalField] : 0), lastTotal: (l ? l[lastTotalField] : 0) });
    maxV = Math.max(maxV, tv, lv);
  });

  const chartH = 200, padX = 18, padTop = 30;
  const n = 12, groupW = (chartW - padX * 2) / n, barW = Math.max(5, groupW * 0.34);
  const plotH = chartH - padTop - 30, baseY = padTop + plotH;

  let bars = '', labels = '';
  series.forEach(function (s, i) {
    const cx = padX + groupW * i + groupW / 2;
    const color = finCatColor(catName);
    if (s.tv > 0) {
      const h = (s.tv / maxV) * plotH;
      bars += '<rect x="' + (cx - barW - 2) + '" y="' + (baseY - h) + '" width="' + barW + '" height="' + h + '" fill="' + color + '" data-month="' + thisYear + '-' + s.k + '" class="fin-seg" style="cursor:pointer"/>';
      bars += '<text x="' + (cx - barW / 2 - 2) + '" y="' + (baseY - h - 3) + '" text-anchor="middle" font-size="8.5" fill="' + color + '" font-weight="600">' + finShort(s.tv) + '</text>';
    }
    if (s.lv > 0) {
      const h = (s.lv / maxV) * plotH;
      bars += '<rect x="' + (cx + 2) + '" y="' + (baseY - h) + '" width="' + Math.max(3, barW * 0.5) + '" height="' + h + '" fill="#cbd5e1" data-month="' + lastYear + '-' + s.k + '" class="fin-seg" style="cursor:pointer"/>';
    }
    if (s.tv > 0 && s.lv > 0) {
      const pct = ((s.tv - s.lv) / s.lv) * 100;
      bars += '<text x="' + cx + '" y="' + (padTop - 12) + '" text-anchor="middle" font-size="8" fill="' + (pct >= 0 ? '#d5443c' : '#18a058') + '">' + (pct >= 0 ? '▲' : '▼') + Math.abs(pct).toFixed(0) + '%</text>';
    }
    labels += '<text x="' + cx + '" y="' + (chartH - 2) + '" text-anchor="middle" font-size="9" fill="#9099a6">' + Number(s.k) + '月</text>';
  });

  return '<svg viewBox="0 0 ' + chartW + ' ' + chartH + '" style="width:100%;height:auto;display:block">' +
    '<line x1="' + (padX - 4) + '" y1="' + baseY + '" x2="' + (chartW - 6) + '" y2="' + baseY + '" stroke="#e2e8f0" stroke-width="1"/>' +
    bars + labels + '</svg>';
}


async function renderFinanceDash() {
  const box = $('#personal-content');
  if (!box) return;
  box.innerHTML = '<div class="empty">读取你的百事AA 收支数据…</div>';
  let d;
  try {
    d = await api('/api/personal/finance');
  } catch (e) {
    if (e instanceof PersonalAuthError) { showPersonalAuth(); return; }
    box.innerHTML = '<div class="banner">⚠️ 收支数据读取失败：' + esc(e.message) + '</div>';
    return;
  }
  const ytd = d.ytd || {};
  const yoy = d.yoy || {};
  const cm = d.currentMonth || null;
  const months = d.months || [];
  const byCategory = d.byCategory || {};
  const incomeByCat = d.incomeByCat || {};
  const lastYear = d.lastYear || null;
  const monthsCompare = (yoy && yoy.monthsCompare) || [];

  // 分类排序（支出/收入 TOP）
  const expEntries = Object.entries(byCategory).sort(function (a, b) { return b[1] - a[1]; });
  const incEntries = Object.entries(incomeByCat).sort(function (a, b) { return b[1] - a[1]; });
  const totalExp = ytd.expense || 0;
  const totalInc = ytd.income || 0;

  // 结论卡
  const conclusions = buildFinanceConclusions(d);
  const conclHtml = '<div class="fin-concl">' + conclusions.map(function (c) {
    return '<div class="fin-concl-item ' + c.tone + '"><span class="fin-concl-ico">' + c.icon + '</span><span>' + c.text + '</span></div>';
  }).join('') + '</div>';

  // KPI 卡（收入/支出/结余 + 剔除视角）
  const kpiHtml = '<div class="fin-kpis">' +
    '<div class="fin-kpi"><div class="fin-kpi-v" style="color:#18a058">' + finFmt(ytd.income) + '</div><div class="fin-kpi-l">全年收入</div><div class="fin-kpi-sub">日常 ' + finFmt(ytd.dailyIncome) + '</div></div>' +
    '<div class="fin-kpi"><div class="fin-kpi-v" style="color:#d5443c">' + finFmt(ytd.expense) + '</div><div class="fin-kpi-l">全年支出</div><div class="fin-kpi-sub">日常 ' + finFmt(ytd.dailyExpense) + '</div></div>' +
    '<div class="fin-kpi"><div class="fin-kpi-v" style="' + (ytd.balance >= 0 ? 'color:#18a058' : 'color:#d5443c') + '">' + finFmt(ytd.balance) + '</div><div class="fin-kpi-l">结余</div><div class="fin-kpi-sub">' + (lastYear ? '去年 ' + finFmt(lastYear.ytd.balance) : '') + '</div></div>' +
  '</div>';

  // 支出同期对比（全年12月堆叠分类 + 去年灰柱 + 金额/同比标注）
  const expChart = buildFinanceChart(d, 'expense', 680);
  // 收入同期对比
  const incChart = buildFinanceChart(d, 'income', 680);

  // 可点击的分类图例（点分类 -> 收拢聚焦该分类）
  const expLegendChips = '<div class="fin-cat-chips">' + expEntries.map(function (e) {
    return '<button class="fin-cat-chip" data-cat="' + esc(e[0]) + '" data-mode="expense" style="--cc:' + finCatColor(e[0]) + '"><i></i>' + esc(e[0]) + '<span>' + finFmt(e[1]) + '</span></button>';
  }).join('') + '</div>';
  const incLegendChips = '<div class="fin-cat-chips">' + incEntries.map(function (e) {
    return '<button class="fin-cat-chip" data-cat="' + esc(e[0]) + '" data-mode="income" style="--cc:' + finCatColor(e[0]) + '"><i></i>' + esc(e[0]) + '<span>' + finFmt(e[1]) + '</span></button>';
  }).join('') + '</div>';

  // 当月建议卡
  const cmCard = cm ? (
    '<div class="fin-month-card">' +
      '<div class="fin-month-head"><span class="fin-month-name">' + esc(cm.month) + ' 当月</span><span class="fin-month-days">已过 ' + cm.daysElapsed + ' / ' + cm.daysInMonth + ' 天</span></div>' +
      '<div class="fin-month-stats">' +
        '<div class="fin-ms"><div class="fin-ms-v">' + finFmt(cm.spent) + '</div><div class="fin-ms-l">已花</div></div>' +
        '<div class="fin-ms"><div class="fin-ms-v">' + finFmt(cm.dailyAvg) + '</div><div class="fin-ms-l">日均</div></div>' +
        '<div class="fin-ms"><div class="fin-ms-v" style="color:#18a058">' + finFmt(cm.remainingSuggested) + '</div><div class="fin-ms-l">剩余 ' + cm.daysLeft + ' 天建议</div></div>' +
      '</div>' +
    '</div>'
  ) : '';

  // 下钻面板（初始隐藏）
  const drillPanel = '<div id="fin-drill" class="fin-drill" style="display:none"></div>';

  box.innerHTML =
    '<div class="card" style="margin-bottom:12px">' +
      '<div class="card-head"><h3>财务 · ' + esc(d.label || '收支') + '</h3><span class="intel-meta">数据源：百事AA · ' + (d.source ? '账本 ' + esc(d.source.replace('baa:', '')) : '') + '</span></div>' +
      conclHtml +
      kpiHtml +
    '</div>' +
    '<div class="card" style="margin-bottom:12px" id="fin-exp-chart-card">' +
      '<div class="card-head"><h3>支出 · 全年 vs 同期</h3>' +
        '<span class="fin-legend-inline"><i style="background:#d5443c"></i>今年 <i style="background:#cbd5e1"></i>去年</span></div>' +
      '<div class="fin-chart-wrap" id="fin-exp-chart">' + expChart + '</div>' +
      '<div class="fin-hint">柱子内部按分类分段着色；点柱看当月明细，点下方分类收拢整图</div>' +
      expLegendChips +
    '</div>' +
    '<div class="card" style="margin-bottom:12px" id="fin-inc-chart-card">' +
      '<div class="card-head"><h3>收入 · 全年 vs 同期</h3>' +
        '<span class="fin-legend-inline"><i style="background:#3b82f6"></i>今年 <i style="background:#cbd5e1"></i>去年</span></div>' +
      '<div class="fin-chart-wrap" id="fin-inc-chart">' + incChart + '</div>' +
      '<div class="fin-hint">点柱看当月收入明细，点下方分类收拢整图</div>' +
      incLegendChips +
    '</div>' +
    '<div class="card" style="margin-bottom:12px;display:none" id="fin-focus-card">' +
      '<div class="card-head"><h3 id="fin-focus-title">分类聚焦</h3><button class="fin-focus-close" onclick="closeCatFocus()">× 返回</button></div>' +
      '<div id="fin-focus-chart"></div>' +
      '<div id="fin-focus-summary" class="fin-drill-ai"></div>' +
    '</div>' +
    (cmCard ? '<div style="margin-bottom:12px">' + cmCard + '</div>' : '') +
    drillPanel;

  // 绑定下钻事件
  bindFinanceDrill(box, d);
}

// 下钻：点月柱 → 当月 vs 去年同期明细 + AI 总结；点分类 → YTD vs 去年同期
function bindFinanceDrill(box, d) {
  const monthsCompare = (d.yoy && d.yoy.monthsCompare) || [];
  const byMonth = d.months || [];
  const byCategory = d.byCategory || {};
  const lastYear = d.lastYear || {};
  const lastCat = (lastYear && lastYear.byCategory) || {};
  const drill = $('#fin-drill');
  const fmt = finFmt;

  // 点柱子（月下钻）
  box.querySelectorAll('.fin-bar-this, .fin-bar-last').forEach(function (rect) {
    rect.addEventListener('click', function () {
      const month = rect.getAttribute('data-month');
      const m = monthsCompare.find(function (x) { return x.month === month; });
      if (!m) return;
      const bm = byMonth.find(function (x) { return (x.label === month) || (x.key === month.replace('-', '')); });
      const cats = (bm && bm.categories) || {};
      const catEntries = Object.entries(cats).sort(function (a, b) { return b[1] - a[1]; });

      // AI 总结（基于规则，本地生成）
      let aiSummary = '';
      if (m.expense > 0 && m.lastExpense > 0) {
        const pct = ((m.expense - m.lastExpense) / m.lastExpense) * 100;
        const topCat = catEntries[0];
        aiSummary = month + ' 支出 ' + fmt(m.expense) + '，比去年同期 ' + fmt(m.lastExpense) + '（' + (pct >= 0 ? '+' : '') + pct.toFixed(1) + '%）。';
        if (topCat) aiSummary += '本月最大支出是「' + topCat[0] + '」¥' + fmt(topCat[1]) + '，占当月 ' + (m.expense > 0 ? ((topCat[1] / m.expense) * 100).toFixed(0) : 0) + '%。';
        if (m.bigExpense > 0) aiSummary += ' 含大额必要支出 ¥' + fmt(m.bigExpense) + '（提前还款/税费等）。';
      } else {
        aiSummary = month + ' 支出 ' + fmt(m.expense) + (m.lastExpense > 0 ? '，去年同期 ' + fmt(m.lastExpense) : '，去年同期无记录') + '。';
      }

      let catRows = catEntries.length ? catEntries.slice(0, 8).map(function (e) {
        return '<div class="fin-drill-row"><span>' + e[0] + '</span><span>' + fmt(e[1]) + '</span></div>';
      }).join('') : '<div class="empty">该月暂无分类明细</div>';

      drill.style.display = 'block';
      drill.innerHTML =
        '<div class="fin-drill-head">' +
          '<span class="fin-drill-title">' + month + ' 明细</span>' +
          '<button class="fin-drill-close" onclick="document.getElementById(\'fin-drill\').style.display=\'none\'">×</button>' +
        '</div>' +
        '<div class="fin-drill-grid">' +
          '<div class="fin-drill-cell"><div class="fin-drill-l">本月支出</div><div class="fin-drill-v" style="color:#d5443c">' + fmt(m.expense) + '</div></div>' +
          '<div class="fin-drill-cell"><div class="fin-drill-l">去年同期</div><div class="fin-drill-v" style="color:#94a3b8">' + fmt(m.lastExpense) + '</div></div>' +
          '<div class="fin-drill-cell"><div class="fin-drill-l">同比</div><div class="fin-drill-v ' + ((m.expenseDeltaPct || 0) >= 0 ? 'up' : 'down') + '">' + finPct(m.expenseDeltaPct) + '</div></div>' +
          (m.bigExpense > 0 ? '<div class="fin-drill-cell"><div class="fin-drill-l">大额必要</div><div class="fin-drill-v" style="color:#f97316">' + fmt(m.bigExpense) + '</div></div>' : '') +
        '</div>' +
        '<div class="fin-drill-ai">🤖 ' + aiSummary + '</div>' +
        '<div class="fin-drill-cats">' + catRows + '</div>';
    });
  });

  // 点分类（分类下钻）—— 通过图例 + 堆叠段
  box.querySelectorAll('.fin-legend-item, .fin-stack-seg').forEach(function (el) {
    el.addEventListener('click', function () {
      const name = (el.getAttribute('title') || '').split(' ')[0] || el.querySelector('.fin-legend-name')?.textContent;
      const thisAmt = byCategory[name] || 0;
      const lastAmt = lastCat[name] || 0;
      const pct = lastAmt > 0 ? ((thisAmt - lastAmt) / lastAmt) * 100 : null;
      drill.style.display = 'block';
      drill.innerHTML =
        '<div class="fin-drill-head">' +
          '<span class="fin-drill-title">「' + name + '」分类 · YTD 对比</span>' +
          '<button class="fin-drill-close" onclick="document.getElementById(\'fin-drill\').style.display=\'none\'">×</button>' +
        '</div>' +
        '<div class="fin-drill-grid">' +
          '<div class="fin-drill-cell"><div class="fin-drill-l">今年 YTD</div><div class="fin-drill-v">' + fmt(thisAmt) + '</div></div>' +
          '<div class="fin-drill-cell"><div class="fin-drill-l">去年 YTD</div><div class="fin-drill-v" style="color:#94a3b8">' + fmt(lastAmt) + '</div></div>' +
          '<div class="fin-drill-cell"><div class="fin-drill-l">同比</div><div class="fin-drill-v ' + ((pct || 0) >= 0 ? 'up' : 'down') + '">' + finPct(pct) + '</div></div>' +
        '</div>' +
        '<div class="fin-drill-ai">🤖 「' + name + '」今年累计 ' + fmt(thisAmt) + (lastAmt > 0 ? '，去年同期 ' + fmt(lastAmt) + '，' + (pct >= 0 ? '增长' : '下降') + ' ' + Math.abs(pct).toFixed(1) + '%。' : '，去年同期无记录。') + '</div>';
    });
  });

  // 点堆叠段（柱子内部某分类）→ 直接下钻到该月 + 该分类
  box.querySelectorAll('.fin-seg[data-cat]:not([data-cat="__last__"])').forEach(function (seg) {
    seg.addEventListener('click', function (ev) {
      ev.stopPropagation();
      const month = seg.getAttribute('data-month');
      const cat = seg.getAttribute('data-cat');
      // 找到该月明细（前端 months 用 label 字段）
      const bm = byMonth.find(function (x) { return (x.label || x.month) === month; });
      const catAmt = bm && bm.categories && bm.categories[cat] ? bm.categories[cat] : 0;
      const m = monthsCompare.find(function (x) { return x.month === month; });
      drill.style.display = 'block';
      drill.innerHTML =
        '<div class="fin-drill-head">' +
          '<span class="fin-drill-title">' + month + ' · 「' + cat + '」</span>' +
          '<button class="fin-drill-close" onclick="document.getElementById(\'fin-drill\').style.display=\'none\'">×</button>' +
        '</div>' +
        '<div class="fin-drill-grid">' +
          '<div class="fin-drill-cell"><div class="fin-drill-l">本月该分类</div><div class="fin-drill-v">' + fmt(catAmt) + '</div></div>' +
          '<div class="fin-drill-cell"><div class="fin-drill-l">本月总支出</div><div class="fin-drill-v" style="color:#d5443c">' + fmt(m ? m.expense : 0) + '</div></div>' +
          '<div class="fin-drill-cell"><div class="fin-drill-l">占比</div><div class="fin-drill-v">' + (m && m.expense > 0 ? ((catAmt / m.expense) * 100).toFixed(1) + '%' : '—') + '</div></div>' +
        '</div>' +
        '<div class="fin-drill-ai">🤖 ' + month + ' 「' + cat + '」支出 ' + fmt(catAmt) + (m && m.expense > 0 ? '，占当月总支出 ' + ((catAmt / m.expense) * 100).toFixed(1) + '%。' : '。') + '</div>';
    });
  });

  // 点分类 chip → 收拢聚焦该分类（整图切换到该分类的逐月 + 同比 + 趋势）
  box.querySelectorAll('.fin-cat-chip').forEach(function (chip) {
    chip.addEventListener('click', function () {
      const cat = chip.getAttribute('data-cat');
      const mode = chip.getAttribute('data-mode');
      openCatFocus(d, mode, cat);
    });
  });
}

// 分类聚焦：点分类后，整图收拢到该分类逐月 + 同比 + 趋势 + AI 总结
function openCatFocus(d, mode, catName) {
  const focusCard = $('#fin-focus-card');
  const focusChart = $('#fin-focus-chart');
  const focusTitle = $('#fin-focus-title');
  const focusSummary = $('#fin-focus-summary');
  if (!focusCard || !focusChart) return;

  const isIncome = mode === 'income';
  const catField = isIncome ? 'incomeCats' : 'categories';
  const totalField = isIncome ? 'income' : 'expense';
  const thisMonths = d.months || [];
  const lastMonths = (d.lastYear && d.lastYear.byMonth) || [];
  const keys = ['01','02','03','04','05','06','07','08','09','10','11','12'];
  const thisYear = String(d.year || new Date().getFullYear());
  const lastYear = String(Number(thisYear) - 1);

  // 汇总该分类今年 YTD / 去年 YTD
  let thisYtd = 0, lastYtd = 0;
  thisMonths.forEach(function (m) { if (m[catField] && m[catField][catName]) thisYtd += m[catField][catName]; });
  lastMonths.forEach(function (m) { if (m[catField] && m[catField][catName]) lastYtd += m[catField][catName]; });
  const yoyPct = lastYtd > 0 ? ((thisYtd - lastYtd) / lastYtd) * 100 : null;

  // 趋势：计算逐月环比（今年）
  const trend = [];
  keys.forEach(function (k) {
    const m = thisMonths.find(function (x) { return (x.month || x.label) === thisYear + '-' + k; });
    if (m && m[catField] && m[catField][catName] != null) trend.push({ month: k, v: m[catField][catName] });
  });

  // 找峰值月
  let peakMonth = null, peakV = 0;
  trend.forEach(function (t) { if (t.v > peakV) { peakV = t.v; peakMonth = t.month; } });

  // AI 总结
  let ai = '「' + catName + '」今年累计 ' + finFmt(thisYtd);
  if (lastYtd > 0) ai += '，去年同期 ' + finFmt(lastYtd) + '，' + (yoyPct >= 0 ? '增长' : '下降') + ' ' + Math.abs(yoyPct).toFixed(1) + '%。';
  else ai += '，去年同期无记录。';
  if (peakMonth) ai += '峰值出现在 ' + Number(peakMonth) + ' 月（' + finFmt(peakV) + '）。';
  if (trend.length >= 2) {
    const last2 = trend[trend.length - 1].v, prev = trend[trend.length - 2].v;
    if (prev > 0) ai += '近月' + (last2 >= prev ? '上升' : '回落') + '。';
  }

  focusTitle.textContent = '「' + catName + '」' + (isIncome ? '收入' : '支出') + ' · 逐月 vs 同期';
  focusChart.innerHTML = buildCatFocusChart(d, mode, catName, 680);
  focusSummary.innerHTML = '🤖 ' + ai;
  focusCard.style.display = 'block';
  focusCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closeCatFocus() {
  const c = $('#fin-focus-card');
  if (c) c.style.display = 'none';
}

async function loadPersonalCurrent() {
  if (!personalAuthed()) return;
  // 财务板块：真读 Notion 收支各月库，画月度收入/支出/结余曲线
  if (currentPersonal === 'finance') { await renderFinanceDash(); return; }
  const sec = personalSections[currentPersonal];
  const box = $('#personal-content');
  if (!sec) {
    box.innerHTML = '<div class="banner">板块信息缺失，请刷新页面或稍后再试。</div>';
    return;
  }
  if (!sec.db) {
    const isFinance = currentPersonal === 'finance';
    const isStocks = currentPersonal === 'stocks';
    // 股票板块：数据来自后端行情接口(东财)+本地持仓配置，不依赖 Notion 库绑定 → 直接整页渲染实时看板
    if (isStocks) {
      box.innerHTML = '<div class="empty">加载股票看板…</div><div id="stockboard"></div>';
      mountStockBoard($('#stockboard'));
      return;
    }
    // finance 板块即使未绑定库，也先展示「支出分层透视」分析卡（数据来自本地组件，不依赖绑定）
    let inner =
      (isFinance ? '<div id="finlayers" style="margin-bottom:4px"></div>' : '') +
      '<div class="card">' +
        '<div class="card-head"><h3>' + esc(sec.name) + '</h3><span class="intel-meta">尚未绑定 Notion 库</span></div>' +
        '<div class="empty">这个板块还没接入数据库。<br><br>个人数据以你 Notion 里的个人库为数据库。接入步骤：<br>① 在 Notion 里把对应个人库 Share 给工作台连接 → ② 回来点「刷新可用库」选择绑定。</div>' +
        '<div class="form-row" style="text-align:center;margin-top:6px"><button class="btn btn-primary" onclick="openPersonalBind(\'' + currentPersonal + '\')">刷新可用库并绑定</button></div>' +
      '</div>';
    box.innerHTML = inner;
    if (isFinance) {
      mountFinanceLayers($('#finlayers'));
      box.insertAdjacentHTML('beforeend', '<div id="finbudget" style="margin-top:0"></div>');
      mountFinanceBudget($('#finbudget'));
    }
    return;
  }
  // 已绑定 -> 尝试读取（缓存 15s）
  const cacheAge = personalCache[currentPersonal] ? (Date.now() - personalCache[currentPersonal].at) : Infinity;
  if (cacheAge > 15000) {
    box.innerHTML = '<div class="empty">加载中…</div>';
    try {
      const d = await api('/api/personal/db/' + currentPersonal);
      personalCache[currentPersonal] = { items: d.items, fields: d.fields, titleProp: d.titleProp, at: Date.now() };
      // 若 schema 探测后字段更新，回写板块
      if (d.fields && d.fields.length) {
        personalSections[currentPersonal] = { ...personalSections[currentPersonal], fields: d.fields, titleProp: d.titleProp };
      }
    } catch (e) {
      if (e instanceof PersonalAuthError) { showPersonalAuth(); return; }
      box.innerHTML = '<div class="banner">⚠️ ' + esc(e.message) + '</div>';
      return;
    }
  }
  renderPersonalSectionContent(box);
}

function renderPersonalSectionContent(box) {
  const sec = personalSections[currentPersonal];
  const data = personalCache[currentPersonal];
  const items = (data && data.items) || [];
  const fields = (data && data.fields) || sec.fields || [];
  const titleProp = (data && data.titleProp) || sec.titleProp || '名称';
  const color = PERSONAL_COLOR[currentPersonal] || '#8b5cf6';
  const isStock = currentPersonal === 'stocks';
  const isFinance = currentPersonal === 'finance';

  // 顶部概览卡
  let overview = '';
  if (isFinance || isStock) {
    overview = buildPersonalOverview(items, fields, currentPersonal);
  }

  // 表格（动态字段）
  let headCells = fields.filter(f => f.label !== titleProp).slice(0, 8).map(f => '<th>' + esc(f.label) + '</th>').join('');
  const rows = items.map((it) => {
    let tds = '';
    for (const f of fields) {
      if (f.label === titleProp) continue;
      if (tds.split('<td').length - 1 >= 8) break;
      const v = it[f.label];
      let cell = v == null || v === '' ? '<span class="dim">-</span>' : esc(String(v));
      if (f.type === 'number' && v != null) {
        cell = '<span class="num">' + fmtNum(v) + '</span>';
        // 股票涨跌标色：find 名称含"涨幅/盈亏/涨跌"的列? 简化：金融数值默认黑，超过就高亮
      }
      if (f.type === 'date') cell = fmtDate(v);
      if (f.type === 'select') cell = '<span class="tag tag-p3">' + esc(v) + '</span>';
      if (f.type === 'url' && v) cell = '<a class="link" href="' + esc(v) + '" target="_blank">打开</a>';
      tds += '<td>' + cell + '</td>';
    }
    return '<tr><td style="font-weight:600;color:' + color + '">' + esc(it[titleProp] || '(未命名)') + '</td>' + tds + '</tr>';
  }).join('');

  box.innerHTML =
    (overview ? overview : '') +
    '<div class="card">' +
      '<div class="card-head"><h3 style="color:' + color + '">' + esc(sec.name) + '</h3>' +
        '<div>' +
          '<span class="intel-meta" style="margin-right:10px">' + items.length + ' 条</span>' +
          '<button class="btn btn-sm btn-primary" onclick="openPersonalCreate(\'' + currentPersonal + '\')">+ 新增</button>' +
        '</div></div>' +
      '<div class="table-wrap"><table class="data-table"><thead><tr><th>' + esc(titleProp) + '</th>' + headCells + '</tr></thead><tbody>' +
        (rows || '<tr><td colspan="10"><div class="empty">暂无记录</div></td></tr>') +
      '</tbody></table></div>' +
    '</div>' +
    '<div class="personal-caption">数据源：Notion「' + esc(sec.name) + '」库 · 本会话已验证二级密码，刷新可更新</div>';

  // 财务状况板块：额外挂载「支出分层透视」+「月度预算锚点」分析卡（本地账单快照，置于库表格之下）
  if (isFinance) {
    box.insertAdjacentHTML('beforeend', '<div id="finlayers" style="margin-top:16px"></div>');
    mountFinanceLayers($('#finlayers'));
    box.insertAdjacentHTML('beforeend', '<div id="finbudget" style="margin-top:0"></div>');
    mountFinanceBudget($('#finbudget'));
  }
}

function buildPersonalOverview(items, fields, secId) {
  const num = (k) => { const f = fields.find(x => x.label === k); return f ? true : false; };
  // 金融：按字段名智能识别"净资产/总资产/负债/可用资金"等
  const totalAssetKey = fields.find(f => /总资产|净资产|总市值|市值|资产总额/.test(f.label));
  const totalLiabKey = fields.find(f => /负债|负债总额/.test(f.label));
  const totalInvestKey = fields.find(f => /投资|持仓成本|持仓市值|股票市值/.test(f.label));
  const profitKey = fields.find(f => /盈亏|累计盈亏|本期盈亏/.test(f.label));
  const cards = [];
  const last = items[items.length - 1];
  const lastKey = fields.find(f => f.type === 'date') || fields.find(f => /日期|时间|日期/.test(f.label));
  const label = secId === 'finance' ? '财务状况' : '股票';
  if (last) {
    if (totalAssetKey && last[totalAssetKey.label] != null) cards.push({ label: '总资产', value: last[totalAssetKey.label] });
    if (totalInvestKey && last[totalInvestKey.label] != null) cards.push({ label: '投资 / 市值', value: last[totalInvestKey.label] });
    if (profitKey && last[profitKey.label] != null) cards.push({ label: '累计盈亏', value: last[profitKey.label] });
  }
  if (!cards.length) cards.push({ label: '记录数', value: items.length });
  return '<div class="summary-grid personal-overview">' + cards.map(c =>
    '<div class="stat-card"><div class="label">' + c.label + '</div><div class="value" style="font-size:22px">' + fmtNum(c.value) + '</div><div class="sub">' + label + ' · 最近一条</div></div>'
  ).join('') + '</div>';
}

function openPersonalCreate(sectionId) {
  const sec = personalSections[sectionId];
  if (!sec) return;
  const fields = (personalCache[sectionId] && personalCache[sectionId].fields) || sec.fields || [];
  const titleProp = sec.titleProp || fields.find(f => f.type === 'title').label || '名称';
  editing = { view: 'personal', id: null, sectionId };
  $('#modal-title').textContent = '新增 · ' + sec.name;
  const body = fields.map((f) => {
    const isTitle = f.label === titleProp;
    if (f.type === 'select') {
      return '<div class="form-row"><label>' + esc(f.label) + (isTitle ? ' *' : '') + '</label><select data-key="' + esc(f.label) + '">' +
        '<option value="">（未选）</option>' + (f.options || []).map(o => '<option>' + esc(o) + '</option>').join('') + '</select></div>';
    }
    if (f.type === 'number') return '<div class="form-row"><label>' + esc(f.label) + '</label><input type="number" data-key="' + esc(f.label) + '"></div>';
    if (f.type === 'date') return '<div class="form-row"><label>' + esc(f.label) + '</label><input type="date" data-key="' + esc(f.label) + '"></div>';
    if (f.type === 'url') return '<div class="form-row"><label>' + esc(f.label) + '</label><input type="url" data-key="' + esc(f.label) + '"></div>';
    if (f.type === 'rich_text') return '<div class="form-row"><label>' + esc(f.label) + '</label><textarea data-key="' + esc(f.label) + '" rows="2"></textarea></div>';
    return '<div class="form-row"><label>' + esc(f.label) + (isTitle ? ' *' : '') + '</label><input type="text" data-key="' + esc(f.label) + '"></div>';
  }).join('');
  $('#modal-body').innerHTML = body;
  $('#modal').hidden = false;
  // 让 submitModal 走个人分支
  window.__personalCreateSection = sectionId;
}

async function openPersonalBind(sectionId) {
  try {
    const d = await api('/api/personal/dbs');
    const dbs = (d.databases || []).filter(x => x.id && x.title);
    if (!dbs.length) {
      alert('当前连接未授权任何可绑定的库。请先在 Notion 里把个人库 Share 给工作台连接（Connections），再刷新重试。');
      return;
    }
    // 只列还没被其他板块占用的库 + 标题智能匹配优先
    const taken = Object.entries(personalSections).filter(([k, v]) => k !== sectionId && v.db).map(([, v]) => v.db);
    const free = dbs.filter(x => !taken.includes(x.id));
    const pick = free.length ? free : dbs;
    const kw = { finance: ['财务', '资产', '净资产', '收支'], stocks: ['股票', '持仓', '自选', '股'], career: ['工作', '跳槽', '评估', '职业'], reading: ['阅读', '读书', '书', 'Book'], health: ['健康', '体检', '运动', '健身'], growth: ['提升', '学习', '成长', '目标'] }[sectionId] || [];
    // 排名：标题命中关键词优先
    pick.sort((a, b) => scoreDb(b, kw) - scoreDb(a, kw));
    const opts = pick.map((x, i) => '<option value="' + x.id + '"' + (i === 0 ? ' selected' : '') + '>' + esc(x.title) + (scoreDb(x, kw) > 0 ? ' ★' : '') + '</option>').join('');
    const bindSelId = 'pbind-sel';
    const oldSel = document.getElementById(bindSelId);
    if (oldSel) oldSel.remove();
    const mask = document.createElement('div');
    mask.className = 'modal-mask'; mask.id = 'personal-bind-mask'; mask.style.zIndex = 120;
    mask.onclick = (e) => { if (e.target === mask) mask.remove(); };
    mask.innerHTML =
      '<div class="modal" style="width:440px">' +
        '<div class="modal-head"><div class="modal-title">绑定板块：' + esc(personalSections[sectionId].name) + '</div><button class="modal-close" onclick="document.getElementById(\'personal-bind-mask\').remove()">×</button></div>' +
        '<div class="modal-body">' +
          '<div class="form-row"><label>选择 Notion 数据库（★ = 标题最匹配该板块；若列表空请先在 Notion Share 给工作台连接）</label>' +
          '<select id="' + bindSelId + '">' + opts + '</select></div>' +
          '<div class="intel-meta">注意：只显示当前连接已被授权 Share 的库。选完点绑定，工作台会自动读取库的字段结构。</div>' +
        '</div>' +
        '<div class="modal-foot"><button class="btn" onclick="document.getElementById(\'personal-bind-mask\').remove()">取消</button>' +
        '<button class="btn btn-primary" onclick="confirmPersonalBind(\'' + sectionId + '\',\'' + bindSelId + '\')">绑定</button></div>' +
      '</div>';
    document.body.appendChild(mask);
  } catch (e) { alert('读取库失败：' + e.message); }
}
function scoreDb(db, kw) { const t = db.title || ''; return kw.reduce((n, w) => n + (t.indexOf(w) >= 0 ? 1 : 0), 0); }
async function confirmPersonalBind(sectionId, selId) {
  const dbId = document.getElementById(selId).value;
  try {
    await api('/api/personal/config', { method: 'PUT', body: { action: 'bind', section: sectionId, db: dbId } });
    personalSections[sectionId] = { ...personalSections[sectionId], db: dbId, fields: [] };
    delete personalCache[sectionId];
    const m = document.getElementById('personal-bind-mask'); if (m) m.remove();
    renderPersonalSections();
    loadPersonalCurrent();
  } catch (e) { alert('绑定失败：' + e.message); }
}

// 重写 submitModal：个人板块走独立提交
const _origSubmit = submitModal;
submitModal = async function () {
  if (window.__personalCreateSection) {
    const sectionId = window.__personalCreateSection;
    const sec = personalSections[sectionId];
    const payload = {};
    document.querySelectorAll('#modal-body [data-key]').forEach((el) => {
      const v = el.value.trim ? el.value.trim() : el.value;
      if (v !== '') payload[el.dataset.key] = v;
    });
    try {
      await api('/api/personal/db/' + sectionId, { method: 'POST', body: payload });
      closeModal();
      delete personalCache[sectionId];
      window.__personalCreateSection = null;
      loadPersonalCurrent();
    } catch (e) { alert('保存失败：' + e.message); }
    return;
  }
  return _origSubmit();
};

// ===== 登录门（工作台主密钥 / 个人空间密码 共用一个弹窗）=====
function showLogin() { openGate('workbench'); }
function closeLogin() { closeGate(); }

// 静态版（GitHub Pages）无后端，密码校验在浏览器本地完成：
// 用与 export-snapshot.js 相同的盐做 sha256，比对快照里埋的哈希。
const STATIC_SALT = 'leo-workbench-static-v1';
async function staticHash(s) {
  const buf = new TextEncoder().encode(STATIC_SALT + s);
  const digest = await crypto.subtle.digest('SHA-256', buf);
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
}
async function verifyStaticPersonal(pw) {
  try {
    const snap = await loadSnapshot();
    const want = snap && snap.auth && snap.auth.personalPasswordHash;
    if (!want) return false; // 快照没埋哈希 => 无法本地校验，拒绝
    const got = await staticHash(pw);
    return got === want;
  } catch (e) { return false; }
}

async function doLogin() {
  const personal = gateMode === 'personal';
  const key = $('#login-key').value.trim();
  const btn = $('#login-btn');
  const idleLabel = personal ? '解锁个人空间' : '进入工作台';
  if (!key) {
    $('#login-error').textContent = '请输入访问密码';
    return;
  }
  if (btn) { btn.disabled = true; btn.textContent = '验证中…'; }
  $('#login-error').textContent = '';
  try {
    if (personal) {
      // 个人空间门：本地（有后端）走 /api/personal/verify；静态版（Pages）走本地哈希比对。
      let token;
      if (STATIC_MODE) {
        const ok = await verifyStaticPersonal(key);
        if (!ok) throw new Error('密码错误');
        token = 'static:' + await staticHash(key);
      } else {
        const d = await api('/api/personal/verify', { method: 'POST', body: { password: key } });
        token = d.token;
      }
      sessionStorage.setItem('wb_ptok', token);
      personalAuthedOnce = true;
      closeGate();
      if (!currentPersonal) {
        const ids = Object.keys(personalSections);
        currentPersonal = ids[0] || 'finance';
      }
      // 重新触发视图，确保侧边栏板块列表展开 + 高亮落在具体板块
      enterPersonal(currentPersonal);
    } else {
      // 工作台门：校验主密钥（放在 localStorage，供后续请求头携带）
      localStorage.setItem('wb_key', key);
      try {
        await api('/api/tasks');
      } catch (e) {
        localStorage.removeItem('wb_key');
        throw e;
      }
      $('#login-error').textContent = '';
      closeGate();
      checkHealth();
      switchView(currentView);
    }
  } catch (e) {
    if (personal) {
      if (e.notConfigured || (e.message && e.message.indexOf('尚未设置') >= 0)) {
        closeGate();
        openPersonalSetup();
      } else if (e.message === '静态快照为只读模式，写操作请在本地工作台进行') {
        $('#login-error').textContent = '线上快照版不支持个人空间，请在本地工作台查看。';
      } else {
        $('#login-error').textContent = '密码错误，请重试（或点「取消」退出）';
      }
    } else {
      const msg = e.message === '需要登录' ? '密钥错误，请重试' : ('验证失败：' + e.message);
      $('#login-error').textContent = msg;
    }
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = idleLabel; }
  }
}

// ===== 初始化 =====
async function init() {
  buildFilters('tasks');
  buildFilters('metrics');
  buildFilters('inventory');
  initCalAdd();
  initNoteAdd();
  initTaskParse();
  initMilestoneParse();
  initIntake();
  // 顶部常驻投料区：输入即预览
  const heroText = $('#intake-hero-text');
  if (heroText) heroText.addEventListener('input', applyIntakeHero);
  const openNotionEl = $('#open-notion');
  if (openNotionEl) openNotionEl.addEventListener('click', () => window.open('https://www.notion.so/', '_blank'));
  if (STATIC_MODE) {
    // 静态快照版：无后端、无登录门，直接进只读视图
    document.body.classList.add('static-mode');
    const cs = $('#conn-status');
    if (cs) { cs.className = 'conn-status static'; cs.querySelector('.conn-text').textContent = '只读快照'; }
    showStaticBanner();
  } else {
    try {
      const h = await fetch('/api/health').then((r) => r.json());
      if (h.needAuth && !localStorage.getItem('wb_key')) showLogin();
    } catch (e) {}
    checkHealth();
  }
  // 各数据源互不阻塞：一个失败不影响其他和导航
  try { await loadTasks(); } catch (e) { console.warn('loadTasks failed', e); }
  try { await loadMetrics(); } catch (e) { console.warn('loadMetrics failed', e); }
  try { await loadPersonalSections(); } catch (e) { console.warn('loadPersonalSections failed', e); }
  try { switchView('today'); } catch (e) { console.warn('switchView failed', e); }
  // 跨设备实时同步：SSE 连接 + 回前台兜底（静态快照版自动跳过）
  try { initRealtimeSync(); } catch (e) { console.warn('initRealtimeSync failed', e); }
}

// 移动端导航抽屉：点菜单按钮开，点遮罩/选中项后关
function initMobileNav() {
  const btn = $('#mobile-nav-btn');
  if (!btn) return;

  function closeNav() { document.body.classList.remove('nav-open'); }
  function toggleNav(e) {
    e.preventDefault();
    e.stopPropagation();
    document.body.classList.toggle('nav-open');
  }

  // 同时绑定 click 与 touchstart，确保手机上一定响应（部分移动浏览器 click 有 300ms 延迟或被吞）
  btn.addEventListener('click', toggleNav);
  btn.addEventListener('touchstart', toggleNav, { passive: false });

  // 点遮罩关闭
  const backdrop = $('#nav-backdrop');
  if (backdrop) {
    const bd = (e) => { e.preventDefault(); closeNav(); };
    backdrop.addEventListener('click', bd);
    backdrop.addEventListener('touchstart', bd, { passive: false });
  }

  // 点击侧边栏以外区域关闭（兜底）
  document.addEventListener('click', (e) => {
    if (!document.body.classList.contains('nav-open')) return;
    const sb = document.querySelector('.sidebar');
    if (sb && !sb.contains(e.target) && !btn.contains(e.target)) closeNav();
  });

  // 选中导航项后自动收起
  const sb = document.querySelector('.sidebar');
  if (sb) {
    sb.addEventListener('click', (e) => {
      if (e.target.closest('.nav-item, .nav-region, [data-view]')) closeNav();
    });
  }

  // Esc 关闭（桌面端调试用）
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeNav(); });
}

// 静态版顶部提示条：只读 + 数据生成时间
async function showStaticBanner() {
  try {
    const snap = await loadSnapshot();
    const el = document.createElement('div');
    el.className = 'static-banner';
    const t = snap.generatedAt ? new Date(snap.generatedAt).toLocaleString('zh-CN') : '未知';
    el.textContent = '只读快照 · 数据生成于 ' + t;
    document.body.appendChild(el);
    document.body.classList.add('has-static-banner');
    const sh = $('#sync-hint');
    if (sh) sh.textContent = '数据快照（只读）';
  } catch (e) { /* 无快照则静默 */ }
}
// 密码门：Esc 关闭、点弹窗外遮罩关闭、点 × 关闭。
// 门一旦卡住会完全挡住界面，所以这三条退出通道必须独立于 init() 存在。
function initGate() {
  const mask = $('#login-mask');
  if (!mask) return;
  const closeBtn = $('#login-close');
  if (closeBtn) closeBtn.addEventListener('click', closeGate);
  // 点遮罩本身（不是弹窗内容）关闭
  mask.addEventListener('mousedown', (e) => { if (e.target === mask) closeGate(); });
  mask.addEventListener('touchstart', (e) => { if (e.target === mask) closeGate(); }, { passive: true });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mask.classList.contains('hidden')) closeGate();
  });
}

// 启动：确保 DOM 就绪后再 init，并且任何初始化异常都不影响页面可用性
function boot() {
  // 导航优先绑定，独立于 init()，保证移动端菜单永远可用
  try { initMobileNav(); } catch (e) { console.warn('initMobileNav failed', e); }
  // 门的退出通道同样优先绑定，避免密码门把界面锁死
  try { initGate(); } catch (e) { console.warn('initGate failed', e); }
  init().catch((e) => console.error('init failed', e));
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
