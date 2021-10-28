<template>
  <div class="loading">
      <div>
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.loading{
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 999999;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
}
.spinner-border-sm{
    height: 80px;
    width: 80px;
    color: white;
}
</style>