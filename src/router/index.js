import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '@/views/Login'
Vue.use(VueRouter)
// 路由懒加载
const routes = [{ path: '/login', component: () => import('@/views/Login') }]

const router = new VueRouter({
  routes
})

export default router
