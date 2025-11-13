#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
批量修正 Vue 页面中静态资源路径:
  images/...  →  /assets/images/...
  css/...     →  /assets/css/...
  js/...      →  /assets/js/...
作者: ChatGPT
"""

from pathlib import Path
import re
import shutil

BASE_DIR = Path(r"D:\code\Vue_medicial_chat\src\pages")

patterns = {
    r'src\s*=\s*"images/': 'src="/assets/images/',
    r'href\s*=\s*"css/': 'href="/assets/css/',
    r'src\s*=\s*"js/': 'src="/assets/js/'
}

def fix_file(path: Path):
    text = path.read_text(encoding="utf-8", errors="ignore")
    new_text = text
    for pattern, repl in patterns.items():
        new_text = re.sub(pattern, repl, new_text)
    if new_text != text:
        shutil.copy2(path, path.with_suffix(path.suffix + ".bak"))
        path.write_text(new_text, encoding="utf-8")
        print(f"✅ 修正: {path}")

def main():
    for f in BASE_DIR.rglob("*.vue"):
        fix_file(f)
    print("🎉 全部路径修正完毕")

if __name__ == "__main__":
    main()
