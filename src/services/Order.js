import Client from './api'

export const GetOrderByUser = async (userID) => {
  try {
    const res = await Client.get(`/order/${userID}`)
    return res.data
  } catch (error) {
    throw error
  }
}
export const GetOrder = async (orderId) => {
  try {
    const res = await Client.get(`/order/find/${orderId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateOrder = async (packageId, data) => {
  try {
    const res = await Client.post(`/order/add/${packageId}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}
