<template>
  <div class="single_page_car_sec">
      <div class="car_poster_sec">
          <img :src="require('@/assets/img/cars/static_car_posters/'+ car.poster_image)" alt="poster_image" />
      </div>
      <div class="car_title_sec my-5">
          <div class="car_title">
              {{car.name}}
              <hr/>
          </div>
          <div class="car_details_tab">
              <div class="tab_item_box" v-for="(tab, index) in car_details_tab" :key="index">
                  <div class="tab_item cursor-pointer" :class="car_tab_index === index ? 'active' : ''" @click="car_tab_index = index">{{tab}} <span v-if="index !== car_details_tab.length - 1">|</span></div>
              </div>
          </div>
          <div class="car_overview_sec my-16">
              <div class="title">{{car.name}} Overview</div>
              <div class="description">
                  <div class="paragraph">
                    <p>{{car.description}}</p>
                  </div>
                  <div class="img_sec">
                    <img :src="require('@/assets/img/cars/static_car_images/'+ car.overview_image)" alt="overview_image" />
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
                category:'Hatchback',
                price:'8,19,900',
                description:"Hyundai All New I20 - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            },
            {
                id:2,
                name:'Hyundai Santro',
                image:'car8.jpg',
                poster_image:'car2.webp',
                overview_image:'car2.webp',
                category:'Hatchback',
                price:'4,67,490',
                description:"Hyundai Santro - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            },
            {
                id:3,
                name:'GRAND i10 NIOS',
                image:'car9.webp',
                poster_image:'car3.jpg',
                overview_image:'car3.webp',
                category:'Hatchback',
                price:'8,14,900',
                description:"GRAND i10 NIOS - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            },
            {
                id:4,
                name:'Hyundai i20 N Line',
                image:'car10.webp',
                poster_image:'car11.webp',
                overview_image:'car11.webp',
                category:'Hatchback',
                price:'7,31,900',
                description:"Hyundai i20 N Line - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            },
            {
                id:5,
                name:'Hyundai Aura',
                image:'car2.webp',
                poster_image:'car4.jpg',
                overview_image:'car4.webp',
                category:'Sedan',
                price:'22,30,000',
                description:"Hyundai Aura - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            },
            {
                id:6,
                name:'Hyundai Verna',
                image:'car15.jpg',
                poster_image:'car5.jpg',
                overview_image:'car5.webp',
                category:'Sedan',
                price:'8,19,900',
                description:"Hyundai Verna - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            },
            {
                id:7,
                name:'Hyundai ELANTRA',
                image:'car11.webp',
                poster_image:'car6.jpg',
                overview_image:'car6.webp',
                category:'Sedan',
                price:'10,68,000',
                description:"Hyundai ELANTRA - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            },
            {
                id:8,
                name:'Hyundai Tuscon',
                image:'car18.webp',
                poster_image:'car10.jpg',
                overview_image:'car10.webp',
                category:'SUV',
                price:'4,67,490',
                description:"Hyundai Tuscon - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            },
            {
                id:9,
                name:'Hyundai Venue',
                image:'car4.webp',
                poster_image:'car7.jpg',
                overview_image:'car7.webp',
                category:'SUV',
                price:'8,16,500',
                description:"Hyundai Venue - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            },
            {
                id:11,
                name:'Hyundai Alcazar',
                image:'car17.jpg',
                poster_image:'car9.jpg',
                overview_image:'car9.webp',
                category:'SUV',
                price:'16,53,300',
                description:"Hyundai Alcazar - Modern Stylish Tallboy: The overall design theme is based on Rhythmical Tension that exudes a Refined yet Sporty Image. The front of The All New SANTRO is defined by Hyundai's Signature Cascade Grille with chrome surround that projects Modern and Premium appeal of the car"
            },
            {
                id:12,
                name:'Hyundai CRETA',
                image:'car19.webp',
                poster_image:'car8.jpg',
                overview_image:'car8.webp',
                category:'SUV',
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
              description:''
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
        SingleCar(){
          var item = this.originalcars.filter((car)=>{
              return car.id == this.$route.query.id;
            })
           this.singleCar = item
           const [car] = this.singleCar
           const {name,price,poster_image,image,overview_image,description} = car
           this.car.name=name;
           this.car.price=price;
           this.car.poster_image=poster_image;
           this.car.image=image;
           this.car.overview_image=overview_image;
           this.car.description=description;

        }
    }
}
</script>

<style scoped>
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
    margin: 0 13px;
    font-size: 20px;
    font-weight: 600;
    color: #838383;
}
.tab_item_box .tab_item.active{
    color: #002c5f;
}
.tab_item_box .tab_item span{
    margin-left: 12px;
    color: #002c5f;
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
    font-size: 18px;
    font-weight: 500;
}
.description p{
    width: 60%;
    margin: 5px auto;
}
.car_overview_sec .description .img_sec{
    width: 50%;
}
.description .img_sec img{
    margin-left: auto;
    margin-right: auto;
}
</style>