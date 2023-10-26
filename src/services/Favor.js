import Client from './api'

export const GetFavor = async (favorid) => {
  try {
    const res = await Client.get(`/favor/find/${favorid}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetFavorByUser = async (userid) => {
  try {
    const res = await Client.get(`/favor/user/${userid}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateFavor = async (data) => {
  try {
    const res = await Client.post('/favor/add', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteFavor = async (favorid) => {
  try {
    const res = await Client.delete(`/favor/${favorid}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetFavorByCategory = async (category) => {
  try {
    const res = await Client.get(`/favor/${category}`)
    return res.data
  } catch (error) {
    throw error
  }
}
