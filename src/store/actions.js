
const _VERSION = 'v1'
const DEFAULT_DATA = {
  menu: [
    { text: 'a' },
    { text: 'b' },
    { text: 'c' },
    { text: 'd' },
    { text: 'e' },
    { text: 'f' }
  ]
}

const GET_USER_DATA = ({ commit, dispatch }) => {
  try {
    let userData = JSON.parse(localStorage.getItem(_VERSION))
    if (userData) {
      commit('SET_USER_DATA', userData)
    } else {
      commit('SET_USER_DATA', DEFAULT_DATA)
      dispatch('SET_USER_DATA')
    }
  } catch (e) {
    console.error(e)
    commit('SET_USER_DATA', {})
  }
}

const SET_USER_DATA = ({ state }) => {
  try {
    localStorage.setItem(_VERSION, JSON.stringify(state.userData))
  } catch (e) {
    console.error(e)
    localStorage.setItem(_VERSION, '{}')
  }
}

export default {
  GET_USER_DATA,
  SET_USER_DATA
}
