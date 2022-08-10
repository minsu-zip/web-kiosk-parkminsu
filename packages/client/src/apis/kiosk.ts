import { axiosInstance } from './util'
import { TCategory, TMenu } from 'utils/types'

export const getAllInfoAPI = async (): Promise<TCategory[] | undefined> => {
  try {
    const { data, status } = await axiosInstance.get('categories')

    if (status === 200) {
      return data
    }
  } catch (error) {
    console.error(error)
  }
}

export const getMenuAPI = async (id: number): Promise<TMenu | undefined> => {
  try {
    const { data, status } = await axiosInstance.get(`menus/${id}`)

    if (status === 200) {
      return data
    }
  } catch (error) {
    console.error(error)
  }
}
