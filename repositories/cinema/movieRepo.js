import Cinema from '.'
const prefix = ''
export const getAllMovieByCinema = data => {
  const url = prefix + 'movie/get-all-movie-by-cinema?nameOfCinema='
  return Cinema.axiosClient.get(url + data)
}
