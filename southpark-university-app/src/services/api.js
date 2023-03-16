import Axios from 'axios'

export const BASE_URL = 'http://localhost:8080'

const User = Axios.create({ baseURL: BASE_URL })

Patient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default User
