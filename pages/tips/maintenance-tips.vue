<template>
  <div>
      <div class="my-16">
          <div class="heading text-center my-5">
              Maintenance Tips
          </div>
          <div class="accordian_item_box">

            <div class="card_items_area">
                <b-card-header role="tab">
                    <a block v-b-toggle.accordion-1>
                        <h5 class="mb-0">Engine Care<i class="fas fa-angle-down rotate-icon"></i></h5>
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
                        <h5 class="mb-0">Battery Care<i class="fas fa-angle-down rotate-icon"></i></h5>
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
                        <h5 class="mb-0">Tire Rotation<i class="fas fa-angle-down rotate-icon"></i></h5>
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
                        <h5 class="mb-0">Fuse Changing<i class="fas fa-angle-down rotate-icon"></i></h5>
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
                        <h5 class="mb-0">Exterior Care<i class="fas fa-angle-down rotate-icon"></i></h5>
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
                        <h5 class="mb-0">Interior Care<i class="fas fa-angle-down rotate-icon"></i></h5>
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
                        <h5 class="mb-0">If You Have A Flat Tire<i class="fas fa-angle-down rotate-icon"></i></h5>
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
            <div class="card_items_area">
                <b-card-header role="tab">
                    <a block v-b-toggle.accordion-8>
                        <h5 class="mb-0">Changing Tires<i class="fas fa-angle-down rotate-icon"></i></h5>
                    </a>
                </b-card-header>
                <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <div class="acc_content">
                          <div class="step" v-for="item in content8" :key="item">
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
                    <a block v-b-toggle.accordion-9>
                        <h5 class="mb-0">Emergency Starting<i class="fas fa-angle-down rotate-icon"></i></h5>
                    </a>
                </b-card-header>
                <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        <div class="acc_content">
                          <div class="step" v-for="item in content9" :key="item">
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
                    <a block v-b-toggle.accordion-10>
                        <h5 class="mb-0">Headlamp Changing<i class="fas fa-angle-down rotate-icon"></i></h5>
                    </a>
                </b-card-header>
                <b-collapse id="accordion-10" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                       <div class="acc_content">
                          <div class="step" v-for="item in content10" :key="item">
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
                    name:'Checking the engine oil level',
                    image:'3.jpg',
                    content:[
                        {
                            id:1,
                            name:'Be sure the vehicle is on level ground.'
                        },
                        {
                            id:2,
                            name:'Start the engine and allow it to reach normal operating temperature.'
                        },
                        {
                            id:3,
                            name:'Pull the dipstick out, wipe it clean, and re-insert it fully.'
                        },
                        {
                            id:4,
                            name:'	Pull the dipstick out again and check the level. The level should be between F and L. If it is near or at L, add enough oil to bring the level to F.'
                        },
                        {
                            id:5,
                            name:'Do not overfill and use only the recommended Hyundai engine oil.'
                        },
                    ]
                },
                {
                    id:2,
                    name:'Checking the brake fluid level',
                    image:'4.jpg',
                    content:[
                        {
                            id:1,
                            name:'Be sure the vehicle is on level ground.'
                        },
                        {
                            id:2,
                            name:'	The fluid level should be between the MAX and MIN marks on the side of the reservoir. Before removing the reservoir cap and adding brake fluid, clean the area around the reservoir cap thoroughly to prevent brake fluid contamination.'
                        },
                        {
                            id:3,
                            name:'If the level is low, add fluid to the MAX level. The level will fall with accumulated mileage. This is a normal condition associated with the wear of the brake linings.'
                        },
                        {
                            id:4,
                            name:'If the fluid level is excessively low, have the brake system checked by an authorized HYUNDAI dealer. Use only the specified brake fluid.'
                        }
                    ]
                },
                {
                    id:3,
                    name:'Checking the engine coolant level',
                    image:'5.jpg',
                    content:[
                        {
                            id:1,
                            name:'Never attempt to remove the radiator cap whilst the engine is operating or hot.'
                        },
                        {
                            id:2,
                            name:'The coolant level should be filled between the F (MAX) and L (MIN) marks on the side of the coolant reservoir when the engine is cool.'
                        },
                        {
                            id:3,
                            name:'	If the coolant level is low, add enough specified coolant to provide protection against freezing and corrosion. Bring the level to F (MAX), but do not overfill.'
                        },
                        {
                            id:4,
                            name:'	If frequent coolant refill is required, see an authorized HYUNDAI dealer for a cooling system inspection.'
                        }
                    ]
                },
                {
                    id:4,
                    name:'Checking the power steering fluid level',
                    image:'6.jpg',
                    content:[
                        {
                            id:1,
                            name:'Be sure the vehicle is on level ground.'
                        },
                        {
                            id:2,
                            name:'The fluid should be between the MAX and MIN marks on the side of the power steering reservoir at the normal temperature.'
                        },
                        {
                            id:3,
                            name:'If the level is low, add fluid to the MAX level.'
                        },
                        {
                            id:4,
                            name:'Use only the specified power steering fluid.'
                        },
                        {
                            id:5,
                            name:'	In the event the power steering system requires frequent addition of fluid, the vehicle should be inspected by an authorized HYUNDAI dealer.'
                        },
                    ]
                },
                {
                    id:5,
                    name:'Checking the washer fluid level',
                    image:'7.jpg',
                    content:[
                        {
                            id:1,
                            name:'The reservoir is translucent so that you can check the level with a quick visual inspection. Check the fluid level in the washer fluid reservoir and add fluid if necessary. Plain water may be used if washer fluid is not available. However, use washer solvent with antifreeze characteristics in cold climates to prevent freezing.'
                        },
                        {
                            id:2,
                            name:'	Do not use radiator coolant or antifreeze in the washer fluid reservoir.'
                        }
                    ]
                }
            ],
            content2:[
                {
                    id:1,
                    name:'Battery Care',
                    image:'8.jpg',
                    content:[
                        {
                            id:1,
                            name:'For best battery service : Keep the battery securely mounted.'
                        },
                        {
                            id:2,
                            name:'Keep the battery top clean and dry.'
                        },
                        {
                            id:3,
                            name:'Keep the terminals and connections clean, tight, and coated with petroleum jelly or terminal grease.'
                        },
                        {
                            id:4,
                            name:'Rinse any spilled electrolyte from the battery immediately with a solution of water and baking soda.'
                        },
                        {
                            id:5,
                            name:'If the vehicle is not going to be used for an extended time, disconnect the battery cables.'
                        },
                    ]
                }
            ],
            content3:[
                {
                    id:1,
                    name:'Tire Rotation',
                    image:'9.jpg',
                    content:[
                        {
                            id:1,
                            name:'	To equalize tread wear, it is recommended that the tires be rotated every 10,000 Km or sooner if irregular wear develops. During rotation, check the tires for correct balance.'
                        },
                        {
                            id:2,
                            name:'When rotating tires, check for uneven wear and damage. Abnormal wear is usually caused by incorrect tire pressure, improper wheel alignment, out-of –balance wheels, severe braking or severe cornering. Look for bumps or bulges in the tread or side of tire.'
                        },
                        {
                            id:3,
                            name:'Replace the tire if you find either of these conditions. Replace the tire if fabric or cord is visible. After rotation, be sure to bring the front and rear tire pressures to specification and check lug nut tightness.'
                        }
                    ]
                }
            ],
            content4:[
                {
                    id:1,
                    name:'Inner panel fuse replacement',
                    image:'10.jpg',
                    content:[
                        {
                            id:1,
                            name:'Turn the ignition switch and all other switches off.'
                        },
                        {
                            id:2,
                            name:'Open the fuse panel cover.'
                        },
                        {
                            id:3,
                            name:'Check the removed fuse; replace it if it is blown.'
                        },
                        {
                            id:4,
                            name:'	Push in a new fuse of the same rating, and make sure it fits tightly in the clips. If it fits loosely, consult an authorized HYUNDAI dealer.'
                        },
                        {
                            id:5,
                            name:'	If the headlights or other electrical components do not work and the fuses are OK, check the fuse block in the engine compartment. If a fuse is blown, it must be replaced.'
                        },
                        {
                            id:6,
                            name:'If the replacement fuse blows, this indicates an electrical problem. Avoid using the system involved and immediately consult an authorized HYUNDAI dealer.'
                        }
                    ]
                },
                {
                    id:2,
                    name:'Engine compartment panel fuse replacement',
                    image:'11.jpg',
                    content:[
                        {
                            id:1,
                            name:'Turn the ignition switch and all other switches off.'
                        },
                        {
                            id:2,
                            name:'Remove the fuse box cover by pressing the tap and pulling up.'
                        },
                        {
                            id:3,
                            name:'	Check the removed fuse; replace it if it is blown. To remove or insert the fuse, use the fuse puller in the engine compartment fuse panel.'
                        },
                        {
                            id:4,
                            name:'	Push in a new fuse of the same rating and make sure it fits tightly in the clips. If it fits loosely, consult an authorized HYUNDAI dealer.'
                        },
                        {
                            id:5,
                            name:'After checking the fuse box in the engine compartment, securely install the fuse box cover. If not, electrical failures may occur from water leaking in.'
                        },
                        {
                            id:6,
                            name:`	A vehicle's electrical system is protected from electrical overload damage by fuses.`
                        },
                        {
                            id:7,
                            name:`	The vehicle has generally 2 (or 3) fuse panels, one located in the driver's side panel bolster, the other in the engine compartment near the battery.`
                        },
                        {
                            id:8,
                            name:`	If any of your vehicle's lights, accessories, or controls do not work, check the appropriate circuit fuse. If a fuse has blown, the element inside the fuse will be melted.`
                        },
                        {
                            id:9,
                            name:`	If the electrical system does not work, first check the driver's side fuse panel. Always replace a blown fuse with one of the same rating.`
                        }
                    ]
                }
            ],
            content5:[
                {
                    id:1,
                    name:'Exterior Care',
                    image:'',
                    content:[
                        {
                            id:1,
                            name:'Wash your car thoroughly and frequently atleast a month.'
                        },
                        {
                            id:2,
                            name:'	While washing pay special attention on removal of any dirt, salt or any foreign particle.'
                        },
                        {
                            id:3,
                            name:'	For better washing, you may use a car washing shampoo to wash the vehicle.'
                        },
                        {
                            id:4,
                            name:'Caution : Do not use strong soap, chemical detergents or hot water to wash the vehicles.'
                        },
                        {
                            id:5,
                            name:'	Never wash the engine compartment with a water jet as it may cause failure of electrical components located in engine compartment.'
                        },
                    ]
                }
            ],
            content6:[
                {
                    id:1,
                    name:'Interior Care',
                    image:'',
                    content:[
                        {
                            id:1,
                            name:'	Prevent perfume and cosmetic oil from contacting the dashboard. If they do contact wipe off immediately.'
                        },
                        {
                            id:2,
                            name:'	Remove dust and loose dirt from the upholstery using a vacuum cleaner at regular intervals.'
                        },
                        {
                            id:3,
                            name:'	If the interior glass surface of the vehicle become fogged due to deposition of oily, greasy and waxy film, the same must be cleaned using a glass cleaner.'
                        },
                        {
                            id:4,
                            name:'	If the carpet becomes wet, do not let it be there for long, it may create a musty smell and corrode the floor.'
                        }
                    ]
                }
            ],
            content7:[
                {
                    id:1,
                    name:'Jacking instructions',
                    image:'',
                    content:[
                        {
                            id:1,
                            name:'The jack is provided for emergency tire changing only. To prevent the jack from "rattling" whilst the vehicle is in motion, store it properly. Follow jacking instructions to reduce the possibility of personal injury.'
                        }
                    ]
                },
                {
                    id:2,
                    name:'Removing and storing the spare tire',
                    image:'',
                    content:[
                        {
                            id:1,
                            name:'Your spare tire is stored underneath your vehicle, directly below the cargo area.'
                        }
                    ]
                },
                {
                    id:3,
                    name:'Jack and tools',
                    image:'12.jpg',
                    content:[
                        {
                            id:1,
                            name:'	The jack, jack handle, wheel brace are stored in the luggage compartment.'
                        },
                        {
                            id:2,
                            name:'Pull up the luggage box cover to reach this equipment : Jack handle, Jack & Wheel brace'
                        }
                    ]
                },
                {
                    id:4,
                    name:'To store the spare tire:',
                    image:'',
                    content:[
                        {
                            id:1,
                            name:'	Lay the tire on the ground with the valve stem facing up.'
                        },
                        {
                            id:2,
                            name:'	Place the wheel under the vehicle and install the retainer (1) through the wheel centre.'
                        },
                        {
                            id:3,
                            name:'Turn the wheel brace clockwise until it clicks.'
                        }
                    ]
                }
            ],
            content8:[
                {
                    id:1,
                    name:'Changing Tires',
                    image:'13.jpg',
                    content:[
                        {
                            id:1,
                            name:'	Park on a level surface and apply the parking brake firmly.'
                        },
                        {
                            id:2,
                            name:'	Shift the shift lever into R (Reverse).'
                        },
                        {
                            id:3,
                            name:'	Activate the hazard warning flasher.'
                        },
                        {
                            id:4,
                            name:'Remove the wheel brace, jack, jack handle, and spare tire from the vehicle.'
                        },
                        {
                            id:5,
                            name:'Block both the front and rear of the wheel that is diagonally opposite the jack position.'
                        },
                        {
                            id:6,
                            name:'Loosen the wheel nuts counterclockwise one turn each, but do not remove any nut until the tire has been raised off the ground.'
                        },
                        {
                            id:7,
                            name:'	Place the jack at the front or rear jacking position closest to the tire you are changing. Place the jack at the designated locations under the frame. The jacking positions are plates welded to the frame with two tabs and a raised dot to index with the jack.'
                        },
                        {
                            id:8,
                            name:'Insert the jack handle into the jack and turn it clockwise, raising the vehicle until the tire just clears the ground. This measurement is approximately30 mm (1.2 in). Before removing the wheel nuts, make sure the vehicle is stable and that there is no chance for movement or slippage.'
                        },
                        {
                            id:9,
                            name:'	Loosen the wheel nuts and remove them with your fingers. Slide the wheel off the studs and lay it flat so it cannot roll away. To put the wheel on the hub, pick up the spare tire, line up the holes with the studs and slide the wheel onto them. If this is difficult, tip the wheel slightly and get the top hole in the wheel lined up with the top stud. Then jiggle the wheel back and forth until the wheel can be slid over the other studs.'
                        },
                        {
                            id:10,
                            name:'	To reinstall the wheel, hold it on the studs, put the wheel nuts on the studs and tighten them finger tight. The nuts should be installed with their tapered small diameter ends directed inward. Jiggle the tire to be sure it is completely seated, then tighten the nuts as much as possible with your fingers again.'
                        },
                        {
                            id:11,
                            name:'Lower the vehicle to the ground by turning the wheel brace counterclockwise.'
                        }
                    ]
                }
            ],
            content9:[
                {
                    id:1,
                    name:'Emergency Starting',
                    image:'14.jpg',
                    content:[
                        {
                            id:1,
                            name:`	IF THE ENGINE DOES NOT START : If engine doesn't turn over or turns over slowly : Check the battery connections to be sure they are clean and tight.`
                        },
                        {
                            id:2,
                            name:'	Turn on the interior light. If the light dims or goes out when you operate the starter, the battery is discharged.'
                        },
                        {
                            id:3,
                            name:'	Check the starter connections to be sure they are securely tightened.'
                        },
                        {
                            id:4,
                            name:'	Do not push or pull the vehicle to start it.'
                        },
                        {
                            id:5,
                            name:'If engine turns over normally but does not start'
                        },
                        {
                            id:6,
                            name:`Check fuel level.`
                        },
                        {
                            id:7,
                            name:'	With the ignition switch in the LOCK/OFF position, check all connectors at ignition, coil and spark plugs. Reconnect any that may be disconnected or loose.'
                        },
                        {
                            id:8,
                            name:'	Check the fuel line in the engine compartment.'
                        },
                        {
                            id:9,
                            name:'If the engine still does not start, call an authorized HYUNDAI dealer or seek other qualified assistance. Connect cables in numerical order and disconnect in reverse order.'
                        }
                    ]
                },
                {
                    id:2,
                    name:'Jump starting',
                    image:'',
                    content:[
                        {
                            id:1,
                            name:'	Jump starting can be dangerous if done incorrectly. Therefore, to avoid harm to yourself or damage to your vehicle or battery, follow the jump starting procedures. If in doubt, we strongly recommend that you have a competent technician or towing service to jump start your vehicle.'
                        }
                    ]
                },
                {
                    id:3,
                    name:'Jump starting procedure',
                    image:'',
                    content:[
                        {
                            id:1,
                            name:'	Make sure the booster battery is 12-volt and that its negative terminal is grounded.'
                        },
                        {
                            id:2,
                            name:'	If the booster battery is in another vehicle, do not allow the vehicles to touch.'
                        },
                        {
                            id:3,
                            name:'Turn off all unnecessary electrical loads.'
                        },
                        {
                            id:4,
                            name:'	Connect the jumper cables in the exact sequence shown in the illustration First connect one end of a jumper cable to the positive terminal of the discharged battery (1), then connect the other end to the positive terminal on the booster battery (2). Proceed to connect one end of the other jumper cable to the negative terminal of the booster battery (3), then the other end to a solid, stationary, metallic point (for example, the engine lifting bracket) away from the battery (4). Do not connect it to or near any part that moves when the engine is cranked. Do not allow the jumper cables to contact anything except the correct battery terminals or the correct ground. Do not lean over the battery when making connections.'
                        },
                        {
                            id:5,
                            name:'Start the engine of the vehicle with the booster battery and let it run at 2,000 rpm, then start the engine of the vehicle with the discharged battery.'
                        },
                        {
                            id:6,
                            name:'If the cause of your battery discharging is not apparent, you should have your vehicle checked by an authorized HYUNDAI dealer.'
                        }
                    ]
                },
                {
                    id:4,
                    name:'CAUTION - Battery cables',
                    image:'',
                    content:[
                        {
                            id:1,
                            name:'Do not connect the jumper cable from the negative terminal of the booster battery to the negative terminal of the discharged battery. This can cause the discharged battery to overheat and crack, releasing battery acid.'
                        }
                    ]
                },
                {
                    id:5,
                    name:'CAUTION',
                    image:'',
                    content:[
                        {
                            id:1,
                            name:'	Use only a 12-volt jumper system. You can damage a 12-volt starting motor, ignition system, and other electrical parts beyond repair by use of a 24-volt power supply (either two 12-volt batteries in series or a 24-volt motor generator set).'
                        }
                    ]
                }
            ],
            content10:[
                {
                    id:1,
                    name:'CAUTION',
                    image:'',
                    content:[
                        {
                            id:1,
                            name:`	Be sure to replace the burned-out bulb with one of the same wattage rating. Otherwise, it may cause damage to the fuse or electric wiring system.`
                        },
                        {
                            id:2,
                            name:'	Open the bonnet.'
                        },
                        {
                            id:3,
                            name:'	Loosen the retaining bolts and remove the headlight assembly from the body of the vehicle.'
                        },
                        {
                            id:4,
                            name:'Disconnect the power connector from the back of the headlight assembly.'
                        },
                        {
                            id:5,
                            name:'	Remove the headlight bulb cover by turning it counterclockwise.'
                        },
                        {
                            id:6,
                            name:`	Disconnect the headlight bulb socket connector.`
                        },
                        {
                            id:7,
                            name:'	Unsnap the headlight bulb retaining wire by depressing the end and pushing it upward.'
                        },
                        {
                            id:8,
                            name:'	Remove the bulb from the headlight assembly.'
                        },
                        {
                            id:9,
                            name:'	Install a new headlight bulb and snap the headlight bulb retaining wire into position by aligning the wire with the groove on the bulb.'
                        },
                        {
                            id:10,
                            name:`Connect the headlight bulb socket connector.`
                        },
                        {
                            id:11,
                            name:'Install the headlight bulb cover by turning it clockwise.'
                        },
                        {
                            id:12,
                            name:'Connect the power connector to the back of the headlight assembly.'
                        },
                        {
                            id:13,
                            name:'Reinstall the headlight assembly to the body of the vehicle.'
                        }
                    ]
                },
                {
                    id:2,
                    name:'NOTICE',
                    image:'',
                    content:[
                        {
                            id:1,
                            name:'If the headlight aiming adjustment is necessary after the headlight assembly is reinstalled, consult an authorized HYUNDAI dealer.'
                        },
                        {
                            id:2,
                            name:'Prior to working on the light, firmly apply the parking brake, ensure that the ignition switch is turned to the "LOCK" position and turn off the lights to avoid sudden movement of the vehicle and burning your fingers or receiving an electric shock.'
                        }
                    ]
                }
            ]
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
.acc_content .detail .img{
    width: 28%;
} 
.acc_content .detail img{
    margin-left: auto;
    margin-right: auto;
}
</style>