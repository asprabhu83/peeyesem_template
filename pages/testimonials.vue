<template>
  <div class="my-16">
      <div>
          <div class="heading text-center my-5">Customer Speaks</div>
          <div class="testimonial_sec" >
              <div class="item" v-for="item in $store.state.TestimonialData" :key="item.id">
                  <div class="top_sec">
                      <div class="left"><img class="mx-1" :src="require('@/assets/img/usericon.png')" alt="img"  /></div>
                      <div class="right">
                          <div class="head">{{item.authour}}</div>
                          <div class="time">{{JSON.parse(item.data_value).date}}</div>
                      </div>
                  </div>
                  <div class="description">
                      <div class="head">{{JSON.parse(item.data_value).title}}<span  v-if="JSON.parse(item.data_value).title !== ''">...</span></div>
                      <div class="desc">{{item.quote.substring(0,50)}}...<button @click="ReadMore(item.id)">Read More</button></div>
                  </div>
              </div>
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
            singleTestimonial:{
                heading:'',
                description:''
            },
            testimonialModal:false
        }
    },
    mounted(){
        if(this.$store.state.TestimonialData.length == 0){
            this.GetTestimonialData();
        }
    },
    methods:{
        ReadMore(id){
            var item = this.$store.state.TestimonialData.filter((item)=>{
                return item.id == id;
            })
            const [testimonial] = item;
            const {data_value,quote} = testimonial;
            var Heading = JSON.parse(data_value);
            this.singleTestimonial.heading = Heading.title;
            this.singleTestimonial.description = quote;
            this.testimonialModal = true;
        },
        GetTestimonialData(){
            this.$axios.get(process.env.baseUrl + 'api/testimonial/index')
            .then((response) => {
            this.$store.state.TestimonialData = response.data;
            })
            .catch((error) => {
            console.log(error)
            })
        }
    }
}
</script>

<style scoped>
@media only screen and (min-width: 760px) and (max-width: 960px){
    .testimonial_sec{
        width: 100%!important;
    }
    .testimonial_sec .item{
        width: 40%!important;
    }
}
@media only screen and (min-width: 961px) and (max-width: 1030px){
    .testimonial_sec{
        width: 100%!important;
    }
    .testimonial_sec .item{
        width: 40%!important;
    }
}
@media only screen and (min-width:300px) and (max-width:600px){
    .select_input{
        width: 95%!important;
    }
    .select_input select{
        width: 90%!important;
    }
    .testimonial_sec{
        width: 98%!important;
    }
    .testimonial_sec .item{
        width: 96%!important;
    }
}
@media only screen and (min-width: 1270px) and (max-width: 1366px){
    .testimonial_sec{
        width: 95%!important;
    }
    .testimonial_sec .item{
        margin: 16px!important;
    }
}
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