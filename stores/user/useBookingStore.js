
import { defineStore } from "pinia";
import { getAllSeat } from '~/repositories/cinema/bookingRepo';
import { useCinemaStore } from "@/stores/user/useCinemaStore.js";


export const useMovieStore = defineStore({
  id: "movieStore",
  state: () => ({
    seats:[]

  }),
  getters: {},
  actions: {
    async getAllSeat(){
        try {
          const res = await getAllSeat(data)
          this.seats = res.data;
        } catch (error) {  
        }
    },
  }
});
