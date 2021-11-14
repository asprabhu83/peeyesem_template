<template>
  <div class="my-24">
      <div class="heading text-center my-4">EMI Calculator</div>
      <div class="explanation text-center my-3">EMI calculator helps you to calculate the EMI for the loan amount to make a Hyundai car purchase through finance.</div>
      <div class="form_sec">
          <div class="input_box">
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
                    id="cars"
                    v-model="vehicle"
                    @change="filterModel"
                  >
                  <option class="text-xl " value="">Select Model</option>
                  <option class="text-xl" :value="model.id" v-for="model in this.$store.state.originalDataCars"
                    :key="model.id" >{{model.car_title}}</option>
                  </select>
                  <font-awesome-icon icon="chevron-down"  size="1x" class="text-black variant_model_icon mr-2" />
                </div>
          <div class="input_box">
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
                    id="variant"
                    v-model="variant"
                    @change="changeRoadPrice"
                  >
                  <option class="text-xl " value="">Select Variant</option>
                  <option class="text-xl" :value="model.id" v-for="model in variantList"
                    :key="model.id" >{{model.feature_type}}</option>
                  </select>
                <font-awesome-icon icon="chevron-down"  size="1x" class="text-black variant_model_icon mr-2" />
          </div>
          <div class="input_box text_box">
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
                        id="roadPrice"
                        type="text"
                        placeholder="Exshowroom Price"
                        v-model="roadPrice"
                        />
          </div>
          <div class="input_box text_box">
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
                        id="interest"
                        type="text"
                        placeholder="Rate of Interest"
                        v-model="interest"
                        />
          </div>
          <div class="input_box">
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
                    id="tenure"
                    v-model="tenure"
                  >
                  <option class="text-xl " value="">Select Tenure</option>
                  <option class="text-xl" :value="tenure" v-for="tenure in TenureList"
                    :key="tenure" >{{tenure}}</option>
                  </select>
                <font-awesome-icon icon="chevron-down"  size="1x" class="text-black variant_model_icon mr-2" />
          </div>
          <div class="input_box">
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
                        id="DownPayment"
                        type="text"
                        placeholder="Down Payment"
                        v-model="DownPayment"
                        />
          </div>
      </div>
      <div class="btn_box">
          <button type="button">Back</button>
      </div>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
    data(){
        return{
            vehicle:'',
            variant:'',
            roadPrice:'',
            interest:'',
            tenure:'',
            DownPayment:'',
            TenureList:[
                '12 Months',
                '24 Months',
                '36 Months',
                '48 Months',
                '60 Months',
                '72 Months',
                '84 Months'
            ],
            variantList:[]
        }
    },
    mounted(){
        if(this.$store.state.cars.length == 0){
            this.GetModels();
        }
    },
    methods:{
        GetModels(){
            axios.get(process.env.baseUrl + 'api/cars/all')
            .then((res)=>{
                this.$store.state.cars = res.data.cars;
                this.$store.state.originalDataCars = res.data.cars;
            }).catch((err)=>{
                console.log(err);
            })
        },
        filterModel(){
            if(this.vehicle !== ''){
                axios.get(process.env.baseUrl + 'api/show/car/' + this.vehicle)
                .then((res)=>{
                    this.variantList = res.data.feature_model;
                })
            }
        },
        changeRoadPrice(){
            if(this.variant !== ''){
                var item = this.variantList.filter((item)=>{
                    return item.id == this.variant
                })
                const [variant] = item;
                const {data_value} = variant;
                this.roadPrice = JSON.parse(data_value).variant_price;
            }
        }
    }
}
</script>

<style scoped>
@media only screen and (min-width:300px) and (max-width:600px){
    .explanation {
        padding: 0 15px;
    }
    .form_sec{
        width: 90%!important;
    }
    .form_sec .input_box{
        width: 90%!important;
    }
}
@media only screen and (min-width: 1270px) and (max-width: 1366px){
    .form_sec{
        justify-content: center;
    }
}
.variant_model_icon{
    position: relative;
    float: right;
    bottom: 28px;
    right: 7px;
    z-index: -2;
}
select{
    background: transparent;
}
.heading{
    font-size: 24px;
    font-weight: 600;
}
.explanation{
    font-size: 15px;
    font-weight: 500;
}
.form_sec{
    width: 60%;
    margin: 40px auto;
    display: flex;
    flex-wrap: wrap;
}
.form_sec .input_box{
    width: 47%;
    margin: 20px 15px;
}
.form_sec .input_box.text_box{
    margin-top: 0;
}
.btn_box{
    text-align: center;
    margin: 40px 0;
}
.btn_box button{
    padding: 6px 25px;
    background: #002c5f;
    color: white;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 4px;
}
</style>