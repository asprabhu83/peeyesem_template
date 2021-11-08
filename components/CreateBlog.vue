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
              Values should not be empty
            </div>
          </div>
          <div class="mb-4">
            <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="blogImage"
                    >
                    Blog image
                    </label>
                    <label
                    class="shadow-md
                        block
                        mt-2
                        blogImage
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
                    for="blogImage"
                    >
                    Select image
                    </label>
                    <input
                    class="
                        hidden
                    "
                    accept="image/*"
                    id="blogImage"
                    ref="myFiles"
                    type="file"
                    data-file-target="blogImage"
                    placeholder="Blog Image"
                    @change="previewFiles"
                    />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="blogHeading"
            >
              Blog Heading
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
              id="blogHeading"
              type="text"
              placeholder="Blog Heading"
              v-model="blogHeading"
            />
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
              for="description"
            >
              Description
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
              id="description"
              type="text"
              placeholder="Description"
              v-model="description"
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
              @click="AddBlog"
            >
              Add Blog
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
      blogHeading:'',
      blogImage:'',
      title:'',
      description:'',
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
            if (path === 'blogImage') {
                reader.onload = (e) => {
                 vm.blogImage = e.target.result;
                }
            }
            if (flen !== 0) {
                reader.readAsDataURL(file)
            }
    },
    AddBlog() {
      this.empty_valid = false
      this.success = false
      var err = 0
      if (
        this.blogHeading === '' ||
        this.title === '' ||
        this.description === ''
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
          blog_heading:this.blogHeading,
          date:date
        }
        json_data = JSON.stringify(json_data);
        axios.post(process.env.baseUrl + 'api/blog/store', {
          title: this.title,
          blog_image: this.blogImage,
          description: this.description,
          data_value: json_data
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
