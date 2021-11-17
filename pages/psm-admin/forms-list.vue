<template>
  <div>
        <div class="w-8/12 mx-auto mt-24">
            <div class="my-4">
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
                    id="form_type"
                    v-model="formType"
                    @change="filterFormData"
                >
                <option class="text-xl " value="">Sort By Form Type</option>
                <option class="text-xl" :value="model" v-for="model in formTypeList"
                    :key="model" >{{model}}</option>
                </select>
            </div>
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
                            Full Name
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
                            Eamil
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
                            Mobile No
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
                            Form Type
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
                            View
                        </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-if="formData.length == 0" >
                            <td class="px-6 py-4 whitespace-nowrap" colspan="6" style="text-align:center;"> No Data</td>
                        </tr>
                        <tr v-for="item in formData" :key="item.id">
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
                            {{item.id}}
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
                            {{item.full_name}}
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
                            {{item.email_id}}
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
                            {{item.mobile_no}}
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
                            {{item.form_type}}
                            </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap " >
                            <button class="view_more_btn" @click="filterMoreDetails(item.id)">View More</button>
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
        <div class="dialog_box fixed inset-0 h-screen w-full flex justify-center items-center" v-if="detailsDialog === true">
            <div class="dialog_content bg-white rounded-md shadow-md">
                <div class="more_poupup_heading">More Details</div>
                <div class="item_value" v-for="(item,key) in singleData" :key="item"><b class="capitalize">{{key.replace(/_/g,' ')}}</b> - {{item}}</div>
                <div class="flex items-center justify-center my-6">
                <button
                    class=" mx-4 rounded-sm text-white py-1 px-6"
                    @click="detailsDialog = false"
                >
                    Close
                </button>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
    layout:'admin-header-layout',
    data(){
        return{
            formData:[],
            detailsDialog:false,
            itemId:'',
            singleData:[],
            formTypeList:[],
            formType:''
        }
    },
    mounted(){
        this.GetFormData();
    },
    methods:{
        GetFormData(){
            axios.get(process.env.baseUrl + 'api/car_form/index')
            .then((res)=>{
                this.formData = res.data;
            }).catch((err)=>{
                console.log(err);
            })
        },
        GetFormType(){
          var item =  [...new Set(this.formData.map((item)=>{return item.form_type}))]
          this.formTypeList = item;
        },
        filterFormData(){
            var item = this.formData.filter((item)=>{
                return item.form_type == this.formType
            })
            this.formData = item;
        },
        filterMoreDetails(id){
           var item = this.formData.filter((item)=>{
                return item.id == id;
            })
            this.detailsDialog = true;
            var [first] = item;
            var {data_form_value} = first;
            var data = JSON.parse(data_form_value);
            this.singleData = data;
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
.view_more_btn{
    padding: 7px 12px;
    background: #002c5f;
    color: white;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 4px;
    font-size: 12px;
}
.more_poupup_heading{
    font-weight: 600;
    text-align: center;
    padding: 30px 10px 20px 10px;
    border-bottom: 1px solid lightgray;
}
.dialog_box .item_value{
    text-align: center;
    margin: 15px;
}
.dialog_box button{
    background: #002c5f;
}
</style>