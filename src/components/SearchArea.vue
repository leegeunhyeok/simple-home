<template>
  <div id="search-area" ref="search">
    <input v-model="text"
      @click.stop=""
      @mousemove.stop=""
      @keydown.enter="search"
    >
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'search-area',
  data () {
    return {
      text: ''
    }
  },
  computed: mapState({
    margin: state => state.searchMargin,
    newTab: state => state.newTab
  }),
  mounted () {
    this.$refs.search.style.marginTop = `${this.margin}px`
  },
  methods: {
    /**
     * @description Google search
     */
    search () {
      if (this.text) {
        let url = `https://www.google.com/search?q=${this.text}`
        if (this.newTab) {
          window.open(url, '_blank')
        } else {
          location.href = url
        }
      }
    }
  }
}
</script>

<style lang="scss">

#search-area {
  position: absolute;
  width: 100%;
  left: 50%;
  text-align: center;
  -webkit-transform: translateX(-50%);
     -moz-transform: translateX(-50%);
       -o-transform: translateX(-50%);
          transform: translateX(-50%);

  input {
    padding: 1rem 2rem;
    font-size: 1rem;

    @media only screen and (min-width: 320px) {
      width: 80%;
    }

    @media only screen and (min-width: 768px) {
      width: 50%;
    }

    @media only screen and (min-width: 1224px) {
      width: 35%;
    }
  }
}
</style>
