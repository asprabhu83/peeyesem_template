<template>
  <section class="form_modal_box">
        <div class="w-4/12 card_body bg-white card mx-auto">
           <form class="pb-12 px-8">
               <div class="heading flex items-center justify-between pt-6 pb-2 font-semibold text-lg">Book a Car<font-awesome-icon icon="times"  size="1x" class="text-red-600 cursor-pointer" @click="closeModal" /></div>
               <hr class="mb-8" style="height:1px;background:gray;opacity:0.3;" />
               <div class="mb-4">
                    <input
                    class="
                        shadow
                        appearance-none
                        border
                        rounded
                        w-full
                        py-2
                        px-3
                        text-gray-700
                        leading-tight
                        focus:outline-none
                        focus:shadow-outline
                    "
                    type="text"
                    placeholder="Your Name"
                    v-model="name"
                    />
                </div>
                <div class="mb-4">
                    <select
                    class="
                      shadow
                      appearance-none
                      border
                      rounded
                      w-full
                      py-2
                      px-3
                      text-gray-700
                      cursor-pointer
                      leading-tight
                      focus:outline-none
                      focus:shadow-outline
                    "
                    id="cars"
                    v-model="vehicleModel"
                  >
                  <option class="text-xl " value="">Choose Model</option>
                  <option class="text-xl" :value="model.car_title" v-for="model in this.$store.state.originalDataCars"
                    :key="model.id" >{{model.car_title}}</option>
                  </select>
                </div>
               <div class="mb-4">
                    <input
                    class="
                        shadow
                        appearance-none
                        border
                        rounded
                        w-full
                        py-2
                        px-3
                        text-gray-700
                        leading-tight
                        focus:outline-none
                        focus:shadow-outline
                    "
                    type="text"
                    v-model="email"
                    placeholder="Your Email"
                    />
                </div>
               <div class="mb-8">
                    <input
                    class="
                        shadow
                        appearance-none
                        border
                        rounded
                        w-full
                        py-2
                        px-3
                        text-gray-700
                        leading-tight
                        focus:outline-none
                        focus:shadow-outline
                    "
                    type="number"
                    v-model="mobile"
                    placeholder="Your Phone"
                    />
                </div>
               <div class="btn_grp">
                   <button  type="button" @click="BookCar" class="  text-white font-bold  mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
               </div>
           </form>
        </div>
    </section>
</template>

<script>
import axios from '~/plugins/axios'
export default {
    data(){
        return{
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
            name:'',
            vehicleModel:'',
            email:'',
            mobile:''
        }
    },
    mounted(){
        if(this.$store.state.cars.length == 0){
            this.GetModels();
        }
    },
    methods:{
        closeModal(){
            this.$emit('closeModal', 'modal1')
        },
        GetModels(){
            axios.get(process.env.baseUrl + 'api/cars/all')
            .then((res)=>{
                this.$store.state.cars = res.data.cars;
                this.$store.state.originalDataCars = res.data.cars;
            }).catch((err)=>{
                console.log(err);
            })
        },
        BookCar(){
            axios.post(process.env.baseUrl + 'api/car_form/store',{
                full_name:this.name,
                email_id:this.email,
                mobile_no:this.mobile,
                vehicle_model:this.vehicleModel,
                form_type:'book_car',
            }).then((res)=>{
                if(res){
                    this.name = '';
                    this.email = '';
                    this.mobile = '';
                    this.vehicleModel = '';
                    this.closeModal();
                }
                console.log(res)
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
}
</script>

<style>

</style>