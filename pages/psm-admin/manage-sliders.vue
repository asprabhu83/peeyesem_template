<template>
<section>
<div >
  <div class="dialog_box fixed inset-0 h-screen w-full flex justify-center items-center" v-if="addUserDialog === true">
      <div class="dialog_content bg-white rounded-md shadow-md">
         <div class="my-2   flex items-center justify-between py-3 px-6"><span class="font-bold text-lg" >Add Slider</span><font-awesome-icon icon="times"  size="1x" class="text-red-600 cursor-pointer" @click="addUserDialog = false" /></div>
         <AddSlider @created="GetSliders" @childDialog="childDialog"/>
      </div>
   </div>
   <div class="w-8/12 mx-auto text-right mt-10">
     <button @click="addUserDialog = true" class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 ml-5 px-4 rounded focus:outline-none focus:shadow-outline">Add Slider<font-awesome-icon icon="user-plus"  size="1x" class="text-white ml-2 cursor-pointer"  /></button>
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
                    Slider Image
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
                    Slider Link
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
                <tr v-if="Sliders.length == 0" >
                    <td class="px-6 py-4 whitespace-nowrap" colspan="3" style="text-align:center;"> No Data</td>
                </tr>
                <tr v-for="item in Sliders" :key="item.id">
                  <td class="px-6 py-4 whitespace-nowrap" >
                    <div class="model_image">
                        <img :src="baseUrl + 'images/' + item.slider_image" style="width:100%;" />
                    </div>
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
                      {{item.slider_link}}
                    </span>
                  </td>
                  <td
                    class="
                      px-6
                      py-4
                      whitespace-nowrap
                      text-left text-sm
                      font-medium
                    "
                  >
                    <font-awesome-icon icon="edit"  size="1x" class="text-green-600 mr-4 cursor-pointer mt-1" @click="Edit(item.id)" />
                    <font-awesome-icon icon="trash"  size="1x" class="text-red-600 cursor-pointer mt-1" @click="DialogBox(item.id)" />
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
          Are you sure you want to delete this Slider?
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
            data-slider-id="" v-on:click="Delete"
          >
            ok
          </button>
        </div>
      </div>
     </div>
     <div class="dialog_box fixed inset-0 h-screen w-full flex justify-center items-center" v-if="editDialog === true">
      <div class="dialog_content bg-white rounded-md shadow-md">
         <div class="my-2   flex items-center justify-between py-3 px-10"><span class="font-bold text-lg" >Edit Slider</span><font-awesome-icon icon="times"  size="1x" class="text-red-600 cursor-pointer" @click="editDialog = false" /></div>
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
                            for="sliderImage"
                            >
                            Blog image
                            </label>
                            <label
                            class="shadow-md
                                block
                                mt-2
                                sliderImage
                                cursor-pointer
                                appearance-none
                                border
                                rounded
                                w-full
                                py-2
                                px-3
                                text-gray-700
                                leading-tight
                                focus:outline-none
                                focus:shadow-outline"
                            for="sliderImage"
                            >
                            Select image
                            </label>
                            <input
                            class="
                                hidden
                            "
                            accept="image/*"
                            id="sliderImage"
                            ref="myFiles"
                            type="file"
                            data-file-target="sliderImage"
                            placeholder="Blog Image"
                            @change="previewFiles"
                            />
                </div>
                <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="slider_link"
                    >
                    Slider Link
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
                    id="slider_link"
                    type="text"
                    placeholder="Slider Link"
                    v-model="sliderLink"
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
                  Update Slider
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
import axios from '~/plugins/axios'
import AddSlider from '../../components/CreateSlider.vue'
export default {
  layout:'admin-header-layout',
  components: {
    AddSlider
  },
  data () {
    return {
      deleteDialog: false,
      editDialog: false,
      addUserDialog: false,
      empty_valid: false,
      success: false,
      Sliders:[],
      id:'',
      sliderImage:'',
      sliderLink:'',
      baseUrl:process.env.baseUrl,
    }
  },
  mounted () {
    this.GetSliders()
    if(!localStorage.getItem('user_token')){
        this.$router.push('/psm-admin')
    }
  },
  methods: {
      previewFiles (event) {
            var label = document.querySelector('.' + event.target.getAttribute('data-file-target'))
            var fileLength = event.target.files.length
            if (fileLength === 0) {
                label.innerHTML = 'Select image'
            } else {
                var fileName = event.target.files[0].name
                label.innerHTML = fileName
            }
            var files = event.target.files || event.dataTransfer.files
            this.createImage(files[0], event.target.getAttribute('data-file-target'), fileLength);
        },
        createImage (file, path, flen) {
            var reader = new FileReader()
            var vm = this
            if (path === 'sliderImage') {
                reader.onload = (e) => {
                 vm.sliderImage = e.target.result;
                }
            }
            if (flen !== 0) {
                reader.readAsDataURL(file)
            }
    },
    GetSliders () {
      axios
        .get(process.env.baseUrl + 'api/slider/index')
        .then((response) => {
          this.Sliders = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    DialogBox (id) {
      this.deleteDialog = true
      this.$el.setAttribute('data-slider-id', id)
    },
    Delete () {
      var id = this.$el.getAttribute('data-slider-id')
      axios
        .delete(process.env.baseUrl + 'api/slider/delete/' + id)
        .then(() => {
          this.deleteDialog = false
          this.GetSliders()
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
      axios
        .get(process.env.baseUrl + 'api/slider/show/' + id)
        .then((response) => {
          this.id = response.data.id;
          this.sliderLink = response.data.slider_link;
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
        this.sliderImage === '' ||
        this.sliderLink === ''
      ) {
        this.empty_valid = true
        err++
      }
      if (err === 0) {
        axios
          .put(process.env.baseUrl + 'api/slider/update/' + this.id, {
            slider_image: this.sliderImage,
          slider_link: this.sliderLink,
          })
          .then(() => {
            this.editDialog = false
            this.GetSliders()
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
.model_image{
  height: 120px;
  width: 120px;
}
.model_image img{
  height: 100%;
  object-fit: contain;
}
</style>
