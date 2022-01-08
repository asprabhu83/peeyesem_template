import Vue from 'vue'

Vue.mixin({
    methods: {
       is_invalid_email(email) {
          var regex = this.$store.state.emailRegex;
          if(!regex.test(email)){
              return true;
          }else{
              return false;
          }
       },
       is_empty_value(){
           var err=0;
           for(var i=0; i<arguments.length; i++){
               if(arguments[i] == ''){
                   err++;
               }
           }
           if(err != 0){
               return true;
           }else{
               return false;
           }
       },
       sortedArray() {
            let sortedCars = this.$store.state.cars;
            
            sortedCars = sortedCars.sort((a,b) => {
                let fa = a.car_type.toLowerCase(), fb = b.car_type.toLowerCase();
                if (fa < fb) {
                    return -1
                }
                if (fa > fb) {
                    return 1
                }
                return 0
            })
            this.$store.state.cars = sortedCars;
        },
        GetSliderBanners(){
            this.$axios.get(process.env.baseUrl + 'api/slider/index')
            .then(res=>{
                this.$store.state.SliderBanners = res.data;
            }).catch(err=>{
                console.log(err);
            })
        },
        GetTestimonialData(){
            this.$axios.get(process.env.baseUrl + 'api/testimonial/index')
            .then((response) => {
            this.$store.state.TestimonialData = response.data;
            })
            .catch((error) => {
            console.log(error)
            })
        },
        GetBlog(){
            this.$axios
            .get(process.env.baseUrl + 'api/blog/index')
            .then((response) => {
            this.$store.state.BlogsData = response.data
            })
            .catch((error) => {
            console.log(error)
            })
        },
        GetModels(){
            this.$axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
            this.$axios.defaults.withCredentials = false;
            this.$axios.get(process.env.baseUrl + 'api/cars/all')
            .then((res)=>{
                this.$store.state.cars = res.data.cars;
                this.$store.state.originalDataCars = res.data.cars;
                this.sortedArray();
            }).catch((err)=>{
                console.log(err);
            })
        },
    }
  })
  