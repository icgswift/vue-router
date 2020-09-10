import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store.js'



new Vue({
  router,
  store,
  // 注册App组件并添加到页面
  render: h => h(App)
}).$mount('#app')
// vm.$mount(el) 