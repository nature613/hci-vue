import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const resourceHost = 'http://localhost:3000'

export default new Vuex.Store({
  state: {
    accessToken: null
  },
  getters: {

  },
  mutations: {
    LOGIN (state, {accessToken}) {
      state.accessToken = accessToken
    },
    LOGOUT (state) {
      state.accessToken = null
    }
  },
  actions: {
    LOGIN ({commit}, {loginId, loginPw}) {
      return axios.post(`/user/login`, {loginId, loginPw})
        .then(({data}) => commit('LOGIN', data))
    },
    LOGOUT ({commit}) {
      commit('LOGOUT')
    },
  }
})