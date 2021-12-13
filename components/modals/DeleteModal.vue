<template>
  <div class="dialog_box fixed inset-0 h-screen w-full flex justify-center items-center">
      <div class="dialog_content bg-white rounded-md shadow-md">
        <h1 class="text-xl text-center my-8 font-bold">
          Are you sure you want to delete this {{itemName}}?
        </h1>
        <div class="flex items-center justify-center my-6">
          <button
            class="bg-gray-400 mx-4 rounded-sm text-white py-1 px-6"
            @click="closeModal"
          >
            cancel
          </button>
          <button
            class="bg-red-700 mx-4 text-white rounded-sm py-1 px-6"
            data-car-id="" v-on:click="Delete"
          >
            ok
          </button>
        </div>
      </div>
     </div>
</template>

<script>
export default {
    props:['itemName','id','name'],
    data(){
        return{}
    },
    methods:{
        closeModal(){
            this.$emit('closeModal', 'deleteModal')
        },
        deleteModal(){
            this.$emit('deleteModal',this.name)
        },
        Delete(){
            if(this.name == 'post'){
              this.$axios.delete(process.env.baseUrl + 'api/delete/highlight_post/' + this.id)
              .then(res=>{
                console.log(res)
                this.deleteModal();
              }).catch(err=>{
                console.log(err);
              })
            }
            if(this.name == 'gallery'){
              this.$axios.delete(process.env.baseUrl + 'api/delete/gallery/' + this.id)
              .then(res=>{
                console.log(res)
                this.deleteModal();
              }).catch(err=>{
                console.log(err);
              })
            }
            if(this.name == 'color'){
              this.$axios.delete(process.env.baseUrl + 'api/delete/color/' + this.id)
              .then(res=>{
                console.log(res)
                this.deleteModal();
              }).catch(err=>{
                console.log(err);
              })
            }
            if(this.name == 'spec'){
              this.$axios.delete(process.env.baseUrl + 'api/delete/specs/' + this.id)
              .then(res=>{
                console.log(res)
                this.deleteModal();
              }).catch(err=>{
                console.log(err);
              })
            }
            if(this.name == 'variant'){
              this.$axios.delete(process.env.baseUrl + 'api/delete/variant_model/' + this.id)
              .then(res=>{
                console.log(res)
                this.deleteModal();
              }).catch(err=>{
                console.log(err);
              })
            }
            if(this.name == 'feature'){
              this.$axios.delete(process.env.baseUrl + 'api/delete/feature/' + this.id)
              .then(res=>{
                console.log(res)
                this.deleteModal();
              }).catch(err=>{
                console.log(err);
              })
            }
        }
    }
}
</script>

<style scoped>
.dialog_box {
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
}
.dialog_content {
  width: 500px;
  max-width: 100%;
  animation: fadeDown .3s;
}
@keyframes fadeDown {
  from{
    opacity: 0;
    transform: scale(0);
  }
  to{
    opacity: 1;
    transform: scale(1);
  }
}
</style>