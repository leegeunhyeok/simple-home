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
              <input v-model="title">
            </div>
          </div>
          <div class="controll_area">
            <div class="controll_area__text">
              <div class="controll_area__text--title">시계 상단 여백</div>
              시계의 상단 여백을 지정합니다
            </div>
            <div class="controll_area__switch">
              <input v-model="clockMargin">
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
              <div class="checkbox" :class="{ checked: apm }"></div>
              <label style="margin: 0px;" @click="apm = !apm"></label>
            </div>
          </div>
          <div class="controll_area">
            <div class="controll_area__text">
              <div class="controll_area__text--title">날짜</div>
              현재 날짜를 표시합니다
            </div>
            <div class="controll_area__switch">
              <div class="checkbox" :class="{ checked: date }"></div>
              <label style="margin: 0px;" @click="date = !date"></label>
            </div>
          </div>
          <div class="controll_area">
            <div class="controll_area__text">
              <div class="controll_area__text--title">메뉴 미리보기</div>
              선택된 메뉴의 미리보기 텍스트를 표시합니다
            </div>
            <div class="controll_area__switch">
              <div class="checkbox" :class="{ checked: showAlt }"></div>
              <label style="margin: 0px;" @click="showAlt = !showAlt"></label>
            </div>
          </div>
          <div class="controll_area">
            <div class="controll_area__text">
              <div class="controll_area__text--title">새 탭으로 열기</div>
              메뉴를 통해 링크 이동시 새 탭으로 띄웁니다
            </div>
            <div class="controll_area__switch">
              <div class="checkbox" :class="{ checked: newTab }"></div>
              <label style="margin: 0px;" @click="newTab = !newTab"></label>
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
                <color-picker v-model="pin"/>
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
                <color-picker v-model="defaultBackgroundColor"/>
              </div>
              <div class="controll_area__sub_controll__area">
                <span class="title">아이콘색</span>
                <color-picker v-model="defaultColor"/>
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
                <color-picker v-model="activeBackgroundColor"/>
              </div>
            </div>
          </div>
          <div class="controll_area">
            <div class="controll_area__text">
              <div class="controll_area__text--title">메뉴 사용자화</div>
              기능, 아이콘, 색상 등 메뉴를 편집합니다
            </div>
            <div class="controll_area__sub_controll">
              <drag-list class="menu_list"
                v-model="menu"
                tag="ul"
                v-bind="dragOption"
                @start="drag = true"
                @end="drag = false"
              >
                <transition-group type="transition"
                  :name="!drag ? 'flip-list' : null"
                >
                  <li class="menu_list__item"
                    v-for="(menu, i) in menu" :key="'' + i">
                    <input v-model="menu.text">
                  </li>
                </transition-group>
              </drag-list>
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
import draggable from 'vuedraggable'

import { Chrome } from 'vue-color'
import DEFAULT_DATA from '@/data/default'

export default {
  name: 'setting-modal',
  components: {
    'color-picker': Chrome,
    'drag-list': draggable
  },
  data () {
    return {
      drag: false,
      dragOption: {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      }
    }
  },
  computed: {
    timeFormatCheck () {
      return this.timeFormat === '12'
    },
    responsivePinCheck () {
      return !this.tempPin
    },
    timeFormat: {
      get () {
        return this.$store.state.timeFormat
      },
      set (value) {
        this.setState('timeFormat', value)
      }
    },
    clockMargin: {
      get () {
        return this.$store.state.clockMargin
      },
      set (value) {
        this.setState('clockMargin', value)
      }
    },
    apm: {
      get () {
        return this.$store.state.apm
      },
      set (value) {
        this.setState('apm', value)
      }
    },
    date: {
      get () {
        return this.$store.state.date
      },
      set (value) {
        this.setState('date', value)
      }
    },
    showAlt: {
      get () {
        return this.$store.state.showAlt
      },
      set (value) {
        this.setState('showAlt', value)
      }
    },
    newTab: {
      get () {
        return this.$store.state.newTab
      },
      set (value) {
        this.setState('newTab', value)
      }
    },
    speed: {
      get () {
        return this.$store.state.speed
      },
      set (value) {
        this.setState('speed', value)
      }
    },
    title: {
      get () {
        return this.$store.state.title
      },
      set (value) {
        this.setState('title', value)
      }
    },
    pin: {
      get () {
        return this.$store.state.pin
      },
      set (value) {
        this.setState('pin', value)
      }
    },
    defaultColor: {
      get () {
        return this.$store.state.defaultColor
      },
      set (value) {
        this.setState('defaultColor', value)
      }
    },
    defaultBackgroundColor: {
      get () {
        return this.$store.state.defaultBackgroundColor
      },
      set (value) {
        this.setState('defaultBackgroundColor', value)
      }
    },
    activeBackgroundColor: {
      get () {
        return this.$store.state.activeBackgroundColor
      },
      set (value) {
        this.setState('activeBackgroundColor', value)
      }
    },
    menu: {
      get () {
        return this.$store.state.menu
      },
      set (value) {
        this.setState('menu', value)
      }
    }
  },
  watch: {
    defaultColor (newVal) {
      if (newVal instanceof Object) {
        this.defaultColor = newVal.hex
      }
    },
    defaultBackgroundColor (newVal) {
      if (newVal instanceof Object) {
        this.defaultBackgroundColor = newVal.hex
      }
    },
    activeBackgroundColor (newVal) {
      if (newVal instanceof Object) {
        this.activeBackgroundColor = newVal.hex
      }
    },
    pin (newVal) {
      if (!newVal === null && newVal instanceof Object) {
        this.pin = newVal.hex
      }
    }
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
      if (this.timeFormat === '24') {
        // 24 -> 12
        this.timeFormat = '12'
      } else {
        // 12 -> 24
        this.timeFormat = '24'
      }
    },
    /**
     * @description Change pin option
     */
    changePinOption () {
      if (this.pin === null) {
        // Default static pin color
        this.pin = '#1E90FF'
      } else {
        // Responsive pin option
        this.pin = null
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
      this.$store.dispatch('SAVE_USER_DATA')
      this.$store.dispatch('SAVE_MENU_DATA')
    },
    /**
     * @description Reset option data (default value)
     */
    resetUserData () {
      for (let key of Object.keys(DEFAULT_DATA.option)) {
        this[key] = DEFAULT_DATA.option[key]
      }
      this.menu = DEFAULT_DATA.menu
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

          .menu_list {
            display: inline-block;
            padding: 0;
            border-radius: 10px;
            box-shadow: 0 0 5px rgba(0, 0, 0, .3);

            .menu_list__item {
              cursor: move;
              padding: 8px 16px;
              list-style: none;
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

.ghost {
  opacity: .5;
  background: #c8ebfb;
}
</style>
