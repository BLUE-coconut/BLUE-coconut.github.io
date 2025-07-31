import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BiographyView from '@/views/BiographyView.vue'
import BlogView from '@/views/BlogView.vue'
import AlbumView from '@/views/AlbumView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/biography',
      name: 'biography',
      component: BiographyView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/album',
      name: 'album',
      component: AlbumView
    }
  ]
})

export default router
