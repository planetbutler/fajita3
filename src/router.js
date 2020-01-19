import Vue from 'vue'
import Router from 'vue-router'
import Maker from './views/maker.vue'
import Contents from './views/contents.vue'
import Complitas from './views/complitas.vue'
import Complita from './views/complita.vue'


Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path: '/',
            name: 'fajita-maker',
            component: Maker
        },
        {
            path: '/contents',
            name: 'contents',
            component: Contents
        },
        {
            path: '/complitas',
            name: 'complitas',
            component: Complitas
        },
        {
            path: '/complitas/:id',
            name: 'complita',
            component: Complita,
            props: true
        }
    ]
})
