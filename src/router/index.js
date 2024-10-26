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
      path: '/diego-moran',
      name: 'diego-moran',
      component: () => import('../views/DiegoView.vue'), 
    }
  ]
})

export default router
