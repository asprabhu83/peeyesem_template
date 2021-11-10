<template>
  <div>
      <div class="dialog_box fixed inset-0 h-screen w-full flex justify-center items-center" v-if="addUserDialog === true">
          <div class="dialog_content bg-white rounded-md shadow-md">
            <div class="my-2   flex items-center justify-between py-3 px-6"><span class="font-bold text-lg" >Add UsedCar</span><font-awesome-icon icon="times"  size="1x" class="text-red-600 cursor-pointer" @click="addUserDialog = false" /></div>
            <UsedCar @created="GetUsedCars" @childDialog="childDialog"/>
          </div>
      </div>
      <div class="w-8/12 mx-auto text-right mt-10">
        <button @click="addUserDialog = true" class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 ml-5 px-4 rounded focus:outline-none focus:shadow-outline">Add UsedCar</button>
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
                        Model Image
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
                        Car Model
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
                        Purchase Year
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
                        kms Driven
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
                        Fuel Type
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
                        Price
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
                    <tr v-if="usedCars.length == 0" >
                        <td class="px-6 py-4 whitespace-nowrap" colspan="7" style="text-align:center;"> No Data</td>
                    </tr>
                    <tr v-for="item in usedCars" :key="item.id">
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
                          <div class="model_image">
                            <img :src="baseUrl + 'images/' + item.model_image" style="width:100%;" />
                        </div>
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
                        >
                          {{item.car_model}}
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
                          {{item.purchase_year}}
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
                          {{item.kms_driven}}
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
                          {{item.fuel_type}}
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
                          {{item.price}}
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
      </div>
      <div class="dialog_box fixed inset-0 h-screen w-full flex justify-center items-center" v-if="deleteDialog === true">
      <div class="dialog_content bg-white rounded-md shadow-md">
        <h1 class="text-xl text-center my-8  font-bold">
          Are you sure you want to delete this car?
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
            data-usedcar-id="" v-on:click="Delete"
          >
            ok
          </button>
        </div>
      </div>
     </div>
     <div class="dialog_box fixed inset-0 h-screen w-full flex justify-center items-center" v-if="editDialog === true">
      <div class="dialog_content bg-white rounded-md shadow-md">
         <div class="my-2   flex items-center justify-between py-3 px-10"><span class="font-bold text-lg" >Edit</span><font-awesome-icon icon="times"  size="1x" class="text-red-600 cursor-pointer" @click="editDialog = false" /></div>
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
                    for="car_model"
                  >
                    Car Model
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
                    id="car_model"
                    type="text"
                    placeholder="Car Model"
                    v-model="carModel"
                  />
              </div>
          <div class="mb-4">
            <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                    >
                    Model image
                    </label>
                    <label
                    class="shadow-md
                        block
                        mt-2
                        modelImage
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
                    for="modelImage"
                    >
                    Select image
                    </label>
                    <input
                    class="
                        hidden
                    "
                    accept="image/*"
                    id="modelImage"
                    ref="myFiles"
                    type="file"
                    data-file-target="modelImage"
                    placeholder="Model Image"
                    @change="previewFiles"
                    />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="purchase_year"
            >
              Purchase Year
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
              id="purchase_year"
              type="text"
              placeholder="Purchase Year"
              v-model="purchaseYear"
            />
          </div>
          <div class="mb-4">
              <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="fuelType"
            >
              Fuel Type
            </label>
               <select
                            class="
                            shadow-md
                            appearance-none
                            border
                            rounded
                            w-full
                            py-2
                            px-3
                            text-gray-700
                            cursor-pointer
                            leading-tight
                            focus:outline-none
                            focus:shadow-outline
                            "
                            id="fuelType"
                            v-model="fuelType"
                        >
                        <option class="text-xl " value="">Select fuel type</option>
                        <option class="text-xl" :value="model.name" v-for="model in FuelList"
                            :key="model.id" >{{model.name}}</option>
                    </select>
          </div>
          <div class="mb-4">
              <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="Manufacturer"
            >
              Manufacturer
            </label>
               <select
                            class="
                            shadow-md
                            appearance-none
                            border
                            rounded
                            w-full
                            py-2
                            px-3
                            text-gray-700
                            cursor-pointer
                            leading-tight
                            focus:outline-none
                            focus:shadow-outline
                            "
                            id="Manufacturer"
                            v-model="Manufacturer"
                        >
                        <option class="text-xl " value="">Select Manufacturer</option>
                        <option class="text-xl" :value="model.name" v-for="model in CarsList"
                            :key="model.id" >{{model.name}}</option>
                    </select>
          </div>
          <div class="mb-4">
              <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="Manufacturer"
            >
              Location
            </label>
               <select
                            class="
                            shadow-md
                            appearance-none
                            border
                            rounded
                            w-full
                            py-2
                            px-3
                            text-gray-700
                            cursor-pointer
                            leading-tight
                            focus:outline-none
                            focus:shadow-outline
                            "
                            id="Location"
                            v-model="Location"
                        >
                        <option class="text-xl " value="">Select Location</option>
                        <option class="text-xl" :value="model.name" v-for="model in CityList"
                            :key="model.id" >{{model.name}}</option>
                    </select>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="price"
            >
              Price
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
              id="price"
              type="text"
              placeholder="Price"
              v-model="Price"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="kms_driven"
            >
              Kms Driven
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
              id="kms_driven"
              type="text"
              placeholder="Kms Driven"
              v-model="kmsDriven"
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
              Update
            </button>
          </div>
            </div>
          </form>
      </div>
     </div>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
import UsedCar from '../../components/CreateUsedCars.vue'
export default {
  layout:'admin-header-layout',
  components:{
    UsedCar
  },
  data(){
    return{
      addUserDialog:false,
      editDialog:false,
      deleteDialog:false,
      usedCars:[],
      baseUrl:process.env.baseUrl,
      id:'',
      modelImage:'',
      carModel:'',
      purchaseYear:'',
      kmsDriven:'',
      Location:'',
      fuelType:'',
      Manufacturer:'',
      Price:'',
      CityList:[
                {
                    id:1,
                    name:'Madurai'
                },
                {
                    id:2,
                    name:'Chennai'
                },
                {
                    id:3,
                    name:'Trichendur'
                },
                {
                    id:4,
                    name:'Ramanathapuram'
                },
                {
                    id:5,
                    name:'Kovilpatti'
                },
                {
                    id:6,
                    name:'Tuticorin'
                }
            ],
      FuelList:[
                {
                    id:1,
                    name:'Petrol'
                },
                {
                    id:2,
                    name:'Diesel'
                },
                {
                    id:3,
                    name:'CNG'
                }
      ],
      CarsList:[
                {
                    id:1,
                    name:'Hyundai'
                },
                {
                    id:2,
                    name:'Chevrolet'
                },
                {
                    id:3,
                    name:'Ford'
                },
                {
                    id:4,
                    name:'Mahindra'
                },
                {
                    id:5,
                    name:'Maruti'
                },
                {
                    id:6,
                    name:'Renault'
                },
                {
                    id:7,
                    name:'Tata'
                },
                {
                    id:8,
                    name:'Toyota'
                },
                {
                    id:9,
                    name:'Volkswagon'
                },
                {
                    id:10,
                    name:'Honda'
                },
                {
                    id:11,
                    name:'SKODA'
                }
            ],
      empty_valid: false,
      success: false
    }
  },
  mounted(){
    this.GetUsedCars();
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
            if (path === 'modelImage') {
                reader.onload = (e) => {
                 vm.modelImage = e.target.result;
                }
            }
            if (flen !== 0) {
                reader.readAsDataURL(file)
            }
    },
    GetUsedCars(){
      axios.get(process.env.baseUrl + 'api/used_car/index')
      .then((res) => {
         this.usedCars = res.data;
        }).catch((error) => {
          console.log(error)
        })
    },
    childDialog () {
      this.addUserDialog = false
    },
    Edit(id){
      this.editDialog = true;
      axios.get(process.env.baseUrl + 'api/used_car/show/' + id)
      .then((res) => {
        this.id = res.data.id;
          this.carModel = res.data.car_model
          this.fuelType = res.data.fuel_type
          this.Price = res.data.price
          this.kmsDriven = res.data.kms_driven
          this.purchaseYear = res.data.purchase_year
          var data_form = JSON.parse(res.data.data_form);
          var {manufacturer,location} = data_form;
          this.Manufacturer = manufacturer;
          this.Location = location;
        }).catch((error) => {
          console.log(error)
        })
    },
    Update(){
          var data_value = {
              manufacturer:this.Manufacturer,
              location:this.Location
            }
            data_value = JSON.stringify(data_value);
      var id = this.id;
      axios.put(process.env.baseUrl + 'api/used_car/update/' + id,{
        car_model:this.carModel,
        fuel_type:this.fuelType,
        price:this.Price,
        kms_driven:this.kmsDriven,
        model_image:this.modelImage,
        purchase_year:this.purchaseYear,
        data_form:data_value
      })
      .then((res) => {
        this.editDialog = false;
          this.GetUsedCars();
        }).catch((error) => {
          console.log(error)
        })
    },
    DialogBox(id){
      this.deleteDialog = true
      this.$el.setAttribute('data-usedcar-id', id)
    },
    Delete(){
      var id = this.$el.getAttribute('data-usedcar-id')
      axios.delete(process.env.baseUrl + 'api/used_car/delete/' + id)
      .then(() => {
        this.deleteDialog = false;
          this.GetUsedCars();
        }).catch((error) => {
          console.log(error)
        })
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