import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/routes'
Vue.use(VueRouter)



const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes,
})

export default router