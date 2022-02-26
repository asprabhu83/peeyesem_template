<template>
  <div class="my-24">
  <div class="w-10/12 mx-auto mt-10">
    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="
              shadow-md
              overflow-hidden
              border-b border-gray-200
              sm:rounded-lg
            "
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Page Title
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Meta Content
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Slug
                  </th>
                  <!-- <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-left text-xs
                      font-medium
                      text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Actions
                  </th> -->
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-if="Pages.length == 0" >
                    <td class="px-6 py-4 whitespace-nowrap" colspan="5" style="text-align:center;"> No Data</td>
                </tr>
                <tr v-for="item in Pages" :key="item.id">
                  <td class="px-6 py-4 " >
                    <span
                      class="
                        inline-flex
                        text-xs
                        leading-5
                        font-semibold
                        text-green-800
                      "
                    >
                      {{item.id}}
                    </span>
                  </td>
                  <td class="px-6 py-4 " >
                    <span
                      class="
                        inline-flex
                        text-xs
                        leading-5
                        font-semibold
                        text-green-800
                      "
                    >
                      {{item.page_title}}
                    </span>
                  </td>
                  <td class="px-6 py-4 " >
                    <span
                      class="
                        inline-flex
                        text-xs
                        leading-5
                        font-semibold
                        text-green-800
                      "
                    >
                      {{JSON.parse(item.data_value).meta_content}}
                    </span>
                  </td>
                  <td class="px-6 py-4 " >
                    <span
                      class="
                        inline-flex
                        text-xs
                        leading-5
                        font-semibold
                        text-green-800
                      "
                    >
                      {{JSON.parse(item.data_value).slug}}
                    </span>
                  </td>
                  <!-- <td
                    class="
                      px-6
                      py-4
                      whitespace-nowrap
                      text-left text-sm
                      font-medium
                    "
                  >
                    <font-awesome-icon icon="trash"  size="1x" class="text-red-600 mr-4 cursor-pointer mt-1" />
                  </td> -->
                </tr>

                <!-- More people... -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
    layout:'admin-header-layout',
    data(){
        return{
            Pages:[]
        }
    },
    mounted(){
        this.GetDetails();
        if(!localStorage.getItem('user_token')){
            this.$router.push('/psm-admin')
        }
    },
    methods:{
       GetDetails(){
           this.$axios.get(process.env.baseUrl + 'api/page/index')
            .then((res)=>{
                this.Pages = res.data;
            }).catch((err)=>{
                console.log(err);
            })
       }
    }
}
</script>

<style scoped>
.model_image{
  height: 120px;
  width: 120px;
}
.model_image img{
  height: 100%;
  object-fit: contain;
}
.dialog_box {
  background-color: rgba(0, 0, 0, 0.5);
}
.dialog_content {
  width: 550px;
  max-width: 100%;
}
.form_box{
  height: 500px;
  overflow: hidden;
  overflow-y: scroll;
  margin-bottom: 30px;
}
.form_box::-webkit-scrollbar {
  width: 4px;
}
.form_box::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
.form_box::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
.form_box::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>