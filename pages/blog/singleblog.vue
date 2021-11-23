<template>
  <div>
      <div class="signle_event" v-for="event in singleBlog" :key="event.id">
          <div class="heading my-3">{{event.title}}</div>
          <div class="time mt-3 mb-4">{{JSON.parse(event.data_value).date}}</div>
          <div class="image_sec">
              <img :src="baseUrl + 'images/' + event.blog_image" style="width:100%;" />
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
            baseUrl:process.env.baseUrl,
            singleBlog:[]
        }
    },
    mounted(){
        if(this.$store.state.BlogsData.length == 0){
            this.GetBlog();
        }else{
            this.filterEvent();
        }
        window.scrollTo(0, 0)
    },
    methods:{
        filterEvent(){
             var item = this.$store.state.BlogsData.filter((eve)=>{
              return eve.id == this.$route.params.singleblog;
            })
            this.singleBlog = item;
        },
        GetBlog(){
            this.$axios
            .get(process.env.baseUrl + 'api/blog/index')
            .then((response) => {
            this.$store.state.BlogsData = response.data
                if(response){
                    this.filterEvent();
                }
            })
            .catch((error) => {
            console.log(error)
            })
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