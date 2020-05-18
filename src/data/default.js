const _data = {
  option: {
    timeFormat: '12',
    clockMargin: 150,
    apm: true,
    date: true,
    search: true,
    searchMargin: 320,
    showAlt: true,
    newTab: false,
    speed: 2,
    title: 'Simple Home',
    darkmode: false,
    pin: null,
    send: true,
    defaultColor: '#555555',
    defaultBackgroundColor: '#FFFFFF',
    activeBackgroundColor: '#EEEEEE'
  },
  menu: [
    {
      index: 0,
      text: 'Picture',
      icon: {
        type: 'fas',
        name: 'image',
        color: '#2E8B57'
      },
      action: {
        type: 'url',
        url: 'https://www.pinterest.co.kr'
      }
    },
    {
      index: 1,
      text: 'Home',
      icon: {
        type: 'fas',
        name: 'home',
        color: '#1E90FF'
      },
      action: {
        type: 'url',
        url: 'https://www.naver.com'
      }
    },
    {
      index: 2,
      text: 'Google',
      icon: {
        type: 'fab',
        name: 'google',
        color: '#F9D71C'
      },
      action: {
        type: 'url',
        url: 'https://www.google.com'
      }
    },
    {
      index: 3,
      text: 'Youtube',
      icon: {
        type: 'fab',
        name: 'youtube',
        color: '#FF0000'
      },
      action: {
        type: 'url',
        url: 'https://www.youtube.com'
      }
    },
    {
      index: 4,
      text: 'Setting',
      icon: {
        type: 'fas',
        name: 'cog',
        color: '#7851A9'
      },
      action: {
        type: 'setting'
      }
    },
    {
      index: 5,
      text: 'Facebook',
      icon: {
        type: 'fab',
        name: 'facebook',
        color: '#3B5998'
      },
      action: {
        type: 'url',
        url: 'https://facebook.com'
      }
    }
  ]
}

export const DEFAULT_DATA = _data
// deepFreeze(_data)
