import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入全局組件
import  NavBar  from "@/components/NavBar"
//註冊全局組件:參數1:全局組件的名字 參數2:哪一個組件
Vue.component('NavBar', NavBar)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
