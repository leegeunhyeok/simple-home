<template>
  <transition name="slide" mode="out-in">
    <div id="app" ref="app">
      <ClockView/>
      <SettingModal v-if="modalShow" @onCloseModal="modalShow = false"/>
      <CirclePanel v-else :degree="degree"/>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
import ClockView from '@/components/ClockView'
import CirclePanel from '@/components/CirclePanel'
import SettingModal from '@/components/SettingModal'

export default {
  name: 'app',
  components: {
    ClockView,
    CirclePanel,
    SettingModal
  },
  data () {
    return {
      // Menu rotate degree
      degree: 0,
      // Modal show flag
      modalShow: false
    }
  },
  computed: {
    ...mapState({
      userData: state => state.userData,
      currentIndex: state => state.selectedMenuIndex
    })
  },
  created () {
    // Get user data and set page title
    this.$store.dispatch('GET_USER_DATA')
    document.title = this.userData.option.title
  },
  mounted () {
    // Get screen size and regist event listeners after mounted
    this.setScreenWidth()
    window.addEventListener('resize', this.setScreenWidth)
    this.$refs.app.addEventListener('click', this.activeSelectedMenu)
    this.$refs.app.addEventListener('mousemove', this.changeDegree)
    this.$refs.app.addEventListener('touchmove', this.changeDegree)
  },
  methods: {
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
      let speed = this.userData.option.speed
      this.degree = x / (this.$store.state.screenWidth / speed) * 360
    },
    /**
     * @description Activate selected menu
     */
    activeSelectedMenu () {
      let action = this.userData.menu[this.currentIndex].action

      // Check action type
      if (action.type === 'url') {
        location.href = action.url
      } else if (action.type === 'setting') {
        this.modalShow = true
      }
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
  font-family: 'NanumSquareRound';
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
