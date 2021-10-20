<template>
  <div>
      <div class="img_sec">
          <img :src="require('@/assets/img/cars/career_poster.webp')" alt="img" style="width:100%;" />
      </div>
      <div class="my-16">
          <div class="heading my-5">Careers</div>
          <div class="career_item_box">
              <div class="item">
                  <div class="card_box my-16">
                      <div class="head">We Are Hiring Sales Consultants</div>
                      <div class="desc">
                          Advaith Hyundai Has A Rich Legacy And It Is Karnataka's Largest Hyundai Dealer With A Gigantic Network Of 24 Showrooms, 29 Service Centers, And 4 Pre-Owned Car Showrooms Spread Across Karnataka. To Deliver On Our Promise We Have Most
                      </div>
                      <div class="footer">
                          <div class="exp"> Exp: Freshers / Experienced</div>
                          <button>Apply Now</button>
                      </div>
                  </div>
              </div>
              <div class="item">
                  <div class="card_box my-16">
                      <div class="head">We Are Hiring Sales Team Leaders</div>
                      <div class="desc">
                          Advaith Hyundai Has A Rich Legacy And It Is Karnataka's Largest Hyundai Dealer With A Gigantic Network Of 24 Showrooms, 29 Service Centers, And 4 Pre-Owned Car Showrooms Spread Across Karnataka. We Are Looking For Young, Enthusiastic
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
.heading{
    font-size: 24px;
    font-weight: 600;
    text-align: center;
}
.item{
    width: 30%;
}
.item .card_box{
    box-shadow: 0 2px 10px 4px rgb(0 0 0/15%);
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
}
.career_item_box{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}
</style>