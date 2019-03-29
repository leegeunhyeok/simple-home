import Vue from 'vue'

export default {
  SET_USER_DATA (state, userData) {
    Vue.set(state, 'userData', userData)
    for (let k of Object.keys(userData)) {
      if (userData[k] instanceof Object) {
        Vue.set(state.userData, k, userData[k])
      }
    }
  },
  SET_WIDTH (state, width) {
    state.screenWidth = width
  },
  SET_SELECTED_MENU (state, index) {
    state.selectedMenuIndex = index
  },
  SET_OPTION (state, { key, value }) {
    state.userData.option[key] = value
  }
}
