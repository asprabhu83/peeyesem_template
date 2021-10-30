<template>
  <div class="">
      <!-- <div class="img_sec">
           <img :src="require('@/assets/img/cars/car13.webp')" alt="img" style="width:100%;" />
      </div> -->
      <div class="my-5">
            <h3 class="text-center ">Used Cars</h3>
      </div>
      <div class="my-5 car_section">
          <div class="filter_box">
              <div class="my-4">
                  <div class="title my-2">Kms Driven</div>
                   <MultiRangeSlider
                        :min="1000"
                        :max="20000"
                        :step="10"
                        :ruler="false"
                        :label="true"
                        :minValue="kmsMinValue"
                        :maxValue="kmsMaxValue"
                        @input="UpdateValues"
                        class="slider"
                    />
              </div>
              <div class="my-4">
                  <div class="title my-2">Price</div>
                   <MultiRangeSlider
                        :min="0"
                        :max="1000000"
                        :step="10"
                        :ruler="false"
                        :label="true"
                        :minValue="priceMinValue"
                        :maxValue="priceMaxValue"
                        @input="UpdateValues"
                        class="slider"
                    />
              </div>
              <div class="my-4">
                  <div class="title my-2">Year</div>
                   <MultiRangeSlider
                        :min="1990"
                        :max="2021"
                        :step="1"
                        :ruler="false"
                        :label="true"
                        :minValue="yearMinValue"
                        :maxValue="yearMaxValue"
                        @input="UpdateValues"
                        class="slider"
                    />
              </div>
              <div class="my-4">
                  <div class="title my-2">Cars</div>
                      <select
                            class="
                            shadow-md
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
                            id="car_model"
                            v-model="CarModel"
                        >
                        <option class="text-xl " value="">Select Car Model</option>
                        <option class="text-xl" :value="model.name" v-for="model in CarsList"
                            :key="model.id" >{{model.name}}</option>
                        </select>
              </div>
              <div class="my-4">
                    <div class="title my-2">Fuel Type</div>
                       <select
                            class="
                            shadow-md
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
                            id="fuelType"
                            v-model="fuelType"
                        >
                        <option class="text-xl " value="">Select Fuel type</option>
                        <option class="text-xl" :value="model.name" v-for="model in FuelList"
                            :key="model.id" >{{model.name}}</option>
                        </select>
             </div>
             <div class="my-3">
                 <button class="apply_btn" type="button" @click="filterCars">Apply</button>
             </div>
          </div>
          <div class="cars_items">
              <div class="car_item_box_sec">
                  <div class="item" v-for="car in CarDetails" :key="car.id">
                      <div class="photo">
                          <img :src="require('@/assets/img/cars/used_cars/' + car.image)" alt="img" style="width:100%;" />
                      </div>
                      <div class="detail">
                          <div class="title">{{car.name}} - {{car.fuel}} - {{car.price}}</div>
                          <div class="year_box">
                              <div class="year">
                                  <div class="mb-1"><font-awesome-icon icon="calendar-alt"  size="1x" class="text-black mr-2" />Year</div>
                                  <b>{{car.year}}</b>
                              </div>
                              <div class="kms">
                                  <div class="mb-1"><font-awesome-icon icon="tachometer-alt"  size="1x" class="text-black mr-2" />Kms Driven</div>
                                  <b>{{car.kms_driven}}</b>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="my-5">
                <h3 class="text-center" v-if="CarDetails.length == 0">No Cars Found!</h3>
             </div>
          </div>
      </div>
  </div>
</template>

<script>
import MultiRangeSlider from "multi-range-slider-vue";
import comingSoonVue from './coming-soon.vue';
export default {
    components: {
        MultiRangeSlider
    },
    data(){
        return{
            kmsMinValue: 2000,
            kmsMaxValue: 15000,
            priceMinValue: 1000,
            priceMaxValue: 500000,
            yearMinValue: 1995,
            yearMaxValue: 2015,
            CarsList:[
                {
                    id:1,
                    name:'Hyundai'
                },
                {
                    id:2,
                    name:'Chevrolet'
                },
                {
                    id:3,
                    name:'Ford'
                },
                {
                    id:4,
                    name:'Mahindra'
                },
                {
                    id:5,
                    name:'Maruti'
                },
                {
                    id:6,
                    name:'Renault'
                },
                {
                    id:7,
                    name:'Tata'
                },
                {
                    id:8,
                    name:'Toyota'
                },
                {
                    id:9,
                    name:'Volkswagon'
                },
                {
                    id:10,
                    name:'Honda'
                },
                {
                    id:11,
                    name:'SKODA'
                }
            ],
            FuelList:[
                {
                    id:1,
                    name:'Petrol'
                },
                {
                    id:2,
                    name:'Diesel'
                },
                {
                    id:3,
                    name:'CNG'
                }
            ],
            CarModel:'',
            fuelType:'',
            CarDetails:[
                {
                    id:1,
                    name:'Maruti - SWIFT LXI',
                    manufacturer:'Maruti',
                    image:'1.jpg',
                    year:'2006',
                    kms_driven:'1,10,245',
                    price:'2,50,000',
                    fuel:'Petrol'
                },
                {
                    id:2,
                    name:'Hyundai - SANTRO',
                    manufacturer:'Hyundai',
                    image:'2.jpg',
                    year:'2000',
                    kms_driven:'81,062',
                    price:'1,00,000',
                    fuel:'Petrol'
                },
                {
                    id:3,
                    name:'Maruti - ZEN',
                    manufacturer:'Maruti',
                    image:'3.jpg',
                    year:'1995',
                    kms_driven:'88,261',
                    price:'1,00,000',
                    fuel:'Petrol'
                }
            ],
            originalCarDetails:[
                {
                    id:1,
                    name:'Maruti - SWIFT LXI',
                    manufacturer:'Maruti',
                    image:'1.jpg',
                    year:'2006',
                    kms_driven:'1,10,245',
                    price:'2,50,000',
                    fuel:'Petrol'
                },
                {
                    id:2,
                    name:'Hyundai - SANTRO',
                    manufacturer:'Hyundai',
                    image:'2.jpg',
                    year:'2000',
                    kms_driven:'81,062',
                    price:'1,00,000',
                    fuel:'Petrol'
                },
                {
                    id:3,
                    name:'Maruti - ZEN',
                    manufacturer:'Maruti',
                    image:'3.jpg',
                    year:'1995',
                    kms_driven:'88,261',
                    price:'1,00,000',
                    fuel:'Petrol'
                }
            ]
        }
    },
    methods:{
        UpdateValues(e) {
            this.kmsMinValue = e.minValue;
            this.kmsMaxValue = e.maxValue;

            this.priceMinValue = e.minValue;
            this.priceMaxValue = e.maxValue;

            this.yearMinValue = e.minValue;
            this.yearMaxValue = e.maxValue;
            
        },
        filterCars(){
            var model = this.CarModel;
            var fuel = this.fuelType;
            var minyear = this.yearMinValue;
            var maxyear = this.yearMaxValue;
            var minPrice = this.priceMinValue;
            var maxPrice = this.priceMaxValue;
            var newItem = this.originalCarDetails.filter((item)=>{
                var price = parseInt(item.price.replace(/,/g,''));
                if(model !== '' && fuel !==''){
                    return item.manufacturer == model && item.fuel == fuel && (parseInt(item.year) >= minyear && parseInt(item.year) <= maxyear)
                }
                if(model == '' && fuel ==''){
                    if(price >= minPrice){
                        console.log(item.id,'min price true');
                    }else{
                        console.log(item.id,'false')
                    }
                    if(price <= maxPrice){
                        console.log(item.id,'max price true');
                    }else{
                        console.log(item.id,'false')
                    }
                    if(parseInt(item.year) >= minyear){
                        console.log(item.id,'min year true',item.year,minyear);
                    }else{
                        console.log(item.id,'false')
                    }
                     if(parseInt(item.year) <= maxyear){
                        console.log(item.id,'max year true',item.year,maxyear);
                    }else{
                        console.log(item.id,'false')
                    }
                    if( price >= minPrice && price <= maxPrice ){
                        return item
                    }
                }
                if(model !== ''){
                    return item.manufacturer == model
                }
                if(fuel !==''){
                    return item.fuel == fuel
                }
            })
            this.CarDetails = newItem;
        }
    }
}
</script>

<style scoped>
.car_section{
    display: flex;
}
.car_section .filter_box{
    width: 26%;
    margin: 40px 20px;
    padding: 30px;
    box-shadow: 0 2px 10px 4px rgb(0 0 0/10%);
    border-radius: 8px;
}
.car_section .cars_items{
    width: 72%;
    margin: 40px 20px;
}
.filter_box .title{
    font-weight: 600;
    font-size: 17px;
}
.apply_btn{
    border: none;
    outline: none;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
    background: #002c5f;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    margin-top: 30px;
    width: 100%;
}
.car_item_box_sec{
    display: flex;
    flex-wrap:wrap;
    margin: 0px 20px 50px 20px;
}
.car_item_box_sec .item{
    width: 27%;
    margin: 20px;
    box-shadow: 0 2px 10px 4px rgb(0 0 0/10%);
    border-radius: 6px;
    overflow: hidden;
}
.car_item_box_sec .item .detail{
    padding: 15px;
}
.car_item_box_sec .item .detail .title{
    font-weight: 600;
    margin: 10px 0;
}
.car_item_box_sec .item .detail .year_box{
    display: flex;
    justify-content: space-between;
    padding: 5px;
}
</style>