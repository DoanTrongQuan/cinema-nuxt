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


