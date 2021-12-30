<template>
  <div>
    <!-- footer Area -->
    <footer id="footer_one">
        <div class="container">
            <div class="main_footer_sec">
                <div class="footer_item_sec two_col_item">
                    <div class="footer_left_side">
                        <div class="text-capitalize mb-3  footer_heading text-lg font-semibold">Peeyesyem hyundai</div>
                        <div class="text-sm contact_text mb-2"><i class="far fa-envelope mr-2"></i> info@peeyesyemhyundai.in</div>
                        <div class="text-sm contact_text mb-2"> <font-awesome-icon icon="phone-alt"  size="1x" class="text-white  mr-2" />+91 9962666228</div>
                        <div class="text-sm contact_text mb-3"><font-awesome-icon icon="map-marker-alt"  size="1x" class="text-white  mr-2" />Old No. - 94, New No. - 162,<br/> Luz Church Road, Opp to <br/> Kauvery hospital,Mylapore,<br/>Chennai - 600004</div>
                    </div>
                </div>
                <!-- <div class="footer_item_sec two_col_item footer_mobile_menu">
                    <div class="gmap_canvas">
                        <iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15547.7946740085!2d80.2575787!3d13.0389394!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5b5a4c51158248e4!2sPEEYESYEM%20HYUNDAI%20-%20MYLAPORE!5e0!3m2!1sen!2sin!4v1636443172904!5m2!1sen!2sin" width="354" height="274" style="border:0;max-width:100%;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div> -->
                <div class="footer_item_sec menus footer_mobile_menu">
                    <div class="footer_one_widget">
                        <!-- <h3 class="text-capitalize footer_heading">Information</h3> -->
                        <ul>
                            <li><nuxt-link to="/">Home</nuxt-link></li>
                            <li><nuxt-link to="/about">About Us</nuxt-link></li>
                            <li><nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link></li>
                            <li><nuxt-link to="/terms-of-use">Terms of Use</nuxt-link></li>
                            <li><nuxt-link to="/site-map">Sitemap</nuxt-link></li>
                            <li><nuxt-link to="/disclaimer">Disclaimer</nuxt-link></li>
                        </ul>
                    </div>
                </div>
                <div class="footer_item_sec menus footer_mobile_menu">
                    <div class="footer_one_widget">
                        <!-- <h3 class="text-capitalize footer_heading">Our Services</h3> -->
                        <ul>
                            <li><nuxt-link to="/all-cars">New Cars</nuxt-link></li>
                            <li><nuxt-link to="/buy-car">Exchange Your Car</nuxt-link></li>
                            <li><nuxt-link to="/contact-us/test-drive">Test Drive Your Car</nuxt-link></li>
                            <li><nuxt-link to="/service-booking">Service Your Car</nuxt-link></li>
                            <li><nuxt-link to="/accessories">Accessories</nuxt-link></li>
                            <li><nuxt-link to="/get-insurance">Insurance and Finance</nuxt-link></li>
                        </ul>
                    </div>
                </div>
                <div class="footer_item_sec follows_us_sec">
                    <div class="footer_one_widget">
                        <!-- <h3 class="text-capitalize follows footer_heading">Follows Us</h3> -->
                        <div class="footer_left_side_icon pt-0">
                            <ul class="pl-1">
                                <li>
                                   <a :href="'https://api.whatsapp.com/send?phone='+ $store.state.HeaderData.whatsappNo" target="_blank"><img class="flat_icons" :src="require('@/assets/img/whatsapp.png')" /></a>
                                </li>
                                <li>
                                    <a :href="$store.state.HeaderData.fbLink" target="_blank"><img class="flat_icons" :src="require('@/assets/img/facebook.png')" /></a>
                                </li>
                                 <li>
                                    <a :href="$store.state.HeaderData.instaLink" target="_blank"><img class="flat_icons" :src="require('@/assets/img/instagram.png')" /> </a>
                                </li>
                                <li>
                                    <a :href="$store.state.HeaderData.youtubeLink" target="_blank"> <img class="flat_icons" :src="require('@/assets/img/youtube.png')" /></a>
                                </li>
                                <li>
                                    <a :href="$store.state.HeaderData.linkedInLink" target="_blank"><img class="flat_icons" :src="require('@/assets/img/linkedin.png')" /> </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer_item_sec footer_mobile_menu">
                    <form class="">
                        <div class="heading  pb-2 font-semibold text-lg">Feedback</div>
                        <div class="mb-2">
                                <input
                                class="
                                    shadow
                                    appearance-none
                                    border
                                    rounded
                                    w-full
                                    py-1
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
                        <div class="mb-2">
                                <input
                                class="
                                    shadow
                                    appearance-none
                                    border
                                    rounded
                                    w-full
                                    py-1
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
                        <div class="mb-2">
                                <input
                                class="
                                    shadow
                                    appearance-none
                                    border
                                    rounded
                                    w-full
                                    py-1
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
                            <div class="mb-2">
                                <select
                                class="
                                shadow
                                border
                                rounded
                                w-full
                                py-1
                                px-3
                                text-gray-700
                                cursor-pointer
                                leading-tight
                                focus:outline-none
                                focus:shadow-outline
                                "
                                id="city"
                                v-model="feedbackFor"
                            >
                            <option class="text-xl " value="">Feedback for</option>
                            <option class="text-xl" :value="model" v-for="model in FeedbackList"
                                :key="model" >{{model}}</option>
                            </select>
                            </div>
                            <div class="mb-2">
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
                                v-model="description"
                                placeholder="Description"
                                />
                            </div>
                        <div class="btn_grp">
                            <button  type="button" @click="AddFeedback" class="feedback_btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>

    <!-- CopyRight Area -->
    <section id="copyright_one">
        <div class="container">
            <div class="">
                <div class="">
                    <div class="mt-1">
                            <div>
                                <div class="location_sec">
                                    <div class="mr-2 font-semibold">Sales:</div>
                                    <nuxt-link to="/locations?location=mylapore-sales" class="cursor-pointer">Chennai</nuxt-link>
                                    <span>|</span>
                                    <nuxt-link to="/locations?location=madurai-sales" class="cursor-pointer">Madurai</nuxt-link>
                                    <span>|</span>
                                    <nuxt-link to="/locations?location=tuticorin-sales" class="cursor-pointer">Tuticorin</nuxt-link>
                                    <span>|</span>
                                    <nuxt-link to="/locations?location=ramnad-sales" class="cursor-pointer">Ramnad</nuxt-link>
                                    <span>|</span>
                                    <nuxt-link to="/locations?location=karaikudi-sales" class="cursor-pointer">Karaikudi</nuxt-link>
                                    <span>|</span>
                                    <nuxt-link to="/locations?location=kovilpatti-sales" class="cursor-pointer">Kovilpatti</nuxt-link>
                                    <span>|</span>
                                    <nuxt-link to="/locations?location=thiruchendur-sales" class="cursor-pointer">Thiruchendur</nuxt-link>
                                </div>
                                <div class="location_sec ">
                                        <div class="mr-2 font-semibold">Service:</div>
                                        <nuxt-link to="/locations?location=tondiarpet-service" class="cursor-pointer">Tondaripet</nuxt-link>
                                        <span>|</span>
                                        <nuxt-link to="/locations?location=kotturpuram-service" class="cursor-pointer">Kotturpuram</nuxt-link>
                                        <span>|</span>
                                        <nuxt-link to="/locations?location=guindy-service" class="cursor-pointer">Guindy</nuxt-link>
                                        <span>|</span>
                                        <nuxt-link to="/locations?location=madurai-service" class="cursor-pointer">Madurai</nuxt-link>
                                        <span>|</span>
                                        <nuxt-link to="/locations?location=tuticorin-service" class="cursor-pointer">Tuticorin</nuxt-link>
                                        <span>|</span>
                                        <nuxt-link to="/locations?location=ramnad-service" class="cursor-pointer">Ramnad</nuxt-link>
                                        <span>|</span>
                                        <nuxt-link to="/locations?location=kovilpatti-service" class="cursor-pointer">Kovilpatti</nuxt-link>
                                        <span>|</span>
                                        <nuxt-link to="/locations?location=karaikudi-service" class="cursor-pointer">Karaikudi</nuxt-link>
                                        <span>|</span>
                                        <nuxt-link to="/locations?location=thiruchendur-service" class="cursor-pointer">Thiruchendur</nuxt-link>
                                </div>
                            </div>
                        </div>
                        <div class="copyright_left mt-3">
                            <h6 class="text-center text-uppercase">© CopyRight {{$store.state.currentYear}} PEEYESYEM HYUNDAI</h6>
                        </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
    data() {
        return {

            FeedbackList:[
                'Sales',
                'Service',
                'Finance'
            ],
            name:'',
            email:'',
            mobile:'',
            feedbackFor:'',
            description:'',

            title: 'Contact Us',
        }
    },
    methods:{
        AddFeedback(){
            var data_value = {
                feedback_for:this.feedbackFor,
                description:this.description
            }
            data_value = JSON.stringify(data_value);
            this.$axios.post(process.env.baseUrl + 'api/car_form/store',{
                full_name:this.name,
                email_id:this.email,
                mobile_no:this.mobile,
                form_type:'feedback',
                data_form_value:data_value
            }).then((res)=>{
                if(res){
                    this.name = '';
                    this.email = '';
                    this.mobile = '';
                    this.description = '';
                    this.feedbackFor = '';
                }
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
}
</script>
<style scoped>
/* .location_heading{
    font-size: 18px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
}
.location_heading hr{
    height: 2px;
    background: white;
    margin: 0 7px;
} */
.btn_grp .feedback_btn{
    width: 100%;
    padding: 7px;
    outline: none;
    border: none;
    background: black;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 10px;
}
@media only screen and (min-width: 760px) and (max-width: 960px){
    .main_footer_sec{
        flex-wrap: wrap;
    }
    .footer_item_sec{
        margin: 15px 32px!important;
    }
    .footer_item_sec.two_col_item{
        width: 41%!important;
    }
    .gmap_canvas iframe{
        width: 255px!important;
        height: 180px!important;
    }
    .footer_one_widget {
        padding-top: 0!important;
    }
}
@media only screen and (min-width: 961px) and (max-width: 1030px){
    .footer_item_sec{
        margin: 0 12px!important;
    }
    .gmap_canvas iframe{
        width: 215px!important;
        height: 150px!important;
    }
    .footer_one_widget {
        padding-top: 0!important;
    }
}
.location_sec{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.location_sec a,.location_sec span, .location_sec div{
    color: white;
    margin: 5px 10px 5px 0;
}
.location_sec a:hover{
    color: white;
}
.main_footer_sec{
    display: flex;
    justify-content: space-around;
}
.footer_item_sec{
    margin: 0 32px;
}
.business_logo_icon2{
    margin-bottom: -3px;
    width: 24px;
    position: relative;
    bottom: 4px;
}
.footer_left_side_icon .flat_icons{
    width: 28px;
}
.gmap_canvas iframe{
    width: 270px;
    height: 177px;
}


@media only screen and (min-width:300px) and (max-width:600px){
    form .heading{
        text-align: center;
    }
    .main_footer_sec{
        flex-wrap: wrap;
    }
    .footer_item_sec{
        width: 95%;
    }
    .footer_item_sec.menus{
        width: 43%;
    }
    .footer_one_widget .follows{
        text-align: center;
    }
    #footer_one .footer_left_side_icon{
        text-align: center;
    }
    .footer_mobile_menu{
        margin: 30px 10px;
    }
    .mc-form .clear{
        text-align: center;
    }
    .call_service_sec{
        margin-bottom: 20px!important;
        font-size: 20px;
        padding: 0 17px;
    }
    .gmap_canvas iframe{
        width: 100%!important;
        height: 274px!important;
    }
}
@media only screen and (min-width: 1367px) and (max-width: 1600px){
    .follows_us_sec{
        max-width: 20%!important;
    }
    #footer_one .row{
        justify-content: center;
    }
    input[type="text"]{
        min-height: 34px!important;
    }
}
@media only screen and (min-width: 1270px) and (max-width: 1366px){
    input[type="text"]{
        min-height: 34px!important;
    }
    #footer_one .footer_left_side_icon ul li a i {
        font-size: 15px;
    }
    .business_logo_icon2{
        margin-bottom: -3px;
        width: 17px;
    }
    .follows_us_sec{
        max-width: 16%!important;
    }
    #footer_one .row{
        justify-content: center;
    }
    #footer_one .footer_heading{
        font-size: 14px;
    }
     #footer_one .footer_one_widget ul li a{
         font-size: 11px;
     }
     .location_sec{
         font-size: 11px;
     }
     .location_sec span{
        margin: 5px 5px 5px 0
     }
     #footer_one .contact_text{
         font-size: 11px;
     }
     .footer_item_sec{
         margin: 0 20px !important;
     }
     .footer_left_side_icon .flat_icons{
        width: 21px;
    }
    .gmap_canvas iframe{
        width: 248px!important;
        height: 174px!important;
    }
}
</style>