import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const myRoute = new Router({
    routes: [{
        path: '',
        component: r => require.ensure([], () => r(require('C/hello')), 'Hello')
    }, {
        path: '/404',
        component: r => require.ensure([], () => r(require('C/error')), 'notFound')
    }, {
        path: '/test1',
        component: r => require.ensure([], () => r(require('C/test/test1')), 'Test1')
    }, {
        path: '/test2',
        component: r => require.ensure([], () => r(require('C/test/test2')), 'Test2')
    }, {
        path: '/test3',
        component: r => require.ensure([], () => r(require('C/test/test3')), 'Test3')
    }]
})

/* 404 page */
myRoute.beforeEach((to, from, next) => {
    if (to.matched.length) next()
    else next({
        path: '/404'
    })
})


export default myRoute