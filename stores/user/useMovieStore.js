
import { defineStore } from "pinia";
import { getAllMovieByCinema } from '~/repositories/cinema/movieRepo';
import { useCinemaStore } from "@/stores/user/useCinemaStore.js";


export const useMovieStore = defineStore({
  id: "movieStore",
  state: () => ({
    movies: [],
  
  }),
  getters: {},
  actions: {
    async getAllMovieByCinema(){
        try {
          const res = await getAllMovieByCinema(useCinemaStore().nameOfCinema)
          this.movies = res.data;
        } catch (error) {

          
        }
    }
  }
});
