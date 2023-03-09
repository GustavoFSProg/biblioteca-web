import axios from 'axios'

const api = axios.create({
  baseURL:'https://biblioteca-lfiqebapr-gustavofsprog.vercel.app/'
})

export default api