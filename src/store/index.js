import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    source: null,
    destination: null,
  },

  mutations: {

    SET_PATH: (state, payload) => {
      switch(payload.name) {
        case 'source': {
          state.source = payload.path
          break
        }
        case 'destination': {
          state.destination = payload.path
          break
        }
        default: {
          break
        }
      }
    },
  },

  actions: {

    setPath({ commit }, payload) {
      commit('SET_PATH', payload)
    }
  }
})
