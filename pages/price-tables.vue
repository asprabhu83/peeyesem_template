<template>
    <div class="my-24">
        <div class="page_heading">Check Hyundai Model Prices</div>
        <div class="second_head">See car prices of your city</div>
        <div class="form_sec">
            <form>
                <div class="mr-4">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="vehicle_model"
                            >
                             Model
                         </label>
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
                                id="vehicle_model"
                                v-model="vehicleModel"
                                @change="filterPrice"
                            >
                            <option class="text-xl " value="">Select Model</option>
                            <option class="text-xl" :value="model.id" v-for="model in this.$store.state.originalDataCars"
                                :key="model.id" >{{model.car_title}}</option>
                            </select>
                    </div>
                    <div class="mr-4">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="state"
                            >
                            State
                         </label>
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
                                id="state"
                                v-model="state"
                                @change="filterPrice"
                            >
                            <option class="text-xl " value="">Select State</option>
                            <option class="text-xl" :value="state.name" v-for="state in StateList"
                                :key="state.id" >{{state.name}}</option>
                            </select>
                    </div>
                    <div class="mr-4">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="city"
                            >
                            City
                         </label>
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
                                id="city"
                                v-model="city"
                                @change="filterPrice"
                            >
                            <option class="text-xl " value="">Select City</option>
                            <option class="text-xl" :value="city.name" v-for="city in CityList"
                                :key="city.id" >{{city.name}}</option>
                            </select>
                    </div>
            </form>
        </div>
        <div class="my-24">
            <div class="price_item" v-for="item in singleData" :key="item.id">
                <span>{{item.feature_type}}</span>
                <span>{{JSON.parse(item.data_value).variant_price}}</span>
            </div>
            <div class="no_data" v-if="singleData.length == 0 && data_found == true">No Data Found</div>
        </div>
    </div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
    data(){
        return{
             StateList:[
                {
                    id:1,
                    name:'Tamil Nadu'
                }
            ],
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
            city:'',
            state:'',
            vehicleModel:'',
            singleData:[],
            data_found:false
        }
    },
    mounted(){
        if(this.$store.state.cars.length == 0){
            this.GetModels();
        }
    },
    methods:{
        GetModels(){
            axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
            axios.defaults.withCredentials = false;
            axios.get(process.env.baseUrl + 'api/cars/all')
            .then((res)=>{
                this.$store.state.cars = res.data.cars;
                this.$store.state.originalDataCars = res.data.cars;
            }).catch((err)=>{
                console.log(err);
            })
        },
        filterPrice(){
            if(this.city !== '' && this.state !== '' && this.vehicleModel !== ''){
                axios.get(process.env.baseUrl + 'api/show/car/' + this.vehicleModel)
                .then((res)=>{
                    var data = res.data;
                    const {feature_model} = data;
                    this.singleData = feature_model;
                    console.log(this.singleData);
                }).catch((err)=>{
                    console.log(err);
                    this.data_found = true
                })
            }
        }
    }
}
</script>

<style scoped>
.page_heading{
    text-align: center;
    margin: 20px 0;
    font-size: 27px;
    font-weight: 600;
}
.second_head{
    font-size: 19px;
    text-align: center;
    font-weight: 600;
}
.form_sec form{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60px 0;
}
.form_sec form div{
    width: 20%;
}
.price_item{
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    font-size: 17px;
}
.no_data{
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    margin: 20px 0;
}
</style>