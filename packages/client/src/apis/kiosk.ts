import { axiosInstance } from './util'
import { TCategory } from 'types'

export const getAllInfo = async (): Promise<TCategory[] | undefined> => {
  try {
    const data = await axiosInstance.get('')

    if (data.status === 200) {
      return data.data.categories
    }
  } catch (error) {
    console.error(error)
  }
}
