<template>
  <div class="my-24">
      <div class="heading text-center my-4">EMI Calculator</div>
      <div class="explanation text-center my-3">EMI calculator helps you to calculate the EMI for the loan amount to make a Hyundai car purchase through finance.</div>
      <div class="form_sec">
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
                        id="vehicle"
                        type="text"
                        placeholder="Select Vehicle"
                        v-model="vehicle"
                        />
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
                        id="variant"
                        type="text"
                        placeholder="Select Variant"
                        v-model="variant"
                        />
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
                        id="roadPrice"
                        type="text"
                        placeholder="On Road Price"
                        v-model="roadPrice"
                        />
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
                        id="interest"
                        type="text"
                        placeholder="Rate of Interest"
                        v-model="interest"
                        />
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
                        id="tenure"
                        type="text"
                        placeholder="Select Tenure"
                        v-model="tenure"
                        />
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
export default {
    data(){
        return{
            vehicle:'',
            variant:'',
            roadPrice:'',
            interest:'',
            tenure:'',
            DownPayment:''
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