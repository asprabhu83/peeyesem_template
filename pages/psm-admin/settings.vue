<template>
  <div class="my-24">
  <div class="dialog_box fixed inset-0 h-screen w-full flex justify-center items-center" v-if="setupMailDialog === true">
      <div class="dialog_content bg-white rounded-md shadow-md">
         <div class="my-2   flex items-center justify-between py-3 px-6"><span class="font-bold text-lg" >Setup Mail</span><font-awesome-icon icon="times"  size="1x" class="text-red-600 cursor-pointer" @click="setupMailDialog = false" /></div>
         <SetupMail @created="GetDetails" @childDialog="childDialog"/>
      </div>
   </div>
   <div class="w-10/12 mx-auto text-right mt-10">
     <button @click="setupMailDialog = true" class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 ml-5 px-4 rounded focus:outline-none focus:shadow-outline">Setup Mail</button>
   </div>
  <div class="w-10/12 mx-auto mt-10">
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
                    Logo
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
                    Service No
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
                    Sales No
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
                    WhatsApp No
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
                    Fb Link
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
                    Insta Link
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
                    LinkedIn Link
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
                <tr v-if="SettingData.length == 0" >
                    <td class="px-6 py-4 whitespace-nowrap" colspan="5" style="text-align:center;"> No Data</td>
                </tr>
                <tr v-for="item in SettingData" :key="item.id">
                  <td class="px-6 py-4 whitespace-nowrap" >
                        <div class="model_image">
                            <img :src="baseUrl + 'images/' + item.site_logo" style="width:100%;" />
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
                      {{item.service_number}}
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
                      {{item.sales_number}}
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
                      {{item.whatsapp_number}}
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
                      {{item.fb_link}}
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
                      {{item.insta_link}}
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
                      {{JSON.parse(item.data_value).linked_in_link}}
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
                  </td>
                </tr>

                <!-- More people... -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
      <!-- Modal Box -->

      <div class="dialog_box fixed inset-0 h-screen w-full flex justify-center items-center" v-if="editDialog === true">
      <div class="dialog_content bg-white rounded-md shadow-md">
         <div class="my-2   flex items-center justify-between py-3 px-10"><span class="font-bold text-lg" >Edit</span><font-awesome-icon icon="times"  size="1x" class="text-red-600 cursor-pointer" @click="editDialog = false" /></div>
         <form class="bg-white rounded px-10 pb-10" >
            <div class="form_box">
              <div class="err_box ">
                <div class="success py-3 text-green-500" v-if="success == true">
                  Updated Successfully
                </div>
                <div class="error py-3 text-red-500" v-if="empty_valid == true">
                  Invalid Data
                </div>
              </div>
              <div class="mb-4">
                    <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Model image
                    </label>
                    <label
                    class="shadow
                        block
                        mt-2
                        siteLogo
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
                    for="siteLogo"
                    >
                    Select image
                    </label>
                    <input
                    class="
                        hidden
                    "
                    accept="image/*"
                    id="siteLogo"
                    ref="myFiles"
                    type="file"
                    data-file-target="siteLogo"
                    placeholder="Model Image"
                    @change="previewFiles"
                    />
                </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="service_no"
                >
                  Service Number
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
                  id="service_no"
                  type="number"
                  placeholder="Service Number"
                  v-model="serviceNo"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="sales_no"
                >
                  Sales Number
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
                  id="sales_no"
                  type="number"
                  placeholder="Sales Number"
                  v-model="salesNo"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="whatsap_no"
                >
                  WhatsApp Number
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
                  id="whatsap_no"
                  type="number"
                  placeholder="WhatsApp Number"
                  v-model="whatsappNo"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="fb_link"
                >
                  Facebook Link
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
                  id="fb_link"
                  type="text"
                  placeholder="Facebook Link"
                  v-model="fbLink"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="insta_link"
                >
                  Instagram Link
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
                  id="insta_link"
                  type="text"
                  placeholder="Instagram Link"
                  v-model="instaLink"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="linkedin_link"
                >
                  LinkedIn Link
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
                  id="linkedin_link"
                  type="text"
                  placeholder="LinkedIn Link"
                  v-model="linkedInLink"
                />
              </div>
              <div class="mb-12">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="youtube_link"
                >
                  Youtube Link
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
                  id="youtube_link"
                  type="text"
                  placeholder="Youtube Link"
                  v-model="youtubeLink"
                />
              </div>
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
                  Update
                </button>
              </div>
          </form>
      </div>
     </div>
  </div>
</template>

<script>
import SetupMail from '../../components/forms/EnquireMail.vue'
export default {
    layout:'admin-header-layout',
    components:{
      SetupMail
    },
    data(){
        return{
            editDialog:false,
            success:false,
            empty_valid:false,
            id:'',
            siteLogo:'',
            serviceNo:'',
            salesNo:'',
            whatsappNo:'',
            fbLink:'',
            instaLink:'',
            youtubeLink:'',
            linkedInLink:'',
            buyCar:'',
            insurance:'',
            singleCar:'',
            testDrive:'',
            contact:'',
            accessories:'',
            bookService:'',
            SettingData:[],
            baseUrl:process.env.baseUrl,
            setupMailDialog:false
        }
    },
    mounted(){
        this.GetDetails();
    },
    methods:{
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
            if (path === 'siteLogo') {
                reader.onload = (e) => {
                 vm.siteLogo = e.target.result;
                }
            }
            if (flen !== 0) {
                reader.readAsDataURL(file)
            }
        },
        childDialog () {
          this.setupMailDialog = false
        },
        GetDetails(){
            this.$axios.get(process.env.baseUrl + 'api/settings/index')
            .then((res)=>{
                this.SettingData = res.data;
            }).catch((err)=>{
                console.log(err)
            })
        },
        Edit(id){
            this.editDialog = true;
            this.$axios.get(process.env.baseUrl + 'api/settings/show/'+ id)
            .then((res)=>{
                this.id = res.data.id;
                this.serviceNo = res.data.service_number;
                this.salesNo = res.data.sales_number;
                this.whatsappNo = res.data.whatsapp_number;
                this.fbLink = res.data.fb_link;
                this.instaLink = res.data.insta_link;
                this.youtubeLink = res.data.youtube_link;
                this.linkedInLink = JSON.parse(res.data.data_value).linked_in_link;
                this.buyCar = JSON.parse(res.data.data_value).buy_car_mail;
                this.insurance = JSON.parse(res.data.data_value).insurance_mail;
                this.singleCar = JSON.parse(res.data.data_value).single_car_mail;
                this.testDrive = JSON.parse(res.data.data_value).test_drive_mail;
                this.contact = JSON.parse(res.data.data_value).contact_mail;
                this.accessories = JSON.parse(res.data.data_value).accessories_mail;
                this.bookService = JSON.parse(res.data.data_value).book_service_mail;
            }).catch((err)=>{
                console.log(err);
            })
        },
        Update(e){
            var btn = e.target;
            btn.innerHTML = 'Loading';
            var json_data = {
                buy_car_mail:this.buyCar,
                insurance_mail:this.insurance,
                single_car_mail:this.singleCar,
                test_drive_mail:this.testDrive,
                contact_mail:this.contact,
                accessories_mail:this.accessories,
                book_service_mail:this.bookService,
                linked_in_link:this.linkedInLink,
            }
            json_data = JSON.stringify(json_data);
            this.$axios.put(process.env.baseUrl + 'api/settings/update/' + this.id,{
                setting_id:'1',
                site_logo:this.siteLogo,
                service_number:this.serviceNo,
                sales_number:this.salesNo,
                whatsapp_number:this.whatsappNo,
                fb_link:this.fbLink,
                insta_link:this.instaLink,
                youtube_link:this.youtubeLink,
                data_value: json_data
            }).then((res)=>{
                this.editDialog = false;
                btn.innerHTML = 'Update';
                this.GetDetails();
            }).catch((err)=>{
                console.log(err);
                btn.innerHTML = 'Update';
            })
        }
    }
}
</script>

<style scoped>
.model_image{
  height: 120px;
  width: 120px;
}
.model_image img{
  height: 100%;
  object-fit: contain;
}
.dialog_box {
  background-color: rgba(0, 0, 0, 0.5);
}
.dialog_content {
  width: 550px;
  max-width: 100%;
}
.form_box{
  height: 500px;
  overflow: hidden;
  overflow-y: scroll;
  margin-bottom: 30px;
}
.form_box::-webkit-scrollbar {
  width: 4px;
}
.form_box::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
.form_box::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
.form_box::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>