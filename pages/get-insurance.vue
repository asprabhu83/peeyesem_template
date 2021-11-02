<template>
  <div class="my-16">
      <div class="heading my-5">Get Insurance</div>
      <div class="form_sec">
          <div class="step step1" :class="form_tab_index == 0 ? 'active' : ''" >
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
                        type="text"
                        placeholder="Mobile Number"
                        v-model="mobile"
                        />
                    </div>
                    
                    <div class="title">Vehicle Details</div>
                    <form >
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
                                id="vehicleModel"
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
                                id="regNumber"
                                type="text"
                                placeholder="Registration Number"
                                v-model="regNumber"
                                />
                            </div>
                            <div class="mb-6">
                                <div class="checkbox_sec">
                                    <label class="inline-flex items-center">
                                        <input type="checkbox" v-model="agreement" class="form-checkbox">
                                        <span class="ml-2 cursor-pointer">I have read & understood the disclaimer</span>
                                    </label>
                                </div>
                            </div>
                    </form>
                    <div class="btn_box">
                        <button type="button" @click="AddInsuranceData">Submit</button>
                    </div>
            </form>
          </div>
      </div>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
    data(){
        return{
            name:'',
            email:'',
            mobile:'',
            vehicleModel:'',
            regNumber:'',
            form_tab_index:0,
            agreement:false
        }
    },
    mounted(){
        if(this.$store.state.cars.length == 0){
            this.GetModels();
        }
    },
    methods:{
        GetModels(){
            axios.get(process.env.baseUrl + 'api/cars/index')
            .then((res)=>{
                this.$store.state.cars = res.data.cars;
                this.$store.state.originalDataCars = res.data.cars;
            }).catch((err)=>{
                console.log(err);
            })
        },
        AddInsuranceData(){
           var data_value = {
                registration_no:this.regNumber
            }
            data_value = JSON.stringify(data_value);
            axios.post(process.env.baseUrl + 'api/car_form/store',{
                full_name:this.name,
                email_id:this.email,
                mobile_no:this.mobile,
                vehicle_model:this.vehicleModel,
                form_type:'insurance',
                data_form_value:data_value
            }).then((res)=>{
                if(res){
                    window.open('https://lifeinsurance.adityabirlacapital.com/','_blank');
                    this.name = '';
                    this.email = '';
                    this.mobile = '';
                    this.vehicleModel = '';
                    this.regNumber = '';
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
@media only screen and (min-width:300px) and (max-width:600px){
  .form_sec .step{
     width: 100%!important;
   }
  .form_sec{
    width: 100%!important;
  }
}
.heading{
    font-size: 24px;
    font-weight: 600;
    text-align: center;
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
.step2 .btn_box{
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
.btn_box button{
    padding: 4px 20px;
    background: #002c5f;
    color: white;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 4px;
}
</style>