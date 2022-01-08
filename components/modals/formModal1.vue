<template>
  <section class="form_modal_box">
        <div class="w-4/12 card_body bg-white card mx-auto">
           <form class="pb-12 px-8">
               <div class="heading flex items-center justify-between pt-6 pb-2 font-semibold text-lg">Book a Car<font-awesome-icon icon="times"  size="1x" class="text-red-600 cursor-pointer" @click="closeModal" /></div>
               <hr class="mb-4" style="height:1px;background:gray;opacity:0.3;" />
               <div class="msg_box mb-3">
                   <div class="error text-red-500" v-if="error == true">{{$store.state.empty_error_msg}}</div>
                   <div class="error text-red-500" v-if="email_err == true">{{$store.state.email_error_msg}}</div>
              </div>
               <div class="mb-4">
                    <input
                    class="
                        shadow
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
                    type="text"
                    placeholder="Your Name"
                    v-model="name"
                    />
                </div>
                <div class="mb-4">
                    <select
                    class="
                      shadow
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
                    v-model="vehicleModel"
                  >
                  <option class="text-xl " value="">Choose Model</option>
                  <option class="text-xl" :value="model.car_title" v-for="model in this.$store.state.originalDataCars"
                    :key="model.id" >{{model.car_title}}</option>
                  </select>
                </div>
               <div class="mb-4">
                    <input
                    class="
                        shadow
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
                    type="text"
                    v-model="email"
                    placeholder="Your Email"
                    />
                </div>
               <div class="mb-4">
                    <input
                    class="
                        shadow
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
                    type="number"
                    v-model="mobile"
                    placeholder="Your Phone"
                    />
                </div>
                <div class="mb-4">
                    <select
                    class="
                      shadow
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
                  <option class="text-xl " value="">Choose City</option>
                  <option class="text-xl" :value="model" v-for="model in CityList"
                    :key="model" >{{model}}</option>
                  </select>
                </div>
                <div class="mb-8">
                    <textarea
                    class="
                        shadow
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
                    type="text"
                    v-model="comment"
                    placeholder="Comment"
                    />
                </div>
               <div class="btn_grp">
                   <button  type="button" @click="BookCar" class="  text-white font-bold  mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
               </div>
           </form>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            name:'',
            vehicleModel:'',
            email:'',
            mobile:'',
            error:false,
            email_err:false,
            CityList:[
                'Chennai',
                'Tuticorin',
                'Kovilpatti',
                'Trichendur',
                'Ramnad',
                'Madurai'
            ],
            city:'',
            comment:'',
        }
    },
    mounted(){
        if(this.$store.state.cars.length == 0){
            this.GetModels();
        }
    },
    methods:{
        closeModal(){
            this.$emit('closeModal', 'modal1')
        },
        BookCar(){
            var err = 0;
            this.email_err=false;
            this.error=false;
            if(this.is_empty_value(this.name,this.email,this.mobile,this.vehicleModel)){
                err++;
                this.error=true;
            }else{
                if(this.is_invalid_email(this.email)){
                    err++;
                    this.email_err=true;
                }
            }
            if(err == 0){
                this.$axios.post(process.env.baseUrl + 'api/car_form/store',{
                    full_name:this.name,
                    email_id:this.email,
                    mobile_no:this.mobile,
                    vehicle_model:this.vehicleModel,
                    form_type:'book_car',
                }).then((res)=>{
                    if(res){
                        this.name = '';
                        this.email = '';
                        this.mobile = '';
                        this.vehicleModel = '';
                        this.closeModal();
                    }
                    console.log(res)
                }).catch((err)=>{
                    console.log(err);
                })
            }
        }
    }
}
</script>

<style scoped>
@media only screen and (min-width: 760px) and (max-width: 960px){
    .form_modal_box .card_body{
        width: 55%!important;
    }
}
@media only screen and (min-width: 961px) and (max-width: 1030px){
    .form_modal_box .card_body{
        width: 45%!important;
    }
}
</style>