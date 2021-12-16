<template>
  <div>
      <div class="my-16">
          <div class="heading text-center my-5">
              Driving Tips
          </div>
          <div class="accordian_item_box">

            <div class="card_items_area">
                <b-card-header role="tab">
                    <a block v-b-toggle.accordion-1>
                        <h5 class="mb-0">Driving In Rain<i class="fas fa-angle-down rotate-icon"></i></h5>
                    </a>
                </b-card-header>
                <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <div class="acc_content">
                          <div class="step" v-for="item in content1" :key="item">
                              <div class="head">{{item.name}}</div>
                              <div class="detail">
                                  <div class="para">
                                      <p v-for="cnt in item.content" :key="cnt.id"> <span>></span> {{cnt.name}}</p>
                                  </div>
                                  <div class="img" v-if="item.image !== ''">
                                      <img :src="require('@/assets/img/cars/accordian/' + item.image)" alt="img"  />
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
                        <h5 class="mb-0">Driving At Night<i class="fas fa-angle-down rotate-icon"></i></h5>
                    </a>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <div class="acc_content">
                            <div class="step" v-for="item in content2" :key="item">
                              <div class="head">{{item.name}}</div>
                              <div class="detail">
                                  <div class="para">
                                      <p v-for="cnt in item.content" :key="cnt.id"> <span>></span> {{cnt.name}}</p>
                                  </div>
                                  <div class="img" v-if="item.image !== ''">
                                      <img :src="require('@/assets/img/cars/accordian/' + item.image)" alt="img"  />
                                  </div>
                              </div>
                           </div>
                        </div>
                    </b-card-body>
                </b-collapse>
            </div>


            <div class="card_items_area">
                <b-card-header role="tab">
                    <a block v-b-toggle.accordion-3>
                        <h5 class="mb-0">Driving In Winter<i class="fas fa-angle-down rotate-icon"></i></h5>
                    </a>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <div class="acc_content">
                          <div class="step" v-for="item in content3" :key="item">
                              <div class="head">{{item.name}}</div>
                              <div class="detail">
                                  <div class="para">
                                      <p v-for="cnt in item.content" :key="cnt.id"> <span>></span> {{cnt.name}}</p>
                                  </div>
                                  <div class="img" v-if="item.image !== ''">
                                      <img :src="require('@/assets/img/cars/accordian/' + item.image)" alt="img"  />
                                  </div>
                              </div>
                           </div>
                      </div>
                    </b-card-body>
                </b-collapse>
            </div>

            <div class="card_items_area">
                <b-card-header role="tab">
                    <a block v-b-toggle.accordion-4>
                        <h5 class="mb-0">Driving In Flooded Areas<i class="fas fa-angle-down rotate-icon"></i></h5>
                    </a>
                </b-card-header>
                <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                      <div class="acc_content">
                          <div class="step" v-for="item in content4" :key="item">
                              <div class="head">{{item.name}}</div>
                              <div class="detail">
                                  <div class="para">
                                      <p v-for="cnt in item.content" :key="cnt.id"> <span>></span> {{cnt.name}}</p>
                                  </div>
                                  <div class="img" v-if="item.image !== ''">
                                      <img :src="require('@/assets/img/cars/accordian/' + item.image)" alt="img"  />
                                  </div>
                              </div>
                           </div>
                      </div>
                    </b-card-body>
                </b-collapse>
            </div>
            <div class="card_items_area">
                <b-card-header role="tab">
                    <a block v-b-toggle.accordion-5>
                        <h5 class="mb-0">Convenient Parking<i class="fas fa-angle-down rotate-icon"></i></h5>
                    </a>
                </b-card-header>
                <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                       <div class="acc_content">
                          <div class="step" v-for="item in content5" :key="item">
                              <div class="head">{{item.name}}</div>
                              <div class="detail">
                                  <div class="para">
                                      <p v-for="cnt in item.content" :key="cnt.id"> <span>></span> {{cnt.name}}</p>
                                  </div>
                                  <div class="img" v-if="item.image !== ''">
                                      <img :src="require('@/assets/img/cars/accordian/' + item.image)" alt="img"  />
                                  </div>
                              </div>
                           </div>
                      </div>
                    </b-card-body>
                </b-collapse>
            </div>
            <div class="card_items_area">
                <b-card-header role="tab">
                    <a block v-b-toggle.accordion-6>
                        <h5 class="mb-0">Safe Parking<i class="fas fa-angle-down rotate-icon"></i></h5>
                    </a>
                </b-card-header>
                <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <div class="acc_content">
                          <div class="step" v-for="item in content6" :key="item">
                              <div class="head">{{item.name}}</div>
                              <div class="detail">
                                  <div class="para">
                                      <p v-for="cnt in item.content" :key="cnt.id"> <span>></span> {{cnt.name}}</p>
                                  </div>
                                  <div class="img" v-if="item.image !== ''">
                                      <img :src="require('@/assets/img/cars/accordian/' + item.image)" alt="img"  />
                                  </div>
                              </div>
                           </div>
                      </div>
                    </b-card-body>
                </b-collapse>
            </div>


            <div class="card_items_area">
                <b-card-header role="tab">
                    <a block v-b-toggle.accordion-7>
                        <h5 class="mb-0">Long Trip Advise<i class="fas fa-angle-down rotate-icon"></i></h5>
                    </a>
                </b-card-header>
                <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <div class="acc_content">
                          <div class="step" v-for="item in content7" :key="item">
                              <div class="head">{{item.name}}</div>
                              <div class="detail">
                                  <div class="para">
                                      <p v-for="cnt in item.content" :key="cnt.id"> <span>></span> {{cnt.name}}</p>
                                  </div>
                                  <div class="img" v-if="item.image !== ''">
                                      <img :src="require('@/assets/img/cars/accordian/' + item.image)" alt="img"  />
                                  </div>
                              </div>
                           </div>
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
    data(){
        return{

            content1:[
                {
                    id:1,
                    name:'',
                    image:'15.jpg',
                    content:[
                        {
                            id:1,
                            name:'	Rain and wet roads can make driving dangerous. Here are a few things to consider when driving in the rain : Slow down and ensure more distance between you and other vehicles.'
                        },
                        {
                            id:2,
                            name:'Stay toward the middle lanes as water tends to pool in the outside lanes.'
                        },
                        {
                            id:3,
                            name:'	Keep your windshield wiping equipment in good condition. Replace your windshield wiper blades if necesary.'
                        },
                        {
                            id:4,
                            name:'Be sure your tires are in good condition to avoid any skidding during quick stop on wet pavement. Turn on your headlights to make it easier for others to see you.'
                        },
                        {
                            id:5,
                            name:'	If you must go through puddles, try to drive through them slowly.'
                        },
                        {
                            id:6,
                            name:'	If brakes are wet, apply them lightly while driving until normal braking operation returns.'
                        },
                    ]
                }
            ],
            content2:[
                {
                    id:1,
                    name:'',
                    image:'16.jpg',
                    content:[
                        {
                            id:1,
                            name:'Night driving presents more hazards than driving in the daylight. For safe driving, here are some important tips to remember : Slow down and keep more distance between you and other vehicles.'
                        },
                        {
                            id:2,
                            name:`Switch your rear view mirrors to night mode to reduce the glare from other driver's headlights.`
                        },
                        {
                            id:3,
                            name:'Keep your headlights clean and properly aimed on the oncoming vehicles.'
                        },
                        {
                            id:4,
                            name:'Avoid staring directly at the headlights of oncoming vehicles to prevent temporary blindness.'
                        },
                        {
                            id:5,
                            name:'Avoid using high beam in city driving however its advisable to use them during highway driving.'
                        },
                    ]
                }
            ],
            content3:[
                {
                    id:1,
                    name:'',
                    image:'17.jpg',
                    content:[
                        {
                            id:1,
                            name:'	Severe weather conditions of winter result in greater wear and other problems. To minimise them, here are a few suggestions : Use recommended high quality ethylene glycol coolant because it prevents corrosion in the cooling system, lubricates the water pump and prevents freezing.'
                        },
                        {
                            id:2,
                            name:`Visually inspect the battery and cables. Contact our authorized dealer or a service station for the inspection of the battery charge level.`
                        },
                        {
                            id:3,
                            name:'Check your spark plugs and ignition wiring and components to be sure they are not cracked, worn or damaged in any way.'
                        },
                        {
                            id:4,
                            name:'Use approved window washer anti-freeze solution in the system to prevent the water from freezing.'
                        },
                        {
                            id:5,
                            name:`	Don't let your parking brake freeze.`
                        },
                        {
                            id:6,
                            name:`Periodically check underneath the vehicle and don't let ice and snow accumulate there.`
                        },
                        {
                            id:7,
                            name:'	Check tyre pressure: A chilly morning is probably a good time to check tyre inflation pressures.'
                        },
                        {
                            id:8,
                            name:'Turn on the defroster and blower to eliminate fogging inside the car.'
                        },
                        {
                            id:9,
                            name:'Use low-beam lights during fog.'
                        }
                    ]
                }
            ],
            content4:[
                {
                    id:1,
                    name:'',
                    image:'',
                    content:[
                        {
                            id:1,
                            name:'In case you come across a flooded-out road ahead, turn around and find an alternative route to your destination. Avoid driving through flooded areas unless you are sure the water level is lower than the bottom of the wheel hub - Drive through any water slowly.'
                        },
                        {
                            id:2,
                            name:'Allow adequate stopping distance because brake performance may be affected.'
                        },
                        {
                            id:3,
                            name:'After driving through water, dry the brakes by gently applying them several times while the vehicle is moving slowly.'
                        }
                    ]
                }
            ],
            content5:[
                {
                    id:1,
                    name:'',
                    image:'',
                    content:[
                        {
                            id:1,
                            name:'	Car parking is actually a skilled task which needs to be performed perfectly. You need to be very careful and alert while parking a car. Most Indian roads have become crowded thus finding a suitable parking place has become an unwanted challenge. Of course, if parking rules and regulations are strictly taken care of then no doubt, parking can become an effortless task.'
                        },
                        {
                            id:2,
                            name:'As observed most drivers face problems with reverse parking and find it difficult to manage a trouble-free reverse parking. To help you, here are the useful steps to follow : Always use both outside rearview mirrors.'
                        },
                        {
                            id:3,
                            name:'	Shift the gear to the reverse mode then release the clutch slowly while simultaneously pressing the accelerator pedal.'
                        },
                        {
                            id:4,
                            name:'	Just as the car starts moving, keep the pressing of accelerator pedal steady and then release the clutch completely.'
                        },
                        {
                            id:5,
                            name:`The car starts moving slowly at a regulated speed. Don't forget to keep track of the road with the help of outside rear view mirrors. If there is a car behind, reverse slowly until the corner of the other car appears in your side window. Turn the steering wheel fully to the left and check your mirrors to ensure safety of the other car. Keep on reversing until the front of your car lines up with the back of the other car. Ensure that there is enough room for you to clear the back of the other car. Then, turn the steering wheel fully to the right which will park the car in a hassle free manner.`
                        },
                    ]
                }
            ],
            content6:[
                {
                    id:1,
                    name:'Safe Parking',
                    image:'',
                    content:[
                        {
                            id:1,
                            name:'Car parking seems simple, but it often results in fender-bender incidents, and sometimes serious accidents. Parking can be difficult in crowded lots and streets, but it can be done in a safe manner by following certain tips.'
                        }
                    ]
                },
                {
                    id:2,
                    name:'When parking on the street',
                    image:'',
                    content:[
                        {
                            id:1,
                            name:'Choose an area that is well-lit, busy and ideally monitored by CCTV, as this is an ideal deterrent for potential attackers.'
                        },
                        {
                            id:2,
                            name:'	Do not leave you valuable things visible in the car.'
                        },
                        {
                            id:3,
                            name:'Put your children in the car from the pavement side.'
                        }
                    ]
                },
                {
                    id:3,
                    name:'When parking in a car park',
                    image:'',
                    content:[
                        {
                            id:1,
                            name:'Try and choose one that is well lit with security patrols, restricted entry and exit points.'
                        },
                        {
                            id:2,
                            name:'	Always check closing times.'
                        },
                        {
                            id:3,
                            name:'	Do not leave your valuable things visible in the car.'
                        },
                        {
                            id:4,
                            name:'	Try and park close to the lift or stairs as more people will be passing by.'
                        },
                        {
                            id:5,
                            name:`Reverse into the parking space so you can get out quickly if you need to; through the windscreen you'll also be able to see people approaching your car.`
                        },
                        {
                            id:6,
                            name:`	Avoid parking next to side-opening, high vans; if one is parked next to your driver's door when you come back, get into your car through the passenger door.`
                        }
                    ]
                },
                {
                    id:4,
                    name:'When you return to your car',
                    image:'',
                    content:[
                        {
                            id:1,
                            name:'Check around your car and also check the back seats for intruders before you get in.'
                        },
                        {
                            id:2,
                            name:`	Get in as quickly as possible especially if it's dark and lock the doors if you don't feel safe.`
                        },
                        {
                            id:3,
                            name:`	In winter, keep a can of de-icer and a scraper in your car so you don't have to spend unnecessary time out of your car scraping the windows.`
                        }
                    ]
                },
                {
                    id:5,
                    name:'When you return to your car',
                    image:'',
                    content:[
                        {
                            id:1,
                            name:'	Check around your car and also check the back seats for intruders before you get in.'
                        },
                        {
                            id:2,
                            name:`	Get in as quickly as possible especially if it's dark and lock the doors if you don't feel safe.`
                        },
                        {
                            id:3,
                            name:`In winter, keep a can of de-icer and a scraper in your car so you don't have to spend unnecessary time out of your car scraping the windows.`
                        },
                    ]
                }
            ],
            content7:[
                {
                    id:1,
                    name:'Must Carry Items',
                    image:'',
                    content:[
                        {
                            id:1,
                            name:`Drivers License ,Vehicle Owners manual, Car Registration copy, Proof of Insurance ,Traveler's Cheques, Torch and Batteries ,First Aid Kit ,Jack, Wheel Brace, Puncture Kit, Pump, Tire Lever, Spare Wheel, Bulbs, Fuses,Set of Tools, Soap ,Tow Rope and Spade.`
                        }
                    ]
                }
            ]
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