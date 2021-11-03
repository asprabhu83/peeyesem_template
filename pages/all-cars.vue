<template>
<div>
  <section class="pt-20 cars_product_section"  style="background: #e6eaef;">
        <div class="text-center font-bold text-3xl text-uppercase car_sec_head" >Choose Your Dream Hyundai Car<hr class="h-1 w-2/12 my-2 mx-auto bg-black" style="background-color:black!important;" /></div>
        <div class="mt-14 category_sec">
            <div class="container">
                <div class="flex items-center justify-center">
                    <div class=" category_item font-semibold text-lg cursor-pointer"  v-for="(item, index) in this.$store.state.carCategory" :class="categoryIndex == index ? 'active': ''" @click="categoryIndex = index, filterItems(item)" :key="index">
                        {{item}}
                    </div>
                </div>
            </div>
        </div>
        <div class="card_box  flex flex-wrap mt-16 mx-auto" id="isotope">
            <div class="car_box_item" v-for="car in this.$store.state.cars" :key="car.id">
                <nuxt-link :to="'/cars/'+ car.car_title.replace(/\s+/g, '-').toLowerCase()" class="text-center block car_image_box cursor-pointer" >
                    <img :src="baseUrl + 'images/' + car.car_image" alt="" >
                </nuxt-link>
                <div class="car_name">
                     <div class="text-center text-white py-1 font-medium mt-1 mb-1">{{car.car_title}}</div>
                </div>
                <div class="car_details" >
                    <div class="text-center font-medium mt-1 mb-1 cursor-pointer">{{car.car_title}}</div>
                   <div class="text-center font-medium mt-1 mb-1"><font-awesome-icon icon="rupee-sign"  size="1x" class="text-black mx-2" />{{car.car_price}}<span class="notice_mark">*</span></div>
                </div>
            </div>
        </div>
    </section>
    <Loading v-if="loading == true" />
</div>
</template>

<script>
import axios from '~/plugins/axios'
import Loading from '../components/Loading.vue'
export default {
    components:{
        Loading
    },
    data(){
        return{


        categoryIndex:0,
        carCategory:null,
        baseUrl:process.env.baseUrl, 
        cars:this.$store.state.cars,
        originalDataCars:this.$store.state.cars,
        loading:false
        }
    },
    mounted(){
        if(this.$store.state.cars.length == 0){
           this.GetCars()
        }else{
            this.filterItems('ALL');
        }
    },
    methods:{
        GetCars(){
            this.loading = true;
            axios.get(process.env.baseUrl + 'api/cars/index')
            .then((response) => {
             this.loading =false;
            this.$store.state.cars = response.data.cars;
            this.$store.state.originalDataCars = response.data.cars;
            this.categoryNames();
            })
            .catch((error) => {
            this.loading = false;
            console.log(error)
            })
        },
        filterItems(name){
          var newItems =  this.$store.state.originalDataCars.filter((item)=> item.car_type == name);
          newItems.reverse()
          this.$store.state.cars = newItems;
          if(name == 'ALL'){
              this.$store.state.cars = this.$store.state.originalDataCars
          }
        },
        categoryNames(){
           var items =  this.$store.state.cars.map((item)=>{return item.car_type});
           items.reverse()
           var category = ['ALL',...new Set(items)]
           this.$store.state.carCategory = category;
           
        }
    }
}
</script>

<style scoped>
</style>