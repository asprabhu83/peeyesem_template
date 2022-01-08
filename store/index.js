import Vue from 'vue'
import Vuex from 'vuex'

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
      newsEvents:[],
      success_msg:'Success!!',
      empty_error_msg:'Invalid Data',
      email_error_msg:'Invalid Email',
      emailRegex:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
  })
}
export default createStore