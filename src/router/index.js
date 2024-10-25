import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/samuelBS',
      name: 'SamuelBS',
      component: () => import ('../views/SamuelBS.vue')
    }
  ]
})

export default router
