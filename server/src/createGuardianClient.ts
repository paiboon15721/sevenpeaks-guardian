import axios, { AxiosInstance, AxiosResponse } from 'axios'

export default (baseURL: string, apiKey: string): AxiosInstance => {
  const instance = axios.create({ baseURL, params: { 'api-key': apiKey } })
  instance.interceptors.response.use(
    res => {
      res.data.statusCode = res.status
      return res
    },
    err => {
      const res: AxiosResponse = err.response
      res.data.statusCode = res.status
      res.data.error = res.data.response
      res.data.response = undefined
      return res
    },
  )
  return instance
}
