import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    screenWidth: 0,
    selectedMenuIndex: 0
  },
  mutations,
  actions
})
