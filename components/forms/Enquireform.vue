<template>
       <div class="form_sec">
                 <form >
                     <div class="msg_box">
                        <div class="error py-3 text-green-500" v-if="success == true">Success</div>
                        <div class="error py-3 text-red-500" v-if="error == true">Invalid Data</div>
                    </div>
                     <div class="mb-4 mt-4 input_box">
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
                        v-model="name"
                        />
                    </div>
                    <div class="mb-4  input_box">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="email"
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
                        id="email"
                        type="email"
                        placeholder="Email Id"
                        v-model="email"
                        />
                    </div>
                    <div class="mb-4  input_box">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="mobile"
                            >
                            Mobile
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
                        placeholder="Mobile Number"
                        v-model="mobile"
                        />
                    </div>
                    <div class="mb-4 input_box">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="vehicle_model"
                            >
                            Vehicle Model
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
                            >
                            <option class="text-xl " value="">Select Vehicle Model</option>
                            <option class="text-xl" :value="model.car_title" v-for="model in this.$store.state.originalDataCars"
                                :key="model.id" >{{model.car_title}}</option>
                            </select>
                    </div>
                    <div class="mb-4 input_box">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="fuel_type"
                            >
                            Fuel Type
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
                                id="fuel_type"
                                v-model="fuelType"
                            >
                            <option class="text-xl " value="">Select Fuel Type</option>
                            <option class="text-xl" :value="model.name" v-for="model in FuelTypeList"
                                :key="model.id" >{{model.name}}</option>
                            </select>
                    </div>
                    <div class="mb-6 input_box">
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
                            >
                            <option class="text-xl " value="">Select City</option>
                            <option class="text-xl" :value="city.name" v-for="city in CityList"
                                :key="city.id" >{{city.name}}</option>
                            </select>
                    </div>
                    <div class="my-4">
                        <div class="checkbox_sec text-center">
                            <label class="inline-flex items-center">
                                <input type="checkbox" v-model="agreement" class="form-checkbox">
                                <span class="ml-2 cursor-pointer check_box_text">I have read & understood the disclaimer</span>
                            </label>
                        </div>
                    </div>
                    <div class="btn_box text-center">
                        <button type="button" @click="Enquire" class="enquire_btn">Submit</button>
                    </div>
                 </form>
             </div>
</template>

<script>
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
            FuelTypeList:[
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
            name:'',
            email:'',
            mobile:'',
            vehicleModel:'',
            city:'',
            fuelType:'',
            agreement:false,
            success:false,
            error:false
        }
    },
    mounted(){
        if(this.$store.state.cars.length == 0){
            this.GetModels();
        }
    },
    methods:{
        sortedArray() {
            let sortedRecipes = this.$store.state.cars;
            
            sortedRecipes = sortedRecipes.sort((a,b) => {
                let fa = a.car_type.toLowerCase(), fb = b.car_type.toLowerCase();
                if (fa < fb) {
                    return -1
                }
                if (fa > fb) {
                    return 1
                }
                return 0
            })
            this.$store.state.cars = sortedRecipes;
        },
        GetModels(){
            this.$axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
            this.$axios.defaults.withCredentials = false;
            this.$axios.get(process.env.baseUrl + 'api/cars/all')
            .then((res)=>{
                this.$store.state.cars = res.data.cars;
                this.$store.state.originalDataCars = res.data.cars;
                this.sortedArray();
            }).catch((err)=>{
                console.log(err);
            })
        },
        Enquire(){
            this.success = false;
            this.error = false;
            var data_value = {
                city:this.city,
                fuel_type:this.fuelType
            }
            data_value = JSON.stringify(data_value);
            this.$axios.post(process.env.baseUrl + 'api/car_form/store',{
                full_name:this.name,
                email_id:this.email,
                mobile_no:this.mobile,
                vehicle_model:this.vehicleModel,
                form_type:'single_car',
                data_form_value:data_value
            }).then((res)=>{
                if(res){
                    this.name = '';
                    this.email = '';
                    this.mobile = '';
                    this.vehicleModel = '';
                    this.city = '';
                    this.fuelType = '';
                    this.success = true
                }
            }).catch((err)=>{
                console.log(err);
                this.error = false
            })
        }
    }
}
</script>

<style scoped>
@media only screen and (min-width: 760px) and (max-width: 960px){
    form .input_box{
        width: 45%!important;
    }
}
@media only screen and (min-width:300px) and (max-width:600px){
    form .input_box{
        width: 92%!important;
    }
    .check_box_text{
        font-size: 14px!important;
    }
}
   form .input_box{
       width: 46%;
       margin-left: 15px;
       margin-right: 15px;
       display: inline-block;
   }
   .enquire_btn{
        padding: 8px 55px;
        background: #002c5f;
        color: white;
        outline: none;
        border: none;
        cursor: pointer;
        border-radius: 4px;
   }
</style>