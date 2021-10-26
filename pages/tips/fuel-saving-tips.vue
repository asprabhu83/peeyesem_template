<template>
  <div>
      <div class="my-16">
          <div class="heading text-center my-5">
              Safety Tips
          </div>
          <div class="accordian_item_box">
            <div class="card_items_area">
                <b-card-header role="tab">
                    <a block v-b-toggle.accordion-1>
                        <h5 class="mb-0">Fuel Saving Tips<i class="fas fa-angle-down rotate-icon"></i></h5>
                    </a>
                </b-card-header>
                <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <div class="acc_content">
                          <div class="step">
                              <div class="head"></div>
                              <div class="detail">
                                  <div class="img">
                                      <img :src="require('@/assets/img/cars/accordian/18.jpg')" alt="img"  />
                                  </div>
                              </div>
                          </div>
                      </div>
                    </b-card-body>
                </b-collapse>
            </div>
          </div>
      </div>
      <div style="height:200px;"></div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>

<style scoped>
@media only screen and (min-width:300px) and (max-width:600px){
    .accordian_item_box{
        width: 90%!important;
    }
}
.heading{
    font-size: 24px;
    font-weight: 600;
}
.accordian_item_box{
    width: 65%;
    margin: 50px auto;
}
.card_items_area{
    margin: 20px 0;
}
.card_items_area h5{
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
}
.card_items_area .card-body{
    border:1px solid lightgray;
}
.acc_content .step{
    margin: 15px 0;
}
.acc_content .head{
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 15px;
}
.acc_content .detail{
    display: flex;
    justify-content: space-between;
}
.acc_content .detail .para{
    width: 70%;
}
.acc_content .detail .para p{
    margin: 7px 0;
}
.acc_content .detail .para span{
    color: black;
    font-weight: 600;
    font-size: 17px;
}
.acc_content .detail img{
    margin-left: auto;
    margin-right: auto;
}
</style>