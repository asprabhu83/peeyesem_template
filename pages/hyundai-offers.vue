<template>
  <div>
      <div class="img-sec">
          <img :src="require('@/assets/img/cars/offer-poster.webp')" alt="img" style="width:100%;" />
      </div>
      <div class="detail_sec my-16">
          <div class="offer_heading text-center my-5">Special Offers</div>
          <div class="description my-3 text-center">
              Find the best deals/ Offers on your favorite Hyundai cars from World’s largest and most awarded Hyundai Dealer – Peeyesyem Hyundai. Hyundai Offers / Discount includes, Cash discount, Exchange offer, Corporate discount, and pride of India Offer, Hyundai Motor India / Peeyesyem Hyundai reserves the right to change Offers / prices without prior notice.
          </div>
          <div class="car_offer_sec">
              <div class="item_box" v-for="offer in offers" :key="offer.id">
                  <div class="head">{{offer.name}}</div>
                  <div class="time">{{offer.time}}</div>
                  <div class="detail">
                      <div class="image">
                          <img :src="require('@/assets/img/cars/offers/' + offer.image)" alt="img" style="width:100%;" />
                      </div>
                      <div class="offer_points" v-html="offer.decription"></div>
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
            offers:[
                {
                    id:1,
                    name:'October 2021 offers on Hyundai Santro Car',
                    time:'Offers Valid till 31st October 2021, T&C Apply.',
                    image:'1.png',
                    decription:`
                    <p style="color:black;margin:8px 0;font-size:14px;font-weight:500;"> <span style="font-size:17px;">></span> 	Cash Discount Rs.25,000/-*</p>
                    <p style="color:black;margin:8px 0;font-size:14px;font-weight:500;"> <span style="font-size:17px;">></span> 	Exchange Bonus Rs.10,000/-*</p>
                    <p style="color:black;margin:8px 0;font-size:14px;font-weight:500;"> <span style="font-size:17px;">></span> 	Pride of India - Rs.5,000/-*</p>
                    <p style="color:black;margin:8px 0;font-size:14px;font-weight:500;"> <span style="font-size:17px;">></span> 	Total Savings upto Rs.40,000/-* T&C Apply</p>
                    `
                },
                {
                    id:2,
                    name:'October 2021 offers on Hyundai Grand i10 NIOS',
                    time:'Offers Valid till 31st October 2021, T&C Apply.',
                    image:'2.jpg',
                    decription:`
                    <p style="color:black;margin:8px 0;font-size:14px;font-weight:500;"> <span style="font-size:17px;">></span> Cash Discount - Rs.35,000/-*</p>
                    <p style="color:black;margin:8px 0;font-size:14px;font-weight:500;"> <span style="font-size:17px;">></span> Exchange Bonus - Rs.10,000/-*</p>
                    <p style="color:black;margin:8px 0;font-size:14px;font-weight:500;"> <span style="font-size:17px;">></span> Pride of India - Rs.5,000/-*</p>
                    <p style="color:black;margin:8px 0;font-size:14px;font-weight:500;"> <span style="font-size:17px;">></span> Total Savings - Rs.50,000/-</p>
                    <p style="color:black;margin:8px 0;font-size:14px;font-weight:500;"> <span style="font-size:17px;">></span> T&C Apply</p>
                    `
                },
                {
                    id:3,
                    name:'October 2021 offers on Hyundai i20 Car',
                    time:'Offers Valid till 31st October 2021, T&C Apply.',
                    image:'3.webp',
                    decription:`
                     <p style="color:black;margin:8px 0;font-size:14px;font-weight:500;"> <span style="font-size:17px;">></span> Cash Discount - Rs.25,000/-*</p>
                    <p style="color:black;margin:8px 0;font-size:14px;font-weight:500;"> <span style="font-size:17px;">></span> Exchange Bonus - Rs.10,000/-*</p>
                    <p style="color:black;margin:8px 0;font-size:14px;font-weight:500;"> <span style="font-size:17px;">></span> Pride of India - Rs.5,000/-*</p>
                    <p style="color:black;margin:8px 0;font-size:14px;font-weight:500;"> <span style="font-size:17px;">></span> Total Savings - Rs.40,000/-</p>
                    <p style="color:black;margin:8px 0;font-size:14px;font-weight:500;"> <span style="font-size:17px;">></span> T&C Apply</p>
                    `
                },
                {
                    id:4,
                    name:'October 2021 offers on Hyundai Xcent Prime Car',
                    time:'Offers Valid till 31st October 2021, T&C Apply.',
                    image:'4.png',
                    decription:`
                     <p style="color:black;margin:8px 0;font-size:14px;font-weight:500;"> <span style="font-size:17px;">></span> Cash Discount - Rs.50,000/-*</p>
                    <p style="color:black;margin:8px 0;font-size:14px;font-weight:500;"> <span style="font-size:17px;">></span> 	Total Savings - Rs.50,000/-</p>
                    <p style="color:black;margin:8px 0;font-size:14px;font-weight:500;"> <span style="font-size:17px;">></span> T&C Apply</p>
                    `
                },
                {
                    id:5,
                    name:'October 2021 offers on Hyundai Aura',
                    time:'Offers Valid till 31st October 2021, T&C Apply.',
                    image:'5.jpg',
                    decription:`
                     <p style="color:black;margin:8px 0;font-size:14px;font-weight:500;"> <span style="font-size:17px;">></span> 	Cash Discount - Rs.35,000/-*</p>
                    <p style="color:black;margin:8px 0;font-size:14px;font-weight:500;"> <span style="font-size:17px;">></span> 	Exchange Bonus - Rs.10,000/-*</p>
                    <p style="color:black;margin:8px 0;font-size:14px;font-weight:500;"> <span style="font-size:17px;">></span> Pride of India - Rs.5,000/-*</p>
                    <p style="color:black;margin:8px 0;font-size:14px;font-weight:500;"> <span style="font-size:17px;">></span> Total Savings - Rs.50,000/-</p>
                    <p style="color:black;margin:8px 0;font-size:14px;font-weight:500;"> <span style="font-size:17px;">></span> T&C Apply</p>
                    `
                },
                {
                    id:6,
                    name:'October 2021 offers on Hyundai Verna Car',
                    time:'Offers Valid till 31st October 2021, T&C Apply.',
                    image:'6.jpg',
                    decription:`
                     <p style="color:black;margin:8px 0;font-size:14px;font-weight:500;"> <span style="font-size:17px;">></span> 	Oops!!! No Offers on New Hyundai Verna *</p>
                    `
                },
                {
                    id:7,
                    name:'October 2021 offers on Hyundai Creta Car',
                    time:'Offers Valid till 31st October 2021, T&C Apply.',
                    image:'7.jpg',
                    decription:`
                     <p style="color:black;margin:8px 0;font-size:14px;font-weight:500;"> <span style="font-size:17px;">></span> 	Oops!!! No Offers on New Hyundai Creta *</p>
                    `
                },
                {
                    id:8,
                    name:'October 2021 offers on Hyundai Elantra Car',
                    time:'Offers Valid till 31st October 2021, T&C Apply.',
                    image:'8.jpg',
                    decription:`
                     <p style="color:black;margin:8px 0;font-size:14px;font-weight:500;"> <span style="font-size:17px;">></span> Oops!!! No Offers on New Hyundai Elantra *</p>
                    `
                },
                {
                    id:9,
                    name:'October 2021 offers on Hyundai Tucson Car',
                    time:'Offers Valid till 31st October 2021, T&C Apply.',
                    image:'9.png',
                    decription:`
                     <p style="color:black;margin:8px 0;font-size:14px;font-weight:500;"> <span style="font-size:17px;">></span> Oops!!! No Offers on New Hyundai Tucson *</p>
                    `
                }
            ]
        }
    }
}
</script>

<style scoped>
@media only screen and (min-width:300px) and (max-width:600px){
    .car_offer_sec{
        width: 100%!important;
    }
    .car_offer_sec .item_box{
        width: 100%!important;
        margin: 20px!important;
    }
    .item_box .detail{
        display: block!important;
    }
    .item_box .detail .image, .item_box .detail .offer_points{
        width: 100%!important;
        margin: 40px 0!important;
    }
    .item_box .detail .offer_points{
        padding: 0 20px!important;
    }
}
.offer_heading{
    font-size: 23px;
    font-weight: 600;
}
.detail_sec .description{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.8;
}
.car_offer_sec{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 80%;
    margin: 60px auto;
}
.car_offer_sec .item_box{
    width: 70%;
    margin:30px;
    box-shadow: 0 2px 10px 4px rgb(0 0 0/15%);
    border-radius: 8px;
    padding: 20px 10px;
}
.item_box .head{
    font-weight: 600;
    font-size: 20px;
    margin: 20px 0;
    padding: 0 20px;
}
.item_box .time{
    font-weight: 500;
    font-size: 14px;
    margin: 20px 0;
    padding: 0 20px;
}
.item_box .detail{
    display: flex;
    align-items: center;
    margin: 50px 0;
}
.item_box .detail .image, .item_box .detail .offer_points{
    width: 50%;
    margin: 0 20px;
}
.offer_points p{
    font-size: 15px !important;
}
</style>