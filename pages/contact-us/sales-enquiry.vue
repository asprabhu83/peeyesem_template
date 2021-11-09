<template>
  <div class="my-16">
      <div class="heading text-center my-4">
          Sales Enquiry
      </div>
      <div class="explain text-center mt-4 mb-5">Please fill the below fields to know more about your favorite Hyundai car.</div>
      <div class="form_sec">
          <div class="image_sec">
              <img :src="require('@/assets/img/cars/form_poster2.jpg')" alt="img" style="width:100%;" />
          </div>
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
                    <div class="btn_box">
                        <button type="button" @click="form_tab_index = 1">Next</button>
                    </div>
            </form>
          </div>
          <div class="step step2" :class="form_tab_index == 1 ? 'active' : ''" >
              <div class="title">Dealership & Enquiry Details</div>
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
                                id="enquiry"
                                v-model="enquiry"
                            >
                            <option class="text-xl " value="">Select Enquiry For</option>
                            <option class="text-xl" :value="model" v-for="model in enquiryList"
                                :key="model" >{{model}}</option>
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
                        id="dealer"
                        type="text"
                        placeholder="Select Dealer"
                        v-model="dealer"
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
                        id="comments"
                        type="text"
                        placeholder="Comments"
                        v-model="comments"
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
                    <div class="btn_box">
                        <button type="button" @click="form_tab_index = 0">Previous</button>
                        <button type="button" @click="AddSalesData">Submit</button>
                    </div>
            </form>
          </div>
      </div>
      <div class="my-5 active_sec">
          <div :class="form_tab_index == 0 ? 'active' : ''"></div>
          <div :class="form_tab_index == 1 ? 'active' : ''"></div>
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
            enquiry:'',
            dealer:'',
            comments:'',
            enquiryList:[
                'sales',
                'others'
            ],
            form_tab_index:0,
            agreement:false,
        }
    },
    methods:{
        AddSalesData(){
            var data_value = {
                enquiry:this.enquiry,
                dealer:this.dealer,
                comments:this.comments
            }
            data_value = JSON.stringify(data_value);
            axios.post(process.env.baseUrl + 'api/car_form/store',{
                full_name:this.name,
                email_id:this.email,
                mobile_no:this.mobile,
                form_type:'sales_enquiry',
                data_form_value:data_value
            }).then((res)=>{
                if(res){
                    this.name = '';
                    this.email = '';
                    this.mobile = '';
                    this.enquiry = '';
                    this.dealer = '';
                    this.comments = '';
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
</style>