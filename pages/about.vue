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
            <p>Peeyesyem Hyundai has a rich legacy and it is Karnataka's largest Hyundai Dealer with gigantic network of 24 Showrooms, 29 Service centers and 4 Pre-owned cars showrooms spread across Karnataka. In Bangalore it has 8 fabulous showrooms in Residency Road, Bannerghatta Road, Marathalli Outer Ring Road, Vasanthnagar, Koramangala, Bilekahalli, Sarjapura and Avalahalli Peeyesyem Hyundai has remarkable sales showrooms in Karnataka. Kolar, Ramangara, Mandya , Hassan Mysore, Coorg, Mangalore, Tiptur, and Belthangady.</p>
            <p>Since 1998 we have delivered over 3,25,000 New Hyundai cars to thousands of happy customers across Karnataka making us one of the preferred Hyundai showroom in Bangalore. Every month we deliver a new Hyundai to over a thousand customers who rely on Peeyesyem Hyundai.</p>
            <p>We know what it takes to make a discerning customer happy - from pre-sales advice to quick paperwork and prompt delivery. And we know how to keep our customers happy with post-sales attention and support.</p>
            <p>Because of our single-minded dedication to customer delight in everything we do, of all the Hyundai dealers in India we have received 120+ awards, including 'The Best Dealer in the Country'. 'Global Top Dealer' 'Best All India Sales Volume Award' 'Best All India Service Volume Award' "Best Partnership 2017".etc...</p>
            <p>In order to be within easy reach of our customers we have an extensive network of 20 New car showrooms, 29 full-fledged service centers and 4 pre-owned car Hyundai showrooms in Bangalore and across Karnataka.</p>
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