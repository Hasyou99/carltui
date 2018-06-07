import Vue from 'vue'
import Router from 'vue-router'
import navConf from '../nav.config.json'

import index from '../pages/index.vue'

Vue.use(Router);

let routes = []

Object.keys(navConf).forEach((header) => {
    routes = routes.concat(navConf[header])
})

let addComponent = (router) => {
    router.forEach((route) => {
        if (route.items) {
            addComponent(route.items)
            routes = routes.concat(route.items)
        } else {
            if (route.type === 'pages') {
                route.component = r => require.ensure([], () =>
                    r(require(`../pages/${route.name}.vue`)))
                return
            }
            route.component = r => require.ensure([], () =>
                r(require(`../pages/${route.name}.vue`)))
        }
    })
}
addComponent(routes)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: index,
        children: [...routes]
    }, ],
})