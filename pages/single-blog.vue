<template>
  <div>
      <div class="signle_event" v-for="event in singleBlog" :key="event.id">
          <div class="heading my-3">{{event.name}}</div>
          <div class="time mt-3 mb-4">{{event.time}}</div>
          <div class="image_sec">
              <img :src="require('@/assets/img/cars/blog/' + event.image)" alt="img" style="width:100%;" />
          </div>
          <div class="description my-16" v-html="event.description">

          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
             blogs:[
                {
                    id:1,
                    name:'How To Choose The Best Mechanic For Car Repair',
                    time:'24-12-2020 4:15 PM',
                    mini_desc:'A Car Is More Than Just A Machine. In Many Indian Families, Car Is Considered An Inseparable Part Of The House And Caring For It Is Of Utmost Importance. There Are Many Factors You Can Consider When Getting Your Car Serviced/Repaired At A Service Station. In This Write-Up, We Will Try And Find Out Five Of The Most Important Questions You Must Ask Your Mechanic Before Leaving Your Car For Service',
                    image:'1.png',
                    description:`
                    <p style="color:black;margin:20px 0;">A Car Is More Than Just A Machine. In Many Indian Families, Car Is Considered An Inseparable Part Of The House And Caring For It Is Of Utmost Importance. There Are Many Factors You Can Consider When Getting Your Car Serviced/Repaired At A Service Station. In This Write-Up, We Will Try And Find Out Five Of The Most Important Questions You Must Ask Your Mechanic Before Leaving Your Car For Service. Read On To Find Out.</p>
                    <p style="color:black;margin:20px 0;"><b>5 Things You Must Ask Your Mechanic Before Getting Your Car Fixed</b></p>
                    <p style="color:black;margin:20px 0;"><b>Service Authorisation</b></p>
                    <p style="color:black;margin:20px 0;">You Can Either Get Your Car Repaired/Serviced From A Brand Authorised Service Centre Or From A Regular Mechanic. It Is Very Important For You To Check For Service Authorisation Because An Authorised Centre Has The Right Workforce With The Best Training. You Get The Right Service Suggestions From The Advisors And Preventive Measures Are Taken To Improve The Life Of Your Car And Enhance Your Car Ownership Experience.</p>
                    <p style="color:black;margin:20px 0;"><b>About Spare Parts</b></p>
                    <p style="color:black;margin:20px 0;">It Is Very Important To Check If Quality Spare Parts Are Used By Your Mechanic For Repair/Service Job. It Is Always Advisable To Go For Genuine Spare Parts From The Manufacturer. These Spare Parts Have Longer Life Compared To The Spare Parts From Local Vendors. You Can Also Check For Warranty Over Spares So That You Can Feel More Secure.</p>
                    <p style="color:black;margin:20px 0;"><b>Cost</b></p>
                    <p style="color:black;margin:20px 0;">Cost Is One Of The Most Important Factors When Choosing The Best Mechanic Or Service Centre For Your Car. Not All Service Centres Charge The Same When It Comes To Repair Or Periodic Maintenance. The Labour Charges And The Approach Towards Resolving Issues Can Be Different From One Workshop To The Other. You Must Also Be Aware Of Hidden Costs That The Mechanic Or Service Centre Can Charge You. This Helps You Avoid Surprises During Bill Payment. It Is Always Good To Get A Proper Estimate Of The Cost Of Service Or Repair Before Going Ahead With The Job.</p>
                    <p style="color:black;margin:20px 0;"><b>Range Of Services</b></p>
                    <p style="color:black;margin:20px 0;">Not All Mechanics Or Car Service Stations Are Equipped To Perform All Sorts Of Services. Today’s Cars Are Equipped With The Most Sophisticated Electronic Equipment. There Are Many Electrical Parts And Mechanical Parts That Go Into Your Car. It Is Important For You To Be Aware Of The Abilities And Expertise Of The Mechanic Or Service Centre In Handling The Issues Of Your Car.</p>
                    <p style="color:black;margin:20px 0;"><b>Insurance Cover</b></p>
                    <p style="color:black;margin:20px 0;">In The Event Of An Accident, You Might Need To Go For An Insurance Claim To Get Your Vehicle Fixed From The Service Centre Or The Mechanic’s Workshop. The Insurance Companies Normally Have Tie-Ups With A Network Of Service Centres For Cashless Claim. This Means That The Bills Of Your Car Service Is Settled Directly By The Insurance Provider And You Do Not Have To Worry About Paying. In The Contrary, If The Service Centre/Workshop Doesn’t Fall Under The Network, Then You May Have To Bear The Bill Initially And Later Submit The Claim Application To The Insurance Company.</p>
                    <p style="color:black;margin:20px 0;"><b>How To Choose The Right Service Centre For Your Hyundai Car?</b></p>
                    <p style="color:black;margin:20px 0;">Your Hyundai Car Deserves The Right Amount Of Attention And Care. Advaith Hyundai Is One Of Those Car Care Centres Which Is Equipped With The Best Workforce And Quality Equipment To Address The Needs Of Your Car. Our Service Advisers Dedicate Time To Listen To Your Concerns About The Car And Provide You The Best Suggestions. We Strictly Go By The Consent Of Our Customers At Every Step When Servicing Or Repairing The Car. With No Add-On Spares Or Hidden Costs, You Can Feel Relaxed And Delighted About The Experience Of Getting Your Car Serviced At Our Car Care Centre. So Why Wait? Book Your Hyundai Car Service Appointment Today!</p>
                    `
                },
                {
                    id:2,
                    name:'Hyundai VENUE Creates History With Record Bookings On Day 1',
                    time:'11-05-2019 4:21 PM',
                    mini_desc:'- Over 2,000 Customers Preferred Connected World Of VENUE - Every Hour 84 VENUE Booked - Design, Power, Transmission And Connectivity Tops Vehicle Preference Chart New Delhi, May 03, 2019: Hyundai Motor India Ltd., ',
                    image:'2.jpg',
                    description:`
                    - Over 2,000 Customers Preferred Connected World Of VENUE - Every Hour 84 VENUE Booked - Design, Power, Transmission And Connectivity Tops Vehicle Preference Chart New Delhi, May 03, 2019: Hyundai Motor India Ltd., The Country’s Second Largest Car Manufacturer And The Largest Exporter Since Inception Have Received An Overwhelming Response To The Commencement Of VENUE Bookings Starting May 2, 2019. Hyundai VENUE Creates History With Record Booking On Day 1 As Over 2,000 Customers With An Average Of 84 SUV’s Every Hour. Commenting On The VENUE Bookings, Mr. Vikas Jain, National Sales Head, Hyundai Motor India Ltd. Said, “We Are Overwhelmed With The Enthusiastic Response Received From Our SUV Loving Customers. The Day One Response Is A Record Booking For An SUV, With An Average Of 84 VENUE Every Hour. We Are Receiving Customer Enquiries At All Our Touch Points Across India As VENUE Tops Vehicle Preference Chart In Design, Power, Transmission And Connectivity. Further, The Notable Traction On Online Booking Is Coming From Semi-Urban Areas Due To Strong Telecom Infrastructure. This Showcases Emergence Of New Era Of Connected Mobility Solutions And Acceptance Of Technology In Day-To-Day Life.” “We Are Confident That Hyundai VENUE Will Bring Excitement And Cheer To Indian Auto Industry For A Positive Business Environment.”, He Added. For More Details Visit Advaith Hyundai Showrooms Today To Book Hyundai Venue - Https://Www.Advaithhyundai.Com/Hyundai-Venue
                    `
                },
                {
                    id:3,
                    name:'Hyundai Unveils ‘The Next Gen VERNA’ In India',
                    time:'21-08-2018 10:38 AM',
                    mini_desc:' Modern And Futuristic Design Enhances The Sporty & Dynamic Appeal.Globally Successful Model With Over 8.8 Million Customers In Over 66 Countries And 3.17 Lakh Units Sold In India.All New Platform Offering Superior Ride And Handling',
                    image:'3.jpg',
                    description:`
                    <p style="color:black;margin:20px 0;">Modern And Futuristic Design Enhances The Sporty & Dynamic Appeal</p>
                    <p style="color:black;margin:20px 0;"> Globally Successful Model With Over 8.8 Million Customers In Over 66 Countries And 3.17 Lakh Units Sold In India</p>
                    <p style="color:black;margin:20px 0;"> ‘SUPER BODY STRUCTURE’ With 50% Advanced High Strength Steel Ensuring Low NVH, Enhanced Safety & Performance</p>
                    <p style="color:black;margin:20px 0;"> All New Platform Offering Superior Ride And Handling</p>
                    <p style="color:black;margin:20px 0;"> Loaded With New Technology And Advanced Features</p>
                    <p style="color:black;margin:20px 0;">Chennai, August 4, 2017 – Hyundai Motor India Ltd, The Country’s 2nd Largest Car Manufacturer And Leading Passenger Car Exporter Today, Unveiled The Much-Awaited Super Performer Brand – The Next Gen ‘VERNA’ With SUPER BODY STRUCTURE. Hyundai Motor India Breaks New Ground With Its 5th Generation Game-Changer Sedan Slated For Launch On August 22, 2017.</p>
                    <p style="color:black;margin:20px 0;">The Next Gen Verna Is A Technological Marvel Developed With Futuristic Design, Dynamic Performance , Super Safety And New Technology & Advanced Features. The Superior Performance Of Next Gen Verna Stems From Vehicle’s SUPER BODY STRUCTURE Frame Built Out Of 50% Advanced High Strength Steel (AHSS).</p>
                    <p style="color:black;margin:20px 0;">Speaking At The Showcase, Mr. Y.K Koo, Managing Director & CEO, HMIL Said, “ We Are Proud To Announce The Unveiling Of The Most Awaited And Aspirational Next Gen Verna For Indian Market. The 5th Generation Next Gen Verna Is A True Expression Of A Superior Sedan Crafted With Perfection And Excellence In Engineering. Next Gen Verna Will Create A Disruption In The Sedan Segment With Its Benchmark Features And Performance For Customers’ Delight. Verna Has A Rich Legacy And Has Strong Presence In More Than 66 Countries For Over 8.8 Million Customers Across The World And 3.17 Lakh Units In India.”</p>
                    <p style="color:black;margin:20px 0;">The Next Gen Verna Is A Result Of Our Numerous Product Clinics And Rigorous Product Tests On Various Terrains In India And Worldwide. Our R&D Centre In Namyang (S. Korea), Chennai And Hyderabad Has Put Extreme Efforts To Make This A World-Class Sedan For Product Supremacy And Utmost Customer Satisfaction, He Added.”</p>
                    <p style="color:black;margin:20px 0;">SUPER BODY STRUCTURE The Next Gen Verna With ‘SUPER BODY STRUCTURE’ Is Built On Advanced High Strength Steel (AHSS) Body Structure Including Hot Stamping Applications That Enables The Sedan For Superior Performance And Unmatched Safety Ensuring Best-In-Class Body Rigidity, Structural Changes And Crash Performance. The Rigid And Responsive Chassis, And Improved Impact Harshness Offers Superior Road Feedback To The Driver For A Confident Driving Experience. The SUPER BODY STRUCTURE Ensures Adequate Weight Control Thus Enhancing Both Performance And Fuel Efficiency. The Next Gen Verna Has Outstanding Low NVH Characteristics By The Use Of Enhanced Sound Absorption Materials And STRONG BODY STRUCTURE (AHSS) And Improved Engineering Of Design. Multiple Measures Have Been Taken To Contain NVH To Barely Perceptible Traces Such As Engine And Transmission Mount Design Change, Implementation Of Tunnel Insulator, Extensive Application Of Foam Filler In Cavity Etc. Superior Ride & Handling The Next Gen Verna Is Engineered To Deliver Superior Ride And Handling For Utmost Driver Confidence And Enthusiastic Driving Experience. The 5th Generation Verna Is Built On The All New K2 Platform Thus Enabling Precise Tuning Of Key Suspension Components For Enhanced Cornering And High Speed Stability, Superior Ride Comfort And Precise Handling Performance, Making It The Next Gen Sedan Optimised For Indian Conditions. The Rear Suspension Geometry Has Been Modified For Stable And Comfortable Ride For Rear Passengers By Vertical Angle Of Rear Shock Absorbers And Coil Springs On The Coupled Torsion Beam Axle. The Front Suspension Uses An Optimally Designed McPherson Strut With Coil Springs And Gas Shock Absorbers Along With A Front Stabilizer To Help Reduce The Body Roll When Cornering. The Standard Motor-Driven Power Steering System (MDPS) Has Been Tuned To Provide Superior Feedback While Cornering And At High Speeds Thus Delivering Precise Handling Response And Confident Drive. The Front Wheel Caster Angle Has Been Modified To Further Enhance The Steering Feedback To The Driver At Highway Speeds. Engine And Transmission The Next-Gen Verna Is Equipped With The Most Powerful Powertrain Options With A Choice Of Two Power Packed 1.6 Litre Dual VTVT Petrol And 1.6 Litre U2 CRDi VGT Diesel Engine. The Engines With Advanced 6 Speed Manual And 6 Speed Automatic Transmissions Have Been Tuned To Provide Superior Low And High Speed Performance To Suite City & Highway Driving With High Fuel Efficiency. The Best-In-Class Powerful 1.6 Litre Dual VTVT Petrol Engine Offers 123PS Power With High Fuel Efficiency And 1.6 Litre U2 CRDi VGT Diesel Engine Offers Best In Segment 128PS Power. Bookings Open The Booking For Customer Starts Today At All The Dealerships Across India.</p>
                    `
                }
            ],
            singleBlog:[]
        }
    },
    mounted(){
        this.filterEvent();
    },
    methods:{
        filterEvent(){
             var item = this.blogs.filter((eve)=>{
              return eve.id == this.$route.query.id;
            })
            this.singleBlog = item;
        }
    }
}
</script>

<style scoped>
.signle_event{
    width: 60%;
    margin: 60px auto;
}
.heading{
    font-size: 24px;
    font-weight: 600;
}
.description{
    font-size: 16px;
    color: black;
}
</style>