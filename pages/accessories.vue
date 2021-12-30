<template>
  <div class="accessories_page">
      <section class="accessories_content_sec">
          <div class="accessories_img_sec">
            <img
                :src="require('@/assets/img/cars/accessorie_mobis.webp')"
                alt="img"
                style="width: 100%"
            />
            <div class="img_sec_content">
                <h2>Genuine Parts</h2>
                <h4>The Perfect Opportunity to Tailor your Car</h4>
            </div>
          </div>
          <div class="container">
              <div class="heading my-16">Hyundai Genuine Parts</div>
              <div class="circle_btn_sec">
                  <div class="circle intersec1"><div> Guaranteed to Fit</div></div>
                  <div class="circle "><div> Guaranteed to Perform</div></div>
                  <div class="circle intersec2"><div> Guaranteed Genuine</div></div>
              </div>
              <div class="first_sec">
                  <p>Hyundai Genuine Parts are designed and engineered specifically for delivering performance and longevity of your Hyundai cars, all Hyundai Genuine Parts are made to the highest standards.
                  Hyundai Genuine Parts are tested under various simulated extreme conditions to ensure Quality, Reliability and Durability. Over the years, significant investments in R&D have been made to study the design, material selection and internal construction of Hyundai Genuine Parts. They are also backed by a 6 month/10,000km warranty.</p>
              </div>
              <div class="sec_sec">
                  <div class="content">
                      <div class="header">Hyundai Mobis</div>
                      <p>Hyundai MOBIS is an exclusive and official partner of Hyundai Motors in India as well as globally. Hyundai Mobis is leading the trend of change and strives to become a leading company in automotive future technology.</p>
                      <p>We promise to realize the ultimate value that Hyundai Mobis pursues as 'Safety and Happiness of our customers' by steadily advancing into the global market as well as providing fast and accurate as parts .</p>
                  </div>
                  <div class="content">
                      <div class="header">Don’t settle for second best</div>
                      <p>The Automotive Parts Market is full of cheap alternatives. As inexpensive as possible, fitting non-Genuine or refurbished Parts to your Hyundai will affect the warranty of your vehicle. Those Parts are not manufactured under such stringent standards as Hyundai Genuine Parts.</p>
                      <p>Fitting such Parts will not only hamper the quality of your car, but will also affect other parts and cause more problems, leading to more repairs, or worse, an accident.So your family’s safety and peace of mind, always insist on Hyundai Genuine Parts.</p>
                      <p>For peace of mind, always insist on Hyundai Genuine Parts</p>
                  </div>
              </div>
          </div>
      </section>
     <div class="acc_head_title mt-16 mb-8">
         <div class="text-center title">Accessories</div>
     </div>
     <div class="form_sec">
          <div class="step step1" :class="form_tab_index == 0 ? 'active' : ''" >
               <div class="title">Personal Details</div>
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
                        <button type="button" @click="PostValue">Submit</button>
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
            originalcars:[
            {
                id:1,
                name:'Hyundai All New I20',
                image:'car7.jpg',
                category:'Hatchback',
                price:'8,19,900'
            },
            {
                id:2,
                name:'Hyundai Santro',
                image:'car8.jpg',
                category:'Hatchback',
                price:'4,67,490'
            },
            {
                id:3,
                name:'GRAND i10 NIOS',
                image:'car9.webp',
                category:'Hatchback',
                price:'8,14,900'
            },
            {
                id:4,
                name:'Hyundai i20 N Line',
                image:'car10.webp',
                category:'Hatchback',
                price:'7,31,900'
            },
            {
                id:5,
                name:'Hyundai Aura',
                image:'car2.webp',
                category:'Sedan',
                price:'22,30,000'
            },
            {
                id:6,
                name:'Hyundai Verna',
                image:'car15.jpg',
                category:'Sedan',
                price:'8,19,900'
            },
            {
                id:7,
                name:'Hyundai ELANTRA',
                image:'car11.webp',
                category:'Sedan',
                price:'10,68,000'
            },
            {
                id:8,
                name:'Hyundai Tuscon',
                image:'car18.webp',
                category:'SUV',
                price:'4,67,490'
            },
            {
                id:9,
                name:'Hyundai Venue',
                image:'car4.webp',
                category:'SUV',
                price:'8,16,500'
            },
            {
                id:11,
                name:'Hyundai Alcazar',
                image:'car17.jpg',
                category:'SUV',
                price:'16,53,300'
            },
            {
                id:12,
                name:'Hyundai CRETA',
                image:'car19.webp',
                category:'SUV',
                price:'17,00,000'
            }
            ],
            name:'',
            email:'',
            mobile:'',
            success:false,
            error:false,
            email_err:false,
            form_tab_index:0,
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
                this.$axios.post(process.env.baseUrl + 'api/car_form/store',{
                    full_name:this.name,
                    email_id:this.email,
                    form_type:'accessories',
                    mobile_no:this.mobile
                }).then((res)=>{
                    this.name = '';
                    this.email = '';
                    this.mobile = '';
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
    .img_sec_content h2{
        font-size: 35px!important;
    }
    .img_sec_content h4{
        font-size: 16px!important;
    }
    .circle_btn_sec{
        width: 94%!important;
    }
    .form_sec{
        width: 95%!important;
    }
    .form_sec .step{
        width: 59%!important;
    }
}
@media only screen and (min-width: 961px) and (max-width: 1030px){
    .img_sec_content h2{
        font-size: 35px!important;
    }
    .img_sec_content h4{
        font-size: 16px!important;
    }
    .circle_btn_sec{
        width: 75%!important;
    }
    .form_sec{
        width: 80%!important;
    }
    .form_sec .step{
        width: 59%!important;
    }
}
@media only screen and (min-width:300px) and (max-width:600px){
  .form_sec .step{
     width: 100%!important;
   }
  .form_sec{
    width: 100%!important;
  }
  .accessories_content_sec .first_sec{
      width: 80%!important;
  }
  .circle_btn_sec{
      width: 100%!important;
  }
  .img_sec_content{
        top: 12%!important;
        left: 3%!important;
    }
    .img_sec_content h2{
        font-size: 17px!important;
        margin-bottom: 3px!important;
    }
    .img_sec_content h4{
        font-size: 8px!important;
    }
    .circle_btn_sec{
        flex-wrap: wrap;
        justify-content: center;
    }
    .circle_btn_sec .circle.intersec2{
        right: 0px!important;
    }
    .circle_btn_sec .circle.intersec1{
        left: 0px!important;
    }
    .circle_btn_sec .circle{
        margin-bottom: 10px;
    }
}
@media only screen and (min-width: 1270px) and (max-width: 1366px){
    .sec_sec{
        width: 80%;
        margin: 20px auto;
    }
    .form_sec .step{
        width: 60%!important;
    }
}
.accessories_img_sec{
    position: relative;
}
.img_sec_content{
    position: absolute;
    top: 15%;
    left: 5%;
}
.img_sec_content h2{
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 20px;
}
.img_sec_content h4{
    font-size: 20px;
    font-weight: 600;
}
.accessories_content_sec .sec_sec .header{
    font-size: 20px;
    font-weight: 600;
    margin: 10px 0;
}
.accessories_content_sec .sec_sec p{
    font-size: 15px;
    color: black;
    margin: 10px 0;
}
.circle_btn_sec{
    margin: 30px auto;
    width: 54%;
    display: flex;
}
.circle_btn_sec .circle{
    border-radius: 50%;
    background: #e4dcd3;
    color: black;
    font-weight: 600;
    opacity: 0.7;
    height: 250px;
    width: 250px;
    position: relative;
    text-align: center;
}
.circle_btn_sec .circle.intersec1{
    left: 23px;
}
.circle_btn_sec .circle.intersec2{
    right: 23px;
}
.circle div{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.accessories_content_sec .sec_sec .content{
    margin: 40px 0;
}
.acc_head_title .title{
    font-size: 28px;
    font-weight: 600;
}
.accessories_content_sec .first_sec{
    width: 50%;
    margin: 40px auto;
}
.accessories_content_sec .first_sec p{
    font-size: 15px;
    color: black;
}
.heading{
    font-weight: 600;
    font-size: 25px;
    text-align: center;
}
.explain{
    font-size: 16px;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
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
    margin: 30px auto;
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
.car_accessories_sec .car_item_title{
    color: white;
    padding: 5px 0;
    margin: 5px 0;
    text-align: center;
    text-shadow: 2px 2px 5px #000;
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>