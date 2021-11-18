<template>
  <div class="my-16">
      <div class="heading text-center my-5">
         Contact Us
      </div>
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
      <div class="my-5">
          <div class="tab_sec">
              <div class="tab_item"  v-for="(cat,index) in tabCategory" :class="index == tabIndex ? 'active' : ''" :key="index" @click="tabIndex = index,filterLocations(cat)">
                {{cat}}
              </div>
          </div>
      </div>
      <div class="contact_locations_sec">
          <div class="item_card" v-for="loc in contactLocations" :key="loc.id">
              <div class="left_side">
                  <div><b>Location:</b>{{loc.location}}</div>
                  <div><b>Particulars:</b>{{loc.particulars}}</div>
                  <div><b>Address:</b>{{loc.address}}</div>
                  <div class="email"><b>Email:</b>{{loc.email}}</div>
                  <div><b>Contact Person:</b>{{loc.contact_person}}</div>
                  <div><b>Contact Person Number:</b>{{loc.contact_person_number}}</div>
              </div>
              <div class="right_side">
                  <div><b>Service Appointment Number:</b>{{loc.service_appointment_number}}</div>
                  <div v-if="loc.insurance_contact_number !== ''"><b>Insurance Contact Number:</b>{{loc.insurance_contact_number}}</div>
                  <div ><b>Road Side Contact:</b>{{loc.road_side_contact}}</div>
                  <div v-if="loc.emergency_breakdown_contact !== ''"><b>Emergency Breakdown Contact:</b>{{loc.emergency_breakdown_contact}}</div>
                  <div v-if="loc.customer_care !== ''"><b>Customer Care:</b>{{loc.customer_care}}</div>
              </div>
          </div>
          <div class="my-3 text-center text-lg font-semibold" v-if="contactLocations.length == 0">Search Not Found</div>
      </div>
      <div class="explain  text-center mt-4 mb-5">
          We care about you and your vehicle. Our goal is to resolve any problems if you have, quickly and completely. Please fill the below form and choose your reason for contacting us. We are always eager to assist you – Advaith Hyundai caring for you always
      </div>
      <div class="form_sec">
          <div class="image_sec">
              <img :src="require('@/assets/img/cars/form_poster2.jpg')" alt="img" style="width:100%;" />
          </div>
          <div class="step step1" :class="form_tab_index == 0 ? 'active' : ''" >
               <div class="title">Personal Details</div>
            <form >
                <div class="mb-4 mt-4">
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
                        id="name"
                        type="text"
                        placeholder="Full Name"
                        v-model="name"
                        />
                    </div>
                    <div class="mb-4 ">
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
                        id="email"
                        type="email"
                        placeholder="Email Id"
                        v-model="email"
                        />
                    </div>
                    <div class="mb-4 ">
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
                        id="mobile"
                        type="text"
                        placeholder="Mobile Number"
                        v-model="mobile"
                        />
                    </div>
                    <div class="mb-4 ">
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
                        id="message"
                        type="text"
                        placeholder="Message"
                        v-model="message"
                        />
                    </div>
                    <!-- <div class="mb-4 ">
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
                                id="showroom"
                                v-model="showroom"
                            >
                            <option class="text-xl " value="">Our Showroom</option>
                            <option class="text-xl" :value="place" v-for="place in ShowroomList"
                                :key="place" >{{place}}</option>
                            </select>
                    </div>
                    <div class="mb-6 ">
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
                                id="detailRequire"
                                v-model="detailRequire"
                            >
                            <option class="text-xl " value="">Detail Required for</option>
                            <option class="text-xl" :value="item" v-for="item in DetailsList"
                                :key="item" >{{item}}</option>
                            </select>
                    </div> -->
                    <!-- <div class="mb-6">
                        <div class="checkbox_sec">
                            <label class="inline-flex items-center">
                                <input type="checkbox" v-model="agreement" class="form-checkbox">
                                <span class="ml-2 cursor-pointer">I have read & understood the disclaimer</span>
                            </label>
                        </div>
                    </div> -->
                    <div class="btn_box" >
                        <button type="button" @click="AddContactData">Submit</button>
                    </div>
            </form>
          </div>
      </div>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
    data(){
        return{
            form_tab_index:0,
            name:'',
            email:'',
            mobile:'',
            message:'',
            agreement:false,
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
            tabCategory:[],
            tabIndex:0,
            ShowroomList:[
                'Mylapore',
                'Tondaripet',
                'Kotturpuram',
                'Guindy',
                'Madurai',
                'Tuticorin',
                'Ramnad',
                'Karaikudi',
                'Kovilpatti',
                'Thiruchendur'
            ],
            DetailsList:[
                'Test Drive',
                'Sales Quote',
                'Service',
                'Accessories',
                'Extended Warrenty',
                'Insurance'
            ],
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
            ]
        }
    },
    mounted(){
        this.filterTabCategories()
    },
    methods:{
        AddContactData(){
            var data_value = {
                message:this.message,
            }
            data_value = JSON.stringify(data_value);
            axios.post(process.env.baseUrl + 'api/car_form/store',{
                full_name:this.name,
                email_id:this.email,
                mobile_no:this.mobile,
                form_type:'contact',
                data_form_value:data_value
            }).then((res)=>{
                if(res){
                    this.name = '';
                    this.email = '';
                    this.mobile = '';
                    this.message = '';
                    this.agreement = false;
                }
                console.log(res)
            }).catch((err)=>{
                console.log(err);
            })
        },
        filterTabCategories(){
            var item = this.contactLocations.map((item)=> {return item.particulars})
            var category = ['ALL',...new Set(item)]
            this.tabCategory = category;
        },
        filterLocations(name){
            var item = this.originalContactLocations.filter((item)=>{
                return item.particulars == name
            })
            if(this.selectedLocation !== ''){
                item = this.originalContactLocations.filter((item)=>{
                        return item.particulars == name && item.location == this.selectedLocation
                })
            }
            if(name == 'ALL'){
                item = this.originalContactLocations;
            }
            if(name == 'ALL' && this.selectedLocation !== ''){
                item = this.originalContactLocations.filter((item)=>{
                        return  item.location == this.selectedLocation
                })
            }
            this.contactLocations = item;
        },
        locationChange(){
            var ind = this.tabIndex;
            var partiCular = this.tabCategory[ind];
           var item = this.originalContactLocations.filter((item=>{
                return item.location == this.selectedLocation && item.particulars == partiCular
            }))
            if(ind == 0){
                item = this.originalContactLocations.filter((item=>{
                    return item.location == this.selectedLocation 
                }))
            }
            if(this.selectedLocation == ''){
                item = this.originalContactLocations.filter((item=>{
                    return item.particulars == partiCular
                }))
            }
            if(ind == 0 && this.selectedLocation == ''){
                item = this.originalContactLocations;
            }
            this.contactLocations = item;
        }
    }
}
</script>

<style scoped>
@media only screen and (min-width:300px) and (max-width:600px){
  .form_sec .step{
     width: 100%!important;
   }
  .form_sec{
    width: 100%!important;
  }
  .image_sec{
      display: none;
  }
  .explain{
      width: 90%!important;
  }
  .contact_locations_sec{
      width: 100%!important;
  }
  .contact_locations_sec .item_card{
      width: 94%!important;
      padding: 13px!important;
      flex-wrap: wrap;
  }
  .contact_locations_sec .item_card .left_side, .contact_locations_sec .item_card .right_side{
        width: 100%!important;
        padding: 13px!important;
    }
    .contact_locations_sec .item_card .left_side{
        border: none!important;
    }
    .contact_locations_sec .email{
        overflow-wrap: break-word;
        word-wrap: break-word;
    }
    .select_box{
        width: 87%!important;
    }
}
@media only screen and (min-width: 1270px) and (max-width: 1366px){
    .form_sec{
        width: 80%!important;
    }
    .image_sec img{
       object-fit: cover!important;
       object-position: inherit!important;
    }
    .contact_locations_sec .item_card{
        width: 95%!important;
    }
    .select_box{
        width: 30%!important;
    }
}
.contact_locations_sec{
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 40px auto;
    justify-content: center;
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
.tab_sec{
    display: flex;
    justify-content: center;
    align-items: center;
}
.tab_sec .tab_item{
    font-weight: 600;
    cursor: pointer;
    font-size: 16px;
    margin: 0 15px;
    border-bottom: 2px solid transparent;
}
.tab_sec .tab_item.active{
    border-bottom: 2px solid #002c5f;
}
.contact_locations_sec .item_card{
    width: 70%;
    box-shadow: 0 2px 10px 4px rgb(0 0 0/10%);
    padding: 30px 20px;
    margin: 15px;
    display: flex;
    border-radius: 5px;
}
.contact_locations_sec .item_card .left_side{
    border-right: 1px solid lightgray;
}
.contact_locations_sec .item_card .left_side, .contact_locations_sec .item_card .right_side{
    width: 48%;
    padding: 20px;
}
.contact_locations_sec .left_side div, .contact_locations_sec .right_side div{
    margin: 10px 0;
}
.contact_locations_sec .item_card b{
    margin-right: 5px;
}
.heading{
    font-weight: 600;
    font-size: 25px;
}
.explain{
    font-size: 16px;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
}
.btn_box button{
    padding: 4px 20px;
    background: #002c5f;
    color: white;
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 4px;
}
.form_sec{
    width: 60%;
    margin: 30px auto;
    display: flex;
}
.form_sec .image_sec{
    width: 49%;
    height: 370px;
    object-fit: cover;
    object-position: left;
}
.image_sec img{
    height: 100%;
}
.form_sec .step{
    width: 49%;
    padding: 0 40px;
    display: none;
}
.form_sec .step.active{
    display: block;
}
.form_sec .step .title{
    font-weight: 600;
    font-size: 19px;
}
.active_sec{
    display: flex;
    justify-content: center;
    align-items: center;
}
.active_sec div{
    height: 10px;
    width: 10px;
    background: lightgray;
    margin: 10px;
}
.active_sec div.active{
    background: #002c5f;
    height: 11px;
    width: 11px;
}
.step2 .btn_box{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.checkbox_sec span{
    font-size: 15px;
}
.checkbox_sec{
    padding-left:4px;
}
</style>