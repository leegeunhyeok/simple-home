<template>
  <transition name="slide" mode="out-in">
    <div id="circle-wrap">
      <div id="circle" class="circle-menu" ref="menu">
        <CircleMenuItem
          v-for="(index, i) in menus"
          @onColorChange="changePinColor"
          :defaultStyle="origin"
          :activeStyle="active"
          :index="i"
          :key="i"
        />
      </div>
      <div class="circle-wrap__pin" :style="pinStyle"></div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
import CircleMenuItem from '@/components/CircleMenuItem'

export default {
  name: 'circle-menu',
  components: {
    CircleMenuItem
  },
  props: {
    // Menu rotate degree
    degree: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      menus: new Array(6),
      currentIndex: 0,
      origin: {
        backgroundColor: '#fff',
        color: '#000'
      },
      active: {
        backgroundColor: '#eee'
      },
      pinStyle: {
        backgroundColor: 'dodgerblue'
      }
    }
  },
  computed: {
    ...mapState({
      userData: state => state.userData
    })
  },
  watch: {
    // Change menu rotate degree and
    // update selected index after degree was changed
    degree (newValue) {
      this.changeRotateStatus()
      this.changeSelectMenu()
    },
    // Set current index value to vuex
    currentIndex (newValue) {
      this.$store.commit('SET_SELECTED_MENU', newValue)
    },
    // Update menu style after option changed
    userData () {
      this.updateMenuStyle()
    }
  },
  created () {
    this.updateMenuStyle()
  },
  mounted () {
    this.changeRotateStatus()
  },
  methods: {
    /**
     * @description Set menu style
     */
    updateMenuStyle () {
      // Set pin color and default, active style
      this.pinStyle.backgroundColor = this.userData.option.pin.hex
      this.origin.color = this.userData.option.defaultColor.hex
      this.origin.backgroundColor = this.userData.option.defaultBackgroundColor.hex
      this.active.backgroundColor = this.userData.option.activeBackgroundColor.hex
    },
    /**
     * @description Change menu rotate degree
     */
    changeRotateStatus () {
      this.$refs.menu.style.transform = `rotate(${this.degree}deg)`
    },
    /**
     * @description Update selected menu index
     */
    changeSelectMenu () {
      let rotateCount = parseInt((this.degree / 60) / 6)
      let index = 1 - parseInt((this.degree + 30) / 60)
      index += 6 * (rotateCount + 1)
      if (index >= 6) {
        index -= 6
      }
      this.currentIndex = index
    },
    /**
     * @description Change pin color
     * @param {string} color color code
     */
    changePinColor (color) {
      this.pinStyle.backgroundColor = color
    }
  }
}
</script>

<style lang="scss">

#circle-wrap {
  position: absolute;
  bottom: -200px;
  left: 50%;
  width: 400px;
  height: 400px;
  -webkit-transform: translateX(-50%);
     -moz-transform: translateX(-50%);
       -o-transform: translateX(-50%);
          transform: translateX(-50%);

  .circle-menu {
    width: 400px;
    height: 400px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, .2);
    overflow: hidden;
    -webkit-transition: box-shadow .3s;
       -moz-transition: box-shadow .3s;
         -o-transition: box-shadow .3s;
            transition: box-shadow .3s;

    &:hover {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, .2);
    }
  }

  .circle-wrap__pin {
    position: absolute;
    bottom: 180px;
    left: 175px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    -webkit-transition: background-color .3s;
       -moz-transition: background-color .3s;
         -o-transition: background-color .3s;
            transition: background-color .3s;
  }
}

.slide-enter-active, .slide-leave-active {
  transition: .5s;
}

.slide-enter, .slide-leave-to {
  -webkit-transform: translate(-50%, 300px) !important;
     -moz-transform: translate(-50%, 300px) !important;
       -o-transform: translate(-50%, 300px) !important;
          transform: translate(-50%, 300px) !important;
  opacity: 0;
}
</style>
