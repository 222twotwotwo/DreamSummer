<script setup lang="ts">
import SiteNav from './components/SiteNav.vue';
import HeroSection from './components/HeroSection.vue';
import ProductShowcase from './components/ProductShowcase.vue';
import StatementBlock from './components/StatementBlock.vue';
import SiteFooter from './components/SiteFooter.vue';

/* 活动目标 / 核心流程 / 时间安排 / 网站模块 / 考核激励 / 加入我们
   已作为第 05–10 屏并入 ProductShowcase，见 components/ProductShowcase.vue */
</script>

<template>
  <q-layout view="hHh lpR fFr">
    <SiteNav />
    <q-page-container>
      <q-page>
        <HeroSection />
        <main>
          <ProductShowcase />
          <StatementBlock />
        </main>
        <SiteFooter />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
