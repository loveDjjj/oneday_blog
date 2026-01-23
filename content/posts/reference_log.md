---
title: Reference Log
date: 2026-01-22
slug: reference-log
description: "收集博客样式与 Hugo 配置的参考资料，便于随时查阅。"
tags:
  - reference
  - hugo
  - papermod
ShowToc: true
TocOpen: true
draft: false
---
> 记录常用的博客样式与 Hugo 配置参考链接，保持可复用、可扩展。

---

## 参考链接

- Papermod 自定义字体实践：https://aimerneige.com/zh/post/web/set-custom-fonts-in-papermod-site/
- Hugo 博客搭建指南（含配置与部署）：https://ruixi.top/zh/posts/hugo-blog-guide/
- Hugo 博客精装修 https://yunpengtai.top/posts/hugo-journey/#%e4%be%a7%e8%be%b9%e6%82%ac%e6%b5%ae%e7%9b%ae%e5%bd%95
- 这是引用 {{< sidenote >}}来源：[Hugo 官方](https://gohugo.io/){{< /sidenote >}}。
{{< figure src="/images/background/bg1.jpg" align="center" caption="这是 caption：点击图片应该弹出 fancybox 放大预览" >}}
{{< collapse summary="点击展开：Python 示例代码" >}}


```python
import numpy as np

def hello():
    print("Hello Collapse!")
    import numpy as np

def hello():
    print("Hello Collapse!")
    import numpy as np

def hello():
    print("Hello Collapse!")

hello()
```

{{< /collapse >}}

---

## notice

### 1）warning

{{< notice warning >}}
这是一个 **Warning** 提示框。
{{< /notice >}}

---

### 2）info

{{< notice info >}}
这是一个 **Info** 提示框，适合放一些说明信息。
{{< /notice >}}

---


### 3）note

{{< notice note >}}
这是一个 **Note** 提示框，可以放补充说明、参考链接等。
例如：[Hugo 官网](https://gohugo.io/)
{{< /notice >}}

---
下面是一个 GitHub 仓库卡片：

{{< github
  link="https://github.com/loveDjjj/oneday_blog"
  name="oneday_blog"
  description="我的 Hugo 博客源码仓库。"
  language="Go / Hugo"
>}}

{{< github
  link="https://github.com/loveDjjj/GAN_for_thin_film"
  name="GAN_for_thin_film"
  description="基于 GAN 的薄膜结构生成项目。"
  language="Python"
>}}

{{< quote author="William Shakespeare" >}}
To be, or not to be, that is the question:
Whether 'tis nobler in the mind to suffer
The slings and arrows of outrageous fortune,
Or to take Arms against a Sea of troubles,
And by opposing end them: to die, to sleep
{{< /quote >}}


{{< quote-center >}}
十里青山远，潮平路带沙
数声啼鸟怨年华
又是凄凉时候，在天涯
白露收残月，清风散晓霞
绿杨堤畔问荷花
记得年时沽酒，那人家
{{< /quote-center >}}



## References

1. aimerneige. *在 Papermod 中自定义字体*. https://aimerneige.com/zh/post/web/set-custom-fonts-in-papermod-site/
2. Ruixi. *Hugo 博客指南*. https://ruixi.top/zh/posts/hugo-blog-guide/

