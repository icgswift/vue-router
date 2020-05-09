
//定义router

import Vue from 'vue'
import Router from 'vue-router'

import Film from '@/views/film'
import Cinema from '@/views/cinema'
import Center from '@/views/center'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/film',
            component: Film
        },
        {
            path: '/cinema',
            component: Cinema
        },
        {
            path: '/center',
            component: Center
        }
    ]
})
