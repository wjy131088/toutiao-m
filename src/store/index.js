import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// yarn add vuex-persistedstate@3.2.1
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: 'HEIMA-TOUTIAO',
      // storage: window.sessionStorage,
      reducer(state) {
        console.log(state)
        const { tokenObj } = state
        return { tokenObj }
      }
    })
  ],
  state: {
    tokenObj: {},
    a: 1
  },
  getters: {
    isLogin(state) {
      return !!state.tokenObj.token
    }
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.tokenObj = token
    }
  }
})
