<template >
  <div class="home-page" style="overflow:hidden;">

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

    <section class="py-24"  style="background:#e6eaef;">
        <div class="container">
            <div class="about_car_sec flex  justify-center">
                <div class="left_sec w-1/2 mx-10 pt-6">
                    <h3 class="text-uppercase about_psm_head">Welcome to Peeyesyem hyundai <hr class="h-1 bg-black w-3/12 my-1" /></h3>
                    <div class="my-6 text-gray">
                        Peeyesyem Hyundai is one of the largest Hyundai dealer having showrooms at various locations around Tamilnadu. Our branches are located at Chennai, Karaikudi, Kovilpatti, Tuticorin, Tiruchendur, Tuticorin, Madurai and Ramnathapuram. We strive to provide the best services to our customers with great satisfaction and excellency.
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
                    <div class="mb-2 text-uppercase">Sales Showroom</div>
                   <div class="flex items-center count_box"><img class="mx-2" :src="require('@/assets/img/vehicle.png')" alt="img"  /><div id="value1"> 6</div></div>
                </div>
                <div class="text-white text-center service_items service_item font-bold text-xl">
                    <div class="mb-2 text-uppercase">Service workshops</div>
                   <div class="flex items-center count_box"><img class="mx-2 car_sold" :src="require('@/assets/img/car_sold.png')" alt="img"  /><div id="value2"> 255</div></div>
                </div>
                <div class="text-white text-center service_items service_item font-bold text-xl">
                    <div class="mb-2 text-uppercase">Used car Showroom</div>
                   <div class="flex items-center count_box"><img class="mx-2 car_service" :src="require('@/assets/img/car_service.png')" alt="img"  /><div id="value5"> 255</div></div>
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
                   <div class="text-center font-medium mt-1 mb-1"><font-awesome-icon icon="rupee-sign"  size="1x" class="text-black mx-2" />{{car.price}}<span class="notice_mark">*</span></div>
                </div>
            </div>
        </div>
    </section>

    <div class="notice_card_sec text-center my-5">
        <div>
            <font-awesome-icon icon="star-of-life"  size="1x" class="star_icon mx-2" /> - <span style="padding-left:5px;"> Represents Ex-Showroom Price </span>
        </div>
    </div>

    <section class="book_form_section py-24" >
        <div class="flex book_form_box items-center justify-evenly">
            <div class="text-center font-bold text-white ">
                <button type="button" class="blog_post_button" @click="formModal = true">Book a Car</button>
             </div>
            <div class="text-center font-bold text-white ">
                <button type="button" class="blog_post_button" @click="formModal2 = true">Book a Service</button> 
            </div>
            <div class="text-center font-bold text-white ">
                <button type="button" class="blog_post_button" @click="formModal3 = true">Request a Test drive</button> 
            </div>
        </div>
    </section>

    <section class="pb-20 blog_post_section">
        <div class="container">
            <div class="blog_heading text-capitalize text-center py-16 font-bold text-3xl">LATEST NEWS <hr class="w-1/12 mx-auto bg-black h-0.5" style="background-color:black!important;"/></div>
            <div class="flex blog_card_body items-center justify-around">
                <div class="blog_card_box w-3/12 cursor-pointer">
                    <div class="photo_box">
                        <img :src="require('@/assets/img/cars/blog/blog4.webp')" alt="img" style="width:100%;"  />
                    </div>
                    <div class="content px-3 py-3">
                        <div class="text-center text-lg font-semibold my-4">Brand<hr class="w-2/12 mx-auto bg-black h-0.5" style="background-color:black!important;"/></div>
                        <p class="text-gray text-md my-4 text-center">I am i20, I am Born Magnetic</p>
                    </div>
                </div>
                <div class="blog_card_box w-3/12 cursor-pointer">
                    <div class="photo_box">
                        <img :src="require('@/assets/img/cars/blog/blog5.webp')" alt="img" style="width:100%;"  />
                    </div>
                    <div class="content px-3 py-3">
                        <div class="text-center text-lg font-semibold my-4">Innovation <hr class="w-2/12 mx-auto bg-black h-0.5" style="background-color:black!important;"/></div>
                        <p class="text-gray text-md my-4 text-center">Creating Seamless experience!</p>
                    </div>
                </div>
                <div class="blog_card_box w-3/12 cursor-pointer">
                    <div class="photo_box">
                        <img :src="require('@/assets/img/cars/blog/blog6.webp')" alt="img" style="width:100%;"  />
                    </div>
                    <div class="content px-3 py-3">
                        <div class="text-center text-lg font-semibold my-4">Community<hr class="w-2/12 mx-auto bg-black h-0.5" style="background-color:black!important;"/></div>
                        <p class="text-gray text-md my-4 text-center">Because We Care</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-20 text-center">
            <button type="button" class="blog_post_button">View All Posts</button>
        </div>
    </section>
    <section class=" fixed_bg_image2">
        <div class="block py-4">
            <div class="relative bg-position_overlay testimonial_haeding">
                <div class="text-center mb-2 text-lg  text-white sub_head">What Our Happy Clients say about us</div>
                <div class="text-center mb-4 text-3xl text-white font-bold testimonial_head">OUR TESTIMONIAL<hr class="h-1 bg-white mx-auto w-1/12 my-1" /></div>
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


    <!-- Upcoming Cars -->
    <!-- <section class="" >
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
    </section> -->

    <div class="back_to_top" @click="backToTop">
        <img :src="require('@/assets/img/back_to_top_car.png')" alt="img" style="width:100%;height:auto;"/>
    </div>
    <div class="whtsapp_btn">
        <img class="mob_whtsap_img" :src="require('@/assets/img/whatsapp_mob.png')" alt="img" />
    </div>
    <div class="fixed_form_sec">
        <div class="text-uppercase font-semibold text-white form1 form_div" @click="formModal = true"><img class="mx-2" :src="require('@/assets/img/vehicle.png')" alt="img"  /><div class="sub_form1 sub_form_div">Book a car</div></div>
        <div class="text-uppercase font-semibold text-white form2 form_div" @click="formModal3 = true"><img class="mx-2" :src="require('@/assets/img/book_drive.png')" alt="img" style="width:32px;"  /> <div class="sub_form2 sub_form_div">Book a test drive</div></div>
        <div class="text-uppercase font-semibold text-white form3 form_div" @click="formModal2 = true"><font-awesome-icon icon="tools"  size="2x" class="text-white spanner_icon mx-2" /> <div class="sub_form3 sub_form_div">Book a service</div></div>
        <div class="text-uppercase font-semibold text-white form4 form_div" @click="formModal4 = true"><img class="mx-2" :src="require('@/assets/img/book_service.png')" alt="img" style="width:32px;"  /> <div class="sub_form3 sub_form_div">Request a callback</div></div>
    </div>

    <section class="form_modal_box" v-if="formModal == true">
        <div class="w-4/12 card_body bg-white card mx-auto">
           <form class="pb-12 px-8">
               <div class="heading flex items-center justify-between pt-6 pb-2 font-semibold text-lg">Book a Car<font-awesome-icon icon="times"  size="1x" class="text-red-600 cursor-pointer" @click="formModal = false" /></div>
               <hr class="mb-8" style="height:1px;background:gray;opacity:0.3;" />
               <div class="mb-4">
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
                   <button  type="button" class="  text-white font-bold  mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
               </div>
           </form>
        </div>
    </section>

    <section class="form_modal_box" v-if="formModal2 == true">
        <div class="w-4/12 card_body bg-white card mx-auto">
           <form class="pb-12 px-8">
               <div class="heading flex items-center justify-between pt-6 pb-2 font-semibold text-lg">Book a Service<font-awesome-icon icon="times"  size="1x" class="text-red-600 cursor-pointer" @click="formModal2 = false" /></div>
               <hr class="mb-8" style="height:1px;background:gray;opacity:0.3;" />
               <div class="mb-4">
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
                   <button  type="button" class=" text-white font-bold  mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
               </div>
           </form>
        </div>
    </section>

    <section class="form_modal_box" v-if="formModal3 == true">
        <div class="w-4/12 card_body bg-white card mx-auto">
           <form class="pb-12 px-8">
               <div class="heading flex items-center justify-between pt-6 pb-2 font-semibold text-lg">Book a Test Drive<font-awesome-icon icon="times"  size="1x" class="text-red-600 cursor-pointer" @click="formModal3 = false" /></div>
               <hr class="mb-8" style="height:1px;background:gray;opacity:0.3;" />
               <div class="mb-4">
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
                   <button  type="button" class=" text-white font-bold  mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
               </div>
           </form>
        </div>
    </section>

    <section class="form_modal_box" v-if="formModal4 == true">
        <div class="w-4/12 card_body bg-white card mx-auto">
           <form class="pb-12 px-8">
               <div class="heading flex items-center justify-between pt-6 pb-2 font-semibold text-lg">Request a callback<font-awesome-icon icon="times"  size="1x" class="text-red-600 cursor-pointer" @click="formModal4 = false" /></div>
               <hr class="mb-8" style="height:1px;background:gray;opacity:0.3;" />
               <div class="mb-4">
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
                   <button  type="button" class=" text-white font-bold  mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
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
        formModal3:false,
        formModal4:false,
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
                name:'Hyundai Santro',
                image:'car8.jpg',
                category:'Hatchback',
                price:'4,67,490'
            },
            {
                id:3,
                name:'GRAND i10 NIOS',
                image:'car9.webp',
                category:'Hatchback',
                price:'8,14,900'
            },
            {
                id:4,
                name:'Hyundai i20 N Line',
                image:'car10.webp',
                category:'Hatchback',
                price:'7,31,900'
            },
            {
                id:5,
                name:'Hyundai Aura',
                image:'car2.webp',
                category:'Sedan',
                price:'22,30,000'
            },
            {
                id:6,
                name:'Hyundai Verna',
                image:'car15.jpg',
                category:'Sedan',
                price:'8,19,900'
            },
            {
                id:7,
                name:'Hyundai ELANTRA',
                image:'car11.webp',
                category:'Sedan',
                price:'10,68,000'
            },
            {
                id:8,
                name:'Hyundai Tuscon',
                image:'car18.webp',
                category:'SUV',
                price:'4,67,490'
            },
            {
                id:9,
                name:'Hyundai Venue',
                image:'car4.webp',
                category:'SUV',
                price:'8,16,500'
            },
            {
                id:11,
                name:'Hyundai Alcazar',
                image:'car17.jpg',
                category:'SUV',
                price:'16,53,300'
            },
            {
                id:12,
                name:'Hyundai CRETA',
                image:'car19.webp',
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
                name:'Hyundai Santro',
                image:'car8.jpg',
                category:'Hatchback',
                price:'4,67,490'
            },
            {
                id:3,
                name:'GRAND i10 NIOS',
                image:'car9.webp',
                category:'Hatchback',
                price:'8,14,900'
            },
            {
                id:4,
                name:'Hyundai i20 N Line',
                image:'car10.webp',
                category:'Hatchback',
                price:'7,31,900'
            },
            {
                id:5,
                name:'Hyundai Aura',
                image:'car2.webp',
                category:'Sedan',
                price:'22,30,000'
            },
            {
                id:6,
                name:'Hyundai Verna',
                image:'car15.jpg',
                category:'Sedan',
                price:'8,19,900'
            },
            {
                id:7,
                name:'Hyundai ELANTRA',
                image:'car11.webp',
                category:'Sedan',
                price:'10,68,000'
            },
            {
                id:8,
                name:'Hyundai Tuscon',
                image:'car18.webp',
                category:'SUV',
                price:'4,67,490'
            },
            {
                id:9,
                name:'Hyundai Venue',
                image:'car4.webp',
                category:'SUV',
                price:'8,16,500'
            },
            {
                id:11,
                name:'Hyundai Alcazar',
                image:'car17.jpg',
                category:'SUV',
                price:'16,53,300'
            },
            {
                id:12,
                name:'Hyundai CRETA',
                image:'car19.webp',
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
        const obj5 = document.getElementById("value5");

        setTimeout(()=>{
            this.animateValue(obj1, 0, 6, 2000);
            this.animateValue(obj2, 0, 255, 11000);
            this.animateValue(obj3, 0, 430, 11000);
            this.animateValue(obj4, 0, 340, 11000);
            this.animateValue(obj5, 0, 255, 11000);
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
        },
        categoryNames(){
           var category = ['ALL',...new Set(this.staticcars.map((item)=>{return item.category}))]
           this.carCategory = category;
           
        },
        handleScroll(){
            var btn = document.querySelector('.back_to_top')
            var fixed_form_sec = document.querySelector('.fixed_form_sec');
            
            if(pageYOffset > 260){
                btn.classList.add('show')
                btn.classList.remove('not_show');
            }else{
                btn.classList.remove('show')
                btn.classList.add('not_show');
            }

            if(pageYOffset > 340){
                fixed_form_sec.classList.add('show')
            }else{
                fixed_form_sec.classList.remove('show')
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
</style>