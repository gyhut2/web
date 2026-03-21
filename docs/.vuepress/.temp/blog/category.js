export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"History\":{\"path\":\"/category/history/\",\"indexes\":[0,1]},\"Category A\":{\"path\":\"/category/category-a/\",\"indexes\":[2,3,4,5,6,7,8,9,10,11,12,13]},\"Category B\":{\"path\":\"/category/category-b/\",\"indexes\":[2,3,4,5,6,7,8,10,11,12]},\"教\":{\"path\":\"/category/%E6%95%99/\",\"indexes\":[14]},\"程\":{\"path\":\"/category/%E7%A8%8B/\",\"indexes\":[14]},\"Category C\":{\"path\":\"/category/category-c/\",\"indexes\":[15,16]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"WWI\":{\"path\":\"/tag/wwi/\",\"indexes\":[1]},\"WWII\":{\"path\":\"/tag/wwii/\",\"indexes\":[0]},\"tag A\":{\"path\":\"/tag/tag-a/\",\"indexes\":[5,6,7,8,9,13]},\"tag B\":{\"path\":\"/tag/tag-b/\",\"indexes\":[5,6,7,8,9,13]},\"tag C\":{\"path\":\"/tag/tag-c/\",\"indexes\":[2,3,4,10,11,12]},\"tag D\":{\"path\":\"/tag/tag-d/\",\"indexes\":[2,3,4,10,11,12]},\"VuePress\":{\"path\":\"/tag/vuepress/\",\"indexes\":[14]},\"Markdown\":{\"path\":\"/tag/markdown/\",\"indexes\":[14]},\"入门\":{\"path\":\"/tag/%E5%85%A5%E9%97%A8/\",\"indexes\":[14]},\"tag E\":{\"path\":\"/tag/tag-e/\",\"indexes\":[15,16]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

