import { axiosInstance } from './util'
import { TCategory } from 'types'

export const getAllInfo = async (): Promise<TCategory[] | undefined> => {
  try {
    const data = await axiosInstance.get('categories')

    if (data.status === 200) {
      return data.data
    }
  } catch (error) {
    console.error(error)
  }
}
