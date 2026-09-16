// finance-spend-layers.js — 个人空间→财务状况 板块的「支出分层透视」图表卡
// 用途：挂到工作台个人空间 finance 板块。零第三方依赖（原生 SVG + CSS 变量），离线可用。
// 数据：报表口径（已剔报销）逐层减法 → 净日常。源：.workbuddy/data/baishi_aa_spend_layered.csv（2026-09-09）
// 接线：见文件末尾说明。工作台 app.js 在 renderPersonalSectionContent() 中，
//       若 currentPersonal==='finance'，在其输出末尾追加 <div id="fin-layers"></div> 并调用 renderFinanceSpendLayers()
(function () {
  if (window.__financeLayersLoaded) return;
  window.__financeLayersLoaded = true;

  const LAYERS = [
    { y: '2023', flow: 335861, asset: 156132, tax: 4502, love: 8268, daily: 166959 },
    { y: '2024', flow: 1136319, asset: 824537, tax: 49229, love: 93869, daily: 168684 },
    { y: '2025', flow: 297102, asset: 26381, tax: 24757, love: 41171, daily: 204793 },
    { y: '2026·1—9/9', flow: 594599, asset: 326007, tax: 46469, love: 27511, daily: 194614 },
  ];
  const C = {
    flow: '#5a6577', asset: '#c9cdd6', tax: '#d9822b',
    love: '#d62728', daily: '#2456d6', card: '#ffffff',
  };
  function mf(n) { return '¥' + Math.round(n).toLocaleString('zh-CN'); }

  // 净日常年化（2026 按自然日 1/1—9/9 = 252 天）
  const daily2026 = LAYERS[3].daily;
  const annual2026 = Math.round(daily2026 / 252 * 365);

  function kpiCard(label, value, sub, color) {
    return '<div style="background:var(--card,#fff);border:1px solid var(--border,#e3e8f0);border-radius:10px;padding:10px 12px;min-width:0">' +
      '<div style="font-size:11px;color:var(--text-sub,#5a6577)">' + label + '</div>' +
      '<div style="font-size:19px;font-weight:600;margin-top:3px;color:' + (color || 'inherit') + '">' + value + '</div>' +
      (sub ? '<div style="font-size:11px;color:var(--text-sub,#5a6577);margin-top:2px">' + sub + '</div>' : '') +
      '</div>';
  }

  function waterfallSvg() {
    // 单一堆叠柱：总高 = 流水总额 flow = asset(剔除,灰) + tax(税,琥珀) + love(恋爱,红) + daily(净日常,蓝)
    // 自顶向下分段，净日常在底部最直观（越小越靠下=越低生活成本）。
    const gw = 172, baseW = 46, topH = 16, barH = 128, labelH = 16, barTop = topH + 6;
    const maxFlow = Math.max.apply(null, LAYERS.map(r => r.flow));
    const scale = (n) => Math.max(0, n * barH / maxFlow);
    const svgW = LAYERS.length * gw;
    let svg = '';
    // 基线刻度：net 顶部 / love 顶 / tax 顶 的可读辅助线（简化为每柱自顶累积）
    LAYERS.forEach((r, g) => {
      const lx = g * gw + (gw - baseW) / 2;
      let y = barTop;
      const push = (h, color) => { const b = Math.min(h, barH - (y - barTop)); const o = '<rect x="' + lx + '" y="' + y + '" width="' + baseW + '" height="' + Math.max(b, 1) + '" fill="' + color + '" rx="2"/>'; y += b; return o; };
      let s = push(scale(r.asset), C.asset);      // 资产/负债（顶）
      s += push(scale(r.tax), C.tax);             // 一次性税负
      s += push(scale(r.love), C.love);           // 恋爱专项
      const netTopY = y;                          // net 段顶（net 填到柱底）
      s += push(scale(r.daily), C.daily);         // 净日常（底）
      svg += s;
      svg += '<text x="' + (lx + baseW / 2) + '" y="' + Math.max(netTopY + 10, barTop + 11) + '" font-size="10.5" font-weight="600" text-anchor="middle" fill="#ffffff">' + mf(r.daily) + '</text>';
      svg += '<text x="' + (lx + baseW / 2) + '" y="' + (barTop + barH + 13) + '" font-size="11" text-anchor="middle" fill="var(--text,#1c2433)">' + r.y + '</text>';
    });
    return '<svg viewBox="0 0 ' + svgW + ' ' + (topH + barH + labelH + 12) + '" style="width:100%;height:auto" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="年度支出分层堆叠：资产动作+税负+恋爱+净日常=流水总额">' + svg + '</svg>';
  }

  window.renderFinanceSpendLayers = function (box) {
    const dark = matchMedia('(prefers-color-scheme: dark)').matches;
    if (dark) {
      C.card = 'transparent'; C.flow = '#8b93a7';
    }
    const legend = [
      ['#5a6577', '流水总额'], ['#c9cdd6', '资产/负债动作'], ['#d9822b', '一次性税负'],
      ['#d62728', '恋爱专项'], ['#2456d6', '净日常个人消费'],
    ].map(s => '<span style="display:flex;align-items:center;gap:5px;font-size:11px;color:var(--text-sub,#5a6577)">' +
      '<span style="width:10px;height:10px;border-radius:2px;background:' + s[0] + '"></span>' + s[1] + '</span>').join('');
    box.innerHTML =
      '<div class="card" style="border-top:3px solid #2456d6;margin-top:14px">' +
        '<div class="card-head"><h3>支出分层透视 · 净日常消费</h3><span class="intel-meta">报表口径(剔报销) · 至 2026-09-09</span></div>' +
        '<div class="summary-grid" style="grid-template-columns:repeat(auto-fit,minmax(150px,1fr));margin-bottom:12px">' +
          kpiCard('2025 全年净日常', mf(204793), '较 2024 +21%', '#2456d6') +
          kpiCard('2026 前9月净日常', mf(194614), '为 2025 全年的 95%', '#d62728') +
          kpiCard('2026 年化(按自然日)', mf(annual2026), '需重点控制', '#d9822b') +
        '</div>' +
        '<div style="display:flex;flex-wrap:wrap;gap:14px;margin-bottom:8px">' + legend + '</div>' +
        waterfallSvg() +
        '<div style="font-size:11px;color:var(--text-sub,#5a6577);margin-top:6px">读法：自报表生活向上逐层扣减，蓝色为真实生活水平。2024 账面 ¥31.2 万 → 剔恋爱+税后真日常 ¥16.9 万；2026 净日常已在高位。住房成本单列不剔。</div>' +
      '</div>';
  };

  // ---- 接线说明 ----
  // 1) 将本文件复制到 workbench/public/personal/finance-spend-layers.js
  // 2) index.html 底部 script 引入（或 app.js 顶部同源引入）
  // 3) app.js renderPersonalSectionContent(box) 末尾追加：
  //      if (window.renderFinanceSpendLayers) box.insertAdjacentHTML('beforeend','<div id="finlayers"></div>'),
  //        window.renderFinanceSpendLayers(document.getElementById('finlayers'));
  // 4) 可选：finance 板块未绑定 Notion db 时也可显示（数据来自本文件，不依赖绑定）
})();
