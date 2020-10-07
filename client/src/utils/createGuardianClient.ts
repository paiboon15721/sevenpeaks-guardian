import axios, { AxiosInstance } from 'axios'

export default (baseURL: string): AxiosInstance => {
  const instance = axios.create({ baseURL })
  return instance
}
