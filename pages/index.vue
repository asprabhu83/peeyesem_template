<template>
  <div class="home-page">

    <!-- Banner Area -->
    <section >
        <div class="row m-0 block">
            <div class="product_single_one_img">
                        <swiper class="swiper product-single-2-slider" :options="swiperOption">
                            <swiper-slide>
                                <img :src="require('@/assets/img/cars/car13.webp')" alt="img" style="width:100%;" />
                            </swiper-slide>
                            <swiper-slide>
                                <img :src="require('@/assets/img/cars/car14.webp')" alt="img" style="width:100%;" />
                            </swiper-slide>
                            <swiper-slide>
                                <img :src="require('@/assets/img/cars/car15.webp')" alt="img" style="width:100%;" />
                            </swiper-slide>
                            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>

                        </swiper>
            </div>
        </div>
    </section>

    <!-- Product variation -->
    <section id="product_variation_one" class="pt-100">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="product_variation_one_boxed img-zoom-hover">
                        <img :src="require('@/assets/img/cars/car2.jpg')" alt="img" />
                    </div>
                    <div class="product_variation_one_boxed img-zoom-hover">
                        <img :src="require('@/assets/img/cars/car3.jpg')" alt="img" />
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 flex items-center">
                    <div class="product_variation_one_boxed ">
                        <img :src="require('@/assets/img/cars/car10.jpg')" alt="img" />
                        <div class="product_var_one_text_center">
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="product_variation_one_boxed img-zoom-hover" style="margin-bottom:115px;margin-top:40px;">
                        <img :src="require('@/assets/img/cars/car9.webp')" alt="img" />
                    </div>
                    <div class="product_variation_one_boxed img-zoom-hover" style="margin-top:40px;">
                        <img :src="require('@/assets/img/cars/car8.webp')" alt="img" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="my-24">
        <div class="container">
            <div class="about_car_sec flex  justify-center">
                <div class="left_sec w-1/2 mx-10 pt-6">
                    <h3 class="text-uppercase">About cardealer <hr class="h-1 bg-black w-3/12 my-1" /></h3>
                    <div class="flex items-center my-5">
                        <div class="mx-3 text-3xl">10</div>
                        <div class="mx-3">Everything you need to build an amazing dealership automotive responsive website.</div>
                    </div>
                    <div class="my-6 text-gray">
                        Car Dealer is the best premium HTML5 Template. We provide everything you need to build an Amazing dealership website developed especially for car sellers, dealers or auto motor retailers.
                    </div>
                </div>
                <div class="right_sec w-1/2 mx-10">
                    <img :src="require('@/assets/img/cars/car18.webp')" style="margin-left:auto;margin-right:auto;" alt="img" />
                </div>
            </div>
        </div>
    </section>
    <section class="my-24 fixed_bg_image flex items-center">
        <div class="container">
            <div class="row  service_items flex items-center justify-evenly">
                <div class="text-white text-center service_items font-bold text-xl">
                    <div class="mb-2">VEHICLES IN STOCK</div>
                    400
                </div>
                <div class="text-white text-center service_items font-bold text-xl">
                    <div class="mb-2">DEALER REVIEWS</div>
                    255
                </div>
                <div class="text-white text-center service_items font-bold text-xl">
                   <div class="mb-2">HAPPY CUSTOMER</div>
                    430
                </div>
                <div class="text-white text-center service_items font-bold text-xl">
                   <div class="mb-2">AWARDS</div>
                    340
                </div>
            </div>
        </div>
        <div class="overlay" />
    </section>

    <section class="my-20 cars_product_section" v-if="cars.length !== 0" >
        <h2 class="text-center text-uppercase" >Choose Your Dream Hyundai Car<hr class="h-1 w-3/12 my-2 mx-auto bg-black" style="background-color:black!important;" /></h2>
        <div class="card_box flex flex-wrap mt-16 mx-auto justify-center" style="width:77%;">
            <div class="car_box m-4 shadow-md p-4 rounded-sm" v-for="car in cars.cars" :key="car.id">
                <a :href="'/cars/?id='+ car.id" class="text-center block my-6 px-3 cursor-pointer rounded-sm my-4" style="margin-bottom:0!important;">
                    <img :src="require('@/assets/img/cars/car8.webp')" alt="" style="width:330px;max-height:388px;">
                </a>
                <div class="mt-5 mb-4">
                    <div class="text-center font-medium mb-2 cursor-pointer">{{car.car_title}}</div>
                   <div class="text-center font-medium"><font-awesome-icon icon="rupee-sign"  size="1x" class="text-black mx-2" />{{car.car_price}}</div>
                </div>
            </div>
        </div>
    </section>

    <section class="my-24">
        <div class="container">
            <div class=" flex items-center">
                <div class="left w-1/2 mx-10">
                  <h3 class="font-bold mb-3 sales_heading">ARE YOU LOOKING FOR A CAR?</h3>
                  <p class="sales_heading mb-3">Search your car in our Inventory and request a quote on the vehicle of your choosing.</p>
                  <img :src="require('@/assets/img/cars/car16.webp')" alt="img"  />
                </div>
                <div class="right w-1/2 mx-10">
                  <h3 class="font-bold mb-3 sales_heading">ARE YOU LOOKING FOR A CAR?</h3>
                  <p class="sales_heading mb-3">Request search your car in our Inventory and a quote on the vehicle of your choosing.</p>
                  <img :src="require('@/assets/img/cars/car17.webp')" alt="img" style="transform:scaleX(-1);" />
                </div>
            </div>
        </div>
    </section>


    <!-- Special offer -->
    <section class="mt-20">
        <div>
            <img :src="require('@/assets/img/cars/car12.jpg')" alt="img" class="" style="width:100%;height:auto;">
        </div>
    </section>

    <!-- Latest Blog Arae -->
    

    <!-- Instagram Arae -->

    <!-- Add to cart Alert / Notification  -->
    <!-- <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="alert"
    >
      <p class="font-weight-normal">Successfully added to your list</p>
    </b-alert> -->
    <!-- Add to cart Alert / Notification  -->

    <!-- Add to wishlist / wishlist Notification  -->
    <!-- <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="alert"
    >
      <p class="font-weight-normal">Successfully added to your list</p>
    </b-alert> -->
    <!-- Add to wishlist / wishlist Notification  -->

    <!-- Add to Compare / Compare Notification  -->
    <!-- <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="alert"
    >
      <p class="font-weight-normal">Successfully added to your list</p>
    </b-alert> -->
    <!-- Add to Compare / Compare Notification  -->

  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductBox1 from '~/components/product-box/ProductBox1'
import Timer from '../components/widgets/Timer'
import InstagramArea from '../components/instagram/InstagramArea'
import BlogItem1 from '~/components/blog/BlogItem1'

import axios from '~/plugins/axios'

export default {
    name: 'Home',
    components: {
        ProductBox1,
        Timer,
        InstagramArea,
        BlogItem1,
    },

    data() {
      return { 
        title: 'Home',
         blogItems: [
            {
                id: 1,
                blogThumb: require('assets/img/blog/post1.png'),
                blogTitle: 'This Designer Bronzer Has Even The Drugstore-Beauty-Buyers Splurging!',
                blogDescription: 'Today kicks off early access to the Sephora Spring Sales Event so I wanted to share some of my top recent beauty buys I’ve been',
                blogPublishDate: '24 February 2021'
            },
            {
                id: 2,
                blogThumb: require('assets/img/blog/post2.png'),
                blogTitle: '4 Fresh Ways To Style Leather Shorts For Spring',
                blogDescription: 'We spent spring break this year in California with Cody’s family and it was such a fun getaway. Cody’s family always goes hard on vacation',
                blogPublishDate: '29 jan 2018'
            },
            {
                id: 3,
                blogThumb: require('assets/img/blog/post3.png'),
                blogTitle: 'Shopbop Spring Sale Selects All Under Around $100!',
                blogDescription: 'STRAIGHT LEG DENIM (UNDER $100) – Love all the Ribcage Levi’s styles! They are all really flattering. but since these are wider leg I stuck with my usual size (25).',
                blogPublishDate: '24 February 2021'
            },
            {
                id: 4,
                blogThumb: require('assets/img/blog/post4.png'),
                blogTitle: 'This Made Me Splurge on The Apple Watch',
                blogDescription: 'From our favourite UK influencers to the best missives from Milan and the coolest New Yorkers, read on some of the best fashion blogs out there.',
                blogPublishDate: '21 February 2019'
            },
            {
                id: 5,
                blogThumb: require('assets/img/blog/post5.png'),
                blogTitle: 'This Designer Bronzer Has Even Buyers Splurging!',
                blogDescription: 'Today kicks off early access to the Sephora Spring Sales Event so I wanted to share some of my top recent beauty buys',
                blogPublishDate: '24 February 2021'
            },
            {
                id: 6,
                blogThumb: require('assets/img/blog/post6.png'),
                blogTitle: '4 Tips for A Colorful Easter Tablescape',
                blogDescription: 'Spring is all about the colors! Especially after what feels like an endless winter, I catch myself craving more color than usual.',
                blogPublishDate: '24 February 2021'
            },
            {
                id: 7,
                blogThumb: require('assets/img/blog/post7.png'),
                blogTitle: 'Hawaii Couples Trip Guide and Spring Break Faves',
                blogDescription: 'After every trip to Hawaii, I always have a few DMs asking where we stayed, our favorite beaches, etc. Especially with spring break around the corner.',
                blogPublishDate: '24 February 2021'
            },
            {
                id: 8,
                blogThumb: require('assets/img/blog/post8.png'),
                blogTitle: 'If You Struggle To Hit Your Goals, Try This Instead',
                blogDescription: 'This year, instead of setting grand, lofty goals and New Years Resolutions, I realized that I respond better to smaller targets that I can cross',
                blogPublishDate: '24 February 2021'
            },
            {
                id: 9,
                blogThumb: require('assets/img/blog/post9.png'),
                blogTitle: 'The Luxury Winter Accessory That’s Trending Now',
                blogDescription: 'No matter what you spend on your wardrobe, there are three pieces that can always elevate your look – shoes, handbags, and sunglasses.',
                blogPublishDate: '24 February 2021'
            }
        ],

        products: [],
        category: [],
        cartproduct: {},

        compareproduct: {},

        dismissCountDown: 0,

        cars:[],

        // Todays Slider options 
        swiperOption: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 0,
                loop: true,
                mousewheel: true,
                keyboard: {
                    enabled: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                autoplay: true,
            },

      }
    },
    computed: {
        ...mapState({
            productslist: state => state.products.productslist
        }),
    },
    mounted() {
        // For scroll page top for every Route 
        window.scrollTo(0, 0)

        this.productsArray()
        this.GetCars()
    },
    methods: {
        productsArray: function () {
            this.productslist.map((item) => {
                if (item.type === 'fashion') {
                this.products.push(item)
                item.collection.map((i) => {
                        const index = this.category.indexOf(i)
                        if (index === -1) this.category.push(i)
                    })
                }
            })
        },
        // For Product Tab
        getCategoryProduct(collection) {
            return this.products.filter((item) => {
                if (item.collection.find(i => i === collection)) {
                    return item
                }
            })
        },

        // Product added Alert / notificaion 
        alert(item) {
            this.dismissCountDown = item
        },
        GetCars(){
            axios.get(process.env.baseUrl + 'api/cars/index')
            .then((response) => {
            this.cars = response.data
            console.log(this.cars)
            })
            .catch((error) => {
            console.log(error)
            })
        }
    },

    // Page head() Title, description for SEO 
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Home page - PEEYESEM HYUNDAI'
          }
        ]
      }
    }
}
</script>
<style scoped>
.fixed_bg_image{
    background-image: url('../assets/img/cars/car11.jpg');
    height: auto;
    width: 100%;
    background-position: center;
    height: 250px;
    background-attachment: fixed;
    position: relative;
    background-repeat: no-repeat;
}
.overlay{
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 200;
}
.service_items{
    z-index: 205;
}
.sales_heading{
    width:70%;
    margin-left: auto;
    margin-right: auto;
}
</style>