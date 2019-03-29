<template>
  <div class="circle-menu-item" ref="menu"
    :style="currentStyle"
  >
    <font-awesome-icon class="circle-menu-item__icon"
      :icon="[menuData.icon.type, menuData.icon.name]"
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
      defaultStyle: {
        backgroundColor: '#fff',
        color: '#000'
      },
      activeStyle: {
        backgroundColor: '#eee',
        color: 'dodgerblue'
      },
      currentStyle: {}
    }
  },
  computed: {
    menuData () {
      return this.$store.state.userData.menu[this.index]
    },
    ...mapState({
      userData: state => state.userData,
      currentIndex: state => state.selectedMenuIndex
    })
  },
  watch: {
    currentIndex () {
      this.activateCheck()
    }
  },
  created () {
    // Set default value from user data
    this.defaultStyle = this.userData.option['default']
    this.activeStyle = this.userData.option['active']
    this.currentStyle = this.defaultStyle
  },
  mounted () {
    // Dynamic style apply (rotate degree)
    let rotateDegree = this.index * 60
    this.$refs.menu.style.transform = `rotate(${rotateDegree}deg) skew(30deg)`
    
    // Checking activate status
    this.activateCheck()
  },
  methods: {
    /**
     * @description Check activate status
     */
    activateCheck () {
      if (this.index === this.currentIndex) {
        // Set active style
        this.currentStyle = this.activeStyle
        this.currentStyle.color = this.menuData.icon.color

        // If responsive pin option is on
        if (!this.userData.option.pin) {
          this.$emit('onColorChange', this.menuData.icon.color)
        }
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
