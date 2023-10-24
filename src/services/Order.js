import Client from './api'

export const GetOrderByUser = async (favorId) => {
  try {
    const res = await Client.get(`/order/${userID}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateOrder = async (data) => {
  try {
    const res = await Client.post(`/add/:packageID`, data)
  } catch (error) {
    throw error
  }
}