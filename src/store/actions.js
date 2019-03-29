import DEFAULT_DATA from '@/data/default'

const _VERSION = 'v1'

const GET_USER_DATA = ({ commit, dispatch }) => {
  try {
    // Get localStorage value and parse to JSON data
    let userData = JSON.parse(localStorage.getItem(_VERSION))
    if (userData) {
      commit('SET_USER_DATA', userData)
    } else {
      // Set default user data and save to localStorage
      commit('SET_USER_DATA', DEFAULT_DATA)
      dispatch('SET_USER_DATA')
    }
  } catch (e) {
    // Set default user data and save to localStorage
    console.error(e)
    commit('SET_USER_DATA', DEFAULT_DATA)
    dispatch('SET_USER_DATA')
  }
}

const SET_USER_DATA = ({ state }) => {
  try {
    // Save current user data to localStorage
    localStorage.setItem(_VERSION, JSON.stringify(state.userData))
  } catch (e) {
    // Save default data
    console.error(e)
    localStorage.setItem(_VERSION, JSON.stringify(DEFAULT_DATA))
  }
}

export default {
  GET_USER_DATA,
  SET_USER_DATA
}
