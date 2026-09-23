<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { showcaseIndex, showcaseTotal, registerShowcaseJump } from '../composables/showcase';

/**
 * 图片来源：AI 生成二次元风格风景插画（WorkBuddy ImageGen 生成，以既有插画作风格参考），
 * 无人物、无现实场景，暖橙奶油色调，仅用于本站宣传。
 * slide-bidding 夕阳云海·卷轴与纸飞机 / slide-assessment 晨光云海·漂浮书页
 * slide-recruit 黄昏飞鸟·引路之星 / slide-incubation 晨光浮岛·发光幼苗
 * slide-goals 晨光路标石柱 / slide-flow 云端石阶与光门 / slide-schedule 晨昏时光带
 * slide-platform 云海光屏阵列 / slide-review 六芒星徽 / slide-join 云路天际光门
 */

interface Slide {
  num: string;
  title: string;
  desc: string;
  points: string[];
  img: string;
  imgAlt: string;
  /** 末屏可选的行动按钮 */
  cta?: { label: string; href: string };
}

const slides: Slide[] = [
  {
    num: '01',
    title: '项目招标',
    desc: '实验室老师与项目团队发布真实课题，由导师审核，确保课题真实、可执行、有孵化价值。',
    points: ['课题名称与背景', '七项发布要素一次讲清', '真实 · 可执行 · 有孵化价值'],
    img: './images/slide-bidding.jpg',
    imgAlt: '夕阳云海中飘行的卷轴与纸飞机插画'
  },
  {
    num: '02',
    title: '学习考核',
    desc: '以过程留痕为基础，六大维度综合评价学习意愿，拒绝"简历面试"式的片面观察。',
    points: ['申请材料 · 周会参与 · 任务完成', '知识分享 · 月报质量 · 导师评价', '全过程 OA 系统留痕'],
    img: './images/slide-assessment.jpg',
    imgAlt: '晨光云海上漂浮的书本插画'
  },
  {
    num: '03',
    title: '人才招募',
    desc: '优秀参与者进入实验室，成为项目骨干或新生力军，在真实项目中赢得直通资格。',
    points: ['负责人推荐资格', '结项后发布实验室招募令', '绿色通道 · 竞赛推荐'],
    img: './images/slide-recruit.jpg',
    imgAlt: '飞鸟群飞向地平线引路之星的黄昏插画'
  },
  {
    num: '04',
    title: '项目孵化',
    desc: '立项推进、周会月报跟进、结项评审，优秀项目进入下一期孵化或推荐参赛。',
    points: ['周会 · 月报 · 中期检查', '结项答辩：优秀 / 合格 / 不合格', '成果沉淀至项目库续期孵化'],
    img: './images/slide-incubation.jpg',
    imgAlt: '晨光中生长着发光幼苗的浮空岛插画'
  },
  {
    num: '05',
    title: '活动目标',
    desc: '以课题项目为试金石：考核学习意愿，孵化优质项目，招募实验室生力军。',
    points: [
      '考核学习意愿 · 多维综合判断，拒绝"简历面试"式的片面观察',
      '孵化优质项目 · 真实课题落地，形成可展示、可参赛的成果',
      '招募新生力量 · 优秀参与者直通面试，成为实验室生力军',
      '沉淀长效机制 · 建成课题库、人才库、项目库与 OA 招标流程'
    ],
    img: './images/slide-goals.jpg',
    imgAlt: '晨光云海上四座发光路标石柱的插画'
  },
  {
    num: '06',
    title: '核心流程',
    desc: '四步走完全程，过程材料在 OA 系统内全部留痕，作为考核与评审的客观依据。',
    points: [
      '项目发布 · 课题名称与背景、目标产出、任务拆解、技能要求、人数周期、学习资源、考核标准一次讲清',
      '自主申请 · 个人简介与技能、作品经历、课题理解；负责人初筛 + 面试/小任务测试 + 导师确认',
      '系统跟进 · 负责人制 + 周会 + 月报 + 中期检查，状态覆盖进行中、预警、延期、结项、淘汰',
      '完成结项 · 项目报告、代码/原型/演示视频、个人学习总结；答辩评出优秀、合格、不合格'
    ],
    img: './images/slide-flow.jpg',
    imgAlt: '云海中逐级升高的四段浮空石阶与光门插画'
  },
  {
    num: '07',
    title: '时间安排',
    desc: '一学期的节奏，各阶段具体时间以 OA 系统公告为准。',
    points: [
      '九月中下旬 · 筹备与宣传 —— 建站、课题征集、模板制定、网站上线与专场宣讲',
      '十月上旬 · 申请立项期 —— 学生申请、负责人筛选、面试/任务测试、立项公示',
      '十月至十二月 · 项目执行期 —— 周会、月报、中期检查、项目推进',
      '一月 · 结项评审期 —— 提交材料、答辩评审、评优公示',
      '长期 · 转化招募期 —— 优秀成员直通面试、新生招募、项目续期孵化'
    ],
    img: './images/slide-schedule.jpg',
    imgAlt: '自黎明渐变到黄昏橙红的天际光带插画'
  },
  {
    num: '08',
    title: '网站模块',
    desc: 'OA 课题项目招标网站：项目发布 → 自主申请 → 系统跟进 → 完成结项，全流程线上化。',
    points: [
      '项目大厅 · 展示所有招标课题并支持标签筛选；详情覆盖背景、目标、任务、技能要求、人数、周期、产出',
      '申请入口 · 在线填报资料、作品、学习计划与时间投入；进度看板跟踪待审核 / 面试中 / 已立项 / 进行中 / 已结项',
      '过程留痕 · 周会纪要与月报上传、文件与链接归档（代码仓库、文档、原型、数据集）、通知提醒',
      '评价结项 · 导师评价、负责人评价、结项材料提交；数据统计覆盖申请数、立项数、出勤率、结项率、成果数'
    ],
    img: './images/slide-platform.jpg',
    imgAlt: '云海上悬浮着九块发光光屏阵列的插画'
  },
  {
    num: '09',
    title: '考核激励',
    desc: '项目即考核：在真实任务中观察你的学习意愿，六大维度全过程留痕。',
    points: [
      '六大维度 · 申请材料、周会参与、任务完成、知识分享、月报质量、导师评价',
      '全程留痕 · OA 申请记录、周会纪要、项目看板、学习日志、月报评审、导师评分',
      '招募转化路径 · 报名者 → 项目成员 → 优秀成员 → 项目骨干 → 逐梦新生力军',
      '激励与退出 · 优秀成员获绿色通道与竞赛推荐；连续缺勤、长期无进展则退出'
    ],
    img: './images/slide-review.jpg',
    imgAlt: '云海中六道柔光汇聚向暖金星徽的插画'
  },
  {
    num: '10',
    title: '加入我们',
    desc: '不问出身，只看投入。浏览课题，提交申请，在真实项目中开始成长。',
    points: [
      '浏览课题 · 前往 OA 招标网站查看全部招标课题',
      '提交申请 · 在线填报资料、作品、学习计划与时间投入',
      '走进项目 · 初筛、面试/小任务测试、导师确认后立项推进',
      '宣传节奏 · 预热 → 网站上线 → 课题发布 → 申请截止提醒 → 立项公示 → 中期展示 → 结项评优 → 新生招募'
    ],
    img: './images/slide-join.jpg',
    imgAlt: '云海之路尽头矗立着光之门拱的插画',
    cta: { label: '前往 OA 招标网站', href: '#' }
  }
];

const idx = ref(0);

const pad = (n: number): string => String(n).padStart(2, '0');

/* ---------- 滚动驱动 ----------
 * 桌面（>960px）：轨道高度 = 屏数 × 100dvh（由 --slide-count 驱动），section 吸顶，
 *   轨道内滚动进度决定当前 slide。
 * 移动（≤960px）：section 自身高度 = 一屏，.showcase-inner 变成整屏吸附滚动区
 *   （CSS scroll-snap），一屏一屏切换，与桌面观感一致；不再把多屏铺开。
 * 两种模式都用同一套 idx / 圆点 / 页码。 */
const rootEl = ref<HTMLElement | null>(null);
const innerEl = ref<HTMLElement | null>(null);
let ticking = false;

function isDesktop(): boolean {
  return window.innerWidth > 960;
}

/** 移动端：找出当前贴在容器顶部的 slide 序号 */
function updateMobileIdx(): void {
  const inner = innerEl.value;
  if (!inner) return;
  const nodes = inner.querySelectorAll<HTMLElement>('.slide');
  if (!nodes.length) return;
  let best = 0;
  let bestDist = Number.POSITIVE_INFINITY;
  nodes.forEach((el, i) => {
    const dist = Math.abs(el.offsetTop - inner.scrollTop);
    if (dist < bestDist) {
      bestDist = dist;
      best = i;
    }
  });
  idx.value = Math.min(slides.length - 1, best);
}

function updateFromScroll(): void {
  if (!isDesktop()) {
    updateMobileIdx();
    return;
  }
  const track = rootEl.value;
  if (!track) return;
  const rect = track.getBoundingClientRect();
  const total = track.offsetHeight - window.innerHeight;
  if (total <= 0) return;
  const progress = Math.min(1, Math.max(0, -rect.top / total));
  const target = Math.min(slides.length - 1, Math.floor(progress * slides.length));
  idx.value = target;
}

function onScroll(): void {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    updateFromScroll();
    ticking = false;
  });
}

/* 圆点直达：桌面滚页面到对应进度中点；移动端滚动吸附容器到对应 slide 顶部 */
function scrollToSlide(n: number): void {
  if (!isDesktop()) {
    const inner = innerEl.value;
    const target = inner?.querySelectorAll<HTMLElement>('.slide')[n];
    if (inner && target) {
      inner.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
    }
    idx.value = n;
    return;
  }
  const track = rootEl.value;
  if (!track) return;
  const rect = track.getBoundingClientRect();
  const total = track.offsetHeight - window.innerHeight;
  const top = window.scrollY + rect.top + ((n + 0.5) / slides.length) * total;
  window.scrollTo({ top, behavior: 'smooth' });
}

/** 吸附滚动容器的 DOM 引用：onUnmounted 时模板 ref 可能已清空，故单独留存 */
let innerNode: HTMLElement | null = null;

/** 站内任意带 data-slide="n" 的链接 / 按钮 → 跳到第 n 屏（导航与首屏按钮复用同一入口） */
function onDocClick(ev: MouseEvent): void {
  const target = ev.target as HTMLElement | null;
  const el = target?.closest<HTMLElement>('[data-slide]');
  if (!el) return;
  const n = Number(el.dataset.slide);
  if (!Number.isInteger(n) || n < 0 || n >= slides.length) return;
  ev.preventDefault();
  scrollToSlide(n);
}

watch(idx, (v) => { showcaseIndex.value = v; });

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  // 移动端：吸附滚动发生在 .showcase-inner 内部，页面滚动事件不会触发
  innerNode = innerEl.value;
  innerNode?.addEventListener('scroll', onScroll, { passive: true });
  document.addEventListener('click', onDocClick);
  showcaseTotal.value = slides.length;
  registerShowcaseJump(scrollToSlide);
  updateFromScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('resize', onScroll);
  innerNode?.removeEventListener('scroll', onScroll);
  document.removeEventListener('click', onDocClick);
  innerNode = null;
  registerShowcaseJump(null);
});
</script>

<template>
  <div
    ref="rootEl"
    class="showcase-track"
    :style="{ '--slide-count': slides.length }"
  >
    <section id="showcase" class="showcase">
      <div ref="innerEl" class="showcase-inner">
        <article
          v-for="(s, i) in slides"
          :key="s.num"
          class="slide"
          :class="{ active: i === idx, passed: i < idx }"
        >
          <div class="slide-media-wrap">
            <img
              class="slide-media"
              :src="s.img"
              :alt="s.imgAlt"
              :loading="i === 0 ? 'eager' : 'lazy'"
            />
            <span class="media-tag" aria-hidden="true">
              <b>逐梦之夏</b>
            </span>
          </div>
          <div class="slide-body">
            <h3 class="slide-title">{{ s.title }}</h3>
            <p class="slide-desc">{{ s.desc }}</p>
            <ul class="slide-points">
              <li v-for="p in s.points" :key="p">{{ p }}</li>
            </ul>
            <q-btn
              v-if="s.cta"
              unelevated
              no-caps
              color="accent"
              :href="s.cta.href"
              class="btn q-px-xl slide-cta"
            >{{ s.cta.label }}</q-btn>
            <a v-else class="link-more" href="#showcase" data-slide="9">了解更多 <i>MORE →</i></a>
          </div>
        </article>
      </div>

      <!-- 右侧切换器 -->
      <div class="showcase-nav" aria-label="幻灯片切换">
        <button
          v-for="(s, i) in slides"
          :key="s.num"
          :class="{ active: i === idx }"
          :aria-label="s.title"
          @click="scrollToSlide(i)"
        >
          <span class="dot"></span>
          <span class="lbl">{{ s.title }}</span>
        </button>
      </div>

      <!-- 页码与进度 -->
      <div class="showcase-counter">
        <b>{{ pad(idx + 1) }}</b>&nbsp;/&nbsp;{{ pad(slides.length) }}
      </div>
      <div class="showcase-progress">
        <i :style="{ width: `${((idx + 1) / slides.length) * 100}%` }"></i>
      </div>
    </section>
  </div>
</template>
