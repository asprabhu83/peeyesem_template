<template>
<section>
<div >
  <div class="dialog_box fixed inset-0 h-screen w-full flex justify-center items-center" v-if="addUserDialog === true">
      <div class="dialog_content bg-white rounded-md shadow-md">
         <div class="my-2   flex items-center justify-between py-3 px-6"><span class="font-bold text-lg" >Add Testimonial</span><font-awesome-icon icon="times"  size="1x" class="text-red-600 cursor-pointer" @click="addUserDialog = false" /></div>
         <AddTesimonial @created="GetTestimonials" @childDialog="childDialog"/>
      </div>
   </div>
   <div class="w-8/12 mx-auto text-right mt-10">
     <button @click="addUserDialog = true" class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 ml-5 px-4 rounded focus:outline-none focus:shadow-outline">Add Testimonial<font-awesome-icon icon="user-plus"  size="1x" class="text-white ml-2 cursor-pointer"  /></button>
   </div>
  <div class="w-8/12 mx-auto mt-10">
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
                    Quote
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
                    Authour
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
                    Authour's Type
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
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-if="testimonials.length == 0" >
                    <td class="px-6 py-4 whitespace-nowrap" colspan="5" style="text-align:center;"> No Data</td>
                </tr>
                <tr v-for="testimonial in testimonials" :key="testimonial.id">
                  <td class="px-6 py-4 whitespace-nowrap" >
                    <span
                      class="
                        inline-flex
                        text-xs
                        leading-5
                        font-semibold
                        text-green-800
                      "
                    >
                      {{testimonial.id}}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap"  >
                    <span
                      class="
                        inline-flex
                        text-xs
                        leading-5
                        font-semibold
                        text-green-800
                      "
                      :title="testimonial.quote"
                      style="width:20%;"
                    >
                      {{testimonial.quote.substring(0,80)}}...
                    </span>
                  </td>

                  <td class="px-6 py-4 whitespace-nowrap" >
                    <span
                      class="
                        inline-flex
                        text-xs
                        leading-5
                        font-semibold
                        text-green-800
                      "
                    >
                      {{testimonial.authour}}
                    </span>
                  </td>

                  <td class="px-6 py-4 whitespace-nowrap" >
                    <span
                      class="
                        inline-flex
                        text-xs
                        leading-5
                        font-semibold
                        text-green-800
                      "
                    >
                      {{testimonial.authour_type}}
                    </span>
                  </td>
                  <td
                    class="
                      px-6
                      py-4
                      flex
                      items-center
                      justify-start
                      whitespace-nowrap
                      text-right text-sm
                      font-medium
                    "
                  >
                    <font-awesome-icon icon="edit"  size="1x" class="text-green-600 mr-4 cursor-pointer mt-1" @click="Edit(testimonial.id)" />
                    <font-awesome-icon icon="trash"  size="1x" class="text-red-600 cursor-pointer mt-1" @click="DialogBox(testimonial.id)" />
                  </td>
                </tr>

                <!-- More people... -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
     <div class="dialog_box fixed inset-0 h-screen w-full flex justify-center items-center" v-if="deleteDialog === true">
      <div class="dialog_content bg-white rounded-md shadow-md">
        <h1 class="text-xl text-center my-8  font-bold">
          Are you sure you want to delete this testimonial?
        </h1>
        <div class="flex items-center justify-center my-6">
          <button
            class="bg-gray-400 mx-4 rounded-sm text-white py-1 px-6"
            @click="deleteDialog = false"
          >
            cancel
          </button>
          <button
            class="bg-red-700 mx-4 text-white rounded-sm py-1 px-6"
            data-testimonial-id="" v-on:click="Delete"
          >
            ok
          </button>
        </div>
      </div>
     </div>
     <div class="dialog_box fixed inset-0 h-screen w-full flex justify-center items-center" v-if="editDialog === true">
      <div class="dialog_content bg-white rounded-md shadow-md">
         <div class="my-2   flex items-center justify-between py-3 px-10"><span class="font-bold text-lg" >Edit Testimonial</span><font-awesome-icon icon="times"  size="1x" class="text-red-600 cursor-pointer" @click="editDialog = false" /></div>
         <form class="bg-white rounded px-10 pb-10" >
            <div class="form_box">
              <div class="err_box ">
                <div class="success py-3 text-green-500" v-if="success == true">
                  Added Successfully
                </div>
                <div class="error py-3 text-red-500" v-if="empty_valid == true">
                  Values should not be empty
                </div>
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="title"
                >
                  Title
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
                  id="title"
                  type="text"
                  placeholder="Title"
                  v-model="title"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="quote"
                >
                  Quote
                </label>
                <textarea
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
                  id="quote"
                  type="text"
                  placeholder="Quote"
                  v-model="quote"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="authour"
                >
                  Authour
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
                  id="authour"
                  type="text"
                  placeholder="Authour"
                  v-model="authour"
                />
              </div>
              <div class="mb-12">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="authour_type"
                >
                  Authour Type
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
                  id="authour_type"
                  type="text"
                  placeholder="Authour Type"
                  v-model="authourType"
                />
              </div>
              <div class="flex items-center justify-between">
                <button
                  class="
                    bg-blue-500
                    hover:bg-blue-700
                    text-white
                    font-bold
                    w-full
                    py-2
                    px-4
                    rounded
                    focus:outline-none
                    focus:shadow-outline
                    reg_btn
                  "
                  type="button"
                  @click="Update"
                >
                  Update Testimonial
                </button>
              </div>
            </div>
          </form>
      </div>
     </div>
  </div>
</div>
<!-- <div class="my-60" v-else>
  <h1 class="text-center text-2xl font-bold">You do not have authorization to this page, please contact admin</h1>
</div> -->
</section>
</template>

<script>
import AddTesimonial from '~/components/CreateTestimonial.vue'
export default {
  layout:'admin-header-layout',
  components: {
    AddTesimonial
  },
  data () {
    return {
      deleteDialog: false,
      editDialog: false,
      addUserDialog: false,
      empty_valid: false,
      success: false,
      testimonials:[],
      id:'',
      quote:'',
      authour:'',
      authourType:'',
      title:''
    }
  },
  mounted () {
    this.GetTestimonials()
    if(!localStorage.getItem('user_token')){
        this.$router.push('/psm-admin')
    }
  },
  methods: {
    GetTestimonials () {
      this.$axios
        .get(process.env.baseUrl + 'api/testimonial/index')
        .then((response) => {
          this.testimonials = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    DialogBox (id) {
      this.deleteDialog = true
      this.$el.setAttribute('data-testimonial-id', id)
    },
    Delete () {
      var id = this.$el.getAttribute('data-testimonial-id')
      this.$axios
        .delete(process.env.baseUrl + 'api/testimonial/delete/' + id)
        .then(() => {
          this.deleteDialog = false
          this.GetTestimonials()
        })
        .catch((error) => {
          console.log(error)
        })
    },
    childDialog () {
      this.addUserDialog = false
    },
    Edit (id) {
      this.editDialog = true
      this.$axios
        .get(process.env.baseUrl + 'api/testimonial/show/' + id)
        .then((response) => {
          this.id = response.data.id
          this.quote = response.data.quote
          this.authour = response.data.authour
          this.authourType = response.data.authour_type
          var json_data = JSON.parse(response.data.data_value);
          this.title = json_data.title;
        })
        .catch((error) => {
          console.log(error)
        })
    },
    Update () {
      this.empty_valid = false
      this.success = false
      var err = 0
      if (
        this.quote === '' ||
        this.authour === '' ||
        this.authour_type === ''
      ) {
        this.empty_valid = true
        err++
      }
      if (err === 0) {
         var newDate = new Date();
           var hours = newDate.getHours();
           var minutes = newDate.getMinutes();
           var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; 
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
         var date = newDate.getDate() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getFullYear() + ' ' + strTime;
        var json_data = {
          title:this.title,
          date:date
        }
        json_data = JSON.stringify(json_data);
        this.$axios
          .put(process.env.baseUrl + 'api/testimonial/update/' + this.id, {
            id: this.id,
            quote: this.quote,
            authour: this.authour,
            authour_type: this.authourType,
            data_value:json_data
          })
          .then(() => {
            this.editDialog = false
            this.GetTestimonials()
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }
}
</script>

<style scoped>
.dialog_box {
  background-color: rgba(0, 0, 0, 0.5);
}
.dialog_content {
  width: 550px;
  max-width: 100%;
}
</style>
