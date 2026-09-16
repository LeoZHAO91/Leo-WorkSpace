// finance-budget.js — 个人空间→财务状况 板块的「月度预算锚点」卡
// 用途：挂到工作台个人空间 finance 板块，置于「支出分层透视」之下。
// 零第三方依赖，离线可用。数据来自 2026-09-10 本地账单分层测算（报表口径，1—9/9 净日常 ¥194,614）。
// 口径：刚性月度固定(房贷+房租+车位+物业)≈¥4,900；弹性消费上限¥7,500 → 常态月净日常目标¥12,000-12,400。
//      房租 6/2 预付"6个月+物业"覆盖至 11 月；12 月须续付，单列预留。
// 接线：app.js 定义 mountFinanceBudget(box) 动态加载本文件；在 finance 板块 #finlayers 之后追加 #finbudget。
(function () {
  if (window.__financeBudgetLoaded) return;
  window.__financeBudgetLoaded = true;

  function mf(n) { return '¥' + Math.round(n).toLocaleString('zh-CN'); }

  function kpi(label, value, sub, color) {
    return '<div style="background:var(--card,#fff);border:1px solid var(--border,#e3e8f0);border-radius:10px;padding:10px 12px;min-width:0">' +
      '<div style="font-size:11px;color:var(--text-sub,#5a6577)">' + label + '</div>' +
      '<div style="font-size:19px;font-weight:600;margin-top:3px;color:' + (color || 'inherit') + '">' + value + '</div>' +
      (sub ? '<div style="font-size:11px;color:var(--text-sub,#5a6577);margin-top:2px">' + sub + '</div>' : '') +
      '</div>';
  }

  // 月度预算行表：月份 / 弹性上限 / 刚性 / 备注
  const ROWS = [
    { m: '2026-09(下半月)', flex: '≈¥4,000', rigid: '—', note: '房贷已扣 · 房租预付至11月 · 含记账口径修正', warn: false },
    { m: '2026-10', flex: '¥7,500', rigid: '¥4,900', note: '常态月目标 ¥12,400', warn: false },
    { m: '2026-11', flex: '¥7,500', rigid: '¥4,900', note: '常态月目标 ¥12,400', warn: false },
    { m: '2026-12', flex: '¥7,500', rigid: '¥4,900＋房租续付', note: '另单列预留 ¥8,000–15,000', warn: true },
  ];

  window.renderFinanceBudget = function (box) {
    const rows = ROWS.map(r =>
      '<tr>' +
        '<td style="font-weight:600;padding:7px 10px;border-top:1px solid var(--border,#e3e8f0)">' + r.m + '</td>' +
        '<td style="padding:7px 10px;border-top:1px solid var(--border,#e3e8f0)">' + r.flex + '</td>' +
        '<td style="padding:7px 10px;border-top:1px solid var(--border,#e3e8f0)">' + r.rigid + '</td>' +
        '<td style="padding:7px 10px;border-top:1px solid var(--border,#e3e8f0);color:' + (r.warn ? '#d9822b' : 'var(--text-sub,#5a6577)') + ';font-size:12px">' + r.note + '</td>' +
      '</tr>'
    ).join('');

    box.innerHTML =
      '<div class="card" style="border-top:3px solid #d9822b;margin-top:14px">' +
        '<div class="card-head"><h3>月度预算锚点 · 2026 剩余</h3><span class="intel-meta">刚性+弹性 · 数据 2026-09-10</span></div>' +
        '<div class="summary-grid" style="grid-template-columns:repeat(auto-fit,minmax(150px,1fr));margin-bottom:12px">' +
          kpi('常态月净日常 · 目标', '¥12,000–12,400', '刚性+弹性', '#2456d6') +
          kpi('弹性消费上限', '¥7,500', '餐饮+通勤+日杂+服饰/社交', '#5a6577') +
          kpi('刚性固定', '≈¥4,900', '房贷+房租+车位+物业', '#5a6577') +
        '</div>' +
        '<div style="font-size:12px;color:var(--text-sub,#5a6577);line-height:1.6;margin-bottom:6px">' +
          '1–9月净日常偏高主因是<b style="font-weight:600">回国定居一次性切换成本</b>（电器¥3.1万＋租房安家¥2.6万＋旅行¥2.3万＋服饰¥2.0万≈¥11.4万，占55%），9月起不再重复；目标=回落稳态、防高消费惯性延续。弹性额<b style="font-weight:600">不含大额购物/旅行</b>，如有须专项批准。<br>' +
          '<b style="font-weight:600">2026-09-10 修正</b>：9-02 抖音 ¥8,697 已按记账口径删除，1—9/9 净日常由 ¥201,284 → <b style="font-weight:600">¥194,614</b>（−¥6,671）；剩余月份预算锚点不变。' +
        '</div>' +
        '<div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;font-size:13px">' +
          '<thead><tr>' +
            '<th style="text-align:left;padding:7px 10px;font-weight:600;color:var(--text,#1c2433)">月份</th>' +
            '<th style="text-align:left;padding:7px 10px;font-weight:600;color:var(--text,#1c2433)">弹性上限</th>' +
            '<th style="text-align:left;padding:7px 10px;font-weight:600;color:var(--text,#1c2433)">刚性</th>' +
            '<th style="text-align:left;padding:7px 10px;font-weight:600;color:var(--text,#1c2433)">说明</th>' +
          '</tr></thead><tbody>' + rows + '</tbody></table></div>' +
        '<div style="font-size:11px;color:var(--text-sub,#5a6577);margin-top:6px">待确认：青岛房租12月续付金额/周期、车位续约、房贷部分提前还款后月供是否下调(9/8仍扣¥1,903)。</div>' +
      '</div>';
  };

  // 接线说明同 finance-spend-layers.js；app.js 在 mountFinanceLayers 调用后追加 mountFinanceBudget。
})();
