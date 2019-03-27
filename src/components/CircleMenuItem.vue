<template>
  <div class="circle-menu-item" ref="menu"
    :class="{ active: isActive }"
  >
    {{ index }}
  </div>
</template>

<script>
export default {
  name: 'circle-menu-item',
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    currentIndex () {
      return this.$store.state.selectedMenuIndex
    }
  },
  watch: {
    currentIndex () {
      this.activateCheck()
    }
  },
  mounted () {
    let rotateDegree = this.index * 60
    this.$refs.menu.style.transform = `rotate(${rotateDegree}deg) skew(30deg)`
    this.activateCheck()
  },
  methods: {
    activateCheck () {
      this.isActive = this.index === this.currentIndex
    }
  }
}
</script>

<style lang="scss">

.circle-menu-item {
  position: absolute;
  background-color: #fff;
  width: 200px;
  height: 200px;
  transform-origin: 100% 100%;
  text-align: center;
  line-height: 300px;
  -webkit-transition: .3s;
     -moz-transition: .3s;
       -o-transition: .3s;
          transition: .3s;

  &.active {
    background-color: #ccc;
  }
}
</style>
