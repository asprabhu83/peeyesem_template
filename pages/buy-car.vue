<template>
  <div class="">
      <section class="relative" >
        <div class="row m-0 block">
            <div class="product_single_one_img">
                        <swiper class="swiper product-single-2-slider" :options="swiperOption">
                            <swiper-slide>
                                <div class="carousel_img_sec">
                                    <img :src="require('@/assets/img/cars/h-promise-banners/1.jpg')" alt="img" style="width:100%;" />
                                    <div class="know_more_btn_sec">
                                        <div>
                                            <nuxt-link class="knw_mre_btn" to="">Learn More</nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="carousel_img_sec">
                                    <img :src="require('@/assets/img/cars/h-promise-banners/2.jpg')" alt="img" style="width:100%;" />
                                    <div class="know_more_btn_sec">
                                        <div>
                                            <nuxt-link class="knw_mre_btn" to="">Learn More</nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="carousel_img_sec">
                                    <img :src="require('@/assets/img/cars/h-promise-banners/3.jpg')" alt="img" style="width:100%;" />
                                    <div class="know_more_btn_sec">
                                        <div>
                                            <nuxt-link class="knw_mre_btn" to="">Learn More</nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>

                        </swiper>
            </div>
        </div>
    </section>
      <div class="h_promise_content ">
          <h3 class="text-center mb-4">H Promise - Approved used car</h3>
          <div class="desc text-center">Hyundai Motor India Ltd. started its certified used car program under the brand name "H PROMISE" to give good quality of used cars to Indian customers. Vehicles are certified by Hyundai and come with Hyundai warranty upto 1 year or 20,000Km (whichever earlier from the date of delivery) & 2 free services. Through this program customer is assured of trust, transparency, convenience and peace of mind.</div>
      </div>
      <div class="my-5 car_section">
          <div class="filter_box">
              <div class="my-4">
                  <div class="title my-2">Kms Driven</div>
                   <MultiRangeSlider
                        :min="1000"
                        :max="200000"
                        :step="10"
                        :ruler="false"
                        :label="true"
                        :minValue="kmsMinValue"
                        :maxValue="kmsMaxValue"
                        @input="UpdateValues1"
                        id="kms_value"
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
                        @input="UpdateValues2"
                        id="price_value"
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
                        @input="UpdateValues3"
                        id="year_value"
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
             <div class="my-4">
                    <div class="title my-2">Location</div>
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
                            id="location"
                            v-model="LocationInput"
                        >
                        <option class="text-xl " value="">Select Location</option>
                        <option class="text-xl" :value="model.name" v-for="model in CityList"
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
                          <img :src="baseUrl + 'images/' + car.model_image" style="width:100%;" />
                      </div>
                      <div class="detail">
                          <div class="title">{{car.car_model}} - {{car.fuel_type}}</div>
                          <div class="year_box">
                              <div class="year">
                                  <div class="mb-1"><font-awesome-icon icon="calendar-alt"  size="1x" class="text-black mr-2" />Year</div>
                                  <b>{{car.purchase_year}}</b>
                              </div>
                              <div class="kms">
                                  <div class="mb-1"><font-awesome-icon icon="tachometer-alt"  size="1x" class="text-black mr-2" />Kms Driven</div>
                                  <b>{{car.kms_driven}}</b>
                              </div>
                          </div>
                          <div class="btn_box">
                              <button type="button" @click="openDialog(car.id)">Enquire Now</button>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="my-5">
                <h3 class="text-center" v-if="CarDetails.length == 0">No Cars Found!</h3>
             </div>
          </div>
      </div>
      <div class="dialog_box fixed inset-0 h-screen w-full flex justify-center items-center" v-if="editDialog === true">
      <div class="dialog_content bg-white rounded-md shadow-md">
         <div class="my-2   flex items-center justify-between py-3 px-10"><span class="font-bold text-lg" >Enquire</span><font-awesome-icon icon="times"  size="1x" class="text-red-600 cursor-pointer" @click="editDialog = false" /></div>
         <form class="bg-white rounded px-10 pb-10" >
            <div class="form_box">
              <div class="err_box ">
                <div class="success py-3 text-green-500" v-if="success == true">
                  Added Successfully
                </div>
                <div class="error py-3 text-red-500" v-if="empty_valid == true">
                  Values should not be empty
                </div>
              </div>
              <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                  >
                    Full Name
                  </label>
                  <input
                    class="
                      shadow-md
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
                    id="name"
                    type="text"
                    placeholder="Full Name"
                    v-model="singleCarDetail.name"
                  />
              </div>
              <div class="mb-4">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="Email"
                  >
                    Email
                  </label>
                  <input
                    class="
                      shadow-md
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
                    id="Email"
                    type="text"
                    placeholder="Email"
                    v-model="singleCarDetail.email"
                  />
              </div>
              <div class="mb-6">
                  <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="mobile"
                  >
                    Mobile No
                  </label>
                  <input
                    class="
                      shadow-md
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
                    id="mobile"
                    type="text"
                    placeholder="Mobile"
                    v-model="singleCarDetail.mobile"
                  />
              </div>
          <div class="flex items-center justify-between">
            <button
              class="
                bg-blue-500
                hover:bg-blue-700
                text-white
                font-bold
                w-full
                py-2
                px-4
                rounded
                focus:outline-none
                focus:shadow-outline
                reg_btn
              "
              type="button"
              @click="Enquire"
            >
              Enquire Now
            </button>
          </div>
            </div>
          </form>
      </div>
     </div>
  </div>
</template>

<script>
import MultiRangeSlider from "multi-range-slider-vue";
import axios from '~/plugins/axios'
export default {
    components: {
        MultiRangeSlider
    },
    data(){
        return{
            kmsMinValue: 2000,
            kmsMaxValue: 150000,
            priceMinValue: 1000,
            priceMaxValue: 500000,
            yearMinValue: 1995,
            yearMaxValue: 2015,
            CityList:[
                {
                    id:1,
                    name:'Madurai'
                },
                {
                    id:2,
                    name:'Chennai'
                },
                {
                    id:3,
                    name:'Trichendur'
                },
                {
                    id:4,
                    name:'Ramanathapuram'
                },
                {
                    id:5,
                    name:'Kovilpatti'
                },
                {
                    id:6,
                    name:'Tuticorin'
                },
                {
                    id:7,
                    name:'Karaikudi'
                }
            ],
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
            LocationInput:'',
            CarDetails:[],
            originalCarDetails:[],
            baseUrl:process.env.baseUrl,
            editDialog:false,
            success:false,
            empty_valid:false,
            singleCarDetail:{
                carModel:'',
                purchaseYear:'',
                fuelType:'',
                Manufacturer:'',
                Price:'',
                kmsDriven:'',
                name:'',
                email:'',
                mobile:'',
                Location:''
            },
            swiperOption: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 0,
                loop: true,
                mousewheel: false,
                keyboard: {
                    enabled: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                autoplay: true,
            },
        }
    },
    mounted(){
        window.scrollTo(0, 0)
        this.GetCarDetails();
    },
    methods:{
        openDialog(id){
            this.editDialog = true;
            var item = this.originalCarDetails.filter((item)=>{
                return item.id == id;
            })
            const [firstCar] = item;
            const {car_model,data_form,fuel_type,kms_driven,price,purchase_year} = firstCar;
            this.singleCarDetail.carModel = car_model;
            this.singleCarDetail.purchaseYear = purchase_year;
            this.singleCarDetail.fuelType = fuel_type;
            this.singleCarDetail.Price = price;
            this.singleCarDetail.kmsDriven = kms_driven;
            var data = JSON.parse(data_form);
            const {manufacturer,location} = data;
            this.singleCarDetail.Location = location;
            this.singleCarDetail.Manufacturer = manufacturer;
        },
        Enquire(){
            var data_value = {
                car_model:this.singleCarDetail.carModel,
                purchase_year:this.singleCarDetail.purchaseYear,
                fuel_type:this.singleCarDetail.fuelType,
                price:this.singleCarDetail.Price,
                kms_driven:this.singleCarDetail.kmsDriven,
                manufacturer:this.singleCarDetail.Manufacturer,
                location:this.singleCarDetail.Location
            }
            data_value = JSON.stringify(data_value);
            axios.post(process.env.baseUrl + 'api/car_form/store',{
                full_name:this.singleCarDetail.name,
                email_id:this.singleCarDetail.email,
                mobile_no:this.singleCarDetail.mobile,
                form_type:'Buy_car',
                data_form_value:data_value
            }).then((res)=>{
                this.editDialog = false;
            }).catch((err)=>{
                console.log(err);
            })
        },
        GetCarDetails(){
            axios.get(process.env.baseUrl + 'api/used_car/index')
            .then((res)=>{
                this.CarDetails = res.data;
                this.originalCarDetails = res.data
                if(res){
                    this.filterCars();
                }
            }).catch((err)=>{
                console.log(err);
            })
        },
        UpdateValues1(e) {

            this.kmsMinValue = e.minValue;
            this.kmsMaxValue = e.maxValue;
        },
        UpdateValues2(e) {
            this.priceMinValue = e.minValue;
            this.priceMaxValue = e.maxValue;
        },
        UpdateValues3(e) {
            this.yearMinValue = e.minValue;
            this.yearMaxValue = e.maxValue;
        },
        filterCars(){
            var model = this.CarModel;
            var fuel = this.fuelType;
            var filterlocation = this.LocationInput;
            var minyear = this.yearMinValue;
            var maxyear = this.yearMaxValue;
            var minPrice = this.priceMinValue;
            var maxPrice = this.priceMaxValue;
            var minKms = this.kmsMinValue;
            var maxKms = this.kmsMaxValue;
            var newItem = this.originalCarDetails.filter((item)=>{
                var price = parseInt(item.price.replace(/,/g,''));
                var kms = parseInt(item.kms_driven.replace(/,/g,''));
                var data_form = JSON.parse(item.data_form);
                var {manufacturer,location} = data_form;
                if(model !== '' && fuel !=='' && filterlocation !== ''){
                    return (manufacturer == model && item.fuel_type == fuel && location == filterlocation) && (parseInt(item.purchase_year) >= minyear && parseInt(item.purchase_year) <= maxyear) && (price >= minPrice && price <= maxPrice) && (kms >= minKms && kms <= maxKms)
                }
                if(model == '' && fuel =='' && filterlocation == ''){
                    return (parseInt(item.purchase_year) >= minyear && parseInt(item.purchase_year) <= maxyear) && (price >= minPrice && price <= maxPrice) && (kms >= minKms && kms <= maxKms)
                }
                if(model !== '' && fuel !== ''){
                    return (manufacturer == model && item.fuel_type == fuel) && (parseInt(item.purchase_year) >= minyear && parseInt(item.purchase_year) <= maxyear) && (price >= minPrice && price <= maxPrice) && (kms >= minKms && kms <= maxKms)
                }
                if(model !== '' && filterlocation !== ''){
                    return (manufacturer == model && location == filterlocation) && (parseInt(item.purchase_year) >= minyear && parseInt(item.purchase_year) <= maxyear) && (price >= minPrice && price <= maxPrice) && (kms >= minKms && kms <= maxKms)
                }
                if(fuel !=='' && filterlocation !== ''){
                    return (item.fuel_type == fuel && location == filterlocation) && (parseInt(item.purchase_year) >= minyear && parseInt(item.purchase_year) <= maxyear) && (price >= minPrice && price <= maxPrice) && (kms >= minKms && kms <= maxKms)
                }
                if(model !== ''){
                    return (manufacturer == model) && (parseInt(item.purchase_year) >= minyear && parseInt(item.purchase_year) <= maxyear) && (price >= minPrice && price <= maxPrice) && (kms >= minKms && kms <= maxKms)
                }
                if(fuel !==''){
                    return (item.fuel_type == fuel) && (parseInt(item.purchase_year) >= minyear && parseInt(item.purchase_year) <= maxyear) && (price >= minPrice && price <= maxPrice) && (kms >= minKms && kms <= maxKms)
                }
                if(filterlocation !==''){
                    return (location == filterlocation) && (parseInt(item.purchase_year) >= minyear && parseInt(item.purchase_year) <= maxyear) && (price >= minPrice && price <= maxPrice) && (kms >= minKms && kms <= maxKms)
                }
                
            })
            this.CarDetails = newItem;
        }
    }
}
</script>

<style scoped>
@media only screen and (min-width: 760px) and (max-width: 960px){
    .filter_box{
        width: 46%!important;
    }
    .car_section .cars_items{
        width: 43%!important;
    }
    .car_item_box_sec .item {
        width: 100%!important;
        margin: 20px 0!important;
    }
    .h_promise_content{
        width: 65%!important;
    }
    .know_more_btn_sec .knw_mre_btn{
        padding: 7px 20px!important;
        font-size: 16px!important;
        min-width: 135px!important;
    }
}
@media only screen and (min-width: 961px) and (max-width: 1030px){
    .filter_box{
        width: 39%!important;
    }
    .car_section .cars_items{
        width: 53%!important;
    }
    .car_item_box_sec .item {
        width: 46%!important;
        margin: 15px 10px!important;
    }
}
@media only screen and (min-width: 1367px) and (max-width: 1600px){
    .car_section .cars_items{
        width: 67%!important;
    }
    .know_more_btn_sec .knw_mre_btn{
        padding: 8px 15px!important;
        font-size: 14px!important;
        min-width: 160px!important;
    }
}
@media only screen and (min-width: 1270px) and (max-width: 1366px){
    .car_section .cars_items{
        width: 67%!important;
        margin: 40px 12px!important;
    }
    .car_item_box_sec .item{
        width: 29%!important;
        margin: 15px!important;
    }
    .h_promise_content{
        width: 70%!important;
    }
    .know_more_btn_sec .knw_mre_btn{
        padding: 6px 15px!important;
        font-size: 12px!important;
        min-width: 130px!important;
    }
}
@media only screen and (min-width:300px) and (max-width:600px){
    .car_section .filter_box{
        width: 100%!important;
    }
    .car_section .cars_items{
        width: 100%!important;
        margin: 40px 0px!important;
    }
    .car_item_box_sec .item{
        width: 100%!important;
    }
    .car_item_box_sec{
        margin: 0px 5px 30px 5px!important;
    }
    .h_promise_content{
        width: 90%!important;
    }
    .used_car_title{
        left: 14%!important;
    }
    .used_car_title h2{
        font-size: 20px!important;
    }
    .carousel_img_sec .know_more_btn_sec{
        display: none;
    }
}
.carousel_img_sec .know_more_btn_sec{
    position: absolute;
    bottom: 23%;
    left: 13%;
    z-index: 300;
}
.carousel_img_sec{
    border-bottom: 1px solid lightgray;
}
.img_sec{
    position: relative;
}
.used_car_title{
    position: absolute;
    top: 18%;
    left: 21%;
}
.used_car_title h2{
    font-size: 40px;
    font-weight: 600;
}
.h_promise_content{
    width: 50%;
    margin: 60px auto 0px auto;
}
.btn_box{
    text-align: center;
    margin-top: 12px;
}
.dialog_box {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
}
.dialog_content {
  width: 550px;
  max-width: 100%;
}
.btn_box button{
    padding: 4px 18px;
    background: #002c5f;
    margin: 10px 0;
    outline: none;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 5px;
}
.car_section{
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
}
.car_section .filter_box{
    width: 26%;
    margin: 40px 20px;
    padding: 30px;
    box-shadow: 0 2px 10px 4px rgb(0 0 0/10%);
    border-radius: 8px;
}
.car_section .cars_items{
    width: 69%;
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
.swiper-button-prev, .swiper-button-next{
    z-index: 220;
    border-radius: 50%;
    width: 40px!important;
    height: 40px!important;
    margin-left: 10px;
    margin-right: 10px;
}
.swiper-button-next:hover, .swiper-button-prev:hover{
    background: black!important;
}
.know_more_btn_sec .knw_mre_btn{
    background: #002c5f;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 9px 20px;
    font-size: 18px;
    border-radius: 4px;
    margin: 7px 0;
    display: block;
    text-align: center;
    min-width: 190px;
    box-shadow: 0 2px 10px 4px rgb(0 0 0/15%);
}
.know_more_btn_sec .knw_mre_btn:hover{
    color: white;
}
</style>