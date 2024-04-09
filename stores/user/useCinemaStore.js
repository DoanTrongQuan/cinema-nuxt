import { defineStore } from "pinia";

let nameOfCinemaSessionStorage = '';


// Kiểm tra xem có phải đang chạy trên client hay không
if (process.client) {

  nameOfCinemaSessionStorage = JSON.parse(sessionStorage.getItem('nameOfCinema'));
} else {
  // Nếu đang chạy trên server, không sử dụng sessionStorage
  nameOfCinemaSessionStorage = 'Beta Mỹ Đình';
}

export const useCinemaStore = defineStore({
  id: "cinemaStore",

  state: () => ({
    nameOfCinema: nameOfCinemaSessionStorage,
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
  actions: {}
});
