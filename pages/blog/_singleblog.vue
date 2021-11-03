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
                    name:'I am Born Magnetic, I am i20',
                    time:'24-12-2020 4:15 PM',
                    mini_desc:'The meaning of being Born Magnetic can be different for different people, but their journeys are captivating because of their struggle to carve out a path for themselves despite the roadblocks thrown their way',
                    image:'car7.jpg',
                    description:`
                    <p style="color:black;margin:20px 0;"><b>The eyes of the beholder</b></p>
                    <p style="color:black;margin:20px 0;">Some questions always have different response. But, to come to think of it! It all just squares off to being enchanting and capitvating one! Our most recent i20 influencer campaign featuring all A-list celebrities begun with a simple question: “What is it like to be magnetic personality?” Is it to draw attention without seeking it, to be comfortable in your own skin, to be able to do more, effortlessly? Just like the all-new i20, the Indian Car of the Year 2021!”</p>
                    <p style="color:black;margin:20px 0;">
                    The meaning of being Born Magnetic can be different for different people, but their journeys are captivating because of their struggle to carve out a path for themselves despite the roadblocks thrown their way. To be able to be who they are, effortlessly. Like the i20, they are heard loud and clear without having to raise their voice. Are you one of them? Discover what it is like to be Born Magnetic, with the all-new i20 (The winner of the Indian Car of the Year Award)
                    </p>
                    `
                },
                {
                    id:2,
                    name:'Power of Digital:Creating Seamless Experience!',
                    time:'11-05-2019 4:21 PM',
                    mini_desc:'From providing a Virtual showroom experience- 3D configurator with audio hotspots (in English & Hindi Language) to provide customers real time buying experience to Flexible Buying Options. Customers can know stock availability as per product and Dealer selection.',
                    image:'blog8.jpg',
                    description:`
                    <p style="color:black;margin:20px 0;"><b>What a time to be alive isn’t it?</b></p>
                    <p style="color:black;margin:20px 0;">From providing a Virtual showroom experience- 3D configurator with audio hotspots (in English & Hindi Language) to provide customers real time buying experience to Flexible Buying Options. Customers can know stock availability as per product and Dealer selection. Customers can now choose a preferred Dealerships on Click to Buy based on their Google Ratings. Enhanced Online journey-Intuitive & interactive website UI/UX to ease customer’s online buying journey.</p>
                    <p style="color:black;margin:20px 0;"><b>Peace of Mind</b></p>
                    <p style="color:black;margin:20px 0;">We have not only adapted to the times but also leaped forward with this innovative platform.It is a beautifully streamlined process car buying that makes everyone’s life easier & convenient.Buying a car has never been this easy!.
                    Our one of a kind truly integrated platform, makes the online car buying process online by selecting your car, comparing, and choosing the right variants, getting the best online quotation and easy financing options from the leading banks, all with regular assistance from a sales consultant to answer your queries</p>
                    `
                },
                {
                    id:3,
                    name:'A million testaments of success',
                    time:'21-08-2018 10:38 AM',
                    mini_desc:'Hyundai has revolutionized the SUV segment in India. Today, one out of four SUVs on Indian roads is a Hyundai. This enviable success is symbolic of the great leaps taken by the brand for the people of India. ',
                    image:'blog7.webp',
                    description:`
                    <p style="color:black;margin:20px 0;"><b>Breaking the boundaries</b></p>
                    <p style="color:black;margin:20px 0;">Hyundai prides itself for introducing revolutionary models and advanced technologies for the ever so demanding Indian buyers. Our journey towards grabbing the leadership spot in the SUV segment began with models like TUCSON, SANTA FE and TERRACAN. And now, successful brands like CRETA and VENUE carry the proud Hyundai name forward.</p>
                    <p style="color:black;margin:20px 0;">We are also country’s first smart mobility solutions provider and the largest exporter since its inception. Today, we have crossed over 1 Million ‘Made in India’ SUVs sold cumulatively across domestic and export markets. This achievement also marks our two decade long journey, our manufacturing excellence and the unconditional admiration for brand Hyundai in India.</p>
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
              return eve.id == this.$route.params.singleblog;
            })
            this.singleBlog = item;
        }
    }
}
</script>

<style scoped>
@media only screen and (min-width:300px) and (max-width:600px){
    .signle_event{
        width: 85%!important;
    }
}
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