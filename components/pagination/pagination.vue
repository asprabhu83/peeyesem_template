<template>
  <div>
      <div class="btn_sec" v-if="perPage < items.length">
          <button type="button" class="next_btns" @click="Prev">Prev</button>
          <button type="button" class="page_num" v-for="page in totalPages.slice(firstbtn,lastbtn)" :class="currentPage == page ? 'active' : ''" :key="page" @click="currentPage = page,setPages(page)">{{page}}</button>
          <button type="button" class="next_btns" @click="Next">Next</button>
      </div>
  </div>
</template>

<script>
export default {
    props:['items','perPage'],
    data(){
        return{
            Page:0,
            totalPages:[],
            start:0,
            end:0,
            currentPage:1,
            firstbtn:0,
            lastbtn: 0
        }
    },
    mounted(){
        this.Pagination();
    },
    methods:{
        Prev(){
            var prevPage = this.currentPage - 1;
            if(prevPage < 1){
                prevPage = 1;
            }
            this.currentPage = prevPage;
            this.setPages(prevPage);
        },
        Next(){
            var nextPage = this.currentPage + 1;
            if(nextPage > this.totalPages.length){
                nextPage = this.totalPages.length;
            }
            this.currentPage = nextPage;
            this.setPages(nextPage);
        },
        Pagination(){
            this.lastbtn = this.items.length > 5 ? 5 : this.items.length;
            var count = this.items.length;
            var per_page = this.perPage;
            if(per_page > count){
                per_page = count;
            }
            var page = Math.ceil(count/per_page);
            this.Page = page;
            this.end = per_page;
            this.totalPages = [];
            for(var i=1;i<=page;i++){
                this.totalPages.push(i);
            }
            this.$emit('page-value',{start:this.start,end:this.end})
        },
        setPages(crnt_page){
            var btnlength = this.totalPages.length;
            if(this.lastbtn  == this.currentPage && this.currentPage !== btnlength){
                this.lastbtn = this.lastbtn + 1;
                this.firstbtn = this.firstbtn + 1;
            }
            if(this.firstbtn + 1 == this.currentPage && this.currentPage !== 1){
                this.lastbtn = this.lastbtn - 1;
                this.firstbtn = this.firstbtn - 1;
            }
            var totalPage = this.items.length;
            var start = (crnt_page - 1)*this.perPage;
            var end = Math.min(start + this.perPage-1, totalPage - 1);
            this.$emit('page-value',{start:start,end:end+1});
        }
    },
    watch:{
        items(){
            this.items;
            this.Pagination();
        }
    }
}
</script>

<style scoped>
.btn_sec{
    text-align: center;
    margin: 30px 0;
}
.btn_sec button.page_num{
    margin: 10px;
    background: #002c5f;
    color: white;
    height: 28px;
    width: 25px;
    border-radius: 4px;
}
.btn_sec .page_num.active{
    background: #e6f0fa;
    color: black;
    border: 1px solid black;
}
.btn_sec .next_btns{
    margin: 10px;
    background: #002c5f;
    color: white;
    border-radius: 4px;
    padding: 2px 12px;
}
</style>