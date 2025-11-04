// npm install axios
import axios from 'axios'

// Base URL do Flask
const api = axios.create({
  baseURL: 'http://localhost:5000', // Porta do Flask
})

export default api
