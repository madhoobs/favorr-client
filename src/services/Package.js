import Client from './api'


export const GetPackage = async (favorId) => {
  try {
    const res = await Client.get(`/package/${favorId}`)
    return res.data
  } catch (error) {
    throw error
  }
}