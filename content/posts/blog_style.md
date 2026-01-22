---
title: Blog Style
date: 2026-01-22
tags:
  - 格式文件
draft: false
---
> 目标：统一 Hugo 博客 Markdown 写作规范，便于维护，并让 Codex/AI 可稳定自动排版与美化。

---

## 1. 代码块规范（必须）

- 所有代码使用 fenced code block，并标注语言。
- 命令行统一用 `bash`，输出统一用 `text`，禁止混写。
- 多行代码逐行书写，保证可复制、可阅读。

示例（命令）：

```bash
example command
curl -I https://github.com
```

示例（输出）：

```text
HTTP/2 200
server: github.com
```

## 2. Hugo Front Matter 规范（必须）

### 2.1 YAML 表头（必填）

每篇文章开头必须包含 YAML Front Matter，推荐模板：

```yaml
---
title: "xxx"
weight: 1
slug: "xxxx"
date: 2026-01-19
lastmod: 2026-01-23
categories: ["LLM"]
tags: ["AI", "多模态"]
draft: false
description: "一句话概括文章内容，用于列表摘要与 SEO"
ShowToc: true
TocOpen: true
math: true
---
```

### 2.2 目录结构（推荐固定）

```text
content/posts/     # 博客文章
content/notes/     # 学习笔记（可选）
content/projects/  # 项目（可选）
```

文章文件名统一：`content/posts/英文-短横线.md`。

### 2.3 Page Bundle（推荐）

用 **Page Bundle** 管理图片与资源，示例结构：

```text
content/posts/mllm-intro/
├─ index.md
├─ fig1.png
└─ fig2.jpg
```

Markdown 引图：`![架构图](fig1.png)`。

### 2.4 Shortcodes（建议规范使用）

- 嵌入 Bilibili/YouTube：

```text
{{< youtube dQw4w9WgXcQ >}}
```

- 内嵌 PDF（需主题支持 iframe）：

```text
< iframe src="/files/paper.pdf" height="800" >
```

## 3. 标题层级规范

### 3.1 层级规则

- 正文从 `##` 开始。
- 禁止跳级：`##` 后不可直接 `####`。
- 最大层级建议到 `####`。

### 3.2 标题命名建议

- 标题简短明确，避免“碎片化标题”。
- 同一篇文章不要出现重复标题。

## 4. 图片规范

### 4.1 命名规范（必须）

- 图片文件名必须为英文小写 + 短横线：`mllm-architecture.png`。

### 4.2 插入格式（建议带 caption）

```markdown
![Llama2 架构示意图](/img/llama2-architecture.png)
*图 1：Llama2 的 Decoder-only 结构。*
```

## 5. 链接规范（建议）

### 5.1 普通链接

```markdown
[GitHub](https://github.com)
```

### 5.2 引用式链接（推荐重复引用时使用）

```markdown
论文链接：[Attention Is All You Need][attn]
[attn]: https://arxiv.org/abs/1706.03762
```

## 6. 数学公式规范

### 6.1 行内公式

```tex
$Q=\frac{\lambda_0}{\Delta\lambda}$
```

### 6.2 独立公式块

```tex
$$ Q=\frac{\lambda_0}{\text{FWHM}} $$
```

---

## 7. 引用与参考文献

文章末尾建议加入：

```markdown
## References
1. Vaswani et al., 2017. *Attention Is All You Need*. https://arxiv.org/abs/1706.03762
```
