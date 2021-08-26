<template>
  <div class="my-24 w-8/12 mx-auto">
      <div class="mx-5 flex items-center justify-start">
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
              placeholder="Menu Title"
              v-model="menuTitle"
            />
            <div>
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
                mx-4
                rounded
                focus:outline-none
                focus:shadow-outline" @click="AddTitle">
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Add Menu
                </button>
            </div>
      </div>
       <div class="flex items-start">
            <div class="w-6/12 p-4 menu_box mx-5 my-16">
              <div class="flex justify-between items-center">
                  <h5 class="font-semibold">Add menus</h5>
                  <button class="bg-blue-500
                        sm_menu
                        hover:bg-blue-700
                        text-white
                        font-bold
                        flex
                        items-center
                        justify-center
                        py-2
                        px-4
                        rounded
                        focus:outline-none
                        focus:shadow-outline">
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Save changes</button>
              </div>
              <div class="menu_sec my-3 p-2">
                    <div   v-for="(title, index) in titles" :key="title.id"  >
                        <div class="border border-black acc_title  flex select-none items-center font-bold cursor-pointer justify-between p-2 mt-3" :class="index === 0 ? 'active': '' " @click="Toggle">
                            {{title.menu_type}} 
                            <font-awesome-icon icon="trash"  size="1x" class="text-red-600 mx-2 cursor-pointer delete_icon" @click="Delete(title.id)"/>
                        </div>
                        <div class="acc_item border border-black p-2" :class="index !== 0 ? 'hidden': '' "  >
                            <div class=" my-3 mx-2 select-none cursor-pointer" v-for="menu in title.menu_titles" :key="menu.id">
                                <h6 class="inline-flex px-2 items-center justify-between py-2 border border-black select-none">
                                    {{menu.menu_name}}
                                    <!-- <font-awesome-icon icon="edit"  size="1x" class="text-green-600 ml-2  cursor-pointer "  /> -->
                                    <font-awesome-icon icon="trash"  size="1x" class="text-red-600 ml-2 cursor-pointer "  />
                                </h6>
                            </div>
                            <h6 class="p-1 my-1 select-none cursor-pointer" v-if="title.menu_titles.length === 0">Add Menus in right section -></h6>
                        </div>
                    </div>
              </div>
            </div>
            <div class="w-4/12 p-5 mx-5 menu_box  my-16">
                    <div class="my-4">
                        <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="menuHeading"
                        >
                        Menu Type
                        </label>
                        <select
                        class="
                            shadow-md
                            appearance-none
                            cursor-pointer
                            border
                            rounded
                            w-full
                            py-1
                            px-3
                            text-gray-700
                            leading-tight
                            focus:outline-none
                            focus:shadow-outline
                        "
                        id="menuHeading"
                        v-model="menuHeading"
                        >
                        <option class="text-xl " value="">Choose Menu Type</option>
                        <option class="text-xl" v-for="title in titles" :key="title.id" :value="title.id">{{title.menu_type}}</option>
                      </select>
                    </div>
                <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="menuName"
                    >
                    Menu
                    </label>
                    <input
                    class="
                        shadow-md
                        appearance-none
                        border
                        rounded
                        w-full
                        py-1
                        px-3
                        text-gray-700
                        leading-tight
                        focus:outline-none
                        focus:shadow-outline
                    "
                    id="menuName"
                    type="text"
                    placeholder="Menu"
                    v-model="menuName"
                    />
                </div>
                <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="menuLink"
                    >
                    Link
                    </label>
                    <input
                    class="
                        shadow-md
                        appearance-none
                        border
                        rounded
                        w-full
                        py-1
                        px-3
                        text-gray-700
                        leading-tight
                        focus:outline-none
                        focus:shadow-outline
                    "
                    id="menuLink"
                    type="text"
                    placeholder="Link"
                    v-model="menuLink"
                    />
                </div>
                <div >
                    <button type="button" 
                        class="bg-blue-500
                        hover:bg-blue-700
                        text-white
                        font-bold
                        flex
                        items-center
                        justify-center
                        py-1
                        px-3
                        rounded
                        focus:outline-none
                        focus:shadow-outline" @click="AddMenu">
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Add
                        </button>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
    layout:'admin-header-layout',
    data(){
        return{
            menuTitle: '',
            menuHeading:'',
            menuName:'',
            menuLink:'',
            titles:[],
            item: true
        }
    },
    mounted(){
        this.GetMenu()
    },
    methods:{
      AddTitle(e){
          e.target.classList.add('loading');
          axios.post(process.env.baseUrl + 'api/menu/title',{
              menu_type: this.menuTitle
          }).then((res)=>{
              console.log(res)
              this.menuTitle = ''
              e.target.classList.remove('loading');
              this.GetMenu()
          }).catch((err)=>{
              console.log(err)
              e.target.classList.remove('loading');
          })
      },
      GetMenu(){
          axios.get(process.env.baseUrl + 'api/menu/index')
          .then((res)=>{
              this.titles = res.data.menu
              console.log(res)
          }).catch((err)=>{
              console.log(err)
          })
      },
      AddMenu(e){
          e.target.classList.add('loading');
          axios.post(process.env.baseUrl + 'api/menu/menu',{
              menu_title_id:this.menuHeading,
              menu_name: this.menuName,
              menu_link: this.menuLink
          }).then((res)=>{
              this.menuHeading = '';
              this.menuName = '';
              this.menuLink = '';
              this.GetMenu()
              console.log(res)
              e.target.classList.remove('loading');
          }).catch((err)=>{
              console.log(err)
              e.target.classList.remove('loading');
          })
      },
      Toggle(e){
          var btn = e.target
          
          if(btn.nextElementSibling.classList.contains('hidden')){
              btn.nextElementSibling.classList.remove('hidden')
              btn.classList.add('active')
          }else{
              btn.nextElementSibling.classList.add('hidden')
              btn.classList.remove('active')
          }
      },
      Delete(id){
          axios.delete(process.env.baseUrl + 'api/menu/delete/' + id)
          .then((res)=>{
              console.log(res)
              this.GetMenu()
          }).catch((err)=>{
              console.log(err)
          })
      }
    }
}
</script>

<style scoped>
.menu_box{
    box-shadow: 0 2px 10px 4px rgb(0 0 0/7%);
    border: 1px solid #ced4da;
    border-radius: 7px;
}
.sm_menu{
    font-size: 14px;
    padding: 5px 17px!important;
}
.spinner-border-sm{
    width:19px;
    height: 19px;
    margin-right: 7px;
    display: none;
}
button.loading .spinner-border-sm{
    display: inline-block;
}
.acc_title.active{
  background-color: #06b6d4;
  color: white;
}

/* .acc_title.active .delete_icon{
    color: white;
} */
.acc_item{
    animation: fadeDown .5s;
}

@keyframes fadeDown {
    from{
        opacity: 1;
        transform: scaleY(0);
    }
    to{
        opacity: 1;
        transform: scaleY(1);
    }
}

</style>