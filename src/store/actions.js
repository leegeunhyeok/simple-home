
const _VERSION = 'v1'
const DEFAULT_DATA = {
  option: {
    timeFormat: '24',
    clockMargin: 150,
    apm: true,
    date: true,
    showAlt: true,
    newTab: false,
    pin: null,
    speed: 2,
    title: 'Simple Home 🏠',
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
      },
      action: {
        type: 'url',
        url: 'https://www.pinterest.co.kr'
      }
    },
    {
      text: 'Home',
      icon: {
        type: 'fas',
        name: 'home',
        color: 'dodgerblue'
      },
      action: {
        type: 'url',
        url: 'https://www.naver.com'
      }
    },
    {
      text: 'Google',
      icon: {
        type: 'fab',
        name: 'google',
        color: '#f9d71c'
      },
      action: {
        type: 'url',
        url: 'https://www.google.com'
      }
    },
    {
      text: 'Youtube',
      icon: {
        type: 'fab',
        name: 'youtube',
        color: '#ff0000'
      },
      action: {
        type: 'url',
        url: 'https://www.youtube.com'
      }
    },
    {
      text: 'Setting',
      icon: {
        type: 'fas',
        name: 'cog',
        color: '#7851a9'
      },
      action: {
        type: 'setting'
      }
    },
    {
      text: 'Facebook',
      icon: {
        type: 'fab',
        name: 'facebook',
        color: '#3b5998'
      },
      action: {
        type: 'url',
        url: 'https://facebook.com'
      }
    }
  ]
}

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
