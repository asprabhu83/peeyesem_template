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
              highlights:[]
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
            if(pageYOffset > 1050){
                this.car_tab_index = 1
            }else{
                this.car_tab_index = 0
            }
        },
        SingleCar(){
          var item = this.originalcars.filter((car)=>{
              return car.id == this.$route.query.id;
            })
           this.singleCar = item
           const [car] = this.singleCar
           const {name,price,poster_image,image,overview_image,description,power,transmission,mileage,highlights} = car
           this.car.name=name;
           this.car.price=price;
           this.car.poster_image=poster_image;
           this.car.image=image;
           this.car.overview_image=overview_image;
           this.car.description=description;
           this.car.power=power;
           this.car.transmission=transmission;
           this.car.mileage=mileage;
           this.car.highlights = highlights
        }
    }
}
</script>

<style scoped>
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
.car_overview_sec .title hr, .car_highlights_sec .title hr{
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
    font-size: 30px;
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
    font-size: 20px;
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
</style>