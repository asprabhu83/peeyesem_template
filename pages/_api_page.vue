<template>
  <div>
      <div v-html="pagecontent">
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            PagesData:[],
            pagecontent:'',
            metaName:'',
            metaContent:''
        }
    },
    beforeMount(){
        this.GetPages();
    },
    head() {
      return {
        title: this.metaName,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Home page - PEEYESEM HYUNDAI'
          }
        ]
      }
    },
    methods:{
        GetPages(){
            this.$axios.get(process.env.baseUrl + 'api/page/index')
            .then(res=>{
                this.PagesData =res.data
                this.filterPages();
            }).catch(err=>{
                console.log(err)
            })
        },
        filterPages(){
            var page = this.PagesData.find(item=>{
                var slug = JSON.parse(item.data_value).slug;
                return slug == this.$route.params.api_page
            })
            if(page){
                const {page_content,data_value} = page;
                this.pagecontent = page_content;
                this.metaName = JSON.parse(data_value).meta_name;
                this.metaContent = JSON.parse(data_value).meta_content;
            }else{
                this.$router.push('/');
            }
            
        }
    }
}
</script>

<style>

</style>