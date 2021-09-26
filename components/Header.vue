<template>
  <div class="transparent_bg_sec">
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
    <header class="header-section d-none d-xl-block">
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
    <div id="mobile_header" class="mobile-header sticky-header sticky-color--golden mobile-header-bg-color--golden section-fluid d-lg-block d-xl-none">
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

        <!-- Start Mobile contact Info -->
        <div class="mobile-contact-info">
            <address class="address">
                <img :src="require('@/assets/img/logo-white.png')" alt="logo" />
                <span>Address: Your address goes here.</span>
                <span>Call Us: 0123456789, 0123456789</span>
                <span>Email: demo@example.com</span>
            </address>

            <ul class="social-link">
                <li>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                </li>
            </ul>

            <ul class="user-link">
                <li><nuxt-link to="/my-account/wishlist">Wishlist</nuxt-link></li>
                <li><nuxt-link to="/cart/">Cart</nuxt-link></li>
                <li><nuxt-link to="/my-account/checkout-1">Checkout</nuxt-link></li>
            </ul>
        </div>
        <!-- End Mobile contact Info -->
    </b-sidebar>
    <!-- ...:::: End Offcanvas Mobile Menu Section:::... -->

    <!-- Start Offcanvas Addcart Section -->
    <b-sidebar
        id="offcanvas-add-cart"
        class="offcanvas-add-cart-section"
        backdrop
        right
        >
        <div class="offcanvas-add-cart-wrapper">
            <h4 class="offcanvas-title">Shopping Cart</h4>
            <div v-if="cart.length">
                <ul class="offcanvas-cart">
                    <li class="offcanvas-cart-item-single" v-for="(item, index) in cart" :key="index">
                        <div class="offcanvas-cart-item-block">
                            <nuxt-link :to="{ path: '/product/'+item.id }" class="offcanvas-cart-item-image-link">
                                <img :src='getImageUrl(item.images[0].src)' alt="img" class="offcanvas-cart-image" />
                            </nuxt-link>
                            <div class="offcanvas-cart-item-content">
                                <nuxt-link :to="{ path: '/product/'+item.id }" class="offcanvas-cart-item-link">{{item.title}}</nuxt-link>
                                <div class="offcanvas-cart-item-details">
                                    <span class="offcanvas-cart-item-details-quantity">{{item.quantity}} x</span>
                                    <span v-if="item.discount" class="offcanvas-cart-item-details-price">${{discountedPrice(item)}}</span>
                                    <span v-else class="offcanvas-cart-item-details-price">${{item.price}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="offcanvas-cart-item-delete text-right">
                            <button @click="removeCartItem(item)" class="offcanvas-cart-item-delete bg-transparent remove-btn"><i class="far fa-trash-alt"></i></button>
                        </div>
                    </li>
                </ul>

                <div class="offcanvas-cart-total-price">
                    <span class="offcanvas-cart-total-price-text">Subtotal:</span>
                    <span class="offcanvas-cart-total-price-value">${{ cartTotal }}</span>
                </div>

                <ul class="offcanvas-cart-action-button">
                    <li>
                        <nuxt-link to="/cart" class="theme-btn-one btn-black-overlay btn_md">View Cart</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/my-account/checkout-1" class="theme-btn-one btn-black-overlay btn_md">Checkout</nuxt-link>
                    </li>
                </ul>
            </div>

            <ul v-else  class="offcanvas-cart">
                <li>Your cart is empty!</li>
            </ul>
    </div>
    </b-sidebar>
    <!-- End  Offcanvas Addcart Section -->

    <!-- Start Offcanvas Wishlist Sidebar Section -->  
    <b-sidebar
        id="offcanvas-wishlish"
        class="offcanvas-add-cart-section"
        backdrop
        right
        >
        <div class="offcanvas-wishlist-wrapper">
            <h4 class="offcanvas-title">Wishlist</h4>

            <div v-if="wishlist.length">
                <ul class="offcanvas-wishlist">
                    <li class="offcanvas-wishlist-item-single" v-for="( item, index ) in wishlist" :key="index">
                        <div class="offcanvas-wishlist-item-block">
                            <nuxt-link :to="{ path: '/product/'+item.id }" class="offcanvas-wishlist-item-image-link">
                                <img :src="getImageUrl( item.images[0].src )" alt="img" class="offcanvas-wishlist-image" />
                            </nuxt-link>
                            <div class="offcanvas-wishlist-item-content">
                                <nuxt-link :to="{ path: '/product/'+item.id }" class="offcanvas-wishlist-item-link">{{ item.title }}</nuxt-link>
                                <div class="offcanvas-wishlist-item-details">
                                    <span class="offcanvas-wishlist-item-details-quantity">{{item.quantity}} x</span>
                                    <span v-if="item.discount" class="offcanvas-wishlist-item-details-price">${{discountedPrice(item)}}</span>
                                    <span v-else class="offcanvas-wishlist-item-details-price">${{item.price}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="offcanvas-wishlist-item-delete text-right">
                            <button @click="removeWishlistItem(item)" class="offcanvas-wishlist-item-delete bg-transparent remove-btn"><i class="far fa-trash-alt"></i></button>
                        </div>
                    </li>
                </ul>
                <ul class="offcanvas-wishlist-action-button">
                    <li>
                        <nuxt-link to="/my-account/wishlist" class="theme-btn-one btn-black-overlay btn_md">View wishlist</nuxt-link>
                    </li>
                </ul>
            </div>
            
            <ul v-else class="offcanvas-wishlist">
                <li>No Item in your wishlist!</li>
            </ul>

        </div>
    </b-sidebar>
    <!-- End Offcanvas Wishlist Sidebar Section -->

    <!-- Start Offcanvas Search Bar Section -->
    <b-sidebar
    id="search_sidebar"
    backdrop
    >
        <div class="px-3 py-2 search-sidebar-content-wrap d-flex justify-content-center align-content-center w-100 h-100">
            <form class="d-flex flex-column justify-content-center product-search-form">
                <input
                 type="search"
                  placeholder="Type keyword(s) here"
                  v-model="searchString" 
                  @keyup="searchProduct" />
                <button class="btn btn-lg btn-golden">Search</button>

                <!-- Show search product here -->
                <ul v-if="searchItems.length" class="search-results-wrap">
                    <li v-for="(product, index) in searchItems" :key="index">
                        <div class="offcanvas-cart-item-block mb-3">
                            <nuxt-link :to="{ path: '/product/'+product.id }" class="offcanvas-cart-item-image-link">
                                <img :src='getImageUrl(product.images[0].src)' alt="img" class="offcanvas-cart-image" />
                            </nuxt-link>
                            <div class="offcanvas-cart-item-content">
                                <nuxt-link :to="{ path: '/product/'+product.id }" class="offcanvas-cart-item-link text-white">{{product.title}}</nuxt-link>
                                <div class="offcanvas-cart-item-details">
                                    <span v-if="product.discount" class="offcanvas-cart-item-details-price text-white">${{discountedPrice(product)}}</span>
                                    <span v-else class="offcanvas-cart-item-details-price text-white">${{product.price}}</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <!-- Show search product here -->
            </form>
        </div>
    </b-sidebar>
    <!-- End Offcanvas Search Bar Section -->

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
    display: none;
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