import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/format',
    name: 'Formatter',
    component: () => import('@/views/Formatter')
  },
  {
    path: '/success',
    namne: 'Success',
    component: () => import('@/views/Success')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
