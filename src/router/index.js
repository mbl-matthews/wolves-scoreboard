import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Console from '../views/Console'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/console',
    name: 'Console',
    component: Console
  }
]

const router = new VueRouter({
  routes
})

export default router
