<template>
  <div style="background-color: #f8f8f8;">
    <div class="container" style="width: 81%;padding-top: 10px;">
    <div class="row">
      <div v-if="isActive" class="col-lg-8 col-md-12" style="">
        <h3 style="font-size: 23px;
            line-height: 1.5em;
            color: black;
            font-weight: 600;
            font-family: sans-serif;
            margin-top: 20px;
            margin-bottom: 20px;
            ">Trang chủ >
            <span>Đặt vé > </span> 
            <span>{{ movieDetail.name }}</span> <button @click="check">check</button></h3>
          <div class="text-center" :style="{ backgroundColor: currentColor }" 
            style="color: red;padding: 10px;
            font-weight: 600;
            font-size: 14px;
            margin-bottom: 15px;">
            Theo quy định của cục điện ảnh, phim này không dành cho khán giả dưới 18 tuổi
          </div>
          <div class="row">
            <div class="col-lg-3" v-for="(note,i) in note_seat_status" :key="i"
            style="display: flex;align-items: center;"
            >
                <img :src="note.linkImage" alt="" style="width: 35px; height: 35px;">
                <span style="font-weight: 600;margin-left: 8px;">{{ note.text }}</span>
            </div>
          </div>
          <div class="room-over-view" style="margin-top: 20px;">
            <div class="row">
                <div class="seat-diagram">
                    <div class="screenImage">
                     <img  src="/img/ic-screen.png" alt="" style="width: 100% !important;">

                    </div>
                    <div class="check-show" style="margin-top: 20px;">
                        <!-- <div class="full-width" style="">
                            <div class="seat" v-for="(seat, i) in seats.slice(0, 18)" :key="i" style="text-align: center;">
                                <span style="margin: auto !important; line-height: 3;">{{ seat.seatLine }}{{ seat.seatNumber }}</span>
                            </div>
                        </div>
                        <div class="full-width">
                            <div class="seat" v-for="(seat, i) in seats.slice(18, 36)" :key="i" style="text-align: center;">
                                <span style="margin: auto !important; line-height: 3;">{{ seat.seatLine }}{{ seat.seatNumber }}</span>
                            </div>
                        </div>
                        <div class="full-width">
                            <div class="seat" v-for="(seat, i) in seats.slice(36, 54)" :key="i" style="text-align: center;">
                                <span style="margin: auto !important; line-height: 3;">{{ seat.seatLine }}{{ seat.seatNumber }}</span>
                            </div>
                        </div> -->
                        <div class="full-width" style="">
                            <div class="seat-normal" v-for="(seat, i) in seats.slice(0, 18)" :key="i" @click="bookingSeat(seat)" style="cursor: pointer;">
                              <!-- <div v-if ="seat.seatStatus == 3" style="text-align: center; background-image: url('https://www.betacinemas.vn/Assets/global/img/booking/seat-process-normal.png'); background-repeat: no-repeat; background-size: 35px 35px; background-position: center; width: 40px; height: 40px; display: inline-block; font-size: 11px; align-items: center; justify-content: center; margin-right: 8px;color: white;">
                                <span style="margin: auto !important; line-height: 3;">{{ seat.seatLine }}{{ seat.seatNumber }}</span>
                              </div> -->
                              <div v-if ="seat.seatStatus == 4" style="text-align: center; background-image: url('/img/seat-buy-normal.png'); background-repeat: no-repeat; background-size: 35px 35px; background-position: center; width: 40px; height: 40px; display: inline-block; font-size: 11px; align-items: center; justify-content: center; margin-right: 8px;color: white;">
                                <span style="margin: auto !important; line-height: 3;">{{ seat.seatLine }}{{ seat.seatNumber }}</span>
                              </div>
                              <div v-else-if="seat.seatStatus == 2" style="text-align: center; background-image: url('/img/seat-select-normal.png'); background-repeat: no-repeat; background-size: 35px 35px; background-position: center; width: 40px; height: 40px; display: inline-block; font-size: 11px; align-items: center; justify-content: center; margin-right: 8px;color: white;">
                                <span style="margin: auto !important; line-height: 3;">{{ seat.seatLine }}{{ seat.seatNumber }}</span>
                              </div>
                              <div v-else-if="seat.seatStatus == 3" style="text-align: center; background-image: url('/img/seat-process-normal.png'); background-repeat: no-repeat; background-size: 35px 35px; background-position: center; width: 40px; height: 40px; display: inline-block; font-size: 11px; align-items: center; justify-content: center; margin-right: 8px;color: white;">
                                <span style="margin: auto !important; line-height: 3;">{{ seat.seatLine }}{{ seat.seatNumber }}</span>
                              </div>
                              <div v-else-if="seat.seatStatus == 1 && seat.seatType == 1" class="seat" style="text-align: center;">
                                <span style="margin: auto !important; line-height: 3;">{{ seat.seatLine }}{{ seat.seatNumber }}</span>
                              </div>
                            </div>
                        </div>
                        <div class="full-width">
                            <div class="seat-vip" v-for="(seat, i) in seats.slice(18, 36)" :key="i"  @click="changeSeatStatus(seat)" style="cursor: pointer;">
                                <div v-if ="seat.seatStatus == 2" style="text-align: center; background-image: url('/img/seat-select-vip.png'); background-repeat: no-repeat; background-size: 35px 35px; background-position: center; width: 40px; height: 40px; display: inline-block; font-size: 11px; align-items: center; justify-content: center; margin-right: 8px;color: white;" >
                                    <span style="margin: auto !important; line-height: 3;">{{ seat.seatLine }}{{ seat.seatNumber }}</span>
                                </div>
                                <div v-else-if ="seat.seatStatus == 4" style="text-align: center; background-image: url('/img/seat-buy-vip.png'); background-repeat: no-repeat; background-size: 35px 35px; background-position: center; width: 40px; height: 40px; display: inline-block; font-size: 11px; align-items: center; justify-content: center; margin-right: 8px;color: white;">
                                    <span style="margin: auto !important; line-height: 3;">{{ seat.seatLine }}{{ seat.seatNumber }}</span>
                                </div>
                                <div  v-else-if="seat.seatType === 2 && seat.seatStatus == 1" style="text-align: center; background-image: url('/img/seat-unselect-vip.png'); background-repeat: no-repeat; background-size: 35px 35px; background-position: center; width: 40px; height: 40px; display: inline-block; font-size: 11px; align-items: center; justify-content: center; margin-right: 8px;">
                                    <span style="margin: auto !important; line-height: 3;">{{ seat.seatLine }}{{ seat.seatNumber }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- <div class="full-width">
                            <div class="seat-vip"  v-for="(seat, i) in seats.slice(90, 107)" :key="i">
                                <div class="seat"  v-if="seat.seatType === 2" style="text-align: center; background-image: url('https://www.betacinemas.vn/Assets/global/img/booking/seat-unselect-vip.png'); background-repeat: no-repeat; background-size: 35px 35px; background-position: center; width: 40px; height: 40px; display: inline-block; font-size: 11px; align-items: center; justify-content: center; margin-right: 8px;">
                                    <span style="margin: auto !important; line-height: 3;">{{ seat.seatLine }}{{ seat.seatNumber }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="full-width">
                            <div class="seat-vip" v-for="(seat, i) in seats.slice(107, 123)" :key="i">
                                <div class="seat"  v-if="seat.seatType === 2" style="text-align: center; background-image: url('https://www.betacinemas.vn/Assets/global/img/booking/seat-unselect-vip.png'); background-repeat: no-repeat; background-size: 35px 35px; background-position: center; width: 40px; height: 40px; display: inline-block; font-size: 11px; align-items: center; justify-content: center; margin-right: 8px;">
                                    <span style="margin: auto !important; line-height: 3;">{{ seat.seatLine }}{{ seat.seatNumber }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="full-width">
                            <div class="seat-vip"  v-for="(seat, i) in seats.slice(123, 138)" :key="i">
                                <div class="seat"  v-if="seat.seatType === 2" style="text-align: center; background-image: url('https://www.betacinemas.vn/Assets/global/img/booking/seat-unselect-vip.png'); background-repeat: no-repeat; background-size: 35px 35px; background-position: center; width: 40px; height: 40px; display: inline-block; font-size: 11px; align-items: center; justify-content: center; margin-right: 8px;">
                                    <span style="margin: auto !important; line-height: 3;">{{ seat.seatLine }}{{ seat.seatNumber }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="full-width">
                            <div class="seat-vip" v-for="(seat, i) in seats.slice(138, 153)" :key="i">
                                <div class="seat"  v-if="seat.seatType === 2" style="text-align: center; background-image: url('https://www.betacinemas.vn/Assets/global/img/booking/seat-unselect-vip.png'); background-repeat: no-repeat; background-size: 35px 35px; background-position: center; width: 40px; height: 40px; display: inline-block; font-size: 11px; align-items: center; justify-content: center; margin-right: 8px;">
                                    <span style="margin: auto !important; line-height: 3;">{{ seat.seatLine }}{{ seat.seatNumber }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="full-width">
                            <div class="seat-vip"  v-for="(seat, i) in seats.slice(153, 171)" :key="i">
                                <div class="seat"  v-if="seat.seatType === 2" style="text-align: center; background-image: url('https://www.betacinemas.vn/Assets/global/img/booking/seat-unselect-vip.png'); background-repeat: no-repeat; background-size: 35px 35px; background-position: center; width: 40px; height: 40px; display: inline-block; font-size: 11px; align-items: center; justify-content: center; margin-right: 8px;">
                                    <span style="margin: auto !important; line-height: 3;">{{ seat.seatLine }}{{ seat.seatNumber }}</span>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>              
          </div>
          <div class="seat-type-panel" style="padding-top: 15px;width: 99%;border-radius: 10px;">
            <div class="row" style="padding-left: 40px;">
                <div class="col-lg-3 col-12" style="padding-top: 0;padding-bottom: 8px;">
                    <div class="row seat-type">
                        <div class="col-lg-3 col-4" style="padding: 0 !important;display: flex;align-items: center;">
                            <img  style="width: 40px;height: 40px;" src="/img/seat-unselect-normal-intro.png" alt="">
                        </div>
                        <span class="col-lg-8 col-4" style="font-size: 18px;margin-left: 8px;font-weight: bold;">Ghế thường</span>
                        <span class="col-12 value-money" style="padding-top:10px ;padding-bottom: 0;text-align: center;">111</span>
                    </div>
                </div>
                <div class="col-lg-2 col-12" style="padding-top: 0;padding-bottom: 0;">
                    <div class="row seat-type">
                        <div class="col-lg-3 col-4" style="padding: 0 !important;display: flex;align-items: center;">
                            <img  style="width: 40px;height: 40px" src="/img/seat-unselect-vip.png" alt="">
                        </div>
                        <span class="col-lg-8 col-4" style="font-size: 18px;margin-left: 8px;font-weight: bold">Ghế VIP</span>
                        <span class="co-12 value-money" style="padding-top:10px ;padding-bottom: 0;text-align: center;">111</span>
                    </div>
                </div>
                <div class="col-lg-2 col-12" style="border-right: 2px solid #d8d8d8;padding-top: 0;padding-bottom: 8px;">
                    <div class="row seat-type">
                        <div class="col-lg-3 col-4" style="padding: 0 !important;display: flex;align-items: center;">
                            <img class="image-seat-double" style="width: 40px;height: 20px" src="/img/seat-unselect-double.png" alt="">
                        </div>
                        <span class="col-lg-8 col-4" style="font-size: 18px;margin-left: 8px;font-weight: bold">Ghế đôi</span>
                        <span  class="col-12 value-money" style="padding-top:10px ;padding-bottom: 0;text-align: center;"></span>
                    </div>
                </div>
                <div class="col-lg-3 col-12 money" style="border-right: 2px solid #d8d8d8;padding-top: 0;padding-bottom: 8px;">
                    <div class="row seat-type" style="margin-top: 10px;">
                        <p class="col-lg-12 col-4 total-money" style="margin-bottom: 8px;font-size: 18px;margin-left: 8px;font-weight: bold;float: left;padding-left:0 ;padding-top: 5px;">Tổng tiền</p>
                        <p class="col-lg-12 col-4 result-money" style="padding-top:0;padding-bottom: 0;text-align: center;margin-top: 30px;">{{ totalMoney }}</p>
                        <div class="col-4 d-lg-none"></div>
                    </div>
                </div>
                <div id="time" class="col-lg-2 col-12" style="padding-top: 0;">
                    <h1>
                        {{ timeFormatted }}
                    </h1>
            </div>
            </div>
          </div>
      </div>
      <div v-else>
            <h1>hello world</h1>
      </div>
      <div class="col-lg-4 d-lg-block d-md-none d-block info-schedule-1">
        <div class="content-schedule" style="background-color: white;border-radius: 10px;height: 100%;">
            <div class="row">
                <div class="col-6" style="padding-top: 0;">
                    <img :src="movieDetail.image" alt="" style="width: 155px;height: 236px;border-radius: 10px;">
                </div>
                <div class="col-6" style="padding-top: 20px;">
                    <h3 style="font-size: 23px;color: #03599d;font-weight: 700;">{{ movieDetail.name }}</h3>
                    <h5 style="font-weight: 300;">Phụ đề</h5>
                </div>
            </div> 
                <div class="row" style="padding-left: 35px;">
                    <div class="col-5" style="display: flex;align-items: center;padding-top: 0 !important;">
                        <font-awesome-icon :icon="['fas', 'tags']" style="font-size: 14px;color: black;" />
                        <p style="margin-left: 10px;">Thể loại</p>
                    </div>
                    <div class="col-7" style="float: left;padding-top: 0;">
                        <p v-for = "(type,i) in movieDetail.movieType" :key="i"><b >{{ type }}</b></p>
                    </div>
                </div>
                <div class="row" style="padding-left: 35px;">
                    <div class="col-5" style="display: flex;align-items: center;">
                        <font-awesome-icon :icon="['fas', 'clock']" style="font-size: 14px;color: black;" />
                        <p style="margin-left: 10px;">Thời lượng</p>
                    </div>
                    <div class="col-7" style="float: left;">
                        <p><b>{{ movieDetail.duration}} phút</b></p>
                    </div>
                </div>
                <hr style="border-top: 2px dashed black ;">
                <div class="row"  style="padding-left: 35px;">
                    <div class="col-5" style="display: flex;align-items: center;">
                        <font-awesome-icon :icon="['fas', 'building-columns']" style="font-size: 14px;color: black;" />
                        <p style="margin-left: 10px;">Rạp chiếu</p>
                    </div>
                    <div class="col-7" style="float: left;">
                        <p><b>{{ nameOfCinema }}</b></p>
                    </div>
                </div>
                <div class="row"  style="padding-left: 35px;">
                    <div class="col-5" style="display: flex;align-items: center;">
                        <font-awesome-icon :icon="['fas', 'calendar-days']"  style="font-size: 14px;color: black;" />
                        <p style="margin-left: 10px;">Ngày chiếu</p>
                    </div>
                    <div class="col-7" style="float: left;">
                        <p><b>{{ 1233 }}</b></p>
                    </div>
                </div>
                <div class="row" style="padding-left: 35px;">
                    <div class="col-5" style="display: flex;align-items: center;">
                        <font-awesome-icon :icon="['fas', 'clock']" style="font-size: 14px;color: black;"/>
                        <p style="margin-left: 10px;">Giờ chiếu</p>
                    </div>
                    <div class="col-7" style="float: left;">
                        <p><b>{{ 1234 }}</b></p>
                    </div>
                </div>
                <div class="row"  style="padding-left: 35px;">
                    <div class="col-5" style="display: flex;align-items: center;">
                        <font-awesome-icon :icon="['fas', 'desktop']" style="font-size: 14px;color: black;" />
                        <p style="margin-left: 10px;">Phòng chiếu</p>
                    </div>
                    <div class="col-7" style="float: left;">
                        <p><b>{{ 1234 }}</b></p>
                    </div>
                </div>
                <div class="row"  style="padding-left: 35px;">
                    <div class="col-5" style="display: flex;align-items: center;">
                        <font-awesome-icon :icon="['fas', 'cubes']" style="font-size: 14px;color: black;" />
                        <p style="margin-left: 10px;">Ghế ngồi</p>
                    </div>
                    <div class="col-7" style="float: left;">
                        <p><span v-for ="(seat,i) in seatSelected" :key ="i">{{ seat }}</span></p>
                    </div>
                </div>
                <div style="display: flex;justify-content: center;margin-bottom: 20px;">
                        <button 
                        @click="showBookTicket"
                        style="width: 126px;height:41px;
                        background-image: linear-gradient(to right, #0a64a7 0%, #258dcf 51%, #3db1f3 100%) !important;
                        color: #fff;border-radius: 5px;">
                        TIẾP TỤC</button> 
                </div>

        </div>
      </div>

          <div class="d-lg-none d-md-block d-none" style="border-radius: 10px;padding-right: 0;margin-top: 20px;display: flex !important;margin-bottom: 30px;padding-top: 10px;">
            <div class="row info-schedule-2 d-lg-none d-md-block d-none" style="background-color: white; border-radius: 10px;width: 100%;">
                <div class="col-6" style="padding-left: 0;padding-top: 0;">
                    <div class="image" style="width: 335px;height: 530px;">
                        <img style="width: 100%; height: 100%;border-radius: 10px;" :src="movieDetail.image" alt="">
                    </div>
                </div>
                <div class="col-6" style="padding-top: 0;">
                    <h3 style="color:#03599d;margin-top: 10px;">{{ movieDetail.name }}</h3>
                    <h4>Phụ đề</h4>
                    <div class="row" style="margin-top: 20px;padding-left: 35px;margin-bottom: 30px;">
                        <div class="col-md-5" style="display: flex;align-items: center;">
                            <font-awesome-icon :icon="['fas', 'tags']" style="font-size: 14px;color: black;" />
                            <p style="margin-left: 10px;">Thể loại</p>
                        </div>
                        <div class="col-md-7" style="float: left;">
                            <p v-for = "(type,i) in movieDetail.movieType" :key="i"><b >{{ type }}</b></p>
                        </div>
                    </div>
                    <div class="row" style="margin-top: 20px;padding-left: 35px;margin-bottom: 30px;">
                        <div class="col-md-5" style="display: flex;align-items: center;">
                            <font-awesome-icon :icon="['fas', 'clock']" style="font-size: 14px;color: black;" />
                            <p style="margin-left: 10px;">Thời lượng</p>
                        </div>
                        <div class="col-md-7" style="float: left;">
                            <p><b>{{ movieDetail.duration}} phút</b></p>
                        </div>
                    </div>
                    <hr style="border-top: 2px dashed black ;">
                    <div class="row"  style="margin-top: 20px;padding-left: 35px;margin-bottom: 30px;">
                        <div class="col-md-5" style="display: flex;align-items: center;">
                            <font-awesome-icon :icon="['fas', 'building-columns']" style="font-size: 14px;color: black;" />
                            <p style="margin-left: 10px;">Rạp chiếu</p>
                        </div>
                        <div class="col-md-7" style="float: left;">
                            <p><b>{{ nameOfCinema}}</b></p>
                        </div>
                    </div>
                    <div class="row"  style="margin-top: 20px;padding-left: 35px;margin-bottom: 30px;">
                        <div class="col-md-5" style="display: flex;align-items: center;">
                            <font-awesome-icon :icon="['fas', 'calendar-days']"  style="font-size: 14px;color: black;" />
                            <p style="margin-left: 10px;">Ngày chiếu</p>
                        </div>
                        <div class="col-md-7" style="float: left;">
                            <p><b>{{ 111 }}</b></p>
                        </div>
                    </div>
                    <div class="row" style="margin-top: 20px;padding-left: 35px;margin-bottom: 30px;">
                        <div class="col-md-5" style="display: flex;align-items: center;">
                            <font-awesome-icon :icon="['fas', 'clock']" style="font-size: 14px;color: black;"/>
                            <p style="margin-left: 10px;">Giờ chiếu</p>
                        </div>
                        <div class="col-md-7" style="float: left;">
                            <p><b>{{ 111 }}</b></p>
                        </div>
                    </div>
                    <div class="row"  style="margin-top: 20px;padding-left: 35px;margin-bottom: 30px;">
                        <div class="col-md-5" style="display: flex;align-items: center;">
                            <font-awesome-icon :icon="['fas', 'desktop']" style="font-size: 14px;color: black;" />
                            <p style="margin-left: 10px;">Phòng chiếu</p>
                        </div>
                        <div class="col-md-7" style="float: left;">
                            <p><b>{{ 111 }}</b></p>
                        </div>
                    </div>
                    <div class="row"  style="margin-top: 20px;padding-left: 35px;margin-bottom: 30px;">
                        <div class="col-md-5" style="display: flex;align-items: center;">
                            <font-awesome-icon :icon="['fas', 'cubes']" style="font-size: 14px;color: black;" />
                            <p style="margin-left: 10px;">Ghế ngồi</p>
                        </div>
                        <div class="col-md-7" style="float: left;">
                            <p><span v-for ="(seat,i) in seatSelected" :key ="i">{{ seat }}</span></p>
                        </div>
                    </div>
                    <div style="display: flex;justify-content: center;margin-bottom: 20px;">
                            <button 
                            @click="showBookTicket"
                            style="width: 126px;height:41px;
                            background-image: linear-gradient(to right, #0a64a7 0%, #258dcf 51%, #3db1f3 100%) !important;
                            color: #fff;border-radius: 5px;">
                            TIẾP TỤC</button>     
                    </div>
                </div>  
            </div>

          </div>
    </div>
  </div>
</div>

</template>

<script setup>
import { useBooking } from '~/composables/booking/useBooking'
import { useBookingStore } from '~/stores/user/useBookingStore';


const route  = useRoute()
const isActive = ref(true)
const {
    nameOfCinema,
    movieDetail,
    totalMoney,
    seatSelected,
    note_seat_status,
    seats
} = useBooking()



const getData =  () => {
    
}




const check = () => {
    useBookingStore().getAllSeat(route.params.schedule);
   
}
const currentColorIndex = ref(0);
const colors = ref(['rgb(254, 185, 82)', 'rgb(243, 230, 192)']);
const currentColor = ref(colors.value[currentColorIndex.value]);



const time = ref(120)

const timeFormatted = computed(() => {
  const minutes = Math.floor(time.value / 60); // Lấy số phút
  const seconds = time.value % 60; // Lấy số giây
  return `${minutes}:${seconds.toString().padStart(2, '0')}`; // Định dạng thời gian
});

onMounted(() => {

    getData()
    setInterval(() => {
        time.value = time.value - 1
    },1000)

    setInterval(() => {
    currentColorIndex.value = (currentColorIndex.value + 1) % colors.value.length;
    currentColor.value = colors.value[currentColorIndex.value];
  }, 1000); 

    
});

const bookingSeat = (seat) => {
    if(seat.seatStatus === 3 || seat.seatStatus === 4){
       console.log('block')
    }
    if(seat.seatStatus === 1 && seat.seatType === 1){
            
    }
    else if(seat.seatStatus === 1 && seat.seatType === 2){
        const seatStatus = 2;
        const seatId = seat.id;
        const movieId = movieDetail.value.movieId;
        const dayMonthYear = dayMonthYearSelected.value;
        const room = roomId.value
        const start = startTime.value
        const seatLine = seat.seatLine
        const seatNumber = seat.seatNumber
        const seatStatusCurren = seat.seatStatus;
        priceBySeatVip.value = priceBySeatVip.value + priceBySchedule.value + 10000;
        sessionStorage.setItem('priceBySeatVip', JSON.stringify(priceBySeatVip.value));
        isSelectedSeatVip.value = true;
        isShowTotalMoney.value = true;
        store.dispatch('seat/changeSeatStatus',{ dayMonthYear,start,movieId,room,seatStatus,seatId})
        seat.seatStatus = 2
        seatTypeVip.value = 'GHẾ VIP'
        sessionStorage.setItem('seatTypeVip', JSON.stringify(seatTypeVip.value ));
        store.dispatch('seat/saveSeatSelected',{ seatLine, seatNumber,seatStatusCurren } )
    }    
    else if(seat.seatStatus === 1 && seat.seatType === 3){
        const seatStatus = 2;
        const seatId = seat.id;
        const movieId = movieDetail.value.movieId;
        const dayMonthYear = dayMonthYearSelected.value;
        const room = roomId.value
        const start = startTime.value
        const seatLine = seat.seatLine
        const seatNumber = seat.seatNumber
        const seatStatusCurren = seat.seatStatus;
        priceBySeatDouble.value = priceBySeatDouble.value + (priceBySchedule + 10000) * 2
        sessionStorage.setItem('priceBySeatDouble', JSON.stringify(priceBySeatDouble.value ));
        isSelectedSeatDouble.value = true;
        isShowTotalMoney.value =true;
        store.dispatch('seat/changeSeatStatus',{ dayMonthYear,start,movieId,room,seatStatus,seatId})
        seat.seatStatus = 2
        seatTypeDouble.value = 'GHẾ ĐÔI'
        sessionStorage.setItem('seatTypeDouble', JSON.stringify(seatTypeDouble.value ));
        store.dispatch('seat/saveSeatSelected',{ seatLine, seatNumber,seatStatusCurren } )
    }
    else if (seat.seatStatus === 2 && seat.seatType === 1){
        const seatStatus = 1;
        const seatId = seat.id;
        const movieId = movieDetail.value.movieId;
        const dayMonthYear = dayMonthYearSelected.value;
        const room = roomId.value
        const start = startTime.value
        const seatLine = seat.seatLine
        const seatNumber = seat.seatNumber
        const seatStatusCurren = seat.seatStatus;
        if(priceBySeatNormal.value > 0 ){
            priceBySeatNormal.value = priceBySeatNormal.value - priceBySchedule.value;
        }
        sessionStorage.setItem('priceBySeatNormal', JSON.stringify(priceBySeatNormal.value));
        if(priceBySeatNormal.value === 0){
            isSelectedSeatNormal.value = false;
        }
        if(totalMoney.value <= 0){
            isShowTotalMoney.value = false;
        }
        store.dispatch('seat/changeSeatStatus',{ dayMonthYear,start,movieId,room,seatStatus,seatId})
        seat.seatStatus = 1
        store.dispatch('seat/saveSeatSelected',{ seatLine, seatNumber,seatStatusCurren } )
    }
    else if (seat.seatStatus === 2 && seat.seatType === 2){
        const seatStatus = 1;
        const seatId = seat.id;
        const movieId = movieDetail.value.movieId;
        const dayMonthYear = dayMonthYearSelected.value;
        const room = roomId.value
        const start = startTime.value
        const seatLine = seat.seatLine
        const seatNumber = seat.seatNumber
        const seatStatusCurren = seat.seatStatus;
        if(priceBySeatVip > 0){
            priceBySeatVip.value = priceBySeatVip.value - (priceBySchedule.value + 10000);
        } 
        sessionStorage.setItem('priceBySeatVip', JSON.stringify(priceBySeatVip.value));
        if(priceBySeatVip.value === 0){
            isSelectedSeatVip.value = false;
        }
        if(totalMoney.value <= 0){
            isShowTotalMoney.value = false;
        }
        store.dispatch('seat/changeSeatStatus',{ dayMonthYear,start,movieId,room,seatStatus,seatId})
        seat.seatStatus = 1
        store.dispatch('seat/saveSeatSelected',{ seatLine, seatNumber,seatStatusCurren } )
    }
    else if (seat.seatStatus === 2 && seat.seatType === 3){
        const seatStatus = 1;
        const seatId = seat.id;
        const movieId = movieDetail.value.movieId;
        const dayMonthYear = dayMonthYearSelected.value;
        const room = roomId.value
        const start = startTime.value
        const seatLine = seat.seatLine
        const seatNumber = seat.seatNumber
        const seatStatusCurren = seat.seatStatus;
        if(priceBySeatDouble > 0){
            priceBySeatDouble.value = priceBySeatDouble.value - (priceBySchedule.value + 10000) *2;
        }
        sessionStorage.setItem('priceBySeatDouble', JSON.stringify(priceBySeatDouble.value));
        if(priceBySeatDouble.value === 0){
            isSelectedSeatDouble.value = false;  
        }
        if(totalMoney.value <= 0){
            isShowTotalMoney.value = false;
        }
        store.dispatch('seat/changeSeatStatus',{ dayMonthYear,start,movieId,room,seatStatus,seatId})
        seat.seatStatus = 1
        store.dispatch('seat/saveSeatSelected',{ seatLine, seatNumber,seatStatusCurren } )
    }
}

</script>

<style scoped>
@media only screen and (min-width: 1300px) {
    .screenImage {
        width: 856px !important;
        height: 96px !important;
    }
    .show-seats{
        width: 70% !important;
    }

}
@media only screen and (max-width:992px) {
    .total-money{
        padding-top: 15px !important;
        text-align: start;
        margin-left: 0 !important;
    }
    .value-money{
        padding-top: 0 !important ;
        text-align: end !important;
    }
    .money .seat-type{
        border-top:1px solid #d8d8d8 ;
    }
    .result-money{
        padding-top: 15px !important;
    }

    .seat-type{
        text-align: center !important;
        padding-right: 20px !important;
    }
}
@media only screen and (min-width: 992px) and (max-width:1300px) {
    .screenImage {
        width: 856px !important;
        height: 96px !important;
    }
    .container {
        width: 93% !important;
    }

}
@media only screen and (min-width: 800px) and (max-width: 992px){
    .screenImage {
        width: 856px !important;
        height: 96px !important;
    }
    .title-info p {
        font-size: 12px !important;
    }
    .container{
        width: 90% !important;
    }
    .image-seat-double{
        width: 50px !important;
        height: 25px !important;
    }

@media only screen and (min-width: 768px) and (max-width: 992px){
    .info-schedule-2  {
        display: flex !important;
    }
    .result-money{
        margin-top: 0 !important;
    }
}
}
@media only screen and (min-width: 650px) and (max-width: 800px){
    .screenImage {
        width: 856px !important;
        height: 96px !important;
    }
    .container{
        width: 93% !important;
    }
        .result-money{
        margin-top: 0 !important;
    }
    .result-money{
        margin-top: 0 !important;
    }
}
/* @media only screen and (min-width: 650px) and (max-width: 768px){
    .infor-schedule-2 .col-6 .image {
        width: 280px !important;
        height: 480px !important;
    }
} */
@media only screen and (max-width: 650px){
    .screenImage {
        width: 856px !important;
        height: 96px !important;
    }
    .title-info p {
        font-size: 10px !important;
    } 
    .container {
        width: 95% !important;
    }
}
@media only screen and (max-width: 768px){
    .info-schedule-1 {
        margin-top: 20px;
    }
    .result-money{
        margin-top: 0 !important;
    }
}
.room-over-view > .row {
    overflow-x: auto;
    white-space: nowrap;
}

.seat-vip {
    display: inline-block;
}
.seat-normal {
    display: inline-block;
}
.seat{
    width: 40px;
    height: 40px;
    display: inline-block;
    font-size: 11px;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    background-image: url(https://betacinemas.vn/Assets/global/img/booking/seat-unselect-normal.png);
    background-repeat: no-repeat ;
    background-size: 35px 35px ;
    background-position: center;
}
.seat-type-panel{
    margin-top: 40px;
    background-color: white;
}
.content-schedule{
    transition: tranform 0.2s ease;
}
.content-schedule:hover {
    transform: translateY(-1px);
}
</style>