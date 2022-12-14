import Vue from 'vue'
import App from './App.vue'
import responsive from 'vue-responsive'
Vue.use(responsive)

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './routes.js'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
