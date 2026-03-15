import comp from "D:/gyhut2/web/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"Get Started\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Pages\",\"slug\":\"pages\",\"link\":\"#pages\",\"children\":[]},{\"level\":2,\"title\":\"Content\",\"slug\":\"content\",\"link\":\"#content\",\"children\":[]},{\"level\":2,\"title\":\"Configuration\",\"slug\":\"configuration\",\"link\":\"#configuration\",\"children\":[]},{\"level\":2,\"title\":\"Layouts and customization\",\"slug\":\"layouts-and-customization\",\"link\":\"#layouts-and-customization\",\"children\":[]}],\"git\":{\"updatedTime\":1773551978000,\"contributors\":[{\"name\":\"gyhut2\",\"username\":\"gyhut2\",\"email\":\"txq12635583@163.com\",\"commits\":1,\"url\":\"https://github.com/gyhut2\"}],\"changelog\":[{\"hash\":\"b442f7456aeaa6595697699bef7e38710eb02659\",\"time\":1773551978000,\"email\":\"txq12635583@163.com\",\"author\":\"gyhut2\",\"message\":\"Initial project setup\"}]},\"filePathRelative\":\"get-started.md\",\"excerpt\":\"\\n<p>This is a normal page, which contains VuePress basics.</p>\\n<h2>Pages</h2>\\n<p>You can add markdown files in your vuepress directory, every markdown file will be converted to a page in your site.</p>\\n<p>See <a href=\\\"https://vuejs.press/guide/page.html#routing\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">routing</a> for more details.</p>\"}")
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
