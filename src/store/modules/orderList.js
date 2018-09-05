import Vue from 'vue'
import {getAppData} from 'api@/list-api'
const state = {
   orderList: [],
   params: {}
}

const getters = {
   getOrderList:  state => state.orderList
}

const actions = {
   fetchOrderList ({commit, state}) {
     getAppData(state.params).then((rst) => {
       state.orderList = rst.data.data.getOrderList.list
     }).catch((err) => {
       console.log(err)
     })
   }

}

const mutations = {
  changeOrderList (state, payload) {
    state.orderList = payload
  },
  updateParams (state, {key, val}) {
    state.params[key] = val
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
