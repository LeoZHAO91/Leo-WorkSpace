// stock-board.js — 个人空间→股票 板块的「实时盯盘看板」组件
// 用途：8787 工作台 stocks 板块页内直接渲染（替代跳转 Notion 卡片）。
// 数据：GET /api/personal/stocks（server 后端从东方财富拉实时行情 + 本地持仓 data/holdings.json）。
// 约定：A股红涨绿跌。持仓金额为 Notion Wealth OS 快照，仅当日市值估算、不含成本、非真实盈亏。
(function () {
  if (window.__stockBoardLoaded) return;
  window.__stockBoardLoaded = true;

  const UP = '#e24b4a';   // 红 = 涨（A股）
  const DOWN = '#1d9e75'; // 绿 = 跌
  const FLAT = '#888780';
  const ACC = '#185fa5';  // 主色（蓝）

  function mf(n) { return n == null ? '-' : '¥' + Math.round(n).toLocaleString('zh-CN'); }
  function nf(n, d) { return n == null ? '-' : Number(n).toFixed(d == null ? 2 : d); }
  function col(v) { if (v == null) return FLAT; if (v > 0) return UP; if (v < 0) return DOWN; return FLAT; }
  function sgn(v) { if (v == null) return ''; return v > 0 ? '+' + v : String(v); }
  function dayColorIsUp(v) { return v != null && v > 0; }

  let refreshTimer = null;

  function kpi(label, value, sub, color) {
    return '<div style="background:var(--card,#fff);border:1px solid var(--border,#e3e8f0);border-radius:10px;padding:10px 12px;min-width:0">' +
      '<div style="font-size:11px;color:var(--text-sub,#5a6577)">' + label + '</div>' +
      '<div style="font-size:19px;font-weight:600;margin-top:3px;color:' + (color || 'inherit') + '">' + value + '</div>' +
      (sub ? '<div style="font-size:11px;color:var(--text-sub,#5a6577);margin-top:2px">' + sub + '</div>' : '') +
      '</div>';
  }

  async function load() {
    try {
      const r = await fetch('/api/personal/stocks', { headers: { 'Content-Type': 'application/json', 'X-Personal-Token': (sessionStorage.getItem('wb_ptok') || '') } });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.error || d.detail || ('HTTP ' + r.status));
      render(d);
      return true;
    } catch (e) {
      const box = document.getElementById('stock-board');
      if (box) box.innerHTML = '<div class="banner">行情加载失败：' + esc(e.message) + '</div>';
      return false;
    }
  }

  function render(d) {
    const box = document.getElementById('stock-board');
    if (!box) return;
    const upCount = (d.holdings || []).filter(h => h.chgPct > 0).length;
    const downCount = (d.holdings || []).filter(h => h.chgPct < 0).length;
    const flatCount = (d.holdings || []).filter(h => h.chgPct === 0).length;
    const at = d.at ? new Date(d.at).toLocaleTimeString('zh-CN', { hour12: false }) : '';
    const sumColor = d.sum && dayColorIsUp(d.sum.chgPct) ? UP : (d.sum && d.sum.chgPct < 0 ? DOWN : FLAT);

    // 指数环境条
    const idxHtml = (d.indices || []).map(x =>
      '<span style="display:inline-flex;align-items:baseline;gap:8px;white-space:nowrap">' +
        '<span style="color:var(--text,#1c2433);font-weight:500">' + esc(x.name) + '</span>' +
        '<span style="color:' + col(x.chgPct) + ';font-weight:600">' + nf(x.price) + '</span>' +
        '<span style="color:' + col(x.chgPct) + ';font-size:11px">' + sgn(x.chgPct) + '%</span>' +
      '</span>').join('');

    // 持仓表
    const rows = (d.holdings || []).map(h => {
      const c = col(h.chgPct);
      const kindTag = h.kind === 'etf' ? 'ETF' : '个股';
      return '<tr>' +
        '<td style="padding:8px 10px;border-top:1px solid var(--border,#e3e8f0)">' +
          '<div style="font-weight:600;color:var(--text,#1c2433)">' + esc(h.name) + '</div>' +
          '<div style="font-size:11px;color:var(--text-sub,#5a6577)">' + h.code + ' · ' + kindTag + '</div>' +
        '</td>' +
        '<td style="padding:8px 10px;border-top:1px solid var(--border,#e3e8f0);text-align:right;font-weight:600;color:' + c + '">' + nf(h.price, h.kind === 'etf' ? 3 : 2) + '</td>' +
        '<td style="padding:8px 10px;border-top:1px solid var(--border,#e3e8f0);text-align:right;color:' + c + ';font-weight:600">' + sgn(h.chgPct) + '%</td>' +
        '<td style="padding:8px 10px;border-top:1px solid var(--border,#e3e8f0);text-align:right;color:var(--text,#1c2433)">' + mf(h.amount) + '</td>' +
        '<td style="padding:8px 10px;border-top:1px solid var(--border,#e3e8f0);text-align:right;color:' + c + '">' +
          (h.estDayChg != null ? '<span style="font-weight:600">' + sgn(h.estDayChg) + '</span>' : '<span style="color:var(--text-sub,#5a6577)">休市</span>') +
        '</td>' +
      '</tr>';
    }).join('');

    const i = (s) => '<span style="width:10px;height:10px;border-radius:2px;background:' + s + ';display:inline-block"></span>';

    box.innerHTML =
      '<div class="card" style="border-top:3px solid ' + ACC + '">' +
        '<div class="card-head"><h3>实时盯盘 · 持仓与大盘</h3>' +
          '<span class="intel-meta">' + esc(d.marketState || '') + ' · 更新 ' + at +
          ' · <button class="btn btn-sm" style="margin-left:8px" onclick="document.__refreshStockBoard&&document.__refreshStockBoard()">刷新</button></span>' +
        '</div>' +

        '<div class="summary-grid" style="grid-template-columns:repeat(auto-fit,minmax(150px,1fr));margin-bottom:14px">' +
          kpi('持仓合计(快照)', mf(d.sum && d.sum.amount), '4 个场内标的', '#185fa5') +
          kpi('估算当日盈亏', (d.sum && d.sum.estDayChg != null) ? sgn(d.sum.estDayChg) : '-', '按持仓×今日涨跌估算', sumColor) +
          kpi('持仓估算市值', mf(d.sum && d.sum.estValue), '快照金额+当日估算', '#5a6577') +
          kpi('涨/跌/平', upCount + ' / ' + downCount + ' / ' + flatCount, '当日', '#5a6577') +
        '</div>' +

        (idxHtml ? '<div style="display:flex;flex-wrap:wrap;gap:14px 22px;margin-bottom:6px;font-size:13px">' + idxHtml + '</div>' : '') +

        '<div style="display:flex;gap:14px;font-size:11px;color:var(--text-sub,#5a6577);margin:6px 0 8px">' +
          i(UP) + '涨 ' + i(DOWN) + '跌（A股红涨绿跌）</div>' +

        '<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:13px">' +
          '<thead><tr>' +
            '<th style="text-align:left;padding:7px 10px;color:var(--text,#1c2433);font-weight:600">标的</th>' +
            '<th style="text-align:right;padding:7px 10px;color:var(--text,#1c2433);font-weight:600">现价</th>' +
            '<th style="text-align:right;padding:7px 10px;color:var(--text,#1c2433);font-weight:600">涨跌幅</th>' +
            '<th style="text-align:right;padding:7px 10px;color:var(--text,#1c2433);font-weight:600">持仓(快照)</th>' +
            '<th style="text-align:right;padding:7px 10px;color:var(--text,#1c2433);font-weight:600">当日估算</th>' +
          '</tr></thead><tbody>' + rows + '</tbody></table></div>' +

        '<div style="font-size:11px;color:var(--text-sub,#5a6577);margin-top:8px;line-height:1.6">' +
          '持仓金额来自 Notion Wealth OS 快照（2026-09），仅作当日市值估算参考；<b style="font-weight:600">不含买入成本，非真实持仓盈亏</b>。实时行情 60 秒自动刷新。休市时段显示最近收盘价。' +
        '</div>' +
      '</div>';

    schedule();
  }

  function schedule() {
    if (refreshTimer) clearTimeout(refreshTimer);
    refreshTimer = setTimeout(function () { load(); }, 60000);
  }

  window.__refreshStockBoard = function () { if (refreshTimer) clearTimeout(refreshTimer); return load(); };

  window.renderStockBoard = function (box) {
    box.innerHTML = '<div id="stock-board"><div class="empty">加载实时行情…</div></div>';
    load();
  };
})();
