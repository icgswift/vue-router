import Vue from 'vue'
import App from './App.vue'
import router from './router'  //引入vue-router

Vue.config.productionTip = false

new Vue({
  router,   //应用vue-router
  render: h => h(App),
}).$mount('#app')
