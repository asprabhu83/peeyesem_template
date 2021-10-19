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
                        <h5 class="mb-0">Seat Belts<i class="fas fa-angle-down rotate-icon"></i></h5>
                    </a>
                </b-card-header>
                <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <div class="acc_content">
                          <div class="step">
                              <div class="head">Seat Belts</div>
                              <div class="detail">
                                  <div class="para">
                                      <p v-for="cnt in content1" :key="cnt.id"> <span>></span> {{cnt}}</p>
                                  </div>
                                  <div class="img">
                                      <img :src="require('@/assets/img/cars/accordian/1.jpg')" alt="img"  />
                                  </div>
                              </div>
                          </div>
                          <div class="step">
                              <div class="head">To remove the spare tire:</div>
                              <div class="detail">
                                  <div class="para">
                                      <p v-for="cnt in content2" :key="cnt.id"> <span>></span> {{cnt}}</p>
                                  </div>
                                  
                              </div>
                          </div>
                          <div class="step">
                              <div class="head">Long Trip Advise</div>
                              <div class="detail">
                                  <div class="para">
                                      <p v-for="cnt in content3" :key="cnt.id"> <span>></span> {{cnt}}</p>
                                  </div>
                                  <div class="img">
                                      <img :src="require('@/assets/img/cars/accordian/2.jpg')" alt="img"  />
                                  </div>
                              </div>
                          </div>
                      </div>
                    </b-card-body>
                </b-collapse>
            </div>
            <div class="card_items_area">
                <b-card-header role="tab">
                    <a block v-b-toggle.accordion-2>
                        <h5 class="mb-0">Supplemental Restraint System<i class="fas fa-angle-down rotate-icon"></i></h5>
                    </a>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <div class="acc_content">
                            <div class="step">
                                <div class="head">Supplemental Restraint System</div>
                                <div class="detail">
                                    <div class="para">
                                        <p v-for="cnt in content4" :key="cnt.id"> <span>></span> {{cnt}}</p>
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
            content1:[
                'Safety spells S.E.A.T. B.E.L.T.S',
                'Seat belts are most effective when seatbacks are in upright position.',
                'Do not wear shoulder belt under your arm or behind your back.',
                'Do not wear twisted seat belt.',
                'Replace the seat belt assembly after it has been worn in a severe impact even if damage to the assembly is not obvious.',
                'Every person in the vehicle should wear his seat belt, including infants.',
                'Never hold a child in arms or lap when riding in vehicle. The violent forces during the crash will tear the child from your arms and throw the child against the interior.',
                'Do not allow passengers to change seats while the vehicle is moving.',
                'Each seat belt is designed to restrain only one occupant.',
                'Do not use accessories on seat belts.',
                'Do not modify seats.'
            ],
            content2:[
                'Open the tailgate.',
                'Find the plastic hex bolt cover and remove the cover.',
                'Use the wheel brace to loosen the bolt enough to lower the spare tyre.Turn the wheel brace counterclockwise until the spare tire reaches the ground',
                'After the spare tire reaches the ground, continue to turn the wheel brace counterclockwise, and draw the spare tire outside. Never rotate the wheel brace excessively, otherwise the spare tire carrier may be damaged.',
                'Remove the retainer (1) from the centre of the spare tire.'
            ],
            content3:[
                'Prior to your long trip, where-in you plan to drive your own vehicle, there are certain precautions and planning that is required. We hope that the following checklist will help you have a smooth and enjoyable trip.',
                'Get your car a checked up at nearest Hyundai Dealership.',
                'Get the battery and cables properly checked . It is advisable to have a new battery than taking a risk with a problematic or old battery.',
                'Check the fuel system for clogged or leaking pipes.',
                'Clean the cleaners-the air cleaner, the breather cap, the fuel pump sediment bowl and strainer, and the fuel filter.',
                'Check the and oil filter replace if necessary. Carry extra can of oil in the trunk.',
                'Hose pipes wear out on the inside. Pinch the pipes; replace if they feel spongy. Check clamps for tightness. It is advisable to carry spare hose pipes, and a tinful of water.',
                'Get the brakes and clutch adjusted if necessary.',
                'Get the wheel alignment checked and adjusted properly to have a better feel of the car and to reduce tire wear.',
                'Get the tires checked. Make sure the spare is in good condition and properly inflated.',
                'Do carry an emergency First Aid Kit, handy for any mishap enroute.'
            ],
            content4:[
                'Even in vehicles with airbags, you and your passengers must always wear the safety belts provided.',
                'In order to avoid unnecessary and perhaps severe air bag injuries, always sit as far back as possible from the steering wheel while maintaining comfortable control of the vehicle.',
                'We recommend that your chest be at least 250 mm (10 inches) away from the steering wheel.',
                'Air bags can only be used once.'
            ]
        }
    }
}
</script>

<style scoped>
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
.acc_content .detail .img{
    width: 28%;
} 
.acc_content .detail img{
    margin-left: auto;
    margin-right: auto;
}
</style>