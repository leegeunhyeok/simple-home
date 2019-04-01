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
  let data = JSON.parse(JSON.stringify(DEFAULT_DATA))
  for (let key of Object.keys(data.option)) {
    state[key] = data.option[key]
  }
  state.menu = data.menu
}

export default {
  SET_WIDTH,
  SET_SELECTED_MENU,
  SET_STATE,
  RESET_DATA
}
