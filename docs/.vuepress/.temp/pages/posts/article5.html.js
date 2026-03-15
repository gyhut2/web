import comp from "D:/gyhut2/web/docs/.vuepress/.temp/pages/posts/article5.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article5.html\",\"title\":\"Article 5\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2022-01-05T00:00:00.000Z\",\"category\":[\"Category A\",\"Category B\"],\"tag\":[\"tag A\",\"tag B\"]},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{\"updatedTime\":1773551978000,\"contributors\":[{\"name\":\"gyhut2\",\"username\":\"gyhut2\",\"email\":\"txq12635583@163.com\",\"commits\":1,\"url\":\"https://github.com/gyhut2\"}],\"changelog\":[{\"hash\":\"b442f7456aeaa6595697699bef7e38710eb02659\",\"time\":1773551978000,\"email\":\"txq12635583@163.com\",\"author\":\"gyhut2\",\"message\":\"Initial project setup\"}]},\"filePathRelative\":\"posts/article5.md\",\"excerpt\":\"\\n<h2>Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3>Heading 3</h3>\\n<p>Here is the content.</p>\\n\"}")
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
