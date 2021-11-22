<template>
  <div>
      <div class="img_sec">
          <img :src="require('@/assets/img/cars/owner_manual.jpg')" alt="img" style="width:100%;" />
          <div class="heading">Sitemap</div>
      </div>
      <div class="my-24">
          <div class="accordian_sec">
              <div class="card_items_area">
                <b-card-header role="tab">
                    <a block v-b-toggle.accordion-1>
                        <h5 class="mb-0">Find a Car <span class="when-opened"><i class="fas fa-angle-up rotate-icon"></i></span><span class="when-closed"><i class="fas fa-angle-down rotate-icon"></i></span></h5>
                    </a>
                </b-card-header>
                <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <div class="card_item">
                            <b>ALL </b>
                            <b>Hatchback</b>
                            <nuxt-link to="/cars/hyundai-santro">Santro</nuxt-link>
                            <nuxt-link to="/cars/hyundai-all-new-i20"> All New i20</nuxt-link>
                            <nuxt-link to="/cars/hyundai-grand-i10-nios"> Grand i10 NIOS</nuxt-link>
                            <nuxt-link to="/cars/hyundai-i20-n-line"> i20 N Line</nuxt-link>
                            <b>Sedan</b>
                            <nuxt-link to="/cars/hyundai-aura"> Aura</nuxt-link>
                            <nuxt-link to="/cars/hyundai-verna"> All New Verna</nuxt-link>
                            <nuxt-link to="/cars/hyundai-all-new-elantra"> Elantra</nuxt-link>
                            <b>Suv</b>
                            <nuxt-link to="/cars/hyundai-venue"> Venue</nuxt-link>
                            <nuxt-link to="/cars/hyundai-creta"> All New Creta</nuxt-link>
                            <nuxt-link to="/cars/hyundai-alcazar"> Alcazar</nuxt-link>
                            <nuxt-link to="/cars/hyundai-all-new-tucson"> Tucson</nuxt-link>
                        </div>
                          <div class="card_item">
                            <b>Hatchback</b>
                            <nuxt-link to="/cars/hyundai-santro">Santro</nuxt-link>
                            <nuxt-link to="/cars/hyundai-all-new-i20"> All New i20</nuxt-link>
                            <nuxt-link to="/cars/hyundai-grand-i10-nios"> Grand i10 NIOS</nuxt-link>
                            <nuxt-link to="/cars/hyundai-i20-n-line"> i20 N Line</nuxt-link>
                        </div>
                          <div class="card_item">
                            <b>Sedan</b>
                            <nuxt-link to="/cars/hyundai-aura"> Aura</nuxt-link>
                            <nuxt-link to="/cars/hyundai-verna"> All New Verna</nuxt-link>
                            <nuxt-link to="/cars/hyundai-all-new-elantra"> Elantra</nuxt-link>
                        </div>
                          <div class="card_item">
                            <b>Suv</b>
                            <nuxt-link to="/cars/hyundai-venue"> Venue</nuxt-link>
                            <nuxt-link to="/cars/hyundai-creta"> All New Creta</nuxt-link>
                            <nuxt-link to="/cars/hyundai-alcazar"> Alcazar</nuxt-link>
                            <nuxt-link to="/cars/hyundai-all-new-tucson"> Tucson</nuxt-link>
                        </div>
                    </b-card-body>
                </b-collapse>
              </div>
              <div class="card_items_area">
                    <b-card-header role="tab">
                        <a block v-b-toggle.accordion-2>
                            <h5 class="mb-0">Buy a Car <span class="when-opened"><i class="fas fa-angle-up rotate-icon"></i></span><span class="when-closed"><i class="fas fa-angle-down rotate-icon"></i></span></h5>
                        </a>
                    </b-card-header>
                    <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                        <div class="card_item">
                            <nuxt-link to="/buy-car">Buy a car</nuxt-link>
                        </div>
                        <div class="card_item">
                            <nuxt-link to="/sell-car">Sell a car</nuxt-link>
                        </div>
                        <div class="card_item">
                            <nuxt-link class="menu-item" to="/accessories">Accessories</nuxt-link>
                        </div>
                        </b-card-body>
                    </b-collapse>
              </div> 
               <div class="card_items_area">
                    <b-card-header role="tab">
                        <a block v-b-toggle.accordion-3>
                            <h5 class="mb-0">Our Services <span class="when-opened"><i class="fas fa-angle-up rotate-icon"></i></span><span class="when-closed"><i class="fas fa-angle-down rotate-icon"></i></span></h5>
                        </a>
                    </b-card-header>
                    <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                        <div class="card_item">
                            <nuxt-link to="/service-booking">Book a Service</nuxt-link>
                            <nuxt-link to="/get-insurance">Get Insurance</nuxt-link>
                            <nuxt-link to="/car-service-detailing">Car Service Detailing</nuxt-link>
                        </div>
                        <div class="card_item">
                            <nuxt-link to="/services/sot">SOT</nuxt-link>
                            <nuxt-link to="/services/rsa">RSA</nuxt-link>
                            <nuxt-link to="/services/ers">ERS</nuxt-link>
                        </div>
                        <div class="card_item">
                            <nuxt-link to="/tips/safety-tips">Safety Tips</nuxt-link>
                            <nuxt-link to="/tips/maintenance-tips">Maintenance Tips</nuxt-link>
                            <nuxt-link to="/tips/driving-tips">Driving Tips</nuxt-link>
                        </div>
                        <div class="card_item">
                            <nuxt-link to="/tips/fuel-saving-tips">Fuel Saving Tips</nuxt-link>
                            <nuxt-link to="/extended-warrenty">Extended Warranty</nuxt-link>
                            <nuxt-link to="/owner-manual">Owners Manual</nuxt-link>
                        </div>
                        </b-card-body>
                    </b-collapse>
              </div> 
              <div class="card_items_area">
                    <b-card-header role="tab">
                        <a block v-b-toggle.accordion-4>
                            <h5 class="mb-0">About Us <span class="when-opened"><i class="fas fa-angle-up rotate-icon"></i></span><span class="when-closed"><i class="fas fa-angle-down rotate-icon"></i></span></h5>
                        </a>
                    </b-card-header>
                    <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                        <div class="card_item">
                            <nuxt-link to="/about">About</nuxt-link>
                            <nuxt-link to="/blog">Blog</nuxt-link>
                        </div>
                        <div class="card_item">
                            <nuxt-link to="/testimonials">Testimonials</nuxt-link>
                            <nuxt-link to="/gallery">Gallery</nuxt-link>
                        </div>
                        <div class="card_item">
                            <nuxt-link to="/careers">Careers</nuxt-link>
                            <nuxt-link to="/news-events">News and Events</nuxt-link>
                        </div>
                        </b-card-body>
                    </b-collapse>
              </div> 
              <div class="card_items_area">
                    <b-card-header role="tab">
                        <a block v-b-toggle.accordion-5>
                            <h5 class="mb-0">Contact Us<span class="when-opened"><i class="fas fa-angle-up rotate-icon"></i></span><span class="when-closed"><i class="fas fa-angle-down rotate-icon"></i></span></h5>
                        </a>
                    </b-card-header>
                    <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                         <div class="card_item">
                             <nuxt-link to="/contact-us/contact">Contact Us</nuxt-link>
                            <nuxt-link class="menu-item" to="/locations">Locations </nuxt-link>
                        </div>
                        <div class="card_item">
                            <nuxt-link to="/contact-us/test-drive">Test Drive</nuxt-link>
                            <nuxt-link to="/contact-us/sales-enquiry">Sales Enquiry</nuxt-link>
                        </div>
                        <div class="card_item">
                            <nuxt-link to="/emi-calculator">EMI Calculator</nuxt-link>
                            <nuxt-link to="/contact-us/feedback">Feedback</nuxt-link>
                        </div>
                        </b-card-body>
                    </b-collapse>
              </div> 
          </div>
      </div>
  </div>
</template>

<script>
export default {
    mounted(){
        window.scrollTo(0, 0);
    }
}
</script>

<style scoped>
@media only screen and (min-width: 1270px) and (max-width: 1366px){
    .img_sec .heading{
        font-size: 35px!important;
    }
    .accordian_sec{
        width: 80%!important;
    }
    .card_items_area h5{
        font-size: 21px!important;
        padding: 12px 0!important;
    }
}
@media only screen and (min-width:300px) and (max-width:600px){
    .img_sec .heading{
        font-size: 18px!important;
        top: 20%!important;
    }
    .accordian_sec{
        width: 93%!important;
    }
    .card_items_area .card-body{
        flex-wrap: wrap;
    }
    .card_items_area .card_item{
        width: 90%!important;
    }
    .card_items_area h5{
        font-size: 21px!important;
        padding: 10px 0!important;
    }
}
.accordian_sec{
    width: 65%;
    margin: 40px auto;
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
.card_items_area{
    margin: 40px 0;
}
.card_items_area .card_item{
    margin: 5px 10px;
    width: 20%;
}
.card_item a{
    display: block;
    margin: 13px 0;
    text-decoration: underline;
    font-weight: 500;
    font-size: 18px;
}
.card_item b{
    display: block;
    font-weight: 600;
    margin: 13px 0;
    font-size: 18px;
}
.card_items_area h5{
    font-weight: 600;
    font-size: 27px;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
}
.card_items_area .card-body{
    border:1px solid lightgray;
    display: flex;
}
.collapsed  .when-opened{
    display: none;
}
.not-collapsed .when-closed{
    display: none;
}
</style>