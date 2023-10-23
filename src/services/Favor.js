import Client from './api'

export const GetFavorByCategory = async (category) => {
  try {
    const res = await Client.get(`/favor/${category}`)
    return res.data
  } catch (error) {
    throw error
  }
}
