<template>
<div>
  <div class="flex flex-wrap">
    <div class="w-full">
      <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 header_nav">
        <div class=" flex flex-wrap items-center justify-between">
          <div class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
              <nuxt-link
        to="/psm-admin"
        class="p-3 h-full flex items-center group border-r border-gray-600"
      >
        <img src="~/assets/img/resized_logo2.png" class=""/>
      </nuxt-link>
            <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
              <i class="fas fa-bars"></i>
            </button>
          </div>
          <div class="lg:flex lg:flex-grow items-center">
            <ul class="flex flex-col lg:flex-row list-none">
              <!-- <li class="nav-item">
                <nuxt-link  class="px-3 py-2 mt-1 flex items-center text-xs uppercase font-bold leading-snug text-black hover:opacity-75"  to="/" >Profile</nuxt-link>
              </li> -->
              <li class="nav-item" >
                <div class="relative inline-block text-left">
                  <div class="drpdwn1_box">
                    <button type="button" @click="drpdwn = true"  class="drpdwn outline-none border-none inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2  text-sm font-medium text-gray-700 " id="menu-button" aria-expanded="true" aria-haspopup="true">
                      Settings
                      <!-- Heroicon name: solid/chevron-down -->
                      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <div  class="sub_menu_box origin-top-right absolute -right-26  w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div class="" role="none">
                      <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                      <nuxt-link to="/psm-admin/user-list" class="text-gray-700 block px-4 py-3 text-sm  dropdown_menu_item" role="menuitem" tabindex="-1" id="menu-item-1">Manage Users</nuxt-link>
                      <nuxt-link to="/psm-admin/user-role-list" class="text-gray-700 block px-4 py-3 text-sm  dropdown_menu_item" role="menuitem" tabindex="-1" id="menu-item-2">Manage UserRole</nuxt-link>
                      <nuxt-link to="/psm-admin/add-page" class="text-gray-700 block px-4 py-3 text-sm  dropdown_menu_item" role="menuitem" tabindex="-1" id="menu-item-2">Add Pages</nuxt-link>
                      <nuxt-link to="/psm-admin/manage-pages" class="text-gray-700 block px-4 py-3 text-sm  dropdown_menu_item" role="menuitem" tabindex="-1" id="menu-item-2">Manage Pages</nuxt-link>
                      <nuxt-link to="/psm-admin/settings" class="text-gray-700 block px-4 py-3 text-sm  dropdown_menu_item" role="menuitem" tabindex="-1" id="menu-item-2">Edit Settings</nuxt-link>
                      <nuxt-link to="/psm-admin/forms-list" class="text-gray-700 block px-4 py-3 text-sm  dropdown_menu_item" role="menuitem" tabindex="-1" id="menu-item-2">Manage Enquiries</nuxt-link>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item ml-3">
                <div class="relative inline-block text-left">
                  <div class="drpdwn2_box">
                    <button type="button" @click="drpdwn2 = true"  class="drpdwn2 outline-none border-none inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2  text-sm font-medium text-gray-700 " id="menu-button" aria-expanded="true" aria-haspopup="true">
                      Manage Cars
                      <!-- Heroicon name: solid/chevron-down -->
                      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <div  class="sub_menu_box origin-top-right absolute -right-26  w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div class="" role="none">
                      <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                      <nuxt-link to="/psm-admin/add-cars" class="text-gray-700 block px-4 py-3 text-sm  dropdown_menu_item" role="menuitem" tabindex="-1" id="menu-item-2">Add Cars</nuxt-link>
                      <nuxt-link to="/psm-admin/manage-cars" class="text-gray-700 block px-4 py-3 text-sm  dropdown_menu_item" role="menuitem" tabindex="-1" id="menu-item-2">Manage Cars</nuxt-link>
                      <!-- <nuxt-link to="/psm-admin/add-menu" class="text-gray-700 block px-4 py-3 text-sm  dropdown_menu_item" role="menuitem" tabindex="-1" id="menu-item-2">Add Menus</nuxt-link> -->
                      <nuxt-link to="/psm-admin/testimonial-list" class="text-gray-700 block px-4 py-3 text-sm  dropdown_menu_item" role="menuitem" tabindex="-1" id="menu-item-2">Add Testimonials</nuxt-link>
                      <nuxt-link to="/psm-admin/manage-used-cars" class="text-gray-700 block px-4 py-3 text-sm  dropdown_menu_item" role="menuitem" tabindex="-1" id="menu-item-2">Manage Used Cars</nuxt-link>
                      <nuxt-link to="/psm-admin/blog-list" class="text-gray-700 block px-4 py-3 text-sm  dropdown_menu_item" role="menuitem" tabindex="-1" id="menu-item-2">Add Blogs</nuxt-link>
                      <nuxt-link to="/psm-admin/manage-sliders" class="text-gray-700 block px-4 py-3 text-sm  dropdown_menu_item" role="menuitem" tabindex="-1" id="menu-item-2">Manage Sliders</nuxt-link>
                      <nuxt-link to="/psm-admin/manage-news" class="text-gray-700 block px-4 py-3 text-sm  dropdown_menu_item" role="menuitem" tabindex="-1" id="menu-item-2">Manage News</nuxt-link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <button class=" px-6 text-black font-bold cursor-pointer logout_btn" @click="Logout">Logout <font-awesome-icon icon="sign-in-alt"  size="1x" class="ml-1 text-black" /> </button>
      </nav>
    </div>
  </div>
  <Loading v-if="loading == true" />
</div>
</template>

<script>
import Loading from '../components/Loading.vue'
export default {
  components:{
    Loading
  },
  data () {
    return {
      drpdwn: false,
      drpdwn2: false,
      loading:false,
      permission: '',
      type: '',
      projectPermission: ''
    }
  },
  mounted () {
    this.permission = localStorage.getItem('manage users')
    this.type = localStorage.getItem('user_role')
    this.projectPermission = localStorage.getItem('create project')
  },
  methods: {
    Logout () {
      this.loading = true;
      var token = localStorage.getItem('user_token')
      this.$axios.get(process.env.baseUrl + 'api/users/logout', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
        .then(() => {
          localStorage.clear()
          this.loading = false;
          this.$router.push('/psm-admin')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
<style scoped>
.drpdwn{
  color: black;
  padding-top: 6px;
  font-size:13px;
  text-transform: uppercase;
}
.header_nav{
  box-shadow: 0 2px 10px 4px rgb(0 0 0/15%);
}
.logout_btn{
  padding: 6px 30px;
  margin-right: 35px;
  border-radius: 5px;
  transition: .4s;
}

.logout_btn:hover{
  background: #e8f0fe;
}
.logout_btn:hover svg{
  animation: shakeVertical .8s infinite;
}
.drpdwn2, .drpdwn{
  transition: .4s;
}
.drpdwn2:hover, .drpdwn:hover{
  background: #e8f0fe;
}
.drpdwn2_box, .drpdwn1_box{
  padding-bottom: 10px;
}
.sub_menu_box{
  visibility: hidden;
  opacity: 0;
  transform: perspective(900px) rotateX(-90deg);
  transition: all .7s;
  border-radius: 7px;
}
.drpdwn2_box:hover ~ .sub_menu_box, .drpdwn1_box:hover ~ .sub_menu_box{
  transform: perspective(900px) rotateX(0deg);
  visibility: visible;
  opacity: 1;
}
.sub_menu_box:hover{
  transform: perspective(900px) rotateX(0deg);
  visibility: visible;
  opacity: 1;
  display: block;
}
@keyframes shakeVertical {
  0%{
    transform: translateX(0px);
  }
  50%{
    transform: translateX(7px);
  }
  100%{
    transform: translateX(0px);
  }
}
</style>
