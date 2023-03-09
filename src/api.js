import axios from 'axios'

const api = axios.create({
  // baseURL:'https://biblioteca-lfiqebapr-gustavofsprog.vercel.app/',
  baseURL:'http://localhost:5000/',
})

export default api