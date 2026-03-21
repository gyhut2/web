<template><div><h1 id="欢迎来到我的博客" tabindex="-1"><a class="header-anchor" href="#欢迎来到我的博客"><span>欢迎来到我的博客！</span></a></h1>
<p>这是我使用 VuePress 搭建的个人博客的第一篇文章。本文将带你了解如何在 VuePress 中轻松插入<strong>图片</strong>、<strong>链接</strong>、<strong>代码块</strong>、<strong>列表</strong>等常用内容。</p>
<h2 id="一、插入图片" tabindex="-1"><a class="header-anchor" href="#一、插入图片"><span>一、插入图片</span></a></h2>
<p>VuePress 中，图片通常放在 <code v-pre>docs/.vuepress/public/images/</code> 目录下。在 Markdown 中引用时，使用绝对路径（以 <code v-pre>/</code> 开头）即可。</p>
<p>例如，如果你有一张名为 <code v-pre>vuepress-logo.png</code> 的图片，可以这样插入：</p>
<div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md"><pre v-pre><code><span class="line"><span class="token url"><span class="token operator">!</span>[<span class="token content">VuePress Logo</span>](<span class="token url">/images/vuepress-logo.png</span>)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div></div></template>


