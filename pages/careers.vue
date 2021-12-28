<template>
  <div>
      <div class="img_sec">
          <img :src="require('@/assets/img/cars/career_poster2.webp')" alt="img" style="width:100%;" />
      </div>
      <div class="my-16">
          <div class="form_sec">
          <div class="step step1" :class="form_tab_index == 0 ? 'active' : ''" >
               <div class="title">We are Hiring</div>
               <div class="msg_box my-1">
                   <div class="error pt-3 text-green-500" v-if="success == true">Added Successfully</div>
                   <div class="error pt-3 text-red-500" v-if="error == true">Invalid Data</div>
                   <div class="error pt-3 text-red-500" v-if="email_err == true">Invalid Email</div>
              </div>
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
                        id="mobile"
                        type="text"
                        placeholder="Mobile Number"
                        v-model="mobile"
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
                        id="message"
                        type="text"
                        placeholder="Position"
                        v-model="position"
                        />
                    </div>
                    <div class="btn_box" >
                        <button type="button" @click="PostValue">Submit</button>
                    </div>
            </form>
          </div>
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
            position:'',
            success:false,
            error:false,
            email_err:false
        }
    },
    methods:{
        PostValue(e){
            var btn = e.target;
            btn.innerHTML = 'Loading';
            var err = 0;
            this.error = false;
            this.email_err = false;
            var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(this.email == '' || this.name == '' || this.mobile == ''){
                err++
                this.error = true;
                btn.innerHTML = 'Submit';
            }else{
                if(!emailRegex.test(this.email)){
                    err++;
                    this.email_err = true;
                    btn.innerHTML = 'Submit';
                }
                btn.innerHTML = 'Submit';
            }
            if(err == 0){
                var data_value = {
                    position:this.position
                }
                data_value = JSON.stringify(data_value);
                this.$axios.post(process.env.baseUrl + 'api/car_form/store',{
                    full_name:this.name,
                    email_id:this.email,
                    form_type:'careers',
                    mobile_no:this.mobile,
                    data_form_value:data_value
                }).then((res)=>{
                    this.name = '';
                    this.email = '';
                    this.mobile = '';
                    this.position = '';
                    this.success = true;
                    setTimeout(()=>{
                        this.success = false;
                    },2500)
                    btn.innerHTML = 'Submit';
                }).catch((err)=>{
                    console.log(err);
                    this.error = true;
                    btn.innerHTML = 'Submit';
                })
            }
        }
    }
}
</script>

<style scoped>
@media only screen and (min-width: 760px) and (max-width: 960px){
    .form_sec{
        width: 90%!important;
    }
    .form_sec .step{
        width: 58%!important;
    }
}
@media only screen and (min-width: 961px) and (max-width: 1030px){
    .form_sec{
        width: 90%!important;
    }
    .form_sec .step{
        width: 51%!important;
    }
}
@media only screen and (min-width:300px) and (max-width:600px){
  .form_sec .step{
     width: 100%!important;
   }
  .form_sec{
    width: 100%!important;
  }
}
/* .btn_box button:disabled{
    opacity: 0.7;
    cursor: not-allowed;
} */
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