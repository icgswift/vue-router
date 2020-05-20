import Vue from 'vue'
import App from './App.vue'
import router from './router'  //引入vue-router
import store from '@/store.js'


// elementUI全局引入与应用
/* import ElementUI from 'element-ui'
//引入CSS
import 'element-ui/lib/theme-chalk/index.css';
//全局注册
Vue.use(ElementUI) */

// elementUI按需引入   借助babel-plugin-component 并配置.babelrc  
import { Button } from 'element-ui'
// 注册  两种方式
// Vue.use(button)
Vue.component('el-button', Button)



new Vue({
  router,   //应用vue-router
  store,     //为了在组件中访问 this.$store property，你需要为 Vue 实例提供创建好的 store。Vuex 提供了一个从根组件向所有子组件，以 store 选项的方式“注入”该 store 的机制,这和vue-router的应用有点相似
  render: h => h(App),
}).$mount('#app')   //vm.$mount(el)    等同于{el:'#app'}  参见生命周期
