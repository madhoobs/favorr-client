import Client from './api'

export const GetFavorByUser = async () => {
  try {
    const res = await Client.get('/favor')
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateFavor = async (data) => {
  try {
    const res = await Client.post('/add', data)
    return res.data
  } catch (error) {
    throw error
  }
}
