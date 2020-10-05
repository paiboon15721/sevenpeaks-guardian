import axios, { AxiosInstance } from 'axios'

export default (baseURL: string, params: any): AxiosInstance =>
  axios.create({ baseURL, params })
