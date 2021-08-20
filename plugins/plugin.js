import Vue from 'vue'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import InnerImageZoom from 'vue-inner-image-zoom'
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css'

import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import Vuelidate from 'vuelidate'
import VueApexCharts from 'vue-apexcharts'

require('vue2-animate/dist/vue2-animate.min.css')

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faCloudUploadAlt, faPlus, faTrash, faTimes, faSave, faEdit, faSignOutAlt, faUserPlus, faChevronLeft, faChevronRight, faUserCircle } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret, faCloudUploadAlt, faPlus, faTrash, faTimes, faSave, faEdit, faSignOutAlt, faUserPlus, faChevronLeft, faChevronRight, faUserCircle)

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueAwesomeSwiper)
Vue.component('inner-image-zoom', InnerImageZoom)
Vue.use(VueSidebarMenu)
Vue.use(Vuelidate)
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
Vue.component('VueSlider', VueSlider)