import Vuex from 'vuex'
import Vue from 'vue'
import orderList from './modules/orderList'
import language from './modules/language'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    orderList,
    language
  }
})
