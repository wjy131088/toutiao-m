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
        // console.log(state)
        const { tokenObj, myChannels } = state
        return { tokenObj, myChannels }
      }
    })
  ],
  state: {
    tokenObj: {},
    myChannels: []
  },
  getters: {
    isLogin(state) {
      return !!state.tokenObj.token
    }
  },
  mutations: {
    SET_TOKEN(state, token) {
      // token存在vuex
      state.tokenObj = token
    },
    /**
     * @param {Array} channels 删除或者添加后的最新的channels
     */
    SET_MY_CHANNELS(state, channels) {
      state.myChannels = channels
    }
  }
})
