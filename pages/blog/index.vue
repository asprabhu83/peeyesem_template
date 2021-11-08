<template>
  <div>
      <div class="blog_page_sec my-16">
          <div class="heading">Blogs</div>
          <div class="blog_item_sec">
              <div class="item" v-for="blog in $store.state.BlogsData" :key="blog.id">
                  <div class="photo_box">
                     <nuxt-link :to="'/blog/'+ blog.id"> <img :src="baseUrl + 'images/' + blog.blog_image" style="width:100%;" /></nuxt-link>
                  </div>
                  <div class="details_box">
                      <div class="title">{{blog.title}}</div>
                      <div class="time">{{JSON.parse(blog.data_value).date}}</div>
                      <div class="description">{{blog.description.substring(0,200)}}...</div>
                      <div class="btn_box"><button><nuxt-link :to="'/blog/'+ blog.id"> Read More</nuxt-link></button></div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
    data(){
        return{
            baseUrl:process.env.baseUrl,
        }
    },
    mounted(){
        if(this.$store.state.BlogsData.length == 0){
            this.GetBlog();
        }
        window.scrollTo(0, 0)
    },
    methods:{
        GetBlog(){
            axios
            .get(process.env.baseUrl + 'api/blog/index')
            .then((response) => {
            this.$store.state.BlogsData = response.data
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
    .blog_item_sec{
        width: 95%!important;
        display: block!important;
    }
    .blog_item_sec .item{
        display: block!important;
    }
    .blog_item_sec .item .photo_box{
        width: 100%!important;
    }
    .blog_item_sec .item .details_box{
        width: 100%!important;
        padding: 20px !important;
        margin-left: 0 !important;
    }
    .blog_item_sec .item{
        width: 90%!important;
        margin-left: auto!important;
        margin-right: auto!important;
    }
}
.heading{
    font-size: 27px;
    font-weight: 600;
    margin: 40px 0;
    text-align: center;
}
.blog_item_sec{
    width: 80%;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.blog_item_sec .item{
    width: 80%;
    margin: 30px 0;
    display: flex;
    box-shadow: 0 2px 10px 4px rgb(0 0 0/15%);
    border-radius: 7px;
    overflow: hidden;
}
.item .photo_box{
    width: 48%;
}
.item .details_box{
    width: 48%;
    margin-left: 30px;
}
.details_box .title{
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 15px;
    margin-top: 20px;
}
.details_box .time{
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 20px;
}
.details_box .description{
    font-size: 15px;
    margin-bottom: 20px;
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