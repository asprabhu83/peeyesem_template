<template>
  <div>
    <!-- footer Area -->
    <footer id="footer_one">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                    <div class="footer_left_side">
                        <div class="text-capitalize mb-3 text-lg font-semibold">Peeyesyem hyundai</div>
                        <div class="text-sm mb-2"><i class="far fa-envelope mr-2"></i> peeyesyemhyundai@gmail.com</div>
                        <div class="text-sm mb-3"> <font-awesome-icon icon="phone-alt"  size="1x" class="text-white  mr-2" />+91 9902099944</div>
                        <div class="location_sec">
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
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 col-6 footer_mobile_menu">
                    <div class="footer_one_widget">
                        <h3 class="text-capitalize">Information</h3>
                        <ul>
                            <li><nuxt-link to="/">Home</nuxt-link></li>
                            <li><nuxt-link to="/">About Us</nuxt-link></li>
                            <li><nuxt-link to="/">Privacy Policy</nuxt-link></li>
                            <li><nuxt-link to="/">Terms of Use</nuxt-link></li>
                            <li><nuxt-link to="/">Warranty Policy</nuxt-link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-6 col-sm-12 col-6 footer_mobile_menu">
                    <div class="footer_one_widget">
                        <h3 class="text-capitalize">Our Services</h3>
                        <ul>
                            <li><nuxt-link to="/">New Cars</nuxt-link></li>
                            <li><nuxt-link to="/">Used Cars</nuxt-link></li>
                            <li><nuxt-link to="/">Book a Test Drive</nuxt-link></li>
                            <li><nuxt-link to="/">Book a Service</nuxt-link></li>
                            <li><nuxt-link to="/">Accessories</nuxt-link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 col-md-12 col-sm-12 col-12">
                    <div class="footer_one_widget">
                        <h3 class="text-capitalize follows">Follows Us</h3>
                        <div class="footer_left_side_icon pt-0">
                            <ul class="pl-1">
                                <li>
                                    <a href="#!"><i class="fab fa-facebook-f"></i></a>
                                </li>
                                <li>
                                    <a href="#!"><i class="fab fa-youtube"></i></a>
                                </li>
                                <li>
                                    <a href="#!"><i class="fab fa-instagram"></i></a>
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
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 col-12 mx-auto">
                    <div class="copyright_left">
                        <h6 class="text-center">© CopyRight 2021 PEEYESEM HYUNDAI</h6>
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
.location_sec{
    display: flex;
    flex-wrap: wrap;
}
.location_sec div,.location_sec span{
    color: white;
    margin: 5px 10px 5px 0;
    cursor: pointer;
}
@media only screen and (min-width:300px) and (max-width:600px){
    .footer_one_widget .follows{
        text-align: center;
    }
    #footer_one .footer_left_side_icon{
        text-align: center;
    }
    .footer_mobile_menu{
        margin: 30px 0;
    }
    .mc-form .clear{
        text-align: center;
    }
    .call_service_sec{
        margin-bottom: 20px!important;
        font-size: 20px;
        padding: 0 17px;
    }
}
</style>