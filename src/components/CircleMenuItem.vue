<template>
  <div class="circle-menu-item" ref="menu"
    :style="currentStyle"
  >
    <font-awesome-icon class="circle-menu-item__icon"
      :icon="[currentMenuData.icon.type, currentMenuData.icon.name]"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'circle-menu-item',
  props: {
    // Menu index (0 ~ 5)
    index: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      currentStyle: null
    }
  },
  computed: {
    currentMenuData () {
      return this.$store.state.menu[this.index]
    },
    ...mapState({
      option: state => state,
      menu: state => state.menu,
      currentIndex: state => state.selectedMenuIndex,
      defaultStyle: state => {
        return {
          color: state.defaultColor,
          'background-color': state.defaultBackgroundColor
        }
      }
    })
  },
  watch: {
    currentIndex () {
      this.activateCheck()
    }
  },
  created () {
    // Set default value from user data
    this.currentStyle = this.defaultStyle
  },
  mounted () {
    // Dynamic style apply (rotate degree)
    const rotateDegree = this.index * 60
    const style = `rotate(${rotateDegree}deg) skew(30deg)`
    this.$refs.menu.style.webkitTransform = style
    this.$refs.menu.style.transform = style

    // Checking activate status
    this.activateCheck()
  },
  methods: {
    /**
     * @description Check activate status
     */
    activateCheck () {
      if (this.index === this.currentIndex) {
        let color = this.currentMenuData.icon.color
        let pinColor = this.option.pin || color

        // Set active style
        this.currentStyle = {
          color,
          'background-color': this.option.activeBackgroundColor
        }
        this.$emit('onColorChange', pinColor)
      } else {
        // Set default style
        this.currentStyle = this.defaultStyle
      }
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

  .circle-menu-item__icon {
    margin: 0px 0 10px 20px;
    font-size: 3rem;
    transform: skew(-30deg) rotate(-60deg);
  }
}
</style>
