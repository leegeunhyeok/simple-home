<template>
  <div id="clock-panel">
    <div class="clock-panel__hour time">
      {{ hour }}
    </div>
    <div class="time"> : </div>
    <div class="clock-panel__minute time">
      {{ minute }}
    </div>
    <div class="time"> : </div>
    <div class="clock-panel__second time">
      {{ second }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'clocl-view',
  data () {
    return {
      hour: '',
      minute: '',
      second: '',
      expected: 0
    }
  },
  created () {
    this.updateTime()
    this.expected = Date.now() + 1000
    setTimeout(this.timer, 1000)
  },
  methods: {
    timer () {
      let currentTime = Date.now()
      this.updateTime()
      let deltaTime = currentTime - this.expected
      this.expected += 1000
      setTimeout(this.timer, Math.max(0, 1000 - deltaTime))
    },
    updateTime () {
      let currentDate = new Date()

      this.hour = this.paddingZero(currentDate.getHours())
      this.minute = this.paddingZero(currentDate.getMinutes())
      this.second = this.paddingZero(currentDate.getSeconds())
    },
    paddingZero (number) {
      if (number.toString().length === 2) {
        return '' + number
      } else {
        return '0' + number
      }
    }
  }
}
</script>

<style lang="scss">
#clock-panel {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 180px;

  .time {
    float: left;
    color: #fff;
    font-size: 5rem;
  }
}
</style>
