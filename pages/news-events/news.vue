<template>
  <div>
      <div class="signle_event" v-for="event in singleEvent" :key="event.id">
          <div class="heading my-5">{{event.title}}</div>
          <div class="image_sec">
              <img :src="baseUrl + 'images/' + event.poster_image" alt="img" style="width:100%;" />
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
            singleEvent:[],
            baseUrl:process.env.baseUrl,
        }
    },
    mounted(){
        window.scrollTo(0, 0)
        if(this.$store.state.newsEvents.length == 0){
          this.GetNews();
        }else{
            this.filterEvent();
        }
    },
    methods:{
        GetNews(){
            this.$axios.get(process.env.baseUrl + 'api/news_events/index')
            .then(res=>{
                this.$store.state.newsEvents = res.data;
                if(res){
                    this.filterEvent();
                }
            }).catch(err=>{
                console.log(err);
            })
        },
        filterEvent(){
             var item = this.$store.state.newsEvents.filter((eve)=>{
              return eve.id == this.$route.params.news;
            })
            this.singleEvent = item;
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