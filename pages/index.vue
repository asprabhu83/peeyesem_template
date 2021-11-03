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
                    <div class=" category_item font-semibold text-lg cursor-pointer"  v-for="(item, index) in this.$store.state.carCategory" :class="categoryIndex == index ? 'active': ''" @click="categoryIndex = index, filterItems(item)" :key="index">
                        {{item}}
                    </div>
                </div>
            </div>
        </div>
        <div class="card_box  flex flex-wrap mt-16 mx-auto" id="isotope">
            <div class="car_box_item" v-for="car in this.$store.state.cars" :key="car.id">
                <nuxt-link :to="'/cars/'+ car.car_title.replace(/\s+/g, '-').toLowerCase()" class="text-center block car_image_box cursor-pointer" >
                    <img :src="baseUrl + 'images/' + car.car_image" alt="" >
                </nuxt-link>
                <div class="car_name">
                     <div class="text-center text-white py-1 font-medium mt-1 mb-1">{{car.car_title}}</div>
                </div>
                <div class="car_details" >
                    <div class="text-center font-medium mt-1 mb-1 cursor-pointer">{{car.car_title}}</div>
                   <div class="text-center font-medium mt-1 mb-1"><font-awesome-icon icon="rupee-sign"  size="1x" class="text-black mx-2" />{{car.car_price}}<span class="notice_mark">*</span></div>
                </div>
            </div>
            <div class="car_box_item flex items-center justify-center" style="background:#002c5f;">
                <nuxt-link class="cursor-pointer text-white" to="/all-cars" style="min-height:unset;" >Know More</nuxt-link>
            </div>
        </div>
    </section>

    <div class="notice_card_sec px-2 my-4">
        <div>
            <font-awesome-icon icon="star-of-life"  size="1x" class="star_icon mx-2" /> - <span style="padding-left:5px;"> Represents Ex-Showroom Price </span>
        </div>
    </div>

    <section class="book_form_section py-8" >
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
            <div class=" relative bg-position_overlay">
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
    <Modal1 @closeModal="closeModal" v-if="formModal == true" />
    <Modal2 @closeModal="closeModal" v-if="formModal2 == true" />
    <Modal3 @closeModal="closeModal" v-if="formModal3 == true" />

    <Loading v-if="loading == true" />

    

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
import Modal1 from '../components/modals/formModal1.vue'
import Modal2 from '../components/modals/formModal2.vue'
import Modal3 from '../components/modals/formModal3.vue'
import Loading from '../components/Loading.vue'
export default {
    name: 'Home',
    components: {
        ProductBox1,
        Timer,
        InstagramArea,
        BlogItem1,
        isotope,
        Modal1,
        Modal2,
        Modal3,
        Loading
    },

    data() {
      return { 
        title: 'Home',
        options: {
            sortBy : "category"
        },
        formModal:false,
        formModal2:false,
        formModal3:false,
        loading:false,

        products: [],
        category: [],
        cartproduct: {},
        baseUrl:process.env.baseUrl, 

        compareproduct: {},

        dismissCountDown: 0,

        cars:this.$store.state.cars,
        originalDataCars:this.$store.state.cars,

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
        if(this.$store.state.cars.length == 0){
            this.GetCars();
        }else{
            this.filterItems('ALL');
        }

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
    methods: {
        closeModal(value){
            if(value == 'modal1'){
                this.formModal = false;
            }
            if(value == 'modal2'){
                this.formModal2 = false;
            }
            if(value == 'modal3'){
                this.formModal3 = false;
            }
        },
        GetCars(){
            this.loading = true;
            axios.get(process.env.baseUrl + 'api/cars/index')
            .then((response) => {
            this.$store.state.cars = response.data.cars;
            this.$store.state.originalDataCars = response.data.cars;
            this.loading = false;
            this.categoryNames();
            })
            .catch((error) => {
            this.loading = false;
            console.log(error)
            })
        },
        filterItems(name){
          var newItems =  this.$store.state.originalDataCars.filter((item)=> item.car_type == name);
          newItems.reverse()
          this.$store.state.cars = newItems;
          if(name == 'ALL'){
              this.$store.state.cars = this.$store.state.originalDataCars
          }
        },
        categoryNames(){
           var items =  this.$store.state.cars.map((item)=>{return item.car_type});
           items.reverse()
           var category = ['ALL',...new Set(items)]
           this.$store.state.carCategory = category;
           
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

@media only screen and (min-width: 1270px) and (max-width: 1366px){
    .product_single_one_img img{
        height: 430px;
        object-fit: cover;
    }
}
.btn_box{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16.6%;
}
.btn_box a{
    background: #002c5f;
    color: white;
    padding: 5px 20px;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 4px;
}
.btn_box a:hover{
    color: white;
}
@media only screen and (min-width:300px) and (max-width:600px){
    .btn_box{
        width: 100%;
        padding: 40px 0;
    }
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
</style>