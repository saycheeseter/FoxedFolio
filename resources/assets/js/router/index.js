import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../views/welcome.vue'
import Home from '../views/home.vue'
import Class from '../views/class.vue'
import Profile from '../views/profile.vue'
import Forums from '../views/forums.vue'



let routes = [{
        path: '/',
        component: Welcome
    },
    {
        path: '/discover',
        component: Home
    },
    {
        path: '/class',
        component: Class
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/community',
        component: Forums
    }
]

export default new Router({
    routes

    // linkActiveClass: 'is-active'
})