<template>
  <div>
    <Header />
    <transition name="fade" mode="out-in">
      <Nuxt />
    </transition>
    <FixedForm />
    <Footer />
  </div>
</template>

<script>
export default {
  async asyncData(context) {
      const post = await axios.get(process.env.baseUrl + 'api/cars/all')
      post.data.cars.forEach(car => {
                    car.urlLink = car.car_title.replace(/\s+/g, '-').toLowerCase()
                })
      context.store.state.cars = post.data.cars;
      context.store.state.originalDataCars = post.data.cars
      return { post }
    },
  mounted() {
    // For Loading 
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 3000)
    })
    
  }

}
</script>