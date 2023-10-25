import Client from './api'

export const GetPackage = async (packageId) => {
  try {
    const res = await Client.get(`/package/find/${packageId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
export const GetPackageByFavor = async (favorId) => {
  try {
    const res = await Client.get(`/package/${favorId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreatePackage = async (data, favorId) => {
  try {
    const res = await Client.post(`/package/add/${favorId}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}
