<template>
  <div id="app" ref="app" v-if="live">
    <ClockView/>
    <SearchArea v-if="state.search"/>
    <SettingModal v-if="modalShow"
      @onOpenColorPicker="onOpenColorPicker($event)"
      @onCloseModal="onCloseModal"
    />
    <CirclePanel v-else :degree="degree"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ClockView from '@/components/ClockView'
import CirclePanel from '@/components/CirclePanel'
import SettingModal from '@/components/SettingModal'
import SearchArea from '@/components/SearchArea'

import EventManager from '@/event/EventManager'

import { open, getImage } from '@/db'

export default {
  name: 'app',
  components: {
    ClockView,
    CirclePanel,
    SettingModal,
    SearchArea
  },
  data () {
    return {
      manager: new EventManager(),
      // Menu rotate degree
      degree: 0,
      // Modal show flag
      modalShow: false,
      live: true
    }
  },
  computed: {
    ...mapState({
      state: state => state,
      send: state => state.send,
      menu: state => state.menu,
      newTab: state => state.newTab,
      currentIndex: state => state.selectedMenuIndex
    })
  },
  created () {
    // Get user data and set page title
    this.$store.dispatch('LOAD_USER_DATA')
    this.$store.dispatch('LOAD_MENU_DATA')
  },
  mounted () {
    // Get screen size and regist event listeners after mounted
    this.setScreenWidth()
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', e => {
        document.body.dataset.theme = e.matches && this.state.darkmode
          ? 'dark' : 'light'
      })

    window.addEventListener('resize', this.setScreenWidth)
    this.$refs.app.addEventListener('click', this.activeSelectedMenu)
    this.registEventListener()
    this.initHome()
  },
  methods: {
    /**
     * @description Bind event listener to $refs.app
     */
    registEventListener () {
      // TODO: MouseMove, MouseWheel, KeyDown, etc..
      // this.$refs.app.addEventListener('mousemove', this.manager.broker.call(this))
      this.$refs.app.addEventListener('mousewheel', this.manager.broker.call(this))
    },
    /**
     * @description Sent usage data to server
     */
    sendData () {
      this.$http.post('/connect')
        .catch(e => {
          console.error(`Can't send data: ${e}`)
        })
    },
    /**
     * @description Set page title
    */
    initHome () {
      document.title = this.state.title

      if (
        this.state.darkmode &&
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        document.body.dataset.theme = 'dark'
      } else {
        document.body.dataset.theme = 'light'
      }

      open().then(db => getImage(db))
        .then(bg => {
          if (bg.type === 'image') {
            // data:image/png;base64,
            this.$refs.app.style.backgroundImage = `url('${bg.data}')`
            this.$refs.app.style.backgroundRepeat = 'no-repeat'
            this.$refs.app.style.backgroundPosition = 'center'
            this.$refs.app.style.backgroundSize = 'cover'
          } else if (bg.type === 'style') {
            this.$refs.app.style = bg.data
          } else {
            // None
          }
        })
        .catch(console.error)
    },
    /**
     * @description Get current window size and store to vuex
     */
    setScreenWidth () {
      let screenWidth = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      this.$store.commit('SET_WIDTH', screenWidth)
    },
    /**
     * @description Change menu degree (check current cursor position)
     * @param {MouseEvent} event
     */
    changeDegree (event) {
      let x = event.clientX
      let speed = this.state.speed
      this.degree = x / (this.state.screenWidth / speed) * 360
    },
    /**
     * @description Activate selected menu
     */
    activeSelectedMenu () {
      let action = this.menu[this.currentIndex].action

      // Check action type
      if (action.type === 'url') {
        if (this.newTab) {
          this.live = false
          window.open(action.url, '_blank')
        } else {
          location.href = action.url
        }
      } else if (action.type === 'setting') {
        this.modalShow = true
      }
    },
    /**
     * Modal close
     */
    onCloseModal () {
      this.modalShow = false
      this.initHome()
    }
  }
}
</script>

<style lang="scss">

@font-face {
  font-family: 'NanumSquareRound';
  src:url('assets/fonts/NanumSquareRoundR.eot');
  src:url('assets/fonts/NanumSquareRoundR.eot#iefix') format('embedded-opentype'),
      url('assets/fonts/NanumSquareRoundR.woff') format('woff'),
      url('assets/fonts/NanumSquareRoundR.ttf') format('truetype');
  src:local(¡Ø), url('assets/fonts/NanumSquareRoundR.woff') format('woff');
}

* {
  box-sizing: border-box;
  user-select: none;
}

html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

#app {
  position: relative;
  font-family: 'NanumSquareRound', 'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #acb6e5, #74ebd5);
  overflow: hidden;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #aaa;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #aaa;
}
</style>
