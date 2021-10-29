<template>
  <div>
      <div class="signle_event" v-for="event in singleEvent" :key="event.id">
          <div class="heading my-5">{{event.name}}</div>
          <div class="image_sec">
              <img :src="require('@/assets/img/cars/news_events/' + event.image)" alt="img" style="width:100%;" />
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
            newsAndEvents: [
        {
          id: 1,
          name: "Free Emission Check, Dry Wash And AC Check-Up For Hyundai Cars  ",
          image: "1.jpg",
          description: `
                    <p>Digital campaign - #DontBeAnIdler to encourage customers to save fuel and reduce ‘Air pollution’</p>
                    <p>New Delhi, June 05, 2019: Hyundai Motor India Ltd., the country’s first Smart Mobility Solutions Company and the largest exporter since inception announced initiatives driving customer focus towards ‘Air Pollution’ and ‘Water Conservation’ on ‘World Environment Day 2019’.</p>
                    <p>The Environment Camps across all Hyundai Service Centres will be organized in line with its commitment to sustainable social development and preservation of the environment. The key components of the camp will entail the following benefits:</p>
                    <p>Free Emission Check-up for all visiting vehicles Free AC Check-up for clean cabin Air Free Dry Wash PUC check-up at select service centers Customer Education about regular maintenance of vehicles at authorized service centers</p>
                    <p>Commenting on the initiatives, Mr.S Punnaivanam, Vice President – Customer Care, Hyundai Motor India said, “Being a socially responsible and caring brand, Hyundai is committed to upholding its promise of creating a significant difference to the Environment. We adopt eco-friendly initiatives across all processes at workshop and dealerships at a Pan India level. A digital campaign- #DontBeAnIdler on air pollution urging customers to switch off the engine, while waiting at traffic signals will be key to drive behavioral change across the masses.”
                     In addition to this, HMIL inducted all its 494 Hyundai Dealerships and 1319 Service Workshops to ensure healthy workshop environment practices for its staff such as technicians to wear masks while paint jobs, air filter cleaning, etc and reduce the usage of Non-Biodegradable plastic and encourage the use of jute, cloth and biodegradable bags at workshops.
                    Hyundai encourages its valuable customers to opt dry wash for their Hyundai car during service thereby saving approx.120 liters per car. In 2017, Hyundai launched a 45 days campaign – ‘Save Water, Share Water’ across India thus saving 40 lakhs litres of Water through Dry wash and distributed the same amount of drinking water in drought-affected areas in Tamil Nadu and Andhra Pradesh. Hyundai has introduced these initiatives to conserve water, control pollution and conserve energy across its network.
                     To ensure sustainable practices throughout the year, HMIL plant spread across 535 acres follows eco-friendly processes in order to conserve resources and reduce consumption. HMIL recently planted the One-Millionth Tree at the facility and maintain Zero discharge policy with 100% recycling of water and follow Rainwater harvesting. The area is covered with a 56-acre Green Belt inside the plant with flora and fauna. for more details Visit your nearest Advaith Hyundai today, or call:9731097310</p>
                    `,
        },
        {
            id:2,
            name:`Hyundai Kona - India's 1st Electric SUV Coming Soon To Advaith Hyundai`,
            image:'2.jpg',
            description:'Versatile and powerful, the KONA Electric will be the first fully electric SUV in India. Its power packed performance provides a thrilling driving experience with high acceleration over long distances. KONA Electric is here to change the way people think about going electric. Highlights of the KONA Electric - Highest Electric Driving Range - Convenience to charge anywhere - Packed with Hi-Tech & Premium features - Design optimized for superior aerodynamics - Automatic Transmission for a convenient driving experience. - Super Silent'
        },
        {
            id:3,
            name:'Celebrates 1st Month Anniversary Of VENUE ',
            image:'3.jpg',
            description:`Hyundai India Celebrates 1st Month Anniversary Of VENUE With Delivery Of over 1,000 Cars To Customers In One Single Day - Over 1,000 retail deliveries to customers of VENUE today across the country - VENUE registered over 33,000 bookings highest ever in less than a month of its launch - Over 2 Lac customers expressed “Interest to Purchase” since its Preview New Delhi, June 21, 2019: Hyundai Motor India Ltd., the country’s first Smart Mobility Solutions Company and the largest exporter since inception, today celebrates 1st month Anniversary of Hyundai VENUE, India’s First Connected SUV with over 1,000 retail deliveries to customers of VENUE in a single day. With VENUE, Hyundai has steered the path for Connected Cars in India and once again revolutionized the Industry. Commenting on a momentous day, Mr Vikas Jain, National Sales Head, Hyundai Motor India Ltd. said, “Hyundai VENUE has bolstered our commitment towards offering Smart Mobility Solutions to India’s aspirational customers’ needs. Being India’s first Connected SUV with Blue Link Technology, VENUE received a phenomenal response. Today, as we celebrate 1st month Anniversary of VENUE, I’m overwhelmed to share its historic success with record bookings of 33,000 cars in less than a month and retail delivery of over 1,000 units in a single day. I’m confident that Hyundai VENUE will create new milestones making our customers’ life a ‘Happy Life’.”`
        },
        {
            id:4,
            name:`Unveils The Most Awaited Hyundai's Smart SUV ‘Venue’`,
            image:'car4.webp',
            description:`Mangaluru, May 21: The long-awaited Hyundai's subcompact SUV ‘Venue’ was launched at Advaith Hyundai Mangalore at Kuntikana on Tuesday, May 21. Trustee of Kanathoor temple Dr Deviprasad kamath, MD of Balaji Enterprises Vishwanath Prabhu, president of Merchants Association C A Rahim, and entrepreneur P B Shenoy unveiled the new car along with Rajesh Ullal, showroom manager, Shivaprasad, sales head, Shashikanth Shetty, cluster head, Meena Rego, Harsharaj and Sudhakar. After the unveiling of the car, chief guests congratulated and gave their best wishes to the team on their success. Rajesh Ullal then handed over the keys to first buyers and thanked them for showing faith and love in Hyundai Venue. Hyundai Venue includes a cascading grille with chrome detailing, projector headlamps with LED DRLs, high mounted indicators, and projector foglamps. The SUV also gets a set of new sporty 16-inch alloys, roof rails, and LED taillamps with Z cluster patterns. Hyundai will offer the SUV in 7 exterior color options- Denim Blue, Lava Orange and Deep Forest along with three Dual Tone options, Speed DCT, Air purifier, Rear AC Vents, Wireless Charger, Cornering Lamps, 6 Airbags, Arkamys sound, Voice recognition, AHSS (Advanced High Strength Steel), Bluelink, Vehicle stability management(VSM), Hiss assist control (HAC).`
        },
        {
            id:5,
            name:'Mr.Gurukiran, Unveils The All New Hyundai Creta At Advaith Hyundai',
            image:'5.jpg',
            description:'Mr.Gurukiran, Sandalwood Music Director, unveils the All new Hyundai Creta at Advaith Hyundai residency road'
        },
        {
            id:6,
            name:` 23rd Free Car Care Clinic`,
            image:'6.jpg',
            description:` 23rd Free car care clinic grand inauguration by Ms, Mayuri, Sandalwood Actress at Mission Road`
        }
            ],
            singleEvent:[]
        }
    },
    mounted(){
        this.filterEvent();
    },
    methods:{
        filterEvent(){
             var item = this.newsAndEvents.filter((eve)=>{
              return eve.id == this.$route.query.id;
            })
            this.singleEvent = item;
            console.log(this.singleEvent)
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