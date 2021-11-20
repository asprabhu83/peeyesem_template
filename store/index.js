import Vue from 'vue'
import Vuex from 'vuex'
import products from './module/products'
import cart from './module/cart'

Vue.use(Vuex)
const createStore = () => {
  return new Vuex.Store({
    state:{
      currentYear:new Date().getFullYear(),
      cars:[],
      originalDataCars:[],
      carCategory:[],
      HeaderData:{
        logo:'',
        fbLink:'',
        instaLink:'',
        youtubeLink:'',
        linkedInLink:'',
        buisnessLink:'',
        salesNo:'',
        serviceNo:'',
        whatsappNo:''
      },
      TestimonialData:[],
      BlogsData:[],
      SliderBanners:[],
      newsEvents:[]
    },
    modules: {
      products: products,
      cart: cart,
    }
  })
}
export default createStore