import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false

sync(store, router) // done. Returns an unsync callback fn

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
