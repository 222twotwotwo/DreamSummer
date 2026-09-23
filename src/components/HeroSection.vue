<script setup lang="ts">
const stats = [
  { label: '主办方', value: '逐梦创新实验室' },
  { label: '面向对象', value: '全校大一新生' },
  { label: '活动周期', value: '2026.09 — 2027.02' }
];
</script>

<template>
  <header id="hero" class="hero">
    <div class="hero-bg" aria-hidden="true">
      <img :src="'./images/bg-hero.jpg'" alt="" />
    </div>
    <!-- 夏日装饰：右下角品牌角条（遮挡图库水印） -->
    <span class="hero-corner-tag" aria-hidden="true">
      <b>逐梦之夏</b>
    </span>
    <!-- 夏日装饰：底部波浪 -->
    <svg class="hero-waves" viewBox="0 0 1440 24" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 12 Q 60 2 120 12 T 240 12 T 360 12 T 480 12 T 600 12 T 720 12 T 840 12 T 960 12 T 1080 12 T 1200 12 T 1320 12 T 1440 12" />
      <path d="M0 18 Q 60 10 120 18 T 240 18 T 360 18 T 480 18 T 600 18 T 720 18 T 840 18 T 960 18 T 1080 18 T 1200 18 T 1320 18 T 1440 18" opacity="0.55" />
    </svg>
    <div class="hero-content">
      <h1 class="hero-title">逐梦之夏</h1>
      <div class="hero-actions">
        <q-btn unelevated no-caps color="accent" href="#showcase" data-slide="9" class="btn q-px-xl">浏览课题 · 立即申请</q-btn>
        <q-btn outline no-caps color="secondary" href="#showcase" data-slide="5" class="btn btn-ghost q-px-xl">了解流程 <i class="arr q-ml-sm">↓</i></q-btn>
      </div>
    </div>
    <div class="hero-stats">
      <div v-for="s in stats" :key="s.label" class="stat">
        <i>{{ s.label }}</i><b>{{ s.value }}</b>
      </div>
    </div>
    <div class="scroll-hint" aria-hidden="true"><span></span></div>
  </header>
</template>
