import axios, { AxiosInstance } from 'axios'

const { GUARDIAN_URL, GUARDIAN_KEY } = process.env
console.log(GUARDIAN_URL)

const http: AxiosInstance = axios.create({
  baseURL: GUARDIAN_URL,
  params: { 'api-key': GUARDIAN_KEY },
})

export default http
