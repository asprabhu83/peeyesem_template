<template>
  <div class="my-16">
      <div>
          <div class="heading text-center my-5">Customer Speaks</div>
          <div class="select_input">
              <div class="head text-center my-3">Select Model</div>
              <div class="my-3">
                    <select
                    class="
                      shadow
                      appearance-none
                      border
                      rounded
                      w-full
                      py-2
                      px-3
                      text-gray-700
                      cursor-pointer
                      leading-tight
                      focus:outline-none
                      focus:shadow-outline
                    "
                    id="cars"
                    v-model="model"
                  >
                  <option class="text-xl " value="" >All Model</option>
                  <option class="text-xl" :value="model" v-for="model in cars"
                    :key="model.id" >{{model}}</option>
                  </select>
               </div>
          </div>
          <div class="testimonial_sec" v-if="model == ''">
              <div class="item" v-for="item in testimonial" :key="item.id">
                  <div class="top_sec">
                      <div class="left"><img class="mx-1" :src="require('@/assets/img/usericon.png')" alt="img"  /></div>
                      <div class="right">
                          <div class="head">{{item.name}}</div>
                          <div class="time">{{item.time}}</div>
                      </div>
                  </div>
                  <div class="description">
                      <div class="head">{{item.detail_heading.substring(0,37)}}<span  v-if="item.detail_heading !== ''">...</span></div>
                      <div class="desc">{{item.description.substring(0,50)}}...<button @click="ReadMore(item.id)">Read More</button></div>
                  </div>
              </div>
          </div>
          <div class="my-16" v-else>
              <div class="no_result_head">No Reviews Found!</div>
          </div>
      </div>
      <section class="form_modal_box" v-if="testimonialModal == true">
        <div class="w-4/12 card_body bg-white card mx-auto">
           <form class="pb-12">
               <div class="test_head px-4 flex items-center justify-between pt-6 pb-2 font-semibold">{{singleTestimonial.heading}}<font-awesome-icon icon="times"  size="1x" class="text-red-600 cursor-pointer" @click="testimonialModal = false" /></div>
               <hr class="mb-8" style="height:1px;background:gray;opacity:0.3;" />
               <div class="modal_description px-4">
                   {{singleTestimonial.description}}
               </div>
           </form>
        </div>
    </section>
  </div>
</template>

<script>
export default {
    data(){
        return{
            cars:[
                ' Santro ',
                ' All New i20 ',
                ' Grand i10 NIOS ',
                ' Aura ',
                ' All New Verna ',
                ' All New Elantra ',
                ' Venue ',
                ' All New Creta ',
                ' Alcazar ',
                ' All New Tucson ',
            ],
            model:'',
            testimonial:[
                {
                    id:1,
                    name:'Sathosh Reddy',
                    time:'11-04-2019',
                    detail_heading:'Lovely looks and good performance..u can bindly go for it',
                    description:`Good Riding Experience..Superb Looks...CC Wise Good Pickup.Mainantence Is Very Less Compare To Maruthi.Mileage 18 In City 21 On The Highway With Always AC On.Servicing Cost 2 Nd -Rs1500 3 Rd-Rs 3000 4th Paid Servicers 6500..Inculding Wheel Alignment. Electronic Mirrors Are Very Comfortable. Headrests Is Only Drawback In This Car.For A Height Of 5.9 It's Very Decent`
                },
                {
                    id:2,
                    name:'Mr. Joby George',
                    time:'06-01-2019',
                    detail_heading:'Low-cost maintenance and great customer service',
                    description:`Fluidic Design, Better Driving Position, Low-Cost Maintenance And Great Customer Service, As Compared To Fortuner & Endeavour, Were The Major Reasons For Me To Buy The Hyundai Tucson.`
                },
                {
                    id:3,
                    name:'Ms. Nayna H Patel',
                    time:'26-07-2018',
                    detail_heading:'Excellent car, outperformed all the other SUVs that I drove',
                    description:`Wanted To Purchase A SUV For My Birthday And After Having Test Driven Ford SUVs Where The Price Is Too Steep And Renault Duster, I Decided To Buy The Ultimate SUV Recently Launched - The Tucson. Excellent Car, Outperformed All The Other SUVs That I Drove And The Premium Feeling It Gives Is Great And Not To Mention Its Brilliant Smart High-Tech Features.`
                },
                {
                    id:4,
                    name:'Dimitiros Synanidis',
                    time:'25-09-2018',
                    detail_heading:'20 years ago i purchased my first Hyundai. Today, the entire family is a Hyundai family',
                    description:`20 Years Ago I Purchased My First Hyundai. Today, The Entire Family Is A Hyundai Family. Keep On Producing Great CARS!`
                },
                {
                    id:5,
                    name:'Mr. Mangal Kumar Agarwal',
                    time:'07-10-2018',
                    detail_heading:`I'm grateful for the wonderful treatment at the Hyundai dealership`,
                    description:`I Decided To Buy The Hyundai Elantra Because I Found Both The Interior & Exterior To Be Very Stylish As Compared To Honda City. I Knew I Made The Right Choice Not Only Because Of The Product, But The Entire Purchase Experience During Which I Felt Valued. I'm Grateful For The Wonderful Treatment At The Hyundai Dealership.`
                },
                {
                    id:6,
                    name:'Mr. Gaurav Aditya',
                    time:'23-11-2017',
                    detail_heading:'The looks of the Elantra are stellar',
                    description:`I Purchased The Hyundai Elantra Recently. It Has A Lot Of High-Tech Features Which I Couldn’t Find In Any Other Car For A Good Price. The Looks Of The Elantra Are Stellar. Overall I Am Very Happy And Content With The Purchase Of My Elantra.`
                },
                {
                    id:7,
                    name:'Mr. Ramakant Verma',
                    time:'27-02-2019',
                    detail_heading:'',
                    description:`I Was Eagerly Waiting For The Launch Of The Hyundai Elantra As I Really Wanted To Buy This Car. I Really Like The Premium And Stylish Looks Of The Elantra And Also The Fact That It Is Packed With All The Important Features. It Is Much Better As Compared To Skoda Which Was Recommended To Me By A Friend.`
                },
                {
                    id:8,
                    name:'Mr. Hiralal Choudhary',
                    time:'15-11-2018 ',
                    detail_heading:'',
                    description:`Bought The Hyundai Elantra, Which Was Recommended To Me By Friends Its Best In Class And First In Class Features And Its Powerful Petrol Engine. It’s A Total Stunner On The Road; Feels Luxurious And Is Extremely Spacious. It Scores Much Above The Toyota Octavia In My Opinion.`
                },
                {
                    id:9,
                    name:'Mr. R Raman Kasharbani',
                    time:'29-12-2018 ',
                    detail_heading:'',
                    description:`I Was Absolutely Impressed With The Design Of The Elantra. Nothing Comes Close To The Stunning Fluidic Design Of The Hyundai Elantra In India And It Comes With So Many High-Tech Features Which Made It An Irresistible Purchase For Me. The List Of 1st-In-Class And Best-In-Segment Features Is Huge And Hyundai Elantra Offers All That For A Very Good Price. `
                }
            ],
            singleTestimonial:{
                heading:'',
                description:''
            },
            testimonialModal:false
        }
    },
    methods:{
        ReadMore(id){
            var item = this.testimonial.filter((item)=>{
                return item.id == id;
            })
            const [testimonial] = item;
            const {detail_heading,description} = testimonial;
            this.singleTestimonial.heading = detail_heading;
            this.singleTestimonial.description = description;
            this.testimonialModal = true;
        }
    }
}
</script>

<style scoped>
.testimonialModal{
    font-size: 19px;
    font-weight: 500;
}
.modal_description{
    font-size: 16px;
}
.no_result_head{
    text-align: center;
    font-size: 24px;
    font-weight: 600;
}
.select_input{
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}
.select_input select{
    width: 50%;
}
.heading{
    font-size: 24px;
    font-weight: 600;
}
.testimonial_sec{
    width: 80%;
    margin: 60px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.testimonial_sec .item{
    width: 30%;
    margin: 20px;
    box-shadow: 0 2px 10px 4px rgb(0 0 0/15%);
    border-radius: 6px;
}
.item .top_sec{
    display: flex;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid black;
}
.top_sec .left, .top_sec .right{
    margin: 5px 15px;
}
.top_sec .right .head{
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 4px;
}
.top_sec .right .time{
    font-size: 14px;
}
.description{
    padding: 20px;
}
.description .head{
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 15px;
}
.description .desc{
    font-size: 15px;
}
.description .desc button{
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    color: #002c5f;
    font-weight: 500;
}
</style>