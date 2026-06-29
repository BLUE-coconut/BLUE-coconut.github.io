import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BiographyView from '@/views/BiographyView.vue'
import BlogView from '@/views/blog/BlogView.vue'
import BlogCategoryView from '@/views/blog/BlogCategoryView.vue'
import BlogPostView from '@/views/blog/BlogPostView.vue'
import ProjectView from '@/views/ProjectView.vue'
import AlbumView from '@/views/AlbumView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/biography',
      name: 'biography',
      component: BiographyView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/blog/:categoryId',
      name: 'blog-category',
      component: BlogCategoryView,
      props: true,
    },
    {
      path: '/blog/:categoryId/:postId',
      name: 'blog-post',
      component: BlogPostView,
      props: true,
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectView,
    },
    {
      path: '/album',
      name: 'album',
      component: AlbumView,
    },
  ],
  // 关键 scrollBehavior：支持锚点跳转 + sticky header 偏移 + 浏览器后退恢复位置
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 80 }
    }
    if (to.path !== from.path) return { top: 0 }
    return undefined
  },
})

export default router