import Axios from 'axios'

export const BASE_URL = 'http://localhost:4000'

const Client = Axios.create({ baseURL: BASE_URL })

Client.interceptors.request.use(
  (config) => {
    // Read token from localStorage
    const token = localStorage.getItem('token')
    // if token exists, we set the authorization header
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default Client
