<template>
  <div id="circle-wrap">
    <div id="circle" class="circle-menu" ref="menu">

    </div>
  </div>
</template>

<script>
export default {
  name: 'circle-menu',
  props: {
    degree: {
      type: Number,
      required: true
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
    overflow: hidden;
  }
}
</style>
