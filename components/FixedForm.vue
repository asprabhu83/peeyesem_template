<template>
  <div>
      <div class="fixed_form_sec">
        <div class="text-uppercase font-semibold text-white form1 form_div" @click="formModal = true"><img class="mx-2" :src="require('@/assets/img/vehicle.png')" alt="img"  /><div class="sub_form1 sub_form_div">Book a car</div></div>
        <nuxt-link class="text-uppercase font-semibold text-white form2 form_div" to="/contact-us/test-drive/"><img class="mx-2" :src="require('@/assets/img/steering-wheel.svg')" alt="img" style="width:32px;"  /> <div class="sub_form2 sub_form_div">Book a test drive</div></nuxt-link>
        <div class="text-uppercase font-semibold text-white form3 form_div" @click="formModal2 = true"><font-awesome-icon icon="tools"  size="2x" class="text-white spanner_icon mx-2" /> <div class="sub_form3 sub_form_div">Book a service</div></div>
        <div class="text-uppercase font-semibold text-white form4 form_div" @click="formModal4 = true"><img class="mx-2" :src="require('@/assets/img/book_service.png')" alt="img" style="width:32px;"  /> <div class="sub_form4 sub_form_div">Request a callback</div></div>
        <a class="text-uppercase font-semibold text-white form5 form_div" :href="'https://api.whatsapp.com/send?phone='+ whatsappLink" target="_blank"><img class="mx-2" :src="require('@/assets/img/whatsapp_mob.png')" alt="img" style="width:32px;"  /> <div class="sub_form5 sub_form_div">Whatsapp Us</div></a>
      </div>

      <!-- Whatsapp Button -->

    <!-- Back To Top Button -->
    <div class="back_to_top" @click="backToTop">
        <img :src="require('@/assets/img/creta_to_top2.png')" alt="img" style="width:100%;height:auto;"/>
    </div>
    <Modal1 @closeModal="closeModal" v-if="formModal == true" />
    <Modal2 @closeModal="closeModal" v-if="formModal2 == true" />
    <Modal3 @closeModal="closeModal" v-if="formModal3 == true" />
    <Modal4 @closeModal="closeModal" v-if="formModal4 == true" />
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import Modal1 from './modals/formModal1.vue'
import Modal2 from './modals/formModal2.vue'
import Modal3 from './modals/formModal3.vue'
import Modal4 from './modals/formModal4.vue'
export default {
    components:{
        Modal1,
        Modal2,
        Modal3,
        Modal4
    },
    data(){
        return{
            formModal:false,
            formModal2:false,
            formModal3:false,
            formModal4:false,
            originalcars:[
            {
                id:1,
                name:'Hyundai All New I20',
                image:'car7.jpg',
                category:'Hatchback',
                price:'8,19,900'
            },
            {
                id:2,
                name:'Hyundai Santro',
                image:'car8.jpg',
                category:'Hatchback',
                price:'4,67,490'
            },
            {
                id:3,
                name:'GRAND i10 NIOS',
                image:'car9.webp',
                category:'Hatchback',
                price:'8,14,900'
            },
            {
                id:4,
                name:'Hyundai i20 N Line',
                image:'car10.webp',
                category:'Hatchback',
                price:'7,31,900'
            },
            {
                id:5,
                name:'Hyundai Aura',
                image:'car2.webp',
                category:'Sedan',
                price:'22,30,000'
            },
            {
                id:6,
                name:'Hyundai Verna',
                image:'car15.jpg',
                category:'Sedan',
                price:'8,19,900'
            },
            {
                id:7,
                name:'Hyundai ELANTRA',
                image:'car11.webp',
                category:'Sedan',
                price:'10,68,000'
            },
            {
                id:8,
                name:'Hyundai Tuscon',
                image:'car18.webp',
                category:'SUV',
                price:'4,67,490'
            },
            {
                id:9,
                name:'Hyundai Venue',
                image:'car4.webp',
                category:'SUV',
                price:'8,16,500'
            },
            {
                id:11,
                name:'Hyundai Alcazar',
                image:'car17.jpg',
                category:'SUV',
                price:'16,53,300'
            },
            {
                id:12,
                name:'Hyundai CRETA',
                image:'car19.webp',
                category:'SUV',
                price:'17,00,000'
            }
            ],
            baseUrl:process.env.baseUrl,
            whatsappLink:''
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    mounted(){
        this.GetDetails();
    },
    methods:{
        GetDetails(){
            axios.get(process.env.baseUrl + 'api/settings/index')
            .then((res)=>{
                const [data] = res.data;
                const {whatsapp_number} = data;
                this.whatsappLink = whatsapp_number;
            }).catch((err)=>{
                console.log(err)
            })
        },
        closeModal(value){
            if(value == 'modal1'){
                this.formModal = false;
            }
            if(value == 'modal2'){
                this.formModal2 = false;
            }
            if(value == 'modal3'){
                this.formModal3 = false;
            }
            if(value == 'modal4'){
                this.formModal4 = false;
            }
        },
        handleScroll(){
            var fixed_form_sec = document.querySelector('.fixed_form_sec');
            var btn = document.querySelector('.back_to_top')
            
            if(pageYOffset > 260){
                btn.classList.add('show')
                btn.classList.remove('not_show');
            }else{
                btn.classList.remove('show')
                btn.classList.add('not_show');
            }

            if(pageYOffset < 10){
                btn.classList.remove('car_up')
            }

            if(pageYOffset > 340){
                fixed_form_sec.classList.add('show')
            }else{
                fixed_form_sec.classList.remove('show')
            }
        },
        backToTop(){
            var btn = document.querySelector('.back_to_top');
            btn.classList.add('car_up')
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }
}
</script>

<style>

</style>