<template>
  <div>
      <div class="img_sec">
          <img :src="require('@/assets/img/cars/owner_manual.jpg')" alt="img" style="width:100%;" />
          <div class="heading">Owner's Manual</div>
      </div>
      <div class="my-24">
          <div class="main_heading text-center my-5">
              Owner's Manual Guide – Hyundai Cars
          </div>
          <div class="car_item_sec">
              <div class="items" v-for="(car,index) in $store.state.originalDataCars" :key="index">
                  <div class="photo">
                      <img :src="baseUrl + 'images/' + car.car_image" alt="" >
                  </div>
                  <div class="detail">
                      <div class="car_detail_name"><nuxt-link :to="'/cars/'+ car.car_title.replace(/\s+/g, '-').toLowerCase()">{{car.car_title}}</nuxt-link></div>
                      <a class="download_manual" :href="brochureList[index].pdf" :download="brochureList[index].pdf"><font-awesome-icon icon="download"  size="1x" class="text-white  mx-2" />Download</a>
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
            brochureList:[
                {
                    id:1,
                    pdf:'/pdf/Tucson_suv_brochure.pdf'
                },
                {
                    id:2,
                    pdf:'/pdf/Venue_Brochure-16PP_2021_Web.pdf'
                },
                {
                    id:3,
                    pdf:'/pdf/Alcazar_Brochure-16PP_A4_2021_Web.pdf'
                },
                {
                    id:4,
                    pdf:'/pdf/Creta_Brochure-16PP_A4_2021.pdf.pdf'
                },
                {
                    id:5,
                    pdf:'/pdf/Aura_Brochure-16PP_A4_Web_22 oct.pdf'
                },
                {
                    id:6,
                    pdf:'/pdf/Hyundai-Elantra-Brochure.pdf'
                },
                {
                    id:7,
                    pdf:'/pdf/Verna_Brochure-16PP_A4_Web_22 oct.pdf'
                },
                {
                    id:8,
                    pdf:'/pdf/SANTRO_Hatchback_brochure (1).pdf'
                },
                {
                    id:9,
                    pdf:'/pdf/i20-Hatchback-2020.pdf'
                },
                {
                    id:10,
                    pdf:'/pdf/Grand Nios_Brochure-16PP_A4_2021 Web.pdf'
                },
                {
                    id:11,
                    pdf:'/pdf/N-Line.pdf'
                }
            ],
            baseUrl:process.env.baseUrl,
        }
    },
    mounted(){
         if(this.$store.state.cars.length == 0){
           this.GetCars()
        }
    },
    methods:{
        GetCars(){
            this.loading = true;
            axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
            axios.defaults.withCredentials = false;
            axios.get(process.env.baseUrl + 'api/cars/all')
            .then((response) => {
             this.loading =false;
            this.$store.state.cars = response.data.cars;
            this.$store.state.originalDataCars = response.data.cars;
            })
            .catch((error) => {
            this.loading = false;
            console.log(error)
            })
        }
    }
}
</script>

<style scoped>
@media only screen and (min-width: 1270px) and (max-width: 1366px){
    .car_item_sec .items{
        width: 31%!important;
        margin: 11px!important;
    }
    .car_item_sec{
        width: 90%!important;
    }
    .car_item_sec .detail a.download_manual{
        padding: 3px 15px!important;
        font-size: 14px!important;
    }
    .car_item_sec .detail .car_detail_name{
        font-size: 14px!important;
    }
    .img_sec .heading{
        font-size: 35px!important;
    }
}
@media only screen and (min-width:300px) and (max-width:600px){
    .main_heading{
        font-size: 18px!important;
        padding: 0 20px;
    }
    .img_sec .heading{
        font-size: 18px!important;
        top: 20%!important;
    }
    .car_item_sec{
        width: 95%!important;
    }
    .car_item_sec .items{
        width: 98%!important;
    }
    .car_item_sec .detail button{
        padding: 5px 7px!important;
    }
}
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
    top: 16%;
    text-align: center;
    width: 100%;
    font-size: 50px;
    font-weight: 600;
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
.car_item_sec .detail a.download_manual{
    padding: 5px 20px;
    border:none;
    outline: none;
    cursor: pointer;
    background: #002c5f;
    color: white;
    border-radius: 4px;
    text-align: center;
}
a.download_manual:hover{
    color: white;
}
.car_detail_name a:hover{
    color: #002c5f;
}
</style>