
import { defineStore } from "pinia";
import { getAllCinema } from '~/repositories/cinema/dataCinemasRepo';
import { useSyncCookieState } from '~/composables/useSyncCookieState';
// import {useSyncSessionStorageState} from '~/composables/useSyncSessionStorageState';

// let nameOfCinemaSessionStorage = '';
// // Kiểm tra xem có phải đang chạy trên client hay không
// if (process.client) {

//   nameOfCinemaSessionStorage = JSON.parse(sessionStorage.getItem('nameOfCinema'));
// } else {
//   // Nếu đang chạy trên server, không sử dụng sessionStorage
//   nameOfCinemaSessionStorage = 'Beta Mỹ Đình';
// }


export const useCinemaStore = defineStore({
  id: "cinemaStore",

  state: () => ({
    // nameOfCinema: useCookie('nameOfCinema').value || 'Beta Mỹ Đình',
    nameOfCinema: useSyncCookieState({ cookieName: 'nameOfCinema'}) || 'Beta Mỹ Đình',

    cinemas: [
      { address: 'Hà Nội', children: [] },
      { address: 'TP.Hồ Chí Minh', children: [] },
      { address: 'Bắc Giang', children: [] },
      { address: 'Đồng Nai', children: [] },
      { address: 'Khánh Hòa', children: [] },
      { address: 'Thái Nguyên', children: [] },
      { address: 'Thanh Hóa', children: [] },
      { address: 'Bà Rịa-Vũng Tàu', children: [] },
      { address: 'Bình Dương', children: [] },
      { address: 'Kiên Giang', children: [] },
      { address: 'Lào Cai', children: [] }
    ]
  }),
  getters: {},
  actions: {
    async getAllCinemas  ()  {
      for (const cinema of this.cinemas) {
        try {
            const address = cinema.address;
            const res = await getAllCinema(address);
            cinema.children = res.data; 
        } catch (error) {
            // console.error('Error:', error);
        }
    }
    },
    
    async setNameOfCinema (name) {
      const cookie = useCookie('nameOfCinema');
      const expirationDate = new Date();
      // Set expiration time in days (e.g., 7 days)
      expirationDate.setTime(expirationDate.getTime() + (5 * 60 * 1000));

      cookie.value = name;
      cookie.expires = expirationDate; 
      this.nameOfCinema = name;
      console.log(this.nameOfCinema);
    },
  }
});
