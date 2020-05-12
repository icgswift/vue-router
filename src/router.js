
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

            /*   //路由独享的守卫 
              beforeEnter: (from, to, next) => {
                  if (token.isLogin()) {
                      next()
                  } else {
                      next('/login')
                  }
              } */
        },

        // 初始定向至 /film
        {
            path: '*',
            redirect: '/film'
        },
        {
            path: '/login',
            component: Login
        }
    ]
})

export default router
/*
//全局路由守卫
router.beforeEach((to, from, next) => {
    console.log(to, from, next)
    if (to.path === '/center') {
        if (token.isLogin()) {
            next()
        } else {
            alert('过不去了')
            next('/login')
        }
    } else {
        next()
    }
}) */
