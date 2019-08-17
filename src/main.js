import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

import axios from 'axios'
Vue.prototype.axios = axios;    //添加这一句可以在组件中用 this 来引用 axios

Vue.filter('setWH',(url , arg)=>{
    return url.replace(/w\.h/,arg);     //过滤器，用来替换传过来的图片的链接里的w.h
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')      //$mount  与 el： 一样
