/*
 * 仅用于设计审查截图，不参与构建与线上运行。
 * 作用：把 .reveal 入场动画（IntersectionObserver 触发）强制置为可见，
 * 否则无头浏览器用程序化滚动跳转时 observer 不回调，深区截图会整片空白。
 * 同时关掉平滑滚动，保证 scrollTo 立即到位。
 */
(function () {
  var css = [
    '.reveal{opacity:1!important;transform:none!important;transition:none!important}',
    'html{scroll-behavior:auto!important}'
  ].join('\n');

  function apply() {
    var s = document.createElement('style');
    s.setAttribute('data-audit', '1');
    s.textContent = css;
    (document.head || document.documentElement).appendChild(s);
  }

  if (document.head) apply();
  document.addEventListener('DOMContentLoaded', apply);
})();
