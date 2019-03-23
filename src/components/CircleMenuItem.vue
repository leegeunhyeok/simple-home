<template>
  <div class="circle-menu-item" ref="menu">

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
  created () {
    console.log(this.index)
  },
  mounted () {
    let rotateDegree = this.index * 60
    this.$refs.menu.style.transform = `rotate(${rotateDegree}deg) skew(30deg)`
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
}
</style>
