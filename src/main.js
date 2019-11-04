import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import '@/icons'
import '@/permission'
import METHODS from '@/utils/fit-screen-size.js'
// import "font-awesome/css/font-awesome.min.css"
Vue.config.productionTip = true
Vue.use(ElementUI);
Vue.prototype.$Fitscreen = METHODS
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
