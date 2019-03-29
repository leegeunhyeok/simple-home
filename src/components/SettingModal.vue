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
              오전, 오후 문구를 시간 옆에 표시합니다
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
              <div class="controll_area__text--title">반응형 핀 색상</div>
              선택한 메뉴의 색상으로 핀 색상이 변경됩니다
            </div>
            <div class="controll_area__switch">
              <div class="checkbox" :class="{ checked: responsivePinCheck }"></div>
              <label style="margin: 0px;" @click="changePinOption"></label>
            </div>
            <div class="controll_area__sub_controll" v-if="!responsivePinCheck">
              <div class="controll_area__sub_controll__area">
                <span class="title">고정 핀 색상</span>
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
              <div class="controll_area__text--title">메뉴 활성화 색상</div>
              선택된 메뉴의 색상 스타일을 지정합니다
            </div>
            <div class="controll_area__sub_controll">
              <div class="controll_area__sub_controll__area">
                <span class="title">배경색</span>
                <color-picker v-model="activeBackgroundColor"/>
              </div>
              <div class="controll_area__sub_controll__area">
                <span class="title">아이콘색</span>
                <color-picker v-model="activeColor"/>
              </div>
            </div>
          </div>
          <div class="controll_area">
            <div class="controll_area__text">
              <div class="controll_area__text--title">메뉴 사용자화</div>
              기능, 아이콘, 색상 등 메뉴를 편집합니다
            </div>
          </div>
          <div class="controll_area">
            Menu customize
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { Chrome } from 'vue-color'

export default {
  name: 'setting-modal',
  components: {
    'color-picker': Chrome
  },
  data () {
    return {
      // Copied user option values (temp)
      timeFormat: '24',
      apm: true,
      date: true,
      showAlt: true,
      newTab: false,
      pin: {
        hex: '#1e90ff'
      },
      speed: 2,
      title: 'Simple Home 🏠',
      defaultColor: {
        hex: '#555555'
      },
      defaultBackgroundColor: {
        hex: '#ffffff'
      },
      activeColor: {
        hex: '#555555'
      },
      activeBackgroundColor: {
        hex: '#eeeeee'
      },
      menu: [
        {
          text: 'Picture',
          icon: {
            type: 'fas',
            name: 'image',
            color: '#2e8b57'
          },
          action: {
            type: 'url',
            url: 'https://www.pinterest.co.kr'
          }
        },
        {
          text: 'Home',
          icon: {
            type: 'fas',
            name: 'home',
            color: 'dodgerblue'
          },
          action: {
            type: 'url',
            url: 'https://www.naver.com'
          }
        },
        {
          text: 'Google',
          icon: {
            type: 'fab',
            name: 'google',
            color: '#f9d71c'
          },
          action: {
            type: 'url',
            url: 'https://www.google.com'
          }
        },
        {
          text: 'Youtube',
          icon: {
            type: 'fab',
            name: 'youtube',
            color: '#ff0000'
          },
          action: {
            type: 'url',
            url: 'https://www.youtube.com'
          }
        },
        {
          text: 'Setting',
          icon: {
            type: 'fas',
            name: 'cog',
            color: '#7851a9'
          },
          action: {
            type: 'setting'
          }
        },
        {
          text: 'Facebook',
          icon: {
            type: 'fab',
            name: 'facebook',
            color: '#3b5998'
          },
          action: {
            type: 'url',
            url: 'https://facebook.com'
          }
        }
      ]
    }
  },
  computed: {
    timeFormatCheck () {
      return this.timeFormat === '12'
    },
    responsivePinCheck () {
      return !this.pin
    }
  },
  created () {

  },
  beforeDestroy () {

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
    changeTimeFormat (event) {
      // Blocking event bubbling
      event.stopPropagation()
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
     * @param {MouseEvent} event
     */
    changePinOption (event) {
      event.stopPropagation()
      if (this.pin === null) {
        // Default static pin color
        this.pin = '#1e90ff'
      } else {
        // Responsive pin option
        this.pin = null
      }
    },
    saveCurrentOption () {

    }
  }
}
</script>

<style lang="scss">
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
        display: inline-block;
        width: 100%;
        margin: 5px 0;

        .controll_area__text {
          float: left;
          color: #333;
          width: 80%;

          .controll_area__text--title {
            font-weight: bold;
            font-size: 1.2rem;
            color: #000;
          }
        }

        .controll_area__switch {
          float: right;
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
