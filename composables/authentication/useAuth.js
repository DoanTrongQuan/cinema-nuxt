import { login, signUp, sendCodeToEmail, getAccessTokenByRefreshToken } from "~/repositories/cinema/authRepo"
import { useProfile } from "../Profile/useProfile";
import { useToken } from "./useToken"
import { useCinemaStore } from "~/stores/user/useCinemaStore";
import { useBookingStore } from "~/stores/user/useBookingStore";


export const useAuth = () => {
  const { handleSaveCookieAuth, refreshToken } = useToken();
  const { handleSaveCookieProfile } =  useProfile();
  const router  = useRouter()

  function logout() {
    //xóa lại tất cả giá trị trong cookie về rỗng
    useBookingStore().clear()

    handleSaveCookieAuth({})
    handleSaveCookieProfile({})
    router.replace('/login')
  }

  onBeforeUnmount(() => {
    
  }
)

  return {
    async login(formData) {
      try {
        const response = await login(formData);
        
        handleSaveCookieAuth(response.data)
        handleSaveCookieProfile(response.data)
        return response
      } catch (error) {
        throw error;
      }
    },
  
    async signUp(formData) {
      const response = await signUp(formData);
      return response
    } ,

    async getNewToken() {
      try {
        const response = await getAccessTokenByRefreshToken(refreshToken.value)
        handleSaveCookieAuth(response.data)
      } catch (error) {
        if(error.response.data === 'Refresh token was expired'){
          alert('Hết phiên! Vui lòng đăng nhập')
          logout()
        }
      }
      

    },
    
    // async getDataCinema() {
    //   try {
    //     const response = await 
    //   } catch (error) {
        
    //   }
    // },

    sendCodeToEmail,
    logout

  }
}