import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Menu from '@/views/Menu.vue'
import Quotes from '@/views/Quotes.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sitemap',
      name: 'sitemap',
      component: Menu,
    },
    {
      path: '/quotes',
      name: 'quotes',
      component: Quotes,
    },
  ],
})

export default router
