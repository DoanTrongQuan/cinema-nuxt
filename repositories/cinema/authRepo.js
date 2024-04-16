import Cinema from '.'
const prefix = ''
export const login = data => {
  const url = prefix + 'auth/login'
  return Cinema.axiosClient.post(url, data)
}

export const signUp = data => {
  const url = prefix + 'auth/register'
  return Cinema.axiosClient.post(url, data)
  }

export const sendCodeToEmail = data => {
  const url = prefix + 'auth/confirmEmail?email='
  return Cinema.axiosClient.post(url + data)
}

export const resetPassword = data => {
  const url = prefix + 'auth/forgot-password'
  return Cinema.axiosClient.put(url, data)
}

// export const logOut = () => {
//   const url = prefix + '/logout'
//   return Wealify.axiosAuth.delete(url)
// }
// export const checkEmailRegistered = email => {
//   const url = prefix + '/is-mail-registered'
//   return Wealify.axiosClient.post(url, { email })
// }
// export const getAccessTokenByRefreshToken = refreshToken => {
//   const url = prefix + '/refresh-token'
//   return Wealify.axiosClient.get(url, {
//     headers: { Authorization: refreshToken },
//   })
// }
// export const forgotPassword = email => {
//   const url = prefix + '/forgot'
//   return Wealify.axiosClient.post(url, { email })
// }
// export const verifyOTPForgot = (code, email) => {
//   const url = prefix + '/forgot/verify'
//   return Wealify.axiosClient.post(url, { email, code })
// }
// export const resetPassword = (token, password) => {
//   const url = prefix + 'forgot/new-password'
//   return Wealify.axiosClient.post(url, {
//     forgot_token: token,
//     password,
//   })
// }
