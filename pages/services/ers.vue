<template>
  <div class="my-24 ers_page">
      <div class="heading_title mb-5">Emergency Breakdown</div>
      <div class="select_box w-3/12 mx-auto">
            <div class="variant_model_label">Select Your City</div>
            <select
                class="
                shadow
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
                variant_box_select
                "
                id="variant"
                v-model="selectedLocation"
                @change="locationChange"
            >
            <option class="text-xl" value="">select your city</option>
            <option class="text-xl"  :value="model" v-for="(model) in contactLocList"
                :key="model" >{{model}}</option>
            </select>
            <font-awesome-icon icon="chevron-down"  size="1x" class="text-black variant_model_icon mr-2" />
     </div>
     <div class="price_box">
            <div class="w-1/2 price_table_sec mx-auto mt-16" >
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
                                            <table class="min-w-full car_spec_table divide-y divide-gray-200">
                                            <thead class="">
                                                <tr>
                                                <th
                                                    scope="col"
                                                    class="
                                                    px-6
                                                    py-3
                                                    text-center text-xs
                                                    font-medium
                                                    text-white
                                                    uppercase
                                                    tracking-wider
                                                    "
                                                >
                                                    Location
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="
                                                    px-6
                                                    py-3
                                                    text-center text-xs
                                                    font-medium
                                                    text-white
                                                    uppercase
                                                    tracking-wider
                                                    "
                                                >
                                                    Emergency Breakdown Contact
                                                </th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200">
                                                <tr v-if="contactLocations.length == 0" >
                                                    <td class="px-6 py-4 whitespace-nowrap" colspan="2" style="text-align:center;"> No Data</td>
                                                </tr>
                                                <tr v-for="item in contactLocations" :key="item.id" >
                                                <td class="px-4 py-3 " >
                                                    <span
                                                    class="
                                                        inline-flex
                                                        text-xs
                                                        leading-5
                                                        font-semibold
                                                        text-black
                                                    "
                                                    >
                                                    {{item.location}}
                                                    </span>
                                                </td>
                                                <td class="px-4 py-3 " >
                                                    <span
                                                    class="
                                                        inline-flex
                                                        items-center
                                                        text-xs
                                                        leading-5
                                                        font-semibold
                                                        text-black
                                                    "
                                                    >
                                                    {{item.emergency_breakdown_contact}}
                                                    </span>

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
     </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            contactLocList:[
                'MYLAPORE',
                'MADURAI',
                'TUTICORIN',
                'RAMNAD',
                'GUINDY',
                'KARAIKUDI',
                'KOVILPATTI',
                'KOTTURPURAM',
                'TONDIARPET',
                'THIRUCHENDUR'
            ],
            selectedLocation:'',
            contactLocations:[
                {
                    id:1,
                    location:'MYLAPORE',
                    particulars:'SALES',
                    address:`Old No. - 94, New No. - 162, Luz Church Road, Mylapore`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'9962666228/9962666118',
                    insurance_contact_number:'SAM SUNDAR - 78239 47148',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'',
                    customer_care:'JAYA SHREE - 7823947154'
                },
                {
                    id:2,
                    location:'MADURAI',
                    particulars:'SALES',
                    address:`No.5, Marriamman Teppakulam West Street, Opp: Thiyagarajar Arts College,Madurai,Tamil Nadu -625009`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'7824869030/7824869053',
                    insurance_contact_number:'VIJAYAN-7824869051',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'',
                    customer_care:'GOWRI-7824869053'
                },
                {
                    id:3,
                    location:'TUTICORIN',
                    particulars:'SALES',
                    address:`APC Mahalakshmi Women Collage, 4/47 B, Ettayapurm Road, Thoothukudi,Tamil Nadu -628002`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'7708066960',
                    insurance_contact_number:'SURESH - 9487896785',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'',
                    customer_care:'INDRA(CRE)-7094464039'
                },
                {
                    id:4,
                    location:'RAMNAD',
                    particulars:'SALES',
                    address:`3/135, Madurai NH Road, Opp: MG Mahal Ramanathapuram,Tamil Nadu -623501`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'7094449808/8903465546',
                    insurance_contact_number:'HADHIL-9677329510',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'',
                    customer_care:'JANSI(CRE)-7094472162'
                },
                {
                    id:5,
                    location:'KARAIKUDI',
                    particulars:'SALES',
                    address:`Koviloor Rd, Aruna Nagar, Karaikudi, Tamil Nadu`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'7824869033',
                    insurance_contact_number:'',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'',
                    customer_care:''
                },
                {
                    id:6,
                    location:'KOVILPATTI',
                    particulars:'SALES',
                    address:`5/162A Meenatachi Nagar, A. Salaiputhur,Kovilpatti,Tamil Nadu -628503`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'7708066954',
                    insurance_contact_number:'SURESH - 9487896785',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'',
                    customer_care:'TAMILSELVI (CRE) - 7708066958'
                },
                {
                    id:7,
                    location:'THIRUCHENDUR',
                    particulars:'SALES',
                    address:`59/9, KUMARAPURAM,Trichendur,Tamil Nadu -628215`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'7823947106',
                    insurance_contact_number:'SURESH - 9487896785',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'',
                    customer_care:'T JENNIFER (CRE) - 7094449803'
                },
                {
                    id:8,
                    location:'TONDIARPET',
                    particulars:'SERVICE',
                    address:`NO.666, Thiruvottiyur High Rd, Press Colony, Tondiarpet, Chennai, Tamil Nadu 600081`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'7397393432',
                    insurance_contact_number:'SAM SUNDAR - 78239 47148',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'9790718181',
                    customer_care:'RAYAPPAN - 8754508466'
                },
                {
                    id:9,
                    location:'KOTTURPURAM',
                    particulars:'SERVICE',
                    address:`No. 17, 45, Gandhi Mandapam Rd, Chitra Nagar, Kotturpuram, Chennai, Tamil Nadu 600085`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'7550099934',
                    insurance_contact_number:'SAM SUNDAR - 78239 47148',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'8220389333',
                    customer_care:'JAYAKUMAR - 7825889069'
                },
                {
                    id:10,
                    location:'GUINDY',
                    particulars:'SERVICE',
                    address:`A-1 & 2, 3rd Phase, Thiru Vi Ka Industrial Estate, SIDCO Industrial Estate, Guindy, Chennai, Tamil Nadu 600032`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'9384834348',
                    insurance_contact_number:'SAM SUNDAR - 78239 47148',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'9952022200',
                    customer_care:'ASWIN - 7823947150'
                },
                {
                    id:11,
                    location:'MADURAI',
                    particulars:'SERVICE',
                    address:`No. 249/3, Aruppkottai Main Road, KBL car parking campus, near Vetri Cinemas, Villapuram, Tamil Nadu 625012`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'7824869020/7824869039',
                    insurance_contact_number:'',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'7824869065',
                    customer_care:'7824869015'
                },
                {
                    id:12,
                    location:'TUTICORIN',
                    particulars:'SERVICE',
                    address:`APC Mahalakshmi Women Collage, 4/47 B, Ettayapurm Road, Thoothukudi,Tamil Nadu -628002`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'9487896772',
                    insurance_contact_number:'',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'9787896777',
                    customer_care:'NELSON - 9487896772'
                },
                {
                    id:13,
                    location:'RAMNAD',
                    particulars:'SERVICE',
                    address:`3/135, Madurai NH Road, Opp: MG Mahal Ramanathapuram,Tamil Nadu -623501`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'9789177175',
                    insurance_contact_number:'',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'7094457651',
                    customer_care:'RASHEED - 7094457978'
                },
                {
                    id:14,
                    location:'KOVILPATTI',
                    particulars:'SERVICE',
                    address:`5/162A Meenatachi Nagar, A. Salaiputhur,Kovilpatti,Tamil Nadu -628503`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'7373006369',
                    insurance_contact_number:'',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'7373006369',
                    customer_care:'NELSON - 9487896772'
                },
                {
                    id:15,
                    location:'KARAIKUDI',
                    particulars:'SERVICE',
                    address:`Koviloor Rd, Aruna Nagar, Karaikudi, Tamil Nadu`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'9150028652/9150030576',
                    insurance_contact_number:'',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'9150028652',
                    customer_care:''
                },
                {
                    id:16,
                    location:'THIRUCHENDUR',
                    particulars:'SERVICE',
                    address:`59/9, KUMARAPURAM,Trichendur,Tamil Nadu -628215`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'7373006369',
                    insurance_contact_number:'',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'7373006369',
                    customer_care:'NELSON - 9487896772'
                }
            ],
            originalContactLocations:[
                {
                    id:1,
                    location:'MYLAPORE',
                    particulars:'SALES',
                    address:`Old No. - 94, New No. - 162, Luz Church Road, Mylapore`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'9962666228/9962666118',
                    insurance_contact_number:'SAM SUNDAR - 78239 47148',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'',
                    customer_care:'JAYA SHREE - 7823947154'
                },
                {
                    id:2,
                    location:'MADURAI',
                    particulars:'SALES',
                    address:`No.5, Marriamman Teppakulam West Street, Opp: Thiyagarajar Arts College,Madurai,Tamil Nadu -625009`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'7824869030/7824869053',
                    insurance_contact_number:'VIJAYAN-7824869051',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'',
                    customer_care:'GOWRI-7824869053'
                },
                {
                    id:3,
                    location:'TUTICORIN',
                    particulars:'SALES',
                    address:`APC Mahalakshmi Women Collage, 4/47 B, Ettayapurm Road, Thoothukudi,Tamil Nadu -628002`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'7708066960',
                    insurance_contact_number:'SURESH - 9487896785',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'',
                    customer_care:'INDRA(CRE)-7094464039'
                },
                {
                    id:4,
                    location:'RAMNAD',
                    particulars:'SALES',
                    address:`3/135, Madurai NH Road, Opp: MG Mahal Ramanathapuram,Tamil Nadu -623501`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'7094449808/8903465546',
                    insurance_contact_number:'HADHIL-9677329510',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'',
                    customer_care:'JANSI(CRE)-7094472162'
                },
                {
                    id:5,
                    location:'KARAIKUDI',
                    particulars:'SALES',
                    address:`Koviloor Rd, Aruna Nagar, Karaikudi, Tamil Nadu`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'7824869033',
                    insurance_contact_number:'',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'',
                    customer_care:''
                },
                {
                    id:6,
                    location:'KOVILPATTI',
                    particulars:'SALES',
                    address:`5/162A Meenatachi Nagar, A. Salaiputhur,Kovilpatti,Tamil Nadu -628503`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'7708066954',
                    insurance_contact_number:'SURESH - 9487896785',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'',
                    customer_care:'TAMILSELVI (CRE) - 7708066958'
                },
                {
                    id:7,
                    location:'THIRUCHENDUR',
                    particulars:'SALES',
                    address:`59/9, KUMARAPURAM,Trichendur,Tamil Nadu -628215`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'7823947106',
                    insurance_contact_number:'SURESH - 9487896785',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'',
                    customer_care:'T JENNIFER (CRE) - 7094449803'
                },
                {
                    id:8,
                    location:'TONDIARPET',
                    particulars:'SERVICE',
                    address:`NO.666, Thiruvottiyur High Rd, Press Colony, Tondiarpet, Chennai, Tamil Nadu 600081`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'7397393432',
                    insurance_contact_number:'SAM SUNDAR - 78239 47148',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'9790718181',
                    customer_care:'RAYAPPAN - 8754508466'
                },
                {
                    id:9,
                    location:'KOTTURPURAM',
                    particulars:'SERVICE',
                    address:`No. 17, 45, Gandhi Mandapam Rd, Chitra Nagar, Kotturpuram, Chennai, Tamil Nadu 600085`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'7550099934',
                    insurance_contact_number:'SAM SUNDAR - 78239 47148',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'8220389333',
                    customer_care:'JAYAKUMAR - 7825889069'
                },
                {
                    id:10,
                    location:'GUINDY',
                    particulars:'SERVICE',
                    address:`A-1 & 2, 3rd Phase, Thiru Vi Ka Industrial Estate, SIDCO Industrial Estate, Guindy, Chennai, Tamil Nadu 600032`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'9384834348',
                    insurance_contact_number:'SAM SUNDAR - 78239 47148',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'9952022200',
                    customer_care:'ASWIN - 7823947150'
                },
                {
                    id:11,
                    location:'MADURAI',
                    particulars:'SERVICE',
                    address:`No. 249/3, Aruppkottai Main Road, KBL car parking campus, near Vetri Cinemas, Villapuram, Tamil Nadu 625012`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'7824869020/7824869039',
                    insurance_contact_number:'',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'7824869065',
                    customer_care:'7824869015'
                },
                {
                    id:12,
                    location:'TUTICORIN',
                    particulars:'SERVICE',
                    address:`APC Mahalakshmi Women Collage, 4/47 B, Ettayapurm Road, Thoothukudi,Tamil Nadu -628002`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'9487896772',
                    insurance_contact_number:'',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'9787896777',
                    customer_care:'NELSON - 9487896772'
                },
                {
                    id:13,
                    location:'RAMNAD',
                    particulars:'SERVICE',
                    address:`3/135, Madurai NH Road, Opp: MG Mahal Ramanathapuram,Tamil Nadu -623501`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'9789177175',
                    insurance_contact_number:'',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'7094457651',
                    customer_care:'RASHEED - 7094457978'
                },
                {
                    id:14,
                    location:'KOVILPATTI',
                    particulars:'SERVICE',
                    address:`5/162A Meenatachi Nagar, A. Salaiputhur,Kovilpatti,Tamil Nadu -628503`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'7373006369',
                    insurance_contact_number:'',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'7373006369',
                    customer_care:'NELSON - 9487896772'
                },
                {
                    id:15,
                    location:'KARAIKUDI',
                    particulars:'SERVICE',
                    address:`Koviloor Rd, Aruna Nagar, Karaikudi, Tamil Nadu`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'9150028652/9150030576',
                    insurance_contact_number:'',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'9150028652',
                    customer_care:''
                },
                {
                    id:16,
                    location:'THIRUCHENDUR',
                    particulars:'SERVICE',
                    address:`59/9, KUMARAPURAM,Trichendur,Tamil Nadu -628215`,
                    email:'digitalmarketingchn@peeyesyemhyundai.in',
                    contact_person:'SAFRAN',
                    contact_person_number:'9962666228',
                    service_appointment_number:'7373006369',
                    insurance_contact_number:'',
                    road_side_contact:'18001024645',
                    emergency_breakdown_contact:'7373006369',
                    customer_care:'NELSON - 9487896772'
                }
            ],
        }
    },
    mounted(){
        this.filterLocations();
    },
    methods:{
        filterLocations(){
            var item = this.originalContactLocations.filter(item=>{
                return item.emergency_breakdown_contact !== '';
            })
            this.contactLocations = item;
        },
        locationChange(){
            var loc = this.selectedLocation;
            var item = this.originalContactLocations.filter(item=>{
                return item.location == loc && item.emergency_breakdown_contact !== '';
            })
            this.contactLocations = item;
        }
    }
}
</script>

<style scoped>
@media only screen and (min-width: 1270px) and (max-width: 1366px){
    .select_box{
        width: 30%!important;
    }
    .ers_page{
        margin-top: 50px!important;
    }
    .heading_title{
        font-size: 21px!important;
        margin-bottom: 25px!important;
    }
    .variant_model_label{
        font-size: 14px!important;
    }
    .price_table_sec{
        width: 60%!important;
    }
}
@media only screen and (min-width:300px) and (max-width:600px){
    .select_box{
        width: 87%!important;
    }
    .ers_page{
        margin-top: 50px!important;
    }
    .heading_title{
        font-size: 21px!important;
        margin-bottom: 25px!important;
    }
    .price_table_sec {
        width: 100%!important;
    }
    .price_box{
        width: 90%!important;
    }
}
.price_table_sec thead {
    background: #002c5f;
}
.price_table_sec tbody tr:nth-child(odd) {
    background: #e6f0fa;
}
.price_table_sec td{
    text-align: center;
}
.price_box{
    width: 80%;
    margin: 20px auto;
}
.heading_title{
    text-align: center;
    font-size: 27px;
    font-weight: 600;
}
.variant_model_label{
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
}
.variant_model_icon{
    position: relative;
    float: right;
    bottom: 28px;
    right: 7px;
    z-index: -2;
}
select{
    background: transparent;
}
</style>