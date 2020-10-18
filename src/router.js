//定义router 每个路由(route)都应该映射一个组件(component)

import Vue from 'vue'
import Router from 'vue-router'

// @/ 表示SRC目录下
import Film from '@/views/film'
import Cinema from '@/views/cinema'
import Center from '@/views/center'
import Login from '@/views/login'

import Nowplaying from '@/views/film/nowplaying'
import Commingsoon from '@/views/film/commingsoon'
import Details from '@/views/film/details'

// vue-router需使用vue.use()注册
Vue.use(Router)


// 创建router实例，传递配置
const router = new Router({
    mode: 'hash', //vue-router 默认hash模式  使用history模式有返回404风险  https://router.vuejs.org/zh/guide/essentials/history-mode.html
    // routes 属性值 数组
    routes: [{
            path: '/film',
            component: Film,
            // 配置子路由(film下面,即子路由的页面在film页面里面)
            children: [{
                    path: 'nowplaying',
                    component: Nowplaying
                },
                {
                    path: 'commingsoon',
                    component: Commingsoon
                },
                // 子路由初始定向至nowplaying
                {
                    path: '',
                    redirect: 'nowplaying'
                }
            ]
        },

        {
            path: '/details/:id', //动态路由  ：(占位符)
            name: 'details', //命名路由
            component: Details
        },


        {
            path: '/cinema',
            component: Cinema
        },


        {
            path: '/center',
            component: Center,
        },
        {
            path: '/login',
            component: Login
        },


        // 初始定向至 /film
        {
            path: '*',
            redirect: '/film'
        },

    ]
})

export default router