<script setup lang="ts">
defineProps<{
  title: string;
  desc?: string;
}>();
</script>

<template>
  <div v-reveal class="sec-head">
    <h2 class="sec-title">{{ title }}</h2>
    <p v-if="desc" class="sec-desc">{{ desc }}</p>
  </div>
</template>
