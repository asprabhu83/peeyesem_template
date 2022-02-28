<template>
  <div class="login_page">
    <div
      class="w-full h-screen flex items-center justify-center login_full_scrn bg-gray-900"
    >
      <form  onSubmit="return false;"
        class="
          bg-white
          xl:w-8/12
          2xl:w-6/12
          flex
          items-center
          justify-center
          rounded
          px-16
          pt-16
          pb-16
          mb-4
        "
      >
        <div class="w-1/2 ">
          <img src="~assets/img/peeyesyem.png" style="width:80%;" alt="" />
        </div>
        
        <div class="form_box w-1/2 px-10 pb-16 pt-8 border-l-2 border-gainsboro" v-if="$route.query.action == 'forgot_password'" @keypress.enter="ResetPassword">
          <div class="err_box h-12">
            <div class="error py-3 text-red-500" v-if="error2 == true">Email is Required field.</div>
            <div class="error py-3 text-red-500" v-if="exist_error == true">Email does not exists.</div>
            <div class="error py-3 text-green-500" v-if="success_msg == true">we have emailed your password reset link!</div>
         </div>
          <div class="mb-4 mt-2">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email2"
            >
              Your Email
            </label>
            <input
              class="
                shadow-md
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none
                focus:shadow-outline
              "
              id="email2"
              type="text"
              placeholder="Your Email"
              v-model="email2"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="
                bg-blue-500
                hover:bg-blue-700
                text-white
                font-bold
                py-2
                px-4
                rounded
                focus:outline-none
                focus:shadow-outline
                frgt_btn
              "
              type="button"
              @click="ResetPassword"
            >
              Submit
            </button>
          </div>
        </div>
        <div class="form_box w-1/2 px-10 pb-16 pt-8 border-l-2 border-gainsboro" v-if="$route.query.action == 'reset_password'">
          <div class="err_box h-12">
            <div class="error py-3 text-red-500" v-if="error2 == true">Email is Required field.</div>
            <div class="error py-3 text-red-500" v-if="exist_error == true">Email does not exists.</div>
         </div>
          <div class="mb-4 mt-2">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Your Email
            </label>
            <input
              class="
                shadow-md
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none
                focus:shadow-outline
              "
              id="email"
              type="text"
              placeholder="Your Email"
              v-model="email3"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="new_pwd"
            >
              New Password
            </label>
            <input
              class="
                shadow-md
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none
                focus:shadow-outline
              "
              id="new_pwd"
              type="text"
              placeholder="New Password"
              v-model="new_pwd"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="cnfirm_pwd"
            >
              Confirm password
            </label>
            <input
              class="
                shadow-md
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none
                focus:shadow-outline
              "
              id="cnfirm_pwd"
              type="text"
              placeholder="Confirm password"
              v-model="cnfirm_pwd"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="
                bg-blue-500
                hover:bg-blue-700
                text-white
                font-bold
                py-2
                px-4
                rounded
                focus:outline-none
                focus:shadow-outline
                reset_btn
              "
              type="button"
            >
              Submit
            </button>
          </div>
        </div>
        <div class="form_box w-1/2 px-10 pb-16 pt-8 border-l-2 border-gainsboro" @keypress.enter="Login" v-if="!$route.query.action">
          <div class="err_box h-12">
            <div class="error py-3 text-red-500" v-if="error == true">Invalid Credentials</div>
         </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              class="
                shadow-md
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none
                focus:shadow-outline
              "
              id="username"
              type="text"
              placeholder="Username"
              v-model="email"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="
                shadow-md
                appearance-none
                border
                rounded
                w-full
                py-2
                px-3
                text-gray-700
                leading-tight
                focus:outline-none
                focus:shadow-outline
              "
              id="password"
              type="password"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="
                bg-blue-500
                hover:bg-blue-700
                text-white
                font-bold
                py-2
                px-4
                rounded
                focus:outline-none
                focus:shadow-outline
                login_btn
              "
              type="button"
              @click="Login"
            >
              Sign In
            </button>
            <a
              class="
                inline-block
                align-baseline
                font-bold
                text-sm text-blue-500
                hover:text-blue-800
              "
              href="/psm-admin?action=forgot_password"
            >
              Forgot Password?
            </a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout:'headless-layout',
  data () {
    return {
      email: '',
      password: '',
      email2:'',
      email3:this.$route.query.email,
      new_pwd:'',
      cnfirm_pwd:'',
      error: false,
      error2:false,
      exist_error:false,
      success_msg:false,
      reset_token:this.$route.query.token
    }
  },
  beforeCreate(){
    if(localStorage.getItem('user_token')){
        this.$router.push('/psm-admin/add-cars')
    }
  },
  methods: {
    Login () {
      var btn = document.querySelector('.login_btn')
      btn.innerHTML = 'Loading'
      this.$axios.post(process.env.baseUrl + 'api/users/login', {
        email: this.email,
        password: this.password
      })
        .then((response) => {
          const token = response.data.token
          const id = response.data.user.id
          const name = response.data.user.name
          const userRole = response.data.user.user_role
          const email = response.data.user.email
          if (userRole !== 'super_admin') {
            var permission = response.data.permission_id[0].permission_id
            var perm = JSON.parse(permission)
            for (var i = 0; i < perm.length; i++) {
              localStorage.setItem(perm[i], perm[i])
            }
          }
          localStorage.setItem('user_token', token)
          localStorage.setItem('id', id)
          localStorage.setItem('name', name)
          localStorage.setItem('user_role', userRole)
          localStorage.setItem('email', email)
          if (token !== '') {
            this.$router.push('/psm-admin/add-cars')
          }
          btn.innerHTML = 'Sign In'
        })
        .catch((error) => {
          console.log(error)
          this.error = true
          btn.innerHTML = 'Sign In'
        })
    },
    ResetPassword(e){
      var btn = document.querySelector('.frgt_btn');
      btn.innerHTML = 'Loading..';
      this.exist_error = false;
      this.error2 = false;
      this.$axios.post(process.env.baseUrl + 'api/send_reset_link', {
        email: this.email2,
      }).then(res=>{
        if(res.data.message){
          this.success_msg = true;
        }
        btn.innerHTML = 'Submit';
      }).catch(err=>{
        if(err.response.data.errors){
          var err_res = err.response.data.errors.email;
          err_res.forEach(item=>{
          console.log(item)
            if(item == 'validation.required'){
              this.error2 = true;
            }
            if(item == 'validation.exists'){
              this.exist_error = true;
            }
          })
        }
        btn.innerHTML = 'Submit';
        
      })
    }
  }
}
</script>
<style scoped>
form {
  box-shadow: 0 2px 10px 4px rgb(0 0 0/15%);
}
</style>
