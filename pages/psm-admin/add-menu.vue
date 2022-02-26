<template>
  <div class="my-24 w-8/12 mx-auto">
      <div class="mx-5 flex items-center justify-start">
          <input
              class="
                shadow-md
                appearance-none
                border
                rounded
                w-1/4
                py-2
                mr-3
                px-3
                text-gray-700
                leading-tight
                focus:outline-none
                focus:shadow-outline
              "
              id="name"
              type="text"
              placeholder="Menu"
              v-model="menuTitle"
            />
            <input
              class="
                shadow-md
                appearance-none
                border
                rounded
                w-1/4
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none
                focus:shadow-outline
              "
              id="name"
              type="text"
              placeholder="Link"
              v-model="mainMenuLink"
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
              </div>
              <div class="menu_sec my-3 p-2">
                   <div class="my-3" v-for="menu in titles" :key="menu.id" :class="'btn-id-'+ menu.id">
                       <span class="menu_title" >{{menu.menu_type}}</span> <font-awesome-icon icon="trash"  size="1x" class="text-red-600 cursor-pointer mx-1" @click="Delete(menu.id)" /> <button class="add_submenu_btn" type="button" v-if="menu.menu_type !=='Home'" @click="dialogBox = true,menuId = menu.id">Add Submenu</button>
                       <div class=" pt-2">
                           <ul v-for="sub in menu.menu_titles" :key="sub.id">
                              <li>{{sub.menu_name}}</li>
                           </ul>
                       </div>
                   </div>
              </div>
            </div>
      </div>
      <div class="dialog_box fixed inset-0 h-screen w-full flex justify-center items-center" v-if="dialogBox == true">
      <div class="dialog_content bg-white rounded-md shadow-md">
          <div class="flex justify-between mb-4">
            SubMenu <font-awesome-icon icon="times"  size="1x" class="text-red-600 cursor-pointer" @click="dialogBox = false" />
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
                        focus:shadow-outline" :data-target="menuType == 'menu' ? '1' : '2'" @click="AddMenu">
                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" ></span>
                        Add
                        </button>
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
            menuTitle: '',
            mainMenuLink:'',
            menuHeading:'',
            menuName:'',
            menuLink:'',
            titles:[],
            item: true,
            menuType:'',
            parentMenu:'',
            Menus:[],
            MenuItems:[],
            dialogBox:false,
            menuId:''
        }
    },
    mounted(){
        this.GetMenu();
        if(!localStorage.getItem('user_token')){
            this.$router.push('/psm-admin')
        }
    },
    methods:{
      AddTitle(e){
          e.target.classList.add('loading');
          var data = {
               menu_link:this.mainMenuLink
            }
            data = JSON.stringify(data);
          this.$axios.post(process.env.baseUrl + 'api/menu/title',{
              menu_type: this.menuTitle,
              data_value:data
          }).then((res)=>{
              console.log(res)
              this.menuTitle = ''
              this.mainMenuLink = ''
              e.target.classList.remove('loading');
              this.GetMenu()
          }).catch((err)=>{
              console.log(err)
              e.target.classList.remove('loading');
          })
      },
      GetMenu(){
          this.$axios.get(process.env.baseUrl + 'api/menu/index')
          .then((res)=>{
              this.titles = res.data.menu
            //   this.FilterMenu()
          }).catch((err)=>{
              console.log(err)
          })
      },
      AddMenu(e){
          e.target.classList.add('loading');
          this.$axios.post(process.env.baseUrl + 'api/menu/menu',{
              menu_title_id:this.menuId,
              menu_name: this.menuName,
              menu_link: this.menuLink
          }).then((res)=>{
              this.menuName = '';
              this.menuLink = '';
              this.GetMenu()
              e.target.classList.remove('loading');
          }).catch((err)=>{
              console.log(err)
              e.target.classList.remove('loading');
          })
      },
      Toggle(e){
          var btn = e.target
          var btn_valid = e.target.getAttribute('data-menu');
          if(btn_valid === 'menu'){
            if(btn.nextElementSibling.classList.contains('hidden')){
              btn.nextElementSibling.classList.remove('hidden')
              btn.classList.add('active')
            }else{
                btn.nextElementSibling.classList.add('hidden')
                btn.classList.remove('active')
            }
          }
      },
      Delete(id){
          this.$axios.delete(process.env.baseUrl + 'api/menu/delete/' + id)
          .then((res)=>{
              console.log(res)
              this.GetMenu()
          }).catch((err)=>{
              console.log(err)
          })
      },
      menuDelete(id){
          this.$axios.delete(process.env.baseUrl + 'api/menu/delete/item/' + id)
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
.menu_sec ul li{
    list-style-type: disc;
    margin-left: 20px;
}
.menu_title{
    display:inline-block;
    min-width:150px;
    font-weight:bold;
}
.add_submenu_btn{
    background: #002c5f;
    color: white;
    padding: 5px 15px;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 13px;
    margin-left: 10px;
}
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

.dialog_box {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
.dialog_content {
  width: 500px;
  padding: 40px;
  padding-top: 30px;
  max-width: 100%;
  animation: fadeDowns .3s;
}
@keyframes fadeDowns {
  from{
    opacity: 0;
    transform: scale(0);
  }
  to{
    opacity: 1;
    transform: scale(1);
  }
}

</style>