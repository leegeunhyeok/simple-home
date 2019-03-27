<template>
  <div id="circle-wrap">
    <div id="circle" class="circle-menu" ref="menu">
      <CircleMenuItem
        v-for="(index, i) in menus"
        :index="i"
        :key="i"
      />
    </div>
    <div class="circle-wrap__pin" :style="pinStyle"></div>
  </div>
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
    degree: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      menus: new Array(6),
      currentIndex: 0,
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
    degree (newValue) {
      this.changeRotateStatus()
      this.changeSelectMenu()
    },
    currentIndex (newValue) {
      this.$store.commit('SET_SELECTED_MENU', newValue)
    }
  },
  created () {
    this.pinStyle['backgroundColor'] = this.userData.option['pin']
  },
  mounted () {
    this.changeRotateStatus()
  },
  methods: {
    changeRotateStatus () {
      this.$refs.menu.style.transform = `rotate(${this.degree}deg)`
    },
    changeSelectMenu () {
      let rotateCount = parseInt((this.degree / 60) / 6)
      let index = 1 - parseInt((this.degree + 30) / 60)
      index += 6 * (rotateCount + 1)
      if (index >= 6) {
        index -= 6
      }
      this.currentIndex = index
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
  }
}
</style>
