import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '',
    email: ''
  },
  mutations: {
    setName(state, name) {
      state.name = name
    },
    setEmail(state, email) {
      state.email = email
    }
  },
  actions: {
    updateName({ commit }, name) {
      commit('setName', name)
    },
    updateEmail({ commit }, email) {
      commit('setEmail', email)
    }
  },
  getters: {
    name: state => state.name,
    email: state => state.email
  }
})
