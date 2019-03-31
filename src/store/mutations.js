export default {
  SET_WIDTH (state, width) {
    state.screenWidth = width
  },
  SET_SELECTED_MENU (state, index) {
    state.selectedMenuIndex = index
  },
  SET_STATE (state, { key, value }) {
    state[key] = value
  }
}
