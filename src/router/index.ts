import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Menu from '@/views/Menu.vue'
import Quotes from '@/views/Quotes.vue'
import Turf from '@/views/Turf.vue'
import Occasions from '@/views/Occasions.vue'

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
    {
      path: '/turf',
      name: 'turf',
      component: Turf,
    },
    {
      path: '/gelegenheid',
      name: 'gelegenheid',
      component: Occasions,
    }
  ],
})

export default router
