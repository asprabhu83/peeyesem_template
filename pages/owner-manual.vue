<template>
  <div>
      <div class="img_sec">
          <img :src="require('@/assets/img/cars/owner_manual.webp')" alt="img" style="width:100%;" />
          <div class="heading">Owner's Manual</div>
      </div>
      <div class="my-24">
          <div class="main_heading text-center my-5">
              Owner's Manual Guide – Hyundai Cars
          </div>
          <div class="car_item_sec">
              <div class="items" v-for="car in staticcars" :key="car.id">
                  <div class="photo">
                      <img :src="require('@/assets/img/cars/static/'+ car.image)" alt="img"  />
                  </div>
                  <div class="detail">
                      <div class="car_detail_name"><a :href="'/cars/?id='+ car.id">{{car.name}}</a></div>
                      <button type="button"><font-awesome-icon icon="download"  size="1x" class="text-white  mx-2" />Download</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
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
.car_item_sec .photo{
    min-height: 230px;
    max-height: 230px;
}
.car_item_sec .photo img{
     min-height: 230px;
    max-height: 230px;
    width: 100%;
    object-fit: cover;
}
.img_sec{
    position: relative;
}
.img_sec .heading{
    position: absolute;
    top: 10%;
    text-align: center;
    width: 100%;
    font-size: 35px;
    font-weight: 700;
}
.main_heading{
    font-size: 24px;
    font-weight: 600;
}
.car_item_sec{
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    margin: 40px auto;
}
.car_item_sec .items{
    width: 30%;
    margin: 20px;
}
.car_item_sec .detail{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    padding: 15px 2px;
}
.car_item_sec .detail .car_detail_name{
    cursor: pointer;
    color: #002c5f;
}
.car_item_sec .detail button{
    padding: 5px 20px;
    border:none;
    outline: none;
    cursor: pointer;
    background: #002c5f;
    color: white;
    border-radius: 4px;
}
.car_detail_name a:hover{
    color: #002c5f;
}
</style>