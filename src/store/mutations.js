import { DEFAULT_DATA } from '@/data/default'

const SET_WIDTH = (state, width) => {
  state.screenWidth = width
}

const SET_SELECTED_MENU = (state, index) => {
  state.selectedMenuIndex = index
}

const SET_STATE = (state, { key, value }) => {
  state[key] = value
}

const RESET_DATA = state => {
  Object.assign(state, JSON.parse(JSON.stringify(DEFAULT_DATA)))
}

export default {
  SET_WIDTH,
  SET_SELECTED_MENU,
  SET_STATE,
  RESET_DATA
}
