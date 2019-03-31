export default {
  option: {
    timeFormat: '24',
    clockMargin: 150,
    apm: true,
    date: true,
    showAlt: true,
    newTab: false,
    speed: 2,
    title: 'Simple Home 🏠',
    pin: null,
    defaultColor: '#555555',
    defaultBackgroundColor: '#ffffff',
    activeColor: '#555555',
    activeBackgroundColor: '#eeeeee'
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
