<template>
  <div class="add-page">
     
      <div class="PageTitle">
           <div class="msg_box my-1">
                   <div class="error pt-3 text-red-500" v-if="error == true">Invalid Data</div>
                    <div class="error pt-3 text-red-500" v-if="success == true">Added Successfully</div>
            </div>
            <div class="">
                 <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Page Title
                    </label>
                <input
                    class="
                        shadow-md
                        appearance-none
                        border
                        rounded
                        w-1/2
                        py-2
                        px-3
                        text-gray-700
                        leading-tight
                        focus:outline-none
                        focus:shadow-outline
                    "
                    id="name"
                    type="text"
                    placeholder="Page Title"
                    v-model="PageTitle"
                    />
            </div>
      </div>
      <div class="PageTitle">
            <div class="">
                 <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="meta_name"
                    >
                    Meta Name
                    </label>
                <input
                    class="
                        shadow-md
                        appearance-none
                        border
                        rounded
                        w-1/2
                        py-2
                        px-3
                        text-gray-700
                        leading-tight
                        focus:outline-none
                        focus:shadow-outline
                    "
                    id="meta_name"
                    type="text"
                    placeholder="Meta Name"
                    v-model="metaName"
                    />
            </div>
      </div>
      <div class="PageTitle">
            <div class="">
                 <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="meta_content"
                    >
                    Meta Content
                    </label>
                <textarea
                    class="
                        shadow-md
                        appearance-none
                        border
                        rounded
                        w-1/2
                        py-2
                        px-3
                        text-gray-700
                        leading-tight
                        focus:outline-none
                        focus:shadow-outline
                    "
                    id="meta_content"
                    type="text"
                    placeholder="Meta Content"
                    v-model="metaContent"
                    />
            </div>
      </div>
      <div class="PageTitle">
          <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="page_content"
                    >
                    Page Content
            </label>
          <vue-editor id="page_content" v-model="pageContent"></vue-editor>
      </div>
      <div class="save_page_btn_box">
          <button type="button" 
                        class="bg-blue-500
                        hover:bg-blue-700
                        text-white
                        font-bold
                        py-2
                        px-4
                        add_title_btn
                        flex
                        items-center
                        justify-center
                        rounded
                        focus:outline-none
                        focus:shadow-outline" @click="AddPage" >
                        Save
            </button>
      </div>
  </div>
</template>

<script>
import {VueEditor} from 'vue2-editor'
export default {
    layout:'admin-header-layout',
    components:{
        VueEditor
    },
    data() {
        return {
         PageTitle:'',
         pageContent:'',
         metaName:'',
         metaContent:'',
         htmlValue:[],
         error:false,
         success:false
        }
    },
    methods:{
        AddPage(){
            this.success=false;
            this.error=false;
            var data = {
                meta_name:this.metaName,
                meta_content:this.metaContent
            }
            data = JSON.stringify(data);
            this.$axios.post(process.env.baseUrl + 'api/page/store',{
              page_title: this.PageTitle,
              page_content:this.pageContent,
              data_value:data
          }).then((res)=>{
              if (res){
                  this.success=true;
                  this.PageTitle = '';
                  this.pageContent = '';
                  this.metaName = '';
                  this.metaContent = '';
              }
          }).catch((err)=>{
              console.log(err)
          })
        },
    }
}
</script>

<style scoped>
.add-page{
    margin:80px 0;
}
.editor_button{
    width: 60%;
    margin:30px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.PageTitle{
    width: 60%;
    margin:40px auto;
}
.save_page_btn_box{
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
}
.editor_button button{
    padding:5px 15px;
    border-radius: 5px;
    background: #002c5f;
    color: white;
    margin:10px;
    outline: none;
    border: none;
    cursor: pointer;
}
.editor_box{
    width: 60%;
    margin: 40px auto;
    border:1px solid black;
}
.editor_box .ProseMirror{
    height: 400px!important;
}
</style>