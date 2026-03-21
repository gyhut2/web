import comp from "D:/gyhut2/web/docs/.vuepress/.temp/pages/tag/markdown/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/markdown/\",\"title\":\"标签：Markdown\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"标签：Markdown\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"Markdown\",\"key\":\"tag\"},\"layout\":\"Layout\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
