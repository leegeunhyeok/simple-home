<template>
  <div id="clock-panel" :style="{ 'margin-top': `${clockMargin}px` }">
    <div class="clock-panel__apm time" v-if="stateApm">
      {{ apm }}
    </div>
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
    <div class="clock-panel__date date" v-if="stateDate">
      {{ `${year}.${month}.${day}` }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'clocl-view',
  data () {
    return {
      apm: '',
      year: '',
      month: '',
      day: '',
      hour: '',
      minute: '',
      second: '',
      expected: 0
    }
  },
  computed: mapState({
    clockMargin: 'clockMargin',
    stateApm: 'apm',
    stateDate: 'date'
  }),
  created () {
    // Update current time and activate timer
    this.updateTime()
    this.expected = Date.now() + 1000
    setTimeout(this.timer, 1000)
  },
  methods: {
    /**
     * @description Timer
     */
    timer () {
      let currentTime = Date.now()
      this.updateTime()
      let deltaTime = currentTime - this.expected
      this.expected += 1000
      setTimeout(this.timer, Math.max(0, 1000 - deltaTime))
    },
    /**
     * @description Update current time value
     */
    updateTime () {
      let currentDate = new Date()
      let hour = currentDate.getHours()
      this.year = currentDate.getFullYear()
      this.month = this.paddingZero(currentDate.getMonth() + 1)
      this.day = this.paddingZero(currentDate.getDate())

      if (this.stateApm) {
        this.apm = hour < 12 ? '오전' : '오후'
        this.hour = this.paddingZero(hour <= 12 ? hour : hour - 12)
      } else {
        this.hour = this.paddingZero(currentDate.getHours())
      }

      this.minute = this.paddingZero(currentDate.getMinutes())
      this.second = this.paddingZero(currentDate.getSeconds())
    },
    /**
     * @description Append zero
     * @param {number} number Target number
     * @return {string} 00 format string
     */
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
  -webkit-transform: translateX(-50%);
     -moz-transform: translateX(-50%);
       -o-transform: translateX(-50%);
          transform: translateX(-50%);

  .clock-panel__apm {
    margin-right: 20px;
  }

  .time {
    float: left;
    color: #fff;
    font-size: 5rem;
  }

  .date {
    text-align: center;
    color: #fff;
    font-size: 2.2rem;
  }
}
</style>
