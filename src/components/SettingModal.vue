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
          <div class="controll_area">
            <div class="checkbox" :class="{ checked: timeFormat === '12' }"></div>
            <label style="margin: 0px;" @click="changeTimeFormat"></label>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'setting-modal',
  computed: {
    timeFormat () {
      // TODO: Vuex object value change issue
      return this.$store.getters.userOption.timeFormat
    }
  },
  methods: {
    onCloseModal (event) {
      event.stopPropagation()
      this.$emit('onCloseModal')
    },
    changeTimeFormat(event) {
      event.stopPropagation()
      if (this.timeFormat === '24') {
        this.$store.commit('SET_OPTION', {
          key: 'timeFormat',
          value: '12'
        })
      } else {
        this.$store.commit('SET_OPTION', {
          key: 'timeFormat',
          value: '24'
        })
      }
      this.$store.dispatch('SET_USER_DATA')
      console.log(this.timeFormat)
    }
  }
}
</script>

<style lang="scss">
@import '@/common/checkbox.scss';

#setting-modal {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .3);

  .modal__panel {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 70%;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);

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
        right: 5px;
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

      .controll_area {
        margin: 10px 0;
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
