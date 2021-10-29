<template>
  <div>
      <div class="about_img_sec">
          <img :src="require('@/assets/img/cars/about_poster.webp')" alt="img" style="width:100%;" />
      </div>
      <section style="background: #e6eaef;">
          <div class="about_heading pt-16">
            <h3 class="text-center">About Peeyesyem Hyundai</h3>
        </div>
        <div class="about_description pt-24">
            <p>Peeyesyem Hyundai is one of the largest Hyundai dealer having showrooms at various locations around Tamilnadu. Our branches are located at Chennai, Karaikudi, Kovilpatti, Tuticorin, Tiruchendur, Tuticorin, Madurai and Ramnathapuram. We strive to provide the best services to our customers with great satisfaction and excellency.</p>
            <p>To deliver on our promise we have most of the best sales and service people in the entire automobile industry. We are proud to announce that some of our staff have been rated as Best Sales Person and Best Service Person by Hyundai India.</p>
            <p>Entire range of world class leading Hyundai cars is on display at Peeyesyem Hyundai showrooms.</p>
        </div>
        <div class="form_btns_box pt-16 pb-24">
            <button>Why Peeyesyem</button>
            <button>Peeyesyem Awards</button>
            <button>Media Gallery</button>
            <button>News and Events </button>
        </div>
      </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media only screen and (min-width:300px) and (max-width:600px){
    .form_btns_box{
        display: block!important;
        text-align: center;
    }
    .form_btns_box button{
        margin: 20px!important;
        min-width: 195px!important;
    }
    .about_description{
        padding-top: 40px!important;
    }
    .about_heading h3{
        font-size: 23px!important;
    }
}
.about_description{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}
.about_description p{
    margin: 30px 0;
    font-weight: 600;
    font-size: 16px;
}
.form_btns_box{
    display: flex;
    justify-content: center;
}
.form_btns_box button{
    background: #002c5f;
    padding: 6px 20px;
    outline: none;
    border: none;
    color: white;
    cursor: pointer;
    margin: 0 20px;
    border-radius: 4px;
}
</style>