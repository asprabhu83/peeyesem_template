<template>
  <div class="my-24">
    <div class="news_heading my-16">
      <h3 class="text-center">News & Events</h3>
    </div>
    <div class="news_events_item_box">
      <div class="item" v-for="item in newsAndEvents" :key="item.id">
          <div class="photo_box cursor-pointer">
             <nuxt-link :to="'/news-events/'+ item.id"> <img :src="require('@/assets/img/cars/news_events/' + item.image)" alt="img" style="width:100%;" /></nuxt-link>
          </div>
          <div class="detail">
              <div class="head cursor-pointer">{{item.name}}</div>
              <div class="btn_box">
                  <button><nuxt-link :to="'/news-events/'+ item.id"> Read More</nuxt-link></button>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsAndEvents: [
        {
          id: 1,
          name: "Hyundai Motor India Rolls-Out Fastest ‘10 Millionth’ Car",
          image: "1.webp",
          description: `
                    <p>
                       CHENNAI, June 30, 2021: Hyundai Motor India Ltd (HMIL), India’s first Smart Mobility Solutions Provider and largest exporter since inception, reinstated its commitment of Make-in-India with the fastest roll out of 10 million cars from its state-of-art manufacturing facility in India near Chennai, Tamil Nadu. The unparalleled milestone of achieving production of 10 million cars is a result of smart manufacturing and re-affirms Hyundai’s commitment towards making India Self Reliant. The achievement reiterates HMIL’s support towards State and Central Governments to accentuate economic recovery by overcoming the challenges posed by Covid-19 pandemic. Hyundai ALCAZAR became the 10 millionth car to roll out of the production line at HMIL’s plant in Sriperumbudur. Thiru. M.K.Stalin, Hon’ble Chief Minister of Tamil Nadu signed on the car bonnet to mark the momentous occasion.
                    </p>
                    `,
        },
        {
            id:2,
            name:`Hyundai ALCAZAR Makes a Grand Entrance in the 6 and 7 Seater SUV Space with Over 11000 Bookings`,
            image:'2.webp',
            description:'Commenting on the remarkable bookings performance, Mr Tarun Garg, Director (Sales, Marketing & Service), Hyundai Motor India Ltd., said, “Hyundai ALCAZAR has received an overwhelming response from customers with over 11 000 Bookings received in less than a month since its launch. This superlative response showcases our customer’s affinity towards a high value, versatile and premium package that Hyundai ALCAZAR epitomizes perfectly. We are truly humbled and grateful to our customers who have chosen to live the Grand life with the Hyundai ALCAZAR.”'
        },
        {
            id:3,
            name:'Hyundai takes Fun Driving to a New Level: Announces Introduction of N Line range for India',
            image:'3.webp',
            description:`Commenting on the introduction of N Line, Mr. S S Kim, MD & CEO, Hyundai Motor India Ltd., said, “As the country’s leading smart mobility solutions provider, Hyundai has been redefining the mobility landscape with products that take customer aspirations to new heights. The introduction of our N Line range to India, will induce sporty experiences like never before, making every drives a fun experience with products that personify excitement and athleticism.`
        },
        {
            id:4,
            name:`Experience Excitement Every Day with the most awaited Hyundai i20 N Line, Bookings Now Open`,
            image:'4.webp',
            description:`Gurugram, August 24, 2021: Hyundai Motor India Ltd., country’s first Smart Mobility Solutions Provider and largest exporter since inception, today unveiled and opened bookings for its highly anticipated - i20 N Line, the first model to debut under Hyundai’s N Line range of cars for India. Deriving inspiration from Motorsports styling, i20 N Line fuses exhilarating style with a dynamic driving experience to deliver excitement every day. Customers can now book i20 N Line online on the Hyundai Click to Buy platform https://clicktobuy.hyundai.co.in or at Hyundai Signature Dealerships across the country for Rs 25 000/- only.`
        },
        {
            id:5,
            name:'Hyundai Motor India Foundation Pledges Support to Tamil Nadu Government',
            image:'5.webp',
            description:'Chennai, May 19, 2021: Hyundai Motor India Foundation (HMIF), the CSR arm of Hyundai Motor India Ltd. (HMIL) today donated Rs 5 Crores to the “Chief Minister Public Relief Fund” under Hyundai Cares 3.0 COVID-19 relief initiative, to strengthen the state’s war against the second wave of the pandemic. The donation was handed over to Honourable Chief Minister of Tamilnadu Thiru  M K Stalin. Additionally, a donation of Rs 5 Crores worth of Medicare Equipment has been announced, comprising of medical equipment such as High Flow Nasal Oxygen machines, Bipap machines, Oxygen concentrators and 2 oxygen plants to be set-up at government hospitals in Tondiarpet and Tambaram. On the anvil are some other medical consumables for front line workers of various hospitals.'
        },
        {
            id:6,
            name:`Hyundai Motor India Continues Leadership in Exports`,
            image:'6.webp',
            description:`Commenting on the remarkable achievement, Mr. S S Kim, MD & CEO, Hyundai Motor India Ltd. said, “Despite numerous challenges emerging out of the global pandemic, uncertainty in various markets, restriction on imports and disruption in supply-chain, HMIL has continued to drive operational excellence to ensure customer satisfaction. An export of 1 04 342 units in FY 20-21 stands testament to our indomitable spirit. It is a moment of great pride for Hyundai as we step forward in the journey of making world class quality cars from India. Our Smart Manufacturing Processes have led us to maintain our leadership position in passenger vehicle exports and strengthened our commitment to Make in India for the World.” `
        }
      ],
    };
  },
  mounted(){
    window.scrollTo(0, 0)
  }
};
</script>

<style scoped>
@media only screen and (min-width:300px) and (max-width:600px){
  .news_events_item_box{
    width: 96%!important;
  }
  .news_events_item_box .item{
    width: 100%!important;
    margin: 20px 14px !important;
  }
}
.news_events_item_box{
    width: 85%;
    margin: 40px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
.news_events_item_box .item{
    width: 25%;
    margin: 20px 30px;
    box-shadow: 0 2px 10px 4px rgb(0 0 0/15%);
    border-radius: 8px;
    overflow: hidden;
}
.news_events_item_box .item .detail{
    padding: 20px;
}
.news_events_item_box .item .detail .head{
    font-size: 16px;
    font-weight: 600;
    margin: 10px 0;
}
.btn_box{
    text-align: center;
    margin-top: 30px;
    margin-bottom: 10px;
}
.btn_box a:hover{
    color: white!important;
}
.btn_box button{
    padding: 3px 15px;
    background: #002c5f;
    color: white;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 4px;
}
</style>