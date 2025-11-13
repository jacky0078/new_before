#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
批量删除 Vue 页面中遗留的 loading 模块 (<div id="loading">...</div>)
作者：ChatGPT
"""

from pathlib import Path
import re
import shutil

# ========== 修改这里为你的项目路径 ==========
BASE_DIR = Path(r"D:\code\Vue_medicial_chat\src\pages")
# ============================================

# 正则匹配 loader 块（跨多行）
pattern = re.compile(
    r"<!--\s*loader[^>]*?-->.*?<!--\s*loader[^>]*?-->",
    re.DOTALL | re.IGNORECASE,
)

def clean_vue_file(file_path: Path):
    """删除 loader 块"""
    text = file_path.read_text(encoding="utf-8", errors="ignore")
    new_text, count = pattern.subn("", text)
    if count > 0:
        backup_path = file_path.with_suffix(file_path.suffix + ".bak")
        shutil.copy2(file_path, backup_path)
        file_path.write_text(new_text, encoding="utf-8")
        print(f"✅ 已清理: {file_path} （删除 {count} 段）")
        return True
    return False

def main():
    vue_files = list(BASE_DIR.rglob("*.vue"))
    print(f"找到 {len(vue_files)} 个 .vue 文件，开始扫描...")
    changed = 0
    for f in vue_files:
        if clean_vue_file(f):
            changed += 1
    print(f"\n🎉 完成清理，共修改 {changed} 个文件。备份文件已生成 (.bak)。")

if __name__ == "__main__":
    main()
