import { signUp,login } from "~/repositories/cinema/authRepo"

export const useAuth = () => {

  return {
    async login(data) {
      const response  =  await login(data);
      const userInfo = {
        id: response.id,
        userName: response.userName,
        phoneNumber: response.phoneNumber,
        email: response.email,
        roles: response.roles,
        token: response.token,
      };
      this.$cookies.set('userInfo', JSON.stringify(userInfo), {
        maxAge: 60 * 60 * 24 * 7, 
        path: '/', 
        sameSite: 'strict', 
        secure: process.env.NODE_ENV === 'production',
        HttpOnLy: true 
      });
    }
  }
}