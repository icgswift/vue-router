import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import { show_tabbar_mutation, hide_tabbar_mutation } from '@/type'

// 用法同vue-router
Vue.use(Vuex)

//new Vuex.Store用于创建对象吗， .Store(S大写)
export default new Vuex.Store({
    // state对象用于保存数据
    state: {
        msg: true,
        // 应用state保存后端请求来的数据，不必每次发送AJAX请求，提升性能
        commingList: [],
        token:null,
        cityId:110000
    },

    // getters 可以认为是store的计算属性 ，用于过滤数据，再传递给组件复用，提高性能
    // getter接收state作为其第一个参数
    getters: {
        commingListGetter(state) {
            return state.commingList.filter((value, index) =>
                index < 8
            )
        }
    },

// 保存多个更新state函数的对象，使用工具调试及追踪
// 接收state作为其第一个参数
    mutations: {
        [show_tabbar_mutation](state) {
            state.msg = true
        },
        [hide_tabbar_mutation](state) {
            state.msg = false
        },
        getCommingList(state, value) {
            state.commingList = value
        },
        getCityId(state,value){
            state.cityId=value
        },
        setToken(state,value){
            state.token=value
        }
    },

// 保存多个事件回调函数的对象，使用原因：处理异步操作(mutations是不能处理异步操作的)
// 接收store作为其第一个参数
    actions: {
        sendAJAX(store) {
            axios({
                url: `https://m.maizuo.com/gateway?cityId=${store.state.cityId}&pageNum=1&pageSize=10&type=2&k=303160`,
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15889854793526168150996","bc":"500100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                // store.commit(更新state函数名，更新数据)
                store.commit('getCommingList', res.data.data.films)
            })
        }
    }
})



// [ ]  的作用：变量属性名   将一个不是变量的XXX (比如属性名）变成变量 
/* var name = 'sb'
   var obj = {
               [name]: 'cj' 
   }
  console.log(obj)    sb:"cj"
*/

// 上面actions中  等价于
/* var show_tabbar = 'show'
   var hide_tabbar = 'hide'

 var obj = {
    [show_tabbar]: 'XXXX',
    [hide_tabbar]: 'XXXXX' 
 }
*/