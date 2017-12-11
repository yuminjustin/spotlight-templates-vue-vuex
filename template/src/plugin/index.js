import Vue from 'vue'
import tool from './tool'


/* your plugin */
export default {
  install(Vue) {
    
    /* 
       your project common functions
       use it like: 
            this.$tool 
       in everywhere
    */
    Vue.prototype.$tool = tool

    /*  
     // directives here
     // example ：

    Vue.directive('name-text', {
      bind: function (el, b, vn) {
        ......
      }
    })

    // use：https://vuejs.org/v2/guide/custom-directive.html

    */
  }
}