import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入css
import '@/assets/font/iconfont.css'
// 引入Vant
import Vant from 'vant'
import 'vant/lib/index.css'
// 引入flexible
import 'amfe-flexible'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
