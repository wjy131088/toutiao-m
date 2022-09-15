import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '@/views/Login'
Vue.use(VueRouter)
// 路由懒加载
const routes = [
  {
    path: '/',
    component: () => import('@/views/Layout'),
    redirect: '/ ',
    children: [
      { path: '/ ', component: () => import('@/views/Home') },
      {
        path: '/video',
        component: () => import(/* webpackCunkName:'base' */ '@/views/Video')
      },
      {
        path: '/qa',
        component: () => import(/* webpackCunkName:'base' */ '@/views/QA')
      },
      { path: '/profile', component: () => import('@/views/My') }
    ]
  },
  { path: '/login', component: () => import('@/views/Login') },
  {
    path: '/search',
    component: () => import(/* webpackChunkName:'Search */ '@/views/Search')
  }
]

const router = new VueRouter({
  routes
})
export default router
