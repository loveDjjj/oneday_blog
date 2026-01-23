---
title: Command Guide
date: 2026-01-22
lastmod: 2026-01-23
showLastMod: true
slug: command-guide
description: "服务器常用命令、代理排查、快速上线、Git 基本流程与常见 .gitignore 写法。"
tags:
  - Guide
  - Command
ShowToc: true
TocOpen: true
draft: false
---
> 简明速查：示例命令需按实际路径/分支/环境替换占位符。

---

## 服务器常用命令

### Linux 基本操作

```bash
pwd                 # 查看当前路径
ls                  # 列出文件
ls -la              # 详细列出（含隐藏文件）
cd /path/to/dir     # 进入目录
mkdir -p xxx        # 创建目录（可递归）
rm -rf xxx          # 删除目录（谨慎）
```

### Nano 编辑器

#### 打开文件

```bash
nano /etc/nginx/sites-available/oneday_blog
nano ~/.bashrc
nano /etc/environment
```

#### 常用快捷键

- `Ctrl + O`：保存（Write Out）
- `Enter`：确认文件名
- `Ctrl + X`：退出
- `Ctrl + W`：搜索
- `Ctrl + K`：剪切一行
- `Ctrl + U`：粘贴一行

### Hugo 网页一键同步与上线

```bash
cd /var/www/oneday_blog \
  && git pull --recurse-submodules \
  && git submodule update --init --recursive \
  && hugo --minify \
  && systemctl reload nginx
```

本地预览：

```bash
hugo server -D
```

## 代理与 Clash

### 临时删除代理环境变量

```bash
unset http_proxy https_proxy all_proxy HTTP_PROXY HTTPS_PROXY ALL_PROXY
env | grep -i proxy
```

### 检查 curl 是否被 curlrc 强制代理

```bash
cat /etc/curlrc 2>/dev/null
cat ~/.curlrc 2>/dev/null
```

删除（慎用）：

```bash
sudo rm -f /etc/curlrc
rm -f ~/.curlrc
```

### Clash/Mihomo 常用

```bash
clashctl on
clashctl off
clashctl status
clashctl log
clashctl ui
```

### 订阅管理（clashsub）

```bash
clashsub ls
clashsub add "订阅链接"
clashsub use 1
clashsub update
clashsub log
```

### 测试 GitHub 访问

```bash
curl -I https://github.com --connect-timeout 5
git ls-remote https://github.com/git/git.git | head
```

## Git 常用流程

```bash
git add .
git commit -m "description"
git push -u origin main
git pull
git fetch origin
git reset --hard origin/main   # 丢弃本地修改，覆盖为远程 main
```

### 常见 .gitignore 写法

```text
# A. 忽略指定路径文件夹（仅仓库根目录）
public/
checkpoints/
outputs/

# B. 忽略项目下所有同名文件夹（任意层级）
**/__pycache__/
**/.ipynb_checkpoints/
**/.pytest_cache/
**/wandb/

# C. 忽略特定文件后缀（全项目）
*.log
*.tmp

# D. 忽略指定路径下某类文件
logs/*.log
outputs/**/*.png

# E. 仅忽略某个文件
config.yaml
.env

# F. 忽略全部，但保留某个文件
data/*
!data/README.md
```
