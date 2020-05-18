import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import { show_tabbar_mutation, hide_tabbar_mutation } from '@/type'

Vue.use(Vuex)
// .Store s大写  store,state在store对象中应用需先传递进去
export default new Vuex.Store({
    state: {
        msg: true,
        // 应用state保存后端请求来的数据，不必每次发送AJAX请求，提升性能
        commingList: []
    },
    // getters 可以认为是store的计算属性 ，用于处理一定复杂逻辑 过滤的数据再传递给组件，提高性能
    getters: {
        commingListGetter(state) {
            return state.commingList.filter((value, index) =>
                index < 1
            )
        }
    },
    mutations: {
        [show_tabbar_mutation](state) {
            state.msg = true
        },
        [hide_tabbar_mutation](state) {
            state.msg = false
        },
        test1(state, data) {
            state.commingList = data
        },
    },
    actions: {
        sendAJAX(store) {
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=500100&pageNum=1&pageSize=10&type=2&k=303160',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15889854793526168150996","bc":"500100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                store.commit('test1', res.data.data.films)
            })
        }
    }
})

// [ ]  的作用：变量属性名   将一个不是变量的XXX (比如属性名）变成变量 
var name = 'sb'
var obj = {
    [name]: 'cj'
}
console.log(obj)    // 'sb'--->sb

// 上面actions中  等价于
/* var show_tabbar = 'show'
var hide_tabbar = 'hide'

var obj = {
    [show_tabbar]: 'XXXX',
    [hide_tabbar]: 'XXXXX'
} */
