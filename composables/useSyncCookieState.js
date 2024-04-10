export const useSyncCookieState = ({ cookieName, option = {} }) => {
  const valueCookie = useCookie(cookieName, option)
  const cookie = useState(cookieName, () => valueCookie.value)
  watch(cookie, () => (valueCookie.value = cookie.value))
  return cookie
}
