<template>
  <div class="single_page_car_sec my-20">
      <div class="my-5" v-for="car in singleCar" :key="car.id">
          <h2 class="text-center mb-3" >{{car.car_title}}</h2>
          <h3 class="text-center" >${{car.car_price}}</h3>
      </div>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
    data(){
        return{
            cars:[],
            singleCar:[]
        }
    },
    mounted(){
        this.GetCars()
    },
    methods:{
        GetCars(){
            axios.get(process.env.baseUrl + 'api/cars/index')
            .then((response) => {
            this.cars = response.data.cars
            this.SingleCar()
            })
            .catch((error) => {
            console.log(error)
            })
        },
        SingleCar(){
          var item = this.cars.filter((car)=>{
              return car.id == this.$route.query.id;
            })
           this.singleCar = item
           console.log(this.singleCar)
        }
    }
}
</script>

<style>

</style>