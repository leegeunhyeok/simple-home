
const _VERSION = 'v1'
const DEFAULT_DATA = {
  option: {
    pin: null,
    default: {
      color: '#555',
      backgroundColor: '#fff'
    },
    active: {
      backgroundColor: '#eee'
    }
  },
  menu: [
    {
      text: 'Picture',
      icon: {
        type: 'fas',
        name: 'image',
        color: '#2e8b57'
      }
    },
    {
      text: 'Home',
      icon: {
        type: 'fas',
        name: 'home',
        color: 'dodgerblue'
      }
    },
    {
      text: 'Google',
      icon: {
        type: 'fab',
        name: 'google',
        color: '#f9d71c'
      }
    },
    {
      text: 'Youtube',
      icon: {
        type: 'fab',
        name: 'youtube',
        color: '#ff0000'
      }
    },
    {
      text: 'Setting',
      icon: {
        type: 'fas',
        name: 'cog',
        color: '#7851a9'
      }
    },
    {
      text: 'Facebook',
      icon: {
        type: 'fab',
        name: 'facebook',
        color: '#3b5998'
      }
    }
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
