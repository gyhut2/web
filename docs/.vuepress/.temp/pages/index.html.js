import comp from "D:/gyhut2/web/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/images/avatar.png\",\"heroText\":\"xy's Bookmarks\",\"tagline\":\"记录有趣、实用的网站和工具\",\"actions\":[{\"text\":\"浏览所有书签\",\"link\":\"/bookmarks/favorites.md\",\"type\":\"primary\"},{\"text\":\"在 GitHub 上查看\",\"link\":\"https://github.com/gyhut2/web/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"📁 收藏夹栏\",\"details\":\"日常浏览的好东西、B站视频、AI工具、网盘搜索等。\"}],\"footer\":\"MIT Licensed | Copyright © 2025 xy\"},\"headers\":[],\"git\":{\"updatedTime\":1774072331000,\"contributors\":[{\"name\":\"gyhut2\",\"username\":\"gyhut2\",\"email\":\"txq12635583@163.com\",\"commits\":3,\"url\":\"https://github.com/gyhut2\"}],\"changelog\":[{\"hash\":\"e41caa6862b033c0d69e81348fa6cc37a6a3a097\",\"time\":1774072331000,\"email\":\"txq12635583@163.com\",\"author\":\"gyhut2\",\"message\":\"1\"},{\"hash\":\"0a0e590b6bacd7cbdda28b26deb448576565f5ba\",\"time\":1773566588000,\"email\":\"txq12635583@163.com\",\"author\":\"gyhut2\",\"message\":\"aaa\"},{\"hash\":\"b442f7456aeaa6595697699bef7e38710eb02659\",\"time\":1773551978000,\"email\":\"txq12635583@163.com\",\"author\":\"gyhut2\",\"message\":\"Initial project setup\"}]},\"filePathRelative\":\"README.md\"}")
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
