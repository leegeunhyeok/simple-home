import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    screenWidth: 0,
    selectedMenuIndex: 0
  },
  mutations: {
    SET_WIDTH (state, width) {
      state.screenWidth = width
    },
    SET_SELECTED_MENU (state, index) {
      state.selectedMenuIndex = index
    }
  },
  actions: {

  }
})
