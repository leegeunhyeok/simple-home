import DEFAULT_DATA from '@/data/default'

const _VERSION = 'v1'
const IGNORE_STATE_KEY = [
  'screenWidth',
  'selectedMenuIndex',
  'menu'
]

const LOAD_USER_DATA = ({ commit, dispatch }) => {
  try {
    // Get localStorage value and parse to JSON data
    let userData = JSON.parse(localStorage.getItem(_VERSION))
    if (userData) {
      for (let key of Object.keys(userData)) {
        commit('SET_STATE', {
          key,
          value: userData[key]
        })
      }
    } else {
      throw new Error('User data is empty')
    }
  } catch (e) {
    // Set default user data and save to localStorage
    console.error(e)
    for (let key of Object.keys(DEFAULT_DATA.option)) {
      commit('SET_STATE', {
        key,
        value: DEFAULT_DATA.option[key]
      })
    }
    dispatch('SAVE_USER_DATA')
  }
}

const SAVE_USER_DATA = ({ state }) => {
  try {
    // Save current user data to localStorage
    let userData = {}
    for (let key of Object.keys(state)) {
      if (IGNORE_STATE_KEY.indexOf(key) === -1) {
        userData[key] = state[key]
      }
    }
    localStorage.setItem(_VERSION, JSON.stringify(userData))
  } catch (e) {
    // Save default data
    console.error(e)
    localStorage.setItem(_VERSION, JSON.stringify(DEFAULT_DATA.option))
  }
}

const LOAD_MENU_DATA = ({ commit, dispatch }) => {
  try {
    // Get localStorage value and parse to JSON data
    let menuData = JSON.parse(localStorage.getItem(`${_VERSION}_menu`))
    if (menuData) {
      commit('SET_STATE', {
        key: 'menu',
        value: menuData
      })
    } else {
      throw new Error('Menu data is empty')
    }
  } catch (e) {
    // Set default user data and save to localStorage
    console.error(e)
    commit('SET_STATE', {
      key: 'menu',
      value: DEFAULT_DATA.menu
    })
    dispatch('SAVE_MENU_DATA')
  }
}

const SAVE_MENU_DATA = ({ state }) => {
  try {
    // Save current user data to localStorage
    localStorage.setItem(`${_VERSION}_menu`, JSON.stringify(state.menu))
  } catch (e) {
    // Save default data
    console.error(e)
    localStorage.setItem(`${_VERSION}_menu`, JSON.stringify(DEFAULT_DATA.menu))
  }
}

export default {
  LOAD_USER_DATA,
  SAVE_USER_DATA,
  LOAD_MENU_DATA,
  SAVE_MENU_DATA
}
