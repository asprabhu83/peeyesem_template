<template>
  <div>
      <div class="my-16">
          <div class="heading text-center my-5">
              Fuel Saving Tips
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
                                  <div class="para">
                                      <div class="para_content">
                                          <p><b>Fuel Saving Tips:</b></p>
                                          <p>Saving fuel and money is vital. That’s why we are explaining to you the use of various techniques. These techniques and tips are easy to incorporate into your everyday travel. No need to worry about obtaining significant changes to your usual systems to maximise fuel efficiency.</p>
                                      </div>
                                      <div class="para_content">
                                          <p><b>Tyre Pressure:</b></p>
                                          <p>Regular car maintenance is a great practice for a safe drive. Keeping your vehicle running smoothly assures not a single drop of fuel is wasted on easy-to-fix issues. Filling the wrong engine oil could be one of them and you can easily find out which engine oil you should be used in the handbook. But there are also steps you can take without getting service involved and it only costs you a few minutes.</p>
                                          <p>Before filling up fuel, make sure your tyres are still cool. Once refuelled, stop at the pressure gauge and check your tyre pressure. This is beneficial to your general driving safety and it can turn any tyre set into fuel-saving tyres. Always ensure an ideal tyre pressure. Do make sure that you do not exceed the recommended maximum tyre pressure (related to a fully-loaded car) also found on the sticker.</p>
                                      </div>
                                      <div class="para_content">
                                          <p><b>Lower fuel consumption of add-ons:</b></p>
                                          <p>Everyone likes additional comforts such as air conditioning, cruise control etc. If wrongly used, it can increase petrol consumption significantly. Even things like unnecessary loads reduce your chance to save fuel. </p>
                                      </div>
                                      <div class="para_content">
                                          <p><b>Avoid Aggressive Driving:</b></p>
                                          <p>Rapid accelerating, speeding, and frequent braking an eat up a lot of fuel. These practices can reduce your fuel efficiency by as much as 33% on highways and driving within the city.</p>
                                      </div>
                                      <div class="para_content">
                                          <p><b>Speed in Check:</b></p>
                                          <p>Your car’s fuel consumption is dependent on numerous factors like the vehicle’s aerodynamics, road friction, engine efficiency, etc. As the speed of the car rises, the fore of the wind upon the vehicle also increases. The friction on the road also acts as a factor and suggested that once the speed of the vehicle goes beyond the suggested level, its efficiency drops significantly.</p>
                                      </div>
                                      <div class="para_content">
                                          <p><b>Regular Service:</b></p>
                                          <p>Every vehicle can go through regular wear and tear check-ups. In order to keep that wear and tear in check and help restore the vehicle to best-running condition, the vehicle must be regularly serviced for an engine tune-up, air filter cleaning, oil check, etc.</p>
                                      </div>
                                      <div class="para_content">
                                          <p><b>Drive with Your Windows Up:</b></p>
                                          <p>As compared to in-city driving, highway driving is usually done at relatively higher speeds. Driving at higher speeds with the windows down increases the drag on the vehicle which results in about 10% more fuel consumption.</p>
                                      </div>
                                      <div class="para_content">
                                          <p><b>Limit the use of Air conditioning:</b></p>
                                          <p>Driving the car with the AC running can increase the load on the engine, causing greater fuel consumption. So, limit the use of air conditioning unless it's essential.</p>
                                      </div>
                                      <div class="para_content">
                                          <p><b>Avoid jerky driving:</b></p>
                                          <p>Sudden acceleration and sudden braking are done frequently can increase unnecessary fuel consumption by up to 20%. Slow and steady acceleration and braking is an advisable technique for saving fuel.</p>
                                      </div>
                                      <div class="para_content">
                                          <p><b>Avoid Running The Engine On Idle:</b></p>
                                          <p>Idling is defined as when the engine of the vehicle is running but the vehicle itself isn’t moving. This is commonly done to keep the AC running. This is a common practice that people follow while waiting in traffic but it ends up wasting a lot of fuel. It is advisable that if the wait time in traffic is more than 10 seconds, you should turn the engine off.</p>
                                      </div>
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
@media only screen and (min-width: 760px) and (max-width: 960px){
    .accordian_item_box{
        width: 80%!important;
    }
}
@media only screen and (min-width: 961px) and (max-width: 1030px){
    .accordian_item_box{
        width: 80%!important;
    }
}
@media only screen and (min-width:300px) and (max-width:600px){
    .accordian_item_box{
        width: 90%!important;
    }
}
.para_content{
    margin: 15px 0;
}
.para_content p  b{
    color: black;
    font-weight: 600;
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
    width: 90%;
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