<template>
  <transition name="fade" mode="out-in">
    <div id="setting-modal">
      <div class="modal__panel">
        <div class="modal__panel__header">
          <span class="modal__panel__header__close"
            @click.self="onCloseModal">
          </span>
        </div>
        <div class="modal__panel__content">
          <div class="modal__panel__content--header">기본 설정</div>
          <div class="controll_area">
            <div class="controll_area__text">
              <div class="controll_area__text--title">페이지 제목</div>
              상단의 페이지 제목을 지정합니다
            </div>
            <div class="controll_area__switch">
              <input v-model="tempTitle">
            </div>
          </div>
          <div class="controll_area">
            <div class="controll_area__text">
              <div class="controll_area__text--title">시계 상단 여백</div>
              시계의 상단 여백을 지정합니다
            </div>
            <div class="controll_area__switch">
              <input v-model="tempClockMargin">
            </div>
          </div>
          <div class="controll_area">
            <div class="controll_area__text">
              <div class="controll_area__text--title">시간 포맷</div>
              12시간 형식을 사용합니다
            </div>
            <div class="controll_area__switch">
              <div class="checkbox" :class="{ checked: timeFormatCheck }"></div>
              <label style="margin: 0px;" @click="changeTimeFormat"></label>
            </div>
          </div>
          <div class="controll_area">
            <div class="controll_area__text">
              <div class="controll_area__text--title">오전/오후</div>
              오전, 오후 문구를 표시합니다
            </div>
            <div class="controll_area__switch">
              <div class="checkbox" :class="{ checked: tempApm }"></div>
              <label style="margin: 0px;" @click="tempApm = !tempApm"></label>
            </div>
          </div>
          <div class="controll_area">
            <div class="controll_area__text">
              <div class="controll_area__text--title">날짜</div>
              현재 날짜를 표시합니다
            </div>
            <div class="controll_area__switch">
              <div class="checkbox" :class="{ checked: tempDate }"></div>
              <label style="margin: 0px;" @click="tempDate = !tempDate"></label>
            </div>
          </div>
          <div class="controll_area">
            <div class="controll_area__text">
              <div class="controll_area__text--title">메뉴 미리보기</div>
              선택된 메뉴의 미리보기 텍스트를 표시합니다
            </div>
            <div class="controll_area__switch">
              <div class="checkbox" :class="{ checked: tempShowAlt }"></div>
              <label style="margin: 0px;" @click="tempShowAlt = !tempShowAlt"></label>
            </div>
          </div>
          <div class="controll_area">
            <div class="controll_area__text">
              <div class="controll_area__text--title">새 탭으로 열기</div>
              메뉴를 통해 링크 이동시 새 탭으로 띄웁니다
            </div>
            <div class="controll_area__switch">
              <div class="checkbox" :class="{ checked: tempNewTab }"></div>
              <label style="margin: 0px;" @click="tempNewTab = !tempNewTab"></label>
            </div>
          </div>
          <div class="modal__panel__content--header">사용자 설정</div>
          <div class="controll_area">
            <div class="controll_area__text">
              <div class="controll_area__text--title">반응형 핀 색상 활성화</div>
              활성화된 메뉴의 색상으로 핀 색상이 변경됩니다
            </div>
            <div class="controll_area__switch">
              <div class="checkbox" :class="{ checked: responsivePinCheck }"></div>
              <label style="margin: 0px;" @click="changePinOption"></label>
            </div>
            <div class="controll_area__sub_controll" v-if="!responsivePinCheck">
              <div class="controll_area__sub_controll__area single">
                <span class="title">기본 핀 색상</span>
                <color-picker v-model="tempPin"/>
              </div>
            </div>
          </div>
          <div class="controll_area">
            <div class="controll_area__text">
              <div class="controll_area__text--title">메뉴 기본 색상</div>
              활성화되지 않은 메뉴의 기본 색상 스타일을 지정합니다
            </div>
            <div class="controll_area__sub_controll">
              <div class="controll_area__sub_controll__area">
                <span class="title">배경색</span>
                <color-picker v-model="tempDefaultBackgroundColor"/>
              </div>
              <div class="controll_area__sub_controll__area">
                <span class="title">아이콘색</span>
                <color-picker v-model="tempDefaultColor"/>
              </div>
            </div>
          </div>
          <div class="controll_area">
            <div class="controll_area__text">
              <div class="controll_area__text--title">활성화 메뉴 배경색</div>
              활성화된 메뉴의 배경 색상을 지정합니다
            </div>
            <div class="controll_area__sub_controll">
              <div class="controll_area__sub_controll__area single">
                <color-picker v-model="tempActiveBackgroundColor"/>
              </div>
            </div>
          </div>
          <div class="controll_area">
            <div class="controll_area__text">
              <div class="controll_area__text--title">메뉴 사용자화</div>
              기능, 아이콘, 색상 등 메뉴를 편집합니다
            </div>
            <div class="controll_area__sub_controll">
              Menu customize
            </div>
          </div>
          <div class="controll_area">
            <div class="controll_area__text">
              <div class="controll_area__text--danger">초기화</div>
              설정을 기본값으로 초기화합니다
            </div>
            <div class="controll_area__sub_controll">
              <button class="button button--red" @click="resetUserData">초기화</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
import { Chrome } from 'vue-color'
import DEFAULT_DATA from '@/data/default'

export default {
  name: 'setting-modal',
  components: {
    'color-picker': Chrome
  },
  data () {
    return {
      tempTimeFormat: '',
      tempClockMargin: 0,
      tempApm: false,
      tempDate: false,
      tempShowAlt: false,
      tempNewTab: false,
      tempSpeed: 0,
      tempTitle: '',
      tempPin: null,
      tempDefaultColor: '',
      tempDefaultBackgroundColor: '',
      tempActiveBackgroundColor: '',
      tempMenu: []
    }
  },
  computed: {
    timeFormatCheck () {
      return this.tempTimeFormat === '12'
    },
    responsivePinCheck () {
      return !this.tempPin
    },
    ...mapState([
      'timeFormat',
      'clockMargin',
      'apm',
      'date',
      'showAlt',
      'newTab',
      'speed',
      'title',
      'pin',
      'defaultColor',
      'defaultBackgroundColor',
      'activeBackgroundColor',
      'menu'
    ])
  },
  watch: {
    tempDefaultColor (newVal) {
      if (newVal instanceof Object) {
        this.tempDefaultColor = newVal.hex
      }
    },
    tempDefaultBackgroundColor (newVal) {
      if (newVal instanceof Object) {
        this.tempDefaultBackgroundColor = newVal.hex
      }
    },
    tempActiveBackgroundColor (newVal) {
      if (newVal instanceof Object) {
        this.tempActiveBackgroundColor = newVal.hex
      }
    },
    tempPin (newVal) {
      if (!newVal === null && newVal instanceof Object) {
        this.tempPin = newVal.hex
      }
    }
  },
  created () {
    this.tempTimeFormat = this.timeFormat
    this.tempClockMargin = this.clockMargin
    this.tempApm = this.apm
    this.tempDate = this.date
    this.tempShowAlt = this.showAlt
    this.tempNewTab = this.newTab
    this.tempSpeed = this.speed
    this.tempTitle = this.title
    this.tempPin = this.pin
    this.tempDefaultColor = this.defaultColor
    this.tempDefaultBackgroundColor = this.defaultBackgroundColor
    this.tempActiveBackgroundColor = this.activeBackgroundColor
    this.tempMenu = this.menu
  },
  beforeDestroy () {
    this.saveCurrentOption()
  },
  methods: {
    /**
     * @description Emit modal close event to parent
     * @param {MouseEvent} event
     */
    onCloseModal (event) {
      // Blocking event bubbling
      event.stopPropagation()
      this.$emit('onCloseModal')
    },
    /**
     * @description Change timeformat value
     */
    changeTimeFormat () {
      if (this.tempTimeFormat === '24') {
        // 24 -> 12
        this.tempTimeFormat = '12'
      } else {
        // 12 -> 24
        this.tempTimeFormat = '24'
      }
    },
    /**
     * @description Change pin option
     */
    changePinOption () {
      if (this.tempPin === null) {
        // Default static pin color
        this.tempPin = '#1E90FF'
      } else {
        // Responsive pin option
        this.tempPin = null
      }
    },
    /**
     * @description Set vuex state value
     * @param {string} key
     * @param {any} value
     */
    setState (key, value) {
      this.$store.commit('SET_STATE', { key, value })
    },
    /**
     * @description Save current tempDatas
     */
    saveCurrentOption () {
      this.setState('timeFormat', this.tempTimeFormat)
      this.setState('clockMargin', this.tempClockMargin)
      this.setState('apm', this.tempApm)
      this.setState('date', this.tempDate)
      this.setState('showAlt', this.tempShowAlt)
      this.setState('newTab', this.tempNewTab)
      this.setState('speed', this.tempSpeed)
      this.setState('title', this.tempTitle)
      this.setState('pin', this.tempPin)
      this.setState('defaultColor', this.tempDefaultColor)
      this.setState('defaultBackgroundColor', this.tempDefaultBackgroundColor)
      this.setState('activeBackgroundColor', this.tempActiveBackgroundColor)
      this.setState('menu', this.tempMenu)
      this.$store.dispatch('SAVE_USER_DATA')
    },
    /**
     * @description Reset option data (default value)
     */
    resetUserData () {
      for (let key of Object.keys(DEFAULT_DATA.option)) {
        let target = key.charAt(0).toUpperCase() + key.slice(1)
        this['temp' + target] = DEFAULT_DATA.option[key]
      }
      this.tempMenu = DEFAULT_DATA.menu
    }
  }
}
</script>

<style lang="scss">
@import '@/common/button.scss';
@import '@/common/checkbox.scss';
@import '@/common/input.scss';

#setting-modal {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .3);

  .modal__panel {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 0 20px;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
    overflow-y: auto;
    -webkit-transform: translate(-50%, -50%);
       -moz-transform: translate(-50%, -50%);
         -o-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);

    @media only screen and (min-width: 320px), (min-width: 768px) {
      width: 90%;
      height: 90%;
    }

    @media only screen and (min-width: 1224px) {
      width: 50%;
      height: 70%;
    }

    .modal__panel__header {
      position: relative;
      width: 100%;
      height: 30px;
      padding: 5px;

      .modal__panel__header__close {
        cursor: pointer;
        position: absolute;
        display: block;
        top: 5px;
        right: -10px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #f00;
        -webkit-transition: .2s;
           -moz-transition: .2s;
             -o-transition: .2s;
                transition: .2s;

        &:hover {
          background-color: #7c0a02;
        }
      }
    }

    .modal__panel__content {
      padding: 10px;

      .modal__panel__content--header {
        font-size: 2rem;
        font-weight: bold;
        border-bottom: 2px solid #bbb;
        padding-bottom: 10px;
        margin: 10px 0;
        color: dodgerblue;
      }

      .controll_area {
        position: relative;
        display: inline-block;
        width: 100%;
        margin: 5px 0;

        .controll_area__text {
          float: left;
          color: #333;
          width: 100%;

          .controll_area__text--title {
            font-weight: bold;
            font-size: 1.2rem;
            color: #000;
          }

          .controll_area__text--danger {
            font-weight: bold;
            font-size: 1.2rem;
            color: tomato;
          }
        }

        .controll_area__switch {
          position: absolute;
          right: 0px;
        }

        .controll_area__sub_controll {
          float: left;
          width: 100%;
          margin: 10px 0;

          .controll_area__sub_controll__area {
            margin: 0;
            text-align: center;
            float: left;

            @media only screen and (min-width: 320px) {
              width: 100%;
              margin: 20px 0;
            }

            @media only screen and (min-width: 768px), (min-width: 1224px) {
              width: 50%;
            }

            &.single {
              width: 100%;
            }

            span.title {
              margin: 0 10px;
              padding: 5px 10px;
              border-radius: 5px;
              background-color: dodgerblue;
              color: #fff;
            }

            .vc-chrome {
              margin: auto;
            }
          }
        }
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
