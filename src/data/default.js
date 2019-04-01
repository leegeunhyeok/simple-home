export default {
  option: {
    timeFormat: '12',
    clockMargin: 150,
    apm: true,
    date: true,
    showAlt: true,
    newTab: false,
    speed: 2,
    title: 'Simple Home',
    pin: null,
    defaultColor: '#555555',
    defaultBackgroundColor: '#FFFFFF',
    activeBackgroundColor: '#EEEEEE'
  },
  menu: [
    {
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
