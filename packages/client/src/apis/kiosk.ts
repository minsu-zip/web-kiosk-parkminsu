import { axiosInstance } from './util'

export const getAllInfo = async () => {
  try {
    const data = await axiosInstance.get('')

    if (data.status === 200) {
      return data.data
    }
  } catch (error) {
    console.error(error)
  }
}
