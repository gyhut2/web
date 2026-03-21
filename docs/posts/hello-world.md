---
title: 我的第一篇 VuePress 文章
date: 2025-03-21
category: 教程
tag: [VuePress, Markdown, 入门]
author: xy
excerpt: 这是一篇展示如何在 VuePress 中使用 Markdown 丰富元素的示例文章。
sticky: 1
---

# 欢迎来到我的博客！

这是我使用 VuePress 搭建的个人博客的第一篇文章。本文将带你了解如何在 VuePress 中轻松插入**图片**、**链接**、**代码块**、**列表**等常用内容。

## 一、插入图片

VuePress 中，图片通常放在 `docs/.vuepress/public/images/` 目录下。在 Markdown 中引用时，使用绝对路径（以 `/` 开头）即可。

例如，如果你有一张名为 `vuepress-logo.png` 的图片，可以这样插入：

```markdown
![VuePress Logo](/images/vuepress-logo.png)