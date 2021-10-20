<template>
  <div class="my-16">
      <div class="heading text-center my-16">
          Extended Warranty
      </div>
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
              <div class="title">Vehicle Details</div>
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
                        id="vehicleModel"
                        type="text"
                        placeholder="Select Vehicle Model"
                        v-model="vehicleModel"
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
                        id="fuelType"
                        type="text"
                        placeholder="Select fuel type"
                        v-model="fuelType"
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
                        id="transmission"
                        type="text"
                        placeholder="Select Transmission"
                        v-model="transmission"
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
                        id="kmsDriven"
                        type="text"
                        placeholder="Kms Driven"
                        v-model="kmsDriven"
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
                        id="salesDate"
                        type="text"
                        placeholder="Sales Date"
                        v-model="salesDate"
                        />
                    </div>
                    <div class="mb-6">
                        <div class="checkbox_sec">
                            <label class="inline-flex items-center">
                                <input type="checkbox" class="form-checkbox">
                                <span class="ml-2 cursor-pointer">I have read & understood the disclaimer</span>
                            </label>
                        </div>
                    </div>
                    <div class="btn_box">
                        <button type="button" @click="form_tab_index = 0">Previous</button>
                        <button type="button">Submit</button>
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
export default {
    data(){
        return{
            name:'',
            email:'',
            mobile:'',
            form_tab_index:0,
            vehicleModel:'',
            fuelType:'',
            transmission:'',
            kmsDriven:'',
            salesDate:''
        }
    }
}
</script>

<style scoped>
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