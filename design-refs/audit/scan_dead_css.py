"""扫描 style.css 中未被任何 .vue 模板引用的类选择器（死代码）。

用法（在项目根目录执行）:
    python design-refs/audit/scan_dead_css.py

注意：本脚本对 <template> 采用非贪婪匹配，遇到组件内的嵌套 <template #slot> 会在
第一处 </template> 截断，因此**可能漏报**；同时动态拼接的类名（例如
:class="`snake-item-${i + 1}`"）会被判为未引用。所以输出结果必须人工复核后再删。
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]  # 项目根（脚本位于 design-refs/audit/）
CSS = ROOT / "src" / "style.css"
SRC = ROOT / "src"

# 由 JS 动态添加 / Quasar 内置 / 状态类，不参与"未引用"判定
WHITELIST = {
    "reveal", "visible",          # v-reveal 指令动态加的两个类
    "scrolled", "active", "open",  # 组件内 JS 动态切换
    "showcase", "slide",           # :class 绑定的状态名
}

css_text = CSS.read_text(encoding="utf-8")
css_clean = re.sub(r"/\*.*?\*/", "", css_text, flags=re.S)  # 去注释，避免注释里的类名干扰
selectors = set(re.findall(r"\.([A-Za-z_][\w-]*)", css_clean))

used = set()
for f in SRC.rglob("*.vue"):
    t = f.read_text(encoding="utf-8")
    m = re.search(r"<template>(.*?)</template>", t, flags=re.S)
    body = m.group(1) if m else t
    for attr in re.findall(r'class="([^"]*)"', body):
        used.update(attr.split())
    for expr in re.findall(r':class="([^"]*)"', body):
        used.update(re.findall(r"'([^']+)'", expr))          # 对象/字符串字面量
        used.update(re.findall(r"([A-Za-z_][\w-]*)\s*:", expr))  # 对象键
    used.update(re.findall(r"'([A-Za-z_][\w-]*)'", body))

dead = sorted(
    s for s in selectors
    if s not in used
    and s not in WHITELIST
    and not s.startswith(("q-", "bg-", "text-"))
)

print(f"style.css 类选择器总数: {len(selectors)}")
print(f"模板中出现的类名总数:   {len(used)}")
print(f"疑似未被引用:           {len(dead)}")
print("-" * 46)
for d in dead:
    print(" ", d)
