<template>
  <div>
    <!-- footer Area -->
    <footer id="footer_one">
        <div class="container">
            <div class="main_footer_sec">
                <div class="footer_item_sec">
                    <div class="footer_left_side">
                        <div class="text-capitalize mb-3  footer_heading text-lg font-semibold">Peeyesyem hyundai</div>
                        <div class="text-sm contact_text mb-2"><i class="far fa-envelope mr-2"></i> info@peeyesyemhyundai.in</div>
                        <div class="text-sm contact_text mb-2"> <font-awesome-icon icon="phone-alt"  size="1x" class="text-white  mr-2" />+91 9962666228</div>
                        <div class="text-sm contact_text mb-3"><font-awesome-icon icon="map-marker-alt"  size="1x" class="text-white  mr-2" />Old No. - 94, New No. - 162,<br/> Opp.Kavery Hospital,<br/> Luz Church Road, Mylapore</div>
                    </div>
                </div>
                <div class="footer_item_sec footer_mobile_menu">
                    <div class="gmap_canvas">
                        <iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15547.7946740085!2d80.2575787!3d13.0389394!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5b5a4c51158248e4!2sPEEYESYEM%20HYUNDAI%20-%20MYLAPORE!5e0!3m2!1sen!2sin!4v1636443172904!5m2!1sen!2sin" width="354" height="274" style="border:0;max-width:100%;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
                <div class="footer_item_sec menus footer_mobile_menu">
                    <div class="footer_one_widget">
                        <h3 class="text-capitalize footer_heading">Information</h3>
                        <ul>
                            <li><nuxt-link to="/">Home</nuxt-link></li>
                            <li><nuxt-link to="/">About Us</nuxt-link></li>
                            <li><nuxt-link to="/">Privacy Policy</nuxt-link></li>
                            <li><nuxt-link to="/">Terms of Use</nuxt-link></li>
                            <li><nuxt-link to="/">Warranty Policy</nuxt-link></li>
                        </ul>
                    </div>
                </div>
                <div class="footer_item_sec menus footer_mobile_menu">
                    <div class="footer_one_widget">
                        <h3 class="text-capitalize footer_heading">Our Services</h3>
                        <ul>
                            <li><nuxt-link to="/">New Cars</nuxt-link></li>
                            <li><nuxt-link to="/">Used Cars</nuxt-link></li>
                            <li><nuxt-link to="/">Book a Test Drive</nuxt-link></li>
                            <li><nuxt-link to="/">Book a Service</nuxt-link></li>
                            <li><nuxt-link to="/">Accessories</nuxt-link></li>
                        </ul>
                    </div>
                </div>
                <div class="footer_item_sec follows_us_sec">
                    <div class="footer_one_widget">
                        <h3 class="text-capitalize follows footer_heading">Follows Us</h3>
                        <div class="footer_left_side_icon pt-0">
                            <ul class="pl-1">
                                <li>
                                    <a :href="$store.state.HeaderData.fbLink" target="_blank"><i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a :href="$store.state.HeaderData.youtubeLink" target="_blank"><i class="fab fa-youtube"></i></a>
                                </li>
                                <li>
                                    <a :href="$store.state.HeaderData.instaLink" target="_blank"><i class="fab fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a :href="$store.state.HeaderData.linkedInLink" target="_blank"><i class="fab fa-linkedin "></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
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
                                    <div>Mylapore</div>
                                    <span>|</span>
                                    <div>Tuticorin</div>
                                    <span>|</span>
                                    <div>Thiruchendur</div>
                                    <span>|</span>
                                    <div>Kovilpatti</div>
                                    <span>|</span>
                                    <div>Madurai</div>
                                    <span>|</span>
                                    <div>Ramnad</div>
                                    <span>|</span>
                                    <div>Karaikudi</div>
                                </div>
                                <div class="location_sec ">
                                        <div class="mr-2 font-semibold">Service:</div>
                                        <div>Tondaripet</div>
                                        <span>|</span>
                                        <div>Kotturpuram</div>
                                        <span>|</span>
                                        <div>Guindy</div>
                                        <span>|</span>
                                        <div>Tuticorin</div>
                                        <span>|</span>
                                        <div>Madurai</div>
                                        <span>|</span>
                                        <div>Thiruchendur</div>
                                        <span>|</span>
                                        <div>Kovilpatti</div>
                                        <span>|</span>
                                        <div>Ramnad</div>
                                </div>
                            </div>
                        </div>
                        <div class="copyright_left mt-3">
                            <h6 class="text-center text-uppercase">© CopyRight {{$store.state.currentYear}} PEEYESEM HYUNDAI</h6>
                        </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
export default {
    data() {
        return {

            title: 'Contact Us',

            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'Contact'
                }
            ],
            // Form Validation
            user: {
                email: "",
            },
            submitted: false
        }
    },

    validations: {
        user: {
            email: { required, email }
        }
    },
    methods: {
        handleSubmit(e) {
            this.submitted = true;

            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
            alert("Thanks for Subscribe newsletter!");
        }
    },
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
.location_sec{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.location_sec div,.location_sec span{
    color: white;
    margin: 5px 10px 5px 0;
}
.main_footer_sec{
    display: flex;
    justify-content: center;
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
    width: 270px!important;
    height: 177px!important;
}


@media only screen and (min-width:300px) and (max-width:600px){
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
}
@media only screen and (min-width: 1270px) and (max-width: 1366px){
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