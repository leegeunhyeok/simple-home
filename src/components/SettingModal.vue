<template>
  <transition name="fade" mode="out-in">
    <div id="setting-modal" @click.stop="">
      <div class="modal__panel">
        <div class="modal__panel__header">
          <span class="modal__panel__header__close"
            @click.stop="onCloseModal">
          </span>
        </div>
        <div class="modal__panel__content">
          <default-setting/>
          <user-setting/>
          <div class="controll_area">
            <div class="controll_area__text">
              <div class="controll_area__text--danger">초기화</div>
              설정을 기본값으로 초기화합니다
            </div>
            <div class="controll_area__sub_controll">
              <button class="button button--red"
                @click.stop="resetUserData"
              >초기화</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import DefaultSetting from '@/components/DefaultSetting'
import UserSetting from '@/components/UserSetting'

export default {
  name: 'setting-modal',
  components: {
    'default-setting': DefaultSetting,
    'user-setting': UserSetting
  },
  beforeDestroy () {
    this.saveCurrentOption()
  },
  methods: {
    /**
     * @description Emit modal close event to parent
     */
    onCloseModal () {
      this.$emit('onCloseModal')
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
      this.$store.commit('RESET_DATA')
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
    overflow-x: hidden;
    -webkit-transform: translate(-50%, -50%);
       -moz-transform: translate(-50%, -50%);
         -o-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);

    @media only screen and (min-width: 320px), (min-width: 768px) {
      width: 90%;
      height: 90%;
    }

    @media only screen and (min-width: 1224px) {
      width: 62%;
      height: 70%;
    }

    @media only screen and (min-width: 1600px) {
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

            .menu_list {
              display: inline-block;
              padding: 10px 0;
              border-radius: 10px;
              box-shadow: 0 0 5px rgba(0, 0, 0, .3);

              .menu_list__item {
                cursor: move;
                padding: 8px 16px;
                list-style: none;

                .menu_list__item--text {
                  margin-left: 15px;
                }

                .menu_list__item--color {
                  cursor: pointer;
                  width: 2.5rem;
                  margin-left: 10px;
                  font-size: 2rem;
                  float: right;
                  text-align: center;
                }

                .menu_list__item--more {
                  cursor: pointer;
                  margin-top: .4rem;
                  margin-left: .4rem;
                  width: 1.5rem;
                  float: right;
                  -webkit-transition: .2s;
                     -moz-transition: .2s;
                       -o-transition: .2s;
                          transition: .2s;

                  &.active {
                    transform: rotate(90deg);
                  }
                }

                .menu_list__item--detail {
                  width: 100%;
                  padding-right: 3.1rem;
                  max-height: 0;
                  overflow: hidden;
                  -webkit-transition: max-height .3s ease-out;
                     -moz-transition: max-height .3s ease-out;
                       -o-transition: max-height .3s ease-out;
                          transition: max-height .3s ease-out;

                  &.active {
                    max-height: 500px;
                    -webkit-transition: max-height .3s ease-in;
                       -moz-transition: max-height .3s ease-in;
                         -o-transition: max-height .3s ease-in;
                            transition: max-height .3s ease-in;
                  }

                  .menu_list__item__controll {
                    float: right;
                    margin: 10px 0;
                  }
                }
              }
            }

            .menu_preview {
              position: relative;
              width: 300px;
              height: 300px;
              margin: auto;
              margin-top: 1.2rem;
              border-radius: 50%;
              box-shadow: 0px 0px 5px rgba(0, 0, 0, .2);
              overflow: hidden;

              .menu_preview__item {
                position: absolute;
                width: 150px;
                height: 150px;
                transform-origin: 100% 100%;
                text-align: center;
                border: 1px solid #eee;

                .menu_preview__item__icon {
                  margin-top: 5.2rem;
                  margin-left: 2rem;
                  font-size: 2rem;
                  transform: skew(-30deg) rotate(-60deg);
                }
              }
            }

            .icon-color-picker-area {

              .icon-list {
                float: right;
                width: 100%;
                overflow-x: scroll;
                overflow-y: hidden;
                white-space: nowrap;
                height: 5rem;
                box-shadow: 0 0 5px rgba(0, 0, 0, .2);

                .icon-list__item {
                  cursor: pointer;
                  display: inline-block;
                  width: 4rem;
                  height: 4rem;
                  font-size: 3rem;
                  text-align: center;
                  vertical-align: top;
                  -webkit-transition: .2s;
                     -moz-transition: .2s;
                       -o-transition: .2s;
                          transition: .2s;

                  &:hover {
                    color: dodgerblue;
                  }
                }
              }
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
