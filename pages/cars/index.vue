<template>
  <div class="single_page_car_sec">
      <div class="car_poster_sec">
          <img :src="require('@/assets/img/cars/static_car_posters/'+ car.poster_image)" alt="poster_image" />
      </div>
      <section class="car_title_sticky_header">
          <div class="car_title_sec my-5">
            <div class="car_title">
                {{car.name}}
                <hr/>
            </div>
            <div class="car_details_tab">
                <div class="tab_item_box" v-for="(tab, index) in car_details_tab" :key="index">
                    <div class="tab_item cursor-pointer" :class="car_tab_index === index ? 'active' : ''" @click="car_tab_index = index">{{tab}}</div>
                </div>
            </div>
        </div>
      </section>
      <div class="car_wrapper_sec">
          <div class="car_overview_sec my-24">
              <div class="title">{{car.name}} Overview <hr /></div>
              <div class="description">
                  <div class="paragraph">
                    <p>{{car.description}}</p>
                  </div>
                  <div class="img_sec">
                    <img :src="require('@/assets/img/cars/static_car_images/'+ car.overview_image)" alt="overview_image" />
                  </div>
              </div>
              <div class="price_details my-5">
                  <div class="price_item">
                      <div class="title"><font-awesome-icon icon="rupee-sign"  size="1x" class="text-black mr-3" />Price</div>
                      <div class="detail">
                          Petrol: {{car.price}}
                      </div>
                  </div>
                  <div class="price_item">
                      <div class="title"><font-awesome-icon icon="tachometer-alt"  size="1x" class="text-black mr-3" />Power</div>
                      <div class="detail">
                          Petrol: {{car.power}}
                      </div>
                  </div>
                  <div class="price_item">
                      <div class="title"><font-awesome-icon icon="cogs"  size="1x" class="text-black mr-3" />Transmission</div>
                      <div class="detail">
                          Petrol: {{car.transmission}}
                      </div>
                  </div>
                  <div class="price_item">
                      <div class="title"><font-awesome-icon icon="gas-pump"  size="1x" class="text-black mr-3" />Mileage</div>
                      <div class="detail">
                          Petrol: {{car.mileage}}
                      </div>
                  </div>
              </div>
          </div>
          <div class="car_highlights_sec my-24">
              <div class="title">{{car.name}} Highlights <hr /></div>
              <div class="highlight_items">
                  <div class="item" v-for="item in car.highlights" :key="item.id">
                      <div class="item_image">
                          <img :src="require('@/assets/img/cars/car_highlights/'+ item.image)" alt="highlights_image" />
                      </div>
                      <div class="content">
                          <div class="item_title">
                            {{item.name}}
                        </div>
                        <div class="item_desc">
                            {{item.description}}
                        </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="car_gallery_sec my-24">
              <div class="title">{{car.name}} Gallery <hr /></div>
              <div class="car_gallery_item">
                  <swiper class="swiper product-single-2-slider" :options="swiperOption">
                            <swiper-slide v-for="car in car.gallery" :key="car.id">
                               <img :src="require('@/assets/img/cars/car_gallery/' + car.image)" alt="img" style="width:100%;" />
                            </swiper-slide>
                            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                    </swiper>
              </div>
          </div>
          <div class="car_video_sec my-24">
              <div class="title">{{car.name}} Video <hr /></div>
              <div class="car_video_item">
                  <iframe width="800" height="450"  :src="'https://www.youtube.com/embed/' + car.video_link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
          </div>
          <div class="car_colour_sec my-24">
              <div class="title">{{car.name}} Colours <hr /></div>
              <div class="car_colour_image_box"> 
                  <img v-for="(car,index) in car.car_colours" :key="car.id" class="car_colour_img" :class="car_clr_img_index == index ? 'active' : ''" :src="require('@/assets/img/cars/car_colours/' + car.image)" alt="img" />
              </div>
              <div class="car_colour_item_box" >
                  <div class="colour_item" v-for="(clr,index) in car.car_colours" :key="index" @click="car_clr_img_index = index" >
                      <div class="car_clr" :style="{background:clr.colour1}"></div>
                      <div class="car_clr" :style="{background:clr.colour2}"></div>
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
                overview_image:'car1.webp',
                power:' 152 PS @ 6,200 RPM',
                transmission:'Manual,Automatic',
                mileage:'13.03 KMPL',
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
                        colour1:'#644a49',
                        colour2:'#644a49',
                        image:'1.jpg'
                    },
                    {
                        id:2,
                        colour1:'#941b0a',
                        colour2:'#111111',
                        image:'2.jpg'
                    },
                    {
                        id:3,
                        colour1:'#242736',
                        colour2:'#242736',
                        image:'3.jpg'
                    },
                    {
                        id:4,
                        colour1:'#e2e3e5',
                        colour2:'#e2e3e5',
                        image:'4.jpg'
                    }
                ],
                price:'8,19,900',
                description:"Hyundai All New I20 - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            },
            {
                id:2,
                name:'Hyundai Santro',
                image:'car8.jpg',
                poster_image:'car2.webp',
                overview_image:'car2.webp',
                power:' 152 PS @ 6,200 RPM',
                transmission:'Manual,Automatic',
                mileage:'13.03 KMPL',
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
                        colour1:'#93121c',
                        colour2:'#93121c',
                        image:'5.png'
                    },
                    {
                        id:2,
                        colour1:'#99937d',
                        colour2:'#99937d',
                        image:'6.png'
                    },
                    {
                        id:3,
                        colour1:'#00438e',
                        colour2:'#00438e',
                        image:'7.png'
                    },
                    {
                        id:4,
                        colour1:'#f7f4f0',
                        colour2:'#f7f4f0',
                        image:'8.png'
                    }
                ],
                price:'4,67,490',
                description:"Hyundai Santro - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            },
            {
                id:3,
                name:'GRAND i10 NIOS',
                image:'car9.webp',
                poster_image:'car3.jpg',
                overview_image:'car3.webp',
                power:' 152 PS @ 6,200 RPM',
                transmission:'Manual,Automatic',
                mileage:'13.03 KMPL',
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
                        colour1:'#e4e5e7',
                        colour2:'#e4e5e7',
                        image:'9.png'
                    },
                    {
                        id:2,
                        colour1:'#585f63',
                        colour2:'#585f63',
                        image:'10.png'
                    },
                    {
                        id:3,
                        colour1:'#a81514',
                        colour2:'#a81514',
                        image:'11.png'
                    },
                    {
                        id:4,
                        colour1:'#15405f',
                        colour2:'#15405f',
                        image:'12.png'
                    }
                ],
                price:'8,14,900',
                description:"GRAND i10 NIOS - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            },
            {
                id:4,
                name:'Hyundai i20 N Line',
                image:'car10.webp',
                poster_image:'car11.webp',
                overview_image:'car11.webp',
                power:' 152 PS @ 6,200 RPM',
                transmission:'Manual,Automatic',
                mileage:'13.03 KMPL',
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
                        image:'13.webp'
                    },
                    {
                        id:2,
                        image:'14.webp'
                    },
                    {
                        id:3,
                        image:'15.webp'
                    },
                    {
                        id:4,
                        image:'16.webp'
                    }
                ],
                video_link:'vWFtZhOkcFY',
                car_colours:[
                    {
                        id:1,
                        colour1:'#93121c',
                        colour2:'#93121c',
                        image:'1.jpg'
                    },
                    {
                        id:2,
                        colour1:'#99937d',
                        colour2:'#99937d',
                        image:'2.jpg'
                    },
                    {
                        id:3,
                        colour1:'#00438e',
                        colour2:'#00438e',
                        image:'3.jpg'
                    },
                    {
                        id:4,
                        colour1:'#f7f4f0',
                        colour2:'#f7f4f0',
                        image:'4.jpg'
                    }
                ],
                price:'7,31,900',
                description:"Hyundai i20 N Line - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            },
            {
                id:5,
                name:'Hyundai Aura',
                image:'car2.webp',
                poster_image:'car4.jpg',
                overview_image:'car4.webp',
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
                        colour1:'#ad1518',
                        colour2:'#ad1518',
                        image:'13.png'
                    },
                    {
                        id:2,
                        colour1:'#90573e',
                        colour2:'#90573e',
                        image:'14.png'
                    },
                    {
                        id:3,
                        colour1:'#595f63',
                        colour2:'#595f63',
                        image:'15.png'
                    },
                    {
                        id:4,
                        colour1:'#f0f4f5',
                        colour2:'#f0f4f5',
                        image:'16.png'
                    }
                ],
                price:'22,30,000',
                description:"Hyundai Aura - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            },
            {
                id:6,
                name:'Hyundai Verna',
                image:'car15.jpg',
                poster_image:'car5.jpg',
                overview_image:'car5.webp',
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
                        colour1:'#595f63',
                        colour2:'#595f63',
                        image:'17.png'
                    },
                    {
                        id:2,
                        colour1:'#2c2e43',
                        colour2:'#2c2e43',
                        image:'18.png'
                    },
                    {
                        id:3,
                        colour1:'#e0e1e5',
                        colour2:'#e0e1e5',
                        image:'19.png'
                    },
                    {
                        id:4,
                        colour1:'#000000',
                        colour2:'#000000',
                        image:'20.png'
                    }
                ],
                price:'8,19,900',
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
                        colour1:'#9d121e',
                        colour2:'#9d121e',
                        image:'21.jpg'
                    },
                    {
                        id:2,
                        colour1:'#004383',
                        colour2:'#004383',
                        image:'22.jpg'
                    },
                    {
                        id:3,
                        colour1:'#f2f7f2',
                        colour2:'#f2f7f2',
                        image:'23.jpg'
                    },
                    {
                        id:4,
                        colour1:'#151515',
                        colour2:'#151515',
                        image:'24.jpg'
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
                transmission:'Manual,Automatic',
                mileage:'13.03 KMPL',
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
                        colour1:'#f6f6f6',
                        colour2:'#f6f6f6',
                        image:'25.jpg'
                    },
                    {
                        id:2,
                        colour1:'#171d30',
                        colour2:'#171d30',
                        image:'26.jpg'
                    },
                    {
                        id:3,
                        colour1:'#151517',
                        colour2:'#151517',
                        image:'27.jpg'
                    },
                    {
                        id:4,
                        colour1:'#171d30',
                        colour2:'#171d30',
                        image:'28.jpg'
                    }
                ],
                price:'4,67,490',
                description:"Hyundai Tuscon - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            },
            {
                id:9,
                name:'Hyundai Venue',
                image:'car4.webp',
                poster_image:'car7.jpg',
                overview_image:'car7.webp',
                power:' 152 PS @ 6,200 RPM',
                transmission:'Manual,Automatic',
                mileage:'13.03 KMPL',
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
                        colour1:'#2f3728',
                        colour2:'#2f3728',
                        image:'29.png'
                    },
                    {
                        id:2,
                        colour1:'#151e3d',
                        colour2:'#151e3d',
                        image:'30.png'
                    },
                    {
                        id:3,
                        colour1:'#9d1414',
                        colour2:'#9d1414',
                        image:'31.png'
                    },
                    {
                        id:4,
                        colour1:'#ffffff',
                        colour2:'#151e3d',
                        image:'32.png'
                    }
                ],
                price:'8,16,500',
                description:"Hyundai Venue - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            },
            {
                id:11,
                name:'Hyundai Alcazar',
                image:'car17.jpg',
                poster_image:'car9.jpg',
                overview_image:'car9.webp',
                power:' 152 PS @ 6,200 RPM',
                transmission:'Manual,Automatic',
                mileage:'13.03 KMPL',
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
                        colour1:'#151515',
                        colour2:'#151515',
                        image:'33.webp'
                    },
                    {
                        id:2,
                        colour1:'#242736',
                        colour2:'#242736',
                        image:'34.webp'
                    },
                    {
                        id:3,
                        colour1:'#362b26',
                        colour2:'#362b26',
                        image:'35.webp'
                    },
                    {
                        id:4,
                        colour1:'#f0f4f5',
                        colour2:'#f0f4f5',
                        image:'36.webp'
                    }
                ],
                price:'16,53,300',
                description:"Hyundai Alcazar - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            },
            {
                id:12,
                name:'Hyundai CRETA',
                image:'car19.webp',
                poster_image:'car8.jpg',
                overview_image:'car8.webp',
                power:' 152 PS @ 6,200 RPM',
                transmission:'Manual,Automatic',
                mileage:'13.03 KMPL',
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
                        colour1:'#2d3537',
                        colour2:'#2d3537',
                        image:'37.png'
                    },
                    {
                        id:2,
                        colour1:'#152b5c',
                        colour2:'#152b5c',
                        image:'38.png'
                    },
                    {
                        id:3,
                        colour1:'#e34323',
                        colour2:'#e34323',
                        image:'39.png'
                    },
                    {
                        id:4,
                        colour1:'#000000',
                        colour2:'#e34323',
                        image:'40.png'
                    }
                ],
                price:'17,00,000',
                description:"Hyundai CRETA - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            }
        ],
           car:{
              name:'',
              price:'',
              image:'',
              poster_image:'',
              overview_image:'',
              description:'',
              power:'',
              transmission:'',
              mileage:'',
              highlights:[],
              gallery:[],
              video_link:'',
              car_colours:[]
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
               'Variants Compare',
               'How To Proceed'
           ],
           car_tab_index:0,
           car_clr_img_index:0,
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
        this.SingleCar()
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
        handleScroll(){
            var car_header = document.querySelector('.car_title_sticky_header');
            if(pageYOffset > 640){
                car_header.classList.add('sticky');
            }else{
                car_header.classList.remove('sticky');
            }
            if(pageYOffset < 1045){
                this.car_tab_index = 0
            }
            if(pageYOffset > 1050){
                this.car_tab_index = 1
            }
             if(pageYOffset > 2918){
                this.car_tab_index = 2
            }
            if(pageYOffset > 4058){
                this.car_tab_index = 3
            }
        },
        SingleCar(){
          var item = this.originalcars.filter((car)=>{
              return car.id == this.$route.query.id;
            })
           this.singleCar = item
           const [car] = this.singleCar
           const {name,price,poster_image,image,overview_image,description,power,transmission,mileage,highlights,car_gallery,video_link,car_colours} = car
           this.car.name=name;
           this.car.price=price;
           this.car.poster_image=poster_image;
           this.car.image=image;
           this.car.overview_image=overview_image;
           this.car.description=description;
           this.car.power=power;
           this.car.transmission=transmission;
           this.car.mileage=mileage;
           this.car.highlights = highlights;
           this.car.gallery = car_gallery;
           this.car.video_link = video_link;
           this.car.car_colours = car_colours;
           console.log(this.car.car_colours[0])
        }
    }
}
</script>

<style scoped>
.car_colour_image_box .car_colour_img{
    margin:60px auto;
    display: none;
}
.car_colour_image_box .car_colour_img.active{
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
    margin: 10px 20px;
    box-shadow: 0 2px 10px 4px rgb(0 0 0/25%);
    border-radius: 50%;
    height: 45px;
    width: 45px;
    overflow: hidden;
    cursor: pointer;
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
    font-weight: 700;
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
}
.price_item .title{
    font-size: 20px;
    font-weight: 600;
    color: black;
    text-align: start;
}
.price_item .detail{
    margin: 10px 0;
    text-align: start;
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