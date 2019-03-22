<template>
  <div id="circle-wrap">
    <div id="circle" class="circle-menu" ref="menu">
      <CircleMenuItem
        v-for="(index, i) in menus"
        :index="i"
        :key="i"
      />
    </div>
    <div class="circle-wrap__pin">

    </div>
  </div>
</template>

<script>
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
      menus: new Array(6)
    }
  },
  watch: {
    degree (newValue) {
      this.changeRotateStatus()
    }
  },
  mounted () {
    this.changeRotateStatus()
  },
  methods: {
    changeRotateStatus () {
      this.$refs.menu.style.transform = `rotate(${ this.degree }deg)`
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
    bottom: 175px;
    left: 175px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: #fff;
  }
}
</style>
