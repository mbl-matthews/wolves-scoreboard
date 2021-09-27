import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeScore: 0,
    awayScore: 0,
  },
  getters: {
    getHomeScore: state => {
      return state.homeScore
    },
    getAwayScore: state => {
      return state.awayScore
    }
  },
  mutations: {
    setHomeScore(state, score) {
      state.homeScore = score
    },
    setAwayScore(state, score) {
      state.awayScore = score
    }
  },
  actions: {
  },
  modules: {
  }
})
