import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import journalRouter from '../modules/journal/router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/journal',
    ...journalRouter
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
