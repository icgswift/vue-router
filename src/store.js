import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
// .Store s大写  store,state在store对象中应用需先传递进去
export default new Vuex.Store({
    state: {
        msg: true,
        // 应用state保存后端请求来的数据，不必每次发送AJAX请求，提升性能
        commingList: []
    },
    mutations: {
        test(state, data) {
            state.msg = data
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
