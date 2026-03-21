import { blogPlugin } from '@vuepress/plugin-blog'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  lang: 'zh-CN',
  base: '/web/',
  title: 'Web by xy',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    navbar: [
      '/',                           // 首页
      // 如果已经有了 '/' 指向首页，下面这行可以省略，避免重复
      // {
      //   text: '首页',
      //   link: '/',
      // },
      {
        text: '分类',
        link: '/category/',          // 博客分类页，需要插件生成
      },
    ],

    // 侧边栏配置：为 /bookmarks/ 下的所有页面提供统一的书签列表
  sidebar: {
    '/': [
      {
        text: '博客',
        children: [
          '/posts/hello-world.md',
          { text: '分类', link: '/category/' },
          { text: '标签', link: '/tag/' },
        ],
      },
      {
        text: '📚 书签分类',
        children: [
          '/bookmarks/favorites.md',
          '/bookmarks/system-tools.md',
          '/bookmarks/minecraft.md',
          '/bookmarks/github.md',
          '/bookmarks/free-game.md',
          '/bookmarks/lx-music.md',
          '/bookmarks/other-music.md',
          '/bookmarks/other.md',
        ],
      },
    ],
  },
}),

  plugins: [
    blogPlugin({
      // 只将 posts 目录下的文件视为文章
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith('posts/') : false,

      getInfo: ({ frontmatter, title, data }) => ({
        title,
        author: frontmatter.author || '',
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
        excerpt:
          typeof frontmatter.excerpt === 'string'
            ? frontmatter.excerpt
            : data?.excerpt || '',
      }),

      excerptFilter: ({ frontmatter }) =>
        !frontmatter.home &&
        frontmatter.excerpt !== false &&
        typeof frontmatter.excerpt !== 'string',

      category: [
        {
          key: 'category',
          getter: (page) => page.frontmatter.category || [],
          // 如果你还没有创建 Category.vue 布局组件，请先注释掉下面两行，使用默认布局
          // layout: 'Category',
          // itemLayout: 'Category',
          frontmatter: () => ({
            title: '分类',
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `分类：${name}`,
            sidebar: false,
          }),
        },
        {
          key: 'tag',
          getter: (page) => page.frontmatter.tag || [],
          // layout: 'Tag',
          // itemLayout: 'Tag',
          frontmatter: () => ({
            title: '标签',
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `标签：${name}`,
            sidebar: false,
          }),
        },
      ],

      type: [
        {
          key: 'article',
          filter: (page) => !page.frontmatter.archive,
          // layout: 'Article',
          frontmatter: () => ({
            title: '文章',
            sidebar: false,
          }),
          sorter: (pageA, pageB) => {
            if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
              return pageB.frontmatter.sticky - pageA.frontmatter.sticky
            if (pageA.frontmatter.sticky) return -1
            if (pageB.frontmatter.sticky) return 1
            if (!pageB.frontmatter.date) return 1
            if (!pageA.frontmatter.date) return -1
            return (
              new Date(pageB.frontmatter.date).getTime() -
              new Date(pageA.frontmatter.date).getTime()
            )
          },
        },
        {
          key: 'timeline',
          filter: (page) => page.frontmatter.date instanceof Date,
          sorter: (pageA, pageB) =>
            new Date(pageB.frontmatter.date).getTime() -
            new Date(pageA.frontmatter.date).getTime(),
          // layout: 'Timeline',
          frontmatter: () => ({
            title: '时间线',
            sidebar: false,
          }),
        },
      ],
      hotReload: true,
    }),
  ],

  bundler: webpackBundler(),
})