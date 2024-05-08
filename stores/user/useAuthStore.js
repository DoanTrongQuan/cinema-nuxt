
import { defineStore } from "pinia";
import { changePassword } from "~/repositories/cinema/authRepo"



export const useAuthStore = defineStore({
  id: "authStore",
  state: () => ({


  }),
  getters: {},
  actions: {
    async changePassword(data){
        try {
          const res = await changePassword(data)
        } catch (error) {  
        }
    },

  }
});
