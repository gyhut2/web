import comp from "D:/gyhut2/web/docs/.vuepress/.temp/pages/tag/tag-b/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/tag-b/\",\"title\":\"标签：tag B\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"标签：tag B\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"tag B\",\"key\":\"tag\"},\"layout\":\"Layout\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
