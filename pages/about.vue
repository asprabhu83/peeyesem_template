<template>
  <div>
    <!-- <div class="about_img_sec">
      <img
        :src="require('@/assets/img/cars/about_poster.webp')"
        alt="img"
        style="width: 100%"
      />
    </div> -->
    <section style="background: #e6eaef">
      <div class="about_heading pt-24">
        <h3 class="text-center">About Peeyesyem Hyundai</h3>
      </div>
      <div class="about_description pt-16">
        <ul>
          <li>PEEYESYEM Hyundai is an authorized dealer for HYUNDAI Motors India
          Limited which started it’s operations in the year 2016 and is being
          administered by an able management with an experience of 4 decades in
          the Automobile Industry. </li>
          <li>Being Hyundai’s successful dealer – PEEYESYEM
          has extended its wings through various showrooms and workshops across
          Tamil Nadu ( Chennai, Tuticorin, Karaikudi, Kovilpatti, Trichendur, Ramnad and
          Madurai).</li>
          <li>PEEYESYEM family believe in taking care of greatest asset of
          the company which is our employees as only passionate and committed
          set of employees will take care of customers.</li>
          <li>Further, we firmly
          believe that our delighted customers will take care of success of our
          business in return.</li>
          <li>Our focus is always on providing all stakeholders
          with the latest technological advancements happening across the globe.
          Teamwork and loyalty are the two pillars of our organization which
          transform into a culture of everyone associated with PEEYESYEM.</li>
          <li>We do
          provide a platform to ensure entrepreneurial work culture which
          fosters creativity, innovation to overcome challenges by taping the
          opportunities .</li>
          <li>At Last but not the least, We always look forward to
          constant feedback and suggestions for improvement from customers and
          employees which in other words means we are listening and learning to
          ensure better organization.</li>
          <li>Car buying is always everybody's dream and
          it is very special occasion, we as a premium Hyundai car dealership
          always endeavor to achieve highest level of customer satisfaction and
          improving the buying experience for our customers.</li>
          <li>We have best of the
          sales staff to cater all your car buying needs and also have the
          skilled professional to take care for your car services and other
          requirements. We not only sells Hyundai car, we also deals in Used
          Cars, Insurance, Finance, Accessories.</li>
          <li>We take care of your every need
          while buying a car. With state-of-the-art workshops coupled with the
          company-trained technicians, we offers you an instant, efficient and
          personalized customer service.</li>
          <li>It is this dedication to service and
          the maintenance of highest levels of customer satisfaction that have
          been the platform of our dealership success. We welcome you all at our
          dealership. Please do visit us not only to buy a car but your dream.</li>
        </ul>
      </div>
      <div class="form_btns_box pt-16 pb-24">
         <nuxt-link to="/gallery">Media Gallery</nuxt-link>
         <nuxt-link to="/news-events">News and Events</nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    mounted(){
        window.scrollTo(0, 0);
    }
};
</script>

<style scoped>
@media only screen and (min-width: 300px) and (max-width: 600px) {
  .form_btns_box {
    display: block !important;
    text-align: center;
  }
  .form_btns_box a {
    margin: 20px !important;
    min-width: 195px !important;
  }
  .about_description {
    width: 75%!important;
    padding-top: 40px !important;
  }
  .about_heading h3 {
    font-size: 23px !important;
  }
}
.about_description {
  width: 65%;
  margin-left: auto;
  margin-right: auto;
}
.about_description ul {
  margin: 30px 0;
  font-weight: 600;
  font-size: 16px;
}
.about_description ul li{
  margin: 15px 0;
  list-style-type: disc;
}
.form_btns_box {
  display: flex;
  justify-content: center;
}
.form_btns_box a{
  background: #002c5f;
  padding: 6px 20px;
  outline: none;
  border: none;
  color: white;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  margin: 0 20px;
  border-radius: 4px;
}
</style>