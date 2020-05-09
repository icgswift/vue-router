
//定义router   路由也可以看做一个个组件

import Vue from 'vue'
import Router from 'vue-router'

import Film from '@/views/film'
import Cinema from '@/views/cinema'
import Center from '@/views/center'

import Nowplaying from '@/views/film/nowplaying'
import Commingsoon from '@/views/film/commingsoon'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/film',
            component: Film,
            // 配置子路由(film下面)
            children: [
                {
                    path: '/film/nowplaying',
                    component: Nowplaying
                },
                {
                    path: '/film/commingsoon',
                    component: Commingsoon
                },
                // 子路由初始定向至nowplaying
                {
                    path: '',
                    redirect: '/film/nowplaying'
                }
            ]
        },
        {
            path: '/cinema',
            component: Cinema
        },
        {
            path: '/center',
            component: Center
        },
        // 初始定向至 /film
        {
            path: '*',
            redirect: '/film'
        }
    ]
})
