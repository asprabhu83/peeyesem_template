<template>
  <div class="my-16">
      <div class="heading text-center my-5">Car Service Detailing</div>
      <div class="select_input">
              <div class="head text-center my-3">Select Model</div>
              <div class="my-3">
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
                    id="cars"
                    v-model="model"
                  >
                  <option class="text-xl" :value="model" v-for="model in cars"
                    :key="model.id" >{{model}}</option>
                  </select>
               </div>
        </div>
        <div class="car_detail_item_box">
            <div class="item" v-for="item in services" :key="item.id">
                <div class="photo">
                    <img :src="require('@/assets/img/cars/car_detailing/' + item.image)" alt="img" />
                </div>
                <div class="detail">
                    <div class="title">{{item.name}}</div>
                    <!-- <div class="price_detail">
                        <div class="price"><font-awesome-icon icon="rupee-sign"  size="1x" class="text-black mr-2" />{{item.price}}</div>
                        <div class="checkbox_sec">
                            <label class="inline-flex items-center">
                                <input type="checkbox" class="form-checkbox cursor-pointer">
                            </label>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            cars:[
                'Santro',
                'All New i20',
                'Grand i10 NIOS',
                'Aura',
                'All New Verna',
                'All New Elantra',
                'Venue',
                'All New Creta',
                'Alcazar',
                'All New Tucson',
            ],
            model:'Santro',
            services:[
                {
                    id:1,
                    name:'Durawax',
                    price:'1560',
                    category:'Santro',
                    image:'1.jpg'
                },
                {
                    id:2,
                    name:'Interior Cleaning',
                    price:'1320',
                    category:'Santro',
                    image:'2.jpg'
                },
                {
                    id:3,
                    name:'Durawax & Interior',
                    price:'2160',
                    category:'Santro',
                    image:'3.jpg'
                },
                {
                    id:4,
                    name:'Noise Suppression Pads',
                    price:'2400',
                    category:'Santro',
                    image:'4.jpg'
                },
                {
                    id:5,
                    name:'Engine Lacquering',
                    price:'1380',
                    category:'Santro',
                    image:'5.jpg'
                },
                {
                    id:6,
                    name:'Cavity Wax',
                    price:'2460',
                    category:'Santro',
                    image:'6.jpg'
                },
                {
                    id:7,
                    name:'Under Chasis Coating Wurth Black',
                    price:'5500',
                    category:'Santro',
                    image:'7.jpg'
                },
                {
                    id:8,
                    name:'Under Chasis Coating Wurth Grey',
                    price:'5500',
                    category:'Santro',
                    image:'8.jpg'
                },
                {
                    id:9,
                    name:'Under Chasis Coating Wurth Underseal',
                    price:'2640',
                    category:'Santro',
                    image:'9.jpg'
                },
                {
                    id:10,
                    name:'Premium Interior Cleaning (Foam)',
                    price:'1550',
                    category:'Santro',
                    image:'10.jpg'
                },
                {
                    id:11,
                    name:'Smoke Fumigation',
                    price:'999',
                    category:'Santro',
                    image:'11.jpg'
                },
                {
                    id:12,
                    name:'Interior Cleaning & Sanitizing-STD',
                    price:'1500',
                    category:'Santro',
                    image:'12.jpg'
                },
                {
                    id:13,
                    name:'Interior Cleaning, Sanitizing & Fumigation-',
                    price:'2700',
                    category:'Santro',
                    image:'12.jpg'
                },
                {
                    id:14,
                    name:'Interior Durawax, Sanitizing + Fumigation -',
                    price:'3600',
                    category:'Santro',
                    image:'12.jpg'
                },
                {
                    id:15,
                    name:'Interior Cleaning, Sanitizing & Fumigation',
                    price:'3990',
                    category:'Santro',
                    image:'12.jpg'
                },
                {
                    id:16,
                    name:'Interior Durawax, Sanitizing + Fumigation +',
                    price:'4850',
                    category:'Santro',
                    image:'12.jpg'
                },
                {
                    id:17,
                    name:'Rodent Protection',
                    price:'800',
                    category:'Santro',
                    image:'13.jpg'
                },
                {
                    id:18,
                    name:'Head Light Polish',
                    price:'545',
                    category:'Santro',
                    image:'14.jpg'
                },
                {
                    id:19,
                    name:'Alloy Wheel Polish',
                    price:'498',
                    category:'Santro',
                    image:'15.jpg'
                },
                {
                    id:20,
                    name:'Silencer Coating',
                    price:'1295',
                    category:'Santro',
                    image:'16.jpg'
                }
            ]
        }
    },
    mounted(){
        window.scrollTo(0, 0)
    }
}
</script>

<style scoped>
@media only screen and (min-width: 760px) and (max-width: 960px){
    .select_input select{
        width: 85%!important;
    }
    .car_detail_item_box{
        width: 95%!important;
    }
    .car_detail_item_box .item{
        width: 30%!important;
        margin: 11px!important;
    }
}
@media only screen and (min-width: 961px) and (max-width: 1030px){
    .select_input select{
        width: 75%!important;
    }
    .car_detail_item_box{
        width: 95%!important;
    }
    .car_detail_item_box .item{
        width: 30%!important;
        margin: 16px!important;
    }
}
@media only screen and (min-width:300px) and (max-width:600px){
    .select_input select{
        width: 80%!important;
    }
    .select_input{
        width: 100%!important;
    }
    .car_detail_item_box{
        width: 90%!important;
    }
    .car_detail_item_box .item{
        width: 100%!important;
    }
}
@media only screen and (min-width: 1270px) and (max-width: 1366px){
    .car_detail_item_box{
        width: 90%!important;
    }
    .car_detail_item_box .item{
        width: 23%!important;
        margin: 10px!important;
    }
}
@media only screen and (min-width: 1367px) and (max-width: 1600px){
    .car_detail_item_box{
        width: 85%!important;
    }
    .car_detail_item_box .item{
        width: 23%!important;
        margin: 11px!important;
    }
}
.car_detail_item_box{
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 60px auto;
}
.car_detail_item_box .item{
    width: 22%;
    margin: 20px;
    box-shadow: 0 2px 10px 4px rgb(0 0 0/15%);
    border-radius: 7px;
    overflow: hidden;
}
.item .photo{
    min-height: 198px;
    max-height: 198px;
}
.item .photo img{
    min-height: 198px;
    max-height: 198px;
    width: 100%;
    object-fit: cover;
}
.item .detail{
    padding: 15px 20px;
}
.item .detail .title{
    font-weight: 500;
    font-size: 16px;
    margin: 10px 0;
}
.item .detail .price_detail{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.price_detail .price{
    font-weight: 500;
    font-size: 17px;
}
.heading{
    font-size: 24px;
    font-weight: 600;
}
.select_input{
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}
.select_input select{
    width: 50%;
}
</style>