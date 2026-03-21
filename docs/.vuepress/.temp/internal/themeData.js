export const themeData = JSON.parse("{\"logo\":\"https://vuejs.press/images/hero.png\",\"navbar\":[\"/\",{\"text\":\"分类\",\"link\":\"/category/\"}],\"sidebar\":{\"/\":[{\"text\":\"博客\",\"children\":[\"/posts/hello-world.md\",{\"text\":\"分类\",\"link\":\"/category/\"},{\"text\":\"标签\",\"link\":\"/tag/\"}]},{\"text\":\"📚 书签分类\",\"children\":[\"/bookmarks/favorites.md\",\"/bookmarks/system-tools.md\",\"/bookmarks/minecraft.md\",\"/bookmarks/github.md\",\"/bookmarks/free-game.md\",\"/bookmarks/lx-music.md\",\"/bookmarks/other-music.md\",\"/bookmarks/other.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
