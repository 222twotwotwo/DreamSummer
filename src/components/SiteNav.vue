<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue';
import { showcaseIndex } from '../composables/showcase';

/* 全部内容已并入「活动全景」的 10 屏，导航即各屏的快捷入口：
   slide 为该屏序号（0 起），点击后交给活动全景做平滑滚动定位。 */
const links = [
  { slide: 0, label: '活动全景' },
  { slide: 4, label: '活动目标' },
  { slide: 5, label: '核心流程' },
  { slide: 6, label: '时间安排' },
  { slide: 7, label: '网站模块' },
  { slide: 8, label: '考核激励' }
];

const scrolled = ref(false);
const drawer = ref(false);

const onScroll = (): void => {
  scrolled.value = window.scrollY > 40;
};

/** 当前所处屏 → 高亮对应导航项（取最后一个入口序号 ≤ 当前屏的项） */
const activeIndex = computed(() => {
  let cur = -1;
  links.forEach((l, i) => {
    if (showcaseIndex.value >= l.slide) cur = i;
  });
  return cur;
});

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});

onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>

<template>
  <q-header class="nav" :class="{ scrolled }">
    <q-toolbar class="nav-inner">
      <a class="logo" href="#showcase" data-slide="0">
        <span class="logo-text">逐梦之夏</span>
      </a>
      <q-space class="nav-space" />
      <nav class="nav-links">
        <q-btn
          v-for="(l, i) in links"
          :key="l.label"
          flat
          no-caps
          :ripple="false"
          href="#showcase"
          :data-slide="l.slide"
          class="nav-link"
          :class="{ active: activeIndex === i }"
        >{{ l.label }}</q-btn>
      </nav>
      <q-btn
        unelevated
        no-caps
        color="accent"
        href="#showcase"
        data-slide="9"
        class="nav-cta q-px-lg"
      >立即申请</q-btn>
      <q-btn
        flat
        round
        icon="menu"
        class="nav-burger"
        aria-label="菜单"
        @click="drawer = !drawer"
      />
    </q-toolbar>
  </q-header>

  <q-drawer v-model="drawer" side="right" overlay class="nav-drawer">
    <q-list padding class="nav-drawer-list">
      <q-item
        v-for="l in links"
        :key="l.label"
        clickable
        tag="a"
        href="#showcase"
        :data-slide="l.slide"
        @click="drawer = false"
      >
        <q-item-section>{{ l.label }}</q-item-section>
        <q-item-section side><q-icon name="chevron_right" size="18px" /></q-item-section>
      </q-item>
    </q-list>
    <q-btn
      unelevated
      no-caps
      color="accent"
      href="#showcase"
      :data-slide="9"
      class="q-mx-md"
      style="width: calc(100% - 32px)"
      @click="drawer = false"
    >立即申请</q-btn>
  </q-drawer>
</template>
