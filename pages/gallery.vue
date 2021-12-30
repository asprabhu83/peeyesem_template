<template>
  <div>
      <div class="img_Sec">
          <img :src="require('@/assets/img/cars/counter_poster.jpg')" alt="img" style="width:100%;" />
      </div>
      <div class="my-16">
          <div class="heading text-center my-4">Media & Gallery</div>
          <div class="gallery_item_box">
              <div class="item" v-for="item in gallery" :key="item.id">
                  <div class="photo">
                      <img :src="require('@/assets/img/cars/gallery_page/' + item.image)" alt="img" />
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            gallery:[
                {
                    id:1,
                    image:'5.jpg',
                    date:'03-02-2013'
                },
                {
                    id:2,
                    image:'6.jpg',
                    date:'03-01-2013'
                },
                {
                    id:3,
                    image:'8.jpg',
                    date:'21-05-2019'
                },
                {
                    id:4,
                    image:'9.jpeg',
                    date:'21-05-2019'
                },
                {
                    id:5,
                    image:'10.jpeg',
                    date:'21-05-2019'
                },
                {
                    id:6,
                    image:'11.jpeg',
                    date:'21-05-2019'
                },
                {
                    id:7,
                    image:'12.jpeg',
                    date:'21-05-2019'
                },
                {
                    id:8,
                    image:'13.jpeg',
                    date:'21-05-2019'
                },
                {
                    id:9,
                    image:'14.jpeg',
                    date:'21-05-2019'
                },
                {
                    id:10,
                    image:'15.jpeg',
                    date:'21-05-2019'
                },
                {
                    id:11,
                    image:'16.jpeg',
                    date:'21-05-2019'
                },
                {
                    id:12,
                    image:'17.jpeg',
                    date:'21-05-2019'
                },
                {
                    id:13,
                    image:'18.jpeg',
                    date:'21-05-2019'
                }
            ]
        }
    },
    mounted(){
        window.scrollTo(0, 0)
    }
}
</script>

<style scoped>
@media only screen and (min-width: 1270px) and (max-width: 1366px){
    .gallery_item_box{
        width: 90%!important;
    }
    .gallery_item_box .item{
        width: 29%!important;
    }
}
@media only screen and (min-width: 760px) and (max-width: 960px){
    .gallery_item_box{
        width: 95%!important;
    }
    .gallery_item_box .item{
        width: 44%!important;
    }
}
@media only screen and (min-width: 961px) and (max-width: 1030px){
    .gallery_item_box{
        width: 95%!important;
    }
    .gallery_item_box .item{
        width: 45%!important;
    }
}
@media only screen and (min-width:300px) and (max-width:600px){
    .img_Sec img{
        object-position: left;
    }
    .img_Sec{
        height: 200px!important;
    }
    .gallery_item_box{
        width: 96%!important;
    }
    .gallery_item_box .item{
        width: 100%!important;
        margin: 20px 10px!important;
    }
}
.img_Sec{
    height: 500px;
}
.img_Sec img{
    height: 100%;
    object-fit: cover;
}
.heading{
    font-size: 24px;
    font-weight: 600;
}
.gallery_item_box{
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 40px auto;
}
.gallery_item_box .item{
    box-shadow: 0 2px 10px 4px rgb(0 0 0/15%);
    width: 30%;
    margin: 20px;
    border-radius: 7px;
    overflow: hidden;
}
.item .head{
    padding: 15px 17px;
    font-weight: 600;
    font-size: 17px;
}
.item .photo{
    min-height: 322px;
    max-height: 322px;
}
.item .photo img{
    width: 100%;
    object-fit: cover;
    min-height: 322px;
    max-height: 322px;
}
.item .detail{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    border-top: 1px solid black;
    margin-top: 15px;
}
</style>