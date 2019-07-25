import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

// Auto-register global components:
const requireComponent = require.context(
  './components', // directory to search for components
  false, // whether to search subdirectories
  /Base[A-Z]\w+\.(vue|js)$/ // regex to match file names
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})

Vue.config.productionTip = false

sync(store, router) // done. Returns an unsync callback fn

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
