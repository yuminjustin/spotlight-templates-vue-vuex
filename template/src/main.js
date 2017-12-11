/* polyfill IE */
import 'babel-polyfill'
/* vonder*/
import Vue from 'vue'
import ElementUI from 'element-ui'
/* styles*/
import 'element-ui/lib/theme-chalk/index.css'
import "@/assets/css/reset.css"
import "@/assets/css/page.css"

/* structure*/
import App from './App'
import router from './router'
import store from './store'
import Plugins from './plugin'

Vue.config.productionTip = false

/* plugin*/
Vue.use(ElementUI)
Vue.use(Plugins)

new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: {
        App
    }
})



/* webpack hot reload */
if (module.hot) {
    module.hot.accept();
}