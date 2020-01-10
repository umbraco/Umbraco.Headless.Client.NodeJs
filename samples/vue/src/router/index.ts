import Vue from 'vue'
import VueRouter from 'vue-router'

import UmbracoPage from '@/views/UmbracoPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'UmbracoPage',
    component: UmbracoPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
