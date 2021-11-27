<template >
  <div class="home-page" style="overflow:hidden;">

    <!-- Banner Area -->
    <section class="relative" >
        <div class="row m-0 block">
            <div class="product_single_one_img">
                        <swiper class="swiper product-single-2-slider" :options="swiperOption">
                            <swiper-slide>
                                <div class="carousel_img_sec">
                                    <div class="banner_video_box" >
                                        <video class="desktopVideo" height="100%" width="100%" id="7" preload="auto" loop muted autoplay playsinline> 
                                            <source :src="require('@/assets/img/cars/videos/n-line.webm')" type="video/webm">
                                                    Your browser does not support HTML5 video.
                                        </video>
                                        <div class="know_more_btn_sec">
                                            <div>
                                                <nuxt-link class="knw_mre_btn" to="/cars/hyundai-i20-n-line">Know More</nuxt-link>
                                            </div>
                                            <div>
                                                <nuxt-link class="knw_mre_btn" to="/contact-us/test-drive"> Test Drive</nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide v-for="banner in $store.state.SliderBanners" :key="banner.id">
                                <div class="carousel_img_sec">
                                    <img :src="baseUrl + 'images/' + banner.slider_image" alt="img" style="width:100%;" />
                                    <div class="know_more_btn_sec">
                                        <div>
                                            <nuxt-link class="knw_mre_btn" :to="banner.slider_link">Know More</nuxt-link>
                                        </div>
                                        <div>
                                            <nuxt-link class="knw_mre_btn" :to="JSON.parse(banner.data_value).test_dive_link" v-if="banner.id !== 8"> Test Drive</nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                             <swiper-slide>
                                <div class="carousel_img_sec">
                                    <div class="banner_video_box" >
                                        <video class="desktopVideo" height="100%" width="100%" id="7" preload="auto" loop muted autoplay playsinline> 
                                            <source :src="require('@/assets/img/cars/videos/alcazar.webm')" type="video/webm">
                                                    Your browser does not support HTML5 video.
                                        </video>
                                        <div class="know_more_btn_sec">
                                            <div>
                                                <nuxt-link class="knw_mre_btn" to="/cars/hyundai-alcazar">Know More</nuxt-link>
                                            </div>
                                            <div>
                                                <nuxt-link class="knw_mre_btn" to="/contact-us/test-drive"> Test Drive</nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                        </swiper>
            </div>
        </div>
    </section>

    <section class="py-24"  >
        <div class="container">
            <div class="about_car_sec flex  justify-center items-center">
                <div class="left_sec w-1/2 mx-10 pt-6">
                    <h3 class="text-uppercase about_psm_head">Welcome to Peeyesyem hyundai <hr class="h-1 bg-black w-3/12 my-1" /></h3>
                    <div class="my-5 text-gray">
                        <ul class="about_psm">
                            <li>PEEYESYEM Hyundai is an authorized dealer for HYUNDAI Motors India Limited which started it’s operations in the year 2016 and is being administered by proficient management with an experience of 4 decades in the Automobile Industry.</li>
                            <li>We have experienced sales & Service team to cater every need of the customer.</li>
                            <li>Please do visit us and buy your dream car</li>
                        </ul>
                    </div>
                    <div class="my-3 ">
                        <nuxt-link class="read_mre_btn" to="/about">Read More</nuxt-link>
                    </div>
                </div>
                <div class="right_sec w-1/2 mx-10 flex items-center about_psm_cars">
                    <img :src="require('@/assets/img/cars/static_car_images/car2.webp')" style="margin-left:auto;margin-right:auto;" alt="img" />
                </div>
            </div>
        </div>
    </section>
    <section class="fixed_bg_image animated_counter flex items-center">
        <div class="container service_item_container">
            <div class="row  service_items service_item_box flex items-center justify-evenly">
                <div class="text-white text-center service_items service_item  font-bold text-xl">
                    <div class="mb-2 text-uppercase">Sales Showroom</div>
                   <div class="flex items-center count_box"><img class="mx-2" :src="require('@/assets/img/vehicle.png')" alt="img"  /><div id="value1">7</div></div>
                </div>
                <div class="text-white text-center service_items service_item font-bold text-xl">
                    <div class="mb-2 text-uppercase">Service workshops</div>
                   <div class="flex items-center count_box"><img class="mx-2 car_sold" :src="require('@/assets/img/car_sold.png')" alt="img"  /><div id="value2">8</div></div>
                </div>
                <div class="text-white text-center service_items service_item font-bold text-xl">
                    <div class="mb-2 text-uppercase">Used car Showroom</div>
                   <div class="flex items-center count_box"><img class="mx-2 car_service" :src="require('@/assets/img/car_service.png')" alt="img"  /><div id="value3">10</div></div>
                </div>
                <div class="text-white text-center service_items service_item font-bold text-xl">
                   <div class="mb-2">HAPPY CUSTOMERS</div>
                   <div class="flex items-center count_box"><img class="mx-2" :src="require('@/assets/img/userwhite.png')" alt="img"  /><div id="value4"> 1000+</div></div>
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
            <div class="car_box_item" v-for="car in $store.state.cars" :key="car.id">
                <nuxt-link :to="'/cars/'+ car.car_title.replace(/\s+/g, '-').toLowerCase()" class="text-center block car_image_box cursor-pointer" >
                    <img :src="baseUrl + 'images/' + car.car_image" alt="" >
                </nuxt-link>
                <div class="car_name">
                     <div class="text-center text-white py-1 font-medium mt-1 mb-1">{{car.car_title}}</div>
                </div>
                <div class="car_details" >
                    <div class="text-center font-medium mt-1 mb-1 cursor-pointer">{{car.car_title}}</div>
                   <div class="text-center font-medium mt-1 mb-1">Starting At <font-awesome-icon icon="rupee-sign"  size="1x" class="text-black mx-2" />{{car.car_price}}<span class="notice_mark">*</span></div>
                </div>
            </div>
            <div class="car_box_item flex items-center justify-center" style="background:#002c5f;">
                <nuxt-link class="cursor-pointer text-white know_more_cars" to="/all-cars" >Know More</nuxt-link>
            </div>
        </div>
    </section>

    <div class="notice_card_sec px-2 my-4">
        <div>
            <font-awesome-icon icon="star-of-life"  size="1x" class="star_icon mx-2" /> - <span style="padding-left:5px;"> Exshowroom Price </span>
        </div>
    </div>

    <section class="book_form_section py-8" >
        <div class="flex book_form_box ">
            <div class="text-center font-bold text-white btn_grps ">
                <button type="button" class="blog_post_button" @click="formModal = true">Book a Car</button>
             </div>
             <div class="text-center font-bold text-white btn_grps ">
                <button type="button" class="blog_post_button" @click="formModal2 = true">Book a Service</button>
             </div>
            <div class="text-center font-bold text-white btn_grps ">
                <nuxt-link class="blog_post_button" to="/contact-us/test-drive/">Request a Test Drive</nuxt-link>
            </div>
            <div class="text-center font-bold text-white btn_grps ">
                <nuxt-link class="blog_post_button" to="/sell-car">Exchange your car</nuxt-link>
            </div>
            <div class="text-center font-bold text-white btn_grps ">
                <nuxt-link class="blog_post_button" to="/buy-car">Buy a Used Car</nuxt-link>
            </div>
            <div class="text-center font-bold text-white btn_grps ">
                <nuxt-link class="blog_post_button" to="/">Monthly Offers</nuxt-link>
            </div>
        </div>
    </section>

    <section class="icoty_awards py-16">
        <div class="container">
             <div class="blog_heading text-capitalize text-center py-5 font-bold text-3xl">ICOTY AWARDS <hr class="w-1/12 mx-auto bg-black h-0.5" style="background-color:black!important;"/></div>
            <div class="card_box">
                <div class="list_detail">
                    <div><span>i10</span> - 2008</div>
                    <div><span>Grand i10</span> - 2014</div>
                    <div><span>Elite i20</span> - 2015</div>
                    <div><span>Creta</span> - 2016</div>
                    <div><span>Verna</span> - 2018</div>
                    <div><span>Venue</span> - 2020</div>
                    <div><span>The all-new-i20</span> - 2021</div>
                </div>
            </div>
        </div>
    </section>

    <section class="pb-20 blog_post_section">
        <div class="container">
            <div class="blog_heading text-capitalize text-center py-16 font-bold text-3xl">LATEST NEWS <hr class="w-1/12 mx-auto bg-black h-0.5" style="background-color:black!important;"/></div>
            <div class="flex blog_card_body  justify-around">
                <div class="blog_card_box w-3/12 cursor-pointer" v-for="item in $store.state.BlogsData" :key="item.id">
                    <div class="photo_box">
                        <img :src="baseUrl + 'images/' + item.blog_image" style="width:100%;" />
                    </div>
                    <div class="content px-3 py-3">
                        <div class="text-center text-lg font-semibold my-4">{{JSON.parse(item.data_value).blog_heading}}<hr class="w-2/12 mx-auto bg-black h-0.5" style="background-color:black!important;"/></div>
                        <p class="text-gray text-md my-4 text-center">{{item.title}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-20 text-center">
            <nuxt-link to="/blog" class="blog_post_button">View All Post</nuxt-link>
        </div>
    </section>
    <section class=" fixed_bg_image2">
        <div class="block py-4">
            <div class="relative bg-position_overlay testimonial_haeding">
                <div class="text-center mb-2 text-lg  text-white sub_head">What Our Happy Customers say about us</div>
                <div class="text-center mb-4 text-3xl text-white font-bold testimonial_head">OUR TESTIMONIAL<hr class="h-1 bg-white mx-auto w-1/12 my-1" /></div>
            </div>
            <div class=" relative bg-position_overlay">
                        <swiper class="swiper product-single-2-slider" :options="swiperOption">
                            <swiper-slide v-for="item in $store.state.TestimonialData" :key="item.id">
                                <div class="testimonial_content">
                                    <div class="text-center quote_lines text-md mb-10 text-white font-semibold flex items-start justify-center" >
                                        <img class="mx-1 quote_icon" :src="require('@/assets/img/quotewhite.png')" alt="img"  />
                                        <div class="mt-3">{{item.quote.substring(0,168)}}...</div>
                                    </div>
                                    <div class="flex items-center justify-center">
                                        <img class="mx-1" :src="require('@/assets/img/userwhite2.png')" alt="img"  />
                                        <div class="mx-1 font-semibold">{{item.authour}} | <span class="font-normal">{{item.authour_type}}</span></div>
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
                 autoplay: {
                    delay: 8000,
                    disableOnInteraction: true
                }
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

        if(this.$store.state.BlogsData.length == 0){
            this.GetBlog();
        }

        if(this.$store.state.TestimonialData.length == 0){
            this.GetTestimonialData();
        }

        if(this.$store.state.SliderBanners.length == 0){
            this.GetSliderBanners();
        }

        const obj1 = document.getElementById("value1");
        const obj2 = document.getElementById("value2");
        const obj3 = document.getElementById("value3");
        const obj4 = document.getElementById("value4");

        setTimeout(()=>{
            this.animateValue(obj1, 0, 7, 2000);
            this.animateValue(obj2, 0, 8, 2000);
            this.animateValue(obj3, 0, 10, 2000);
            this.animateValue(obj4, 0, 1000, 11000);
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
        GetBlog(){
            this.$axios
            .get(process.env.baseUrl + 'api/blog/index')
            .then((response) => {
            this.$store.state.BlogsData = response.data
            })
            .catch((error) => {
            console.log(error)
            })
        },
        sortedArray() {
            let sortedRecipes = this.$store.state.cars;
            
            sortedRecipes = sortedRecipes.sort((a,b) => {
                let fa = a.car_type.toLowerCase(), fb = b.car_type.toLowerCase();
                if (fa < fb) {
                    return -1
                }
                if (fa > fb) {
                    return 1
                }
                return 0
            })
            this.$store.state.cars = sortedRecipes;
        },
        GetCars(){
            this.loading = true;
            this.$axios.get(process.env.baseUrl + 'api/cars/all')
            .then((response) => {
            this.$store.state.cars = response.data.cars;
            this.$store.state.originalDataCars = response.data.cars;
            this.sortedArray();
            setTimeout(()=>{
              this.loading = false;
            },2000)
            this.categoryNames();
            })
            .catch((error) => {
            this.loading = false;
            console.log(error)
            })
        },
        GetTestimonialData(){
            this.$axios.get(process.env.baseUrl + 'api/testimonial/index')
            .then((response) => {
            this.$store.state.TestimonialData = response.data;
            })
            .catch((error) => {
            console.log(error)
            })
        },
        GetSliderBanners(){
            this.$axios.get(process.env.baseUrl + 'api/slider/index')
            .then(res=>{
                this.$store.state.SliderBanners = res.data;
            }).catch(err=>{
                console.log(err);
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
                if(end == 1000){
                  obj.innerHTML = Math.floor(progress * (end - start) + start) + ' +';  
                }
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
@media only screen and (min-width: 760px) and (max-width: 960px){
    .service_item_box div{
        margin: 7px 20px!important;
    }
    .about_car_sec .left_sec {
        margin: 0 20px!important;
    }
    .cars_product_section .car_box_item{
        width: 50%!important;
    }
    .book_form_section .book_form_box{
        flex-wrap: wrap;
    }
    .book_form_box .btn_grps{
        min-width: 231px!important;
        margin: 30px!important;
    }
    .btn_grps .blog_post_button{
        display: block;
        width: 100%;
    }
    .icoty_awards .card_box{
        width: 41%!important;
    }
    .blog_card_body{
        align-items: flex-start!important;
        flex-wrap: wrap;
    }
    .blog_card_body .blog_card_box {
        width: 45%;
        margin: 20px 15px!important;
    }
    .testimonial_content{
        width: 70%!important;
        padding: 30px 10px!important;
    }
    .carousel_img_sec .know_more_btn_sec{
        bottom: 17%!important;
        left: 8%!important;
    }
    .know_more_btn_sec .knw_mre_btn{
        min-width: 170px!important;
        padding: 6px 23px!important;
        font-size: 16px!important;
    }
    .banner_video_box{
        height: 297px!important;
    }
}
@media only screen and (min-width: 1367px) and (max-width: 1600px){
    .banner_video_box{
        height: 589.15px!important;
    }
}
@media only screen and (min-width: 961px) and (max-width: 1030px){
    .banner_video_box{
        height: 396.38px!important;
    }
    .cars_product_section .car_box_item{
        width: 33.33%!important;
    }
    .book_form_section .book_form_box{
        flex-wrap: wrap;
    }
    .book_form_box .btn_grps{
        min-width: 231px!important;
        margin: 30px!important;
    }
    .btn_grps .blog_post_button{
        display: block;
        width: 100%;
    }
    .icoty_awards .card_box{
        width: 31%!important;
    }
    .blog_card_body{
        align-items: revert!important;
    }
    .blog_card_body .blog_card_box {
        width: 35%;
        margin: 15px!important;
    }
    .testimonial_content{
        width: 60%!important;
        padding: 30px 10px!important;
    }
    .carousel_img_sec .know_more_btn_sec{
        bottom: 17%!important;
        left: 9%!important;
    }
    .know_more_btn_sec .knw_mre_btn{
        min-width: 200px!important;
        padding: 9px 23px!important;
    }
}
.banner_video_box{
    height: 736.64px;
}
.icoty_awards .list_detail span{
    display: inline-block;
    min-width: 148px;
}
.icoty_awards .card_box{
    box-shadow: 0 2px 10px 4px rgb(0 0 0/15%);
    padding: 30px 20px;
    width: 21%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
}
.icoty_awards .list_detail{
    font-size: 18px;
    font-weight: 500;
}
.icoty_awards .list_detail div{
     margin: 5px 0;
     padding-left: 10px;
}
.book_form_box{
    display: flex;
    justify-content: center;
    align-items: center;
}
.book_form_box .btn_grps{
    margin: 0 20px;
}
.about_car_sec .about_psm li{
    margin: 13px 0;
    list-style-type: disc;
    margin-left: 17px;
}

@media only screen and (min-width: 1270px) and (max-width: 1366px){
    .product_single_one_img img{
        height: 476px;
        object-fit: cover;
        object-position: top;
    }
    .know_more_btn_sec .knw_mre_btn{
        padding: 6px 15px!important;
        font-size: 12px!important;
        min-width: 160px!important;
    }
    .icoty_awards .list_detail{
        font-size: 16px!important;
    }
    .book_form_box .btn_grps{
        margin: 0 18px!important;
    }
    .blog_post_button{
        font-size: 13px!important;
        padding: 6px 20px!important;
    }
    .banner_video_box{
        height: 476px!important;
    }
}
.blog_post_button{
    font-weight: normal;
}

.carousel_img_sec{
    position: relative;
}
.about_car_sec .read_mre_btn{
    background: #002c5f;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 8px 25px;
    font-size: 18px;
    border-radius: 4px;
    margin: 5px 0;
    display: inline-block;
    text-align: center;
}
.carousel_img_sec .carousel_overlay{
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 200;
    top: 0;
    left: 0;
}
.carousel_img_sec .know_more_btn_sec{
    position: absolute;
    bottom: 20%;
    left: 13%;
    z-index: 300;
}
.know_more_btn_sec .knw_mre_btn{
    background: #002c5f;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 12px 25px;
    font-size: 18px;
    border-radius: 4px;
    margin: 7px 0;
    display: block;
    text-align: center;
    min-width: 217px;
    box-shadow: 0 2px 10px 4px rgb(0 0 0/15%);
}
.know_more_btn_sec .knw_mre_btn:hover{
    color: white;
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
    .banner_video_box{
        height: 139px!important;
    }
    .book_form_box{
        flex-wrap: wrap;
    }
    .book_form_box .btn_grps{
        margin: 20px!important;
    }
    .book_form_box .btn_grps a{
        display: inline-block;
    }
    .carousel_img_sec .know_more_btn_sec{
        display: none;
    }
    .icoty_awards .card_box{
        width: 91%!important;
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