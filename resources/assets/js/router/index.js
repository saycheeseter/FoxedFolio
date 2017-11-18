import Vue from 'vue'
import Router from 'vue-router'
import Users from '../views/users.vue'
import Test from '../views/test.vue'
import Welcome from '../views/welcome.vue'
import Home from '../views/home.vue'
import Class from '../views/class.vue'



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
    }
]

export default new Router({
    routes

    // linkActiveClass: 'is-active'
})