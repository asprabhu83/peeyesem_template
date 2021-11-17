<template>
  <div>
        <div class="w-8/12 mx-auto mt-24">
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
                        <td class="px-6 py-4 whitespace-nowrap text-center" >
                            <button class="view_more_btn" @click="detailsDialog = true">View More</button>
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
                <div class="flex items-center justify-center my-6">
                <button
                    class="bg-gray-400 mx-4 rounded-sm text-white py-1 px-6"
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
            detailsDialog:false
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
    padding: 10px;
    background: #002c5f;
    color: white;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 4px;
}
</style>