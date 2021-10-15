<template>
  <div>
      <div class="fixed_form_sec">
        <div class="text-uppercase font-semibold text-white form1 form_div" @click="formModal = true"><img class="mx-2" :src="require('@/assets/img/vehicle.png')" alt="img"  /><div class="sub_form1 sub_form_div">Book a car</div></div>
        <div class="text-uppercase font-semibold text-white form2 form_div" @click="formModal3 = true"><img class="mx-2" :src="require('@/assets/img/book_drive.png')" alt="img" style="width:32px;"  /> <div class="sub_form2 sub_form_div">Book a test drive</div></div>
        <div class="text-uppercase font-semibold text-white form3 form_div" @click="formModal2 = true"><font-awesome-icon icon="tools"  size="2x" class="text-white spanner_icon mx-2" /> <div class="sub_form3 sub_form_div">Book a service</div></div>
        <div class="text-uppercase font-semibold text-white form4 form_div" @click="formModal4 = true"><img class="mx-2" :src="require('@/assets/img/book_service.png')" alt="img" style="width:32px;"  /> <div class="sub_form3 sub_form_div">Request a callback</div></div>
      </div>

      <!-- Whatsapp Button -->
      <div class="whtsapp_btn">
        <img class="mob_whtsap_img" :src="require('@/assets/img/whatsapp_mob.png')" alt="img" />
    </div>

    <!-- Back To Top Button -->
    <div class="back_to_top" @click="backToTop">
        <img :src="require('@/assets/img/back_to_top_car.png')" alt="img" style="width:100%;height:auto;"/>
    </div>

    <section class="form_modal_box" v-if="formModal == true">
        <div class="w-4/12 card_body bg-white card mx-auto">
           <form class="pb-12 px-8">
               <div class="heading flex items-center justify-between pt-6 pb-2 font-semibold text-lg">Book a Car<font-awesome-icon icon="times"  size="1x" class="text-red-600 cursor-pointer" @click="formModal = false" /></div>
               <hr class="mb-8" style="height:1px;background:gray;opacity:0.3;" />
               <div class="mb-4">
                    <input
                    class="
                        shadow
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
                    type="text"
                    placeholder="Your Name"
                    />
                </div>
                <div class="mb-4">
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
                    "
                    id="cars"
                  >
                  <option class="text-xl " value="">Choose Model</option>
                  <option class="text-xl" :value="model.id" v-for="model in originalcars"
                    :key="model.id" >{{model.name}}</option>
                  </select>
                </div>
               <div class="mb-4">
                    <input
                    class="
                        shadow
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
                    type="text"
                    placeholder="Your Email"
                    />
                </div>
               <div class="mb-8">
                    <input
                    class="
                        shadow
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
                    type="number"
                    placeholder="Your Phone"
                    />
                </div>
               <div class="btn_grp">
                   <button  type="button" class="  text-white font-bold  mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
               </div>
           </form>
        </div>
    </section>

    <section class="form_modal_box" v-if="formModal2 == true">
        <div class="w-4/12 card_body bg-white card mx-auto">
           <form class="pb-12 px-8">
               <div class="heading flex items-center justify-between pt-6 pb-2 font-semibold text-lg">Book a Service<font-awesome-icon icon="times"  size="1x" class="text-red-600 cursor-pointer" @click="formModal2 = false" /></div>
               <hr class="mb-8" style="height:1px;background:gray;opacity:0.3;" />
               <div class="mb-4">
                    <input
                    class="
                        shadow
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
                    type="text"
                    placeholder="Your Name"
                    />
                </div>
                <div class="mb-4">
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
                    "
                    id="cars"
                  >
                  <option class="text-xl " value="">Choose Model</option>
                  <option class="text-xl" :value="model.id" v-for="model in originalcars"
                    :key="model.id" >{{model.name}}</option>
                  </select>
                </div>
               <div class="mb-4">
                    <input
                    class="
                        shadow
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
                    type="text"
                    placeholder="Your Email"
                    />
                </div>
               <div class="mb-8">
                    <input
                    class="
                        shadow
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
                    type="number"
                    placeholder="Your Phone"
                    />
                </div>
               <div class="btn_grp">
                   <button  type="button" class=" text-white font-bold  mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
               </div>
           </form>
        </div>
    </section>

    <section class="form_modal_box" v-if="formModal3 == true">
        <div class="w-4/12 card_body bg-white card mx-auto">
           <form class="pb-12 px-8">
               <div class="heading flex items-center justify-between pt-6 pb-2 font-semibold text-lg">Book a Test Drive<font-awesome-icon icon="times"  size="1x" class="text-red-600 cursor-pointer" @click="formModal3 = false" /></div>
               <hr class="mb-8" style="height:1px;background:gray;opacity:0.3;" />
               <div class="mb-4">
                    <input
                    class="
                        shadow
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
                    type="text"
                    placeholder="Your Name"
                    />
                </div>
                <div class="mb-4">
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
                    "
                    id="cars"
                  >
                  <option class="text-xl " value="">Choose Model</option>
                  <option class="text-xl" :value="model.id" v-for="model in originalcars"
                    :key="model.id" >{{model.name}}</option>
                  </select>
                </div>
               <div class="mb-4">
                    <input
                    class="
                        shadow
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
                    type="text"
                    placeholder="Your Email"
                    />
                </div>
               <div class="mb-8">
                    <input
                    class="
                        shadow
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
                    type="number"
                    placeholder="Your Phone"
                    />
                </div>
               <div class="btn_grp">
                   <button  type="button" class=" text-white font-bold  mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
               </div>
           </form>
        </div>
    </section>

    <section class="form_modal_box" v-if="formModal4 == true">
        <div class="w-4/12 card_body bg-white card mx-auto">
           <form class="pb-12 px-8">
               <div class="heading flex items-center justify-between pt-6 pb-2 font-semibold text-lg">Request a callback<font-awesome-icon icon="times"  size="1x" class="text-red-600 cursor-pointer" @click="formModal4 = false" /></div>
               <hr class="mb-8" style="height:1px;background:gray;opacity:0.3;" />
               <div class="mb-4">
                    <input
                    class="
                        shadow
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
                    type="text"
                    placeholder="Your Name"
                    />
                </div>
                <div class="mb-4">
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
                    "
                    id="cars"
                  >
                  <option class="text-xl " value="">Choose Model</option>
                  <option class="text-xl" :value="model.id" v-for="model in originalcars"
                    :key="model.id" >{{model.name}}</option>
                  </select>
                </div>
               <div class="mb-4">
                    <input
                    class="
                        shadow
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
                    type="text"
                    placeholder="Your Email"
                    />
                </div>
               <div class="mb-8">
                    <input
                    class="
                        shadow
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
                    type="number"
                    placeholder="Your Phone"
                    />
                </div>
               <div class="btn_grp">
                   <button  type="button" class=" text-white font-bold  mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
               </div>
           </form>
        </div>
    </section>
  </div>
</template>

<script>
export default {
    data(){
        return{
            formModal:false,
            formModal2:false,
            formModal3:false,
            formModal4:false,
            originalcars:[
            {
                id:1,
                name:'Hyundai All New I20',
                image:'car7.jpg',
                category:'Hatchback',
                price:'8,19,900'
            },
            {
                id:2,
                name:'Hyundai Santro',
                image:'car8.jpg',
                category:'Hatchback',
                price:'4,67,490'
            },
            {
                id:3,
                name:'GRAND i10 NIOS',
                image:'car9.webp',
                category:'Hatchback',
                price:'8,14,900'
            },
            {
                id:4,
                name:'Hyundai i20 N Line',
                image:'car10.webp',
                category:'Hatchback',
                price:'7,31,900'
            },
            {
                id:5,
                name:'Hyundai Aura',
                image:'car2.webp',
                category:'Sedan',
                price:'22,30,000'
            },
            {
                id:6,
                name:'Hyundai Verna',
                image:'car15.jpg',
                category:'Sedan',
                price:'8,19,900'
            },
            {
                id:7,
                name:'Hyundai ELANTRA',
                image:'car11.webp',
                category:'Sedan',
                price:'10,68,000'
            },
            {
                id:8,
                name:'Hyundai Tuscon',
                image:'car18.webp',
                category:'SUV',
                price:'4,67,490'
            },
            {
                id:9,
                name:'Hyundai Venue',
                image:'car4.webp',
                category:'SUV',
                price:'8,16,500'
            },
            {
                id:11,
                name:'Hyundai Alcazar',
                image:'car17.jpg',
                category:'SUV',
                price:'16,53,300'
            },
            {
                id:12,
                name:'Hyundai CRETA',
                image:'car19.webp',
                category:'SUV',
                price:'17,00,000'
            }
            ],
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods:{
        handleScroll(){
            var fixed_form_sec = document.querySelector('.fixed_form_sec');
            var btn = document.querySelector('.back_to_top')
            
            if(pageYOffset > 260){
                btn.classList.add('show')
                btn.classList.remove('not_show');
            }else{
                btn.classList.remove('show')
                btn.classList.add('not_show');
            }

            if(pageYOffset < 10){
                btn.classList.remove('car_up')
            }

            if(pageYOffset > 340){
                fixed_form_sec.classList.add('show')
            }else{
                fixed_form_sec.classList.remove('show')
            }
        },
        backToTop(){
            var btn = document.querySelector('.back_to_top');
            btn.classList.add('car_up')
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    }
}
</script>

<style>

</style>