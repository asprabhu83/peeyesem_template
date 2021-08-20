<template>
  <div>
    <NavBar />
    <transition name="fade" mode="out-in">
      <Nuxt />
    </transition>
  </div>
</template>

<script>
export default {
  mounted() {
    // For Loading 
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 3000)
    })
    
  }

}
</script>