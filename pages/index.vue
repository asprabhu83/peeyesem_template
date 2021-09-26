<template>
  <div class="home-page">

    <!-- Banner Area -->
    <section class="relative" >
        <div class="row m-0 block">
            <div class="product_single_one_img">
                        <swiper class="swiper product-single-2-slider" :options="swiperOption">
                            <swiper-slide>
                                <img :src="require('@/assets/img/cars/car15.webp')" alt="img" style="width:100%;" />
                                <div class="overlay2" />
                            </swiper-slide>
                            <swiper-slide>
                                <img :src="require('@/assets/img/cars/car13.webp')" alt="img" style="width:100%;" />
                                <div class="overlay2" />
                            </swiper-slide>
                            <swiper-slide>
                                <img :src="require('@/assets/img/cars/car14.webp')" alt="img" style="width:100%;" />
                                <div class="overlay2" />
                            </swiper-slide>
                            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>

                        </swiper>
            </div>
        </div>
    </section>

    <!-- Product variation -->
    <section id="product_variation_one" class="pt-10 mb-14">
        <div class="container-fluid">
            <div class="my-5">
                <div class="text-center font-bold text-3xl text-uppercase feature_heading">FEATURED CAR<hr class="h-1 w-1/12 my-2 mx-auto bg-black" style="background-color:black!important;" /></div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="product_variation_one_boxed img-zoom-hover">
                        <img :src="require('@/assets/img/cars/car2.jpg')" alt="img" />
                    </div>
                    <div class="product_variation_one_boxed mob_center_car_image" style="display:none;">
                        <img :src="require('@/assets/img/cars/car10.jpg')" alt="img" />
                    </div>
                    <div class="product_variation_one_boxed img-zoom-hover">
                        <img :src="require('@/assets/img/cars/car3.jpg')" alt="img" />
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 flex items-center">
                    <div class="product_variation_one_boxed pc_center_car_image">
                        <img :src="require('@/assets/img/cars/car10.jpg')" alt="img" />
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

    <section class="py-24"  style="background:#e6eaef;">
        <div class="container">
            <div class="about_car_sec flex  justify-center">
                <div class="left_sec w-1/2 mx-10 pt-6">
                    <h3 class="text-uppercase about_psm_head">About Peeyesyem hyundai <hr class="h-1 bg-black w-3/12 my-1" /></h3>
                    <!-- <div class="flex items-center my-5">
                        <div class="mx-3 text-3xl">10</div>
                        <div class="mx-3">Everything you need to build an amazing dealership automotive responsive website.</div>
                    </div> -->
                    <div class="my-6 text-gray">
                        Peeyesyem Hyundai is one of the largest Hyundai dealer having showrooms at various locations around Tamilnadu. Our branches are located at Chennai, Tuticorin, Tiruchendur, Tuticorin, Madurai and Ramnathapuram. We strive to provide the best services to our customers with great satisfaction and excellency.
                    </div>
                </div>
                <div class="right_sec w-1/2 mx-10 flex items-center about_psm_cars">
                    <img :src="require('@/assets/img/cars/hyundai_group_car2.png')" style="margin-left:auto;margin-right:auto;" alt="img" />
                </div>
            </div>
        </div>
    </section>
    <section class="fixed_bg_image animated_counter flex items-center">
        <div class="container service_item_container">
            <div class="row  service_items service_item_box flex items-center justify-evenly">
                <div class="text-white text-center service_items service_item  font-bold text-xl">
                    <div class="mb-2">SHOWROOMS IN TAMILNADU</div>
                   <div class="flex items-center count_box"><img class="mx-2" :src="require('@/assets/img/vehicle.png')" alt="img"  /><div id="value1"> 6</div></div>
                </div>
                <div class="text-white text-center service_items service_item font-bold text-xl">
                    <div class="mb-2">REVIEWS</div>
                   <div class="flex items-center count_box"><img class="mx-2" :src="require('@/assets/img/chatwhite.png')" alt="img"  /><div id="value2"> 255</div></div>
                </div>
                <div class="text-white text-center service_items service_item font-bold text-xl">
                   <div class="mb-2">HAPPY CUSTOMERS</div>
                   <div class="flex items-center count_box"><img class="mx-2" :src="require('@/assets/img/userwhite.png')" alt="img"  /><div id="value3"> 430</div></div>
                </div>
                <div class="text-white text-center service_items service_item font-bold text-xl">
                   <div class="mb-2">AWARDS</div>
                   <div class="flex items-center count_box"><img class="mx-2" :src="require('@/assets/img/awardicon.png')" alt="img"  /><div id="value4">340</div> </div>
                </div>
            </div>
        </div>
        <div class="overlay" />
    </section>

    <section class="pt-20 cars_product_section"  style="background: #e6eaef;">
        <div class="text-center font-bold text-3xl text-uppercase car_sec_head" >Choose Your Dream Hyundai Car<hr class="h-1 w-2/12 my-2 mx-auto bg-black" style="background-color:black!important;" /></div>
        <div class="card_box  flex flex-wrap mt-16 mx-auto">
            <div class="car_box_item" v-for="car in staticcars" :key="car.id">
                <a :href="'/cars/?id='+ car.id" class="text-center block car_image_box cursor-pointer" style="margin-bottom:0!important;min-height:198px;max-height:198px;">
                    <img :src="require('@/assets/img/cars/static/'+ car.image)" alt="" style="width:315.7px;min-height:198px;max-height:198px;max-width:100%;">
                </a>
                <div class="car_details" >
                    <div class="text-center font-medium mt-1 mb-1 cursor-pointer">{{car.name}}</div>
                   <div class="text-center font-medium mt-1 mb-1"><font-awesome-icon icon="rupee-sign"  size="1x" class="text-black mx-2" />{{car.price}}</div>
                </div>
            </div>
        </div>
    </section>

    <section class=" fixed_bg_image2">
        <div class="block py-10">
            <div class="relative bg-position_overlay">
                <div class="text-center mb-2 text-lg  text-white">What Our Happy Clients say about us</div>
                <div class="text-center mb-5 text-3xl text-white font-bold testimonial_head">OUR TESTIMONIAL<hr class="h-1 bg-white mx-auto w-1/12 my-1" /></div>
            </div>
            <div class="product_single_one_img relative bg-position_overlay">
                        <swiper class="swiper product-single-2-slider" :options="swiperOption">
                            <swiper-slide>
                                <div class="testimonial_content">
                                    <div class="text-center text-md mb-10 text-white font-semibold flex items-start justify-center" >
                                        <img class="mx-1 quote_icon" :src="require('@/assets/img/quotewhite.png')" alt="img"  />
                                        <div class="mt-3">You will begin to realize why this exercise is called the Dickens reference to the ghost showing Scrooge Pattern with reference to the ghost showing Scrooge some different futures as you notice that the idea of this exercise.</div>
                                    </div>
                                    <div class="flex items-center justify-center">
                                        <img class="mx-1" :src="require('@/assets/img/userwhite2.png')" alt="img"  />
                                        <div class="mx-1 font-semibold">JOHN DOE | <span class="font-normal">customer</span></div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="testimonial_content">
                                    <div class="text-center text-md mb-10 text-white font-semibold flex items-start justify-center" >
                                        <img class="mx-1 quote_icon" :src="require('@/assets/img/quotewhite.png')" alt="img"  />
                                        <div class="mt-3">You will begin to realize why this exercise is called the Dickens reference to the ghost showing Scrooge Pattern with reference to the ghost showing Scrooge some different futures as you notice that the idea of this exercise.</div>
                                    </div>
                                    <div class="flex items-center justify-center">
                                        <img class="mx-1" :src="require('@/assets/img/userwhite2.png')" alt="img"  />
                                        <div class="mx-1 font-semibold">FELICA QUEEN | <span class="font-normal">Auto Dealer</span></div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="testimonial_content">
                                    <div class="text-center text-md mb-10 text-white font-semibold flex items-start justify-center" >
                                        <img class="mx-1 quote_icon" :src="require('@/assets/img/quotewhite.png')" alt="img"  />
                                        <div class="mt-3">You will begin to realize why this exercise is called the Dickens reference to the ghost showing Scrooge Pattern with reference to the ghost showing Scrooge some different futures as you notice that the idea of this exercise.</div>
                                    </div>
                                    <div class="flex items-center justify-center">
                                        <img class="mx-1" :src="require('@/assets/img/userwhite2.png')" alt="img"  />
                                        <div class="mx-1 font-semibold">ALICE WILLIAMS | <span class="font-normal">Car Dealer</span></div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>

                        </swiper>
            </div>
        </div>
        <div class="overlay2 testimonial" />
    </section>

    <section class="py-24" style="background:#e6eaef;">
        <div class="container">
            <div class=" flex items-center sale_car_sec">
                <div class="left w-1/2 mx-10">
                  <h3 class="font-bold mb-3 sales_heading main_head">ARE YOU LOOKING FOR A CAR?</h3>
                  <p class="sales_heading mb-3">Search your car in our Inventory and request a quote on the vehicle of your choosing.</p>
                  <img :src="require('@/assets/img/cars/car16.webp')" alt="img"  />
                </div>
                <div class="right w-1/2 mx-10">
                  <h3 class="font-bold mb-3 sales_heading main_head">DO YOU WANT TO SELL YOUR CAR?</h3>
                  <p class="sales_heading mb-3">Request search your car in our Inventory and a quote on the vehicle of your choosing.</p>
                  <img :src="require('@/assets/img/cars/car17.webp')" alt="img" style="transform:scaleX(-1);" />
                </div>
            </div>
        </div>
    </section>


    <!-- Special offer -->
    <section class="">
        <div>
            <img :src="require('@/assets/img/cars/car12.jpg')" alt="img" class="" style="width:100%;height:auto;">
        </div>
    </section>

    

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

        staticcars:[
            {
                id:1,
                name:'Hyundai Tuscon',
                image:'car1.webp',
                price:'4,67,490'
            },
            {
                id:2,
                name:'Hyundai Verna',
                image:'car3.jpg',
                price:'8,19,900'
            },
            {
                id:3,
                name:'Hyundai Aura',
                image:'car2.webp',
                price:'22,30,000'
            },
            {
                id:4,
                name:'Hyundai Venue',
                image:'car4.webp',
                price:'8,16,500'
            },
            {
                id:5,
                name:'Hyundai Kona',
                image:'car6.jpg',
                price:'9,99,900'
            },
            {
                id:6,
                name:'Hyundai Alcazar',
                image:'car5.jpg',
                price:'16,53,300'
            },
            {
                id:7,
                name:'Hyundai All New I20',
                image:'car7.jpg',
                price:'8,19,900'
            },
            {
                id:8,
                name:'Hyundai Santro',
                image:'car8.jpg',
                price:'4,67,490'
            },
            {
                id:9,
                name:'GRAND i10 NIOS',
                image:'car9.webp',
                price:'8,14,900'
            },
            {
                id:10,
                name:'Hyundai i20 N Line',
                image:'car10.webp',
                price:'7,31,900'
            },
            {
                id:11,
                name:'Hyundai ELANTRA',
                image:'car11.webp',
                price:'10,68,000'
            },
            {
                id:12,
                name:'Hyundai CRETA',
                image:'car12.jpg',
                price:'17,00,000'
            }
        ],

        // Todays Slider options 
        swiperOption: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 0,
                loop: true,
                mousewheel: false,
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

        const obj1 = document.getElementById("value1");
        const obj2 = document.getElementById("value2");
        const obj3 = document.getElementById("value3");
        const obj4 = document.getElementById("value4");

        setTimeout(()=>{
            this.animateValue(obj1, 0, 6, 2000);
            this.animateValue(obj2, 0, 255, 7000);
            this.animateValue(obj3, 0, 430, 7000);
            this.animateValue(obj4, 0, 340, 7000);
        },3000)
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
        },
         animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
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
.car_image_box{
    overflow: hidden;
    cursor: pointer;
}
.car_image_box img{
    object-fit: cover;
    transition: .5s ease-in-out;
}
.car_image_box img:hover{
    transform: scale(1.1);
}
.testimonial_content{
    width: 40%;
    color: white;
    border-radius: 7px;
    margin: 10px auto;
    background-color: #002c5f;
    padding: 50px 10px;
}
.fixed_bg_image{
    background-image: url('../assets/img/cars/car19.jpg');
    height: auto;
    width: 100%;
    background-position: center;
    height: 250px;
    background-attachment: fixed;
    position: relative;
    background-repeat: no-repeat;
}
.fixed_bg_image2{
    background-image: url('../assets/img/cars/car19.jpg');
    height: auto;
    width: 100%;
    background-position: center;
    height: 540px;
    background-attachment: fixed;
    position: relative;
    background-repeat: no-repeat;
}
.overlay{
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 200;
}
.overlay2{
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index:200;
}
.overlay2.testimonial{
    background-color: rgba(0, 0, 0, 0.6);
}
.service_items{
    z-index: 205;
}
.sales_heading{
    width:70%;
    margin-left: auto;
    margin-right: auto;
}
.bg-position_overlay{
    z-index: 205;
}
.car_details{
    background: white;
    opacity: 0.8;
    position: absolute;
    bottom: 0;
    width: 100%;
    transform: scale(0);
    transition: 0.4s ease-in-out;
}
.car_box_item{
    position: relative;
}
.car_box_item:hover .car_details{
    transform: scale(1);
}
.swiper-button-prev, .swiper-button-next{
    z-index: 220;
    border-radius: 50%;
    width: 40px!important;
    height: 40px!important;
    margin-left: 10px;
    margin-right: 10px;
}
.swiper-button-next:hover, .swiper-button-prev:hover{
    background: black!important;
}
@media only screen and (min-width:300px) and (max-width:600px){
    .swiper-button-prev, .swiper-button-next{
        width: 25px!important;
        height: 25px!important;
        margin-left: 4px;
        margin-right: 4px;
    }
    .about_car_sec{
        display: block;
    }
    .about_car_sec .left_sec,.about_car_sec .right_sec{
        width: 100%;
        margin: 0;
        padding: 0;
    }
    .card_box{
        display: block;
    }
    .car_box_item img{
        width: 100%!important;
    }
    .testimonial_content{
        width:95%;
        font-size: 14px;
        padding: 50px 20px;
    }
    .testimonial_content .quote_icon{
        display: none;
    }
    .feature_heading{
        font-size: 23px;
    }
    .feature_heading hr{
        width: 20%;
        margin-top: 1px!important;
    }
    .car_sec_head{
        font-size: 18px;
    }
    .car_sec_head hr{
        width: 40%;
        margin-top: 1px!important;
    }
    .about_psm_head{
        font-size: 20px;
    }
    .about_psm_head hr{
        width:30%;
    }
    .about_psm_cars{
        margin-top:65px!important;
    }
    .service_item_box{
        display: block;
    }
    .fixed_bg_image{
        height: 465px;
    }
    .service_item{
        margin-top: 35px;
        margin-bottom: 35px;
        font-size: 18px;
    }
    .count_box{
        justify-content: center;
    }
    .service_item_container{
        position: relative;
        z-index: 205;
    }
    .testimonial_head{
        font-size: 25px;
    }
    .sale_car_sec{
        display: block;
    }
    .sale_car_sec .left{
        width: 100%;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 60px;
    }
    .sale_car_sec .right{
        width: 100%;
        margin-left: 0;
        margin-right: 0;
    }
    .sales_heading.main_head{
        font-size: 20px;
    }
    .sales_heading{
        width: 95%;
    }
    .mob_center_car_image{
        display: block!important;
    }
    .pc_center_car_image{
        display: none;
    }
}
</style>