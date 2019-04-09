<template>
  <transition name="alert" mode="out-in">
    <div id="alert"
      @click.stop=""
      @mousemove.stop=""
    >
      <div class="alert__meesage-area">
        Simple home 개선을 위해 사용량 정보를 서버로 전송합니다.
      </div>
      <div class="alert__button-area">
        <button class="alert__button--deny"
          @click.stop="$emit('onClose')"
        >거부</button>
        <button class="alert__button--allow"
          @click.stop="$emit('onAllow')"
        >허가</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {

}
</script>

<style lang="scss">
#alert {
  position: fixed;
  top: 0;
  left: 50%;
  padding: 0 20px;
  padding-top: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
  overflow: hidden;
  -webkit-transform: translateX(-50%);
     -moz-transform: translateX(-50%);
       -o-transform: translateX(-50%);
          transform: translateX(-50%);

  .alert__meesage-area {
    color: #222;
  }

  .alert__button-area {
    text-align: right;

    button {
      cursor: pointer;
      outline: none;
      border: none;
      border-radius: 5px;
      margin: 10px 0;
      margin-left: 5px;
    }

    .alert__button--deny {
      background-color: #fff;
      color: #888;

      &:hover {
        background-color: #ccc;
        color: #555;
      }
    }

    .alert__button--allow {
      background-color: dodgerblue;
      color: #fff;

      &:hover {
        background-color: #1873cc;
        color: #fff;
      }
    }
  }
}

.alert-enter-active, .alert-leave-active {
  transition: .5s;
}

.alert-enter, .alert-leave-to {
  opacity: 0;
}
</style>
