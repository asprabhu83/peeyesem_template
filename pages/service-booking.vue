<template>
  <div class="my-16">
      <div class="heading text-center my-4">
          Book A Service
      </div>
      <div class="explain text-center mt-4 mb-5">Peeyesyem Hyundai provides you with Online Service booking at your Convenient time. Peeyesyem Hyundai has the largest network of High Quality Workshops for Service and Repair of your Hyundai Cars.<b> Make an appointment at your convenience</b>, Pick up and Drop facility also available.
          <br/>
          Book an appointment for having your Hyundai Car serviced, please fill the form. Our service team will get back to you soon.
      </div>
      <div class="form_sec">
          <div class="step step1" :class="form_tab_index == 0 ? 'active' : ''">
               <div class="title">Personal Details</div>
            <form >
                <div class="mb-4 mt-4">
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
                    <div class="mb-4 ">
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
                    <div class="mb-6 ">
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
                        type="number"
                        placeholder="Mobile Number"
                        v-model="mobile"
                        />
                    </div>
                    <div class="title">Vehicle Details</div>
                    <div class="mb-4 mt-4">
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
                    <div class="mb-4 ">
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
                        id="fuel_type"
                        type="text"
                        placeholder="Registration Number"
                        v-model="regNumber"
                        />
                    </div>
                    <div class="mb-6 ">
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
                        id="fuel_type"
                        type="text"
                        placeholder="Kms Driven"
                        v-model="kmsDriven"
                        />
                    </div>
                    <div class="title">Service & Dealership Details</div>
                    <div class="mb-4 mt-4">
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
                        id="vehicle_model"
                        :type="dateType"
                        @focus="dateType ='date'"
                        placeholder="Service date"
                        v-model="serviceDate"
                        />
                    </div>
                    <div class="mb-4 ">
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
                        id="fuel_type"
                        :type="timeType"
                        @focus="timeType ='time'"
                        placeholder="Service Time"
                        v-model="serviceTime"
                        />
                    </div>
                    <div class="mb-4 ">
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
                                v-model="dealer"
                            >
                            <option class="text-xl " value="">Select City</option>
                            <option class="text-xl" :value="model.name" v-for="model in CityList"
                                :key="model.id" >{{model.name}}</option>
                            </select>
                    </div>
                    <div class="mb-6">
                        <div class="checkbox_sec">
                            <label class="inline-flex items-center">
                                <input type="checkbox" v-model="agreement" class="form-checkbox">
                                <span class="ml-2 cursor-pointer">I have read & understood the disclaimer</span>
                            </label>
                        </div>
                    </div>
                    <div class="btn_box">
                        <button type="button" @click="AddServiceData">Submit</button>
                    </div>
            </form>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            form_tab_index:0,
            name:'',
            email:'',
            mobile:'',
            vehicleModel:'',
            regNumber:'',
            kmsDriven:'',
            serviceDate:'',
            serviceTime:'',
            dealer:'',
            agreement:false,
            dateType:'text',
            timeType:'text',
            CityList:[
                {
                    id:1,
                    name:'Madurai'
                },
                {
                    id:2,
                    name:'Guindy'
                },
                {
                    id:3,
                    name:'Kotturpuram'
                },
                {
                    id:4,
                    name:'Tondiarpet'
                },
                {
                    id:5,
                    name:'Trichendur'
                },
                {
                    id:6,
                    name:'Ramanathapuram'
                },
                {
                    id:7,
                    name:'Kovilpatti'
                },
                {
                    id:8,
                    name:'Tuticorin'
                },
                {
                    id:9,
                    name:'Karaikudi'
                }
            ]
        }
    },
    mounted(){
        if(this.$store.state.cars.length == 0){
            this.GetModels();
        }
        window.scrollTo(0, 0)
    },
    methods:{
        AddServiceData(){
            var data_value = {
                reg_number:this.regNumber,
                kms_driven:this.kmsDriven,
                service_date:this.serviceDate,
                service_time:this.serviceTime,
                dealer:this.dealer
            }
            data_value = JSON.stringify(data_value);
            this.$axios.post(process.env.baseUrl + 'api/car_form/store',{
                full_name:this.name,
                email_id:this.email,
                mobile_no:this.mobile,
                vehicle_model:this.vehicleModel,
                form_type:'book_service',
                data_form_value:data_value
            }).then((res)=>{
                if(res){
                    this.name = '';
                    this.email = '';
                    this.mobile = '';
                    this.vehicleModel = '';
                    this.regNumber = '';
                    this.kmsDriven = '';
                    this.serviceDate = '';
                    this.serviceTime = '';
                    this.dealer = '';
                    this.form_tab_index = 0;
                    this.agreement = false;
                }
                console.log(res)
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
}
</script>

<style scoped>
@media only screen and (min-width: 760px) and (max-width: 960px){
    .form_sec{
        width: 90%!important;
        justify-content: center!important;
    }
    .form_sec .image_sec{
        display: none!important;
    }
    .form_sec .step{
        width: 58%!important;
    }
    .explain{
        width: 70%!important;
    }
}
@media only screen and (min-width: 961px) and (max-width: 1030px){
    .form_sec{
        width: 90%!important;
    }
}
@media only screen and (min-width:300px) and (max-width:600px){
  .form_sec .step{
     width: 100%!important;
   }
  .form_sec{
    width: 100%!important;
  }
  .image_sec{
      display: none;
  }
}
@media only screen and (min-width: 1270px) and (max-width: 1366px){
    .form_sec{
        width: 80%!important;
    }
    .image_sec img{
       object-fit: cover!important;
       object-position: inherit!important;
    }
}
.heading{
    font-weight: 600;
    font-size: 25px;
}
.explain{
    font-size: 15px;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
}
.explain b{
    font-weight: 600;
}
.btn_box button{
    padding: 4px 40px;
    background: #002c5f;
    color: white;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 4px;
}
.form_sec{
    width: 60%;
    margin: 30px auto;
    display: flex;
    justify-content: center;
}
.form_sec .image_sec{
    width: 49%;
    height: 370px;
    object-fit: cover;
    object-position: left;
}
.image_sec img{
    height: 100%;
}
.form_sec .step{
    width: 49%;
    padding: 0 40px;
    display: none;
}
.form_sec .step.active{
    display: block;
}
.form_sec .step .title{
    font-weight: 600;
    font-size: 19px;
}
.active_sec{
    display: flex;
    justify-content: center;
    align-items: center;
}
.active_sec div{
    height: 10px;
    width: 10px;
    background: lightgray;
    margin: 10px;
}
.active_sec div.active{
    background: #002c5f;
    height: 11px;
    width: 11px;
}
.step2 .btn_box, .step3 .btn_box{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.checkbox_sec span{
    font-size: 15px;
}
.checkbox_sec{
    padding-left:4px;
}
</style>