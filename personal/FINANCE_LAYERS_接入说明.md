# 个人空间·财务状况：分析卡（支出分层透视 + 月度预算锚点）接线记录

**目标**：在「个人空间 → 财务状况(finance)」板块，展示两张本地数据分析卡（不依赖 Notion db 绑定）：
1. **支出分层透视 · 净日常消费** —— 逐年剔除 资产/负债→一次性税负→恋爱，得净日常。
2. **月度预算锚点 · 2026 剩余** —— 刚性(房贷+房租+车位+物业)+弹性(上限¥7,500)→常态月净日常目标。
**数据**：报表口径(剔报销)。源 `.workbuddy/data/baishi_aa_spend_layered.csv` + 2026-09-09 月度测算。

## 组件已就位
| 文件 | 全局函数 | 用途 |
|---|---|---|
| `public/personal/finance-spend-layers.js` | `window.renderFinanceSpendLayers(boxEl)` | KPI卡+分层堆叠柱(SVG)+图例 |
| `public/personal/finance-budget.js` | `window.renderFinanceBudget(boxEl)` | KPI卡+月度预算表 |

两者均零第三方依赖(原生 SVG/HTML + CSS 变量)，暗色自适应，已本地校验语法。HTTP 访问 200。

## app.js 已实现（双卡幂等挂载，勿重复改）
- 定义 `mountFinanceLayers(box)`（约 1509 行）与 `mountFinanceBudget(box)`（约 1529 行）：动态注入 `<script src="/personal/xxx.js?v=Date.now()">`，加载完成后调 `window.renderXxx(box)`。
- **两处调用点**（每处先挂 layers 再挂 budget）：
  1. `loadPersonalCurrent()` 的 `!sec.db` 分支（finance 未绑定 db 也显示，`#finlayers`→`#finbudget` 顺序）。
  2. `renderPersonalSectionContent(box)` 末尾（`box.innerHTML=...` 之后 `insertAdjacentHTML`，避免被覆盖）。
- 挂载点必须在 `box.innerHTML=...` **之后**执行，否则被 innerHTML 覆盖。

## index.html
- 版本号已 bump（当前 `app.js?v=14`）。改 app.js 后需同步 +1 强制刷新缓存。

## 效果预览
`http://127.0.0.1:8787/` → 解锁个人空间 → 财务状况。自上而下：
- KPI(2025净日常/2026前9月/年化) → 分层堆叠柱(SVG，灰=资产负债/琥珀=税/红=恋爱/蓝=净日常)。
- 月度预算卡：9月下半月弹性≈¥3,500｜10/11月 ¥12,400｜12月 ¥12,400+房租续付预留¥8,000-15,000。

## 数据口径备注（重要）
- 恋爱标签 A-HX/A-XW/A-XB；泓锌法国签证 ¥50,084 已在恋爱内、税负不重复扣；宿舍/住宿=住房成本单列不剔。
- 刚性≈¥4,900/月：房贷¥1,903(8号)+青岛房租~¥2,500+物业~¥250+车位~¥200。
- 青岛房租 2026-06-02 预付"6个月+物业¥16,513"覆盖至 11 月；12 月须续付(金额待确认)。
- 房贷 2026-08-30 部分提前还款¥310,606，但 09-08 仍扣¥1,903(未见下调，待核对)。
- 待确认：房租12月续付节奏/金额、车位续约、房贷月供是否下调。
