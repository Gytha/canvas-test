import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    screenWidth: document.body.clientWidth,
    footerHeight: document.body.clientWidth>767?98:198,
  },
  mutations: {
    SET_SCREENWIDTH (state, res) {
      state.screenWidth = res
    },
    SET_FOOTERHEIGHT (state, res) {
      state.footerHeight = res
    }
  },
  actions: {
    screenWidth: ({ commit }, param) => {
      commit('SET_SCREENWIDTH', param)
    },
    footerHeight: ({ commit }, param) => {
      commit('SET_FOOTERHEIGHT', param)
    },
  }
})
