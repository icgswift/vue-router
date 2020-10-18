import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from '@/store.js'

import vRegion from 'v-region';
Vue.use(vRegion);


new Vue({
  // router 配置参数注入 整个应用都有路由功能 在任何组件内通过this.$router访问路由器
  router,
  store,
  
  // 注册App组件并添加到页面
  render: h => h(App)
}).$mount('#app')
// vm.$mount(el) 