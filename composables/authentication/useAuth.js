import { login, signUp, sendCodeToEmail } from "~/repositories/cinema/authRepo"

export const useAuth = () => {

  return {
    async login(formData) {
      const response = await login(formData);
      return response
    },
    
    async signUp(formData) {
      const response = await signUp(formData);
      return response
    } ,

    sendCodeToEmail,

  }
}