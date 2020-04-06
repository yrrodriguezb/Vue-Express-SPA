import Vue from 'vue'
import Vuex from 'vuex'
import appService from '../app.service'
import showsModule from './shows.module'

Vue.use(Vuex)

const state = {
  isAuthenticated: false,
  user: {
    name: '',
    last_login: ''
  }
}

const getters = {
  isAuthenticated: (state) => {
    return state.isAuthenticated
  },
  user: (state) => {
    return state.user
  }
}

const actions = {
  logout (context) {
    context.commit('logout')
  },
  login (context, credentials) {
    return new Promise(resolve => {
      appService.login(credentials)
        .then(data => {
          context.commit('login', data)
          resolve()
        })
        .catch(() => this.isAuthenticated = false)
    })
  },
}

const mutations = {
  logout (state) {
    state.isAuthenticated = false
    localStorage.setItem('token', null)
    localStorage.setItem('tokenExpiration', null)
  },
  login (state, data) {
    localStorage.setItem('token', data.token)
    localStorage.setItem('tokenExpiration', data.tokenExpiration)
    state.isAuthenticated = true
    state.user = data.user
  }
}

const store = new Vuex.Store({
  modules: {
    showsModule
  },
  state,
  getters,
  actions,
  mutations
})

document.addEventListener('DOMContentLoaded', function (event) {
  let expiration = localStorage.getItem('tokenExpitation')
  let unixTimestamp = new Date().getTime() / 1000;

  if (expiration !== null && (parseInt(expiration) - unixTimestamp) > 0) {
    store.state.isAuthenticated = true;
  }
})

export default store
