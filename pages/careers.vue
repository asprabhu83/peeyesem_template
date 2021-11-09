<template>
  <div>
      <div class="img_sec">
          <img :src="require('@/assets/img/cars/career_poster2.webp')" alt="img" style="width:100%;" />
      </div>
      <div class="my-16">
          <div class="heading my-5">Careers</div>
          <div class="career_item_box">
              <div class="item my-16">
                  <div class="tag_heading">Sales Consultants</div>
                  <div class="card_box ">
                      <div class="head">We Are Hiring Sales Consultants</div>
                      <div class="desc">
                          It Is  Largest Hyundai Dealer With A Gigantic Network Of 7 Showrooms, 8 Service Workshops, And 10 Used Car Showrooms. To Deliver On Our Promise We Have Most
                      </div>
                      <div class="footer">
                          <div class="exp"> Exp: Freshers / Experienced</div>
                          <button>Apply Now</button>
                      </div>
                  </div>
              </div>
              <div class="item my-16">
                  <div class="tag_heading">Team Leader - Sales</div>
                  <div class="card_box ">
                      <div class="head">We Are Hiring Sales Team Leaders</div>
                      <div class="desc">
                          It Is  Largest Hyundai Dealer With A Gigantic Network Of 7 Showrooms, 8 Service Workshops, And 10 Used Car Showrooms. We Are Looking For Young, Enthusiastic
                      </div>
                      <div class="footer">
                          <div class="exp"> Exp: 3 + Years</div>
                          <button>Apply Now</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media only screen and (min-width:300px) and (max-width:600px){
    .career_item_box{
        width: 95%!important;
    }
    .career_item_box .item{
        width: 95%!important;
    }
}
.heading{
    font-size: 24px;
    font-weight: 600;
    text-align: center;
}
.item{
    width: 30%;
    margin-left: auto;
    margin-right: auto;
}
.item .card_box{
    border-radius: 7px;
    box-shadow: 0 2px 10px 4px rgb(0 0 0/15%);
    margin-top: -8px;
}
.card_box .head{
    font-size: 17px;
    font-weight: 600;
    margin: 10px 0;
    padding: 15px 20px;
} 
.card_box .desc{
    font-size: 15px;
    font-weight: 500;
    color: gray;
    padding: 3px 20px;
    margin: 10px 0;
} 
.card_box .footer{
    padding: 15px 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid lightgray;
    padding: 20px;
}
.footer .exp{
    font-weight: 500;
}
.footer button{
    padding: 3px 12px;
    background: #002c5f;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 4px;
}
.career_item_box{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}
.tag_heading{
    display: inline-block;
    margin-left: 2px;
    padding: 4px 20px;
    background: #002c5f;
    color: white;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;

}
</style>