<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'app'
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

#app {
  font-family: 'NanumSquareRound', 'Avenir', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
