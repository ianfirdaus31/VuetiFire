import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    barColor: 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)',
    barImage: 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg',
    drawer: null,
    access_token: localStorage.getItem('access_token'),
  },

  mutations: {
    SET_BAR_IMAGE (state, payload) {
      state.barImage = payload
    },

    SET_DRAWER (state, payload) {
      state.drawer = payload
    },

    SET_ACCESS_TOKEN(state, payload) {
      state.access_token = payload
    },
  },

  actions: {

  },

  getters: {
    isAuth: state => {
      return state.access_token !== "null" && state.access_token != null
    }
  },
})
