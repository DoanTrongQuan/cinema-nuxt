import { login, signUp, sendCodeToEmail } from "~/repositories/cinema/authRepo"
import { useProfile } from "../Profile/useProfile";
import { useToken } from "./useToken"
import { useCinemaStore } from "~/stores/user/useCinemaStore";

export const useAuth = () => {
  const { handleSaveCookieAuth } = useToken();
  const { handleSaveCookieProfile } =  useProfile();
  const router  = useRouter()

  function logout() {
    //xóa lại tất cả giá trị trong cookie về rỗng
    handleSaveCookieAuth({})
    handleSaveCookieProfile({})
    // alert('logout thành công')
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