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
                    for="mainImage"
                    >
                    Image
                    </label>
                    <label
                    class="shadow-md
                        block
                        mt-2
                        mainImage
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
                    for="mainImage"
                    >
                    Select image
                    </label>
                    <input
                    class="
                        hidden
                    "
                    accept="image/*"
                    id="mainImage"
                    ref="myFiles"
                    type="file"
                    data-file-target="mainImage"
                    placeholder="Blog Image"
                    @change="previewFiles"
                    />
          </div>
          <div class="mb-4">
            <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="posterImage"
                    >
                    Poster image
                    </label>
                    <label
                    class="shadow-md
                        block
                        mt-2
                        posterImage
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
                    for="posterImage"
                    >
                    Select image
                    </label>
                    <input
                    class="
                        hidden
                    "
                    accept="image/*"
                    id="posterImage"
                    ref="myFiles"
                    type="file"
                    data-file-target="posterImage"
                    placeholder="Blog Image"
                    @change="previewFiles"
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
              @click="AddNews"
            >
              Add News
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mainImage:'',
      posterImage:'',
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
            if (path === 'mainImage') {
                reader.onload = (e) => {
                 vm.mainImage = e.target.result;
                }
            }
            if (path === 'posterImage') {
                reader.onload = (e) => {
                 vm.posterImage = e.target.result;
                }
            }
            if (flen !== 0) {
                reader.readAsDataURL(file)
            }
    },
    AddNews() {
      this.empty_valid = false
      this.success = false
      var err = 0

      if (err === 0) {
        // var json_data = {
        //   blog_heading:this.blogHeading,
        //   date:date
        // }
        // json_data = JSON.stringify(json_data);
        this.$axios.post(process.env.baseUrl + 'api/news_events/store', {
          title: this.title,
          image: this.mainImage,
          poster_image: this.posterImage,
          description: this.description,
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
