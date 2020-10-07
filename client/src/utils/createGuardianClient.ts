import axios, { AxiosInstance } from 'axios'

const createGuardianClient = (baseURL: string): AxiosInstance => {
  const instance = axios.create({ baseURL, validateStatus: () => true })
  return instance
}

export default createGuardianClient
