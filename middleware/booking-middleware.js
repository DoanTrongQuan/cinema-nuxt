// import { useCinemaStore } from "~/stores/user/useCinemaStore";
// import { useMovieStore } from "@/stores/user/useMovieStore.js";
// import { useToken } from '~/composables/authentication/useToken';
// import { useProfile } from '~/composables/Profile/useProfile';


// export default defineNuxtRouteMiddleware(async (to, from) => {
//   const router = useRouter();
//   const movieStore = useMovieStore();
//   const { accessToken } = useToken()
//   const { userID } = useProfile()
//   const isSignIn = Boolean(accessToken.value)
//   const route = useRoute()

//   if(!isSignIn) {
//     router.replace({
//           name: "login",
//           query: { redirect: `/booking/${route.params.schedule}?user=${userID.value}` } 
//       })
//   }
// });