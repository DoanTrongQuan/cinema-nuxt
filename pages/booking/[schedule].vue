<template>
  <div style="background-color: #f8f8f8;">
    <div class="container" style="width: 81%;padding-top: 10px;">
    <div class="row">
      <div v-if="isShowFood" class="col-lg-8 col-md-12" style="">
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
                              <div v-if ="seat.seatStatus === 4" style="text-align: center; background-image: url('/img/seat-buy-normal.png'); background-repeat: no-repeat; background-size: 35px 35px; background-position: center; width: 40px; height: 40px; display: inline-block; font-size: 11px; align-items: center; justify-content: center; margin-right: 8px;color: white;">
                                <span style="margin: auto !important; line-height: 3;">{{ seat.seatLine }}{{ seat.seatNumber }}</span>
                              </div>
                              <div v-else-if="seat.seatStatus === 3 && seat.userId === userID" style="text-align: center; background-image: url('/img/seat-select-normal.png'); background-repeat: no-repeat; background-size: 35px 35px; background-position: center; width: 40px; height: 40px; display: inline-block; font-size: 11px; align-items: center; justify-content: center; margin-right: 8px;color: white;">
                                <span style="margin: auto !important; line-height: 3;">{{ seat.seatLine }}{{ seat.seatNumber }}</span>
                              </div>
                              <div v-else-if="seat.seatStatus === 3" style="text-align: center; background-image: url('/img/seat-process-normal.png'); background-repeat: no-repeat; background-size: 35px 35px; background-position: center; width: 40px; height: 40px; display: inline-block; font-size: 11px; align-items: center; justify-content: center; margin-right: 8px;color: white;">
                                <span style="margin: auto !important; line-height: 3;">{{ seat.seatLine }}{{ seat.seatNumber }}</span>
                              </div>
                              <div v-else-if="seat.seatStatus === 1 && seat.seatType == 1" class="seat" style="text-align: center; background-image: url('/img/seat-unselect-normal.png');">
                                <span style="margin: auto !important; line-height: 3;">{{ seat.seatLine }}{{ seat.seatNumber }}</span>
                              </div>
                            </div>
                        </div>
                        <div class="full-width">
                            <div class="seat-vip" v-for="(seat, i) in seats.slice(18, 36)" :key="i"  @click="bookingSeat(seat)" style="cursor: pointer;">                
                                <div v-if ="seat.seatStatus == 3 && seat.userId === userID" style="text-align: center; background-image: url('/img/seat-select-vip.png'); background-repeat: no-repeat; background-size: 35px 35px; background-position: center; width: 40px; height: 40px; display: inline-block; font-size: 11px; align-items: center; justify-content: center; margin-right: 8px;color: white;" >
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
                        
                        <span v-if = "seatNormal.seatSelectedCount != 0" class="col-12 value-money" style="padding-top:10px ;padding-bottom: 0;text-align: center;">{{ seatNormal.seatSelectedCount }} x {{ seatNormal.price }}</span>
                    </div>
                </div>
                <div class="col-lg-2 col-12" style="padding-top: 0;padding-bottom: 0;">
                    <div class="row seat-type">
                        <div class="col-lg-3 col-4" style="padding: 0 !important;display: flex;align-items: center;">
                            <img  style="width: 40px;height: 40px" src="/img/seat-unselect-vip.png" alt="">
                        </div>
                        <span class="col-lg-8 col-4" style="font-size: 18px;margin-left: 8px;font-weight: bold">Ghế VIP</span>
                        <span v-if ="seatVip.seatSelectedCount != 0" class="co-12 value-money" style="padding-top:10px ;padding-bottom: 0;text-align: center;">{{ seatVip.seatSelectedCount }} x {{ seatVip.price }}</span>
                    </div>
                </div>
                <div class="col-lg-2 col-12" style="border-right: 2px solid #d8d8d8;padding-top: 0;padding-bottom: 8px;">
                    <div class="row seat-type">
                        <div class="col-lg-3 col-4" style="padding: 0 !important;display: flex;align-items: center;">
                            <img class="image-seat-double" style="width: 40px;height: 20px" src="/img/seat-unselect-double.png" alt="">
                        </div>
                        <span class="col-lg-8 col-4" style="font-size: 18px;margin-left: 8px;font-weight: bold">Ghế đôi</span>
                        <span v-if ="seatDouble.seatSelectedCount != 0" class="col-12 value-money" style="padding-top:10px ;padding-bottom: 0;text-align: center;">{{ seatDouble.seatSelectedCount }} x {{ seatDouble.price }}</span>
                    </div>
                </div>
                <div class="col-lg-3 col-12 money" style="border-right: 2px solid #d8d8d8;padding-top: 0;padding-bottom: 8px;">
                    <div class="row seat-type" style="margin-top: 10px;">
                        <p class="col-lg-12 col-4 total-money" style="margin-bottom: 8px;font-size: 18px;margin-left: 8px;font-weight: bold;float: left;padding-left:0 ;padding-top: 5px;">Tổng tiền</p>
                        <p v-if ="totalMoney != 0" class="col-lg-12 col-4 result-money" style="padding-top:0;padding-bottom: 0;text-align: center;margin-top: 30px;">{{ totalMoney }}</p>
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
            <h1>hello y</h1>
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
import { useSocket } from '~/composables/useSocket';
import { useProfile } from '~/composables/Profile/useProfile';
import User from '../management/user.vue';

const route  = useRoute()
const router  = useRouter()
const isActive = ref(true)
const bookingStore = useBookingStore()
const { userID } = useProfile()
const isShowFood = ref(false)

const {
    nameOfCinema,
    movieDetail,
    note_seat_status,
    
} = useBooking()
      

const {
    stompClient,
    message,
    content,
    connect,
    disconnect,
    sendMessage
}  = useSocket()

const seats = computed(() => {
    return bookingStore.seats;
})
const seatNormal = computed(() => {
    return bookingStore.seatNormal;
})
const seatVip = computed(()=>{
    return bookingStore.seatVip;
})
const seatDouble = computed(()=> {
    return bookingStore.seatDouble;
})
const totalMoney = computed(() => {
    return bookingStore.totalMoney;
})

const seatSelected = computed(() => {
    return bookingStore.seatSelected
})
//mỗi khi khởi tạo sẽ call api lấy dữ liệu mới nhất
bookingStore.getAllSeat(route.params.schedule);

//tao bill
bookingStore.createBill()

const check = () => {
    // connect('http://localhost:8089/booking','/topic/seatStatus',seatResult) 
    // console.log(route.query.user)
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

const checkConnect = () => {  
}

const seatResult = ref({})

watch(()=>seatResult.value,(newValue, oldValue) => {
    console.log('watch result');
    bookingStore.updateLocalSeat(newValue)
      
})

watch(() => time.value, (newValue, oldValue) => {
    if(parseInt(newValue) === 119){
        bookingStore.resetSeatStatus(route.params.schedule)
    }
})

onMounted(() => {
    
    //nếu user không đúng thì sẽ push về trang home
    // if(route.query.user != userID.value) {
    //     router.replace('/home')
    // }
    setInterval(() => {
        time.value = time.value - 1
    },1000)

    setInterval(() => {
    currentColorIndex.value = (currentColorIndex.value + 1) % colors.value.length;
    currentColor.value = colors.value[currentColorIndex.value];
  }, 1000); 

    connect('http://localhost:8089/booking',`/topic/seatStatus/${route.params.schedule}`,seatResult) 
});

onBeforeUnmount(() => {
    disconnect()
})

const currentSeat = ref({
            seatId:0,
            userId: userID.value,
            status:0,
            schedule: +route.params.schedule,
            seatType:0
})

const bookingSeat = ( seat ) => {
    if ( seat.seatStatus === 3 && seat.userId === userID.value ){
        currentSeat.value =  { 
            seatId: seat.id, 
            status:1,
            schedule:currentSeat.value.schedule, 
            userId: currentSeat.value.userId ,
            seatType: seat.seatType 
        }
        
        bookingStore.updateSeatStatus(currentSeat.value)
        sendMessage("/app/booking",currentSeat.value)
    }
    // Xử lí khi seat trống 
    if (seat.seatStatus === 1){
        currentSeat.value =  { 
            seatId: seat.id, 
            status:3,
            schedule:currentSeat.value.schedule, 
            userId: currentSeat.value.userId,
            seatType: seat.seatType   
        }
        bookingStore.updateSeatStatus(currentSeat.value)
        sendMessage("/app/booking",currentSeat.value)        
    }
    // Nếu seat = 4 (đã bán ) hoặc seat = 3 ( đang được giữ ) thì return
    if (seat.seatStatus === 3 && seat.userId != userID.value) {
        alert('Ghế đang được giữ')
    }
    if(seat.seatStatus === 4){
        alert("Ghế đã được bán")
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
    /* background-image: url(https://betacinemas.vn/Assets/global/img/booking/seat-unselect-normal.png); */
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