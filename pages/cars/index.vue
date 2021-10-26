<template>
  <div class="single_page_car_sec">
      <div class="car_poster_sec">
          <img :src="car.baseUrl + 'images/' + car.poster_image" alt="poster_image" />
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
                    <img :src="car.baseUrl + 'images/' + car.overview_image" alt="overview_image" />
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
                  <iframe width="1239" height="450"  :src="'https://www.youtube.com/embed/' + car.video_link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
                                                <td class="px-6 py-4 " >
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
                                                <td class="px-6 py-4 " >
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

                                                <td class="px-6 py-4 " >
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
                                id="variant"
                                v-model="VariantFeature"
                                @change="VariantChange"
                            >
                            <option class="text-xl"  :value="model.id" v-for="(model,index) in car.car_feature_variants"
                                :key="index" >{{model.feature_type}}</option>
                          </select>
                      </div>
                  </div>
                  <div class="car_spec_tab_box">
                      <div class="tab_item" v-for="(item,index) in car.car_features_tab" :class="car_feature_tab_index == index ? 'active' : ''" @click="car_feature_tab_index = index, filterFeatures(item)" :key="index">{{item}}</div>
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
                                                <td class="px-6 py-4 " >
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
                                                <td class="px-6 py-4 " >
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
  </div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
    data(){
        return{
            singleCar:[],
            originalcars:[
            {
                id:1,
                name:'Hyundai All New I20',
                image:'car7.jpg',
                poster_image:'car1.jpg',    
                overview_image:'car2.webp',
                power:' 89 Bhp @ 4000 RPM',
                power2:'89 Bhp @ 4000 RPM',
                transmission:'Manual,Automatic',
                transmission2:'Manual',
                mileage:'17.4 Kmpl To 22.54 Kmpl',
                mileage2:'17.4 Kmpl To 22.54 Kmpl',
                category:'Hatchback',
                highlights:[
                    {
                        id:1,
                        name:'Oxyboost Air Purifier With Air Quality Indicator',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'1.jpg'
                    },
                    {
                        id:2,
                        name:'Wireless Charger With Cooling Pad',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'2.jpg'
                    },
                    {
                        id:3,
                        name:'Soothing Blue Ambient Lighting',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'3.jpg'
                    },
                    {
                        id:4,
                        name:'Electric Sunroof',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'4.jpg'
                    },
                    {
                        id:5,
                        name:'26.03 Cm HD Touchscreen Infotainment & Navigation System',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'5.jpg'
                    },
                    {
                        id:6,
                        name:'Bose Premium 7 Speaker System',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'6.jpg'
                    },
                    {
                        id:7,
                        name:'Hyundai BlueLink With Over The Air (OTA) Map',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'7.jpg'
                    },
                    {
                        id:8,
                        name:'Front Grille',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'8.jpg'
                    },
                    {
                        id:9,
                        name:'Superior Turbo GDi Engine Lightening Fast',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'9.jpg'
                    },
                    {
                        id:10,
                        name:'Metal Pedals',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'10.jpg'
                    },
                    {
                        id:11,
                        name:'Premium Leather* Seat Upholstery',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'11.jpg'
                    },
                    {
                        id:12,
                        name:'Turbo Branding On Front Grille',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'12.jpg'
                    }
                ],
                car_gallery:[
                    {
                        id:1,
                        image:'1.jpg'
                    },
                    {
                        id:2,
                        image:'2.jpg'
                    },
                    {
                        id:3,
                        image:'3.jpg'
                    },
                    {
                        id:4,
                        image:'4.jpg'
                    }
                ],
                video_link:'ZCMpGWkgs-c',
                car_colours:[
                    {
                        id:1,
                        title:'Hyundai All New i20 Copper Metalic',
                        colour1:'#644a49',
                        colour2:'#644a49',
                        image:'1.jpg'
                    },
                    {
                        id:2,
                        title:'Hyundai All New i20 Fiery Red Black Roof ',
                        colour1:'#941b0a',
                        colour2:'#111111',
                        image:'2.jpg'
                    },
                    {
                        id:3,
                        title:'Hyundai All New i20 Starry Night',
                        colour1:'#242736',
                        colour2:'#242736',
                        image:'3.jpg'
                    },
                    {
                        id:4,
                        title:'Hyundai All New i20 Tyhoon Silver ',
                        colour1:'#e2e3e5',
                        colour2:'#e2e3e5',
                        image:'4.jpg'
                    }
                ],
                car_specs:[
                    {
                        id:1,
                        model:'Max. Power (ps / rpm)',
                        petrol:'88 (IVT) @ 6000 - 120 (DCT, iMT) @ 6000',
                        diesel:'100 @ 4000',
                        category:'Engine',
                    },
                    {
                        id:2,
                        model:'Displacement (cc)',
                        petrol:'1197 | 998 (1.0 Turbo GDI)',
                        diesel:'1493',
                        category:'Engine',
                    },
                    {
                        id:3,
                        model:'Max. Torque (kgm / rpm)',
                        petrol:'11.7 @ 4200 - 17.5 @ 1500 ~ 4000',
                        diesel:'24.5 @ 1500 ~ 2750',
                        category:'Engine',
                    },
                    {
                        id:4,
                        model:'Transmission type',
                        petrol:'5-7 speed (5 MT - 7 DCT)',
                        diesel:'6-speed (6 MT)',
                        category:'Transmission',
                    },
                    {
                        id:5,
                        model:'Front',
                        petrol:'McPherson strut',
                        diesel:'McPherson strut',
                        category:'Suspension',
                    },
                    {
                        id:6,
                        model:'Rear',
                        petrol:'Coupled torsion beam axle',
                        diesel:'Coupled torsion beam axle',
                        category:'Suspension',
                    },
                    {
                        id:7,
                        model:'Shock Absorber',
                        petrol:'Gas Type',
                        diesel:'Gas Type',
                        category:'Suspension',
                    },
                    {
                        id:8,
                        model:'Front',
                        petrol:'Disc',
                        diesel:'Disc',
                        category:'Brakes',
                    },
                    {
                        id:9,
                        model:'Rear',
                        petrol:'Drum',
                        diesel:'Drum',
                        category:'Brakes',
                    },
                    {
                        id:10,
                        model:'Fuel Tank Capacity (Ltrs)',
                        petrol:'37 L',
                        diesel:'37 L',
                        category:'Dimensions',
                    },
                    {
                        id:11,
                        model:'Overall length (mm)',
                        petrol:'3995',
                        diesel:'3995',
                        category:'Dimensions',
                    },
                    {
                        id:12,
                        model:'Overall width (mm)',
                        petrol:'1775',
                        diesel:'1775',
                        category:'Dimensions',
                    },
                    {
                        id:13,
                        model:'Overall height (mm)',
                        petrol:'1505',
                        diesel:'1505',
                        category:'Dimensions',
                    },
                    {
                        id:14,
                        model:'Wheelbase (mm)',
                        petrol:'2580',
                        diesel:'2580',
                        category:'Dimensions',
                    },
                    {
                        id:15,
                        model:'Size',
                        petrol:'185/65 R15(Magna), 195/55 R16 (Sportz), 195/55 R16 (Asta, Asta (O))',
                        diesel:'185/65 R15(Magna), 195/55 R16 (Sportz), 195/55 R16 (Asta, Asta (O))',
                        category:'Tyre Size',
                    },
                    {
                        id:16,
                        model:'Spare Tyre',
                        petrol:'185/70 R14 (Magna), 185/65 R15 (Sportz, Asta, Asta (O))',
                        diesel:'185/70 R14 (Magna), 185/65 R15 (Sportz, Asta, Asta (O))',
                        category:'Tyre Size',
                    }

                ],
                car_features:[
                    {
                        id:1,
                        variant_id:1,
                        category:'Exterior',
                        feature:'Standard Halogen Headlamps',
                        value:'Yes'
                    },
                    {
                        id:2,
                        variant_id:1,
                        category:'Exterior',
                        feature:'High Gloss Front Grille',
                        value:'Yes'
                    },
                    {
                        id:3,
                        variant_id:1,
                        category:'Exterior',
                        feature:'B-Pillar Blackout',
                        value:'Yes'
                    },
                    {
                        id:4,
                        variant_id:2,
                        category:'Exterior',
                        feature:'C Pillar Black Finish',
                        value:'Yes'
                    },
                    {
                        id:5,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Bumper',
                        value:'Yes'
                    },
                    {
                        id:6,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Outside Mirrors',
                        value:'Yes'
                    },
                    {
                        id:7,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Outside Door Handles',
                        value:'Yes'
                    },
                    {
                        id:8,
                        variant_id:1,
                        category:'Interior',
                        feature:'Fabric Seat Upholstery-with Copper Stitching',
                        value:'Yes'
                    },
                    {
                        id:9,
                        variant_id:1,
                        category:'Interior',
                        feature:'Sunglass Holder',
                        value:'Yes'
                    },
                    {
                        id:10,
                        variant_id:1,
                        category:'Interior',
                        feature:'2-Tone Beige & Black Interior Color',
                        value:'Yes'
                    },
                    {
                        id:11,
                        variant_id:2,
                        category:'Interior',
                        feature:'Map Pockets',
                        value:'Front & Rear Door'
                    },
                    {
                        id:12,
                        variant_id:2,
                        category:'Interior',
                        feature:'Front Passenger Seat Back Pocket',
                        value:'Yes'
                    },
                    {
                        id:13,
                        variant_id:1,
                        category:'Comfort And Convenience',
                        feature:'Power Windows',
                        value:'Front, Rear'
                    },
                    {
                        id:14,
                        variant_id:1,
                        category:'Comfort And Convenience',
                        feature:'Timelag Power Windows',
                        value:'Yes'
                    },
                    {
                        id:15,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Switch Illumination Driver side Power Windows',
                        value:'Yes'
                    },
                    {
                        id:16,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Air Conditioner',
                        value:'Manual'
                    },
                    {
                        id:17,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Power Steering',
                        value:'Motor Driven (Electric)'
                    },
                    {
                        id:18,
                        variant_id:1,
                        category:'Safety And Security',
                        feature:'Airbag',
                        value:'Driver & Passenger'
                    },
                    {
                        id:19,
                        variant_id:1,
                        category:'Safety And Security',
                        feature:'ABS with EBD',
                        value:'Yes'
                    },
                    {
                        id:20,
                        variant_id:2,
                        category:'Safety And Security',
                        feature:'Fog Lamps',
                        value:'Front Projector'
                    },
                    {
                        id:21,
                        variant_id:2,
                        category:'Safety And Security',
                        feature:'Central Locking',
                        value:'Yes'
                    },
                    {
                        id:22,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'DRM',
                        value:'Yes'
                    },
                    {
                        id:23,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'2-DIN Radio+MP3 Audio',
                        value:'Yes'
                    },
                    {
                        id:24,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'Speakers',
                        value:'Front & Rear'
                    },
                    {
                        id:25,
                        variant_id:2,
                        category:'Audio & Entertainment',
                        feature:'Tweeters',
                        value:'Front Only'
                    }
                ],
                price:'6,79,900',
                price2:'8,19,900',
                description:"Hyundai All New I20 - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            },
            {
                id:2,
                name:'Hyundai Santro',
                image:'car8.jpg',
                poster_image:'car2.webp',
                overview_image:'car1.webp',
                power:' 69 PS @ 5,500 RPM',
                power2:'',
                transmission:'Manual,Automatic',
                transmission2:'',
                mileage:'20.3 KMPL',
                mileage2:'',
                category:'Hatchback',
                highlights:[
                    {
                        id:1,
                        name:'Modern Styling',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'13.jpg'
                    },
                    {
                        id:2,
                        name:'Sporty Design',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'14.jpg'
                    },
                    {
                        id:3,
                        name:'Bold Appeal',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'15.jpg'
                    },
                    {
                        id:4,
                        name:'Bigger, Wider & More Spacious',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'16.jpg'
                    },
                    {
                        id:5,
                        name:'Superior Safety',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'17.jpg'
                    },
                    {
                        id:6,
                        name:'Connected Drive',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'18.jpg'
                    },
                    {
                        id:7,
                        name:'Tail Lamps',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'19.jpg'
                    },
                    {
                        id:8,
                        name:'Z-Shaped Character Lines',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'20.jpg'
                    },
                    {
                        id:9,
                        name:'Body Color Door Handles',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'21.jpg'
                    },
                    {
                        id:10,
                        name:'Dual Tone Bumpers',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'22.jpg'
                    },
                    {
                        id:11,
                        name:'Power Windows',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'23.jpg'
                    },
                    {
                        id:12,
                        name:'Micro Antenna',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'24.jpg'
                    }
                ],
                car_gallery:[
                    {
                        id:1,
                        image:'5.jpg'
                    },
                    {
                        id:2,
                        image:'6.jpg'
                    },
                    {
                        id:3,
                        image:'7.jpg'
                    },
                    {
                        id:4,
                        image:'8.jpg'
                    }
                ],
                video_link:'y5gauLb-Pbs',
                car_colours:[
                    {
                        id:1,
                        title:'Hyundai Santro Fiery Red',
                        colour1:'#93121c',
                        colour2:'#93121c',
                        image:'5.png'
                    },
                    {
                        id:2,
                        title:'Hyundai Santro Imperial Beige',
                        colour1:'#99937d',
                        colour2:'#99937d',
                        image:'6.png'
                    },
                    {
                        id:3,
                        title:'Hyundai Santro Marina Blue',
                        colour1:'#00438e',
                        colour2:'#00438e',
                        image:'7.png'
                    },
                    {
                        id:4,
                        title:'Hyundai Santro Polar White ',
                        colour1:'#f7f4f0',
                        colour2:'#f7f4f0',
                        image:'8.png'
                    }
                ],
                car_specs:[
                    {
                        id:1,
                        model:'Max. Power (ps / rpm)',
                        petrol:'88 (IVT) @ 6000 - 120 (DCT, iMT) @ 6000',
                        diesel:'100 @ 4000',
                        category:'Engine',
                    },
                    {
                        id:2,
                        model:'Displacement (cc)',
                        petrol:'1197 | 998 (1.0 Turbo GDI)',
                        diesel:'1493',
                        category:'Engine',
                    },
                    {
                        id:3,
                        model:'Max. Torque (kgm / rpm)',
                        petrol:'11.7 @ 4200 - 17.5 @ 1500 ~ 4000',
                        diesel:'24.5 @ 1500 ~ 2750',
                        category:'Engine',
                    },
                    {
                        id:4,
                        model:'Transmission type',
                        petrol:'5-7 speed (5 MT - 7 DCT)',
                        diesel:'6-speed (6 MT)',
                        category:'Transmission',
                    },
                    {
                        id:5,
                        model:'Front',
                        petrol:'McPherson strut',
                        diesel:'McPherson strut',
                        category:'Suspension',
                    },
                    {
                        id:6,
                        model:'Rear',
                        petrol:'Coupled torsion beam axle',
                        diesel:'Coupled torsion beam axle',
                        category:'Suspension',
                    },
                    {
                        id:7,
                        model:'Shock Absorber',
                        petrol:'Gas Type',
                        diesel:'Gas Type',
                        category:'Suspension',
                    },
                    {
                        id:8,
                        model:'Front',
                        petrol:'Disc',
                        diesel:'Disc',
                        category:'Brakes',
                    },
                    {
                        id:9,
                        model:'Rear',
                        petrol:'Drum',
                        diesel:'Drum',
                        category:'Brakes',
                    },
                    {
                        id:10,
                        model:'Fuel Tank Capacity (Ltrs)',
                        petrol:'37 L',
                        diesel:'37 L',
                        category:'Dimensions',
                    },
                    {
                        id:11,
                        model:'Overall length (mm)',
                        petrol:'3995',
                        diesel:'3995',
                        category:'Dimensions',
                    },
                    {
                        id:12,
                        model:'Overall width (mm)',
                        petrol:'1775',
                        diesel:'1775',
                        category:'Dimensions',
                    },
                    {
                        id:13,
                        model:'Overall height (mm)',
                        petrol:'1505',
                        diesel:'1505',
                        category:'Dimensions',
                    },
                    {
                        id:14,
                        model:'Wheelbase (mm)',
                        petrol:'2580',
                        diesel:'2580',
                        category:'Dimensions',
                    },
                    {
                        id:15,
                        model:'Size',
                        petrol:'185/65 R15(Magna), 195/55 R16 (Sportz), 195/55 R16 (Asta, Asta (O))',
                        diesel:'185/65 R15(Magna), 195/55 R16 (Sportz), 195/55 R16 (Asta, Asta (O))',
                        category:'Tyre Size',
                    },
                    {
                        id:16,
                        model:'Spare Tyre',
                        petrol:'185/70 R14 (Magna), 185/65 R15 (Sportz, Asta, Asta (O))',
                        diesel:'185/70 R14 (Magna), 185/65 R15 (Sportz, Asta, Asta (O))',
                        category:'Tyre Size',
                    }
                ],
                car_features:[
                    {
                        id:1,
                        variant_id:1,
                        category:'Exterior',
                        feature:'Standard Halogen Headlamps',
                        value:'Yes'
                    },
                    {
                        id:2,
                        variant_id:1,
                        category:'Exterior',
                        feature:'High Gloss Front Grille',
                        value:'Yes'
                    },
                    {
                        id:3,
                        variant_id:1,
                        category:'Exterior',
                        feature:'B-Pillar Blackout',
                        value:'Yes'
                    },
                    {
                        id:4,
                        variant_id:2,
                        category:'Exterior',
                        feature:'C Pillar Black Finish',
                        value:'Yes'
                    },
                    {
                        id:5,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Bumper',
                        value:'Yes'
                    },
                    {
                        id:6,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Outside Mirrors',
                        value:'Yes'
                    },
                    {
                        id:7,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Outside Door Handles',
                        value:'Yes'
                    },
                    {
                        id:8,
                        variant_id:1,
                        category:'Interior',
                        feature:'Fabric Seat Upholstery-with Copper Stitching',
                        value:'Yes'
                    },
                    {
                        id:9,
                        variant_id:1,
                        category:'Interior',
                        feature:'Sunglass Holder',
                        value:'Yes'
                    },
                    {
                        id:10,
                        variant_id:1,
                        category:'Interior',
                        feature:'2-Tone Beige & Black Interior Color',
                        value:'Yes'
                    },
                    {
                        id:11,
                        variant_id:2,
                        category:'Interior',
                        feature:'Map Pockets',
                        value:'Front & Rear Door'
                    },
                    {
                        id:12,
                        variant_id:2,
                        category:'Interior',
                        feature:'Front Passenger Seat Back Pocket',
                        value:'Yes'
                    },
                    {
                        id:13,
                        variant_id:1,
                        category:'Comfort And Convenience',
                        feature:'Power Windows',
                        value:'Front, Rear'
                    },
                    {
                        id:14,
                        variant_id:1,
                        category:'Comfort And Convenience',
                        feature:'Timelag Power Windows',
                        value:'Yes'
                    },
                    {
                        id:15,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Switch Illumination Driver side Power Windows',
                        value:'Yes'
                    },
                    {
                        id:16,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Air Conditioner',
                        value:'Manual'
                    },
                    {
                        id:17,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Power Steering',
                        value:'Motor Driven (Electric)'
                    },
                    {
                        id:18,
                        variant_id:1,
                        category:'Safety And Security',
                        feature:'Airbag',
                        value:'Driver & Passenger'
                    },
                    {
                        id:19,
                        variant_id:1,
                        category:'Safety And Security',
                        feature:'ABS with EBD',
                        value:'Yes'
                    },
                    {
                        id:20,
                        variant_id:2,
                        category:'Safety And Security',
                        feature:'Fog Lamps',
                        value:'Front Projector'
                    },
                    {
                        id:21,
                        variant_id:2,
                        category:'Safety And Security',
                        feature:'Central Locking',
                        value:'Yes'
                    },
                    {
                        id:22,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'DRM',
                        value:'Yes'
                    },
                    {
                        id:23,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'2-DIN Radio+MP3 Audio',
                        value:'Yes'
                    },
                    {
                        id:24,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'Speakers',
                        value:'Front & Rear'
                    },
                    {
                        id:25,
                        variant_id:2,
                        category:'Audio & Entertainment',
                        feature:'Tweeters',
                        value:'Front Only'
                    }
                ],
                price:'4,67,490',
                price2:'',
                description:"Hyundai Santro - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            },
            {
                id:3,
                name:'GRAND i10 NIOS',
                image:'car9.webp',
                poster_image:'car3.jpg',
                overview_image:'car3.webp',
                power:'  83 PS @ 6,000 RPM',
                power2:'75 PS @ 4,000 RPM',
                transmission:'Manual,Automatic',
                transmission2:'Manual',
                mileage:'26.2 Kmpl',
                mileage2:'28.4 Kmpl',
                category:'Hatchback',
                highlights:[
                    {
                        id:1,
                        name:'Oxyboost Air Purifier With Air Quality Indicator',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'1.jpg'
                    },
                    {
                        id:2,
                        name:'Wireless Charger With Cooling Pad',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'2.jpg'
                    },
                    {
                        id:3,
                        name:'Soothing Blue Ambient Lighting',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'3.jpg'
                    },
                    {
                        id:4,
                        name:'Electric Sunroof',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'4.jpg'
                    },
                    {
                        id:5,
                        name:'26.03 Cm HD Touchscreen Infotainment & Navigation System',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'5.jpg'
                    },
                    {
                        id:6,
                        name:'Bose Premium 7 Speaker System',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'6.jpg'
                    },
                    {
                        id:7,
                        name:'Hyundai BlueLink With Over The Air (OTA) Map',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'7.jpg'
                    },
                    {
                        id:8,
                        name:'Front Grille',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'8.jpg'
                    },
                    {
                        id:9,
                        name:'Superior Turbo GDi Engine Lightening Fast',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'9.jpg'
                    },
                    {
                        id:10,
                        name:'Metal Pedals',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'10.jpg'
                    },
                    {
                        id:11,
                        name:'Premium Leather* Seat Upholstery',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'11.jpg'
                    },
                    {
                        id:12,
                        name:'Turbo Branding On Front Grille',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'12.jpg'
                    }
                ],
                car_gallery:[
                    {
                        id:1,
                        image:'9.jpg'
                    },
                    {
                        id:2,
                        image:'10.jpg'
                    },
                    {
                        id:3,
                        image:'11.jpg'
                    },
                    {
                        id:4,
                        image:'12.jpg'
                    }
                ],
                video_link:'9YEG89MbEaU',
                car_colours:[
                    {
                        id:1,
                        title:'Hyundai Grand i10 NIOS Typhoon Silver',
                        colour1:'#e4e5e7',
                        colour2:'#e4e5e7',
                        image:'9.png'
                    },
                    {
                        id:2,
                        title:'Hyundai Grand i10 NIOS Titan Gray ',
                        colour1:'#585f63',
                        colour2:'#585f63',
                        image:'10.png'
                    },
                    {
                        id:3,
                        title:'Hyundai Grand i10 NIOS Fiery Red',
                        colour1:'#a81514',
                        colour2:'#a81514',
                        image:'11.png'
                    },
                    {
                        id:4,
                        title:'Hyundai Grand i10 NIOS Aqua Teal ',
                        colour1:'#15405f',
                        colour2:'#15405f',
                        image:'12.png'
                    }
                ],
                car_specs:[
                    {
                        id:1,
                        model:'Max. Power (ps / rpm)',
                        petrol:'88 (IVT) @ 6000 - 120 (DCT, iMT) @ 6000',
                        diesel:'100 @ 4000',
                        category:'Engine',
                    },
                    {
                        id:2,
                        model:'Displacement (cc)',
                        petrol:'1197 | 998 (1.0 Turbo GDI)',
                        diesel:'1493',
                        category:'Engine',
                    },
                    {
                        id:3,
                        model:'Max. Torque (kgm / rpm)',
                        petrol:'11.7 @ 4200 - 17.5 @ 1500 ~ 4000',
                        diesel:'24.5 @ 1500 ~ 2750',
                        category:'Engine',
                    },
                    {
                        id:4,
                        model:'Transmission type',
                        petrol:'5-7 speed (5 MT - 7 DCT)',
                        diesel:'6-speed (6 MT)',
                        category:'Transmission',
                    },
                    {
                        id:5,
                        model:'Front',
                        petrol:'McPherson strut',
                        diesel:'McPherson strut',
                        category:'Suspension',
                    },
                    {
                        id:6,
                        model:'Rear',
                        petrol:'Coupled torsion beam axle',
                        diesel:'Coupled torsion beam axle',
                        category:'Suspension',
                    },
                    {
                        id:7,
                        model:'Shock Absorber',
                        petrol:'Gas Type',
                        diesel:'Gas Type',
                        category:'Suspension',
                    },
                    {
                        id:8,
                        model:'Front',
                        petrol:'Disc',
                        diesel:'Disc',
                        category:'Brakes',
                    },
                    {
                        id:9,
                        model:'Rear',
                        petrol:'Drum',
                        diesel:'Drum',
                        category:'Brakes',
                    },
                    {
                        id:10,
                        model:'Fuel Tank Capacity (Ltrs)',
                        petrol:'37 L',
                        diesel:'37 L',
                        category:'Dimensions',
                    },
                    {
                        id:11,
                        model:'Overall length (mm)',
                        petrol:'3995',
                        diesel:'3995',
                        category:'Dimensions',
                    },
                    {
                        id:12,
                        model:'Overall width (mm)',
                        petrol:'1775',
                        diesel:'1775',
                        category:'Dimensions',
                    },
                    {
                        id:13,
                        model:'Overall height (mm)',
                        petrol:'1505',
                        diesel:'1505',
                        category:'Dimensions',
                    },
                    {
                        id:14,
                        model:'Wheelbase (mm)',
                        petrol:'2580',
                        diesel:'2580',
                        category:'Dimensions',
                    },
                    {
                        id:15,
                        model:'Size',
                        petrol:'185/65 R15(Magna), 195/55 R16 (Sportz), 195/55 R16 (Asta, Asta (O))',
                        diesel:'185/65 R15(Magna), 195/55 R16 (Sportz), 195/55 R16 (Asta, Asta (O))',
                        category:'Tyre Size',
                    },
                    {
                        id:16,
                        model:'Spare Tyre',
                        petrol:'185/70 R14 (Magna), 185/65 R15 (Sportz, Asta, Asta (O))',
                        diesel:'185/70 R14 (Magna), 185/65 R15 (Sportz, Asta, Asta (O))',
                        category:'Tyre Size',
                    }
                ],
                car_features:[
                    {
                        id:1,
                        variant_id:1,
                        category:'Exterior',
                        feature:'Standard Halogen Headlamps',
                        value:'Yes'
                    },
                    {
                        id:2,
                        variant_id:1,
                        category:'Exterior',
                        feature:'High Gloss Front Grille',
                        value:'Yes'
                    },
                    {
                        id:3,
                        variant_id:1,
                        category:'Exterior',
                        feature:'B-Pillar Blackout',
                        value:'Yes'
                    },
                    {
                        id:4,
                        variant_id:2,
                        category:'Exterior',
                        feature:'C Pillar Black Finish',
                        value:'Yes'
                    },
                    {
                        id:5,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Bumper',
                        value:'Yes'
                    },
                    {
                        id:6,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Outside Mirrors',
                        value:'Yes'
                    },
                    {
                        id:7,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Outside Door Handles',
                        value:'Yes'
                    },
                    {
                        id:8,
                        variant_id:1,
                        category:'Interior',
                        feature:'Fabric Seat Upholstery-with Copper Stitching',
                        value:'Yes'
                    },
                    {
                        id:9,
                        variant_id:1,
                        category:'Interior',
                        feature:'Sunglass Holder',
                        value:'Yes'
                    },
                    {
                        id:10,
                        variant_id:1,
                        category:'Interior',
                        feature:'2-Tone Beige & Black Interior Color',
                        value:'Yes'
                    },
                    {
                        id:11,
                        variant_id:2,
                        category:'Interior',
                        feature:'Map Pockets',
                        value:'Front & Rear Door'
                    },
                    {
                        id:12,
                        variant_id:2,
                        category:'Interior',
                        feature:'Front Passenger Seat Back Pocket',
                        value:'Yes'
                    },
                    {
                        id:13,
                        variant_id:1,
                        category:'Comfort And Convenience',
                        feature:'Power Windows',
                        value:'Front, Rear'
                    },
                    {
                        id:14,
                        variant_id:1,
                        category:'Comfort And Convenience',
                        feature:'Timelag Power Windows',
                        value:'Yes'
                    },
                    {
                        id:15,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Switch Illumination Driver side Power Windows',
                        value:'Yes'
                    },
                    {
                        id:16,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Air Conditioner',
                        value:'Manual'
                    },
                    {
                        id:17,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Power Steering',
                        value:'Motor Driven (Electric)'
                    },
                    {
                        id:18,
                        variant_id:1,
                        category:'Safety And Security',
                        feature:'Airbag',
                        value:'Driver & Passenger'
                    },
                    {
                        id:19,
                        variant_id:1,
                        category:'Safety And Security',
                        feature:'ABS with EBD',
                        value:'Yes'
                    },
                    {
                        id:20,
                        variant_id:2,
                        category:'Safety And Security',
                        feature:'Fog Lamps',
                        value:'Front Projector'
                    },
                    {
                        id:21,
                        variant_id:2,
                        category:'Safety And Security',
                        feature:'Central Locking',
                        value:'Yes'
                    },
                    {
                        id:22,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'DRM',
                        value:'Yes'
                    },
                    {
                        id:23,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'2-DIN Radio+MP3 Audio',
                        value:'Yes'
                    },
                    {
                        id:24,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'Speakers',
                        value:'Front & Rear'
                    },
                    {
                        id:25,
                        variant_id:2,
                        category:'Audio & Entertainment',
                        feature:'Tweeters',
                        value:'Front Only'
                    }
                ],
                price:'5,12,690',
                price2:' 7,05,810',
                description:"GRAND i10 NIOS - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            },
            {
                id:5,
                name:'Hyundai Aura',
                image:'car2.webp',
                poster_image:'car4.jpg',
                overview_image:'car4.webp',
                power:' 81 Bhp @ 6000 Rpm',
                power2:' 74 Bhp @ 4000 Rpm',
                transmission:'Manual,Automatic',
                transmission2:'Manual,Automatic',
                mileage:'16 KMPL',
                mileage2:'24 KMPL',
                category:'Sedan',
                highlights:[
                    {
                        id:1,
                        name:'Oxyboost Air Purifier With Air Quality Indicator',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'1.jpg'
                    },
                    {
                        id:2,
                        name:'Wireless Charger With Cooling Pad',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'2.jpg'
                    },
                    {
                        id:3,
                        name:'Soothing Blue Ambient Lighting',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'3.jpg'
                    },
                    {
                        id:4,
                        name:'Electric Sunroof',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'4.jpg'
                    },
                    {
                        id:5,
                        name:'26.03 Cm HD Touchscreen Infotainment & Navigation System',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'5.jpg'
                    },
                    {
                        id:6,
                        name:'Bose Premium 7 Speaker System',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'6.jpg'
                    },
                    {
                        id:7,
                        name:'Hyundai BlueLink With Over The Air (OTA) Map',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'7.jpg'
                    },
                    {
                        id:8,
                        name:'Front Grille',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'8.jpg'
                    },
                    {
                        id:9,
                        name:'Superior Turbo GDi Engine Lightening Fast',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'9.jpg'
                    },
                    {
                        id:10,
                        name:'Metal Pedals',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'10.jpg'
                    },
                    {
                        id:11,
                        name:'Premium Leather* Seat Upholstery',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'11.jpg'
                    },
                    {
                        id:12,
                        name:'Turbo Branding On Front Grille',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'12.jpg'
                    }
                ],
                car_gallery:[
                    {
                        id:1,
                        image:'17.jpg'
                    },
                    {
                        id:2,
                        image:'18.jpg'
                    },
                    {
                        id:3,
                        image:'19.jpg'
                    },
                    {
                        id:4,
                        image:'20.jpg'
                    }
                ],
                video_link:'AUqP_0h_AD8',
                car_colours:[
                    {
                        id:1,
                        title:'Hyundai Aura Fiery Red ',
                        colour1:'#ad1518',
                        colour2:'#ad1518',
                        image:'13.png'
                    },
                    {
                        id:2,
                        title:'Hyundai Aura Vintage Brown ',
                        colour1:'#90573e',
                        colour2:'#90573e',
                        image:'14.png'
                    },
                    {
                        id:3,
                        title:'Hyundai Aura Titan Grey ',
                        colour1:'#595f63',
                        colour2:'#595f63',
                        image:'15.png'
                    },
                    {
                        id:4,
                        title:'Hyundai Aura Polar White',
                        colour1:'#f0f4f5',
                        colour2:'#f0f4f5',
                        image:'16.png'
                    }
                ],
                car_specs:[
                    {
                        id:1,
                        model:'Max. Power (ps / rpm)',
                        petrol:'88 (IVT) @ 6000 - 120 (DCT, iMT) @ 6000',
                        diesel:'100 @ 4000',
                        category:'Engine',
                    },
                    {
                        id:2,
                        model:'Displacement (cc)',
                        petrol:'1197 | 998 (1.0 Turbo GDI)',
                        diesel:'1493',
                        category:'Engine',
                    },
                    {
                        id:3,
                        model:'Max. Torque (kgm / rpm)',
                        petrol:'11.7 @ 4200 - 17.5 @ 1500 ~ 4000',
                        diesel:'24.5 @ 1500 ~ 2750',
                        category:'Engine',
                    },
                    {
                        id:4,
                        model:'Transmission type',
                        petrol:'5-7 speed (5 MT - 7 DCT)',
                        diesel:'6-speed (6 MT)',
                        category:'Transmission',
                    },
                    {
                        id:5,
                        model:'Front',
                        petrol:'McPherson strut',
                        diesel:'McPherson strut',
                        category:'Suspension',
                    },
                    {
                        id:6,
                        model:'Rear',
                        petrol:'Coupled torsion beam axle',
                        diesel:'Coupled torsion beam axle',
                        category:'Suspension',
                    },
                    {
                        id:7,
                        model:'Shock Absorber',
                        petrol:'Gas Type',
                        diesel:'Gas Type',
                        category:'Suspension',
                    },
                    {
                        id:8,
                        model:'Front',
                        petrol:'Disc',
                        diesel:'Disc',
                        category:'Brakes',
                    },
                    {
                        id:9,
                        model:'Rear',
                        petrol:'Drum',
                        diesel:'Drum',
                        category:'Brakes',
                    },
                    {
                        id:10,
                        model:'Fuel Tank Capacity (Ltrs)',
                        petrol:'37 L',
                        diesel:'37 L',
                        category:'Dimensions',
                    },
                    {
                        id:11,
                        model:'Overall length (mm)',
                        petrol:'3995',
                        diesel:'3995',
                        category:'Dimensions',
                    },
                    {
                        id:12,
                        model:'Overall width (mm)',
                        petrol:'1775',
                        diesel:'1775',
                        category:'Dimensions',
                    },
                    {
                        id:13,
                        model:'Overall height (mm)',
                        petrol:'1505',
                        diesel:'1505',
                        category:'Dimensions',
                    },
                    {
                        id:14,
                        model:'Wheelbase (mm)',
                        petrol:'2580',
                        diesel:'2580',
                        category:'Dimensions',
                    },
                    {
                        id:15,
                        model:'Size',
                        petrol:'185/65 R15(Magna), 195/55 R16 (Sportz), 195/55 R16 (Asta, Asta (O))',
                        diesel:'185/65 R15(Magna), 195/55 R16 (Sportz), 195/55 R16 (Asta, Asta (O))',
                        category:'Tyre Size',
                    },
                    {
                        id:16,
                        model:'Spare Tyre',
                        petrol:'185/70 R14 (Magna), 185/65 R15 (Sportz, Asta, Asta (O))',
                        diesel:'185/70 R14 (Magna), 185/65 R15 (Sportz, Asta, Asta (O))',
                        category:'Tyre Size',
                    }
                ],
                car_features:[
                    {
                        id:1,
                        variant_id:1,
                        category:'Exterior',
                        feature:'Standard Halogen Headlamps',
                        value:'Yes'
                    },
                    {
                        id:2,
                        variant_id:1,
                        category:'Exterior',
                        feature:'High Gloss Front Grille',
                        value:'Yes'
                    },
                    {
                        id:3,
                        variant_id:1,
                        category:'Exterior',
                        feature:'B-Pillar Blackout',
                        value:'Yes'
                    },
                    {
                        id:4,
                        variant_id:2,
                        category:'Exterior',
                        feature:'C Pillar Black Finish',
                        value:'Yes'
                    },
                    {
                        id:5,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Bumper',
                        value:'Yes'
                    },
                    {
                        id:6,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Outside Mirrors',
                        value:'Yes'
                    },
                    {
                        id:7,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Outside Door Handles',
                        value:'Yes'
                    },
                    {
                        id:8,
                        variant_id:1,
                        category:'Interior',
                        feature:'Fabric Seat Upholstery-with Copper Stitching',
                        value:'Yes'
                    },
                    {
                        id:9,
                        variant_id:1,
                        category:'Interior',
                        feature:'Sunglass Holder',
                        value:'Yes'
                    },
                    {
                        id:10,
                        variant_id:1,
                        category:'Interior',
                        feature:'2-Tone Beige & Black Interior Color',
                        value:'Yes'
                    },
                    {
                        id:11,
                        variant_id:2,
                        category:'Interior',
                        feature:'Map Pockets',
                        value:'Front & Rear Door'
                    },
                    {
                        id:12,
                        variant_id:2,
                        category:'Interior',
                        feature:'Front Passenger Seat Back Pocket',
                        value:'Yes'
                    },
                    {
                        id:13,
                        variant_id:1,
                        category:'Comfort And Convenience',
                        feature:'Power Windows',
                        value:'Front, Rear'
                    },
                    {
                        id:14,
                        variant_id:1,
                        category:'Comfort And Convenience',
                        feature:'Timelag Power Windows',
                        value:'Yes'
                    },
                    {
                        id:15,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Switch Illumination Driver side Power Windows',
                        value:'Yes'
                    },
                    {
                        id:16,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Air Conditioner',
                        value:'Manual'
                    },
                    {
                        id:17,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Power Steering',
                        value:'Motor Driven (Electric)'
                    },
                    {
                        id:18,
                        variant_id:1,
                        category:'Safety And Security',
                        feature:'Airbag',
                        value:'Driver & Passenger'
                    },
                    {
                        id:19,
                        variant_id:1,
                        category:'Safety And Security',
                        feature:'ABS with EBD',
                        value:'Yes'
                    },
                    {
                        id:20,
                        variant_id:2,
                        category:'Safety And Security',
                        feature:'Fog Lamps',
                        value:'Front Projector'
                    },
                    {
                        id:21,
                        variant_id:2,
                        category:'Safety And Security',
                        feature:'Central Locking',
                        value:'Yes'
                    },
                    {
                        id:22,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'DRM',
                        value:'Yes'
                    },
                    {
                        id:23,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'2-DIN Radio+MP3 Audio',
                        value:'Yes'
                    },
                    {
                        id:24,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'Speakers',
                        value:'Front & Rear'
                    },
                    {
                        id:25,
                        variant_id:2,
                        category:'Audio & Entertainment',
                        feature:'Tweeters',
                        value:'Front Only'
                    }
                ],
                price:'8,60,600',
                price2:'7,79,500',
                description:"Hyundai Aura - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            },
            {
                id:6,
                name:'Hyundai Verna',
                image:'car15.jpg',
                poster_image:'car5.jpg',
                overview_image:'car5.webp',
                power:' 123 PS @ 6,400 RPM',
                power2:'128 PS @ 4,000 RPM',
                transmission:'Manual,Automatic',
                transmission2:'Manual,Automatic',
                mileage:'17.7 Kmpl',
                mileage2:'25 Kmpl',
                category:'Sedan',
                highlights:[
                    {
                        id:1,
                        name:'Oxyboost Air Purifier With Air Quality Indicator',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'1.jpg'
                    },
                    {
                        id:2,
                        name:'Wireless Charger With Cooling Pad',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'2.jpg'
                    },
                    {
                        id:3,
                        name:'Soothing Blue Ambient Lighting',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'3.jpg'
                    },
                    {
                        id:4,
                        name:'Electric Sunroof',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'4.jpg'
                    },
                    {
                        id:5,
                        name:'26.03 Cm HD Touchscreen Infotainment & Navigation System',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'5.jpg'
                    },
                    {
                        id:6,
                        name:'Bose Premium 7 Speaker System',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'6.jpg'
                    },
                    {
                        id:7,
                        name:'Hyundai BlueLink With Over The Air (OTA) Map',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'7.jpg'
                    },
                    {
                        id:8,
                        name:'Front Grille',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'8.jpg'
                    },
                    {
                        id:9,
                        name:'Superior Turbo GDi Engine Lightening Fast',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'9.jpg'
                    },
                    {
                        id:10,
                        name:'Metal Pedals',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'10.jpg'
                    },
                    {
                        id:11,
                        name:'Premium Leather* Seat Upholstery',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'11.jpg'
                    },
                    {
                        id:12,
                        name:'Turbo Branding On Front Grille',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'12.jpg'
                    }
                ],
                car_gallery:[
                    {
                        id:1,
                        image:'21.jpg'
                    },
                    {
                        id:2,
                        image:'22.jpg'
                    },
                    {
                        id:3,
                        image:'23.jpg'
                    },
                    {
                        id:4,
                        image:'24.jpg'
                    }
                ],
                video_link:'XsBBeAz3EeQ',
                car_colours:[
                    {
                        id:1,
                        title:'Hyundai All New Verna Titan Grey ',
                        colour1:'#595f63',
                        colour2:'#595f63',
                        image:'17.png'
                    },
                    {
                        id:2,
                        title:'Hyundai All New Verna Starry Night ',
                        colour1:'#2c2e43',
                        colour2:'#2c2e43',
                        image:'18.png'
                    },
                    {
                        id:3,
                        title:'Hyundai All New Verna Phantom Black  ',
                        colour1:'#000000',
                        colour2:'#000000',
                        image:'19.png'
                    },
                    {
                        id:4,
                        title:'Hyundai All New Verna Fiery Red ',
                        colour1:'#ad1518',
                        colour2:'#ad1518',
                        image:'20.png'
                    }
                ],
                car_specs:[
                    {
                        id:1,
                        model:'Max. Power (ps / rpm)',
                        petrol:'88 (IVT) @ 6000 - 120 (DCT, iMT) @ 6000',
                        diesel:'100 @ 4000',
                        category:'Engine',
                    },
                    {
                        id:2,
                        model:'Displacement (cc)',
                        petrol:'1197 | 998 (1.0 Turbo GDI)',
                        diesel:'1493',
                        category:'Engine',
                    },
                    {
                        id:3,
                        model:'Max. Torque (kgm / rpm)',
                        petrol:'11.7 @ 4200 - 17.5 @ 1500 ~ 4000',
                        diesel:'24.5 @ 1500 ~ 2750',
                        category:'Engine',
                    },
                    {
                        id:4,
                        model:'Transmission type',
                        petrol:'5-7 speed (5 MT - 7 DCT)',
                        diesel:'6-speed (6 MT)',
                        category:'Transmission',
                    },
                    {
                        id:5,
                        model:'Front',
                        petrol:'McPherson strut',
                        diesel:'McPherson strut',
                        category:'Suspension',
                    },
                    {
                        id:6,
                        model:'Rear',
                        petrol:'Coupled torsion beam axle',
                        diesel:'Coupled torsion beam axle',
                        category:'Suspension',
                    },
                    {
                        id:7,
                        model:'Shock Absorber',
                        petrol:'Gas Type',
                        diesel:'Gas Type',
                        category:'Suspension',
                    },
                    {
                        id:8,
                        model:'Front',
                        petrol:'Disc',
                        diesel:'Disc',
                        category:'Brakes',
                    },
                    {
                        id:9,
                        model:'Rear',
                        petrol:'Drum',
                        diesel:'Drum',
                        category:'Brakes',
                    },
                    {
                        id:10,
                        model:'Fuel Tank Capacity (Ltrs)',
                        petrol:'37 L',
                        diesel:'37 L',
                        category:'Dimensions',
                    },
                    {
                        id:11,
                        model:'Overall length (mm)',
                        petrol:'3995',
                        diesel:'3995',
                        category:'Dimensions',
                    },
                    {
                        id:12,
                        model:'Overall width (mm)',
                        petrol:'1775',
                        diesel:'1775',
                        category:'Dimensions',
                    },
                    {
                        id:13,
                        model:'Overall height (mm)',
                        petrol:'1505',
                        diesel:'1505',
                        category:'Dimensions',
                    },
                    {
                        id:14,
                        model:'Wheelbase (mm)',
                        petrol:'2580',
                        diesel:'2580',
                        category:'Dimensions',
                    },
                    {
                        id:15,
                        model:'Size',
                        petrol:'185/65 R15(Magna), 195/55 R16 (Sportz), 195/55 R16 (Asta, Asta (O))',
                        diesel:'185/65 R15(Magna), 195/55 R16 (Sportz), 195/55 R16 (Asta, Asta (O))',
                        category:'Tyre Size',
                    },
                    {
                        id:16,
                        model:'Spare Tyre',
                        petrol:'185/70 R14 (Magna), 185/65 R15 (Sportz, Asta, Asta (O))',
                        diesel:'185/70 R14 (Magna), 185/65 R15 (Sportz, Asta, Asta (O))',
                        category:'Tyre Size',
                    }
                ],
                car_features:[
                    {
                        id:1,
                        variant_id:1,
                        category:'Exterior',
                        feature:'Standard Halogen Headlamps',
                        value:'Yes'
                    },
                    {
                        id:2,
                        variant_id:1,
                        category:'Exterior',
                        feature:'High Gloss Front Grille',
                        value:'Yes'
                    },
                    {
                        id:3,
                        variant_id:1,
                        category:'Exterior',
                        feature:'B-Pillar Blackout',
                        value:'Yes'
                    },
                    {
                        id:4,
                        variant_id:2,
                        category:'Exterior',
                        feature:'C Pillar Black Finish',
                        value:'Yes'
                    },
                    {
                        id:5,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Bumper',
                        value:'Yes'
                    },
                    {
                        id:6,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Outside Mirrors',
                        value:'Yes'
                    },
                    {
                        id:7,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Outside Door Handles',
                        value:'Yes'
                    },
                    {
                        id:8,
                        variant_id:1,
                        category:'Interior',
                        feature:'Fabric Seat Upholstery-with Copper Stitching',
                        value:'Yes'
                    },
                    {
                        id:9,
                        variant_id:1,
                        category:'Interior',
                        feature:'Sunglass Holder',
                        value:'Yes'
                    },
                    {
                        id:10,
                        variant_id:1,
                        category:'Interior',
                        feature:'2-Tone Beige & Black Interior Color',
                        value:'Yes'
                    },
                    {
                        id:11,
                        variant_id:2,
                        category:'Interior',
                        feature:'Map Pockets',
                        value:'Front & Rear Door'
                    },
                    {
                        id:12,
                        variant_id:2,
                        category:'Interior',
                        feature:'Front Passenger Seat Back Pocket',
                        value:'Yes'
                    },
                    {
                        id:13,
                        variant_id:1,
                        category:'Comfort And Convenience',
                        feature:'Power Windows',
                        value:'Front, Rear'
                    },
                    {
                        id:14,
                        variant_id:1,
                        category:'Comfort And Convenience',
                        feature:'Timelag Power Windows',
                        value:'Yes'
                    },
                    {
                        id:15,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Switch Illumination Driver side Power Windows',
                        value:'Yes'
                    },
                    {
                        id:16,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Air Conditioner',
                        value:'Manual'
                    },
                    {
                        id:17,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Power Steering',
                        value:'Motor Driven (Electric)'
                    },
                    {
                        id:18,
                        variant_id:1,
                        category:'Safety And Security',
                        feature:'Airbag',
                        value:'Driver & Passenger'
                    },
                    {
                        id:19,
                        variant_id:1,
                        category:'Safety And Security',
                        feature:'ABS with EBD',
                        value:'Yes'
                    },
                    {
                        id:20,
                        variant_id:2,
                        category:'Safety And Security',
                        feature:'Fog Lamps',
                        value:'Front Projector'
                    },
                    {
                        id:21,
                        variant_id:2,
                        category:'Safety And Security',
                        feature:'Central Locking',
                        value:'Yes'
                    },
                    {
                        id:22,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'DRM',
                        value:'Yes'
                    },
                    {
                        id:23,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'2-DIN Radio+MP3 Audio',
                        value:'Yes'
                    },
                    {
                        id:24,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'Speakers',
                        value:'Front & Rear'
                    },
                    {
                        id:25,
                        variant_id:2,
                        category:'Audio & Entertainment',
                        feature:'Tweeters',
                        value:'Front Only'
                    }
                ],
                price:'9,02,900',
                price2:'',
                description:"Hyundai Verna - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            },
            {
                id:7,
                name:'Hyundai ELANTRA',
                image:'car11.webp',
                poster_image:'car6.jpg',
                overview_image:'car6.webp',
                power:' 152 PS @ 6,200 RPM',
                transmission:'Manual,Automatic',
                mileage:'13.03 KMPL',
                category:'Sedan',
                highlights:[
                    {
                        id:1,
                        name:'Oxyboost Air Purifier With Air Quality Indicator',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'1.jpg'
                    },
                    {
                        id:2,
                        name:'Wireless Charger With Cooling Pad',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'2.jpg'
                    },
                    {
                        id:3,
                        name:'Soothing Blue Ambient Lighting',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'3.jpg'
                    },
                    {
                        id:4,
                        name:'Electric Sunroof',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'4.jpg'
                    },
                    {
                        id:5,
                        name:'26.03 Cm HD Touchscreen Infotainment & Navigation System',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'5.jpg'
                    },
                    {
                        id:6,
                        name:'Bose Premium 7 Speaker System',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'6.jpg'
                    },
                    {
                        id:7,
                        name:'Hyundai BlueLink With Over The Air (OTA) Map',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'7.jpg'
                    },
                    {
                        id:8,
                        name:'Front Grille',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'8.jpg'
                    },
                    {
                        id:9,
                        name:'Superior Turbo GDi Engine Lightening Fast',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'9.jpg'
                    },
                    {
                        id:10,
                        name:'Metal Pedals',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'10.jpg'
                    },
                    {
                        id:11,
                        name:'Premium Leather* Seat Upholstery',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'11.jpg'
                    },
                    {
                        id:12,
                        name:'Turbo Branding On Front Grille',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'12.jpg'
                    }
                ],
                car_gallery:[
                    {
                        id:1,
                        image:'25.jpg'
                    },
                    {
                        id:2,
                        image:'26.jpg'
                    },
                    {
                        id:3,
                        image:'27.jpg'
                    },
                    {
                        id:4,
                        image:'28.jpg'
                    }
                ],
                video_link:'KDz64uFl3tM',
                car_colours:[
                    {
                        id:1,
                        title:'Hyundai All New Elantra Fiery Red ',
                        colour1:'#9d121e',
                        colour2:'#9d121e',
                        image:'21.jpg'
                    },
                    {
                        id:2,
                        title:'Hyundai All New Elantra Marina Blue ',
                        colour1:'#004383',
                        colour2:'#004383',
                        image:'22.jpg'
                    },
                    {
                        id:3,
                        title:'Hyundai All New Elantra Polar White ',
                        colour1:'#f2f7f2',
                        colour2:'#f2f7f2',
                        image:'23.jpg'
                    },
                    {
                        id:4,
                        title:'Hyundai All New Elantra Phantom Black ',
                        colour1:'#151515',
                        colour2:'#151515',
                        image:'24.jpg'
                    }
                ],
                car_specs:[
                    {
                        id:1,
                        model:'Max. Power (ps / rpm)',
                        petrol:'88 (IVT) @ 6000 - 120 (DCT, iMT) @ 6000',
                        diesel:'100 @ 4000',
                        category:'Engine',
                    },
                    {
                        id:2,
                        model:'Displacement (cc)',
                        petrol:'1197 | 998 (1.0 Turbo GDI)',
                        diesel:'1493',
                        category:'Engine',
                    },
                    {
                        id:3,
                        model:'Max. Torque (kgm / rpm)',
                        petrol:'11.7 @ 4200 - 17.5 @ 1500 ~ 4000',
                        diesel:'24.5 @ 1500 ~ 2750',
                        category:'Engine',
                    },
                    {
                        id:4,
                        model:'Transmission type',
                        petrol:'5-7 speed (5 MT - 7 DCT)',
                        diesel:'6-speed (6 MT)',
                        category:'Transmission',
                    },
                    {
                        id:5,
                        model:'Front',
                        petrol:'McPherson strut',
                        diesel:'McPherson strut',
                        category:'Suspension',
                    },
                    {
                        id:6,
                        model:'Rear',
                        petrol:'Coupled torsion beam axle',
                        diesel:'Coupled torsion beam axle',
                        category:'Suspension',
                    },
                    {
                        id:7,
                        model:'Shock Absorber',
                        petrol:'Gas Type',
                        diesel:'Gas Type',
                        category:'Suspension',
                    },
                    {
                        id:8,
                        model:'Front',
                        petrol:'Disc',
                        diesel:'Disc',
                        category:'Brakes',
                    },
                    {
                        id:9,
                        model:'Rear',
                        petrol:'Drum',
                        diesel:'Drum',
                        category:'Brakes',
                    },
                    {
                        id:10,
                        model:'Fuel Tank Capacity (Ltrs)',
                        petrol:'37 L',
                        diesel:'37 L',
                        category:'Dimensions',
                    },
                    {
                        id:11,
                        model:'Overall length (mm)',
                        petrol:'3995',
                        diesel:'3995',
                        category:'Dimensions',
                    },
                    {
                        id:12,
                        model:'Overall width (mm)',
                        petrol:'1775',
                        diesel:'1775',
                        category:'Dimensions',
                    },
                    {
                        id:13,
                        model:'Overall height (mm)',
                        petrol:'1505',
                        diesel:'1505',
                        category:'Dimensions',
                    },
                    {
                        id:14,
                        model:'Wheelbase (mm)',
                        petrol:'2580',
                        diesel:'2580',
                        category:'Dimensions',
                    },
                    {
                        id:15,
                        model:'Size',
                        petrol:'185/65 R15(Magna), 195/55 R16 (Sportz), 195/55 R16 (Asta, Asta (O))',
                        diesel:'185/65 R15(Magna), 195/55 R16 (Sportz), 195/55 R16 (Asta, Asta (O))',
                        category:'Tyre Size',
                    },
                    {
                        id:16,
                        model:'Spare Tyre',
                        petrol:'185/70 R14 (Magna), 185/65 R15 (Sportz, Asta, Asta (O))',
                        diesel:'185/70 R14 (Magna), 185/65 R15 (Sportz, Asta, Asta (O))',
                        category:'Tyre Size',
                    }
                ],
                car_features:[
                    {
                        id:1,
                        variant_id:1,
                        category:'Exterior',
                        feature:'Standard Halogen Headlamps',
                        value:'Yes'
                    },
                    {
                        id:2,
                        variant_id:1,
                        category:'Exterior',
                        feature:'High Gloss Front Grille',
                        value:'Yes'
                    },
                    {
                        id:3,
                        variant_id:1,
                        category:'Exterior',
                        feature:'B-Pillar Blackout',
                        value:'Yes'
                    },
                    {
                        id:4,
                        variant_id:2,
                        category:'Exterior',
                        feature:'C Pillar Black Finish',
                        value:'Yes'
                    },
                    {
                        id:5,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Bumper',
                        value:'Yes'
                    },
                    {
                        id:6,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Outside Mirrors',
                        value:'Yes'
                    },
                    {
                        id:7,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Outside Door Handles',
                        value:'Yes'
                    },
                    {
                        id:8,
                        variant_id:1,
                        category:'Interior',
                        feature:'Fabric Seat Upholstery-with Copper Stitching',
                        value:'Yes'
                    },
                    {
                        id:9,
                        variant_id:1,
                        category:'Interior',
                        feature:'Sunglass Holder',
                        value:'Yes'
                    },
                    {
                        id:10,
                        variant_id:1,
                        category:'Interior',
                        feature:'2-Tone Beige & Black Interior Color',
                        value:'Yes'
                    },
                    {
                        id:11,
                        variant_id:2,
                        category:'Interior',
                        feature:'Map Pockets',
                        value:'Front & Rear Door'
                    },
                    {
                        id:12,
                        variant_id:2,
                        category:'Interior',
                        feature:'Front Passenger Seat Back Pocket',
                        value:'Yes'
                    },
                    {
                        id:13,
                        variant_id:1,
                        category:'Comfort And Convenience',
                        feature:'Power Windows',
                        value:'Front, Rear'
                    },
                    {
                        id:14,
                        variant_id:1,
                        category:'Comfort And Convenience',
                        feature:'Timelag Power Windows',
                        value:'Yes'
                    },
                    {
                        id:15,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Switch Illumination Driver side Power Windows',
                        value:'Yes'
                    },
                    {
                        id:16,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Air Conditioner',
                        value:'Manual'
                    },
                    {
                        id:17,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Power Steering',
                        value:'Motor Driven (Electric)'
                    },
                    {
                        id:18,
                        variant_id:1,
                        category:'Safety And Security',
                        feature:'Airbag',
                        value:'Driver & Passenger'
                    },
                    {
                        id:19,
                        variant_id:1,
                        category:'Safety And Security',
                        feature:'ABS with EBD',
                        value:'Yes'
                    },
                    {
                        id:20,
                        variant_id:2,
                        category:'Safety And Security',
                        feature:'Fog Lamps',
                        value:'Front Projector'
                    },
                    {
                        id:21,
                        variant_id:2,
                        category:'Safety And Security',
                        feature:'Central Locking',
                        value:'Yes'
                    },
                    {
                        id:22,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'DRM',
                        value:'Yes'
                    },
                    {
                        id:23,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'2-DIN Radio+MP3 Audio',
                        value:'Yes'
                    },
                    {
                        id:24,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'Speakers',
                        value:'Front & Rear'
                    },
                    {
                        id:25,
                        variant_id:2,
                        category:'Audio & Entertainment',
                        feature:'Tweeters',
                        value:'Front Only'
                    }
                ],
                price:'10,68,000',
                description:"Hyundai ELANTRA - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            },
            {
                id:8,
                name:'Hyundai Tuscon',
                image:'car18.webp',
                poster_image:'car10.jpg',
                overview_image:'car10.webp',
                power:' 152 PS @ 6,200 RPM',
                power2:'',
                transmission:'Manual,Automatic',
                transmission2:'',
                mileage:'16.3 Kmpl',
                mileage2:'',
                category:'SUV',
                highlights:[
                    {
                        id:1,
                        name:'Oxyboost Air Purifier With Air Quality Indicator',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'1.jpg'
                    },
                    {
                        id:2,
                        name:'Wireless Charger With Cooling Pad',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'2.jpg'
                    },
                    {
                        id:3,
                        name:'Soothing Blue Ambient Lighting',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'3.jpg'
                    },
                    {
                        id:4,
                        name:'Electric Sunroof',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'4.jpg'
                    },
                    {
                        id:5,
                        name:'26.03 Cm HD Touchscreen Infotainment & Navigation System',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'5.jpg'
                    },
                    {
                        id:6,
                        name:'Bose Premium 7 Speaker System',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'6.jpg'
                    },
                    {
                        id:7,
                        name:'Hyundai BlueLink With Over The Air (OTA) Map',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'7.jpg'
                    },
                    {
                        id:8,
                        name:'Front Grille',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'8.jpg'
                    },
                    {
                        id:9,
                        name:'Superior Turbo GDi Engine Lightening Fast',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'9.jpg'
                    },
                    {
                        id:10,
                        name:'Metal Pedals',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'10.jpg'
                    },
                    {
                        id:11,
                        name:'Premium Leather* Seat Upholstery',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'11.jpg'
                    },
                    {
                        id:12,
                        name:'Turbo Branding On Front Grille',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'12.jpg'
                    }
                ],
                car_gallery:[
                    {
                        id:1,
                        image:'29.jpg'
                    },
                    {
                        id:2,
                        image:'30.jpg'
                    },
                    {
                        id:3,
                        image:'31.jpg'
                    },
                    {
                        id:4,
                        image:'32.jpg'
                    }
                ],
                video_link:'exMC7ELHgNc',
                car_colours:[
                    {
                        id:1,
                        title:'Hyundai All New Tucson Polar White',
                        colour1:'#f6f6f6',
                        colour2:'#f6f6f6',
                        image:'25.jpg'
                    },
                    {
                        id:2,
                        title:'Hyundai All New Tucson Starry Night ',
                        colour1:'#171d30',
                        colour2:'#171d30',
                        image:'26.jpg'
                    },
                    {
                        id:3,
                        title:'Hyundai All New Tucson Phantom Black ',
                        colour1:'#151517',
                        colour2:'#151517',
                        image:'27.jpg'
                    },
                    {
                        id:4,
                        title:'Hyundai All New Tucson Typhoon Silver ',
                        colour1:'#171d30',
                        colour2:'#171d30',
                        image:'28.jpg'
                    }
                ],
                car_specs:[
                    {
                        id:1,
                        model:'Max. Power (ps / rpm)',
                        petrol:'88 (IVT) @ 6000 - 120 (DCT, iMT) @ 6000',
                        diesel:'100 @ 4000',
                        category:'Engine',
                    },
                    {
                        id:2,
                        model:'Displacement (cc)',
                        petrol:'1197 | 998 (1.0 Turbo GDI)',
                        diesel:'1493',
                        category:'Engine',
                    },
                    {
                        id:3,
                        model:'Max. Torque (kgm / rpm)',
                        petrol:'11.7 @ 4200 - 17.5 @ 1500 ~ 4000',
                        diesel:'24.5 @ 1500 ~ 2750',
                        category:'Engine',
                    },
                    {
                        id:4,
                        model:'Transmission type',
                        petrol:'5-7 speed (5 MT - 7 DCT)',
                        diesel:'6-speed (6 MT)',
                        category:'Transmission',
                    },
                    {
                        id:5,
                        model:'Front',
                        petrol:'McPherson strut',
                        diesel:'McPherson strut',
                        category:'Suspension',
                    },
                    {
                        id:6,
                        model:'Rear',
                        petrol:'Coupled torsion beam axle',
                        diesel:'Coupled torsion beam axle',
                        category:'Suspension',
                    },
                    {
                        id:7,
                        model:'Shock Absorber',
                        petrol:'Gas Type',
                        diesel:'Gas Type',
                        category:'Suspension',
                    },
                    {
                        id:8,
                        model:'Front',
                        petrol:'Disc',
                        diesel:'Disc',
                        category:'Brakes',
                    },
                    {
                        id:9,
                        model:'Rear',
                        petrol:'Drum',
                        diesel:'Drum',
                        category:'Brakes',
                    },
                    {
                        id:10,
                        model:'Fuel Tank Capacity (Ltrs)',
                        petrol:'37 L',
                        diesel:'37 L',
                        category:'Dimensions',
                    },
                    {
                        id:11,
                        model:'Overall length (mm)',
                        petrol:'3995',
                        diesel:'3995',
                        category:'Dimensions',
                    },
                    {
                        id:12,
                        model:'Overall width (mm)',
                        petrol:'1775',
                        diesel:'1775',
                        category:'Dimensions',
                    },
                    {
                        id:13,
                        model:'Overall height (mm)',
                        petrol:'1505',
                        diesel:'1505',
                        category:'Dimensions',
                    },
                    {
                        id:14,
                        model:'Wheelbase (mm)',
                        petrol:'2580',
                        diesel:'2580',
                        category:'Dimensions',
                    },
                    {
                        id:15,
                        model:'Size',
                        petrol:'185/65 R15(Magna), 195/55 R16 (Sportz), 195/55 R16 (Asta, Asta (O))',
                        diesel:'185/65 R15(Magna), 195/55 R16 (Sportz), 195/55 R16 (Asta, Asta (O))',
                        category:'Tyre Size',
                    },
                    {
                        id:16,
                        model:'Spare Tyre',
                        petrol:'185/70 R14 (Magna), 185/65 R15 (Sportz, Asta, Asta (O))',
                        diesel:'185/70 R14 (Magna), 185/65 R15 (Sportz, Asta, Asta (O))',
                        category:'Tyre Size',
                    }
                ],
                car_features:[
                    {
                        id:1,
                        variant_id:1,
                        category:'Exterior',
                        feature:'Standard Halogen Headlamps',
                        value:'Yes'
                    },
                    {
                        id:2,
                        variant_id:1,
                        category:'Exterior',
                        feature:'High Gloss Front Grille',
                        value:'Yes'
                    },
                    {
                        id:3,
                        variant_id:1,
                        category:'Exterior',
                        feature:'B-Pillar Blackout',
                        value:'Yes'
                    },
                    {
                        id:4,
                        variant_id:2,
                        category:'Exterior',
                        feature:'C Pillar Black Finish',
                        value:'Yes'
                    },
                    {
                        id:5,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Bumper',
                        value:'Yes'
                    },
                    {
                        id:6,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Outside Mirrors',
                        value:'Yes'
                    },
                    {
                        id:7,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Outside Door Handles',
                        value:'Yes'
                    },
                    {
                        id:8,
                        variant_id:1,
                        category:'Interior',
                        feature:'Fabric Seat Upholstery-with Copper Stitching',
                        value:'Yes'
                    },
                    {
                        id:9,
                        variant_id:1,
                        category:'Interior',
                        feature:'Sunglass Holder',
                        value:'Yes'
                    },
                    {
                        id:10,
                        variant_id:1,
                        category:'Interior',
                        feature:'2-Tone Beige & Black Interior Color',
                        value:'Yes'
                    },
                    {
                        id:11,
                        variant_id:2,
                        category:'Interior',
                        feature:'Map Pockets',
                        value:'Front & Rear Door'
                    },
                    {
                        id:12,
                        variant_id:2,
                        category:'Interior',
                        feature:'Front Passenger Seat Back Pocket',
                        value:'Yes'
                    },
                    {
                        id:13,
                        variant_id:1,
                        category:'Comfort And Convenience',
                        feature:'Power Windows',
                        value:'Front, Rear'
                    },
                    {
                        id:14,
                        variant_id:1,
                        category:'Comfort And Convenience',
                        feature:'Timelag Power Windows',
                        value:'Yes'
                    },
                    {
                        id:15,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Switch Illumination Driver side Power Windows',
                        value:'Yes'
                    },
                    {
                        id:16,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Air Conditioner',
                        value:'Manual'
                    },
                    {
                        id:17,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Power Steering',
                        value:'Motor Driven (Electric)'
                    },
                    {
                        id:18,
                        variant_id:1,
                        category:'Safety And Security',
                        feature:'Airbag',
                        value:'Driver & Passenger'
                    },
                    {
                        id:19,
                        variant_id:1,
                        category:'Safety And Security',
                        feature:'ABS with EBD',
                        value:'Yes'
                    },
                    {
                        id:20,
                        variant_id:2,
                        category:'Safety And Security',
                        feature:'Fog Lamps',
                        value:'Front Projector'
                    },
                    {
                        id:21,
                        variant_id:2,
                        category:'Safety And Security',
                        feature:'Central Locking',
                        value:'Yes'
                    },
                    {
                        id:22,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'DRM',
                        value:'Yes'
                    },
                    {
                        id:23,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'2-DIN Radio+MP3 Audio',
                        value:'Yes'
                    },
                    {
                        id:24,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'Speakers',
                        value:'Front & Rear'
                    },
                    {
                        id:25,
                        variant_id:2,
                        category:'Audio & Entertainment',
                        feature:'Tweeters',
                        value:'Front Only'
                    }
                ],
                price:'17,60,000',
                price2:'',
                description:"Hyundai Tuscon - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            },
            {
                id:9,
                name:'Hyundai Venue',
                image:'car4.webp',
                poster_image:'car7.jpg',
                overview_image:'car7.webp',
                power:' Kappa 1.2 MPI: 83 Ps/6000 Rpm',
                power2:'U2 1.4 CRDi: 90 Ps /4000 Rpm',
                transmission:'Manual,Automatic',
                transmission2:'Manual',
                mileage:'17.52 Kmpl',
                mileage2:'23.7 Kmpl',
                category:'SUV',
                highlights:[
                    {
                        id:1,
                        name:'Oxyboost Air Purifier With Air Quality Indicator',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'1.jpg'
                    },
                    {
                        id:2,
                        name:'Wireless Charger With Cooling Pad',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'2.jpg'
                    },
                    {
                        id:3,
                        name:'Soothing Blue Ambient Lighting',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'3.jpg'
                    },
                    {
                        id:4,
                        name:'Electric Sunroof',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'4.jpg'
                    },
                    {
                        id:5,
                        name:'26.03 Cm HD Touchscreen Infotainment & Navigation System',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'5.jpg'
                    },
                    {
                        id:6,
                        name:'Bose Premium 7 Speaker System',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'6.jpg'
                    },
                    {
                        id:7,
                        name:'Hyundai BlueLink With Over The Air (OTA) Map',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'7.jpg'
                    },
                    {
                        id:8,
                        name:'Front Grille',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'8.jpg'
                    },
                    {
                        id:9,
                        name:'Superior Turbo GDi Engine Lightening Fast',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'9.jpg'
                    },
                    {
                        id:10,
                        name:'Metal Pedals',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'10.jpg'
                    },
                    {
                        id:11,
                        name:'Premium Leather* Seat Upholstery',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'11.jpg'
                    },
                    {
                        id:12,
                        name:'Turbo Branding On Front Grille',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'12.jpg'
                    }
                ],
                car_gallery:[
                    {
                        id:1,
                        image:'33.jpg'
                    },
                    {
                        id:2,
                        image:'34.jpg'
                    },
                    {
                        id:3,
                        image:'35.jpg'
                    },
                    {
                        id:4,
                        image:'36.jpg'
                    }
                ],
                video_link:'_rSAGRa7WZI',
                car_colours:[
                    {
                        id:1,
                        title:'Hyundai Venue Deep_Forest ',
                        colour1:'#2f3728',
                        colour2:'#2f3728',
                        image:'29.png'
                    },
                    {
                        id:2,
                        title:'Hyundai Venue Denim Blue ',
                        colour1:'#151e3d',
                        colour2:'#151e3d',
                        image:'30.png'
                    },
                    {
                        id:3,
                        title:'Hyundai Venue Fiery Red ',
                        colour1:'#9d1414',
                        colour2:'#9d1414',
                        image:'31.png'
                    },
                    {
                        id:4,
                        title:'Hyundai Venue Denim Blue Dual Tone ',
                        colour1:'#ffffff',
                        colour2:'#151e3d',
                        image:'32.png'
                    }
                ],
                car_specs:[
                    {
                        id:1,
                        model:'Max. Power (ps / rpm)',
                        petrol:'88 (IVT) @ 6000 - 120 (DCT, iMT) @ 6000',
                        diesel:'100 @ 4000',
                        category:'Engine',
                    },
                    {
                        id:2,
                        model:'Displacement (cc)',
                        petrol:'1197 | 998 (1.0 Turbo GDI)',
                        diesel:'1493',
                        category:'Engine',
                    },
                    {
                        id:3,
                        model:'Max. Torque (kgm / rpm)',
                        petrol:'11.7 @ 4200 - 17.5 @ 1500 ~ 4000',
                        diesel:'24.5 @ 1500 ~ 2750',
                        category:'Engine',
                    },
                    {
                        id:4,
                        model:'Transmission type',
                        petrol:'5-7 speed (5 MT - 7 DCT)',
                        diesel:'6-speed (6 MT)',
                        category:'Transmission',
                    },
                    {
                        id:5,
                        model:'Front',
                        petrol:'McPherson strut',
                        diesel:'McPherson strut',
                        category:'Suspension',
                    },
                    {
                        id:6,
                        model:'Rear',
                        petrol:'Coupled torsion beam axle',
                        diesel:'Coupled torsion beam axle',
                        category:'Suspension',
                    },
                    {
                        id:7,
                        model:'Shock Absorber',
                        petrol:'Gas Type',
                        diesel:'Gas Type',
                        category:'Suspension',
                    },
                    {
                        id:8,
                        model:'Front',
                        petrol:'Disc',
                        diesel:'Disc',
                        category:'Brakes',
                    },
                    {
                        id:9,
                        model:'Rear',
                        petrol:'Drum',
                        diesel:'Drum',
                        category:'Brakes',
                    },
                    {
                        id:10,
                        model:'Fuel Tank Capacity (Ltrs)',
                        petrol:'37 L',
                        diesel:'37 L',
                        category:'Dimensions',
                    },
                    {
                        id:11,
                        model:'Overall length (mm)',
                        petrol:'3995',
                        diesel:'3995',
                        category:'Dimensions',
                    },
                    {
                        id:12,
                        model:'Overall width (mm)',
                        petrol:'1775',
                        diesel:'1775',
                        category:'Dimensions',
                    },
                    {
                        id:13,
                        model:'Overall height (mm)',
                        petrol:'1505',
                        diesel:'1505',
                        category:'Dimensions',
                    },
                    {
                        id:14,
                        model:'Wheelbase (mm)',
                        petrol:'2580',
                        diesel:'2580',
                        category:'Dimensions',
                    },
                    {
                        id:15,
                        model:'Size',
                        petrol:'185/65 R15(Magna), 195/55 R16 (Sportz), 195/55 R16 (Asta, Asta (O))',
                        diesel:'185/65 R15(Magna), 195/55 R16 (Sportz), 195/55 R16 (Asta, Asta (O))',
                        category:'Tyre Size',
                    },
                    {
                        id:16,
                        model:'Spare Tyre',
                        petrol:'185/70 R14 (Magna), 185/65 R15 (Sportz, Asta, Asta (O))',
                        diesel:'185/70 R14 (Magna), 185/65 R15 (Sportz, Asta, Asta (O))',
                        category:'Tyre Size',
                    }
                ],
                car_features:[
                    {
                        id:1,
                        variant_id:1,
                        category:'Exterior',
                        feature:'Standard Halogen Headlamps',
                        value:'Yes'
                    },
                    {
                        id:2,
                        variant_id:1,
                        category:'Exterior',
                        feature:'High Gloss Front Grille',
                        value:'Yes'
                    },
                    {
                        id:3,
                        variant_id:1,
                        category:'Exterior',
                        feature:'B-Pillar Blackout',
                        value:'Yes'
                    },
                    {
                        id:4,
                        variant_id:2,
                        category:'Exterior',
                        feature:'C Pillar Black Finish',
                        value:'Yes'
                    },
                    {
                        id:5,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Bumper',
                        value:'Yes'
                    },
                    {
                        id:6,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Outside Mirrors',
                        value:'Yes'
                    },
                    {
                        id:7,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Outside Door Handles',
                        value:'Yes'
                    },
                    {
                        id:8,
                        variant_id:1,
                        category:'Interior',
                        feature:'Fabric Seat Upholstery-with Copper Stitching',
                        value:'Yes'
                    },
                    {
                        id:9,
                        variant_id:1,
                        category:'Interior',
                        feature:'Sunglass Holder',
                        value:'Yes'
                    },
                    {
                        id:10,
                        variant_id:1,
                        category:'Interior',
                        feature:'2-Tone Beige & Black Interior Color',
                        value:'Yes'
                    },
                    {
                        id:11,
                        variant_id:2,
                        category:'Interior',
                        feature:'Map Pockets',
                        value:'Front & Rear Door'
                    },
                    {
                        id:12,
                        variant_id:2,
                        category:'Interior',
                        feature:'Front Passenger Seat Back Pocket',
                        value:'Yes'
                    },
                    {
                        id:13,
                        variant_id:1,
                        category:'Comfort And Convenience',
                        feature:'Power Windows',
                        value:'Front, Rear'
                    },
                    {
                        id:14,
                        variant_id:1,
                        category:'Comfort And Convenience',
                        feature:'Timelag Power Windows',
                        value:'Yes'
                    },
                    {
                        id:15,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Switch Illumination Driver side Power Windows',
                        value:'Yes'
                    },
                    {
                        id:16,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Air Conditioner',
                        value:'Manual'
                    },
                    {
                        id:17,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Power Steering',
                        value:'Motor Driven (Electric)'
                    },
                    {
                        id:18,
                        variant_id:1,
                        category:'Safety And Security',
                        feature:'Airbag',
                        value:'Driver & Passenger'
                    },
                    {
                        id:19,
                        variant_id:1,
                        category:'Safety And Security',
                        feature:'ABS with EBD',
                        value:'Yes'
                    },
                    {
                        id:20,
                        variant_id:2,
                        category:'Safety And Security',
                        feature:'Fog Lamps',
                        value:'Front Projector'
                    },
                    {
                        id:21,
                        variant_id:2,
                        category:'Safety And Security',
                        feature:'Central Locking',
                        value:'Yes'
                    },
                    {
                        id:22,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'DRM',
                        value:'Yes'
                    },
                    {
                        id:23,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'2-DIN Radio+MP3 Audio',
                        value:'Yes'
                    },
                    {
                        id:24,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'Speakers',
                        value:'Front & Rear'
                    },
                    {
                        id:25,
                        variant_id:2,
                        category:'Audio & Entertainment',
                        feature:'Tweeters',
                        value:'Front Only'
                    }
                ],
                price:'6,75,000',
                price2:'8,16,500',
                description:"Hyundai Venue - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            },
            {
                id:11,
                name:'Hyundai Alcazar',
                image:'car17.jpg',
                poster_image:'car9.jpg',
                overview_image:'car9.webp',
                power:' 117 KW (159 PS) / 6 500 R/Min',
                power2:' 84.6 KW (115 PS)/ 4 000 R/Min',
                transmission:'Manual,Automatic',
                transmission2:'Manual,Automatic',
                mileage:'14.5* Kmpl',
                mileage2:'20.4* Kmpl',
                category:'SUV',
                highlights:[
                    {
                        id:1,
                        name:'Oxyboost Air Purifier With Air Quality Indicator',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'1.jpg'
                    },
                    {
                        id:2,
                        name:'Wireless Charger With Cooling Pad',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'2.jpg'
                    },
                    {
                        id:3,
                        name:'Soothing Blue Ambient Lighting',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'3.jpg'
                    },
                    {
                        id:4,
                        name:'Electric Sunroof',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'4.jpg'
                    },
                    {
                        id:5,
                        name:'26.03 Cm HD Touchscreen Infotainment & Navigation System',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'5.jpg'
                    },
                    {
                        id:6,
                        name:'Bose Premium 7 Speaker System',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'6.jpg'
                    },
                    {
                        id:7,
                        name:'Hyundai BlueLink With Over The Air (OTA) Map',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'7.jpg'
                    },
                    {
                        id:8,
                        name:'Front Grille',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'8.jpg'
                    },
                    {
                        id:9,
                        name:'Superior Turbo GDi Engine Lightening Fast',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'9.jpg'
                    },
                    {
                        id:10,
                        name:'Metal Pedals',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'10.jpg'
                    },
                    {
                        id:11,
                        name:'Premium Leather* Seat Upholstery',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'11.jpg'
                    },
                    {
                        id:12,
                        name:'Turbo Branding On Front Grille',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'12.jpg'
                    }
                ],
                car_gallery:[
                    {
                        id:1,
                        image:'37.webp'
                    },
                    {
                        id:2,
                        image:'38.webp'
                    },
                    {
                        id:3,
                        image:'39.webp'
                    },
                    {
                        id:4,
                        image:'40.webp'
                    }
                ],
                video_link:'i1n_5yo6tQk',
                car_colours:[
                    {
                        id:1,
                        title:'Hyundai Alcazar Phantom Black ',
                        colour1:'#151515',
                        colour2:'#151515',
                        image:'33.webp'
                    },
                    {
                        id:2,
                        title:'Hyundai Alcazar Starry Night ',
                        colour1:'#242736',
                        colour2:'#242736',
                        image:'34.webp'
                    },
                    {
                        id:3,
                        title:'Hyundai Alcazar Taiga Brown ',
                        colour1:'#362b26',
                        colour2:'#362b26',
                        image:'35.webp'
                    },
                    {
                        id:4,
                        title:'Hyundai Alcazar Polar White ',
                        colour1:'#f0f4f5',
                        colour2:'#f0f4f5',
                        image:'36.webp'
                    }
                ],
                car_specs:[
                    {
                        id:1,
                        model:'Max. Power (ps / rpm)',
                        petrol:'88 (IVT) @ 6000 - 120 (DCT, iMT) @ 6000',
                        diesel:'100 @ 4000',
                        category:'Engine',
                    },
                    {
                        id:2,
                        model:'Displacement (cc)',
                        petrol:'1197 | 998 (1.0 Turbo GDI)',
                        diesel:'1493',
                        category:'Engine',
                    },
                    {
                        id:3,
                        model:'Max. Torque (kgm / rpm)',
                        petrol:'11.7 @ 4200 - 17.5 @ 1500 ~ 4000',
                        diesel:'24.5 @ 1500 ~ 2750',
                        category:'Engine',
                    },
                    {
                        id:4,
                        model:'Transmission type',
                        petrol:'5-7 speed (5 MT - 7 DCT)',
                        diesel:'6-speed (6 MT)',
                        category:'Transmission',
                    },
                    {
                        id:5,
                        model:'Front',
                        petrol:'McPherson strut',
                        diesel:'McPherson strut',
                        category:'Suspension',
                    },
                    {
                        id:6,
                        model:'Rear',
                        petrol:'Coupled torsion beam axle',
                        diesel:'Coupled torsion beam axle',
                        category:'Suspension',
                    },
                    {
                        id:7,
                        model:'Shock Absorber',
                        petrol:'Gas Type',
                        diesel:'Gas Type',
                        category:'Suspension',
                    },
                    {
                        id:8,
                        model:'Front',
                        petrol:'Disc',
                        diesel:'Disc',
                        category:'Brakes',
                    },
                    {
                        id:9,
                        model:'Rear',
                        petrol:'Drum',
                        diesel:'Drum',
                        category:'Brakes',
                    },
                    {
                        id:10,
                        model:'Fuel Tank Capacity (Ltrs)',
                        petrol:'37 L',
                        diesel:'37 L',
                        category:'Dimensions',
                    },
                    {
                        id:11,
                        model:'Overall length (mm)',
                        petrol:'3995',
                        diesel:'3995',
                        category:'Dimensions',
                    },
                    {
                        id:12,
                        model:'Overall width (mm)',
                        petrol:'1775',
                        diesel:'1775',
                        category:'Dimensions',
                    },
                    {
                        id:13,
                        model:'Overall height (mm)',
                        petrol:'1505',
                        diesel:'1505',
                        category:'Dimensions',
                    },
                    {
                        id:14,
                        model:'Wheelbase (mm)',
                        petrol:'2580',
                        diesel:'2580',
                        category:'Dimensions',
                    },
                    {
                        id:15,
                        model:'Size',
                        petrol:'185/65 R15(Magna), 195/55 R16 (Sportz), 195/55 R16 (Asta, Asta (O))',
                        diesel:'185/65 R15(Magna), 195/55 R16 (Sportz), 195/55 R16 (Asta, Asta (O))',
                        category:'Tyre Size',
                    },
                    {
                        id:16,
                        model:'Spare Tyre',
                        petrol:'185/70 R14 (Magna), 185/65 R15 (Sportz, Asta, Asta (O))',
                        diesel:'185/70 R14 (Magna), 185/65 R15 (Sportz, Asta, Asta (O))',
                        category:'Tyre Size',
                    }
                ],
                car_features:[
                    {
                        id:1,
                        variant_id:1,
                        category:'Exterior',
                        feature:'Standard Halogen Headlamps',
                        value:'Yes'
                    },
                    {
                        id:2,
                        variant_id:1,
                        category:'Exterior',
                        feature:'High Gloss Front Grille',
                        value:'Yes'
                    },
                    {
                        id:3,
                        variant_id:1,
                        category:'Exterior',
                        feature:'B-Pillar Blackout',
                        value:'Yes'
                    },
                    {
                        id:4,
                        variant_id:2,
                        category:'Exterior',
                        feature:'C Pillar Black Finish',
                        value:'Yes'
                    },
                    {
                        id:5,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Bumper',
                        value:'Yes'
                    },
                    {
                        id:6,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Outside Mirrors',
                        value:'Yes'
                    },
                    {
                        id:7,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Outside Door Handles',
                        value:'Yes'
                    },
                    {
                        id:8,
                        variant_id:1,
                        category:'Interior',
                        feature:'Fabric Seat Upholstery-with Copper Stitching',
                        value:'Yes'
                    },
                    {
                        id:9,
                        variant_id:1,
                        category:'Interior',
                        feature:'Sunglass Holder',
                        value:'Yes'
                    },
                    {
                        id:10,
                        variant_id:1,
                        category:'Interior',
                        feature:'2-Tone Beige & Black Interior Color',
                        value:'Yes'
                    },
                    {
                        id:11,
                        variant_id:2,
                        category:'Interior',
                        feature:'Map Pockets',
                        value:'Front & Rear Door'
                    },
                    {
                        id:12,
                        variant_id:2,
                        category:'Interior',
                        feature:'Front Passenger Seat Back Pocket',
                        value:'Yes'
                    },
                    {
                        id:13,
                        variant_id:1,
                        category:'Comfort And Convenience',
                        feature:'Power Windows',
                        value:'Front, Rear'
                    },
                    {
                        id:14,
                        variant_id:1,
                        category:'Comfort And Convenience',
                        feature:'Timelag Power Windows',
                        value:'Yes'
                    },
                    {
                        id:15,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Switch Illumination Driver side Power Windows',
                        value:'Yes'
                    },
                    {
                        id:16,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Air Conditioner',
                        value:'Manual'
                    },
                    {
                        id:17,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Power Steering',
                        value:'Motor Driven (Electric)'
                    },
                    {
                        id:18,
                        variant_id:1,
                        category:'Safety And Security',
                        feature:'Airbag',
                        value:'Driver & Passenger'
                    },
                    {
                        id:19,
                        variant_id:1,
                        category:'Safety And Security',
                        feature:'ABS with EBD',
                        value:'Yes'
                    },
                    {
                        id:20,
                        variant_id:2,
                        category:'Safety And Security',
                        feature:'Fog Lamps',
                        value:'Front Projector'
                    },
                    {
                        id:21,
                        variant_id:2,
                        category:'Safety And Security',
                        feature:'Central Locking',
                        value:'Yes'
                    },
                    {
                        id:22,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'DRM',
                        value:'Yes'
                    },
                    {
                        id:23,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'2-DIN Radio+MP3 Audio',
                        value:'Yes'
                    },
                    {
                        id:24,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'Speakers',
                        value:'Front & Rear'
                    },
                    {
                        id:25,
                        variant_id:2,
                        category:'Audio & Entertainment',
                        feature:'Tweeters',
                        value:'Front Only'
                    }
                ],
                price:'16,30,300',
                price2:'16,53,300',
                description:"Hyundai Alcazar - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            },
            {
                id:12,
                name:'Hyundai CRETA',
                image:'car19.webp',
                poster_image:'car8.jpg',
                overview_image:'car8.webp',
                power:'121.3 BHP @ 6400 RPM',
                power2:'113.42 BHP @ 4000 RPM',
                transmission:'Manual,Automatic',
                transmission2:'Manual,Automatic',
                mileage:'16.8 - 21.4 KMPL',
                mileage2:'16.9 - 18.5 KMPL',
                category:'SUV',
                highlights:[
                    {
                        id:1,
                        name:'Oxyboost Air Purifier With Air Quality Indicator',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'1.jpg'
                    },
                    {
                        id:2,
                        name:'Wireless Charger With Cooling Pad',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'2.jpg'
                    },
                    {
                        id:3,
                        name:'Soothing Blue Ambient Lighting',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'3.jpg'
                    },
                    {
                        id:4,
                        name:'Electric Sunroof',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'4.jpg'
                    },
                    {
                        id:5,
                        name:'26.03 Cm HD Touchscreen Infotainment & Navigation System',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'5.jpg'
                    },
                    {
                        id:6,
                        name:'Bose Premium 7 Speaker System',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'6.jpg'
                    },
                    {
                        id:7,
                        name:'Hyundai BlueLink With Over The Air (OTA) Map',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'7.jpg'
                    },
                    {
                        id:8,
                        name:'Front Grille',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'8.jpg'
                    },
                    {
                        id:9,
                        name:'Superior Turbo GDi Engine Lightening Fast',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'9.jpg'
                    },
                    {
                        id:10,
                        name:'Metal Pedals',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'10.jpg'
                    },
                    {
                        id:11,
                        name:'Premium Leather* Seat Upholstery',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'11.jpg'
                    },
                    {
                        id:12,
                        name:'Turbo Branding On Front Grille',
                        description:'Its stylish design, sleek lines and bold stance stand out no matter what environment it is in.',
                        image:'12.jpg'
                    }
                ],
                car_gallery:[
                    {
                        id:1,
                        image:'41.jpg'
                    },
                    {
                        id:2,
                        image:'42.jpg'
                    },
                    {
                        id:3,
                        image:'43.jpg'
                    },
                    {
                        id:4,
                        image:'44.jpg'
                    }
                ],
                video_link:'ENLimS5tuww',
                car_colours:[
                    {
                        id:1,
                        title:'Hyundai All New Creta Deep Forest ',
                        colour1:'#2d3537',
                        colour2:'#2d3537',
                        image:'37.png'
                    },
                    {
                        id:2,
                        title:'Hyundai All New Creta Galaxy Blue ',
                        colour1:'#152b5c',
                        colour2:'#152b5c',
                        image:'38.png'
                    },
                    {
                        id:3,
                        title:'Hyundai All New Creta Lava Orange',
                        colour1:'#e34323',
                        colour2:'#e34323',
                        image:'39.png'
                    },
                    {
                        id:4,
                        title:'Hyundai All New Creta Lava Orange Dual Tone ',
                        colour1:'#000000',
                        colour2:'#e34323',
                        image:'40.png'
                    }
                ],
                car_specs:[
                    {
                        id:1,
                        model:'Max. Power (ps / rpm)',
                        petrol:'88 (IVT) @ 6000 - 120 (DCT, iMT) @ 6000',
                        diesel:'100 @ 4000',
                        category:'Engine',
                    },
                    {
                        id:2,
                        model:'Displacement (cc)',
                        petrol:'1197 | 998 (1.0 Turbo GDI)',
                        diesel:'1493',
                        category:'Engine',
                    },
                    {
                        id:3,
                        model:'Max. Torque (kgm / rpm)',
                        petrol:'11.7 @ 4200 - 17.5 @ 1500 ~ 4000',
                        diesel:'24.5 @ 1500 ~ 2750',
                        category:'Engine',
                    },
                    {
                        id:4,
                        model:'Transmission type',
                        petrol:'5-7 speed (5 MT - 7 DCT)',
                        diesel:'6-speed (6 MT)',
                        category:'Transmission',
                    },
                    {
                        id:5,
                        model:'Front',
                        petrol:'McPherson strut',
                        diesel:'McPherson strut',
                        category:'Suspension',
                    },
                    {
                        id:6,
                        model:'Rear',
                        petrol:'Coupled torsion beam axle',
                        diesel:'Coupled torsion beam axle',
                        category:'Suspension',
                    },
                    {
                        id:7,
                        model:'Shock Absorber',
                        petrol:'Gas Type',
                        diesel:'Gas Type',
                        category:'Suspension',
                    },
                    {
                        id:8,
                        model:'Front',
                        petrol:'Disc',
                        diesel:'Disc',
                        category:'Brakes',
                    },
                    {
                        id:9,
                        model:'Rear',
                        petrol:'Drum',
                        diesel:'Drum',
                        category:'Brakes',
                    },
                    {
                        id:10,
                        model:'Fuel Tank Capacity (Ltrs)',
                        petrol:'37 L',
                        diesel:'37 L',
                        category:'Dimensions',
                    },
                    {
                        id:11,
                        model:'Overall length (mm)',
                        petrol:'3995',
                        diesel:'3995',
                        category:'Dimensions',
                    },
                    {
                        id:12,
                        model:'Overall width (mm)',
                        petrol:'1775',
                        diesel:'1775',
                        category:'Dimensions',
                    },
                    {
                        id:13,
                        model:'Overall height (mm)',
                        petrol:'1505',
                        diesel:'1505',
                        category:'Dimensions',
                    },
                    {
                        id:14,
                        model:'Wheelbase (mm)',
                        petrol:'2580',
                        diesel:'2580',
                        category:'Dimensions',
                    },
                    {
                        id:15,
                        model:'Size',
                        petrol:'185/65 R15(Magna), 195/55 R16 (Sportz), 195/55 R16 (Asta, Asta (O))',
                        diesel:'185/65 R15(Magna), 195/55 R16 (Sportz), 195/55 R16 (Asta, Asta (O))',
                        category:'Tyre Size',
                    },
                    {
                        id:16,
                        model:'Spare Tyre',
                        petrol:'185/70 R14 (Magna), 185/65 R15 (Sportz, Asta, Asta (O))',
                        diesel:'185/70 R14 (Magna), 185/65 R15 (Sportz, Asta, Asta (O))',
                        category:'Tyre Size',
                    }
                ],
                car_features:[
                    {
                        id:1,
                        variant_id:1,
                        category:'Exterior',
                        feature:'Standard Halogen Headlamps',
                        value:'Yes'
                    },
                    {
                        id:2,
                        variant_id:1,
                        category:'Exterior',
                        feature:'High Gloss Front Grille',
                        value:'Yes'
                    },
                    {
                        id:3,
                        variant_id:1,
                        category:'Exterior',
                        feature:'B-Pillar Blackout',
                        value:'Yes'
                    },
                    {
                        id:4,
                        variant_id:2,
                        category:'Exterior',
                        feature:'C Pillar Black Finish',
                        value:'Yes'
                    },
                    {
                        id:5,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Bumper',
                        value:'Yes'
                    },
                    {
                        id:6,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Outside Mirrors',
                        value:'Yes'
                    },
                    {
                        id:7,
                        variant_id:2,
                        category:'Exterior',
                        feature:'Body Color Outside Door Handles',
                        value:'Yes'
                    },
                    {
                        id:8,
                        variant_id:1,
                        category:'Interior',
                        feature:'Fabric Seat Upholstery-with Copper Stitching',
                        value:'Yes'
                    },
                    {
                        id:9,
                        variant_id:1,
                        category:'Interior',
                        feature:'Sunglass Holder',
                        value:'Yes'
                    },
                    {
                        id:10,
                        variant_id:1,
                        category:'Interior',
                        feature:'2-Tone Beige & Black Interior Color',
                        value:'Yes'
                    },
                    {
                        id:11,
                        variant_id:2,
                        category:'Interior',
                        feature:'Map Pockets',
                        value:'Front & Rear Door'
                    },
                    {
                        id:12,
                        variant_id:2,
                        category:'Interior',
                        feature:'Front Passenger Seat Back Pocket',
                        value:'Yes'
                    },
                    {
                        id:13,
                        variant_id:1,
                        category:'Comfort And Convenience',
                        feature:'Power Windows',
                        value:'Front, Rear'
                    },
                    {
                        id:14,
                        variant_id:1,
                        category:'Comfort And Convenience',
                        feature:'Timelag Power Windows',
                        value:'Yes'
                    },
                    {
                        id:15,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Switch Illumination Driver side Power Windows',
                        value:'Yes'
                    },
                    {
                        id:16,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Air Conditioner',
                        value:'Manual'
                    },
                    {
                        id:17,
                        variant_id:2,
                        category:'Comfort And Convenience',
                        feature:'Power Steering',
                        value:'Motor Driven (Electric)'
                    },
                    {
                        id:18,
                        variant_id:1,
                        category:'Safety And Security',
                        feature:'Airbag',
                        value:'Driver & Passenger'
                    },
                    {
                        id:19,
                        variant_id:1,
                        category:'Safety And Security',
                        feature:'ABS with EBD',
                        value:'Yes'
                    },
                    {
                        id:20,
                        variant_id:2,
                        category:'Safety And Security',
                        feature:'Fog Lamps',
                        value:'Front Projector'
                    },
                    {
                        id:21,
                        variant_id:2,
                        category:'Safety And Security',
                        feature:'Central Locking',
                        value:'Yes'
                    },
                    {
                        id:22,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'DRM',
                        value:'Yes'
                    },
                    {
                        id:23,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'2-DIN Radio+MP3 Audio',
                        value:'Yes'
                    },
                    {
                        id:24,
                        variant_id:1,
                        category:'Audio & Entertainment',
                        feature:'Speakers',
                        value:'Front & Rear'
                    },
                    {
                        id:25,
                        variant_id:2,
                        category:'Audio & Entertainment',
                        feature:'Tweeters',
                        value:'Front Only'
                    }
                ],
                price:'9,81,890',
                price2:'9,99,900',
                description:"Hyundai CRETA - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            }
           ],
           DataBaseSingleCar:[],
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
           car_details_tab:[
               'Overview',
               'Highlights',
               'Gallery',
               'Videos',
               'Colors',
               'Specs',
               'Features',
               'Price List',
               'Variants Compare'
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
                autoplay: false,
            }
        }
    },
    beforeMount(){
        this.GetSingleCarData();
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
        GetSingleCarData(){
            var id = this.$route.query.id
            axios
                .get(process.env.baseUrl + 'api/show/car/' + id)
                .then((response) => {
                    this.DataBaseSingleCar = response.data;
                    this.FilterDatabasedata();
                })
                .catch((error) => {
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
        VariantChange(e){
            var variantId = e.target.value;
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
        filterFeatureCategories(){
            var category = [...new Set(this.car.car_features.map((item)=>{return item.variant_category}))];
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
            var Tab1 = this.filterCarSpecCategories();
            var Tab2 = this.filterFeatureCategories();
            this.filterCarSpecs(Tab1[0]);
            this.VariantFeature = this.car.car_feature_variants[0].id;
            this.filterFeatures(Tab2[0]);
        },
        SingleCar(){
          var item = this.originalcars.filter((car)=>{
              return car.id == this.$route.query.id;
            })
           this.singleCar = item
           const [car] = this.singleCar
           const {name,price,price2,poster_image,image,overview_image,description,power,power2,transmission,transmission2,mileage,mileage2,highlights,car_gallery,video_link,car_colours,car_specs,car_features} = car
           this.car.name=name;
           this.car.price=price;
           this.car.price2 = price2;
           this.car.poster_image=poster_image;
           this.car.image=image;
           this.car.overview_image=overview_image;
           this.car.description=description;
           this.car.power=power;
           this.car.power2 = power2;
           this.car.transmission=transmission;
           this.car.transmission2 = transmission2;
           this.car.mileage=mileage;
           this.car.mileage2 = mileage2;
           this.car.highlights = highlights;
           this.car.gallery = car_gallery;
           this.car.video_link = video_link;
           this.car.car_colours = car_colours;
           this.car.car_specs = car_specs;
           this.car.car_specs_original = car_specs;
           this.car.car_features = car_features;
           this.car.car_features_original = car_features;
           var Tab1 = this.filterCarSpecCategories();
           var Tab2 = this.filterFeatureCategories();
           this.filterCarSpecs(Tab1[0]);
           this.filterFeatures(Tab2[0]);
        }
    }
}
</script>

<style scoped>

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
    margin: 10px 25px;
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
    margin:30px auto!important;
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