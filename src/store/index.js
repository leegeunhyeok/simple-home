import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    screenWidth: 0,
    selectedMenuIndex: 1,
    timeFormat: '24',
    clockMargin: 150,
    apm: true,
    date: true,
    showAlt: true,
    newTab: false,
    speed: 2,
    title: 'Simple Home 🏠',
    pin: null,
    defaultColor: '#555555',
    defaultBackgroundColor: '#ffffff',
    activeColor: '#555555',
    activeBackgroundColor: '#eeeeee',
    menu: []
  },
  getters,
  mutations,
  actions
})
