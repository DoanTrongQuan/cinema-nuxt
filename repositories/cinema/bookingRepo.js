import Cinema from '.'
const prefix = ''
export const getAllSeat= data => {
  const url = prefix + 'seat/get-all-seat?scheduleId='
  return Cinema.axiosClient.get(url + data)
}

export const updateSeatStatus= data => {
  const url = prefix + 'seat/update-seatStatus'
  return Cinema.axiosClient.put(url , data)
}

export const resetSeatStatus= data => {
  const url = prefix + 'seat/reset-seat-status-by-user?scheduleId='
  return Cinema.axiosAuth.put(url +  data)
}

export const createBill= () => {
  const url = prefix + 'bill/create-bill'
  return Cinema.axiosAuth.post(url)
}





