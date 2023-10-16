import axios from 'axios'
import { VITE_API_URL } from '../constants'



const axiosInstance = axios.create({
  baseURL: VITE_API_URL,
  timeout: 5000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
    // You can set other headers here (e.g., authentication headers)
  },
})

export default axiosInstance
