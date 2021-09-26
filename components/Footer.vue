<template>
  <div>
    <!-- footer Area -->
    <footer id="footer_one">
        <div class="mb-14">
            <div class="text-center font-bold text-2xl mb-2 call_service_sec">DO YOU NEED HELP IN CHOOSING A CAR?</div>
            <div class="text-center text-lg">Call us : 9962207774</div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-12 col-sm-12 col-12">
                    <div class="footer_left_side">
                        <div class="text-uppercase text-lg font-semibold">About Peeyesyem hyundai</div>
                        <p class="text-white">
                            Peeyesyem Hyundai is one of the largest Hyundai dealer having showrooms at various locations around Tamilnadu. Our branches are located at Chennai, Tuticorin, Tiruchendur, Tuticorin, Madurai and Ramnathapuram. We strive to provide the best services to our customers with great satisfaction and excellency.
                        </p>
                        <div class="footer_left_side_icon">
                            <ul>
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
                <div class="col-lg-3 col-md-6 col-sm-12 col-6 footer_mobile_menu">
                    <div class="footer_one_widget">
                        <h3>INFORMATION</h3>
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
                        <h3>Our Services</h3>
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
                        <h3>NEWSLETTER</h3>
                        <div id="mc_embed_signup" class="subscribe-form">
                            <form @submit.prevent="handleSubmit">
                                <div class="mc-form">
                                    <input class="form-control" type="email" v-model="user.email" id="email" name="email" placeholder="Your Mail*" :class="{ 'is-invalid': submitted && $v.user.email.$error }" />
                                    <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                                        <span v-if="!$v.user.email.required">Email is required</span>
                                        <span v-if="!$v.user.email.email">Email is invalid</span>
                                    </div>
                                    <div class="clear">
                                        <button class="theme-btn-one btn_md" name="subscribe">
                                            <i class="icon-cursor"></i> Send Mail
                                        </button>
                                    </div>
                                </div>
                            </form>
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
                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="copyright_left">
                        <h6>© CopyRight 2021 <span>PEEYESEM HYUNDAI</span></h6>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div class="copyright_right">
                       <!-- <img :src="require('@/assets/img/common/payment.png')" alt="img" /> -->
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
@media only screen and (min-width:300px) and (max-width:600px){
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