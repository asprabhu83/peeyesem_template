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
              for="quote"
            >
              Quote
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
              id="quote"
              type="text"
              placeholder="Quote"
              v-model="quote"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="authour"
            >
              Authour
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
              id="authour"
              type="text"
              placeholder="Authour"
              v-model="authour"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="authour_type"
            >
              Authour Type
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
              id="authour_type"
              type="text"
              placeholder="Authour Type"
              v-model="authourType"
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
              @click="AddTestimonial"
            >
              Add Testimonial
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from '~/plugins/axios'
export default {
  data () {
    return {
      quote:'',
      authour:'',
      authourType:'',
      empty_valid: false,
      success: false,
    }
  },
  methods: {
    AddTestimonial () {
      this.empty_valid = false
      this.success = false
      var err = 0
      if (
        this.quote === '' ||
        this.authour === '' ||
        this.authourType === ''
      ) {
        this.empty_valid = true
        err++
      }

      if (err === 0) {
        axios.post(process.env.baseUrl + 'api/testimonial/store', {
          quote: this.quote,
          authour: this.authour,
          authour_type: this.authourType
        }).then(() => {
          this.success = true
          this.$emit('created')
          this.$emit('childDialog')
        }).catch((error) => {
          console.log(error)
        })
      }
    },
  }
}
</script>

<style>
</style>
