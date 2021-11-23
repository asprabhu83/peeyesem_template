<template>
  <div class="add-page">
      <div class="PageTitle">
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
          <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="page_content"
                    >
                    Page Content
            </label>
          <vue-editor id="page_content" v-model="pageContent"></vue-editor>
      </div>
      <div class="PageTitle">
          <div class=" ">
                 <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="form_id"
                    >
                    Form Id
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
                    id="form_id"
                    type="text"
                    placeholder="Form Id"
                    v-model="formId"
                    />
            </div>
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
         formId:'',
         htmlValue:[],
        }
    },
    methods:{
        AddPage(){
            this.$axios.post(process.env.baseUrl + 'api/page/store',{
              page_title: this.PageTitle,
              page_content:this.pageContent,
              form_id:this.formId
          }).then((res)=>{
              console.log(res)
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