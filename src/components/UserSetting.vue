<template>
  <div>
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
        <div class="controll_area__sub_controll__area">
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
                <font-awesome-icon icon="bars"/>
                <input class="menu_list__item--text" v-model="menu.text">
                <div class="menu_list__item--color"
                  @click="changeIconColor(i)"
                >
                  <font-awesome-icon
                    :icon="[menu.icon.type, menu.icon.name]"
                    :style="{ color: menu.icon.color }"
                  />
                </div>
              </li>
            </transition-group>
          </drag-list>
        </div>
        <div class="controll_area__sub_controll__area">
          <transition name="preview-slide" mode="out-in">
            <div class="menu_preview" :key="0" v-if="preview">
              <div class="menu_preview__item"
                :style="{
                  color: menu.icon.color,
                  transform: `rotate(${i * 60}deg) skew(30deg)`
                }"
                v-for="(menu, i) in menu" :key="i"
              >
                <font-awesome-icon
                  class="menu_preview__item__icon"
                  :icon="[menu.icon.type, menu.icon.name]"
                />
              </div>
            </div>
            <div class="icon-color-picker-area"
              :key="1" v-else
            >
              <color-picker
                v-model="tempColor"
              />
              <button
                class="button button--blue color-submit-button"
                @click="colorSubmit"
              >확인</button>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import { Chrome } from 'vue-color'

export default {
  name: 'user-setting',
  components: {
    'color-picker': Chrome,
    'drag-list': draggable
  },
  data () {
    return {
      preview: true,
      drag: false,
      dragOption: {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      },
      tempIndex: 0,
      tempColor: '',
      tempIcon: '',
      tempType: ''
    }
  },
  computed: {
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
    },
    responsivePinCheck () {
      return !this.pin
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
    },
    tempColor (newVal) {
      if (newVal instanceof Object) {
        this.tempColor = newVal.hex
      }
    }
  },
  methods: {
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
    changeIconColor (index) {
      let targetMenu = this.menu[index]
      this.tempIndex = index
      this.tempColor = targetMenu.icon.color
      this.tempIcon = targetMenu.icon.name
      this.tempType = targetMenu.icon.type
      this.preview = false
    },
    colorSubmit () {
      this.menu[this.tempIndex].icon.color = this.tempColor
      this.menu[this.tempIndex].icon.icon = this.tempIcon
      this.menu[this.tempIndex].icon.type = this.tempType
      this.preview = true
    },
    /**
     * @description Set vuex state value
     * @param {string} key
     * @param {any} value
     */
    setState (key, value) {
      this.$store.commit('SET_STATE', { key, value })
    }
  }
}
</script>

<style lang="scss">

.icon-color-picker-area {
  padding-top: 1.4rem;

  .color-submit-button {
    margin-top: 1rem;
  }
}

.preview-slide-enter-active, .preview-slide-leave-active {
  transition: .5s;
}

.preview-slide-enter, .preview-slide-leave-to {
  -webkit-transform: translateX(300px);
     -moz-transform: translateX(300px);
       -o-transform: translateX(300px);
          transform: translateX(300px);
  opacity: 0;
}
</style>
