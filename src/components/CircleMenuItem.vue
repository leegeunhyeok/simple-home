<template>
  <div class="circle-menu-item" ref="menu"
    :class="{ active: isActive }"
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
    menuData () {
      return this.$store.state.userData.menu[this.index]
    },
    ...mapState({
      currentIndex: state => state.selectedMenuIndex
    })
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

  .circle-menu-item__icon {
    margin: 0px 0 10px 20px;
    font-size: 3rem;
    transform: skew(-30deg) rotate(-60deg);
  }
}
</style>
