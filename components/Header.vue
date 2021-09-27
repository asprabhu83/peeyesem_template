<template>
  <div class="transparent_bg_sec" :class="this.$route.path == '/' ? 'home_page' : 'sub_page'">
    <!-- Start Header Area -->
    <div class="contact_sec" >
        <div class="container">
            <div class="flex justify-between pt-3">
                <div class="left">
                    <div class="text-md text-white font-semibold shodow_css_head">Service: +91 9902099944 | Sales: +91 9731097310</div>
                </div>
                <div class="right flex items-center">
                    <div class="text-md text-white font-semibold mx-1 mt-1 shodow_css_head">Follow us:</div>
                    <div class="social_icons_box flex">
                        <img class="cursor-pointer" :src="require('@/assets/img/fbicon.png')" alt="img"  />
                        <img class="cursor-pointer" :src="require('@/assets/img/instaicon.png')" alt="img"  />
                        <img class="cursor-pointer" :src="require('@/assets/img/youtubeicon.png')" alt="img"  />
                    </div>
                </div>
            </div>
        </div>
        <hr class=" bg-white my-2" style="opacity:0.6" />
    </div>
    <header class="header-section d-none d-sm-block d-lg-block d-xl-block">
        <div class="header-wrapper">
            <div id="header" class="header-bottom header-bottom-color--golden section-fluid sticky-header sticky-color--golden">
                <div class="container">
                    <div class="row">
                        <div class="col-12 d-flex align-items-center justify-content-between">
                            <!-- Start Header Logo -->
                            <div class="header-logo">
                                <div class="logo">
                                    <nuxt-link to="/"><img class="site_logo" :src="require('@/assets/img/peeyesyem.png')" alt="logo" /></nuxt-link>
                                </div>
                            </div>
                            <!-- End Header Logo -->

                            <!-- Start Header Main Menu -->
                            <div class="main-menu menu-color--black menu-hover-color--golden">
                                <nav>
                                    <ul>
                                        
                                        <li class="has-dropdown">
                                            <a class="menu-item" href="#">New Cars <i class="fa fa-angle-down"></i></a>
                                            <!-- Sub Menu -->
                                            <ul class="sub-menu">
                                                <li><nuxt-link to="/">All Cars</nuxt-link></li>
                                                <li><nuxt-link to="/">Hyundai Santro</nuxt-link></li>
                                                <li><nuxt-link to="/">Hyundai All New i20</nuxt-link></li>
                                                <li><nuxt-link to="/">Hyundai Grand i10 NIOS</nuxt-link></li>
                                                <li><nuxt-link to="/">Hyundai Aura</nuxt-link></li>
                                                <li><nuxt-link to="/">Hyundai All New Verna</nuxt-link></li>
                                                <li><nuxt-link to="/">Hyundai Elantra</nuxt-link></li>
                                                <li><nuxt-link to="/">Hyundai Venue</nuxt-link></li>
                                                <li><nuxt-link to="/">Hyundai All New Creta</nuxt-link></li>
                                                <li><nuxt-link to="/">Hyundai Alcazar</nuxt-link></li>
                                                <li><nuxt-link to="/">Hyundai Tucson</nuxt-link></li>
                                                <li><nuxt-link to="/">Hyundai Kona</nuxt-link></li>
                                            </ul>
                                        </li>

                                        <li class="has-dropdown">
                                            <a class="menu-item" href="#">Contact Us <i class="fa fa-angle-down"></i></a>
                                               <ul class="sub-menu">
                                                <li><nuxt-link to="/">Test Drive</nuxt-link></li>
                                                <li><nuxt-link to="/">Sales Enquiry</nuxt-link></li>
                                                <li><nuxt-link to="/">EMI Calculator</nuxt-link></li>
                                                    <li><nuxt-link to="/">Special Offers</nuxt-link></li>
                                                <li><nuxt-link to="/">Feedback</nuxt-link></li>
                                                <li><nuxt-link to="/">Contact Us</nuxt-link></li>
                                            <li><nuxt-link to="/">Get A Quote</nuxt-link></li>
                                            </ul>

                                        </li>
                                        <li>
                                            <a class="menu-item" href="#">Locations <i class="fa fa-angle-down"></i></a>
                                           
                                        </li>
                                        <li class="has-dropdown">
                                            <a class="menu-item" href="#">Services<i class="fa fa-angle-down"></i></a>
                                            <!-- Sub Menu -->
                                            <ul class="sub-menu">
                                                <li><nuxt-link to="/">Book a Service</nuxt-link></li>
                                                <li><nuxt-link to="/">Safety Tips</nuxt-link></li>
                                                <li><nuxt-link to="/">Maintenance Tips</nuxt-link></li>
                                                <li><nuxt-link to="/">Driving Tips</nuxt-link></li>
                                                <li><nuxt-link to="/">Fuel Saving Tips</nuxt-link></li>
                                                <li><nuxt-link to="/">Get Insurance</nuxt-link></li>
                                                <li><nuxt-link to="/">Extended Warranty</nuxt-link></li>
                                                <li><nuxt-link to="/">Car Detailing Services</nuxt-link></li>
                                                <li><nuxt-link to="/">Owners Manual</nuxt-link></li>
                                            </ul>
                                        </li>
                                         <li class="has-dropdown">
                                            <a class="menu-item" href="#">Used Cars<i class="fa fa-angle-down"></i></a>
                                            <!-- Sub Menu -->
                                            <ul class="sub-menu">
                                                <li><nuxt-link to="/">Used Cars</nuxt-link></li>
                                                <li><nuxt-link to="/">Sell a Car</nuxt-link></li>
                                            </ul>
                                        </li>
                                       <li>
                                            <a class="menu-item" href="#">Accessories<i class="fa fa-angle-down"></i></a>
                                        </li>
                                        <li  class="has-dropdown">
                                            <nuxt-link class="menu-item" to="/about-us">About Us</nuxt-link>
                                            <ul class="sub-menu">
                                                <li><nuxt-link to="/">About</nuxt-link></li>
                                                <li><nuxt-link to="/">Blog</nuxt-link></li>
                                                <li><nuxt-link to="/">Testimonials</nuxt-link></li>
                                                <li><nuxt-link to="/">Gallery</nuxt-link></li>
                                                <li><nuxt-link to="/">Careers</nuxt-link></li>
                                                <li><nuxt-link to="/">News and Events</nuxt-link></li>
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
                                        <img :src="require('@/assets/img/peeyesyem.png')" alt="logo" />
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
export default {
    data() {
        return {

            offset:0,

            // Mobile Menu Item Data 
            menu: [
                
                {
                    title: 'New Cars',
                    child: [
                        {
                            href: '/',
                            title: 'All Cars'
                                    
                        },
                        {
                            href: '/',
                            title: 'Hyundai Santro'
                        },
                        {
                            href: '/',
                            title: 'Hyundai All New i20'
                        },
                        {
                            href: '/',
                            title: 'Hyundai Grand i10 NIOS'
                        },
                        {
                            href: '/',
                            title: 'Hyundai Aura'
                        },
                        {
                            href: '/',
                            title: 'Hyundai All New Verna'
                        },
                        {
                            href: '/',
                            title: 'Hyundai Elantra'
                        },
                        {
                            href: '/',
                            title: 'Hyundai Venue'
                        },
                        {
                            href: '/',
                            title: 'Hyundai All New Creta'
                        },
                        {
                            href: '/',
                            title: 'Hyundai Alcazar'
                        },
                        {
                            href: '/',
                            title: 'Hyundai Tucson'
                        },
                        {
                            href: '/',
                            title: 'Hyundai Kona'
                        }
                    ]
                },
                {
                    title: 'Contact Us',
                    child: [
                        {
                            href: '/',
                            title: 'Test Drive'
                                    
                        },
                        {
                            href: '/',
                            title: 'Sales Enquiry'
                        },
                        {
                            href: '/',
                            title: 'EMI Calculator'
                        },
                        {
                            href: '/',
                            title: 'Special Offers'
                        },
                        {
                            href: '/',
                            title: 'Feedback'
                        },
                        {
                            href: '/',
                            title: 'Contact Us'
                        },
                        {
                            href: '/',
                            title: 'Get A Quote'
                        }
                    ]
                },
                {
                    href:'/',
                    title: 'Locations'
                },
                {
                    title: 'Services',
                    child: [
                        {
                            href: '/',
                            title: 'Book a Service'
                                    
                        },
                        {
                            href: '/',
                            title: 'Safety Tips'
                        },
                        {
                            href: '/',
                            title: 'Maintenance Tips'
                        },
                        {
                            href: '/',
                            title: 'Driving Tips'
                        },
                        {
                            href: '/',
                            title: 'Fuel Saving Tips'
                        },
                        {
                            href: '/',
                            title: 'Get Insurance'
                        },
                        {
                            href: '/',
                            title: 'Extended Warranty'
                        },
                        {
                            href: '/',
                            title: 'Car Detailing Services'
                        },
                        {
                            href: '/',
                            title: 'Owners Manual'
                        }
                    ]
                },
                {
                    title:'Used Cars',
                    child:[
                        {
                            href: '/',
                            title: 'Used Cars'
                        },
                        {
                            href: '/',
                            title: 'Sell a Car'
                        }
                    ]
                },
                {
                    href: '/',
                    title: 'Accessories',
                },
                {
                    title:'About Us',
                    child:[
                        {
                            href: '/',
                            title: 'About'
                        },
                        {
                            href: '/',
                            title: 'Blog'
                        },
                        {
                            href: '/',
                            title: 'Testimonials'
                        },
                        {
                            href: '/',
                            title: 'Gallery'
                        },
                        {
                            href: '/',
                            title: 'Careers'
                        },
                        {
                            href: '/',
                            title: 'News and Events'
                        }
                    ]
                }
            ],
            products: [],
            category: [],
            cartproduct: {},
            searchString: ''
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
        }

    }

}
</script>

<style>

/* Mobile Menu Multi Dropdown Items Start */
.shodow_css_head{
    text-shadow: 2px 2px 5px black;
}
.transparent_bg_sec{
    background: transparent;
    z-index: 999;
    position: absolute;
    width: 100%;
}
.transparent_bg_sec.sub_page{
    position: static;
}
.transparent_bg_sec.sub_page .header-bottom-color--golden{
    background: #FEF5EF;
}
.transparent_bg_sec.sub_page .menu-color--black nav>ul>li>a{
    text-shadow: none;
    color: black;
}
.transparent_bg_sec.sub_page .contact_sec hr{
    margin-bottom: 0!important;
}
.transparent_bg_sec.sub_page .contact_sec .left div{
    color: black !important;
    text-shadow: none;
}
.transparent_bg_sec.sub_page .contact_sec .right div{
    color: black !important;
    text-shadow: none;
}
.social_icons_box img{
    margin-left: 5px;
    margin-right: 5px;
    width:30px;
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
    .transparent_bg_sec{
        background: transparent;
        z-index: 999;
        position: static;
        width: 100%;
    }
    .contact_sec{
        display: none;
    }
}

/* Mobile Menu Multi Dropdown Items End */
</style>