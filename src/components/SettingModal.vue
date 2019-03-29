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
              <input v-model="option.title">
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
              오전, 오후 문구를 시간 옆에 표시합니다
            </div>
            <div class="controll_area__switch">
              <div class="checkbox" :class="{ checked: option.apm }"></div>
              <label style="margin: 0px;" @click="option.apm = !option.apm"></label>
            </div>
          </div>
          <div class="controll_area">
            <div class="controll_area__text">
              <div class="controll_area__text--title">날짜</div>
              현재 날짜를 표시합니다
            </div>
            <div class="controll_area__switch">
              <div class="checkbox" :class="{ checked: option.date }"></div>
              <label style="margin: 0px;" @click="option.date = !option.date"></label>
            </div>
          </div>
          <div class="controll_area">
            <div class="controll_area__text">
              <div class="controll_area__text--title">메뉴 미리보기</div>
              선택된 메뉴의 미리보기 텍스트를 표시합니다
            </div>
            <div class="controll_area__switch">
              <div class="checkbox" :class="{ checked: option.showAlt }"></div>
              <label style="margin: 0px;" @click="option.showAlt = !option.showAlt"></label>
            </div>
          </div>
          <div class="controll_area">
            <div class="controll_area__text">
              <div class="controll_area__text--title">새 탭으로 열기</div>
              메뉴를 통해 링크 이동시 새 탭으로 띄웁니다
            </div>
            <div class="controll_area__switch">
              <div class="checkbox" :class="{ checked: option.newTab }"></div>
              <label style="margin: 0px;" @click="option.newTab = !option.newTab"></label>
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
                <color-picker v-model="option.pin"/>
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
                <color-picker v-model="option.defaultBackgroundColor"/>
              </div>
              <div class="controll_area__sub_controll__area">
                <span class="title">아이콘색</span>
                <color-picker v-model="option.defaultColor"/>
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
                <color-picker v-model="option.activeBackgroundColor"/>
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

console.log(DEFAULT_DATA)

export default {
  name: 'setting-modal',
  components: {
    'color-picker': Chrome
  },
  data () {
    return {
      menu: null,
      option: null
    }
  },
  computed: {
    timeFormatCheck () {
      return this.option.timeFormat === '12'
    },
    responsivePinCheck () {
      return !this.option.pin.hex
    },
    ...mapState({
      userData: state => state.userData
    })
  },
  created () {
    this.menu = this.userData.menu
    this.option = this.userData.option
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
    changeTimeFormat (event) {
      // Blocking event bubbling
      event.stopPropagation()
      if (this.option.timeFormat === '24') {
        // 24 -> 12
        this.option.timeFormat = '12'
      } else {
        // 12 -> 24
        this.option.timeFormat = '24'
      }
    },
    /**
     * @description Change pin option
     * @param {MouseEvent} event
     */
    changePinOption (event) {
      event.stopPropagation()
      if (this.option.pin.hex === null) {
        // Default static pin color
        this.option.pin.hex = '#1e90ff'
      } else {
        // Responsive pin option
        this.option.pin.hex = null
      }
    },
    saveCurrentOption () {
      this.$store.commit('SET_USER_DATA', this.$data)
      this.$store.dispatch('SET_USER_DATA')
    },
    resetUserData () {
      if (confirm('초기화 하시겠습니까?')) {
        this.menu = DEFAULT_DATA.menu
        this.option = DEFAULT_DATA.option
        this.$store.commit('SET_USER_DATA', DEFAULT_DATA)
        this.$store.dispatch('SET_USER_DATA')
      }
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
