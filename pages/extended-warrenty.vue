<template>
  <div class="my-16">
      <div class="heading text-center my-16">
          Extended Warranty
      </div>

      <div class="ew_notice_content">
          <p><b>EW T&C Note:</b></p>
          <ul>
              <li>The above EW Prices are without GST (Tax) which needs to be charged from Customers extra as applicable.</li>
              <li>Slab 1 => Within 90 Days from Date of Delivery/Sale.</li>
              <li>Slab 2 => After 90 Days & before expiry of Basic/Extended Warranty.</li>
              <li>*5th Year EW options Prices will remain same for both the slabs as shown in list.</li>
          </ul>
      </div>

      <div class="rsa_table">
          <table>
                <thead>
                    <tr>
                      <th class="model_head2"  colspan="11" rowspan="1">Comprehensive Ext Wty Scheme Pricelist:Jan'2021</th>
                  </tr>
                  <tr class="second_head">
                      <th>Model</th>
                      <th style="width:10%;">Slab</th>
                      <th>4th Yr / 80K</th>
                      <th>4th Yr / 100K</th>
                      <th>4th Yr / 120K</th>
                      <th>4th & 5th Yr 100K</th>
                      <th>4th & 5th Yr 120K</th>
                      <th>4th & 5th Yr 140K</th>
                      <th>5th Yr 100K</th>
                      <th>5th Yr 120K</th>
                      <th>5th Yr 140K</th>
                  </tr>
                </thead>
                  <tbody></tbody>
          </table>
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
                    <div class="mb-6 ">
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
                    <div class="btn_box">
                        <button type="button" @click="form_tab_index = 1">Next</button>
                    </div>
            </form>
          </div>
          <div class="step step2" :class="form_tab_index == 1 ? 'active' : ''" >
              <div class="title">Vehicle Details</div>
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
                        id="vehicleModel"
                        type="text"
                        placeholder="Select Vehicle Model"
                        v-model="vehicleModel"
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
                        id="fuelType"
                        type="text"
                        placeholder="Select fuel type"
                        v-model="fuelType"
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
                        id="transmission"
                        type="text"
                        placeholder="Select Transmission"
                        v-model="transmission"
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
                        id="kmsDriven"
                        type="text"
                        placeholder="Kms Driven"
                        v-model="kmsDriven"
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
                        id="salesDate"
                        type="text"
                        placeholder="Sales Date"
                        v-model="salesDate"
                        />
                    </div>
                    <div class="mb-6">
                        <div class="checkbox_sec">
                            <label class="inline-flex items-center">
                                <input type="checkbox" class="form-checkbox">
                                <span class="ml-2 cursor-pointer">I have read & understood the disclaimer</span>
                            </label>
                        </div>
                    </div>
                    <div class="btn_box">
                        <button type="button" @click="form_tab_index = 0">Previous</button>
                        <button type="button">Submit</button>
                    </div>
            </form>
          </div>
      </div>
      <div class="my-5 active_sec">
          <div :class="form_tab_index == 0 ? 'active' : ''"></div>
          <div :class="form_tab_index == 1 ? 'active' : ''"></div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            name:'',
            email:'',
            mobile:'',
            form_tab_index:0,
            vehicleModel:'',
            fuelType:'',
            transmission:'',
            kmsDriven:'',
            salesDate:'',
            ewTableList:[
                {
                    id:1,
                    name:'Eon',
                    slab1:'Slab-1',
                    s_1_1:'2830',
                    s_1_2:'3115',
                    s_1_3:'3401',
                    s_1_4:'5023',
                    s_1_5:'5529',
                    s_1_6:'6036',
                    s_1_7:'3868',
                    s_1_8:'4257',
                    s_1_9:'4647',
                    slab2:'Slab-2',
                    s_2_1:'3113',
                    s_2_2:'3427',
                    s_2_3:'3741',
                    s_2_4:'5526',
                    s_2_5:'6083',
                    s_2_6:'6640',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:2,
                    name:'All New Santro/i10 (P)  (M/T)',
                    slab1:'Slab-1',
                    s_1_1:'3961',
                    s_1_2:'4365',
                    s_1_3:'4753',
                    s_1_4:'6725',
                    s_1_5:'7388',
                    s_1_6:'8066',
                    s_1_7:'4995',
                    s_1_8:'5496',
                    s_1_9:'5998',
                    slab2:'Slab-2',
                    s_2_1:'4357',
                    s_2_2:'4801',
                    s_2_3:'5229',
                    s_2_4:'7397',
                    s_2_5:'8127',
                    s_2_6:'8874',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:3,
                    name:'All New Santro/i10 (P) -CNG',
                    slab1:'Slab-1',
                    s_1_1:'4357',
                    s_1_2:'4801',
                    s_1_3:'5229',
                    s_1_4:'7397',
                    s_1_5:'8127',
                    s_1_6:'8874',
                    s_1_7:'5495',
                    s_1_8:'6046',
                    s_1_9:'6597',
                    slab2:'Slab-2',
                    s_2_1:'4792',
                    s_2_2:'5282',
                    s_2_3:'5751',
                    s_2_4:'8137',
                    s_2_5:'8940',
                    s_2_6:'9761',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:4,
                    name:'All New Santro/i10 (P)  (A/T)',
                    slab1:'Slab-1',
                    s_1_1:'4357',
                    s_1_2:'4801',
                    s_1_3:'5229',
                    s_1_4:'7397',
                    s_1_5:'8127',
                    s_1_6:'8874',
                    s_1_7:'5495',
                    s_1_8:'6046',
                    s_1_9:'6597',
                    slab2:'Slab-2',
                    s_2_1:'4792',
                    s_2_2:'5282',
                    s_2_3:'5751',
                    s_2_4:'8137',
                    s_2_5:'8940',
                    s_2_6:'9761',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:5,
                    name:'NIOS/Aura/Grand i10/Xcent (P)  (M/T)',
                    slab1:'Slab-1',
                    s_1_1:'5664',
                    s_1_2:'6237',
                    s_1_3:'6812',
                    s_1_4:'9471',
                    s_1_5:'10422',
                    s_1_6:'11373',
                    s_1_7:'6963',
                    s_1_8:'7658',
                    s_1_9:'8352',
                    slab2:'Slab-2',
                    s_2_1:'6230',
                    s_2_2:'6862',
                    s_2_3:'7493',
                    s_2_4:'10417',
                    s_2_5:'11464',
                    s_2_6:'12510',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:6,
                    name:'NIOS/Aura/Grand i10/Xcent (P)  (A/T)',
                    slab1:'Slab-1',
                    s_1_1:'6230',
                    s_1_2:'6862',
                    s_1_3:'7493',
                    s_1_4:'10417',
                    s_1_5:'11464',
                    s_1_6:'12510',
                    s_1_7:'7659',
                    s_1_8:'8424',
                    s_1_9:'9187',
                    slab2:'Slab-2',
                    s_2_1:'6853',
                    s_2_2:'7548',
                    s_2_3:'8242',
                    s_2_4:'11459',
                    s_2_5:'12611',
                    s_2_6:'13761',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:7,
                    name:'NIOS/Aura/Grand i10/Xcent (P)  CNG',
                    slab1:'Slab-1',
                    s_1_1:'6230',
                    s_1_2:'6862',
                    s_1_3:'7493',
                    s_1_4:'10417',
                    s_1_5:'11464',
                    s_1_6:'12510',
                    s_1_7:'7659',
                    s_1_8:'8424',
                    s_1_9:'9187',
                    slab2:'Slab-2',
                    s_2_1:'6853',
                    s_2_2:'7548',
                    s_2_3:'8242',
                    s_2_4:'11459',
                    s_2_5:'12611',
                    s_2_6:'13761',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:8,
                    name:'NIOS/Aura/Grand i10/Xcent (D)  (M/T)',
                    slab1:'Slab-1',
                    s_1_1:'7067',
                    s_1_2:'7784',
                    s_1_3:'8484',
                    s_1_4:'12789',
                    s_1_5:'14062',
                    s_1_6:'15335',
                    s_1_7:'9972',
                    s_1_8:'10976',
                    s_1_9:'11963',
                    slab2:'Slab-2',
                    s_2_1:'7774',
                    s_2_2:'8562',
                    s_2_3:'9333',
                    s_2_4:'14067',
                    s_2_5:'15467',
                    s_2_6:'16869',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:9,
                    name:'NIOS/Aura/Grand i10/Xcent (D)  (A/T)',
                    slab1:'Slab-1',
                    s_1_1:'7774',
                    s_1_2:'8562',
                    s_1_3:'9333',
                    s_1_4:'14067',
                    s_1_5:'15467',
                    s_1_6:'16869',
                    s_1_7:'10969',
                    s_1_8:'12075',
                    s_1_9:'13159',
                    slab2:'Slab-2',
                    s_2_1:'8550',
                    s_2_2:'9419',
                    s_2_3:'10265',
                    s_2_4:'15473',
                    s_2_5:'17014',
                    s_2_6:'18556',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:10,
                    name:'Active / Elite i20/All New i 20 (P)(M/T)',
                    slab1:'Slab-1',
                    s_1_1:'6207',
                    s_1_2:'6831',
                    s_1_3:'7455',
                    s_1_4:'10578',
                    s_1_5:'11635',
                    s_1_6:'12693',
                    s_1_7:'7888',
                    s_1_8:'8679',
                    s_1_9:'9468',
                    slab2:'Slab-2',
                    s_2_1:'6827',
                    s_2_2:'7514',
                    s_2_3:'8201',
                    s_2_4:'11635',
                    s_2_5:'12789',
                    s_2_6:'13962',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:11,
                    name:'Active / Elite i20/All New i 20 (P)(A/T)',
                    slab1:'Slab-1',
                    s_1_1:'6827',
                    s_1_2:'7514',
                    s_1_3:'8201',
                    s_1_4:'11635',
                    s_1_5:'12798',
                    s_1_6:'13962',
                    s_1_7:'8678',
                    s_1_8:'9546',
                    s_1_9:'10416',
                    slab2:'Slab-2',
                    s_2_1:'7510',
                    s_2_2:'8265',
                    s_2_3:'9021',
                    s_2_4:'12798',
                    s_2_5:'14079',
                    s_2_6:'15359',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:12,
                    name:'Active / Elite i 20 / All New i 20  (D)(M/T)',
                    slab1:'Slab-1',
                    s_1_1:'8102',
                    s_1_2:'8921',
                    s_1_3:'9727',
                    s_1_4:'12687',
                    s_1_5:'13956',
                    s_1_6:'15224',
                    s_1_7:'9541',
                    s_1_8:'10494',
                    s_1_9:'11538',
                    slab2:'Slab-2',
                    s_2_1:'8911',
                    s_2_2:'9813',
                    s_2_3:'10700',
                    s_2_4:'13956',
                    s_2_5:'15352',
                    s_2_6:'16748',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:13,
                    name:'Venue (P)  (M/T)',
                    slab1:'Slab-1',
                    s_1_1:'7708',
                    s_1_2:'8475',
                    s_1_3:'9242',
                    s_1_4:'12792',
                    s_1_5:'14070',
                    s_1_6:'15483',
                    s_1_7:'9793',
                    s_1_8:'10775',
                    s_1_9:'11758',
                    slab2:'Slab-2',
                    s_2_1:'8478',
                    s_2_2:'9322',
                    s_2_3:'10166',
                    s_2_4:'14073',
                    s_2_5:'15478',
                    s_2_6:'17032',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:14,
                    name:'Venue (P)  (A/T)',
                    slab1:'Slab-1',
                    s_1_1:'8478',
                    s_1_2:'9322',
                    s_1_3:'10166',
                    s_1_4:'14073',
                    s_1_5:'15478',
                    s_1_6:'17032',
                    s_1_7:'10772',
                    s_1_8:'11853',
                    s_1_9:'12933',
                    slab2:'Slab-2',
                    s_2_1:'9327',
                    s_2_2:'10254',
                    s_2_3:'11182',
                    s_2_4:'15479',
                    s_2_5:'17026',
                    s_2_6:'18735',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:15,
                    name:'Venue (D)  (M/T)',
                    slab1:'Slab-1',
                    s_1_1:'8513',
                    s_1_2:'9355',
                    s_1_3:'10198',
                    s_1_4:'13753',
                    s_1_5:'15129',
                    s_1_6:'16640',
                    s_1_7:'10284',
                    s_1_8:'11313',
                    s_1_9:'12440',
                    slab2:'Slab-2',
                    s_2_1:'9363',
                    s_2_2:'10290',
                    s_2_3:'11217',
                    s_2_4:'15129',
                    s_2_5:'16642',
                    s_2_6:'18304',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:16,
                    name:'New / Next Gen. /Spirited Verna (P)(M/T)',
                    slab1:'Slab-1',
                    s_1_1:'7368',
                    s_1_2:'8096',
                    s_1_3:'8838',
                    s_1_4:'13222',
                    s_1_5:'14549',
                    s_1_6:'15877',
                    s_1_7:'10837',
                    s_1_8:'11907',
                    s_1_9:'12993',
                    slab2:'Slab-2',
                    s_2_1:'8104',
                    s_2_2:'8905',
                    s_2_3:'9722',
                    s_2_4:'14544',
                    s_2_5:'16004',
                    s_2_6:'17465',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:17,
                    name:'New / Next Gen. /Spirited Verna (P)(A/T)',
                    slab1:'Slab-1',
                    s_1_1:'8104',
                    s_1_2:'8905',
                    s_1_3:'9722',
                    s_1_4:'14544',
                    s_1_5:'16004',
                    s_1_6:'17465',
                    s_1_7:'11920',
                    s_1_8:'13099',
                    s_1_9:'14292',
                    slab2:'Slab-2',
                    s_2_1:'8915',
                    s_2_2:'9795',
                    s_2_3:'10694',
                    s_2_4:'15998',
                    s_2_5:'17604',
                    s_2_6:'19212',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:18,
                    name:'New / Next Gen./ Spirited Verna (D)(M/T)',
                    slab1:'Slab-1',
                    s_1_1:'9703',
                    s_1_2:'10680',
                    s_1_3:'11643',
                    s_1_4:'17315',
                    s_1_5:'19052',
                    s_1_6:'20776',
                    s_1_7:'13380',
                    s_1_8:'14724',
                    s_1_9:'16054',
                    slab2:'Slab-2',
                    s_2_1:'10673',
                    s_2_2:'11748',
                    s_2_3:'12808',
                    s_2_4:'19046',
                    s_2_5:'20958',
                    s_2_6:'22853',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:19,
                    name:'New / Next Gen./ Spirited Verna (D)(A/T)',
                    slab1:'Slab-1',
                    s_1_1:'10673',
                    s_1_2:'11748',
                    s_1_3:'12808',
                    s_1_4:'19046',
                    s_1_5:'20958',
                    s_1_6:'22853',
                    s_1_7:'14718',
                    s_1_8:'16196',
                    s_1_9:'17659',
                    slab2:'Slab-2',
                    s_2_1:'11740',
                    s_2_2:'12922',
                    s_2_3:'14088',
                    s_2_4:'20952',
                    s_2_5:'23054',
                    s_2_6:'25139',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:20,
                    name:'All New Creta/Creta (P)(M/T)',
                    slab1:'Slab-1',
                    s_1_1:'9801',
                    s_1_2:'10786',
                    s_1_3:'11758',
                    s_1_4:'16275',
                    s_1_5:'17904',
                    s_1_6:'19697',
                    s_1_7:'12456',
                    s_1_8:'13702',
                    s_1_9:'14947',
                    slab2:'Slab-2',
                    s_2_1:'10780',
                    s_2_2:'11865',
                    s_2_3:'12934',
                    s_2_4:'17903',
                    s_2_5:'19694',
                    s_2_6:'21667',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:21,
                    name:'All New Creta/Creta (P)(A/T)',
                    slab1:'Slab-1',
                    s_1_1:'10780',
                    s_1_2:'11865',
                    s_1_3:'12934',
                    s_1_4:'17903',
                    s_1_5:'19694',
                    s_1_6:'21667',
                    s_1_7:'13702',
                    s_1_8:'15072',
                    s_1_9:'16442',
                    slab2:'Slab-2',
                    s_2_1:'11859',
                    s_2_2:'13051',
                    s_2_3:'14227',
                    s_2_4:'19693',
                    s_2_5:'21664',
                    s_2_6:'23834',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:22,
                    name:'All New Creta/Creta (D)(M/T)',
                    slab1:'Slab-1',
                    s_1_1:'13660',
                    s_1_2:'15024',
                    s_1_3:'16375',
                    s_1_4:'22070',
                    s_1_5:'24283',
                    s_1_6:'26706',
                    s_1_7:'16500',
                    s_1_8:'18157',
                    s_1_9:'19967',
                    slab2:'Slab-2',
                    s_2_1:'15025',
                    s_2_2:'16526',
                    s_2_3:'18012',
                    s_2_4:'24276',
                    s_2_5:'26712',
                    s_2_6:'29377',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:23,
                    name:'All New Creta/Creta (D)(A/T)',
                    slab1:'Slab-1',
                    s_1_1:'15025',
                    s_1_2:'16526',
                    s_1_3:'18012',
                    s_1_4:'24276',
                    s_1_5:'26712',
                    s_1_6:'29377',
                    s_1_7:'18150',
                    s_1_8:'19973',
                    s_1_9:'21963',
                    slab2:'Slab-2',
                    s_2_1:'16528',
                    s_2_2:'18179',
                    s_2_3:'19813',
                    s_2_4:'26705',
                    s_2_5:'29383',
                    s_2_6:'32314',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:24,
                    name:'All New Elantra (P)(M/T)',
                    slab1:'Slab-1',
                    s_1_1:'8826',
                    s_1_2:'9700',
                    s_1_3:'10585',
                    s_1_4:'16355',
                    s_1_5:'17983',
                    s_1_6:'19623',
                    s_1_7:'12980',
                    s_1_8:'14278',
                    s_1_9:'15576',
                    slab2:'Slab-2',
                    s_2_1:'9711',
                    s_2_2:'10667',
                    s_2_3:'11647',
                    s_2_4:'17995',
                    s_2_5:'19777',
                    s_2_6:'21582',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:25,
                    name:'All New Elantra (P)(A/T)',
                    slab1:'Slab-1',
                    s_1_1:'9723',
                    s_1_2:'10679',
                    s_1_3:'11647',
                    s_1_4:'17995',
                    s_1_5:'19789',
                    s_1_6:'21594',
                    s_1_7:'14278',
                    s_1_8:'15706',
                    s_1_9:'17134',
                    slab2:'Slab-2',
                    s_2_1:'10679',
                    s_2_2:'11753',
                    s_2_3:'12803',
                    s_2_4:'19789',
                    s_2_5:'21759',
                    s_2_6:'23730',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:26,
                    name:'All New Elantra (D)(M/T)',
                    slab1:'Slab-1',
                    s_1_1:'11635',
                    s_1_2:'12614',
                    s_1_3:'13759',
                    s_1_4:'21252',
                    s_1_5:'23376',
                    s_1_6:'25512',
                    s_1_7:'16874',
                    s_1_8:'18561',
                    s_1_9:'20249',
                    slab2:'Slab-2',
                    s_2_1:'12779',
                    s_2_2:'13877',
                    s_2_3:'15128',
                    s_2_4:'23376',
                    s_2_5:'25712',
                    s_2_6:'28060',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:27,
                    name:'All New Elantra (D)(A/T)',
                    slab1:'Slab-1',
                    s_1_1:'12791',
                    s_1_2:'13889',
                    s_1_3:'15139',
                    s_1_4:'23388',
                    s_1_5:'25724',
                    s_1_6:'28072',
                    s_1_7:'18561',
                    s_1_8:'20418',
                    s_1_9:'22274',
                    slab2:'Slab-2',
                    s_2_1:'14066',
                    s_2_2:'16437',
                    s_2_3:'16650',
                    s_2_4:'25712',
                    s_2_5:'28285',
                    s_2_6:'30869',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:28,
                    name:'Tucson (P)(M/T)',
                    slab1:'Slab-1',
                    s_1_1:'10337',
                    s_1_2:'11375',
                    s_1_3:'12414',
                    s_1_4:'19163',
                    s_1_5:'21087',
                    s_1_6:'22998',
                    s_1_7:'15222',
                    s_1_8:'16744',
                    s_1_9:'18255',
                    slab2:'Slab-2',
                    s_2_1:'11375',
                    s_2_2:'12508',
                    s_2_3:'13653',
                    s_2_4:'21075',
                    s_2_5:'23199',
                    s_2_6:'25299',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:29,
                    name:'Tucson (P)(A/T)',
                    slab1:'Slab-1',
                    s_1_1:'11387',
                    s_1_2:'12520',
                    s_1_3:'13664',
                    s_1_4:'21087',
                    s_1_5:'23211',
                    s_1_6:'25311',
                    s_1_7:'16744',
                    s_1_8:'18419',
                    s_1_9:'20080',
                    slab2:'Slab-2',
                    s_2_1:'12508',
                    s_2_2:'13759',
                    s_2_3:'15021',
                    s_2_4:'23187',
                    s_2_5:'25512',
                    s_2_6:'27824',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:30,
                    name:'Tucson (D)(M/T)',
                    slab1:'Slab-1',
                    s_1_1:'13440',
                    s_1_2:'14785',
                    s_1_3:'16131',
                    s_1_4:'24922',
                    s_1_5:'27411',
                    s_1_6:'29901',
                    s_1_7:'19777',
                    s_1_8:'21759',
                    s_1_9:'23742',
                    slab2:'Slab-2',
                    s_2_1:'14785',
                    s_2_2:'16260',
                    s_2_3:'17747',
                    s_2_4:'27411',
                    s_2_5:'30149',
                    s_2_6:'32887',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:31,
                    name:'Tucson (D)(A/T)',
                    slab1:'Slab-1',
                    s_1_1:'14797',
                    s_1_2:'16272',
                    s_1_3:'17759',
                    s_1_4:'27423',
                    s_1_5:'30161',
                    s_1_6:'32898',
                    s_1_7:'21759',
                    s_1_8:'23930',
                    s_1_9:'26113',
                    slab2:'Slab-2',
                    s_2_1:'16260',
                    s_2_2:'17889',
                    s_2_3:'19517',
                    s_2_4:'30149',
                    s_2_5:'33170',
                    s_2_6:'36179',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
                {
                    id:32,
                    name:'KONA',
                    slab1:'Slab-1',
                    s_1_1:'13440',
                    s_1_2:'14785',
                    s_1_3:'16131',
                    s_1_4:'24922',
                    s_1_5:'27411',
                    s_1_6:'29901',
                    s_1_7:'19777',
                    s_1_8:'21759',
                    s_1_9:'23742',
                    slab2:'Slab-2',
                    s_2_1:'14784',
                    s_2_2:'16264',
                    s_2_3:'17744',
                    s_2_4:'27414',
                    s_2_5:'30153',
                    s_2_6:'32891',
                    s_2_7:'-',
                    s_2_8:'-',
                    s_2_9:'-'
                },
            ]
        }
    },
    mounted(){
        this.tableList();
    },
    methods:{
        tableList(){
          var item = this.ewTableList.map((item)=>{
                return `
                  <tr class="ew_prices">
                    <td style="text-align:center;padding:10px 20px;border:1px solid lightgray;font-weight:500;" rowspan="2">${item.name}</td>
                    <td style="text-align:center;padding:10px 20px;border:1px solid lightgray;">${item.slab1}</td>
                    <td style="text-align:center;padding:10px 20px;border:1px solid lightgray;">${item.s_1_1}</td>
                    <td style="text-align:center;padding:10px 20px;border:1px solid lightgray;">${item.s_1_2}</td>
                    <td style="text-align:center;padding:10px 20px;border:1px solid lightgray;">${item.s_1_3}</td>
                    <td style="text-align:center;padding:10px 20px;border:1px solid lightgray;">${item.s_1_4}</td>
                    <td style="text-align:center;padding:10px 20px;border:1px solid lightgray;">${item.s_1_5}</td>
                    <td style="text-align:center;padding:10px 20px;border:1px solid lightgray;">${item.s_1_6}</td>
                    <td style="text-align:center;padding:10px 20px;border:1px solid lightgray;">${item.s_1_7}</td>
                    <td style="text-align:center;padding:10px 20px;border:1px solid lightgray;">${item.s_1_8}</td>
                    <td style="text-align:center;padding:10px 20px;border:1px solid lightgray;">${item.s_1_9}</td>
                  </tr>
                  <tr class="ew_prices2">
                    <td style="text-align:center;padding:10px 20px;border:1px solid lightgray;">${item.slab2}</td>
                    <td style="text-align:center;padding:10px 20px;border:1px solid lightgray;">${item.s_2_1}</td>
                    <td style="text-align:center;padding:10px 20px;border:1px solid lightgray;">${item.s_2_2}</td>
                    <td style="text-align:center;padding:10px 20px;border:1px solid lightgray;">${item.s_2_3}</td>
                    <td style="text-align:center;padding:10px 20px;border:1px solid lightgray;">${item.s_2_4}</td>
                    <td style="text-align:center;padding:10px 20px;border:1px solid lightgray;">${item.s_2_5}</td>
                    <td style="text-align:center;padding:10px 20px;border:1px solid lightgray;">${item.s_2_6}</td>
                    <td style="text-align:center;padding:10px 20px;border:1px solid lightgray;">${item.s_2_7}</td>
                    <td style="text-align:center;padding:10px 20px;border:1px solid lightgray;">${item.s_2_8}</td>
                    <td style="text-align:center;padding:10px 20px;border:1px solid lightgray;">${item.s_2_9}</td>
                  </tr>
                `
            })
            item = item.join('');
            document.querySelector('tbody').innerHTML = item;
        }
    }
}
</script>

<style scoped>
@media only screen and (min-width: 760px) and (max-width: 960px){
    .rsa_table{
        width: 95%!important;
        overflow: hidden;
        overflow-x: scroll;
    }
    .ew_notice_content{
        width: 55%!important;
    }
}
@media only screen and (min-width: 961px) and (max-width: 1030px){
    .rsa_table{
        width: 95%!important;
        overflow: hidden;
        overflow-x: scroll;
    }
    .ew_notice_content{
        width: 50%!important;
    }
}
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
  .rsa_table{
        width: 95%!important;
        overflow: hidden;
        overflow-x: scroll;
  }
  .ew_notice_content{
        width: 90%!important;
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
    .rsa_table{
        width: 90%!important;
    }
    .ew_notice_content{
        width: 50%!important;
    }
}
.rsa_table{
    width: 70%;
    height: 600px;
    overflow: auto;
    margin: 40px auto 90px auto;
}
.rsa_table::-webkit-scrollbar{
    display: none;
}
.rsa_table thead{
    position: sticky;
    top: 0;
    z-index: 1;
}
.ew_notice_content{
    width: 35%;
    margin: 50px auto;
}
.ew_notice_content p{
    margin: 20px 0;
    color: black;
}
.ew_notice_content ul{
    margin: 30px 0;
}
.ew_notice_content ul li{
    list-style-type: disc;
    margin-left: 20px;
    margin-bottom: 12px;
}
.rsa_table table{
    box-shadow: 0 2px 10px 4px rgb(0 0 0/10%);
    border-collapse: collapse;
}
.rsa_table .second_head th{
    color: white;
    padding: 10px;
    text-align: center;
    background: #e6f0fa;
    color: black;
    border: 1px solid lightgray;
    font-weight: 600;
}
.rsa_table table .model_head2{
    background: #002c5f;
    color: white;
    padding: 10px;
    text-align: center;
}
.heading{
    font-weight: 600;
    font-size: 25px;
}
.explain{
    font-size: 16px;
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
    margin: 50px auto;
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