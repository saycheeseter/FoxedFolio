// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './bootstrap';
import router from './router'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({

    router,
    template: `
    <div id="app">
    
    <router-view></router-view>
    </div>
    `

}).$mount('#app')



Vue.component('task-list', {
    template: `
    <div>
        <task v-for="task in tasks">{{ task.task }}</task>
    </div>
    `,

    data() {
        return {
            tasks: [{
                    task: 'Go to Store',
                    complete: true
                },
                {
                    task: 'Go to Email',
                    complete: false
                },
                {
                    task: 'Go to Work',
                    complete: true
                }
            ]
        }
    }
})

// Component within a component
Vue.component('task', {
    template: '<li><slot></slot></li>'
})