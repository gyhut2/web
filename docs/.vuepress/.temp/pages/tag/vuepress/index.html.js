import comp from "D:/gyhut2/web/docs/.vuepress/.temp/pages/tag/vuepress/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/vuepress/\",\"title\":\"标签：VuePress\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"标签：VuePress\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"VuePress\",\"key\":\"tag\"},\"layout\":\"Layout\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
