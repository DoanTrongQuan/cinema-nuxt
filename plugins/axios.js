// import axios from 'axios'
// import Cinema from '~/repositories/cinema';
// export default defineNuxtPlugin(nuxtApp => {
//   const config = useRuntimeConfig()
//   const axiosInstance = axios.create({
//     baseURL: config.app.api.baseUrl,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//   // const authStore = useAuthStore()
//   nuxtApp.hook('app:mounted', e => {
//     // document.addEventListener('visibilitychange', visibilityHandler, false)
//   })
//   axiosInstance.interceptors.request.use(
//     function (config) {
//       // Do something before request is sent\
//       return config
//     },
//     function (error) {
//       // Do something with request error
//       return error?.data
//     },
//   )

//   // Add a response interceptor
//   axiosInstance.interceptors.response.use(
//     function (response) {
//       // Any status code that lie within the range of 2xx cause this function to trigger
//       // Do something with response data
//       return response?.data
//     },
//     function (error) {
//       // Any status codes that falls outside the range of 2xx cause this function to trigger
//       // Do something with response error

//       return error?.response?.data
//     },
//   )
//   Cinema.setAxiosClient(axiosInstance)
// })
