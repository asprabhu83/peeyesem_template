<template>
  <div class="transparent_bg_sec" :class="this.$route.path == '/' ? 'home_page' : 'sub_page'">
    <!-- Start Header Area -->
    <div class="contact_sec" >
        <div class="container">
            <div class="flex justify-around py-3 top_sec">
                <div>
                    <div class="header-logo">
                        <div class="logo">
                            <nuxt-link to="/"><img class="site_logo" :src="baseUrl + 'images/' + $store.state.HeaderData.logo"   /></nuxt-link>
                        </div>
                    </div>
                </div>
                <div class="flex items-center call_service_details justify-center">
                    <div class="left mx-2">
                        <div class="text-lg  font-semibold pt-1 shodow_css_head">
                            <div class="mb-1">Email: info@peeyesyemhyundai.in</div>
                            <div class="mb-1">Service: +91 {{$store.state.HeaderData.serviceNo}}</div>
                            <div>Sales: +91 {{$store.state.HeaderData.salesNo}}</div> 
                        </div>
                    </div>
                    <div class="right flex items-center mx-2">
                        <div class="social_icons_box flex">
                            <a :href="$store.state.HeaderData.fbLink" target="_blank"><img class="flat_icons" :src="require('@/assets/img/facebook.png')" /></a>
                            <a :href="$store.state.HeaderData.instaLink" target="_blank"><img class="flat_icons" :src="require('@/assets/img/instagram.png')" /> </a>
                            <a :href="$store.state.HeaderData.youtubeLink" target="_blank"> <img class="flat_icons" :src="require('@/assets/img/youtube.png')" /></a>
                            <a :href="$store.state.HeaderData.linkedInLink" target="_blank"><img class="flat_icons" :src="require('@/assets/img/linkedin.png')" /> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <header class="header-section d-none d-sm-block d-lg-block d-xl-block">
        <div class="header-wrapper">
            <div id="header" class="header-bottom header-bottom-color--golden section-fluid sticky-header sticky-color--golden">
                <div class="container main_menu_header">
                    <div class="row">
                        <div class="col-12 d-flex align-items-center justify-content-center">
                            <!-- Start Header Logo -->
                                <div class="sticky_logo">
                                    <nuxt-link to="/"><img class="site_logo" :src="require('@/assets/img/resized_logo.png')" alt="logo"  /></nuxt-link>
                                </div>
                            <!-- End Header Logo -->

                            <!-- Start Header Main Menu -->
                            <div class="main-menu menu-color--black menu-hover-color--golden">
                                <nav>
                                    <ul>
                                        <li>
                                            <nuxt-link class="menu-item" to="/">Home</nuxt-link>
                                        </li>
                                        <li class="has-dropdown">
                                            <nuxt-link class="menu-item" to="">New Cars <i class="fa fa-angle-down"></i></nuxt-link>
                                            <!-- Sub Menu -->
                                            <ul class="sub-menu">
                                                <li><nuxt-link to="/all-cars">All Cars</nuxt-link></li>
                                                <li><nuxt-link to="/cars/hyundai-santro"> Santro</nuxt-link></li>
                                                <li><nuxt-link to="/cars/hyundai-all-new-i20"> All New i20</nuxt-link></li>
                                                <li><nuxt-link to="/cars/hyundai-grand-i10-nios"> Grand i10 NIOS</nuxt-link></li>
                                                <li><nuxt-link to="/cars/hyundai-i20-n-line"> i20 N Line</nuxt-link></li>
                                                <li><nuxt-link to="/cars/hyundai-aura"> Aura</nuxt-link></li>
                                                <li><nuxt-link to="/cars/hyundai-verna"> All New Verna</nuxt-link></li>
                                                <li><nuxt-link to="/cars/hyundai-all-new-elantra"> Elantra</nuxt-link></li>
                                                <li><nuxt-link to="/cars/hyundai-venue"> Venue</nuxt-link></li>
                                                <li><nuxt-link to="/cars/hyundai-creta"> All New Creta</nuxt-link></li>
                                                <li><nuxt-link to="/cars/hyundai-alcazar"> Alcazar</nuxt-link></li>
                                                <li><nuxt-link to="/cars/hyundai-all-new-tucson"> Tucson</nuxt-link></li>
                                            </ul>
                                        </li>
                                        <li class="has-dropdown">
                                            <nuxt-link class="menu-item" to="">Used Cars<i class="fa fa-angle-down"></i></nuxt-link>
                                            <!-- Sub Menu -->
                                            <ul class="sub-menu">
                                                <li><nuxt-link to="/buy-car">Buy a car</nuxt-link></li>
                                                <li><nuxt-link to="/sell-car">Sell a Car</nuxt-link></li>
                                            </ul>
                                        </li>
                                        <li class="has-dropdown">
                                            <nuxt-link class="menu-item" to="">Services<i class="fa fa-angle-down"></i></nuxt-link>
                                            <!-- Sub Menu -->
                                            <ul class="sub-menu">
                                                <li><nuxt-link to="/service-booking">Book a Service</nuxt-link></li>
                                                <li><nuxt-link to="/sot">SOT</nuxt-link></li>
                                                <li><nuxt-link to="/rsa">RSA</nuxt-link></li>
                                                <li><nuxt-link to="/">ERS</nuxt-link></li>
                                                <li><nuxt-link to="/tips/safety-tips">Safety Tips</nuxt-link></li>
                                                <li><nuxt-link to="/tips/maintenance-tips">Maintenance Tips</nuxt-link></li>
                                                <li><nuxt-link to="/tips/driving-tips">Driving Tips</nuxt-link></li>
                                                <li><nuxt-link to="/tips/fuel-saving-tips">Fuel Saving Tips</nuxt-link></li>
                                                <li><nuxt-link to="/get-insurance">Get Insurance</nuxt-link></li>
                                                <li><nuxt-link to="/extended-warrenty">Extended Warranty</nuxt-link></li>
                                                <li><nuxt-link to="/car-detailing-services">Car Service Detailing</nuxt-link></li>
                                                <li><nuxt-link to="/owner-manual">Owners Manual</nuxt-link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <nuxt-link class="menu-item" to="/accessories">Accessories</nuxt-link>
                                        </li>
                                        <li>
                                            <nuxt-link class="menu-item" to="/locations">Locations </nuxt-link>
                                        </li>
                                        <li  class="has-dropdown">
                                            <nuxt-link class="menu-item" to="">About Us <i class="fa fa-angle-down"></i></nuxt-link>
                                            <ul class="sub-menu">
                                                <li><nuxt-link to="/about">About</nuxt-link></li>
                                                <li><nuxt-link to="/blog">Blog</nuxt-link></li>
                                                <li><nuxt-link to="/testimonials">Testimonials</nuxt-link></li>
                                                <li><nuxt-link to="/gallery">Gallery</nuxt-link></li>
                                                <li><nuxt-link to="/careers">Careers</nuxt-link></li>
                                                <li><nuxt-link to="/news-events">News and Events</nuxt-link></li>
                                            </ul>
                                        </li>

                                        <li class="has-dropdown">
                                            <nuxt-link class="menu-item" to="">Contact Us <i class="fa fa-angle-down"></i></nuxt-link>
                                               <ul class="sub-menu">
                                                <li><nuxt-link to="/contact-us/test-drive">Test Drive</nuxt-link></li>
                                                <li><nuxt-link to="/contact-us/sales-enquiry">Sales Enquiry</nuxt-link></li>
                                                <li><nuxt-link to="/emi-calculator">EMI Calculator</nuxt-link></li>
                                                    <!-- <li><nuxt-link to="/hyundai-offers">Special Offers</nuxt-link></li> -->
                                                <li><nuxt-link to="/contact-us/feedback">Feedback</nuxt-link></li>
                                                <li><nuxt-link to="/contact-us/contact">Contact Us</nuxt-link></li>
                                            <li><nuxt-link to="/contact-us/get-price-quote">Get A Quote</nuxt-link></li>
                                            </ul>

                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <!-- End Header Main Menu Start -->

                            <!-- Start Header Action Link -->
                            <!-- <ul class="header-action-link action-color--black action-hover-color--golden">
                                
                                <li>
                                    <a v-b-toggle.offcanvas-about class="offacnvas offside-about offcanvas-toggle"><i class="fas fa-bars"></i></a>
                                </li>
                            </ul> -->
                            <!-- End Header Action Link -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Start Header Area -->

    <!-- Start Mobile Header -->
    <div id="mobile_header" class="mobile-header sticky-header sticky-color--golden mobile-header-bg-color--golden section-fluid d-lg-none d-sm-none d-md-none d-block d-xl-none">
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex align-items-center justify-content-between">
                    <!-- Start Mobile Left Side -->
                    <div class="mobile-header-left">
                        <ul class="mobile-menu-logo">
                            <li>
                                <nuxt-link to="/">
                                    <div class="logo">
                                        <img class="site_logo" :src="baseUrl + 'images/' + $store.state.HeaderData.logo" />
                                    </div>
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                    <!-- End Mobile Left Side -->

                    <!-- Start Mobile Right Side -->
                    <div class="mobile-right-side">
                        <ul class="header-action-link action-color--black action-hover-color--golden">
                            <li>
                                <a v-b-toggle.offcanvas-about class="offacnvas offside-about offcanvas-toggle"><i class="fas fa-bars"></i></a>
                            </li>
                        </ul>
                    </div>
                    <!-- End Mobile Right Side -->
                </div>
            </div>
        </div>
    </div>
    <!-- End Mobile Header -->

    <!-- ...:::: Start Offcanvas Mobile Menu Section:::... -->
    <b-sidebar
    id="offcanvas-about"
    class="offcanvas-mobile-about-section"
    backdrop
    right
    >
        <!-- Start Mobile Menu Navbar Wrap -->
        <div class="mobile-menu-navbar-wrap">
            <!-- Start Mobile Menu Nav -->
            <div class="offcanvas-menu">
                <sidebar-menu :menu="menu" />
            </div>
            <!-- End Mobile Menu Nav -->
        </div>
        <!-- End Mobile Menu Navbar Wrap -->
    </b-sidebar>
    <!-- ...:::: End Offcanvas Mobile Menu Section:::... -->

  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import axios from '~/plugins/axios'
export default {
    data() {
        return {

            offset:0,

            // Mobile Menu Item Data 
            menu: [
                {
                    title:'Home',
                    href:'/'
                },
                {
                    title: 'New Cars',
                    child: [
                        {
                            href: '/all-cars',
                            title: 'All Cars'
                                    
                        },
                        {
                            href: '/cars/hyundai-santro',
                            title: 'Santro'
                        },
                        {
                            href: '/cars/hyundai-all-new-i20',
                            title: 'All New i20'
                        },
                        {
                            href: '/cars/hyundai-grand-i10-nios',
                            title: 'Grand i10 NIOS'
                        },
                        {
                            href: '/cars/hyundai-i20-n-line',
                            title: 'i20 N Line'
                        },
                        {
                            href: '/cars/hyundai-aura',
                            title: 'Aura'
                        },
                        {
                            href: '/cars/hyundai-verna',
                            title: 'All New Verna'
                        },
                        {
                            href: '/cars/hyundai-all-new-elantra',
                            title: 'Elantra'
                        },
                        {
                            href: '/cars/hyundai-venue',
                            title: 'Venue'
                        },
                        {
                            href: '/cars/hyundai-creta',
                            title: 'All New Creta'
                        },
                        {
                            href: '/cars/hyundai-alcazar',
                            title: 'Alcazar'
                        },
                        {
                            href: '/cars/hyundai-all-new-tucson',
                            title: 'Tucson'
                        }
                    ]
                },
                {
                    title: 'Contact Us',
                    child: [
                        {
                            href: '/contact-us/test-drive',
                            title: 'Test Drive'
                                    
                        },
                        {
                            href: '/contact-us/sales-enquiry',
                            title: 'Sales Enquiry'
                        },
                        {
                            href: '/emi-calculator',
                            title: 'EMI Calculator'
                        },
                        // {
                        //     href: '/hyundai-offers',
                        //     title: 'Special Offers'
                        // },
                        {
                            href: '/contact-us/feedback',
                            title: 'Feedback'
                        },
                        {
                            href: '/contact-us/contact',
                            title: 'Contact Us'
                        },
                        {
                            href: '/contact-us/get-price-quote',
                            title: 'Get A Quote'
                        }
                    ]
                },
                {
                    href:'/locations',
                    title: 'Locations'
                },
                {
                    title: 'Services',
                    child: [
                        {
                            href: '/service-booking',
                            title: 'Book a Service'
                                    
                        },
                        {
                            href: '/sot',
                            title: 'SOT'
                                    
                        },
                        {
                            href: '/rsa',
                            title: 'RSA'
                                    
                        },
                        {
                            href: '/',
                            title: 'ERS'
                                    
                        },
                        {
                            href: '/tips/safety-tips',
                            title: 'Safety Tips'
                        },
                        {
                            href: '/tips/maintenance-tips',
                            title: 'Maintenance Tips'
                        },
                        {
                            href: '/tips/driving-tips',
                            title: 'Driving Tips'
                        },
                        {
                            href: '/tips/fuel-saving-tips',
                            title: 'Fuel Saving Tips'
                        },
                        {
                            href: '/get-insurance',
                            title: 'Get Insurance'
                        },
                        {
                            href: '/extended-warrenty',
                            title: 'Extended Warranty'
                        },
                        {
                            href: '/car-detailing-services',
                            title: 'Car Detailing Services'
                        },
                        {
                            href: '/owner-manual',
                            title: 'Owners Manual'
                        }
                    ]
                },
                {
                    title:'Used Cars',
                    child:[
                        {
                            href: '/buy-car',
                            title: 'Buy a Car'
                        },
                        {
                            href: '/sell-car',
                            title: 'Sell a Car'
                        }
                    ]
                },
                {
                    href: '/accessories',
                    title: 'Accessories',
                },
                {
                    title:'About Us',
                    child:[
                        {
                            href: '/about',
                            title: 'About'
                        },
                        {
                            href: '/blog',
                            title: 'Blog'
                        },
                        {
                            href: '/testimonials',
                            title: 'Testimonials'
                        },
                        {
                            href: '/gallery',
                            title: 'Gallery'
                        },
                        {
                            href: '/careers',
                            title: 'Careers'
                        },
                        {
                            href: '/news-events',
                            title: 'News and Events'
                        }
                    ]
                }
            ],
            products: [],
            category: [],
            cartproduct: {},
            searchString: '',
            baseUrl:process.env.baseUrl
        }
    },

    mounted: function () {
        // Menu Js
        this.$nextTick(function () {

            window.onscroll = function() {myFunction()};

            var header = document.getElementById("header");
            var mobile_header = document.getElementById("mobile_header");
            var sticky = header.offsetTop;
            var logo = document.querySelector('.site_logo');
            function myFunction() {
                if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
                mobile_header.classList.add("sticky");
                logo.classList.add("size_resize");
                } else {
                header.classList.remove("sticky");
                mobile_header.classList.remove("sticky");
                logo.classList.remove("size_resize");
                }
            };

        })

        this.GetHeaderData();


        // Menu End
        
        // this.productsArray()
    },

    computed: {
        ...mapState({
            productslist: state => state.products.productslist,
            searchItems: state => state.products.searchProduct
        }),
        ...mapGetters({
            cart: 'cart/cartItems',
            cartTotal: 'cart/cartTotalAmount',
            wishlist: 'products/wishlistItems',
        })
    },

    methods: {
        // Image Url 
        getImageUrl(path) {
            return require('@/assets/img/product-image/' + path )
        },

        // Discount Price 
        discountedPrice(product) {
            const price = product.price - ( product.price * product.discount / 100)
            return price
        },

        // For Delete/Remove Product Item 
        removeCartItem: function (product) {
            this.$store.dispatch('cart/removeCartItem', product)
        },
        // For Delete/Remove wishlist Item 
        removeWishlistItem: function (product) {
            this.$store.dispatch('products/removeWishlistItem', product)
        },
        searchProduct() {
            this.$store.dispatch('products/searchProduct', this.searchString)
        },
        GetHeaderData(){
            axios.get(process.env.baseUrl + 'api/settings/index')
            .then((res)=>{
                const [data] = res.data;
                const {site_logo,service_number,sales_number,whatsapp_number,fb_link,insta_link,youtube_link,data_value} = data;
                this.$store.state.HeaderData.logo = site_logo;
                this.$store.state.HeaderData.serviceNo = service_number;
                this.$store.state.HeaderData.salesNo = sales_number;
                this.$store.state.HeaderData.whatsappNo = whatsapp_number;
                this.$store.state.HeaderData.fbLink = fb_link;
                this.$store.state.HeaderData.instaLink = insta_link;
                this.$store.state.HeaderData.youtubeLink = youtube_link;
                this.$store.state.HeaderData.linkedInLink = JSON.parse(data_value).linked_in_link;
                this.$store.state.HeaderData.buisnessLink = JSON.parse(data_value).buisness_link;
            }).catch((err)=>{
                console.log(err);
            })
        }

    }

}
</script>

<style>
.container.main_menu_header{
    max-width: 1600px;
}
.shodow_css_head{
    color: gray;
}
.divider{
    font-weight: 500;
    color: #002c5f;
    font-size: 20px;
    margin-top: 3px;
}
.business_logo_icon{
    margin-left: 4px;
    margin-top: 3px;
    width: 24px;
}

/* Mobile Menu Multi Dropdown Items Start */
.social_icons_box i{
    margin-left: 8px;
    margin-right: 8px;
    color: #002c5f;
    font-size: 20px;
}
.social_icons_box .flat_icons{
    width: 27px;
    margin-left: 7px;
    margin-right: 7px;
}

.site_logo.size_resize{
    width:59%!important;
    transition: .4s ease-in-out;
}
.v-sidebar-menu .vsm--toggle-btn {
    display: none !important;
}
.v-sidebar-menu {
    position: relative;
    background-color: transparent;
}
.v-sidebar-menu.vsm_expanded .vsm--item_open .vsm--link_level-1 {
    background-color: var(--main-theme-color);
}
.v-sidebar-menu .vsm--link_level-1.vsm--link_exact-active, .v-sidebar-menu .vsm--link_level-1.vsm--link_active {
    -webkit-box-shadow: 3px 0px 0px 0px var(--main-theme-color) inset;
    box-shadow: 3px 0px 0px 0px var(--main-theme-color) inset;
}

@media only screen and (min-width:300px) and (max-width:600px){
    .contact_sec{
        display: none;
    }
}
@media only screen and (min-width: 1367px) and (max-width: 1600px){
    .header-logo .logo img{
        width: 36%;
    }
    .call_service_details .left div, .call_service_details .right div{
        font-size: 13px;
    }
    .social_icons_box i{
        font-size: 16px;
    }
    .main-menu nav>ul>li>a{
        font-size: 13px;
    }
    .sub-menu>li>a{
        font-size: 12px;
    }
    .business_logo_icon{
        margin-top: 3px ;
    }
}
@media only screen and (min-width: 1270px) and (max-width: 1366px){
    .shodow_css_head div{
        margin-bottom: 0!important;
    }
    .business_logo_icon{
        margin-top: 3px ;
        width: 18px;
    }
    .main-menu nav>ul>li{
        padding-left: 25px!important;
    }
    .social_icons_box .flat_icons{
        width: 21px!important;
    }
    .sub-menu>li>a{
        font-size: 11px;
        line-height: 28px;
    }
    .sub-menu{
      padding: 10px 20px;
      min-width: 200px;
    }
    .divider{
      font-size: 13px;
      margin-top: 1px;
    }
    .main-menu{
        width:90%;
    }
    .main-menu nav > ul > li > a{
        padding: 1px 10px;
        font-size: 10px;
    }
    .header-bottom-color--golden{
        padding: 0;
    }
    .header-logo .logo img {
        width: 40%;
        height: auto;
        margin-left: auto;
        margin-right: auto;
    }
    .call_service_details .left div, .call_service_details .right div{
        font-size: 13px;
    }
    .social_icons_box i{
        font-size: 14px;
        margin-left: 7px;
        margin-right: 7px;
    }
    .contact_sec .top_sec{
        padding: 10px 0!important;
    }
    .sticky-header.sticky.sticky-color--golden .main-menu nav > ul > li > a{
        padding: 10px;
        font-size: 10px;
    }
    .sticky-header.sticky.sticky-color--golden .sticky_logo img{
        width:80%;
    }
    .sticky-header.sticky.sticky-color--golden{
        padding: 9px 0;
    }
    .sticky-header.sticky.sticky-color--golden .main-menu{
        width: 79%;
    }
}

/* Mobile Menu Multi Dropdown Items End */
</style>