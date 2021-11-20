<template>
  <div class="my-24">
    <div class="news_heading my-16">
      <h3 class="text-center">News & Events</h3>
    </div>
    <div class="news_events_item_box">
      <div class="item" v-for="item in $store.state.newsEvents" :key="item.id">
          <div class="photo_box cursor-pointer">
             <nuxt-link :to="'/news-events/'+ item.id"> <img :src="baseUrl + 'images/' + item.image" alt="img" style="width:100%;" /></nuxt-link>
          </div>
          <div class="detail">
              <div class="head cursor-pointer">{{item.title}}</div>
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
      baseUrl:process.env.baseUrl
    };
  },
  mounted(){
    window.scrollTo(0, 0)
    if(this.$store.state.newsEvents.length == 0){
      this.GetNews();
    }
  },
  methods:{
    GetNews(){
      this.$axios.get(process.env.baseUrl + 'api/news_events/index')
      .then(res=>{
        this.$store.state.newsEvents = res.data;
      }).catch(err=>{
        console.log(err);
      })
    }
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