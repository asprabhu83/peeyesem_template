<template>
  <div class="accessories_page">
     <div class="main_poster_image">
        <img :src="require('@/assets/img/cars/car15.webp')" alt="img" style="width:100%;" />
     </div>
     <div class="acc_head_title my-16">
         <div class="text-center title">Browse by Car Type</div>
     </div>
     <div class="car_accessories_sec">
         <div class="car_item_box" >
             <div class="car_item" v-for="car in originalcars" :key="car.id">
                 <a :href="'/genuine-accessories/?id='+ car.id" class="text-center block cursor-pointer" >
                    <img :src="require('@/assets/img/cars/static/'+ car.image)" alt="" >
                </a>
                <div class="car_item_title">{{car.name}}</div>
             </div>
         </div>
     </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
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
        }
    }
}
</script>

<style scoped>
.acc_head_title .title{
    font-size: 28px;
    font-weight: 600;
}
.car_accessories_sec .car_item_box{
    width: 80%;
    margin:40px auto;
    display: flex;
    flex-wrap: wrap;
}
.car_accessories_sec .car_item_box .car_item{
    width: 22%;
    border-radius: 5px;
    overflow: hidden;
    margin: 20px;
    position: relative;
}
.car_item_box .car_item a{
    min-height: 220px;
    max-height: 220px;
}
.car_item a img{
    width: 100%;
    min-height: 220px;
    max-height: 220px;
    max-width: 100%;
    object-fit: cover;
    transition: .4s ease-in-out;
}
.car_item a img:hover{
    transform: scale(1.1);
}
.car_accessories_sec .car_item_title{
    color: white;
    padding: 5px 0;
    margin: 5px 0;
    text-align: center;
    text-shadow: 2px 2px 5px #000;
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>