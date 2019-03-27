<template>
  <transition name="fade" mode="out-in">
    <div id="setting-modal">
      <div class="modal__panel">
        <div class="modal__panel__header">
          <span class="modal__panel__header__close"
            @click="onCloseModal">
          </span>
        </div>
        <div class="modal__panel__content">
          
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'setting-modal',
  methods: {
    onCloseModal (event) {
      // TODO: Bubbling fix
      console.log(event)
      event.preventDefault()
      this.$emit('onCloseModal')
    }
  }
}
</script>

<style lang="scss">
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
