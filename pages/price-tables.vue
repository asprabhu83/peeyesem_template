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
                            <font-awesome-icon icon="chevron-down"  size="1x" class="text-black variant_model_icon mr-2" />
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
                            <font-awesome-icon icon="chevron-down"  size="1x" class="text-black variant_model_icon mr-2" />
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
                            <font-awesome-icon icon="chevron-down"  size="1x" class="text-black variant_model_icon mr-2" />
                    </div>
            </form>
        </div>
        <div class="price_box">
            <div class="w-1/2 price_table_sec mx-auto mt-16" v-if="data_res == true">
                            <div class="flex flex-col">
                                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div
                                            class="
                                            shadow-md
                                            overflow-hidden
                                            border-b border-gray-200
                                            sm:rounded-lg
                                            "
                                        >
                                            <table class="min-w-full car_spec_table divide-y divide-gray-200">
                                            <thead class="">
                                                <tr>
                                                <th
                                                    scope="col"
                                                    class="
                                                    px-6
                                                    py-3
                                                    text-left text-xs
                                                    font-medium
                                                    text-white
                                                    uppercase
                                                    tracking-wider
                                                    "
                                                >
                                                    Variant Model
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="
                                                    px-6
                                                    py-3
                                                    text-left text-xs
                                                    font-medium
                                                    text-white
                                                    uppercase
                                                    tracking-wider
                                                    "
                                                >
                                                    Price
                                                </th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200">
                                                <tr v-if="singleData.length == 0" >
                                                    <td class="px-6 py-4 whitespace-nowrap" colspan="2" style="text-align:center;"> No Data</td>
                                                </tr>
                                                <tr v-for="item in singleData" :key="item.id" :class="item.data_value == null ? 'empty_data' : ''">
                                                <td class="px-4 py-3 " v-if="item.data_value !== null">
                                                    <span
                                                    class="
                                                        inline-flex
                                                        text-xs
                                                        leading-5
                                                        font-semibold
                                                        text-black
                                                    "
                                                    >
                                                    {{item.feature_type}}
                                                    </span>
                                                </td>
                                                <td class="px-4 py-3 " v-if="item.data_value !== null">
                                                    <span
                                                    class="
                                                        inline-flex
                                                        items-center
                                                        text-xs
                                                        leading-5
                                                        font-semibold
                                                        text-black
                                                    "
                                                    >
                                                    <font-awesome-icon icon="rupee-sign"  size="1x" class="text-black mr-2" />{{JSON.parse(item.data_value).variant_price}}
                                                    </span>
                                                </td>
                                                </tr>

                                                <!-- More people... -->
                                            </tbody>
                                            </table>
                                       </div>
                                   </div>
                               </div>
                           </div>
           </div>
        </div>
        <div class="btn_grps">
            <nuxt-link to="/contact-us/test-drive">Test drive</nuxt-link>
            <nuxt-link to="/contact-us/contact">Contact Us</nuxt-link>
            <button type="button" @click="formModal = true">Book a Car</button>
        </div>
        <Loading v-if="loading == true" />
        <FormModal  @closeModal="closeModal" v-if="formModal == true"/>
    </div>
</template>

<script>
import axios from '~/plugins/axios'
import Loading from '../components/Loading.vue'
import FormModal from '../components/modals/formModal1.vue'
export default {
    components:{
        Loading,
        FormModal
    },
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
            data_found:false,
            data_res:false,
            loading:false,
            formModal:false,
        }
    },
    mounted(){
        if(this.$store.state.cars.length == 0){
            this.GetModels();
        }
    },
    methods:{
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
        },
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
                this.loading = true
                axios.get(process.env.baseUrl + 'api/show/car/' + this.vehicleModel)
                .then((res)=>{
                    var data = res.data;
                    const {feature_model} = data;
                    this.singleData = feature_model;
                    if(res){
                        this.data_res = true
                        this.loading = false
                    }
                }).catch((err)=>{
                    console.log(err);
                    this.data_found = true
                    this.loading = false
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
.form_sec form select{
    background: transparent;
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
.variant_model_icon{
    position: relative;
    float: right;
    bottom: 28px;
    right: 7px;
    z-index: -2;
}
.price_table_sec thead {
    background: #002c5f;
}
.price_table_sec tbody tr:nth-child(odd) {
    background: #e6f0fa;
}
.price_box{
    width: 80%;
    margin: 20px auto;
}
.btn_grps{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 60px 0;
}
.btn_grps button, .btn_grps a{
    background:#002c5f;
    border: none;
    outline: none;
    padding: 6px 25px;
    color: white;
    border-radius: 5px;
    font-size: 17px;
    margin: 10px 20px;
}
.btn_grps a:hover{
    color: white;
}
@media only screen and (min-width:300px) and (max-width:600px){
    .form_sec form{
        flex-wrap: wrap;
    }
    .form_sec form div{
        width: 80%!important;
        margin: 20px!important;
    }
    .price_table_sec {
        width: 100%!important;
    }
    .btn_grps{
        flex-wrap: wrap;
        text-align: center;
    }
    .btn_grps button, .btn_grps a{
        width: 60%!important;
        padding: 10px 25px!important;
    }
}
@media only screen and (min-width: 1270px) and (max-width: 1366px){
    .form_sec form div{
        width: 24%!important;
    }
    .price_table_sec{
        width: 60%!important;
    }
}
</style>