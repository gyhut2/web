import comp from "D:/gyhut2/web/docs/.vuepress/.temp/pages/posts/hello-world.html.vue"
const data = JSON.parse("{\"path\":\"/posts/hello-world.html\",\"title\":\"我的第一篇 VuePress 文章\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"我的第一篇 VuePress 文章\",\"date\":\"2025-03-21T00:00:00.000Z\",\"category\":\"教程\",\"tag\":[\"VuePress\",\"Markdown\",\"入门\"],\"author\":\"xy\",\"excerpt\":\"这是一篇展示如何在 VuePress 中使用 Markdown 丰富元素的示例文章。\",\"sticky\":1},\"headers\":[{\"level\":2,\"title\":\"一、插入图片\",\"slug\":\"一、插入图片\",\"link\":\"#一、插入图片\",\"children\":[]}],\"git\":{\"updatedTime\":1774072331000,\"contributors\":[{\"name\":\"gyhut2\",\"username\":\"gyhut2\",\"email\":\"txq12635583@163.com\",\"commits\":1,\"url\":\"https://github.com/gyhut2\"}],\"changelog\":[{\"hash\":\"e41caa6862b033c0d69e81348fa6cc37a6a3a097\",\"time\":1774072331000,\"email\":\"txq12635583@163.com\",\"author\":\"gyhut2\",\"message\":\"1\"}]},\"filePathRelative\":\"posts/hello-world.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
