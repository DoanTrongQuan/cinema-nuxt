// import { useCinemaStore } from "~/stores/user/useCinemaStore";
import { useMovieStore } from "@/stores/user/useMovieStore.js";

export const useMovie = () => {

  const movies = computed(() => {
    return useMovieStore().movies;
  })


//   // Lấy ngày hiện tại
const today = new Date();

// Tạo một mảng các ngày trong tuần, bắt đầu từ thứ 2 đến chủ nhật
const daysOfWeek = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];

// Lấy index của ngày hiện tại trong mảng daysOfWeek
const todayIndex = today.getDay();

// Số lượng tab sẽ phụ thuộc vào ngày hiện tại
const numberOfTabs = 7 - todayIndex;

// Tạo mảng items dựa trên số lượng tab
const tabSchedule = [];

for (let i = 0; i <= numberOfTabs; i++) {
    const day = daysOfWeek[(todayIndex + i) % 7]; // Vòng lặp để xử lý trường hợp ngày hiện tại là chủ nhật
    const label = `${day} ${today.getDate() + i}/${today.getMonth() + 1}`; // Thêm ngày và tháng vào nhãn tab
    tabSchedule.push(label);

}



  const isShowIconPlay = ref(Array(movies.length).fill(false));
  const isShowOverlay = ref(Array(movies.length).fill(false));

  const showIconPlayAndOverlay = (i, value) => {
    isShowIconPlay.value[i] = value;
    isShowOverlay.value[i] = value;
  }
  ;
  const isShowTrailer = ref(false);
  const currentMovieTrailer = ref('');

  const openDialogTrailer = (movieTrailer) => {
    isShowTrailer.value = true;
    currentMovieTrailer.value = movieTrailer;
  };
  return {
    movies,
    isShowIconPlay,
    isShowOverlay,
    showIconPlayAndOverlay,
    isShowTrailer,
    currentMovieTrailer,
    openDialogTrailer,
    tabSchedule
  }

}
