import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    proj: {}
  },
  getters: {
    counter: state => state.count,
    counter2: state => state.route.query.counter2
  },
  actions: {
    increment({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 400)
    },
    increment2({ commit }) {
      setTimeout(() => {
        commit('increment2')
      }, 400)
    }
  },
  mutations: {
    increment(state) {
      state.count++
      state.proj = { x: 5 }
    },
    increment2(state) {
      const oldValue = parseInt(state.route.query.counter2) || 0
      router.push({
        query: {
          counter2: oldValue + 1
        }
      })
    }
  }
})
