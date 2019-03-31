
const SET_WIDTH = (state, width) => {
  state.screenWidth = width
}

const SET_SELECTED_MENU = (state, index) => {
  state.selectedMenuIndex = index
}

const SET_STATE = (state, { key, value }) => {
  state[key] = value
}

export default {
  SET_WIDTH,
  SET_SELECTED_MENU,
  SET_STATE
}
