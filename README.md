# 逐梦之夏 · DreamSummer

> DREAM IN SUMMER, BUILD THE FUTURE
>
> 逐梦创新实验室「逐梦之夏」活动官网 —— 以课题项目招标为入口，用学习意愿考核筛选，完成人才招募与项目孵化。

**在线访问：** <https://222twotwotwo.github.io/DreamSummer/>

---

## 这个站是做什么的

面向全校大一新生的夏季项目实践计划宣传站，主线是四步：

```
课题项目发布  →  自主申请  →  系统跟进  →  完成结项
```

页面按这条主线组织，把「招新简章」做成了一份可滚动阅读的线上策划案。

| 信息 | 内容 |
| --- | --- |
| 主办方 | 逐梦创新实验室 |
| 面向对象 | 全校大一新生 |
| 活动周期 | 2026.09 – 2027.02 |
| 具体时间 | 以 OA 系统公告为准 |

## 页面结构

`src/App.vue` 中的区块顺序，基本就是一页完整的落地页：

| 区块 | 组件 | 说明 |
| --- | --- | --- |
| 顶部导航 | `SiteNav.vue` | 滚动变色；≤960px 收进右侧抽屉 |
| 首屏 | `HeroSection.vue` | 主标题 + 双 CTA + 底部信息条 |
| 活动全景 | `ProductShowcase.vue` | 吸顶逐屏切换的 400vh 滚动轨道 |
| 核心主张 | `StatementBlock.vue` | 深色反转区，左标签 + 右大段陈述 |
| 活动目标 | `GoalsSection.vue` | 2×2 网格 + 金黄衬线编号 |
| 核心流程 | `FlowSection.vue` | SVG 虚线的 S 形流程图 |
| 时间安排 | `TimelineSection.vue` | 基于 `QTimeline` |
| 网站模块 | `ModulesSection.vue` | 3 列卡片网格 |
| 考核激励 | `AssessSection.vue` | 考核维度表 + 招募转化路径 |
| 立即申请 | `JoinSection.vue` | 深色大 CTA |
| 页脚 | `SiteFooter.vue` | 版本与免责说明 |

## 技术栈

| 层 | 选型 |
| --- | --- |
| 框架 | Vue 3（`<script setup>` + TypeScript） |
| UI 组件库 | Quasar 2（含 `QTimeline` / `QDrawer` / `QBtn` 等） |
| 3D 背景 | Three.js（`src/three-scene.ts`，挂在固定的 `#webgl-bg` 上） |
| 构建 | Vite 5 + Sass |
| 类型检查 | vue-tsc |

## 本地开发

需要 Node.js 22 及以上（CI 使用 Node 22）。

```bash
npm install        # 安装依赖
npm run dev        # 启动开发服务器（默认 http://localhost:5173）
npm run build      # 生产构建，输出到 dist/
npm run preview    # 本地预览构建产物
npm run typecheck  # 类型检查
```

## 目录结构

```
├─ index.html                  # 入口 HTML
├─ vite.config.ts              # base: './'，便于部署到子路径
├─ .github/workflows/
│  └─ deploy.yml               # 推 main → 构建 → 发布 gh-pages
├─ public/images/              # 站点图片（背景图、课题配图等）
├─ src/
│  ├─ main.ts                  # 挂载入口，先加载 Quasar 样式再加载自定义样式
│  ├─ App.vue                  # 区块编排
│  ├─ style.css                # ★ 全站样式集中在此（组件内无 <style>）
│  ├─ quasar-variables.sass    # Quasar Sass 变量
│  ├─ three-scene.ts           # Three.js 背景场景
│  ├─ directives/reveal.ts     # v-reveal 滚动入场动画指令
│  └─ components/*.vue         # 各区块组件
└─ design-refs/                # 设计参考与审查材料（见下方说明）
```

## 设计规范

本站为**暖白社论风**，改动界面时请先读 `src/style.css` 顶部的 `:root`，所有颜色、间距、字体都收口在那里，不要在组件里写魔法值。

- **配色**：暖白底 `#F6F2E9` + 卡片 `#FFFDF8` + 1px 低对比描边 `#E6DFCE`；
  金黄 `#E0A93C` 是**唯一**的高饱和强调色，只用于主按钮、数字高亮、下划线与当前态圆点；
  深棕 `#2C2117` 用于活动全景、核心主张、立即申请等反转区块，形成深—浅—深的阅读节奏。
- **字体**：中文标题用衬线（Noto Serif SC 栈），正文用无衬线；英文小标签用大写 + 宽字距。
- **形状**：全站直角（`--radius: 0`），**不使用投影**——结构靠描边与留白表达，
  hover 只做描边加深 / 顶部强调线展开。
- **间距**：`--sp-1..5`（8 / 16 / 28 / 48 / 80px）四档 + `--section-y` 区块留白。

### 关于 `design-refs/`

这个目录是本次视觉迭代的设计研究留档，包含：

- `README-参考包.md` —— 参考站子链接清单与截图索引
- `设计风格分析.md` —— awwwards / onepagelove / evolve 三站 × 五维度拆解
- `风格迭代提示词.md` —— 可直接复用的 UI 风格迭代提示词
- `audit/` —— 审查工具（`scan_dead_css.py` 死代码扫描、`audit-init.js` 截图辅助脚本）

**目录中的 PNG 截图不入库**（已在 `.gitignore` 中排除）：体积较大，且为第三方站点截图。

## 部署

推送到 `main` 即自动部署：

1. GitHub Actions 执行 `npm ci` → `npm run build`
2. 写入 `dist/.nojekyll`（绕过 Pages 的 Jekyll 处理）
3. 用 `peaceiris/actions-gh-pages` 全量发布到 `gh-pages` 分支

工作流定义见 `.github/workflows/deploy.yml`，也可在 Actions 页面手动触发。

## 备注

- 页面中的时间节点、考核标准等以 OA 系统正式公告为准，站内文字仅供参考。
- 首屏背景图为去色处理后的素材，与整体暖白基调保持一致。
