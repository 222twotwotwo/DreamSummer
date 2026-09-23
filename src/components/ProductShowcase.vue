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
    desc: '以课题项目为试金石，考核学习意愿、孵化优质项目、招募生力军。',
    points: [
      '考核学习意愿 · 多维综合判断，拒绝片面的简历面试',
      '孵化优质项目 · 真实课题落地，形成可参赛成果',
      '招募新生力量 · 优秀参与者直通实验室面试',
      '沉淀长效机制 · 建成课题库、人才库、项目库'
    ],
    img: './images/slide-goals.jpg',
    imgAlt: '晨光云海上四座发光路标石柱的插画'
  },
  {
    num: '06',
    title: '核心流程',
    desc: '四步走完全程，过程材料在 OA 系统内全部留痕。',
    points: [
      '项目发布 · 七项发布要素一次讲清，导师审核把关',
      '自主申请 · 材料初筛 + 面试/小任务 + 导师确认',
      '系统跟进 · 负责人制 + 周会月报 + 中期检查',
      '完成结项 · 交报告与演示，答辩评出优秀 / 合格 / 不合格'
    ],
    img: './images/slide-flow.jpg',
    imgAlt: '云海中逐级升高的四段浮空石阶与光门插画'
  },
  {
    num: '07',
    title: '时间安排',
    desc: '一个学期的节奏，具体时间以 OA 系统公告为准。',
    points: [
      '筹备与宣传 —— 建站、课题征集、网站上线',
      '申请立项 —— 申请、筛选、面试、立项公示',
      '项目执行 —— 周会、月报、中期检查',
      '结项评审 —— 提交材料、答辩评审、评优公示',
      '转化招募 —— 直通面试、新生招募、续期孵化'
    ],
    img: './images/slide-schedule.jpg',
    imgAlt: '自黎明渐变到黄昏橙红的天际光带插画'
  },
  {
    num: '08',
    title: '网站模块',
    desc: 'OA 课题项目招标网站，从发布到结项全流程线上化。',
    points: [
      '项目大厅 · 课题列表与标签筛选，详情覆盖七项要素',
      '申请入口 · 在线填报资料，进度看板跟踪申请状态',
      '过程留痕 · 周会月报上传、文件归档、通知提醒',
      '评价结项 · 导师评价、材料提交与数据统计'
    ],
    img: './images/slide-platform.jpg',
    imgAlt: '云海上悬浮着九块发光光屏阵列的插画'
  },
  {
    num: '09',
    title: '考核激励',
    desc: '项目即考核：在真实任务中观察你的学习意愿。',
    points: [
      '六大维度 · 材料申请、周会任务、知识分享、月报与导师评价',
      '全程留痕 · OA 记录、周会纪要、项目看板、学习日志',
      '招募转化路径 · 报名者 → 成员 → 优秀成员 → 骨干 → 新生力军',
      '激励与退出 · 优秀者直通与竞赛推荐，长期无进展则退出'
    ],
    img: './images/slide-review.jpg',
    imgAlt: '云海中六道柔光汇聚向暖金星徽的插画'
  },
  {
    num: '10',
    title: '加入我们',
    desc: '不问出身，只看投入。浏览课题，提交申请，在真实项目中开始成长。',
    points: [
      '浏览课题 · 前往 OA 招标网站查看全部课题',
      '提交申请 · 在线填报资料、作品与学习计划',
      '走进项目 · 初筛、面试/小任务、导师确认后立项',
      '宣传节奏 · 预热 → 上线 → 课题发布 → 申请 → 立项公示 → 结项评优 → 招募'
    ],
    img: './images/slide-join.jpg',
    imgAlt: '云海之路尽头矗立着光之门拱的插画',
    cta: { label: '前往 OA 招标网站', href: '#' }
  }
];

const idx = ref(0);

const pad = (n: number): string => String(n).padStart(2, '0');

/* ---------- 滚动驱动（桌面与移动端同一套机制） ----------
 * .showcase 吸顶、轨道高度 = 屏数 × 100dvh（--slide-count 驱动），
 * 页面滚动进度决定当前 slide。这样每一屏都完整占满视口，
 * 上一屏（首屏）不会漏进当前屏里。
 * 移动端与桌面的区别只在 slide 版式（图上文下），不在滚动机制。 */
const rootEl = ref<HTMLElement | null>(null);
let ticking = false;

function updateFromScroll(): void {
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

/* 圆点 / 导航直达：滚页面到该屏在轨道中的进度中点 */
function scrollToSlide(n: number): void {
  const track = rootEl.value;
  if (!track) return;
  const rect = track.getBoundingClientRect();
  const total = track.offsetHeight - window.innerHeight;
  const top = window.scrollY + rect.top + ((n + 0.5) / slides.length) * total;
  window.scrollTo({ top, behavior: 'smooth' });
}

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
  document.addEventListener('click', onDocClick);
  showcaseTotal.value = slides.length;
  registerShowcaseJump(scrollToSlide);
  updateFromScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('resize', onScroll);
  document.removeEventListener('click', onDocClick);
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
      <div class="showcase-inner">
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
              v-reveal
            />
            <span class="media-tag" aria-hidden="true">
              <b>逐梦之夏</b>
            </span>
          </div>
          <!-- 滚入淡入：移动端逐屏滚动时内容渐显（桌面端由 .slide.active 的整屏渐显主导） -->
          <div class="slide-body" v-reveal="1">
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
