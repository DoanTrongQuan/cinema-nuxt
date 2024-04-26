
import { defineStore } from "pinia";
import { getAllSeat, updateSeatStatus } from '~/repositories/cinema/bookingRepo';
import { useCinemaStore } from "@/stores/user/useCinemaStore.js";


export const useBookingStore = defineStore({
  id: "bookingStore",
  state: () => ({
    seats:[]

  }),
  getters: {},
  actions: {
    async getAllSeat(data){
        try {
          const res = await getAllSeat(data)
          this.seats = res.data;

        } catch (error) {  
          console.log(error);
        }
    },

    async updateSeatStatus(data) {
      try {
        const res = await updateSeatStatus(data);

        // for (const seat of this.seats) {
        //   if (seat.id === res.data.id) {
        //     seat.seatStatus = res.data.seatStatus;
        //     seat.userId = res.data.userId;
        //     break;
        //   }
        // }

      } catch (error) {
        alert("error server, please try again");
      }
    },
    updateLocalSeat(newValue){
      for (let seat of this.seats) {
          if (seat.id === newValue.seatId ) {
            seat.seatStatus = newValue.seatStatus;
            seat.userId = newValue.userId;
            break;
          }
        }
    }
  }
});
