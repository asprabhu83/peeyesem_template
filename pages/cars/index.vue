<template>
  <div class="single_page_car_sec">
      <div class="car_poster_sec">
          <img :src="car.baseUrl + 'images/' + car.poster_image"  />
          <div class="car_poster_details" v-if="car.name == 'Hyundai Santro'">
              <div class="title1 text-uppercase">Santro</div>
              <div class="title2">India's Favourite Family Car</div>
          </div>
      </div>
      <div class="mt-3 mb-16">
          <div class="main_tab_sec">
              <nuxt-link to="/contact-us/test-drive">Test drive</nuxt-link>
              <nuxt-link to="/price-tables">Prices</nuxt-link>
              <button type="button" @click="formModal = true">Book a Car</button>
              <a :href="e_brochure_link" :download="e_brochure_link"><font-awesome-icon icon="download"  size="1x" class="text-white  mr-2" />e-Brochure</a>
          </div>
      </div>
      <section class="car_title_sticky_header">
          <div class="car_title_sec my-5">
            <div class="car_title">
                {{car.name}}
                <hr/>
            </div>
            <div class="car_details_tab">
                <div class="tab_item_box" v-for="(tab, index) in car_details_tab" :key="index">
                    <div class="tab_item cursor-pointer" :class="car_tab_index === index ? 'active' : ''" @click="car_tab_index = index, smoothScroll(index)">{{tab}}</div>
                </div>
            </div>
        </div>
      </section>
      <div class="car_wrapper_sec">
          <div class="car_overview_sec step0 my-24">
              <div class="title">{{car.name}} Overview <hr /></div>
              <div class="description">
                  <div class="paragraph">
                    <p>{{car.description}}</p>
                  </div>
                  <div class="img_sec">
                    <img :src="car.baseUrl + 'images/' + car.overview_image"  />
                  </div>
              </div>
              <div class="price_details my-16">
                  <div class="price_item">
                      <div class="price_title"><font-awesome-icon icon="rupee-sign"  size="1x" class="text-black mr-2" />Price</div>
                      <div class="detail">
                          {{car.price}}*
                      </div>
                  </div>
                  <div class="price_item">
                      <div class="price_title"><font-awesome-icon icon="tachometer-alt"  size="1x" class="text-black mr-2" />Power</div>
                      <div class="detail">
                          {{car.power}}<br/>
                      </div>
                  </div>
                  <div class="price_item">
                      <div class="price_title"><font-awesome-icon icon="cogs"  size="1x" class="text-black mr-2" />Transmission</div>
                      <div class="detail">
                          {{car.transmission}}
                      </div>
                  </div>
                  <div class="price_item">
                      <div class="price_title"><font-awesome-icon icon="gas-pump"  size="1x" class="text-black mr-2" />Mileage</div>
                      <div class="detail">
                          {{car.mileage}}
                      </div>
                  </div>
              </div>
          </div>
          <div class="car_highlights_sec step1 my-24">
              <div class="title">{{car.name}} Highlights <hr /></div>
              <div class="highlight_items">
                  <div class="item" v-for="item in car.highlights" :key="item.id">
                      <div class="item_image">
                          <img :src="car.baseUrl + 'images/' + item.post_image" alt="highlights_image" />
                      </div>
                      <div class="content">
                          <div class="item_title">
                            {{item.post_title}}
                        </div>
                        <div class="item_desc">
                            {{item.post_description}}
                        </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="car_gallery_sec step2 my-24">
              <div class="title">{{car.name}} Gallery <hr /></div>
              <div class="car_gallery_item">
                  <swiper class="swiper product-single-2-slider" :options="swiperOption">
                            <swiper-slide v-for="item in car.gallery" :key="item.id">
                               <img :src="car.baseUrl + 'images/' + item.gallery_image" alt="img" style="width:100%;" />
                            </swiper-slide>
                            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                    </swiper>
              </div>
          </div>
          <div class="car_video_sec step3 my-24">
              <div class="title">{{car.name}} Video <hr /></div>
              <div class="car_video_item">
                  <iframe width="1239" height="450"  :src="'https://www.youtube.com/embed/' + car.video_link + '/?rel=0'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
          </div>
          <div class="car_colour_sec step4 my-24">
              <div class="title">{{car.name}} Colours <hr /></div>
              <div class="car_colour_image_box"> 
                  <img v-for="(item,index) in car.car_colours" :key="item.id" class="car_colour_img" :class="car_clr_img_index == index ? 'active' : ''" :src="car.baseUrl + 'images/' + item.color_image" alt="img" />
              </div>
              <div class="colour_item_title car_colour_img" v-for="(car,index) in car.car_colours" :key="index" :class="car_clr_img_index == index ? 'active' : ''">{{car.color_title}}</div>
              <div class="car_colour_item_box" >
                  <div class="colour_item" v-for="(clr,index) in car.car_colours" :key="index" @click="car_clr_img_index = index" :class="car_clr_img_index == index ? 'active' : ''" >
                      <div class="car_clr" :style="{background:clr.color_code}"></div>
                      <div class="car_clr" :style="{background:clr.second_color_code}"></div>
                  </div>
              </div>
          </div>
          <div class="car_specs_tab step5 my-24">
              <div class="car_type_main_title">{{car.name}} Specs <hr /></div>
              <div class="car_spec_item_box my-5">
                  <div class="car_spec_tab_box">
                      <div class="tab_item" v-for="(item,index) in car.car_spec_tab" :class="car_spec_tab_index == index ? 'active' : ''" @click="car_spec_tab_index = index, filterCarSpecs(item)" :key="index">{{item}}</div>
                  </div>
                   <div class="w-8/12 spec_table_sec mx-auto mt-16">
                            <div class="flex flex-col">
                                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div
                                            class="
                                            shadow-md
                                            overflow-hidden
                                            border-b border-gray-200
                                            sm:rounded-lg
                                            "
                                        >
                                            <table class="min-w-full car_spec_table divide-y divide-gray-200">
                                            <thead class="">
                                                <tr>
                                                <th
                                                    scope="col"
                                                    class="
                                                    px-6
                                                    py-3
                                                    text-left text-xs
                                                    font-medium
                                                    text-gray-500
                                                    uppercase
                                                    tracking-wider
                                                    "
                                                >
                                                    Model
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="
                                                    px-6
                                                    py-3
                                                    text-left text-xs
                                                    font-medium
                                                    text-gray-500
                                                    uppercase
                                                    tracking-wider
                                                    "
                                                >
                                                    Petrol
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="
                                                    px-6
                                                    py-3
                                                    text-left text-xs
                                                    font-medium
                                                    text-gray-500
                                                    uppercase
                                                    tracking-wider
                                                    "
                                                >
                                                    Diesel
                                                </th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200">
                                                <tr v-for="spec in car.car_specs" :key="spec.id">
                                                <td class="px-4 py-3 " >
                                                    <span
                                                    class="
                                                        inline-flex
                                                        text-xs
                                                        leading-5
                                                        font-semibold
                                                        text-black
                                                    "
                                                    >
                                                    {{spec.spec_model}}
                                                    </span>
                                                </td>
                                                <td class="px-4 py-3 " >
                                                    <span
                                                    class="
                                                        inline-flex
                                                        text-xs
                                                        leading-5
                                                        font-semibold
                                                        text-black
                                                    "
                                                    >
                                                    {{spec.spec_petrol}}
                                                    </span>
                                                </td>

                                                <td class="px-4 py-3 " >
                                                    <span
                                                    class="
                                                        inline-flex
                                                        text-xs
                                                        leading-5
                                                        font-semibold
                                                        text-black
                                                    "
                                                    >
                                                    {{spec.spec_diesel}}
                                                    </span>
                                                </td>
                                                </tr>

                                                <!-- More people... -->
                                            </tbody>
                                            </table>
                                       </div>
                                   </div>
                               </div>
                           </div>
                  </div>
             </div>
         </div>
         <div class="car_features_tab step6 my-24">
              <div class="car_type_main_title">{{car.name}} Features <hr /></div>
              <div class="car_spec_item_box my-5">
                  <div class="car_feature_variant_box my-14">
                      <div class="select_box w-3/12 mx-auto">
                          <div class="variant_model_label">choose your variant</div>
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
                                variant_box_select
                                "
                                id="variant"
                                v-model="VariantFeature"
                                @change="VariantChange"
                            >
                            <option class="text-xl"  :value="model.id" v-for="(model,index) in car.car_feature_variants"
                                :key="index" >{{model.feature_type}}</option>
                          </select>
                          <font-awesome-icon icon="chevron-down"  size="1x" class="text-black variant_model_icon mr-2" />
                      </div>
                  </div>
                  <div class="car_spec_tab_box">
                      <div class="tab_item" v-for="(item,index) in car.car_features_tab" :class="car_feature_tab_index == index ? 'active' : ''" v-show="item !== 'None'" @click="car_feature_tab_index = index, filterFeatures(item)" :key="index">{{item}}</div>
                  </div>
                   <div class="w-1/2 spec_table_sec mx-auto mt-16">
                            <div class="flex flex-col">
                                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div
                                            class="
                                            shadow-md
                                            overflow-hidden
                                            border-b border-gray-200
                                            sm:rounded-lg
                                            "
                                        >
                                            <table class="min-w-full car_spec_table divide-y divide-gray-200">
                                            <thead class="">
                                                <tr>
                                                <th
                                                    scope="col"
                                                    class="
                                                    px-6
                                                    py-3
                                                    text-left text-xs
                                                    font-medium
                                                    text-gray-500
                                                    uppercase
                                                    tracking-wider
                                                    "
                                                >
                                                    Feature
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="
                                                    px-6
                                                    py-3
                                                    text-left text-xs
                                                    font-medium
                                                    text-gray-500
                                                    uppercase
                                                    tracking-wider
                                                    "
                                                >
                                                    Value
                                                </th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200">
                                                <tr v-for="feature in car.car_features" :key="feature.id">
                                                <td class="px-4 py-3 " >
                                                    <span
                                                    class="
                                                        inline-flex
                                                        text-xs
                                                        leading-5
                                                        font-semibold
                                                        text-black
                                                    "
                                                    >
                                                    {{feature.variant_feature_type}}
                                                    </span>
                                                </td>
                                                <td class="px-4 py-3 " >
                                                    <span
                                                    class="
                                                        inline-flex
                                                        text-xs
                                                        leading-5
                                                        font-semibold
                                                        text-black
                                                    "
                                                    >
                                                    {{feature.variant_feature_value}}
                                                    </span>
                                                </td>
                                                </tr>

                                                <!-- More people... -->
                                            </tbody>
                                            </table>
                                       </div>
                                   </div>
                               </div>
                           </div>
                  </div>
             </div>
         </div>
         <div class="py-24" >
             <div class="car_type_main_title">Enquire Now <hr /></div>
             <div class="form_component">
                 <EnquireForm />
             </div>
         </div>
         <div class="my-24" style="display:none;" >
             <div class="car_type_main_title">{{car.name}} Comparison <hr /></div>
             <div class="comp_box my-5">
                 <div class="flex justify-evenly items-center">
                     <div class="select_box w-3/12 mx-auto">
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
                                id="variantName1"
                                v-model="compareData.VariantFeatureCompare1"
                                @change="VariantCompareChange"
                            >
                            <option class="text-xl"  :value="model.id" v-for="(model,index) in car.car_feature_variants"
                                :key="index" >{{model.feature_type}}</option>
                          </select>
                      </div>
                      <div class="select_box w-3/12 mx-auto">
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
                                id="variantName2"
                                v-model="compareData.VariantFeatureCompare2"
                                @change="VariantCompareChange"
                            >
                            <option class="text-xl"  :value="model.id" v-for="(model,index) in car.car_feature_variants"
                                :key="index" >{{model.feature_type}}</option>
                          </select>
                      </div>
                 </div>
                 <div class="car_spec_tab_box my-5">
                      <div class="tab_item" v-for="(item,index) in compareData.compareTab" :class="compareData.TabIndex == index ? 'active' : ''"  @click="compareData.TabIndex = index, filterFeatures(item)" :key="index">{{item}}</div>
                  </div>
                  <div class="w-1/2 spec_table_sec mx-auto mt-16">
                            <div class="flex flex-col">
                                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div
                                            class="
                                            shadow-md
                                            overflow-hidden
                                            border-b border-gray-200
                                            sm:rounded-lg
                                            "
                                        >
                                            <table class="min-w-full car_spec_table divide-y divide-gray-200">
                                            <thead class="">
                                                <tr>
                                                <th
                                                    scope="col"
                                                    class="
                                                    px-6
                                                    py-3
                                                    text-left text-xs
                                                    font-medium
                                                    text-gray-500
                                                    uppercase
                                                    tracking-wider
                                                    "
                                                >
                                                    Feature
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="
                                                    px-6
                                                    py-3
                                                    text-left text-xs
                                                    font-medium
                                                    text-gray-500
                                                    uppercase
                                                    tracking-wider
                                                    "
                                                >
                                                    {{compareData.VariantName1}}
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="
                                                    px-6
                                                    py-3
                                                    text-left text-xs
                                                    font-medium
                                                    text-gray-500
                                                    uppercase
                                                    tracking-wider
                                                    "
                                                >
                                                    {{compareData.VariantName2}}
                                                </th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200">
                                                <tr v-for="feature in compareData.compareFeatures" :key="feature.id">
                                                <td class="px-4 py-3 " >
                                                    <span
                                                    class="
                                                        inline-flex
                                                        text-xs
                                                        leading-5
                                                        font-semibold
                                                        text-black
                                                    "
                                                    >
                                                    {{feature.variant_feature_type}}
                                                    </span>
                                                </td>
                                                <td class="px-4 py-3 " >
                                                    <span
                                                    class="
                                                        inline-flex
                                                        text-xs
                                                        leading-5
                                                        font-semibold
                                                        text-black
                                                    "
                                                    >
                                                    {{feature.variant_feature_value}}
                                                    </span>
                                                </td>
                                                </tr>

                                                <!-- More people... -->
                                            </tbody>
                                            </table>
                                       </div>
                                   </div>
                               </div>
                           </div>
                  </div>
             </div>
         </div>
    </div> 
    <Modal1 @closeModal="closeModal" v-if="formModal == true" />
    <Loading v-if="loading == true" />
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import Loading from '../../components/Loading.vue'
import Modal1 from '../../components/modals/formModal1.vue'
import EnquireForm from '../../components/forms/Enquireform.vue'
export default {
    components:{
        Loading,
        Modal1,
        EnquireForm
    },
    data(){
        return{
           singleCar:[],
           loading:false,
           DataBaseSingleCar:[],
           formModal:false,
           e_brochure_link:'',
           car:{
              baseUrl:process.env.baseUrl, 
              name:'',
              price:'',
              price2:'',
              image:'',
              poster_image:'',
              overview_image:'',
              description:'',
              power:'',
              power2:'',
              transmission:'',
              transmission2:'',
              mileage:'',
              mileage2:'',
              highlights:[],
              gallery:[],
              video_link:'',
              car_colours:[],
              car_specs:[],
              car_specs_original:[],
              car_spec_tab:null,
              car_features:[],
              car_features_original:[],
              car_features_tab:null,
              car_feature_variants:[]
           },
           compareData:{
               compareTab:[],
               VariantFeatureCompare1:1,
               VariantFeatureCompare2:1,
               VariantName1:'',
               VariantName2:'',
               TabIndex:0,
               compareFeatures:[],
               FeatureType:[]
           },
           car_details_tab:[
               'Overview',
               'Highlights',
               'Gallery',
               'Videos',
               'Colors',
               'Specs',
               'Features'
           ],
           VariantFeature:1,
           car_tab_index:0,
           car_clr_img_index:0,
           car_spec_tab_index:0,
           car_feature_tab_index:0,
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
            }
        }
    },
    beforeMount(){
        this.GetSingleCarData();
    },
    head(){
     return {
        title: this.car.name,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Home page description'
          }
        ]
      }
    },
    mounted(){
        window.scrollTo(0, 0)
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods:{
        // GetCars(){
        //     axios.get(process.env.baseUrl + 'api/cars/index')
        //     .then((response) => {
        //       this.cars = response.data.cars
        //       this.SingleCar()
        //     })
        //     .catch((error) => {
        //     console.log(error)
        //     })
        // },
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
        GetSingleCarData(){
            var car = this.$route.params.model;
            var id;
            if(car == 'hyundai-santro'){
                id = 1;
                this.e_brochure_link = '/SANTRO_Hatchback_brochure (1).pdf';
            }
            if(car == 'hyundai-all-new-i20'){
                id = 7;
                this.e_brochure_link = '/i20-Hatchback-2020.pdf'
            }
            if(car == 'hyundai-grand-i10-nios'){
                id = 14;
                this.e_brochure_link = '/Grand Nios_Brochure-16PP_A4_2021 Web.pdf';
            }
            if(car == 'hyundai-aura'){
                id = 2;
                this.e_brochure_link = '/Aura_Brochure-16PP_A4_Web_22 oct.pdf';
            }
            if(car == 'hyundai-verna'){
                id = 13;
                this.e_brochure_link = '/Verna_Brochure-16PP_A4_Web_22 oct.pdf';
            }
            if(car == 'hyundai-all-new-elantra'){
                id = 11;
                this.e_brochure_link = '/Hyundai-Elantra-Brochure.pdf';
            }
            if(car == 'hyundai-venue'){
                id = 12;
                this.e_brochure_link = '/Venue_Brochure-16PP_2021_Web.pdf';
            }
            if(car == 'hyundai-creta'){
                id = 16;
                this.e_brochure_link = '/Creta_Brochure-16PP_A4_2021.pdf';
            }
            if(car == 'hyundai-alcazar'){
                id = 15;
                this.e_brochure_link = '/Alcazar_Brochure-16PP_A4_2021_Web.pdf';
            }
            if(car == 'hyundai-all-new-tucson'){
                id = 10;
                this.e_brochure_link = '/Tucson_suv_brochure.pdf';
            }
            if(car == 'hyundai-i20-n-line'){
                id = 20;
                this.e_brochure_link = '/N-Line.pdf'
            }
            this.loading = true;
            axios
                .get(process.env.baseUrl + 'api/show/car/' + id)
                .then((response) => {
                    this.DataBaseSingleCar = response.data;
                    this.FilterDatabasedata();
                    this.loading = false;
                })
                .catch((error) => {
                    this.loading = false;
                console.log(error)
                })
        },
        smoothScroll(index){
            var element = document.querySelector('.step' + index);
            var Headerposition = this.handleScroll();
            var position;
            if(Headerposition > 642){
                position = element.offsetTop - 200;
            }else{
                position = element.offsetTop - 380;
            }
            window.scrollTo({top: position, behavior: 'smooth'});
        },
        handleScroll(){
            var car_header = document.querySelector('.car_title_sticky_header');
            if(pageYOffset > 640){
                car_header.classList.add('sticky');
            }else{
                car_header.classList.remove('sticky');
            }
            // if(pageYOffset < 1045){
            //     this.car_tab_index = 0
            // }
            // if(pageYOffset > 1050){
            //     this.car_tab_index = 1
            // }
            //  if(pageYOffset > 2918){
            //     this.car_tab_index = 2
            // }
            // if(pageYOffset > 4058){
            //     this.car_tab_index = 3
            // }
            // if(this.$route.query.id == 4){
            //     if(pageYOffset > 4606){
            //         this.car_tab_index = 4
            //     }
            // }else{
            //     if(pageYOffset > 4560){
            //         this.car_tab_index = 4
            //     }
            // }
            // if(pageYOffset > 5433){
            //     this.car_tab_index = 5
            // }
            // if(pageYOffset > 6218){
            //     this.car_tab_index = 6
            // }
            return pageYOffset;
        },
        filterCompareCategories(){
            var category = [...new Set(this.car.car_features.map((item)=>{return item.variant_category}))];
            this.compareData.compareTab = category;
            return category;
        },
        VariantCompareChange(e){
            if(e.target.id == 'variantName1'){
                this.compareData.VariantName1 = this.car.car_feature_variants[e.target.selectedIndex].feature_type;
            }
            if(e.target.id == 'variantName2'){
                this.compareData.VariantName2 = this.car.car_feature_variants[e.target.selectedIndex].feature_type;
            }
            //change category for comparison Data
            var variantId1 =  this.compareData.VariantFeatureCompare1;
            var variantId2 = this.compareData.VariantFeatureCompare2;
            var compareItem = this.car.car_features_original.filter((item)=> item.features_model_id == variantId1 || item.features_model_id == variantId2);
            var Editcategory = [...new Set(compareItem.map((item)=>{return item.variant_category}))];
            this.compareData.compareTab = Editcategory;
            this.compareData.TabIndex = 0;
            //***************************** */
        },
        filterCompareFeatures(cat){
            this.compareData.VariantName1 = this.car.car_feature_variants[0].feature_type;
            this.compareData.VariantName2 = this.car.car_feature_variants[1].feature_type;
            var variantId1 =  this.compareData.VariantFeatureCompare1;
            var variantId2 = this.compareData.VariantFeatureCompare2;
            var newItem = this.car.car_features_original.filter((item)=>{return item.variant_category == cat && (item.features_model_id == variantId1 || item.features_model_id == variantId2)})
            this.compareData.compareFeatures = newItem;
            var uniqueFeature = [...new Set(newItem.map((item)=>{return item.variant_feature_type}))];
            this.compareData.FeatureType = uniqueFeature;
        },
        VariantChange(e){
            var variantId = e.target.value;
            // change category Tab based on Varaint change
            var othersItem = this.car.car_features_original.filter((item)=> item.features_model_id == variantId);
            var Editcategory = [...new Set(othersItem.map((item)=>{return item.variant_category}))];
            this.car.car_features_tab = Editcategory;
            //******************* */
            this.car_feature_tab_index = 0;
            var catIndex = this.car_feature_tab_index;
            var catName = this.car.car_features_tab[catIndex]
            var newItem = this.car.car_features_original.filter((item)=> item.features_model_id == variantId && item.variant_category == catName )
            this.car.car_features = newItem;
        },
        filterCarSpecCategories(){
           var category = [...new Set(this.car.car_specs.map((item)=>{return item.spec_type}))];
           this.car.car_spec_tab = category;
           return category;
        },
        filterCarSpecs(cat){
           var newItem = this.car.car_specs_original.filter((item)=>{return item.spec_type == cat})
           this.car.car_specs = newItem;
        },
        filterFeatureCategories(variantId){
            var othersItem = this.car.car_features_original.filter((item)=> item.features_model_id == variantId);
            var category = [...new Set(othersItem.map((item)=>{return item.variant_category}))];
            this.car.car_features_tab = category;
            return category;
        },
        filterFeatures(cat){
            var variantId = this.VariantFeature;
            var newItem = this.car.car_features_original.filter((item)=>{return item.variant_category == cat && item.features_model_id == variantId})
            this.car.car_features = newItem;
        },
        FilterDatabasedata(){
            const {car,overview,overview_details,highlight,highlight_post,gallery,videos,colors,specs,feature_variant,feature_model,varient_feature,price} = this.DataBaseSingleCar;
            const {car_title,poster_image,car_image} = car;
            const {car_description,overview_image} = overview;
            const [price_details] = overview_details;
            const {car_power,car_transmission,car_mileage} = price_details;
            const [video] = videos;
            const {youtube_link} = video;
            const {car_price} = price

            this.car.name=car_title;
            this.car.price=car_price;
            this.car.poster_image=poster_image;
            this.car.image=car_image;
            this.car.overview_image=overview_image;
            this.car.description=car_description;
            this.car.power=car_power;
            this.car.transmission=car_transmission;
            this.car.mileage=car_mileage;
            this.car.highlights = highlight_post;
            this.car.gallery = gallery;
            this.car.video_link = youtube_link;
            this.car.car_colours = colors;
            this.car.car_specs = specs;
            this.car.car_specs_original = specs;
            this.car.car_features = varient_feature;
            this.car.car_features_original = varient_feature;
            this.car.car_feature_variants = feature_model;
            this.VariantFeature = this.car.car_feature_variants[0].id;
            this.compareData.VariantFeatureCompare1= this.car.car_feature_variants[0].id;
            this.compareData.VariantFeatureCompare2 = this.car.car_feature_variants[1].id;
            var Tab1 = this.filterCarSpecCategories();
            var Tab2 = this.filterFeatureCategories(this.VariantFeature);
            var Tab3 = this.filterCompareCategories();
            this.filterCarSpecs(Tab1[0]);
            this.filterFeatures(Tab2[0]);
            this.filterCompareFeatures(Tab3[0]);
        },
    }
}
</script>

<style scoped>
.form_component{
    width: 50%;
    margin: 30px auto;
}
.main_tab_sec{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 30px auto;
}
.main_tab_sec a{
    background:#002c5f;
    border: none;
    outline: none;
    padding: 6px 25px;
    color: white;
    border-radius: 5px;
    font-size: 17px;
    margin: 10px 20px;
}
.main_tab_sec button{
    background:#002c5f;
    border: none;
    outline: none;
    padding: 6px 25px;
    color: white;
    border-radius: 5px;
    font-size: 17px;
    margin: 10px 20px;
    cursor: pointer;
}
.main_tab_sec a:hover{
    color: white;
}
.variant_model_label{
    text-align: center;
    margin: 20px 0;
    font-size: 18px;
    font-weight: 600;
    text-transform: capitalize;
}
.variant_box_select{
    background: transparent;
}
.variant_model_icon{
    position: relative;
    float: right;
    bottom: 28px;
    right: 7px;
    z-index: -2;
}

@media only screen and (min-width: 1270px) and (max-width: 1366px){
    .car_video_item iframe{
        width: 860px!important;
    }
    .car_title_sec .car_title{
        font-size: 20px!important;
    }
    .tab_item_box .tab_item{
        font-size: 11px!important;
        padding: 3px 15px!important;
        margin: 0 6px!important;
    }
    .car_title_sticky_header.sticky .car_title_sec{
        margin: 8px auto!important;
    }
    .car_overview_sec .title, .car_highlights_sec .title, .car_gallery_sec .title, .car_video_sec .title, .car_colour_sec .title, .car_type_main_title{
        font-size: 22px!important;
    }
    .description p{
        font-size: 13px!important;
    }
    .price_details .price_item{
        margin: 10px 20px!important;
        padding: 15px 10px!important;
        width: 18%!important;
    }
    .price_item .price_title{
        font-size: 13px!important;
    }
    .price_item .detail{
        margin: 10px 0 10px 0!important;
        font-size: 12px!important;
    }
    .highlight_items .item{
        width: 26%!important;
    }
    .highlight_items .item .content{
        padding: 12px 5px!important;
    }
    .highlight_items .item_title{
        font-size: 14px!important;
    }
    .highlight_items .item_desc{
        padding: 14px!important;
        font-size: 12px!important;
    }
    .colour_item_title.car_colour_img{
        font-size: 16px!important;
    }
    .car_spec_tab_box .tab_item{
        font-size: 13px!important;
        margin: 10px 15px!important;
    }
    .main_tab_sec a{
        padding: 4px 20px!important;
        font-size: 12px!important;
    }
}

.car_spec_table thead{
    background: #002c5f;
}
.car_spec_table thead th{
    color: white;
}
.car_spec_table tbody tr:nth-child(odd){
    background: #e6f0fa;
}

.car_spec_tab_box{
    display: flex;
    align-items: center;
    justify-content: center;
}

.car_spec_tab_box .tab_item{
    margin: 10px 20px;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
}

.car_spec_tab_box .tab_item.active{
    color: #002c5f;
    border-bottom: 3px solid #002c5f;
}

.car_colour_image_box .car_colour_img{
    margin:60px auto;
    display: none;
}
.colour_item_title.car_colour_img{
    margin:60px auto 30px auto;
    display: none;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
}
.car_colour_image_box .car_colour_img.active, .colour_item_title.car_colour_img.active{
    display: block;
}
.car_colour_item_box{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.colour_item{
    display: flex;
    flex-direction: row;
    margin: 10px;
    box-shadow: 0 2px 10px 4px rgb(0 0 0/25%);
    border-radius: 50%;
    height: 45px;
    width: 45px;
    overflow: hidden;
    cursor: pointer;
}
.colour_item.active{
    border: 2px solid black;
}

.colour_item .car_clr{
    width: 50%;
}
.car_video_item iframe{
    margin: 60px auto;
}
.car_gallery_item{
    width: 75%;
    margin: 60px auto;
}
.car_gallery_sec .title, .car_video_sec .title, .car_colour_sec .title{
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    margin: 40px 0;
}
.car_type_main_title{
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    margin: 40px 0;
}
.car_type_main_title hr{
    width: 8%;
    margin: 3px auto;
    background: black;
    height: 3px;
}
.car_title_sticky_header.sticky{
    position: fixed;
    top: 0;
    z-index: 9999;
    left: 0;
    width: 100%;
    background: white;
    box-shadow: 0 2px 10px 4px rgb(0 0 0 / 20%);
    animation: fadeDown .7s;
}
.car_title_sticky_header.sticky .car_title_sec{
    margin:30px auto;
} 
@keyframes fadeDown {
    from{
        opacity: 1;
        transform: translate3d(0,-50%,0);
    }
    to{
        opacity: 1;
        transform: none;
    }
}
.car_wrapper_sec{
    width: 90%;
    margin: 10px auto;
}
.car_overview_sec .title hr, .car_highlights_sec .title hr, .car_gallery_sec .title hr, .car_video_sec .title hr, .car_colour_sec .title hr{
    width: 8%;
    margin: 3px auto;
    background: black;
    height: 3px;
}
.car_highlights_sec .highlight_items{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.highlight_items .item_image img{
    width: 100%;
    object-fit: cover;
}
.highlight_items .item_title{
    color: #002c5f;
    font-size: 20px;
    font-weight: 600;
    padding: 10px 20px 0px 20px;
}
.highlight_items .item_desc{
    padding: 20px 20px;
}
.highlight_items .item .content{
    padding: 20px 5px;
}
.highlight_items .item{
    width: 29%;
    margin:35px 30px;
    box-shadow: 0 2px 10px 4px rgb(0 0 0/15%);
    border-radius: 8px;
    overflow: hidden;
}
.car_highlights_sec .title{
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    margin: 40px 0;
}
.car_poster_sec{
    position: relative;
}
.car_poster_details{
    position: absolute;
    top: 15%;
    left: 10%;
}
.car_poster_details .title1{
    font-size: 40px;
    font-weight: 600;
    user-select: none;
}
.car_poster_details .title2{
    font-size: 23px;
    font-weight: 600;
    user-select: none;
}
.car_poster_sec img{
    width: 100%;
    height: auto;
}
.car_title_sec{
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}
.car_title_sec .car_title{
    font-size: 27px;
    font-weight: 600;
    padding: 10px;
}
.car_title_sec .car_title hr{
    background: black;
}
.car_details_tab{
    margin: 15px 0;
    padding: 0 20px;
    display: flex;
    align-items: center;
}
.tab_item_box .tab_item{
    margin: 0 10px;
    padding: 6px 20px;
    font-size: 17px;
    font-weight: 600;
    color: #838383;
    border-radius: 5px;
    transition: .3s ease-in-out;
}
.tab_item_box .tab_item.active{
    background: #002c5f;
    color: white;
}
.car_overview_sec .title{
    text-align: center;
    font-size: 28px;
    font-weight: 700;
    margin: 40px 0;
}
.car_overview_sec .description{
    display: flex;
    align-items: center;
}
.car_overview_sec .description .paragraph{
    width: 50%;
}
.description p{
    width: 60%;
    font-size: 18px;
    font-weight: 500;
    margin: 5px auto;
}
.car_overview_sec .description .img_sec{
    width: 50%;
}
.description .img_sec img{
    margin-left: auto;
    margin-right: auto;
}
.price_details{
    display: flex;
    justify-content: center;
    align-items: center;
}
.price_details .price_item{
    margin: 10px 45px;
    padding: 30px 10px;
    width: 20%;
    box-shadow: 0 2px 10px 4px rgb(0 0 0/15%);
    border-radius: 8px;
}
.price_item .price_title{
    font-size: 18px;
    font-weight: 600;
    color: black;
    margin: 20px 0;
    text-align: center;
}
.price_item .detail{
    margin: 25px 0 10px 0;
    text-align: center;
}
.price_item .detail span{
    margin-top: 7px;
    display: inline-block;
}
/* Mobile Fixes */
@media only screen and (min-width:300px) and (max-width:600px){
    .form_component{
        width: 90%!important;
    }
    .car_spec_tab_box .tab_item{
        text-align: center;
    }
    .main_tab_sec{
        flex-wrap: wrap;
        justify-content: center;
    }
    .main_tab_sec a{
        min-width: 172px;
        text-align: center;
        width: 60%!important;
    }
    .main_tab_sec button{
        width: 60%!important;
    }
    .car_poster_details{
        position: absolute;
        top: 13%;
        left: 3%;
    }
    .car_poster_details .title1{
        font-size: 14px;
        font-weight: 600;
        user-select: none;
    }
    .car_poster_details .title2{
        font-size: 10px;
        font-weight: 600;
        user-select: none;
    }
    .car_video_item iframe{
       max-width: 100%;
       height: 220px;
    }
    .car_gallery_sec .title, .car_video_sec .title, .car_colour_sec .title{
        font-size: 21px;
    }
    .car_highlights_sec .title{
        font-size: 21px;
    }
    .car_overview_sec .title{
        font-size: 21px;
    }
    .highlight_items .item{
        width: 100%;
        margin:25px 10px;
    }
    .highlight_items .item_title{
        padding: 10px;
        font-size: 18px;
    }
    .highlight_items .item_desc{
        padding: 10px 10px;
    }
    .car_gallery_item{
        width: 100%;
    }
    .car_type_main_title{
        font-size: 21px;
    }
    .car_spec_tab_box{
        flex-direction: column;
    }
    .spec_table_sec{
        width: 100%;
    }
    .car_title_sec .car_title{
        font-size: 21px;
    }
    .car_details_tab{
        padding: 0;
        flex-direction: column;
    }
    .car_details_tab .tab_item_box{
        margin: 15px 0;
    }
    .car_title_sticky_header.sticky{
        position: static;
        box-shadow: none;
        z-index: 0;
    }
    .car_overview_sec .description{
        flex-wrap: wrap;
    }
    .car_overview_sec .description .paragraph{
        width: 100%;
        margin-bottom: 40px;
    }
    .car_overview_sec .description .img_sec{
        width: 100%;
    }
    .description p{
        width: 96%;
        font-size: 16px;
    }
    .price_details .price_item{
        width: 100%;
        margin: 30px 15px;
    }
    .price_details{
        flex-wrap: wrap;
    }
    .colour_item_title.car_colour_img{
        font-size: 17px;
    }
    .car_feature_variant_box .select_box{
        width: 95%;
    }
}


.swiper-button-prev, .swiper-button-next{
    z-index: 220;
    border-radius: 50%;
    width: 40px!important;
    height: 40px!important;
}
.swiper-button-next:hover, .swiper-button-prev:hover{
    background: black!important;
}
</style>