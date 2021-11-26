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
              for="buyCar"
            >
              Buy Car
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
              id="buyCar"
              type="text"
              placeholder="Buy Car"
              v-model="buyCar"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="insurance"
            >
              Insurance
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
              id="insurance"
              type="text"
              placeholder="Insurance"
              v-model="insurance"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="singleCar"
            >
              Single Car
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
              id="singleCar"
              type="text"
              placeholder="Single Car"
              v-model="singleCar"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="testDrive"
            >
              Test Drive
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
              id="testDrive"
              type="text"
              placeholder="Test Drive"
              v-model="testDrive"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="contact"
            >
              Contact
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
              id="contact"
              type="text"
              placeholder="Contact"
              v-model="contact"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="accessories"
            >
              Accessories
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
              id="accessories"
              type="text"
              placeholder="Accessories"
              v-model="accessories"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="bookService"
            >
              Book service
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
              id="bookService"
              type="text"
              placeholder="Book service"
              v-model="bookService"
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
              @click="AddMail"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            success:false,
            empty_valid:false,
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
            id:'',
        }
    },
    mounted(){
        this.Edit();
    },
    methods:{
        Edit(){
            var id = 1;
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
        AddMail(e){
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
                this.$emit('created');
                this.$emit('childDialog');
                btn.innerHTML = 'Submit';
            }).catch((err)=>{
                console.log(err);
                btn.innerHTML = 'Submit';
            })
        }
    }
}
</script>

<style>

</style>