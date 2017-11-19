import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../views/welcome.vue'
import Home from '../views/home.vue'
import Class from '../views/class.vue'
import Profile from '../views/profile.vue'
import Forums from '../views/forums.vue'
import Editor from '../views/editor.vue'
import Evaluation from '../views/evaluation.vue'
import Threads from '../views/thread.vue'


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
    },
    {
        path: '/editor',
        component: Editor
    },
    {
        path: '/evaluation',
        component: Evaluation
    },
    {
        path: '/thread',
        component: Threads
    }
]

export default new Router({
    routes

    // linkActiveClass: 'is-active'
})