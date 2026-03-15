import { defineClientConfig } from '@vuepress/client'
import Article from './layouts/Article.vue'
import Category from './layouts/Category.vue'
import Tag from './layouts/Tag.vue'
import Timeline from './layouts/Timeline.vue'
import './styles/index.css'

export default defineClientConfig({
  // 提供博客布局组件
  layouts: {
    Article,
    Category,
    Tag,
    Timeline,
  },
})