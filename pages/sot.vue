<template>
  <div class="sot_price_list my-24">
      <div class="heading_title mb-5">SOT Price List</div>
      <div class="sot_table">
          <table>
                  <tr>
                      <th class="model_head2"  colspan="1" rowspan="3">Model</th>
                      <th class="model_head" colspan="5" rowspan="1">Package Option</th>
                  </tr>
                  <tr class="second_th" colspan="5">
                      <td>2Years/</td>
                      <td>3Years/</td>
                      <td>4Years/</td>
                      <td>4Years/</td>
                      <td>5Years/</td>
                  </tr>
                  <tr class="second_th" colspan="5">
                      <td>40000km</td>
                      <td>45000km</td>
                      <td>45000km</td>
                      <td>60000km</td>
                      <td>60000km</td>
                  </tr>
                  <tr class="prices" v-for="price in sotList" :key="price.id">
                      <td class="car_model">{{price.name}}</td>
                      <td>{{price.price1}}</td>
                      <td>{{price.price2}}</td>
                      <td>{{price.price3}}</td>
                      <td>{{price.price4}}</td>
                      <td>{{price.price5}}</td>
                  </tr>
          </table>
      </div>
      <div class="my-5">
          <ul class="notice">
              <li><font-awesome-icon icon="star-of-life"  size="1x" class="star_icon mx-2" /> Above mentioned prices are MRP. Package applicable for both diesel and petrol variants.</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            sotList:[
                {
                    id:1,
                    name:'Santro',
                    price1:'3,499',
                    price2:'4,999',
                    price3:'5,499',
                    price4:'5,999',
                    price5:'6,499'
                },
                {
                    id:2,
                    name:'Grand i10 Nios',
                    price1:'3,999',
                    price2:'4,999',
                    price3:'5,499',
                    price4:'6,499',
                    price5:'7,999'
                },
                {
                    id:3,
                    name:'Aura',
                    price1:'3,999',
                    price2:'5,499',
                    price3:'6,499',
                    price4:'7,499',
                    price5:'9,999'
                },
                {
                    id:4,
                    name:'New i20',
                    price1:'4,999',
                    price2:'6,499',
                    price3:'8,499',
                    price4:'9,999',
                    price5:'12,999'
                },
                {
                    id:5,
                    name:'Venue',
                    price1:'4,999',
                    price2:'7,499',
                    price3:'7,999',
                    price4:'8,499',
                    price5:'8,999'
                },
                {
                    id:6,
                    name:'Creta',
                    price1:'9,999',
                    price2:'13,999',
                    price3:'16,999',
                    price4:'20,999',
                    price5:'25,999'
                }
            ]
        }
    }
}
</script>

<style scoped>
@media only screen and (min-width: 1270px) and (max-width: 1366px){
    .sot_table{
        width: 75%!important;
    }
}
@media only screen and (min-width:300px) and (max-width:600px){
    .sot_table{
        width: 95%!important;
        overflow: hidden;
        overflow-x:scroll;
    }
    .sot_price_list{
        margin-top: 50px!important;
    }
}
.notice{
    text-align: center;
    font-weight: 600;
}
.notice li{
    display: flex;
    justify-content: center;
    align-items: center;
}
.notice li svg{
    font-size: 12px;
}
.heading_title{
    text-align: center;
    font-size: 27px;
    font-weight: 600;
}
.sot_table{
    width: 65%;
    margin: 40px auto;
}
.sot_table table{
    box-shadow: 0 2px 10px 4px rgb(0 0 0/10%);
    border-collapse: collapse;
}
.sot_table table th{
    background: #002c5f;
    color: white;
    padding: 10px;
    text-align: center;
}
.sot_table th.model_head{
    border-left: 1px solid white;
}
.sot_table th.model_head2{
    border-right: 1px solid white;
}
.sot_table table td{
    padding: 10px 20px;
    text-align: center;
    width: 8%;
    border:1px solid lightgray;
}
.sot_table .second_th{
    background: #e6f0fa;
}

.sot_table .car_model{
    font-weight: 600;
}

.sot_table .second_th td{
    font-weight: 600;
}

.sot_table tr.prices:nth-child(odd){
    background: #e6f0fa;
}

</style>