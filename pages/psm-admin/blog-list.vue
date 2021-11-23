<template>
<section>
<div >
  <div class="dialog_box fixed inset-0 h-screen w-full flex justify-center items-center" v-if="addUserDialog === true">
      <div class="dialog_content bg-white rounded-md shadow-md">
         <div class="my-2   flex items-center justify-between py-3 px-6"><span class="font-bold text-lg" >Add Blog</span><font-awesome-icon icon="times"  size="1x" class="text-red-600 cursor-pointer" @click="addUserDialog = false" /></div>
         <AddBlog @created="GetBlogs" @childDialog="childDialog"/>
      </div>
   </div>
   <div class="w-8/12 mx-auto text-right mt-10">
     <button @click="addUserDialog = true" class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 ml-5 px-4 rounded focus:outline-none focus:shadow-outline">Add Blog<font-awesome-icon icon="user-plus"  size="1x" class="text-white ml-2 cursor-pointer"  /></button>
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
                    Blog Image
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
                    Blog Heading
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
                    Title
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
                    Description
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
                <tr v-if="Blogs.length == 0" >
                    <td class="px-6 py-4 whitespace-nowrap" colspan="5" style="text-align:center;"> No Data</td>
                </tr>
                <tr v-for="blog in Blogs" :key="blog.id">
                  <td class="px-6 py-4 whitespace-nowrap" >
                    <div class="model_image">
                        <img :src="baseUrl + 'images/' + blog.blog_image" style="width:100%;" />
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
                      {{JSON.parse(blog.data_value).blog_heading}}
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
                      {{blog.title}}
                    </span>
                  </td>
                  <td class="px-6 py-4 "  >
                    <span
                      class="
                        inline-flex
                        text-xs
                        leading-5
                        font-semibold
                        text-green-800
                      "
                      :title="blog.description"
                      style="width:20%;"
                    >
                      {{blog.description.substring(0,80)}}...
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
                    <font-awesome-icon icon="edit"  size="1x" class="text-green-600 mr-4 cursor-pointer mt-1" @click="Edit(blog.id)" />
                    <font-awesome-icon icon="trash"  size="1x" class="text-red-600 cursor-pointer mt-1" @click="DialogBox(blog.id)" />
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
          Are you sure you want to delete this Blog?
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
            data-blog-id="" v-on:click="Delete"
          >
            ok
          </button>
        </div>
      </div>
     </div>
     <div class="dialog_box fixed inset-0 h-screen w-full flex justify-center items-center" v-if="editDialog === true">
      <div class="dialog_content bg-white rounded-md shadow-md">
         <div class="my-2   flex items-center justify-between py-3 px-10"><span class="font-bold text-lg" >Edit Blog</span><font-awesome-icon icon="times"  size="1x" class="text-red-600 cursor-pointer" @click="editDialog = false" /></div>
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
                  @click="Update"
                >
                  Update Blog
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
import AddBlog from '../../components/CreateBlog.vue'
export default {
  layout:'admin-header-layout',
  components: {
    AddBlog
  },
  data () {
    return {
      deleteDialog: false,
      editDialog: false,
      addUserDialog: false,
      empty_valid: false,
      success: false,
      Blogs:[],
      id:'',
      blogHeading:'',
      blogImage:'',
      title:'',
      description:'',
      baseUrl:process.env.baseUrl,
    }
  },
  mounted () {
    this.GetBlogs()
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
            if (path === 'blogImage') {
                reader.onload = (e) => {
                 vm.blogImage = e.target.result;
                }
            }
            if (flen !== 0) {
                reader.readAsDataURL(file)
            }
    },
    GetBlogs () {
      this.$axios
        .get(process.env.baseUrl + 'api/blog/index')
        .then((response) => {
          this.Blogs = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    DialogBox (id) {
      this.deleteDialog = true
      this.$el.setAttribute('data-blog-id', id)
    },
    Delete () {
      var id = this.$el.getAttribute('data-blog-id')
      this.$axios
        .delete(process.env.baseUrl + 'api/blog/delete/' + id)
        .then(() => {
          this.deleteDialog = false
          this.GetBlogs()
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
        .get(process.env.baseUrl + 'api/blog/show/' + id)
        .then((response) => {
          this.id = response.data.id
          this.title = response.data.title
          this.description = response.data.description
          var json_data = JSON.parse(response.data.data_value);
          this.blogHeading = json_data.blog_heading;
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
        this.$axios
          .put(process.env.baseUrl + 'api/blog/update/' + this.id, {
            title: this.title,
            blog_image: this.blogImage,
            description: this.description,
            data_value: json_data
          })
          .then(() => {
            this.editDialog = false
            this.GetBlogs()
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
