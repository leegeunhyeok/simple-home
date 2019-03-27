
export default {
  SET_USER_DATA (state, userData) {
    state.userData = userData
  },
  SET_WIDTH (state, width) {
    state.screenWidth = width
  },
  SET_SELECTED_MENU (state, index) {
    state.selectedMenuIndex = index
  }
}
