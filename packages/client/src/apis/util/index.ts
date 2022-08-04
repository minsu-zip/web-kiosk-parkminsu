import axios, { AxiosRequestConfig } from 'axios'
const API_END_POINT = process.env.REACT_APP_API_END_POINT
const BASE_URL = API_END_POINT as string

const axiosApi = (url: string, options?: AxiosRequestConfig<object>) => {
  const instance = axios.create({
    baseURL: url,
    ...options,
  })

  return instance
}

export const axiosInstance = axiosApi(BASE_URL)
