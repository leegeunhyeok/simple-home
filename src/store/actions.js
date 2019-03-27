
const _VERSION = 'v1'

const GET_USER_DATA = ({ commit }) => {
  try {
    commit('SET_USER_DATA', JSON.parse(localStorage.getItem(_VERSION)))
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
