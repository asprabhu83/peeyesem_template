<template>
    <div class=" pb-24 location_page_sec">
        <div class="acc_head_title mt-16 mb-8">
            <div class="text-center title">Locate Us</div>
        </div>
        <div class="container">
            <div class="main_loc_sec">
                <div class="leftside">
                    <div class="main_loc_heading"><b>PEEYESYEM HYUNDAI</b></div>
                    <div><b>Head Office:</b> MYLAPORE</div>
                    <div><b>Address:</b> Old No. - 94, New No. - 162, Luz Church Road, Mylapore</div>
                    <div><b>Contact Person Number:</b> 9962666228</div>
                </div>
                <div class="rightside">
                    <div class="gmap_canvas">
                            <iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15547.7946740085!2d80.2575787!3d13.0389394!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5b5a4c51158248e4!2sPEEYESYEM%20HYUNDAI%20-%20MYLAPORE!5e0!3m2!1sen!2sin!4v1636443172904!5m2!1sen!2sin" width="354" height="274" style="border:0;max-width:100%;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
            <div class="acc_cnt_box">
                <h4 class="my-4 loc_main_head">Chennai:<hr /></h4>
                <div class="accordian_content_sec">
                        <div class="left_side">
                            <h4 class="text-center">Sales</h4>
                            <div class="card_items_area" v-for="item in LocationList.slice(0,1)" :key="item.id">
                                <b-card-header role="tab">
                                    <a block v-b-toggle="item.target" >
                                        <h5 class="mb-0">{{item.title}}<span class="when-opened"><i class="fas fa-angle-up rotate-icon"></i></span><span class="when-closed"><i class="fas fa-angle-down rotate-icon"></i></span></h5>
                                    </a>
                                </b-card-header>
                                <b-collapse :id="item.target"  :visible="item.target == currentLocation ? true :false"  accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                    <div class="acc_content">
                                        <div class="asides">
                                            <div><b>Location:</b> {{item.name}}</div>
                                                <div><b>Address:</b>{{item.address}}</div>
                                                <div><b>Contact Person Number:</b> {{item.phone}}</div>
                                        </div>
                                        <div class="asides">
                                            <div class="gmap_canvas">
                                                    <iframe :src="item.map" width="354" height="274" style="border:0;max-width:100%;" allowfullscreen="" loading="lazy"></iframe> 
                                            </div>
                                        </div>
                                    </div>
                                    </b-card-body>
                                </b-collapse>
                            </div>
                        </div>
                        <div class="right_side">
                            <h4 class="text-center">Service</h4>
                            <div class="card_items_area" v-for="item in LocationList.slice(7,10)" :key="item.id">
                                <b-card-header role="tab">
                                    <a block v-b-toggle="item.target" >
                                        <h5 class="mb-0">{{item.title}}<span class="when-opened"><i class="fas fa-angle-up rotate-icon"></i></span><span class="when-closed"><i class="fas fa-angle-down rotate-icon"></i></span></h5>
                                    </a>
                                </b-card-header>
                                <b-collapse :id="item.target"  :visible="item.target == currentLocation ? true :false"  accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                    <div class="acc_content">
                                        <div class="asides">
                                            <div><b>Location:</b> {{item.name}}</div>
                                                <div><b>Address:</b>{{item.address}}</div>
                                                <div><b>Contact Person Number:</b> {{item.phone}}</div>
                                        </div>
                                        <div class="asides">
                                            <div class="gmap_canvas">
                                                    <iframe :src="item.map" width="354" height="274" style="border:0;max-width:100%;" allowfullscreen="" loading="lazy"></iframe> 
                                            </div>
                                        </div>
                                    </div>
                                    </b-card-body>
                                </b-collapse>
                            </div>
                        </div>
                 </div> 
            </div>
            <div class="acc_cnt_box">
                <h4 class="my-4 loc_main_head">Madurai:<hr /></h4>
                <div class="accordian_content_sec">
                        <div class="left_side">
                            <h4 class="text-center">Sales</h4>
                            <div class="card_items_area" v-for="item in LocationList.slice(1,2)" :key="item.id">
                                <b-card-header role="tab">
                                    <a block v-b-toggle="item.target" >
                                        <h5 class="mb-0">{{item.title}}<span class="when-opened"><i class="fas fa-angle-up rotate-icon"></i></span><span class="when-closed"><i class="fas fa-angle-down rotate-icon"></i></span></h5>
                                    </a>
                                </b-card-header>
                                <b-collapse :id="item.target"  :visible="item.target == currentLocation ? true :false"  accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                    <div class="acc_content">
                                        <div class="asides">
                                            <div><b>Location:</b> {{item.name}}</div>
                                                <div><b>Address:</b>{{item.address}}</div>
                                                <div><b>Contact Person Number:</b> {{item.phone}}</div>
                                        </div>
                                        <div class="asides">
                                            <div class="gmap_canvas">
                                                    <iframe :src="item.map" width="354" height="274" style="border:0;max-width:100%;" allowfullscreen="" loading="lazy"></iframe> 
                                            </div>
                                        </div>
                                    </div>
                                    </b-card-body>
                                </b-collapse>
                            </div>
                        </div>
                        <div class="right_side">
                            <h4 class="text-center">Service</h4>
                            <div class="card_items_area" v-for="item in LocationList.slice(10,11)" :key="item.id">
                                <b-card-header role="tab">
                                    <a block v-b-toggle="item.target" >
                                        <h5 class="mb-0">{{item.title}}<span class="when-opened"><i class="fas fa-angle-up rotate-icon"></i></span><span class="when-closed"><i class="fas fa-angle-down rotate-icon"></i></span></h5>
                                    </a>
                                </b-card-header>
                                <b-collapse :id="item.target"  :visible="item.target == currentLocation ? true :false"  accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                    <div class="acc_content">
                                        <div class="asides">
                                            <div><b>Location:</b> {{item.name}}</div>
                                                <div><b>Address:</b>{{item.address}}</div>
                                                <div><b>Contact Person Number:</b> {{item.phone}}</div>
                                        </div>
                                        <div class="asides">
                                            <div class="gmap_canvas">
                                                    <iframe :src="item.map" width="354" height="274" style="border:0;max-width:100%;" allowfullscreen="" loading="lazy"></iframe> 
                                            </div>
                                        </div>
                                    </div>
                                    </b-card-body>
                                </b-collapse>
                            </div>
                        </div>
                </div> 
            </div>
            <div class="acc_cnt_box">
                 <h4 class="my-4 loc_main_head">Karaikudi:<hr /></h4>
                <div class="accordian_content_sec">
                        <div class="left_side">
                            <h4 class="text-center">Sales</h4>
                            <div class="card_items_area" v-for="item in LocationList.slice(4,5)" :key="item.id">
                                <b-card-header role="tab">
                                    <a block v-b-toggle="item.target" >
                                        <h5 class="mb-0">{{item.title}}<span class="when-opened"><i class="fas fa-angle-up rotate-icon"></i></span><span class="when-closed"><i class="fas fa-angle-down rotate-icon"></i></span></h5>
                                    </a>
                                </b-card-header>
                                <b-collapse :id="item.target"  :visible="item.target == currentLocation ? true :false"  accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                    <div class="acc_content">
                                        <div class="asides">
                                            <div><b>Location:</b> {{item.name}}</div>
                                                <div><b>Address:</b>{{item.address}}</div>
                                                <div><b>Contact Person Number:</b> {{item.phone}}</div>
                                        </div>
                                        <div class="asides">
                                            <div class="gmap_canvas">
                                                    <iframe :src="item.map" width="354" height="274" style="border:0;max-width:100%;" allowfullscreen="" loading="lazy"></iframe> 
                                            </div>
                                        </div>
                                    </div>
                                    </b-card-body>
                                </b-collapse>
                            </div>
                        </div>
                        <div class="right_side">
                            <h4 class="text-center">Service</h4>
                            <div class="card_items_area" v-for="item in LocationList.slice(14,15)" :key="item.id">
                                <b-card-header role="tab">
                                    <a block v-b-toggle="item.target" >
                                        <h5 class="mb-0">{{item.title}}<span class="when-opened"><i class="fas fa-angle-up rotate-icon"></i></span><span class="when-closed"><i class="fas fa-angle-down rotate-icon"></i></span></h5>
                                    </a>
                                </b-card-header>
                                <b-collapse :id="item.target"  :visible="item.target == currentLocation ? true :false"  accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                    <div class="acc_content">
                                        <div class="asides">
                                            <div><b>Location:</b> {{item.name}}</div>
                                                <div><b>Address:</b>{{item.address}}</div>
                                                <div><b>Contact Person Number:</b> {{item.phone}}</div>
                                        </div>
                                        <div class="asides">
                                            <div class="gmap_canvas">
                                                    <iframe :src="item.map" width="354" height="274" style="border:0;max-width:100%;" allowfullscreen="" loading="lazy"></iframe> 
                                            </div>
                                        </div>
                                    </div>
                                    </b-card-body>
                                </b-collapse>
                            </div>
                        </div>
                </div> 
            </div>
            <div class="acc_cnt_box">
                <h4 class="my-4 loc_main_head">Tuticorin:<hr /></h4>
                <div class="accordian_content_sec">
                        <div class="left_side">
                            <h4 class="text-center">Sales</h4>
                            <div class="card_items_area" v-for="item in LocationList.slice(2,3)" :key="item.id">
                                <b-card-header role="tab">
                                    <a block v-b-toggle="item.target" >
                                        <h5 class="mb-0">{{item.title}}<span class="when-opened"><i class="fas fa-angle-up rotate-icon"></i></span><span class="when-closed"><i class="fas fa-angle-down rotate-icon"></i></span></h5>
                                    </a>
                                </b-card-header>
                                <b-collapse :id="item.target"  :visible="item.target == currentLocation ? true :false"  accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                    <div class="acc_content">
                                        <div class="asides">
                                            <div><b>Location:</b> {{item.name}}</div>
                                                <div><b>Address:</b>{{item.address}}</div>
                                                <div><b>Contact Person Number:</b> {{item.phone}}</div>
                                        </div>
                                        <div class="asides">
                                            <div class="gmap_canvas">
                                                    <iframe :src="item.map" width="354" height="274" style="border:0;max-width:100%;" allowfullscreen="" loading="lazy"></iframe> 
                                            </div>
                                        </div>
                                    </div>
                                    </b-card-body>
                                </b-collapse>
                            </div>
                        </div>
                        <div class="right_side">
                            <h4 class="text-center">Service</h4>
                            <div class="card_items_area" v-for="item in LocationList.slice(11,12)" :key="item.id">
                                <b-card-header role="tab">
                                    <a block v-b-toggle="item.target" >
                                        <h5 class="mb-0">{{item.title}}<span class="when-opened"><i class="fas fa-angle-up rotate-icon"></i></span><span class="when-closed"><i class="fas fa-angle-down rotate-icon"></i></span></h5>
                                    </a>
                                </b-card-header>
                                <b-collapse :id="item.target"  :visible="item.target == currentLocation ? true :false"  accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                    <div class="acc_content">
                                        <div class="asides">
                                            <div><b>Location:</b> {{item.name}}</div>
                                                <div><b>Address:</b>{{item.address}}</div>
                                                <div><b>Contact Person Number:</b> {{item.phone}}</div>
                                        </div>
                                        <div class="asides">
                                            <div class="gmap_canvas">
                                                    <iframe :src="item.map" width="354" height="274" style="border:0;max-width:100%;" allowfullscreen="" loading="lazy"></iframe> 
                                            </div>
                                        </div>
                                    </div>
                                    </b-card-body>
                                </b-collapse>
                            </div>
                        </div>
                </div>
            </div>
            <div class="acc_cnt_box">
                <h4 class="my-4 loc_main_head">Ramnad:<hr /></h4>
                <div class="accordian_content_sec">
                        <div class="left_side">
                            <h4 class="text-center">Sales</h4>
                            <div class="card_items_area" v-for="item in LocationList.slice(3,4)" :key="item.id">
                                <b-card-header role="tab">
                                    <a block v-b-toggle="item.target" >
                                        <h5 class="mb-0">{{item.title}}<span class="when-opened"><i class="fas fa-angle-up rotate-icon"></i></span><span class="when-closed"><i class="fas fa-angle-down rotate-icon"></i></span></h5>
                                    </a>
                                </b-card-header>
                                <b-collapse :id="item.target"  :visible="item.target == currentLocation ? true :false"  accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                    <div class="acc_content">
                                        <div class="asides">
                                            <div><b>Location:</b> {{item.name}}</div>
                                                <div><b>Address:</b>{{item.address}}</div>
                                                <div><b>Contact Person Number:</b> {{item.phone}}</div>
                                        </div>
                                        <div class="asides">
                                            <div class="gmap_canvas">
                                                    <iframe :src="item.map" width="354" height="274" style="border:0;max-width:100%;" allowfullscreen="" loading="lazy"></iframe> 
                                            </div>
                                        </div>
                                    </div>
                                    </b-card-body>
                                </b-collapse>
                            </div>
                        </div>
                        <div class="right_side">
                            <h4 class="text-center">Service</h4>
                            <div class="card_items_area" v-for="item in LocationList.slice(12,13)" :key="item.id">
                                <b-card-header role="tab">
                                    <a block v-b-toggle="item.target" >
                                        <h5 class="mb-0">{{item.title}}<span class="when-opened"><i class="fas fa-angle-up rotate-icon"></i></span><span class="when-closed"><i class="fas fa-angle-down rotate-icon"></i></span></h5>
                                    </a>
                                </b-card-header>
                                <b-collapse :id="item.target"  :visible="item.target == currentLocation ? true :false"  accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                    <div class="acc_content">
                                        <div class="asides">
                                            <div><b>Location:</b> {{item.name}}</div>
                                                <div><b>Address:</b>{{item.address}}</div>
                                                <div><b>Contact Person Number:</b> {{item.phone}}</div>
                                        </div>
                                        <div class="asides">
                                            <div class="gmap_canvas">
                                                    <iframe :src="item.map" width="354" height="274" style="border:0;max-width:100%;" allowfullscreen="" loading="lazy"></iframe> 
                                            </div>
                                        </div>
                                    </div>
                                    </b-card-body>
                                </b-collapse>
                            </div>
                        </div>
                </div> 
            </div>
            <div class="acc_cnt_box">
                <h4 class="my-4 loc_main_head">Kovilpatti:<hr /></h4>
                <div class="accordian_content_sec">
                        <div class="left_side">
                            <h4 class="text-center">Sales</h4>
                            <div class="card_items_area" v-for="item in LocationList.slice(5,6)" :key="item.id">
                                <b-card-header role="tab">
                                    <a block v-b-toggle="item.target" >
                                        <h5 class="mb-0">{{item.title}}<span class="when-opened"><i class="fas fa-angle-up rotate-icon"></i></span><span class="when-closed"><i class="fas fa-angle-down rotate-icon"></i></span></h5>
                                    </a>
                                </b-card-header>
                                <b-collapse :id="item.target"  :visible="item.target == currentLocation ? true :false"  accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                    <div class="acc_content">
                                        <div class="asides">
                                            <div><b>Location:</b> {{item.name}}</div>
                                                <div><b>Address:</b>{{item.address}}</div>
                                                <div><b>Contact Person Number:</b> {{item.phone}}</div>
                                        </div>
                                        <div class="asides">
                                            <div class="gmap_canvas">
                                                    <iframe :src="item.map" width="354" height="274" style="border:0;max-width:100%;" allowfullscreen="" loading="lazy"></iframe> 
                                            </div>
                                        </div>
                                    </div>
                                    </b-card-body>
                                </b-collapse>
                            </div>
                        </div>
                        <div class="right_side">
                            <h4 class="text-center">Service</h4>
                            <div class="card_items_area" v-for="item in LocationList.slice(13,14)" :key="item.id">
                                <b-card-header role="tab">
                                    <a block v-b-toggle="item.target" >
                                        <h5 class="mb-0">{{item.title}}<span class="when-opened"><i class="fas fa-angle-up rotate-icon"></i></span><span class="when-closed"><i class="fas fa-angle-down rotate-icon"></i></span></h5>
                                    </a>
                                </b-card-header>
                                <b-collapse :id="item.target"  :visible="item.target == currentLocation ? true :false"  accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                    <div class="acc_content">
                                        <div class="asides">
                                            <div><b>Location:</b> {{item.name}}</div>
                                                <div><b>Address:</b>{{item.address}}</div>
                                                <div><b>Contact Person Number:</b> {{item.phone}}</div>
                                        </div>
                                        <div class="asides">
                                            <div class="gmap_canvas">
                                                    <iframe :src="item.map" width="354" height="274" style="border:0;max-width:100%;" allowfullscreen="" loading="lazy"></iframe> 
                                            </div>
                                        </div>
                                    </div>
                                    </b-card-body>
                                </b-collapse>
                            </div>
                        </div>
                </div> 
            </div>
            <div class="acc_cnt_box">
                 <h4 class="my-4 loc_main_head">Thiruchendur:<hr /></h4>
                <div class="accordian_content_sec">
                        <div class="left_side">
                            <h4 class="text-center">Sales</h4>
                            <div class="card_items_area" v-for="item in LocationList.slice(6,7)" :key="item.id">
                                <b-card-header role="tab">
                                    <a block v-b-toggle="item.target" >
                                        <h5 class="mb-0">{{item.title}}<span class="when-opened"><i class="fas fa-angle-up rotate-icon"></i></span><span class="when-closed"><i class="fas fa-angle-down rotate-icon"></i></span></h5>
                                    </a>
                                </b-card-header>
                                <b-collapse :id="item.target"  :visible="item.target == currentLocation ? true :false"  accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                    <div class="acc_content">
                                        <div class="asides">
                                            <div><b>Location:</b> {{item.name}}</div>
                                                <div><b>Address:</b>{{item.address}}</div>
                                                <div><b>Contact Person Number:</b> {{item.phone}}</div>
                                        </div>
                                        <div class="asides">
                                            <div class="gmap_canvas">
                                                    <iframe :src="item.map" width="354" height="274" style="border:0;max-width:100%;" allowfullscreen="" loading="lazy"></iframe> 
                                            </div>
                                        </div>
                                    </div>
                                    </b-card-body>
                                </b-collapse>
                            </div>
                        </div>
                        <div class="right_side">
                            <h4 class="text-center">Service</h4>
                            <div class="card_items_area" v-for="item in LocationList.slice(15,16)" :key="item.id">
                                <b-card-header role="tab">
                                    <a block v-b-toggle="item.target" >
                                        <h5 class="mb-0">{{item.title}}<span class="when-opened"><i class="fas fa-angle-up rotate-icon"></i></span><span class="when-closed"><i class="fas fa-angle-down rotate-icon"></i></span></h5>
                                    </a>
                                </b-card-header>
                                <b-collapse :id="item.target"  :visible="item.target == currentLocation ? true :false"  accordion="my-accordion" role="tabpanel">
                                    <b-card-body>
                                    <div class="acc_content">
                                        <div class="asides">
                                            <div><b>Location:</b> {{item.name}}</div>
                                                <div><b>Address:</b>{{item.address}}</div>
                                                <div><b>Contact Person Number:</b> {{item.phone}}</div>
                                        </div>
                                        <div class="asides">
                                            <div class="gmap_canvas">
                                                    <iframe :src="item.map" width="354" height="274" style="border:0;max-width:100%;" allowfullscreen="" loading="lazy"></iframe> 
                                            </div>
                                        </div>
                                    </div>
                                    </b-card-body>
                                </b-collapse>
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
            LocationList:[
                {
                    id:1,
                    title:'MYLAPORE',
                    target:'mylapore-sales',
                    name:'MYLAPORE',
                    address:'Old No. - 94, New No. - 162, Luz Church Road, Mylapore',
                    phone:'9962666228',
                    map:`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15547.7946740085!2d80.2575787!3d13.0389394!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5b5a4c51158248e4!2sPEEYESYEM%20HYUNDAI%20-%20MYLAPORE!5e0!3m2!1sen!2sin!4v1636443172904!5m2!1sen!2sin`
                },
                {
                    id:2,
                    title:'MADURAI',
                    target:'madurai-sales',
                    name:'MADURAI',
                    address:'No.5, Marriamman Teppakulam West Street, Opp: Thiyagarajar Arts College,Madurai,Tamil Nadu -625009',
                    phone:'9962666228',
                    map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2646824247195!2d78.14429081479346!3d9.911899892911585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c51b1ae28853%3A0x337ceb945d889275!2sPeeYesYem%20Hyundai%20-%20Madurai!5e0!3m2!1sen!2sin!4v1636638461241!5m2!1sen!2sin'
                },
                {
                    id:3,
                    title:'TUTICORIN',
                    target:'tuticorin-sales',
                    name:'TUTICORIN',
                    address:'APC Mahalakshmi Women Collage, 4/47 B, Ettayapurm Road, Thoothukudi,Tamil Nadu -628002',
                    phone:'9962666228',
                    map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.4868268240302!2d78.12486621478521!3d8.83418419365619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03e544b24d0947%3A0x3758987dd0b8b9a6!2sPeeyesyem%20-%20Hyundai!5e0!3m2!1sen!2sin!4v1636638303141!5m2!1sen!2sin'
                },
                {
                    id:4,
                    title:'RAMNAD',
                    target:'ramnad-sales',
                    name:'RAMNAD',
                    address:'3/135, Madurai NH Road, Opp: MG Mahal Ramanathapuram,Tamil Nadu -623501',
                    phone:'9962666228',
                    map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.17403982636!2d78.27532761480292!3d11.025565492152737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b01994ea51c3bdf%3A0x8149d134e5403276!2sPeeyesyem%20Hyundai!5e0!3m2!1sen!2sin!4v1636638702800!5m2!1sen!2sin'
                },
                {
                    id:5,
                    title:'KARAIKUDI',
                    target:'karaikudi-sales',
                    name:'KARAIKUDI',
                    address:'Koviloor Rd, Aruna Nagar, Karaikudi, Tamil Nadu',
                    phone:'9962666228',
                    map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0241222619184!2d78.10740281479366!3d9.931948892897818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf9d25334a23%3A0x863bb9bc4241e58f!2sPEEYESYEM%20HYUNDAI%20-%20KARAIKUDI!5e0!3m2!1sen!2sin!4v1636638589194!5m2!1sen!2sin'
                },
                {
                    id:6,
                    title:'KOVILPATTI',
                    target:'kovilpatti-sales',
                    name:'KOVILPATTI',
                    address:'5/162A Meenatachi Nagar, A. Salaiputhur,Kovilpatti,Tamil Nadu -628503',
                    phone:'9962666228',
                    map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.9218790383434!2d77.84453571478761!3d9.161520093428997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06b289d373b3ab%3A0x8f9cc337d8800b21!2sPeeYesYem%20Hyundai%20-%20Kovilpatti!5e0!3m2!1sen!2sin!4v1636638802557!5m2!1sen!2sin'
                },
                {
                    id:7,
                    title:'THIRUCHENDUR',
                    target:'thiruchendur-sales',
                    name:'THIRUCHENDUR',
                    address:'59/9, KUMARAPURAM,Trichendur,Tamil Nadu -628215',
                    phone:'9962666228',
                    map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.878905609981!2d78.09818361478291!3d8.511136993881177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b038faeadb444b3%3A0x3f1ca9f0d7bad57d!2sPeeyesyem%20Hyundai%20Tiruchandur!5e0!3m2!1sen!2sin!4v1636638867974!5m2!1sen!2sin'
                },
                {
                    id:9,
                    title:'KOTTURPURAM',
                    target:'kotturpuram-service',
                    name:'KOTTURPURAM',
                    address:'No. 17, 45, Gandhi Mandapam Rd, Chitra Nagar, Kotturpuram, Chennai, Tamil Nadu 600085',
                    phone:'9962666228',
                    map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2357938447976!2d80.23947221482246!3d13.020650990823787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267bdefa5f0b5%3A0xd29fd546109ace5c!2sPeeyesyem%20Hyundai%20-%20Kotturpuram%20Service!5e0!3m2!1sen!2sin!4v1636638124553!5m2!1sen!2sin'
                },
                {
                    id:10,
                    title:'GUINDY',
                    target:'guindy-service',
                    name:'GUINDY',
                    address:'A-1 & 2, 3rd Phase, Thiru Vi Ka Industrial Estate, SIDCO Industrial Estate, Guindy, Chennai, Tamil Nadu 600032',
                    phone:'9962666228',
                    map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2997607091374!2d80.20717131482249!3d13.016573190826342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52670c75623817%3A0xe0516dc4e6471a50!2sPeeYesYem%20Hyundai%20-%20Guindy%20Service!5e0!3m2!1sen!2sin!4v1636638012037!5m2!1sen!2sin'
                },
                 {
                    id:8,
                    title:'TONDIARPET',
                    target:'tondiarpet-service',
                    name:'TONDIARPET',
                    address:'NO.666, Thiruvottiyur High Rd, Press Colony, Tondiarpet, Chennai, Tamil Nadu 600081',
                    phone:'9962666228',
                    map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.4785383799235!2d80.28983831482368!3d13.132186990750657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f9c47f31db5%3A0x96045e21f0e14b37!2sPeeYesYem%20Hyundai%20-%20Tondiarpet%20Service!5e0!3m2!1sen!2sin!4v1636638184845!5m2!1sen!2sin'
                },
                {
                    id:11,
                    title:'MADURAI',
                    target:'madurai-service',
                    name:'MADURAI',
                    address:'No. 249/3, Aruppkottai Main Road, KBL car parking campus, near Vetri Cinemas, Villapuram, Tamil Nadu 625012',
                    phone:'9962666228',
                    map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.4386424921518!2d78.11596091479336!3d9.89737649292155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c535a09c89fd%3A0x4068cb42b69763d5!2sPeeYesYem%20Hyundai%20-%20Madurai%20Service!5e0!3m2!1sen!2sin!4v1636638520783!5m2!1sen!2sin'
                },
                {
                    id:12,
                    title:'TUTICORIN',
                    target:'tuticorin-service',
                    name:'TUTICORIN',
                    address:'APC Mahalakshmi Women Collage, 4/47 B, Ettayapurm Road, Thoothukudi,Tamil Nadu -628002',
                    phone:'9962666228',
                    map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.4868268240302!2d78.12486621478521!3d8.83418419365619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03e544b24d0947%3A0x3758987dd0b8b9a6!2sPeeyesyem%20-%20Hyundai!5e0!3m2!1sen!2sin!4v1636638410855!5m2!1sen!2sin'
                },
                {
                    id:13,
                    title:'RAMNAD',
                    target:'ramnad-service',
                    name:'RAMNAD',
                    address:'3/135, Madurai NH Road, Opp: MG Mahal Ramanathapuram,Tamil Nadu -623501',
                    phone:'9962666228',
                    map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.17403982636!2d78.27532761480292!3d11.025565492152737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b01994ea51c3bdf%3A0x8149d134e5403276!2sPeeyesyem%20Hyundai!5e0!3m2!1sen!2sin!4v1636638702800!5m2!1sen!2sin'
                },
                {
                    id:14,
                    title:'KOVILPATTI',
                    target:'kovilpatti-service',
                    name:'KOVILPATTI',
                    address:'5/162A Meenatachi Nagar, A. Salaiputhur,Kovilpatti,Tamil Nadu -628503',
                    phone:'9962666228',
                    map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.9218790383434!2d77.84453571478761!3d9.161520093428997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06b289d373b3ab%3A0x8f9cc337d8800b21!2sPeeYesYem%20Hyundai%20-%20Kovilpatti!5e0!3m2!1sen!2sin!4v1636638802557!5m2!1sen!2sin'
                },
                {
                    id:15,
                    title:'KARAIKUDI',
                    target:'karaikudi-service',
                    name:'KARAIKUDI',
                    address:'Koviloor Rd, Aruna Nagar, Karaikudi, Tamil Nadu',
                    phone:'9962666228',
                    map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0241222619184!2d78.10740281479366!3d9.931948892897818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf9d25334a23%3A0x863bb9bc4241e58f!2sPEEYESYEM%20HYUNDAI%20-%20KARAIKUDI!5e0!3m2!1sen!2sin!4v1636638652201!5m2!1sen!2sin'
                },
                {
                    id:16,
                    title:'THIRUCHENDUR',
                    target:'thiruchendur-service',
                    name:'THIRUCHENDUR',
                    address:'59/9, KUMARAPURAM,Trichendur,Tamil Nadu -628215',
                    phone:'9962666228',
                    map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.878905609981!2d78.09818361478291!3d8.511136993881177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b038faeadb444b3%3A0x3f1ca9f0d7bad57d!2sPeeyesyem%20Hyundai%20Tiruchandur!5e0!3m2!1sen!2sin!4v1636638867974!5m2!1sen!2sin'
                }
            ],
            currentLocation:this.$route.query.location,
            collapse:'collapsed',
            activeTab:0,
        }
    },
    mounted(){
        window.scrollTo(0, 0)
        if(this.$route.query.location){
            var elem = document.getElementById(this.$route.query.location);
            elem.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
        }
    },
    watch:{
        $route(){
            this.$nextTick(() => {
                this.currentLocation = this.$route.query.location;
            });
        }
    },
    // methods:{
    //     toggleIcon(id,e){
    //         var tab = e.target;
    //         if(tab.classList.contains('not-collapsed')){
    //             console.log()
    //         }
    //     }
    // }
}
</script>

<style scoped>
@media only screen and (min-width: 760px) and (max-width: 960px){
    .main_loc_sec{
        width: 90%!important;
    }
    .accordian_content_sec .left_side, .accordian_content_sec .right_side{
        width: 85%!important;
        margin: 0 auto!important;
    }
}
@media only screen and (min-width: 961px) and (max-width: 1030px){
    .main_loc_sec{
        width: 80%!important;
    }
    .accordian_content_sec .left_side, .accordian_content_sec .right_side{
        width: 47%!important;
    }
    .acc_content{
        padding: 0px!important;
    }
}
.acc_cnt_box{
    margin: 90px 0;
}
.accordian_content_sec .left_side>h4,.accordian_content_sec .right_side>h4{
    margin: 15px 0;
}
.loc_main_head hr{
    width: 6%;
    margin: 3px auto;
    background: black;
    height: 3px;
}
.acc_cnt_box .loc_main_head{
    padding: 0 20px;
    font-size: 25px;
    text-align: center;
}
.down_icon, .up_icon{
    display: none;
}
.down_icon.active, .up_icon.active{
    display: inline-block;
}
.main_loc_heading{
    position: relative;
    bottom: 30px;
}
.main_loc_heading b{
    font-size: 18px;
}
.acc_head_title .title{
    font-size: 28px;
    font-weight: 600;
}
.main_loc_sec{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65%;
    margin: 40px auto;
    box-shadow: 0 2px 10px 4px rgb(0 0 0 / 12%);
    padding: 30px 20px;
    border-radius: 5px;
}
.main_loc_sec .leftside, .main_loc_sec .rightside{
    margin: 0 20px;
}
.main_loc_sec .leftside div{
    margin: 14px 0;
    font-size: 16px;
}
.accordian_content_sec{
    display: flex;
    flex-wrap: wrap;
}
.accordian_content_sec .left_side, .accordian_content_sec .right_side{
    width: 48%;
    margin: 0 10px;
}
.card_items_area{
    margin: 30px auto;
}
.card_items_area h5{
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
}
.card_items_area .card-body{
    border:1px solid lightgray;
}
.acc_content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}
.acc_content .asides{
    margin:20px 0;
    width: 48%;
}
.acc_content .asides div{
    margin: 14px 0;
    font-size: 16px;
}
.collapsed  .when-opened{
    display: none;
}
.not-collapsed .when-closed{
    display: none;
}
@media only screen and (min-width: 1270px) and (max-width: 1366px){
    .acc_content{
        padding: 0!important;
    }
}
@media only screen and (min-width:300px) and (max-width:600px){
    .loc_main_head hr{
        width: 15%!important;
    }
    .loc_main_head{
        margin: 30px 0!important;
    }
    .main_loc_heading{
        bottom: 15px!important;
    }
    .accordian_content_sec .left_side, .accordian_content_sec .right_side{
        width: 100%!important;
    }
    .main_loc_sec{
        width: 98%!important;
        flex-wrap: wrap;
        padding: 30px 10px!important
    }
    .acc_content{
        flex-wrap: wrap;
        padding: 10px!important;
    }
    .acc_content .asides{
        width: 100%!important;
    }
    .location_page_sec{
        padding-top: 0!important;
    }
}
</style>