<template>
  <div class="my-16">
      <div class="heading text-center my-16">
          Sell Car
      </div>
      <div class="form_sec">
          <div class="step step1" :class="form_tab_index == 0 ? 'active' : ''">
               <div class="title">Personal Details</div>
            <form >
                <div class="msg_box my-1">
                   <div class="error pt-3 text-red-500" v-if="error == true">Invalid Data</div>
                   <div class="error pt-3 text-red-500" v-if="email_err == true">Invalid Email</div>
              </div>
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
                    <div class="btn_box">
                        <button type="button" data-target="1" @click="NextTab">Next</button>
                    </div>
            </form>
          </div>
          <div class="step step2" :class="form_tab_index == 1 ? 'active' : ''">
               <div class="title">Vehicle Details - Part I</div>
            <form >
                <div class="msg_box my-1">
                   <div class="error pt-3 text-red-500" v-if="error == true">Invalid Data</div>
              </div>
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
                            id="Manufacturer"
                            v-model="Manufacturer"
                        >
                        <option class="text-xl " value="">Select Manufacturer</option>
                        <option class="text-xl" :value="model.name" v-for="model in Brands"
                            :key="model.id" >{{model.name}}</option>
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
                        id="Model_Variant"
                        type="text"
                        placeholder="Model - Variant"
                        v-model="ModelVariant"
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
                            id="fuelType"
                            v-model="fuelType"
                        >
                        <option class="text-xl " value="">Select fuel type</option>
                        <option class="text-xl" :value="model.name" v-for="model in FuelList"
                            :key="model.id" >{{model.name}}</option>
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
                        id="kms"
                        type="text"
                        placeholder="Kms completed"
                        v-model="kms"
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
                        id="color"
                        type="text"
                        placeholder="Color"
                        v-model="color"
                        />
                    </div>
                    <div class="btn_box">
                        <button type="button" @click="form_tab_index = 0,error = false">Previous</button>
                        <button type="button" data-target="2" @click="NextTab">Next</button>
                    </div>
            </form>
          </div>
          <div class="step step3" :class="form_tab_index == 2 ? 'active' : ''">
               <div class="title">Vehicle Details - Part II</div>
            <form >
                <div class="msg_box my-1">
                   <div class="error pt-3 text-red-500" v-if="error == true">Invalid Data</div>
              </div>
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
                            id="purchaseYear"
                            v-model="purchaseYear"
                        >
                        <option class="text-xl " value="">Select Purchase Year</option>
                        <option class="text-xl" :value="model" v-for="model in yearList"
                            :key="model" >{{model}}</option>
                        </select>
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
                            id="ownership"
                            v-model="ownership"
                        >
                        <option class="text-xl " value="">Select Ownership</option>
                        <option class="text-xl" :value="model.name" v-for="model in ownershipList"
                            :key="model.id" >{{model.name}}</option>
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
                        id="price"
                        type="text"
                        placeholder="Expected Price"
                        v-model="price"
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
                            id="sellType"
                            v-model="sellType"
                        >
                        <option class="text-xl " value="">Select Sell Type</option>
                        <option class="text-xl" :value="model.name" v-for="model in SellTypeList"
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
                        <button type="button" @click="form_tab_index = 1,error = false">Previous</button>
                        <button type="button" @click="AddSellCarData">Submit</button>
                    </div>
            </form>
          </div>
      </div>
      <div class="my-5 active_sec">
          <div :class="form_tab_index == 0 ? 'active' : ''"></div>
          <div :class="form_tab_index == 1 ? 'active' : ''"></div>
          <div :class="form_tab_index == 2 ? 'active' : ''"></div>
      </div>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
    data(){
        return{
            barMinValue: 10,
            barMaxValue: 90,
            form_tab_index:0,
            name:'',
            email:'',
            mobile:'',
            Manufacturer:'',
            ModelVariant:'',
            fuelType:'',
            regNumber:'',
            kms:'',
            color:'',
            purchaseYear:'',
            ownership:'',
            price:'',
            agreement:false,
            error:false,
            email_err:false,
            sellType:'',
            Brands:[
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
            ownershipList:[
                {
                    id:1,
                    name:'1st owner'
                },
                {
                    id:2,
                    name:'2nd owner'
                },
                {
                    id:3,
                    name:'3rd owner'
                }
            ],
            SellTypeList:[
                {
                    id:1,
                    name:'Sell'
                },
                {
                    id:2,
                    name:'Exchange'
                }
            ],
            yearList:[],
        }
    },
    mounted(){
        this.IncrementYears();
    },
    methods:{
        IncrementYears(){
            var startYear = 1990;
            var currentYear = new Date().getFullYear();
            for(var i=startYear;i<=currentYear;i++){
                this.yearList.push(i);
            }
        },
        NextTab(e){
            this.error = false;
            var target = e.target.getAttribute('data-target');
            var err = 0;
            if(target == '1'){
               if(this.name == '' || this.email == '' || this.mobile == ''){
                   err++;
                   this.error = true;
               }
            }
            if(target == '2'){
                if(this.Manufacturer == '' || this.ModelVariant == '' || this.fuelType == ''){
                    err++;
                    this.error = true;
                }
            }
            if(err == 0){
                this.form_tab_index = target;
            }
        },
        AddSellCarData(){
            axios.post('http://127.0.0.1:8000/api/sell_car/store',{
                full_name:this.name,
                email:this.email,
                mobile:this.mobile,
                car_model:this.Manufacturer,
                model_variant:this.ModelVariant,
                fuel_type:this.fuelType,
                registration_number:this.regNumber,
                kms_completed:this.kms,
                color:this.color,
                purchase_year:this.purchaseYear,
                ownership:this.ownership,
                expected_price:this.price,
                sell_type:this.sellType,
            }).then((res)=>{
                if(res){
                    this.name = '';
                    this.email = '';
                    this.mobile = '';
                    this.Manufacturer = '';
                    this.ModelVariant = '';
                    this.fuelType = '';
                    this.regNumber = '';
                    this.kms = '';
                    this.color = '';
                    this.purchaseYear = '';
                    this.ownership = '';
                    this.price = '';
                    this.sellType ='';
                    this.agreement = false;
                    this.form_tab_index = 0;
                }
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
    font-weight: 600;
    font-size: 25px;
}
.explain{
    font-size: 16px;
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