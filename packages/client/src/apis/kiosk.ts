import { axiosInstance } from './util'
import { TCategory } from 'types'

export const getAllInfo = async (): Promise<TCategory[] | undefined> => {
  try {
    const { data, status } = await axiosInstance.get('categories')

    if (status === 200) {
      return data
    }
  } catch (error) {
    console.error(error)
  }
}
