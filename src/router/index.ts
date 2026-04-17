import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Menu from '@/views/Menu.vue'
import Quotes from '@/views/Quotes.vue'
import Turf from '@/views/turf/TurfView.vue'
import Occasions from '@/views/Occasions.vue'
import BafkosView from '@/views/bafkos/BafkosView.vue'
import TurfCheckView from '@/views/turf/TurfCheckView.vue'
import TurfChoiceView from '@/views/turf/TurfChoiceView.vue'
import TurfTotalView from '@/views/turf/TurfTotalView.vue'
import ActivitiesView from '@/views/activities/ActivitiesView.vue'
import NewActivityView from '@/views/activities/NewActivityView.vue'
import ActivityOverview from '@/views/activities/ActivityOverview.vue'

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
      path: '/turf-choice',
      name: 'turf-choice',
      component: TurfChoiceView,
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
    },
    {
      path: '/turf-check',
      name: '/turf-check',
      component: TurfCheckView
    },
    {
      path: '/turf-total',
      name: 'turf-total',
      component: TurfTotalView,
    },
    {
      path: '/bafkos',
      name: 'bafkos',
      component: BafkosView,
    },
    {
      path: '/activiteiten',
      name: 'activiteiten',
      component: ActivitiesView,
    },
    {
      path: '/activiteiten/nieuw',
      name: '/activiteiten/nieuw',
      component: NewActivityView,
    },
    {
      path: '/activiteiten/:id',
      component: ActivityOverview
    }
  ],
})

export default router
