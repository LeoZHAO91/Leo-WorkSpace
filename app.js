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
  'key-attention': '特别关注', 'product-initiatives': '产品专项', 'product-knowledge': '产品知识库', inventory: '要货与产销存',
  insights: '资讯与洞察', market: '市场分析', sync: 'Notion 同步中枢',
  skills: 'Agent 与 Skill 管理', settings: '入口与偏好设置', summary: '汇总分析',
  personal: 'Personal Space',
};

const VIEW_BREADCRUMBS = {
  ai: '工作台 / AI 工作区', today: '工作台 / 今日工作', mail: '工作台 / 邮件情报', regional: '工作台 / 区域经营',
  projects: '工作台 / 项目与待办', meetings: '工作台 / 会议与日历', 'meeting-notes': '工作台 / 会议纪要',
  'key-attention': '工作台 / 特别关注', 'product-initiatives': '工作台 / 产品专项', 'product-knowledge': '工作台 / 产品知识库', inventory: '工作台 / 要货与产销存',
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
const ESC_MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ESC_MAP[c]); }
// 纯文本：先转义，再把 http(s) 地址变成可点链接（用于 AI 生成的摘要/草稿，可能与链接同段）
function escRich(s) {
  return esc(s).replace(/(https?:\/\/[^\s<>"']+)/g, '<a class="text-link" href="$1" target="_blank" rel="noopener">$1</a>');
}
function fmtNum(n) { return n == null ? '-' : Number(n).toLocaleString('zh-CN'); }

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
      el.querySelector('.conn-text').textContent = 'Notion 已连接';
    } else {
      el.className = 'conn-status err';
      el.querySelector('.conn-text').textContent = '未配置 token';
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
  if (view === 'key-attention') loadKeyAttention();
  if (view === 'product-initiatives') loadProductInitiatives();
  if (view === 'product-knowledge') loadProductKnowledge();
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
    '<span class="task-stat" style="color:var(--text-sub)">点击圆圈即可勾选完成 / 撤销，自动同步 Notion</span>';

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
  const link = r['来源链接'];

  const priChip = pri ? '<span class="task-chip" style="color:' + priColor(pri) + ';border-color:' + priColor(pri) + '">' + esc(pri) + '</span>' : '';
  const regionChip = region ? '<span class="task-chip" style="color:' + regionColor(region) + ';border-color:' + regionColor(region) + '">' + esc(region) + '</span>' : '';
  // 状态维度卡片里显示区域；区域维度卡片里显示状态（避免重复展示本维度）
  const meta = (dim === '区域' ? priChip : priChip + regionChip);
  const dueHtml = due ? '<span class="task-due">' + (isOverdue(due) && !isDone ? '⚠ ' : '📅 ') + fmtDate(due) + '</span>' : '';
  const linkHtml = link ? '<a class="link" href="' + esc(link) + '" target="_blank" onclick="event.stopPropagation()">打开</a>' : '';
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

// 层级：东盟大区 → 项目 → 国家 → 进展（超期/停滞置顶标红）
const ASEAN_COUNTRY_ORDER = ['越南', '泰国', '印尼', '马来', '菲律宾', '新加坡', '缅甸', '柬埔寨', '老挝', '文莱', '东盟', '平台项目（跨国家）'];
const ASEAN_OTHER_LABEL = '平台项目（跨国家）';

// 紧急程度：0=超期 1=停滞 2=临近到期 3=进行中 4=待开始 5=已完成/取消
function aseanUrgency(r, todayStr) {
  const prog = r.progress || '';
  if (['已完成', '取消'].includes(prog)) return { rank: 5, key: 'done', label: prog || '已完结', cls: 'done' };
  if (prog === '停滞中') return { rank: 1, key: 'stalled', label: '停滞中', cls: 'stalled' };
  // 超期：任一未完成的关键节点已过
  const nodes = [r.ir, r.firstOrder, r.certDone, r.done].filter(d => d && /^\d{4}-\d{2}-\d{2}$/.test(d));
  const past = nodes.filter(d => d < todayStr).sort();
  if (past.length) {
    const days = Math.round((new Date(todayStr + 'T00:00:00') - new Date(past[0] + 'T00:00:00')) / 86400000);
    return { rank: 0, key: 'overdue', label: '超期 ' + days + ' 天', cls: 'overdue', overdueDays: days };
  }
  if (nodes.length) {
    const next = nodes.filter(d => d >= todayStr).sort()[0];
    if (next) {
      const days = Math.round((new Date(next + 'T00:00:00') - new Date(todayStr + 'T00:00:00')) / 86400000);
      if (days <= 7) return { rank: 2, key: 'soon', label: days === 0 ? '今天到期' : days + ' 天后到期', cls: 'soon' };
      return { rank: 3, key: 'doing', label: prog || '进行中', cls: 'doing' };
    }
  }
  if (prog === '待开始') return { rank: 4, key: 'todo', label: '待开始', cls: 'todo' };
  return { rank: 3, key: 'doing', label: prog || '进行中', cls: 'doing' };
}

// 国家推断：飞书表里部分行 area 为空。
// 1) 先用「同父项目下兄弟行的国家」回填；
// 2) 仍无法判断的（如 I3T项目/3I项目 这类跨国家的平台研发项目）归入「平台项目（跨国家）」。
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

async function loadAseanInline() {
  const box = $('#asean-inline-body');
  const statsBox = $('#asean-inline-stats');
  if (!box) return;
  box.innerHTML = '<div class="today-empty">正在加载东盟项目进度…</div>';
  try {
    aseanData = await api('/api/asean');
    renderAseanInline();
  } catch (e) {
    if (statsBox) statsBox.innerHTML = '';
    box.innerHTML = '<div class="banner">⚠️ 东盟项目数据加载失败：' + esc(e.message) + '</div>';
  }
}

// 关键节点：IR产 / 首单协议 / 认证完成 / 完成时间 —— 逐个显式呈现，缺失标「—」
const ASEAN_KEY_NODES = [
  { key: 'ir', label: 'IR产时间' },
  { key: 'firstOrder', label: '首单协议' },
  { key: 'certDone', label: '认证完成' },
  { key: 'done', label: '完成时间' },
];

// 节点状态：done(已过/已完成) / soon(7天内) / late(已超期) / none(未填)
function nodeState(dateStr, todayStr, isDone) {
  if (!dateStr || !/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return { cls: 'none', txt: '—' };
  if (isDone) return { cls: 'done', txt: dateStr.slice(5) };
  if (dateStr < todayStr) return { cls: 'late', txt: dateStr.slice(5) };
  const days = Math.round((new Date(dateStr + 'T00:00:00') - new Date(todayStr + 'T00:00:00')) / 86400000);
  if (days <= 7) return { cls: 'soon', txt: dateStr.slice(5) };
  return { cls: 'ok', txt: dateStr.slice(5) };
}

function renderAseanInline() {
  const box = $('#asean-inline-body');
  const statsBox = $('#asean-inline-stats');
  if (!box || !aseanData) return;
  const todayStr = new Date().toISOString().slice(0, 10);

  // 只展示有实际进展信息的产品行（无进展的裸产品行会淹没有效信息）
  const allRecords = aseanData.records || [];
  const records = allRecords.filter(r =>
    r.progress || r.owner || r.ir || r.firstOrder || r.certDone || r.done || r.issue || r.note
  );

  // === 层级：项目（父节点）→ 国家 → 进展 ===
  // 1) 先把子行挂到父项目，父项目本身作为一条「项目」记录
  const byId = new Map(allRecords.map(r => [r.id, r]));
  const projects = new Map(); // 项目名 -> { name, rows: [子行] }
  for (const r of records) {
    const isChild = r.parentId && byId.has(r.parentId);
    const name = isChild ? (r.parentDesc || '(未命名项目)') : (r.desc || r.parentDesc || '(未命名项目)');
    if (!projects.has(name)) projects.set(name, { name, rows: [], top: null });
    const p = projects.get(name);
    p.rows.push(r);
    if (!isChild) p.top = r;
  }

  // 2) 项目内按国家分组（子行自己的 area 优先，缺失时用推断）
  const projectList = [...projects.values()].map(p => {
    const countries = new Map();
    for (const r of p.rows) {
      const c = inferAseanCountry(r, allRecords);
      if (!countries.has(c)) countries.set(c, []);
      countries.get(c).push(r);
    }
    // 项目排序依据：取项目下最紧急的一条
    const urgAll = p.rows.map(r => aseanUrgency(r, todayStr));
    const best = urgAll.slice().sort((a, b) => a.rank - b.rank)[0] || { rank: 9 };
    // 项目层关键节点：优先取顶层行，否则取子行里最近的一个有效日期
    const nodeSrc = p.top || p.rows[0] || {};
    return {
      name: p.name,
      top: p.top,
      rows: p.rows,
      countries,
      rank: best.rank,
      overdue: urgAll.filter(u => u.key === 'overdue').length,
      stalled: urgAll.filter(u => u.key === 'stalled').length,
      nodeSrc,
      anyDone: p.rows.some(r => r.manualDone || ['已完成', '取消'].includes(r.progress || '')),
      allDone: p.rows.length > 0 && p.rows.every(r => r.manualDone || ['已完成', '取消'].includes(r.progress || '')),
    };
  });

  // 项目排序：超期数 → 停滞数 → 紧急度 → 名称
  projectList.sort((a, b) =>
    (b.overdue - a.overdue) || (b.stalled - a.stalled) || (a.rank - b.rank) || a.name.localeCompare(b.name)
  );

  // 统计
  const urg = records.map(r => aseanUrgency(r, todayStr));
  const overdueN = urg.filter(u => u.key === 'overdue').length;
  const stalledN = urg.filter(u => u.key === 'stalled').length;
  const doingN = urg.filter(u => u.key === 'doing' || u.key === 'soon').length;
  const doneAll = urg.filter(u => u.key === 'done').length;
  const countrySet = new Set(records.map(r => inferAseanCountry(r, allRecords)).filter(c => c !== ASEAN_OTHER_LABEL));

  if (statsBox) {
    statsBox.innerHTML = [
      { label: '东盟项目', value: projectList.length, cls: '' },
      { label: '产品行', value: records.length, cls: '' },
      { label: '超期', value: overdueN, cls: overdueN ? 'is-red' : '' },
      { label: '停滞中', value: stalledN, cls: stalledN ? 'is-orange' : '' },
      { label: '推进中', value: doingN, cls: 'is-blue' },
      { label: '已完结', value: doneAll, cls: 'is-green' },
      { label: '覆盖国家', value: countrySet.size, cls: '' },
    ].map(c => '<div class="asean-inline-stat ' + c.cls + '"><span class="v">' + c.value + '</span><span class="l">' + c.label + '</span></div>').join('');
  }

  // 单条产品行
  const rowHtml = (r, u) => {
    const desc = r.desc || '(未命名)';
    const type = r.type ? '<span class="asean-tag asean-tag-type">' + esc(r.type) + '</span>' : '';
    const platform = r.platform ? '<span class="asean-tag">' + esc(r.platform) + '</span>' : '';
    const owner = r.owner ? '<span class="asean-owner">👤 ' + esc(r.owner) + '</span>' : '';
    const isDone = r.manualDone || ['已完成', '取消'].includes(r.progress || '');
    // 关键节点四格：始终呈现，未填显示「—」
    const nodeCells = ASEAN_KEY_NODES.map(n => {
      const st = nodeState(r[n.key], todayStr, isDone);
      const isFill = st.cls !== 'none';
      return '<span class="asean-node asean-node-' + st.cls + '">' +
        '<i>' + esc(n.label) + '</i><b>' + esc(st.txt) + '</b></span>';
    }).join('');
    const issue = r.issue ? '<div class="asean-issue">' + esc(r.issue) + '</div>' : '';
    const note = r.note ? '<div class="asean-note"><span class="asean-note-label">✎ 我的备注</span>' + esc(r.note) + '</div>' : '';
    const doneBadge = r.manualDone
      ? '<span class="asean-manual-done">✓ 已手动完成 ' + esc(r.manualDoneAt || '') + '</span>'
      : '';
    return '<div class="asean-row asean-row-' + u.cls + (isDone ? ' is-done' : '') + '">' +
      '<div class="asean-row-head">' +
        '<span class="asean-urg asean-urg-' + u.cls + '">' + esc(u.label) + '</span>' +
        '<span class="asean-desc">' + esc(desc) + '</span>' + platform + type + owner + doneBadge +
      '</div>' +
      '<div class="asean-nodes">' + nodeCells + '</div>' +
      issue + note +
      '<div class="asean-row-actions">' +
        '<button class="asean-act" type="button" onclick="openAseanNote(\'' + esc(r.id) + '\')">✎ 备注</button>' +
        '<button class="asean-act asean-act-done" type="button" onclick="toggleAseanDone(\'' + esc(r.id) + '\',' + (isDone ? 'false' : 'true') + ')">' +
          (r.manualDone ? '↺ 撤销完成' : '✓ 标记完成') + '</button>' +
      '</div>' +
    '</div>';
  };

  if (!projectList.length) {
    box.innerHTML = '<div class="today-empty">暂无东盟项目数据</div>';
    return;
  }

  // 项目 → 国家 → 进展
  box.innerHTML = projectList.map(p => {
    const topProgress = p.top && p.top.progress ? p.top.progress : '';
    const projMain = p.top ? (p.top.desc || '') : '';
    const projOwner = p.top && p.top.owner ? '<span class="asean-owner">👤 ' + esc(p.top.owner) + '</span>' : '';
    const projIssue = p.top && p.top.issue ? p.top.issue : '';
    const isProjDone = p.anyDone && p.allDone;
    const projNodes = ASEAN_KEY_NODES.map(n => {
      const st = nodeState(p.nodeSrc[n.key], todayStr, isProjDone);
      return '<span class="asean-node asean-node-' + st.cls + '">' +
        '<i>' + esc(n.label) + '</i><b>' + esc(st.txt) + '</b></span>';
    }).join('');

    const countryBlocks = [...p.countries.entries()]
      .sort((a, b) => {
        const ia = ASEAN_COUNTRY_ORDER.indexOf(a[0]), ib = ASEAN_COUNTRY_ORDER.indexOf(b[0]);
        return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib) || a[0].localeCompare(b[0]);
      })
      .map(([country, rows]) => {
        const list = rows.map(r => ({ r, u: aseanUrgency(r, todayStr) }))
          .sort((a, b) => a.u.rank - b.u.rank || (b.u.overdueDays || 0) - (a.u.overdueDays || 0));
        const ob = list.filter(x => x.u.key === 'overdue').length;
        const st = list.filter(x => x.u.key === 'stalled').length;
        const badges =
          (ob ? '<span class="asean-cb asean-cb-red">超期 ' + ob + '</span>' : '') +
          (st ? '<span class="asean-cb asean-cb-orange">停滞 ' + st + '</span>' : '');
        return '<div class="asean-country">' +
          '<div class="asean-country-head">' +
            '<span class="asean-country-name">' + esc(country) + '</span>' +
            '<span class="asean-country-count">' + list.length + ' 项</span>' + badges +
          '</div>' +
          '<div class="asean-country-body">' + list.map(x => rowHtml(x.r, x.u)).join('') + '</div>' +
        '</div>';
      }).join('');

    const projTitle = '<span class="asean-proj-name">' + esc(p.name) + '</span>' +
      (projMain && projMain !== p.name ? '<span class="asean-proj-sub">' + esc(projMain) + '</span>' : '') +
      (topProgress ? '<span class="asean-prog asean-prog-' + (isProjDone ? 'done' : topProgress === '停滞中' ? 'stalled' : topProgress === '进行中' ? 'doing' : 'todo') + '">' + esc(topProgress) + '</span>' : '') +
      projOwner +
      '<span class="asean-country-count">' + p.rows.length + ' 产品行 · ' + p.countries.size + ' 国家</span>' +
      (p.overdue ? '<span class="asean-cb asean-cb-red">超期 ' + p.overdue + '</span>' : '') +
      (p.stalled ? '<span class="asean-cb asean-cb-orange">停滞 ' + p.stalled + '</span>' : '');

    return '<div class="asean-project' + (isProjDone ? ' is-done' : '') + '">' +
      '<div class="asean-project-head">' + projTitle + '</div>' +
      (projIssue ? '<div class="asean-project-issue">' + esc(projIssue) + '</div>' : '') +
      '<div class="asean-nodes asean-proj-nodes">' + projNodes + '</div>' +
      '<div class="asean-project-body">' + countryBlocks + '</div>' +
    '</div>';
  }).join('');
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
function loadRegional(region) {
  currentRegion = region;
  const tabs = $('#region-tabs');
  tabs.innerHTML = ['全球', '东盟', '中东非', '印度'].map(r =>
    '<button class="region-tab ' + (r === region ? 'active' : '') + '" onclick="loadRegional(\'' + r + '\')">' + r + '</button>'
  ).join('');

  const isGlobal = region === '全球';
  const tasks = isGlobal ? cache.tasks : cache.tasks.filter(t => t['区域'] === region);
  const metrics = isGlobal ? cache.metrics : cache.metrics.filter(m => m['区组'] === region);

  // ── 1. 经营结果（指标卡）──
  const statsBox = $('#region-stats');
  const metricNames = ['收入', '销量', '利润', '要货'];
  const cards = [];
  for (const name of metricNames) {
    const rows = metrics.filter(m => m['指标'] === name);
    const sum = rows.reduce((s, m) => s + (Number(m['数值']) || 0), 0);
    const unit = rows.length ? (rows[0]['单位'] || '') : '';
    cards.push({ label: name + (isGlobal ? '（合计）' : ''), value: rows.length ? fmtNum(Math.round(sum * 100) / 100) + ' ' + unit : '—', sub: rows.length + ' 条数据' });
  }
  const pendingCount = tasks.filter(t => t['状态'] !== '已完成').length;
  const overdueCount = tasks.filter(t => t['截止日期'] && t['截止日期'] < new Date().toISOString().slice(0, 10) && t['状态'] !== '已完成').length;
  cards.push({ label: '未完成待办', value: pendingCount, sub: overdueCount ? '逾期 ' + overdueCount : '无逾期' });
  statsBox.innerHTML = cards.map(c => '<div class="stat-card"><div class="label">' + c.label + '</div><div class="value">' + c.value + '</div><div class="sub">' + c.sub + '</div></div>').join('');

  // ── 2. 重点项目（有节点：里程碑/截止，逾期高亮）──
  const today = new Date().toISOString().slice(0, 10);
  const projects = tasks.filter(t => t['类型'] === '项目' || (t['优先级'] || '').startsWith('P0') || (t['优先级'] || '').startsWith('P1'));
  const normal = tasks.filter(t => !projects.includes(t));
  const projHtml = projects.length
    ? '<div class="priority-list">' + projects.slice(0, 10).map(t => {
        const due = t['截止日期'] || '';
        const overdue = due && due < today && t['状态'] !== '已完成';
        const dueSoon = due && !overdue && due <= new Date(Date.now() + 7 * 86400000).toISOString().slice(0, 10) && t['状态'] !== '已完成';
        const nodeCls = overdue ? 'node-overdue' : dueSoon ? 'node-soon' : '';
        const nodeLabel = overdue ? '⚠ 逾期' : dueSoon ? '⏰ 本周节点' : '节点';
        return '<div class="project-item">' +
          '<div class="project-head"><b>' + esc(t['待办事项']) + '</b>' + regionTag(t['区域']) +
            '<span class="tag ' + statusTagClass(t['状态']) + '">' + esc(t['状态'] || '') + '</span></div>' +
          (due ? '<div class="project-node ' + nodeCls + '"><span class="node-label">' + nodeLabel + '</span> ' + due + '</div>' : '<div class="project-node">未设节点</div>') +
          (t['备注'] ? '<div class="project-note">' + esc(t['备注']).slice(0, 80) + '</div>' : '') +
        '</div>';
      }).join('') + '</div>'
    : '<div class="empty">暂无重点项目</div>';

  // ── 3. 其他待办 ──
  const todoHtml = normal.length
    ? '<div class="priority-list">' + normal.slice(0, 8).map(t =>
        '<div class="item"><div class="rank" style="background:#c9cdd6">' + esc((t['优先级'] || 'P').slice(0, 2)) + '</div><div><div class="title">' + esc(t['待办事项']) + '</div><div class="meta">' + esc(t['状态']) + ' · 截止 ' + fmtDate(t['截止日期']) + '</div></div></div>'
      ).join('') + '</div>'
    : '<div class="empty">暂无其他待办</div>';

  $('#region-projects').innerHTML = projHtml;
  $('#region-todos').innerHTML = todoHtml;
  $('#region-metrics-detail').innerHTML = metrics.length
    ? '<div class="data-table-wrap"><table class="data-table"><thead><tr><th>数据项</th><th>数值</th><th>单位</th><th>指标</th><th>数据期</th></tr></thead><tbody>' + metrics.slice(0, 12).map(m =>
      '<tr><td>' + esc(m['数据项']) + '</td><td class="num">' + fmtNum(m['数值']) + '</td><td>' + esc(m['单位']) + '</td><td>' + esc(m['指标']) + '</td><td>' + fmtDate(m['数据期']) + '</td></tr>'
    ).join('') + '</tbody></table></div>'
    : '<div class="empty">暂无本区经营数据</div>';

  // ensure we have latest data
  loadTasks(); loadMetrics();
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
      const src = d.source === 'google' ? 'Google 日历实时' : 'Notion 快照';
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
  const editLink = item.url ? '<a class="note-edit-link" href="' + esc(item.url) + '" target="_blank" rel="noreferrer">在 Notion 中编辑 ↗</a>' : '';
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
    + '<div class="notes-empty-title">库里还没有内容</div>'
    + '<div class="notes-empty-body">' + esc(hint) + '</div>'
    + '<div class="notes-empty-actions">'
    +   '<a class="notes-empty-btn primary" id="' + esc(view) + '-empty-notion" target="_blank" rel="noreferrer">打开 Notion 库 ↗</a>'
    + '</div>'
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
  try {
    const d = await api('/api/meeting-notes');
    const allRows = (d.items || []).sort((a, b) => String(b['日期'] || '').localeCompare(String(a['日期'] || '')));
    const notion = 'https://app.notion.com/p/3db4ef71f340818d8acdece8f1461534';
    $('#meeting-notes-notion').href = notion;
    const sideLink = $('#meeting-notes-notion-side'); if (sideLink) sideLink.href = notion;
    const emptyLink = $('#meeting-notes-empty-notion'); if (emptyLink) emptyLink.href = notion;

    const draw = () => {
      const rBtn = $('#view-meeting-notes [data-filter-region].active');
      const sBtn = $('#view-meeting-notes [data-filter-status].active');
      const r = rBtn ? rBtn.dataset.filterRegion : 'all';
      const s = sBtn ? sBtn.dataset.filterStatus : 'all';
      const list = allRows.filter(it => {
        if (r !== 'all' && (it['区域'] || '') !== r) return false;
        if (s !== 'all' && (it['状态'] || '') !== s) return false;
        return true;
      });
      $('#meeting-notes-count').textContent = list.length;
      $('#meeting-notes-list').innerHTML = list.length
        ? list.map(noteCardHtml).join('')
        : notesEmptyHtml('meeting-notes', '把某场会议的总结、关键决策、附件跟小雷欧说一句，我会帮你写进 Notion。');
      bindCardToggles('#meeting-notes-list');
    };

    bindFilterChips('filter', 'region', draw);
    bindFilterChips('filter', 'status', draw);
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
  const editLink = item.url ? '<a class="note-edit-link" href="' + esc(item.url) + '" target="_blank" rel="noreferrer">在 Notion 中编辑 ↗</a>' : '';
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

async function loadKeyAttention() {
  try {
    const d = await api('/api/key-attention');
    const allRows = (d.items || []).sort((a, b) => String(b['日期'] || '').localeCompare(String(a['日期'] || '')));
    const notion = 'https://app.notion.com/p/26ccdaa0053242b686176ad29f4d99b8';
    $('#key-attention-notion').href = notion;
    const sideLink = $('#key-attention-notion-side'); if (sideLink) sideLink.href = notion;
    const emptyLink = $('#key-attention-empty-notion'); if (emptyLink) emptyLink.href = notion;

    const draw = () => {
      const sBtn = $('#view-key-attention [data-ka-filter-status].active');
      const srcBtn = $('#view-key-attention [data-ka-filter-source].active');
      const s = sBtn ? sBtn.dataset.kaFilterStatus : 'all';
      const src = srcBtn ? srcBtn.dataset.kaFilterSource : 'all';
      const list = allRows.filter(it => {
        if (s !== 'all' && (it['状态'] || '') !== s) return false;
        if (src !== 'all' && (it['来源'] || '') !== src) return false;
        return true;
      });
      $('#key-attention-count').textContent = list.length;
      $('#key-attention-list').innerHTML = list.length
        ? list.map(r => genericCardHtml(r, [
            { label: '事项' }, { label: '重要结论' }, { label: '指示/下一步' },
          ], { longFields: ['重要结论', '指示/下一步'] })).join('')
        : notesEmptyHtml('key-attention', '大领导邮件、关键结论、待决策事项。跟小雷欧说"这个要特别关注"，我会帮你归档。');
      bindCardToggles('#key-attention-list');
    };
    bindFilterChips('ka-filter', 'status', draw);
    bindFilterChips('ka-filter', 'source', draw);
    draw();
  } catch (e) {
    $('#key-attention-list').innerHTML = '<div class="empty">' + esc(e.message) + '</div>';
  }
}

async function loadProductInitiatives() {
  try {
    const d = await api('/api/product-initiatives');
    const allRows = (d.items || []).sort((a, b) => String(b['截止日期'] || '').localeCompare(String(a['截止日期'] || '')));
    const notion = 'https://app.notion.com/p/df1a3ef1f3d0413294d814f16902f54a';
    $('#product-initiatives-notion').href = notion;
    const sideLink = $('#product-initiatives-notion-side'); if (sideLink) sideLink.href = notion;
    const emptyLink = $('#product-initiatives-empty-notion'); if (emptyLink) emptyLink.href = notion;

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

async function loadProductKnowledge() {
  try {
    const d = await api('/api/product-knowledge');
    const allRows = (d.items || []).sort((a, b) => String(b['品类'] || '').localeCompare(String(a['品类'] || '')));
    const notion = 'https://app.notion.com/p/8524ee4507824bbc84c2830fe98336e2';
    $('#product-knowledge-notion').href = notion;
    const sideLink = $('#product-knowledge-notion-side'); if (sideLink) sideLink.href = notion;
    const emptyLink = $('#product-knowledge-empty-notion'); if (emptyLink) emptyLink.href = notion;

    const draw = () => {
      const cBtn = $('#view-product-knowledge [data-pk-filter-cat].active');
      const c = cBtn ? cBtn.dataset.pkFilterCat : 'all';
      const list = allRows.filter(it => c === 'all' || (it['品类'] || '') === c);
      $('#product-knowledge-count').textContent = list.length;
      $('#product-knowledge-list').innerHTML = list.length
        ? list.map(r => genericCardHtml(r, [
            { label: '知识点/主题' }, { label: '要点' },
          ], { longFields: ['要点'] })).join('')
        : notesEmptyHtml('product-knowledge', '沉淀产品的知识点、亮点、参数、对比，慢慢建成可检索的知识库。');
      bindCardToggles('#product-knowledge-list');
    };
    bindFilterChips('pk-filter', 'cat', draw);
    draw();
  } catch (e) {
    $('#product-knowledge-list').innerHTML = '<div class="empty">' + esc(e.message) + '</div>';
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
      $('#cal-f-msg').textContent = '已写入 Google 日历，并同步到 Notion ✓';
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
  if (!anyNews) html += '<div class="card"><div class="empty">快照中暂无资讯，等下一次 Notion 同步后回来</div></div>';
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
  $('#open-notion').addEventListener('click', () => window.open('https://www.notion.so/', '_blank'));
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
