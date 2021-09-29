<template >
  <div class="home-page">

    <!-- Banner Area -->
    <section class="relative" >
        <div class="row m-0 block">
            <div class="product_single_one_img">
                        <swiper class="swiper product-single-2-slider" :options="swiperOption">
                            <swiper-slide>
                               <nuxt-link to="/" class="cursor-pointer"><img :src="require('@/assets/img/cars/car15.webp')" alt="img" style="width:100%;" /></nuxt-link>
                            </swiper-slide>
                            <swiper-slide>
                               <nuxt-link to="/" class="cursor-pointer"> <img :src="require('@/assets/img/cars/car13.webp')" alt="img" style="width:100%;" /></nuxt-link>
                            </swiper-slide>
                            <swiper-slide>
                               <nuxt-link to="/" class="cursor-pointer"><img :src="require('@/assets/img/cars/car14.webp')" alt="img" style="width:100%;" /></nuxt-link>
                            </swiper-slide>
                            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>

                        </swiper>
            </div>
        </div>
    </section>

    <!-- Product variation -->
    <!-- <section id="product_variation_one" class="pt-10 mb-14">
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
    </section> -->

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
        <div class="mt-14 category_sec">
            <div class="container">
                <div class="flex items-center justify-center">
                    <div class=" category_item font-semibold text-lg cursor-pointer"  v-for="(item, index) in carCategory" :class="categoryIndex == index ? 'active': ''" @click="categoryIndex = index, filterItems(item)" :key="index">
                        {{item}}
                    </div>
                </div>
            </div>
        </div>
        <div class="card_box  flex flex-wrap mt-16 mx-auto" id="isotope">
            <div class="car_box_item" v-for="car in staticcars" :key="car.id">
                <a :href="'/cars/?id='+ car.id" class="text-center block car_image_box cursor-pointer" >
                    <img :src="require('@/assets/img/cars/static/'+ car.image)" alt="" >
                </a>
                <div class="car_name">
                     <div class="text-center text-white py-1 font-medium mt-1 mb-1">{{car.name}}</div>
                </div>
                <div class="car_details" >
                    <div class="text-center font-medium mt-1 mb-1 cursor-pointer">{{car.name}}</div>
                   <div class="text-center font-medium mt-1 mb-1"><font-awesome-icon icon="rupee-sign"  size="1x" class="text-black mx-2" />{{car.price}}</div>
                </div>
            </div>
        </div>
    </section>

    <section class=" fixed_bg_image2">
        <div class="block py-10">
            <div class="relative bg-position_overlay testimonial_haeding">
                <div class="text-center mb-2 text-lg  text-white sub_head">What Our Happy Clients say about us</div>
                <div class="text-center mb-5 text-3xl text-white font-bold testimonial_head">OUR TESTIMONIAL<hr class="h-1 bg-white mx-auto w-1/12 my-1" /></div>
            </div>
            <div class="product_single_one_img relative bg-position_overlay">
                        <swiper class="swiper product-single-2-slider" :options="swiperOption">
                            <swiper-slide>
                                <div class="testimonial_content">
                                    <div class="text-center quote_lines text-md mb-10 text-white font-semibold flex items-start justify-center" >
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
                                    <div class="text-center  quote_lines text-md mb-10 text-white font-semibold flex items-start justify-center" >
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
                                    <div class="text-center quote_lines text-md mb-10 text-white font-semibold flex items-start justify-center" >
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

    <!-- <section class="py-24 sales_car_box" style="background:#e6eaef;">
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
    </section> -->

    <section class="pb-20 blog_post_section">
        <div class="container">
            <div class="blog_heading text-capitalize text-center py-16 font-bold text-3xl">LATEST NEWS <hr class="w-1/12 mx-auto bg-black h-0.5" style="background-color:black!important;"/></div>
            <div class="flex blog_card_body items-center justify-around">
                <div class="blog_card_box w-3/12 cursor-pointer">
                    <div class="photo_box">
                        <img :src="require('@/assets/img/cars/blog/img1.jpg')" alt="img" style="width:100%;"  />
                    </div>
                    <div class="content px-3 py-3">
                        <div class="text-center text-lg font-semibold my-4">Does Your Life Lack Meaning <hr class="w-2/12 mx-auto bg-black h-0.5" style="background-color:black!important;"/></div>
                        <p class="text-gray text-md my-4 text-center">You will begin to realize why this exercise Pattern is called the Dickens with reference to the ghost</p>
                    </div>
                </div>
                <div class="blog_card_box w-3/12 cursor-pointer">
                    <div class="photo_box">
                        <img :src="require('@/assets/img/cars/blog/img2.jpg')" alt="img" style="width:100%;"  />
                    </div>
                    <div class="content px-3 py-3">
                        <div class="text-center text-lg font-semibold my-4">The A Z Of Motivation <hr class="w-2/12 mx-auto bg-black h-0.5" style="background-color:black!important;"/></div>
                        <p class="text-gray text-md my-4 text-center">Exercise is called you will begin to Pattern realize why this the Dickens Pattern with reference to ghost</p>
                    </div>
                </div>
                <div class="blog_card_box w-3/12 cursor-pointer">
                    <div class="photo_box">
                        <img :src="require('@/assets/img/cars/blog/img3.jpg')" alt="img" style="width:100%;"  />
                    </div>
                    <div class="content px-3 py-3">
                        <div class="text-center text-lg font-semibold my-4">Motivation In Life <hr class="w-2/12 mx-auto bg-black h-0.5" style="background-color:black!important;"/></div>
                        <p class="text-gray text-md my-4 text-center">Dickens Pattern you will begin to realize why this Dickens exercise is the with reference to the ghost</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-20 text-center">
            <button type="button" class="blog_post_button">View All Posts</button>
        </div>
    </section>

    <section class="book_form_section ">
        <div class="flex book_form_box">
            <div class="left w-1/2 relative cursor-pointer" @click="formModal = true">
                <img :src="require('@/assets/img/cars/form1.jpg')" alt="img" class="" style="width:100%;height:auto;">
                <div class="heading" >
                    <div class="text-center font-bold text-white text-2xl">Book a Car</div>
                </div>
            </div>
            <div class="right w-1/2 relative cursor-pointer" @click="formModal2 = true">
                <img :src="require('@/assets/img/cars/form2.jpg')" alt="img" class="" style="width:100%;height:auto;">
                <div class="heading" >
                    <div class="text-center font-bold text-white text-2xl">Book a Service</div>
                </div>
            </div>
        </div>
    </section>


    <!-- Special offer -->
    <section class="" style="background:#e6eaef;">
        <div class="text-capitalize text-center pt-14 pb-10 font-bold text-3xl upcoming_car_heading">Upcoming Cars<hr class="h-1 w-1/12 my-2 mx-auto bg-black" style="background-color:black!important;" /></div>
        <div class="row m-0 block">
            <div class="product_single_one_img">
                <swiper class="swiper product-single-2-slider" :options="swiperOption">
                    <swiper-slide>
                        <nuxt-link to="/" class="cursor-pointer"><img :src="require('@/assets/img/cars/car12.jpg')" alt="img" class="" style="width:100%;height:auto;"></nuxt-link>
                    </swiper-slide>
                    <swiper-slide>
                        <nuxt-link to="/" class="cursor-pointer"><img :src="require('@/assets/img/cars/poster_car1.jpg')" alt="img" class="" style="width:100%;height:auto;"></nuxt-link>
                    </swiper-slide>
                    <swiper-slide>
                        <nuxt-link to="/" class="cursor-pointer"><img :src="require('@/assets/img/cars/poster_car2.jpg')" alt="img" class="" style="width:100%;height:auto;"></nuxt-link>
                    </swiper-slide>
                    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                </swiper>
            </div>
        </div>
    </section>

    <div class="back_to_top" @click="backToTop">
        <img :src="require('@/assets/img/back_to_top_car.png')" alt="img" style="width:100%;height:auto;"/>
    </div>

    <section class="form_modal_box" v-if="formModal == true">
        <div class="w-4/12 card_body bg-white card mx-auto">
           <form class="pb-12 px-8">
               <div class="heading flex items-center justify-between pt-6 pb-8 font-semibold text-lg">Book a Car<font-awesome-icon icon="times"  size="1x" class="text-red-600 cursor-pointer" @click="formModal = false" /></div>
               <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Your Email
                    </label>
                    <input
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
                    placeholder="Your Name"
                    />
                </div>
                <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="cars"
                    >
                    Car Models
                    </label>
                    <select
                    class="
                      shadow
                      appearance-none
                      border
                      rounded
                      w-full
                      py-2
                      px-3
                      text-gray-700
                      cursor-pointer
                      leading-tight
                      focus:outline-none
                      focus:shadow-outline
                    "
                    id="cars"
                  >
                  <option class="text-xl " value="">Choose Model</option>
                  <option class="text-xl" :value="model.id" v-for="model in originalcars"
                    :key="model.id" >{{model.name}}</option>
                  </select>
                </div>
               <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="email"
                    >
                    Your Email
                    </label>
                    <input
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
                    placeholder="Your Email"
                    />
                </div>
               <div class="mb-8">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="phone"
                    >
                    Your Phone
                    </label>
                    <input
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
                    type="number"
                    placeholder="Your Phone"
                    />
                </div>
               <div class="btn_grp">
                   <button  type="button" class="  text-white font-bold  mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline">Book a Car</button>
               </div>
           </form>
        </div>
    </section>

    <section class="form_modal_box" v-if="formModal2 == true">
        <div class="w-4/12 card_body bg-white card mx-auto">
           <form class="pb-12 px-8">
               <div class="heading flex items-center justify-between pt-6 pb-8 font-semibold text-lg">Book a Service<font-awesome-icon icon="times"  size="1x" class="text-red-600 cursor-pointer" @click="formModal2 = false" /></div>
               <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Your Email
                    </label>
                    <input
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
                    placeholder="Your Name"
                    />
                </div>
                <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="cars"
                    >
                    Car Models
                    </label>
                    <select
                    class="
                      shadow
                      appearance-none
                      border
                      rounded
                      w-full
                      py-2
                      px-3
                      text-gray-700
                      cursor-pointer
                      leading-tight
                      focus:outline-none
                      focus:shadow-outline
                    "
                    id="cars"
                  >
                  <option class="text-xl " value="">Choose Model</option>
                  <option class="text-xl" :value="model.id" v-for="model in originalcars"
                    :key="model.id" >{{model.name}}</option>
                  </select>
                </div>
               <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="email"
                    >
                    Your Email
                    </label>
                    <input
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
                    placeholder="Your Email"
                    />
                </div>
               <div class="mb-8">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="phone"
                    >
                    Your Phone
                    </label>
                    <input
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
                    type="number"
                    placeholder="Your Phone"
                    />
                </div>
               <div class="btn_grp">
                   <button  type="button" class=" text-white font-bold  mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline">Book a Service</button>
               </div>
           </form>
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
import isotope  from 'vueisotope'

export default {
    name: 'Home',
    components: {
        ProductBox1,
        Timer,
        InstagramArea,
        BlogItem1,
        isotope
    },

    data() {
      return { 
        title: 'Home',
        formModal:false,
        formModal2:false,
        options: {
            sortBy : "category"
        },

        products: [],
        category: [],
        cartproduct: {},

        compareproduct: {},

        dismissCountDown: 0,

        cars:[],

        staticcars:[
            {
                id:1,
                name:'Hyundai All New I20',
                image:'car7.jpg',
                category:'Hatchback',
                price:'8,19,900'
            },
            {
                id:2,
                name:'Hyundai Aura',
                image:'car2.webp',
                category:'Sedan',
                price:'22,30,000'
            },
            {
                id:3,
                name:'Hyundai Tuscon',
                image:'car1.webp',
                category:'SUV',
                price:'4,67,490'
            },
            {
                id:4,
                name:'Hyundai Verna',
                image:'car3.jpg',
                category:'Sedan',
                price:'8,19,900'
            },
            {
                id:5,
                name:'Hyundai Venue',
                image:'car4.webp',
                category:'SUV',
                price:'8,16,500'
            },
            {
                id:6,
                name:'Hyundai Kona',
                image:'car6.jpg',
                category:'SUV',
                price:'9,99,900'
            },
            {
                id:7,
                name:'Hyundai Alcazar',
                image:'car5.jpg',
                category:'SUV',
                price:'16,53,300'
            },
            {
                id:8,
                name:'Hyundai Santro',
                image:'car8.jpg',
                category:'Hatchback',
                price:'4,67,490'
            },
            {
                id:9,
                name:'GRAND i10 NIOS',
                image:'car9.webp',
                category:'Hatchback',
                price:'8,14,900'
            },
            {
                id:10,
                name:'Hyundai i20 N Line',
                image:'car10.webp',
                category:'Hatchback',
                price:'7,31,900'
            },
            {
                id:11,
                name:'Hyundai ELANTRA',
                image:'car11.webp',
                category:'Sedan',
                price:'10,68,000'
            },
            {
                id:12,
                name:'Hyundai CRETA',
                image:'car12.jpg',
                category:'SUV',
                price:'17,00,000'
            }
        ],

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
                name:'Hyundai Aura',
                image:'car2.webp',
                category:'Sedan',
                price:'22,30,000'
            },
            {
                id:3,
                name:'Hyundai Tuscon',
                image:'car1.webp',
                category:'SUV',
                price:'4,67,490'
            },
            {
                id:4,
                name:'Hyundai Verna',
                image:'car3.jpg',
                category:'Sedan',
                price:'8,19,900'
            },
            {
                id:5,
                name:'Hyundai Venue',
                image:'car4.webp',
                category:'SUV',
                price:'8,16,500'
            },
            {
                id:6,
                name:'Hyundai Kona',
                image:'car6.jpg',
                category:'SUV',
                price:'9,99,900'
            },
            {
                id:7,
                name:'Hyundai Alcazar',
                image:'car5.jpg',
                category:'SUV',
                price:'16,53,300'
            },
            {
                id:8,
                name:'Hyundai Santro',
                image:'car8.jpg',
                category:'Hatchback',
                price:'4,67,490'
            },
            {
                id:9,
                name:'GRAND i10 NIOS',
                image:'car9.webp',
                category:'Hatchback',
                price:'8,14,900'
            },
            {
                id:10,
                name:'Hyundai i20 N Line',
                image:'car10.webp',
                category:'Hatchback',
                price:'7,31,900'
            },
            {
                id:11,
                name:'Hyundai ELANTRA',
                image:'car11.webp',
                category:'Sedan',
                price:'10,68,000'
            },
            {
                id:12,
                name:'Hyundai CRETA',
                image:'car12.jpg',
                category:'SUV',
                price:'17,00,000'
            }
        ],

        shuffledCars:null,

        carCategory:null,

        categoryIndex:0,

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
        this.categoryNames()

        const obj1 = document.getElementById("value1");
        const obj2 = document.getElementById("value2");
        const obj3 = document.getElementById("value3");
        const obj4 = document.getElementById("value4");

        setTimeout(()=>{
            this.animateValue(obj1, 0, 6, 2000);
            this.animateValue(obj2, 0, 255, 7000);
            this.animateValue(obj3, 0, 430, 7000);
            this.animateValue(obj4, 0, 340, 7000);
        },2000)
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        filterItems(name){
          var newItems =  this.originalcars.filter((item)=> item.category == name);
          newItems.reverse()
          this.staticcars = newItems;
          if(name == 'ALL'){
              this.staticcars = this.originalcars
          }
          console.log(this.staticcars)
        },
        categoryNames(){
           var category = ['ALL',...new Set(this.staticcars.map((item)=>{return item.category}))]
           this.carCategory = category;
           
        },
        handleScroll(){
            var btn = document.querySelector('.back_to_top')
            if(pageYOffset > 260){
                btn.classList.add('show')
                btn.classList.remove('not_show');
            }else{
                btn.classList.remove('show')
                btn.classList.add('not_show');
            }

            if(pageYOffset < 10){
                btn.classList.remove('car_up')
            }
        },
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
        },
        backToTop(){
            var btn = document.querySelector('.back_to_top');
            btn.classList.add('car_up')
            window.scrollTo({top: 0, behavior: 'smooth'});
            // btn.classList.remove('car_up')
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
.blog_post_button{
    background:#002c5f;
    border: none;
    outline: none;
    padding: 10px 30px;
    color: white;
    border-radius: 5px;
    font-size: 17px;
}
.category_item.active{
    border-bottom:2px solid #002c5f;
    color:#002c5f;
}
.category_item:hover{
    border-bottom:2px solid #002c5f;
    color:#002c5f;
}
.category_item{
    margin: 0 16px;
    padding: 0 8px;
}

.form_modal_box{
    height: 100vh;
    width: 100%;
    z-index: 999999;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.6);
}
.form_modal_box .card{
    border-radius: 8px;
    animation: moveDown .7s;
}
.form_modal_box button{
    background-color: #002c5f;
}
@keyframes moveDown {
    from{
        opacity: 0;
        transform: translate3d(0,-100%,0);
    }
    to{
        opacity: 1;
        transform: none;
    }
}
.blog_post_section .blog_card_box{
    box-shadow: 0 2px 10px 4px rgb(0 0 0 / 12%);
    border-radius: 7px;
    overflow: hidden;
}
.book_form_section .heading{
    position: absolute;
    top: 50%;
    left: 50%;
}
.back_to_top::before{
    position: absolute;
    top: -1px;
    left: 0px;
    width: 85px;
    height: 89px;
    content: "";
    background-image: url('../assets/img/car_focus.png');
    opacity: 0;
}
.back_to_top:hover::before{
    opacity: 1;
}
.back_to_top{
    position: fixed;
    bottom: 4%;
    right: 2%;
    transition: 1s ease-in-out;
    display: none;
    z-index: 900;
    cursor: pointer;
}
.back_to_top.show{
    animation: fadeDown .5s;
    display: inline-block;
}
@keyframes fadeDown {
    from{
        opacity: 0;
        transform: translate3d(0,100%,0);
    }
    to{
        opacity: 1;
        transform: none;
    }
}

.back_to_top.car_up{
   bottom: 100% !important;
}
.sale_car_sec .left img, .sale_car_sec .right img{
    transition: .6s ease-in-out;
}
.sale_car_sec:hover .left img{
    margin-left: 80px;
}
.sale_car_sec:hover .right img{
    margin-left: -80px;
}
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
    background-image: url('../assets/img/cars/counter_poster.jpg');
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
    height: 500px;
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
.car_name{
    position: absolute;
    bottom: 0;
    width: 100%;
    transition: .4s ease-in-out;
}
.car_name div{
    text-shadow: 2px 2px 5px black;
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
    animation:scaleIn .7s;
}
@keyframes scaleIn{
    from{
        opacity: 0;
        transform: scale(0);
    }
    to{
        opacity: 1;
        transform: scale(1);
    }
}
.car_box_item:hover .car_details{
    transform: scale(1);
}
.car_box_item:hover .car_name{
    opacity: 0;
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
.car_box_item a{
    margin-bottom:0!important;
    min-height:198px;
    max-height:198px;
}
.car_box_item a img{
    width:317.1px;
    min-height:198px;
    max-height:198px;
    max-width:100%;
}
@media only screen and (min-width: 1270px) and (max-width: 1366px){
    .testimonial_content{
        padding: 20px 10px;
    }
    .testimonial_content .quote_lines div{
        font-size: 11px;
    }
    .testimonial_content div{
        font-size: 11px;
    }
    .testimonial_content .quote_icon{
        width: 50px;
    }
    .testimonial_content img{
        width:35px;
    }
    .fixed_bg_image2{
        height: 370px;
    }
    .testimonial_haeding .sub_head{
        font-size: 12px;
    }
    .testimonial_head{
        font-size: 16px;
        margin-bottom: 25px!important;
    }
    .testimonial_head hr{
        height: 2px;
        margin-top: -5px!important;
    }
    .blog_heading{
        font-size: 20px;
    }
    .blog_heading hr{
        height: 2px;
        margin-top: 2px!important;
    }
    .blog_card_box .content div{
        font-size: 14px;
        margin: 12px 0!important;
    }
    .blog_card_box p{
        font-size: 12px;
        margin: 12px 0!important;
    }
    .blog_card_box .content{
        padding: 10px !important;
    }
    .upcoming_car_heading{
        font-size: 22px;
    }
    .upcoming_car_heading hr{
        height: 2px;
        margin-top: 2px!important;
    }
    .sale_car_sec h3{
        font-size: 20px;
    }
    .sale_car_sec p{
      font-size: 12px;
    }
    .sales_car_box{
        padding: 60px 0!important;
    }
    .car_sec_head{
        font-size: 21px;
    }
    .car_sec_head hr{
        height: 2px;
        margin-top: 2px!important;
    }
    .cars_product_section{
        padding-top:60px !important;
    }
    .cars_product_section .card_box{
        margin-top: 60px !important;
    }
}

@media only screen and (min-width: 1367px) and (max-width: 1600px){
    .car_box_item a img{
        width:380.1px;
    }
    .testimonial_content{
        padding: 30px 10px;
    }
    .testimonial_content .quote_lines div{
        font-size: 13px;
    }
    .testimonial_content div{
        font-size: 13px;
    }
    .car_sec_head{
        font-size: 25px;
    }
    .blog_heading{
        font-size: 24px;
    }
    .upcoming_car_heading{
        font-size: 24px;
    }
}
@media only screen and (min-width: 1600px) and (max-width: 1750px){
    .car_box_item a img{
        width:345.1px;
    }
    .testimonial_content{
        padding: 30px 10px;
    }
}
@media only screen and (min-width:300px) and (max-width:600px){
    .blog_post_button{
        padding: 6px 20px;
    }
    .form_modal_box .card_body{
        width: 95%;
    }
    .form_modal_box .btn_grp button{
        width: 100%;
    }
    .upcoming_car_heading hr{
        margin-top: 1px!important;
    }
    .upcoming_car_heading{
        font-size: 24px;
        padding: 45px 0 !important;
    }
    .book_form_box{
        display: block!important;
    }
    .book_form_box .left, .book_form_box .right{
        width:100%;
    }
    .book_form_box .left .heading, .book_form_box .right .heading{
        font-size: 18px;
        transform: translate(-50%, -50%);
    }
    .blog_heading {
        font-size: 20px;
    }
    .blog_card_body{
        display: block!important;
    }
    .blog_card_box {
        width: 100%;
        margin-bottom: 35px;
    }
    .category_item{
        margin: 0 8px;
        padding: 0 5px;
    }
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
    .car_box_item{
        width:100%;
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
        margin-bottom: 16px!important;
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
    .sale_car_sec:hover .left img{
        margin-left: 0px;
    }
    .sale_car_sec:hover .right img{
        margin-left: 0px;
    }
}
</style>