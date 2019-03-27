<template>
  <transition name="fade" mode="out-in">
    <div id="setting-modal">
      <div class="modal__panel">

      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'setting-modal'
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
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
