<template>
  <div id="app" ref="app">
    <CirclePanel :degree="degree"/>
  </div>
</template>

<script>
import CirclePanel from '@/components/CirclePanel';

export default {
  name: 'app',
  components: {
    CirclePanel
  },
  data () {
    return {
      speed: 1,
      screenWidth: 0,
      degree: 0
    }
  },
  created () {
    this.speed = 1
  },
  mounted () {
    this.screenWidth = window.innerWidth 
        || document.documentElement.clientWidth
        || document.body.clientWidth
    this.$refs.app.addEventListener('mousemove', this.changeDegree)
    this.$refs.app.addEventListener('touchmove', this.changeDegree)
  },
  methods: {
    changeDegree (event) {
      let x = event.clientX
      let percent = x / (this.screenWidth / 2)
      this.degree = 360 * percent * (this.speed * 0.5)
    }
  }
}
</script>

<style lang="scss">

@font-face {
  font-family: 'NanumSquareRound';
  src:url('/assets/fonts/NanumSquareRoundR.eot');
  src:url('/assets/fonts/NanumSquareRoundR.eot#iefix') format('embedded-opentype'),
  url('/assets/fonts/NanumSquareRoundR.woff') format('woff'),
  url('/assets/fonts/NanumSquareRoundR.ttf') format('truetype');
  src:local(¡Ø), url('/assets/fonts/NanumSquareRoundR.woff') format('woff');
}

* {
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

#app {
  position: relative;
  font-family: 'NanumSquareRound', 'Avenir', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #acb6e5, #74ebd5);
  overflow: hidden;
}
</style>
