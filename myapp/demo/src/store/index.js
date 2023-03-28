import Vue from 'vue'
import Vuex from 'vuex'
import buy from './modules/buy'
import buynew from './modules/buynew'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },
  getters: {
  
  },
  mutations: {
   

  },
  actions: {
  },
  modules: {
    buy,
    buynew
  }
})
