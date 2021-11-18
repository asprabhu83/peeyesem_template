<template>
  <div>
    <div class="pb-3 pt-0 px-7 mx-auto login_full_scrn">
      <form class="bg-white rounded mb-4" >
        <div class="form_box">
          <div class="err_box ">
            <div class="success py-3 text-green-500" v-if="success == true">
              Added Successfully
            </div>
            <div class="error py-3 text-red-500" v-if="empty_valid == true">
              Invalid Data
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
              @click="AddSlider"
            >
              Add Slider
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
  data () {
    return {
      sliderImage:'',
      sliderLink:'',
      empty_valid: false,
      success: false,
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
                 vm.blogImage = e.target.result;
                }
            }
            if (flen !== 0) {
                reader.readAsDataURL(file)
            }
    },
    AddSlider() {
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
        // var json_data = {
        //   blog_heading:this.blogHeading,
        //   date:date
        // }
        // json_data = JSON.stringify(json_data);
        axios.post(process.env.baseUrl + 'api/slider/store', {
          slider_image: this.sliderImage,
          slider_link: this.sliderLink,
        }).then(() => {
          this.success = true
          this.$emit('created')
          this.$emit('childDialog')
        }).catch((error) => {
          console.log(error)
        })
      }
    },
  }
}
</script>

<style>
</style>
