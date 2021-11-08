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
        <div class="all_cars_sec  flex flex-wrap justify-center mt-5 mx-auto" id="isotope" v-if="categoryIndex !== 0">
            <div class="item_card" v-for="car in this.$store.state.cars" :key="car.id">
                <nuxt-link :to="'/cars/'+ car.car_title.replace(/\s+/g, '-').toLowerCase()" class="text-center block item_card_image cursor-pointer" >
                    <img :src="baseUrl + 'images/' + car.car_image" alt="" >
                </nuxt-link>
                <div class="item_details" >
                    <nuxt-link :to="'/cars/'+ car.car_title.replace(/\s+/g, '-').toLowerCase()" class="text-center font-medium mt-1 mb-1 cursor-pointer" >{{car.car_title}}</nuxt-link>
                   <div class="text-center font-medium mt-1 mb-1"><font-awesome-icon icon="rupee-sign"  size="1x" class="text-black mx-2" />{{car.car_price}}<span class="notice_mark">*</span></div>
                </div>
            </div>
        </div>
        <div class="all_cars_sec   mt-16 mx-auto" id="isotope" v-if="categoryIndex == 0">
            <h3 v-if="$store.state.cars.length !== 0" class="text-center all_car_title">HATCHBACK <hr /></h3>
            <div class="flex flex-wrap justify-center">
                <div class="item_card" v-for="car in hatchbackCars" :key="car.id">
                    <nuxt-link :to="'/cars/'+ car.car_title.replace(/\s+/g, '-').toLowerCase()" class="text-center block item_card_image cursor-pointer" >
                        <img :src="baseUrl + 'images/' + car.car_image" alt="" >
                    </nuxt-link>
                    <div class="item_details" >
                        <nuxt-link :to="'/cars/'+ car.car_title.replace(/\s+/g, '-').toLowerCase()" class="text-center font-medium mt-1 mb-1 cursor-pointer" >{{car.car_title}}</nuxt-link>
                         <div class="text-center font-medium mt-1 mb-1"><font-awesome-icon icon="rupee-sign"  size="1x" class="text-black mx-2" />{{car.car_price}}<span class="notice_mark">*</span></div>
                    </div>
                </div>
            </div>
            <h3 v-if="$store.state.cars.length !== 0" class="text-center all_car_title">SEDAN <hr /></h3>
            <div class="flex flex-wrap justify-center">
                <div class="item_card" v-for="car in sedanCars" :key="car.id">
                    <nuxt-link :to="'/cars/'+ car.car_title.replace(/\s+/g, '-').toLowerCase()" class="text-center block item_card_image cursor-pointer" >
                        <img :src="baseUrl + 'images/' + car.car_image" alt="" >
                    </nuxt-link>
                    <div class="item_details" >
                        <nuxt-link :to="'/cars/'+ car.car_title.replace(/\s+/g, '-').toLowerCase()" class="text-center font-medium mt-1 mb-1 cursor-pointer" >{{car.car_title}}</nuxt-link>
                          <div class="text-center font-medium mt-1 mb-1"><font-awesome-icon icon="rupee-sign"  size="1x" class="text-black mx-2" />{{car.car_price}}<span class="notice_mark">*</span></div>
                    </div>
                </div>
            </div>
            <h3 v-if="$store.state.cars.length !== 0" class="text-center all_car_title suv">SUV <hr /></h3>
            <div class="flex flex-wrap justify-center">
                <div class="item_card" v-for="car in suvCars" :key="car.id">
                    <nuxt-link :to="'/cars/'+ car.car_title.replace(/\s+/g, '-').toLowerCase()" class="text-center block item_card_image cursor-pointer" >
                        <img :src="baseUrl + 'images/' + car.car_image" alt="" >
                    </nuxt-link>
                    <div class="item_details" >
                        <nuxt-link :to="'/cars/'+ car.car_title.replace(/\s+/g, '-').toLowerCase()" class="text-center font-medium mt-1 mb-1 cursor-pointer" >{{car.car_title}}</nuxt-link>
                            <div class="text-center font-medium mt-1 mb-1"><font-awesome-icon icon="rupee-sign"  size="1x" class="text-black mx-2" />{{car.car_price}}<span class="notice_mark">*</span></div>
                    </div>
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
        loading:false,
        hatchbackCars:[],
        sedanCars:[],
        suvCars:[]
        }
    },
    mounted(){
        window.scrollTo(0, 0);
        if(this.$store.state.cars.length == 0){
           this.GetCars()
        }else{
            this.filterItems('ALL');
            this.filterAllCatgCars();
        }
    },
    methods:{
        GetCars(){
            this.loading = true;
            axios.get(process.env.baseUrl + 'api/cars/all')
            .then((response) => {
             this.loading =false;
            this.$store.state.cars = response.data.cars;
            this.$store.state.originalDataCars = response.data.cars;
            this.categoryNames();
            this.filterAllCatgCars();
            })
            .catch((error) => {
            this.loading = false;
            console.log(error)
            })
        },
        filterAllCatgCars(){
            var item = this.$store.state.originalDataCars.filter((item)=> item.car_type == 'HATCHBACK')
            this.hatchbackCars = item;

            var item2 = this.$store.state.originalDataCars.filter((item)=> item.car_type == 'SEDAN')
            this.sedanCars = item2;

            var item3 = this.$store.state.originalDataCars.filter((item)=> item.car_type == 'SUV')
            this.suvCars = item3;
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
@media only screen and (min-width: 1270px) and (max-width: 1366px){
    .item_card{
        width: 25%!important;
    }
    .all_car_title{
        font-size: 18px!important;
        margin: 20px 0;
    }
}
@media only screen and (min-width:300px) and (max-width:600px){
     .item_card{
        width: 100%!important;
    }
    .all_car_title hr{
        width: 18%!important;
    }
    .all_car_title.suv hr{
        width: 10%!important;
    }
}
.all_cars_sec{
    padding: 10px 0 40px 0;
}


.all_car_title{
    font-size: 24px;
    margin: 20px 0;
}

.all_car_title hr{
    width: 4%;
    margin: 3px auto;
    background: black;
    height: 3px;
}

.all_car_title.suv hr{
    width: 2%;
}
.item_details a{
    display: block;
}
.item_details a:hover{
    color: black;
}

.item_card{
    width: 20%;
    margin: 20px;
    box-shadow: 0 2px 10px 4px rgb(0 0 0/10%);
    border-radius: 5px;
    overflow: hidden;
    background: white;
}
.item_card .item_card_image{
    min-height: 198px;
    max-height: 198px;
}
.item_card a img{
    min-height: 198px;
    max-height: 198px;
    object-fit: cover;
    width: 100%;
    max-width: 100%;
}
.item_card .item_details{
    padding: 10px;
}
</style>