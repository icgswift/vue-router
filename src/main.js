import Vue from 'vue'
import App from './App.vue'
import router from './router'  //引入vue-router
import store from '@/store.js'

Vue.config.productionTip = false

new Vue({
  router,   //应用vue-router
  store,     //为了在组件中访问 this.$store property，你需要为 Vue 实例提供创建好的 store。Vuex 提供了一个从根组件向所有子组件，以 store 选项的方式“注入”该 store 的机制,这和vue-router的应用有点相似
  render: h => h(App),
}).$mount('#app')   //vm.$mount(el)    等同于{el:'#app'}  参见生命周期
