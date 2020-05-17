
//定义router   路由也可以看做一个个组件

import Vue from 'vue'
import Router from 'vue-router'

import Film from '@/views/film'
import Cinema from '@/views/cinema'
import Center from '@/views/center'

import Nowplaying from '@/views/film/nowplaying'
import Commingsoon from '@/views/film/commingsoon'
import Details from '@/views/film/details'

import Login from '@/views/login'

/* const token = {
    isLogin() {
        return false
    }
} */

Vue.use(Router)

const router = new Router({
    mode: 'history',  //vue-router 默认hash模式  使用history模式有返回404风险  https://router.vuejs.org/zh/guide/essentials/history-mode.html
    routes: [
        {
            path: '/film',
            component: Film,
            // 配置子路由(film下面)
            children: [
                {
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
            path: '/details/:id',   //动态路由  ：(占位符)
            name: 'details',    //命名路由
            component: Details
        },

        {
            path: '/cinema',
            component: Cinema
        },

        {
            path: '/center',
            component: Center,
            //登陆页面center高亮显示 登陆页面放在center里面？问题不登录进不了center
            children:
                [
                    {
                        path: 'login',
                        component: Login
                    }
                ]
        },

        // 初始定向至 /film
        {
            path: '*',
            redirect: '/film'
        },

    ]
})

export default router
