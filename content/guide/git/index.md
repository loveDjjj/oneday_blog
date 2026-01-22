---
title: Git Command Reference
date: 2026-01-22
lastmod: 2026-01-23
slug: git-command-reference
description: "Git 常用命令速查表，覆盖初始化、配置、分支、撤销、变基与远程操作。"
tags:
  - Git
ShowToc: true
TocOpen: true
draft: false
---
> 速查表：命令均为简化示例，需按实际仓库/分支替换占位符。

---

## 快捷命令（基础）

| 命令 | 说明 |
| --- | --- |
| `git init <directory>` | 在指定目录创建空仓库；省略 `<directory>` 时初始化当前目录。 |
| `git clone <repo>` | 克隆远程或本地仓库到当前目录。 |
| `git config user.name <name>` | 为当前仓库设置作者名；常用 `--global` 设置默认值。 |
| `git add <path>` | 将 `<path>` 的更改加入暂存区；可为文件或目录。 |
| `git commit -m "<message>"` | 提交暂存区快照并写入提交信息。 |
| `git status` | 查看暂存、未暂存、未跟踪文件。 |
| `git log` | 查看提交历史；可叠加其他显示参数。 |
| `git diff` | 对比工作区与暂存区的差异。 |

## 撤销与清理

| 命令 | 说明 |
| --- | --- |
| `git revert <commit>` | 生成新提交，反向应用 `<commit>` 的修改。 |
| `git reset <file>` | 将 `<file>` 移出暂存区，工作区保持不变。 |
| `git clean -n` | 预览将被删除的未跟踪文件；执行删除用 `git clean -f`。 |

## 重写历史

| 命令 | 说明 |
| --- | --- |
| `git commit --amend` | 替换上一条提交（内容或信息）；避免改动已推送的提交。 |
| `git rebase <base>` | 将当前分支变基到 `<base>`（提交/分支/标签/引用）。 |
| `git reflog` | 查看本地 HEAD 与引用的移动记录；可用于找回丢失的提交。 |

## 分支管理

| 命令 | 说明 |
| --- | --- |
| `git branch` | 列出本地分支；加 `<branch>` 创建新分支。 |
| `git checkout -b <branch>` | 创建并切换到 `<branch>`；去掉 `-b` 仅切换。 |
| `git merge <branch>` | 将 `<branch>` 合并到当前分支。 |

## 远程仓库

| 命令 | 说明 |
| --- | --- |
| `git remote add <name> <url>` | 添加远程别名。 |
| `git fetch <remote> [branch]` | 从远程获取全部或指定分支的引用。 |
| `git pull <remote>` | 获取远程当前分支并合并到本地当前分支。 |
| `git push <remote> <branch>` | 推送分支到远程，如不存在则创建。 |

## 配置与日志

| 命令 | 说明 |
| --- | --- |
| `git config --global user.name <name>` | 设置全局作者名。 |
| `git config --global user.email <email>` | 设置全局作者邮箱。 |
| `git config --global alias.<alias> "<command>"` | 定义命令别名，例如 `alias.glog "log --graph --oneline"`。 |
| `git config --system core.editor <editor>` | 设置系统级默认编辑器（如 `vi`）。 |
| `git config --global --edit` | 打开全局配置文件手动编辑。 |
| `git log --<limit>` | 限制显示提交数量，如 `git log -5`。 |
| `git log --oneline` | 将每个提交压缩为单行。 |
| `git log -p` | 显示每个提交的完整 diff。 |
| `git log --stat` | 显示修改文件及行数统计。 |
| `git log --author="<pattern>"` | 按作者过滤提交。 |
| `git log --grep="<pattern>"` | 按提交信息匹配过滤。 |
| `git log <since>..<until>` | 查看时间/引用范围内的提交。 |
| `git log -- <file>` | 仅显示影响指定文件的提交。 |
| `git log --graph --decorate` | 以文本图展示分支/标签并装饰引用名。 |

## 差异、重置与变基

| 命令 | 说明 |
| --- | --- |
| `git diff HEAD` | 比较工作区与上一提交。 |
| `git diff --cached` | 比较暂存区与上一提交。 |
| `git reset` | 重置暂存区为上一提交，保留工作区。 |
| `git reset --hard` | 暂存区与工作区全部回退到上一提交（会丢弃未提交修改）。 |
| `git reset <commit>` | 分支指针回退到 `<commit>`，暂存区同步，工作区保留。 |
| `git reset --hard <commit>` | 分支、暂存区、工作区全部回退到 `<commit>`，丢弃之后的修改。 |
| `git rebase -i <base>` | 交互式变基到 `<base>`，可重排/合并/修改提交。 |
| `git pull --rebase <remote>` | 拉取并基于本地分支变基远程更新（代替 merge）。 |

## 推送

| 命令 | 说明 |
| --- | --- |
| `git push <remote> --force` | 强制推送（可能改写远程历史，谨慎使用）。 |
| `git push <remote> --all` | 推送所有本地分支到远程。 |
| `git push <remote> --tags` | 推送所有本地标签；普通 push 不会自动推送标签。 |

---

## 参考资料

- https://atlassian.com/git/tutorials
- https://github.com/LeCoupa/awesome-cheatsheets/blob/master/tools/git.sh
- 本地 PDF：[git_cheat_sheet.pdf](git_cheat_sheet.pdf)