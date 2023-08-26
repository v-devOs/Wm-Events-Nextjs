
import axios from 'axios'

export const wmApi = axios.create({
  baseURL: '/api'
})