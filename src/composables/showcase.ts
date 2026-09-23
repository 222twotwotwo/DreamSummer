import { ref } from 'vue';

/**
 * 活动全景与导航之间的轻量桥：
 * ProductShowcase 负责注册「跳到第 n 屏」的实现并回写当前屏序号，
 * 导航 / 首屏按钮只读序号、只调 goToSlide，不直接碰滚动逻辑。
 */

/** 当前屏序号（0 起） */
export const showcaseIndex = ref(0);

/** 总屏数，由 ProductShowcase 写入，供导航判断是否处于活动全景 */
export const showcaseTotal = ref(0);

let jumpImpl: ((n: number) => void) | null = null;

export function registerShowcaseJump(fn: ((n: number) => void) | null): void {
  jumpImpl = fn;
}

export function goToSlide(n: number): void {
  jumpImpl?.(n);
}
