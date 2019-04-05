import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import './registerServiceWorker'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faUserShield,
  faHome,
  faMusic,
  faPlay,
  faPlayCircle,
  faCat,
  faDog,
  faLocationArrow,
  faMapMarkedAlt,
  faGlobeAmericas,
  faGlobe,
  faStickyNote,
  faImage,
  faCamera,
  faBuilding,
  faSchool,
  faBookmark,
  faBookOpen,
  faEye,
  faUtensils,
  faUserFriends,
  faCode,
  faTerminal,
  faDatabase,
  faBaby,
  faLock,
  faCog,
  faBars,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub,
  faGitlab,
  faFacebook,
  faFacebookMessenger,
  faTwitter,
  faGoogle,
  faYoutube,
  faTwitch,
  faInstagram,
  faApple,
  faBlogger,
  faAndroid,
  faJs,
  faLinux,
  faSteam,
  faStackOverflow,
  faReddit,
  faTelegram,
  faSkype,
  faSlack
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([
  faUser,
  faUserShield,
  faHome,
  faMusic,
  faPlay,
  faPlayCircle,
  faCat,
  faDog,
  faLocationArrow,
  faMapMarkedAlt,
  faGlobeAmericas,
  faGlobe,
  faStickyNote,
  faImage,
  faCamera,
  faBuilding,
  faSchool,
  faBookmark,
  faBookOpen,
  faEye,
  faUtensils,
  faUserFriends,
  faCode,
  faTerminal,
  faDatabase,
  faBaby,
  faLock,
  faCog,
  faBars,
  faChevronRight,
  faGithub,
  faGitlab,
  faFacebook,
  faFacebookMessenger,
  faTwitter,
  faGoogle,
  faYoutube,
  faTwitch,
  faInstagram,
  faApple,
  faBlogger,
  faAndroid,
  faJs,
  faLinux,
  faSteam,
  faStackOverflow,
  faReddit,
  faTelegram,
  faSkype,
  faSlack
])
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
