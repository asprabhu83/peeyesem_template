import Vue from 'vue'
import Vuex from 'vuex'
import products from './module/products'
import cart from './module/cart'

Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    state:{
      currentYear:new Date().getFullYear(),
    },
    modules: {
      products: products,
      cart: cart,
    }
  })
}
export default createStore