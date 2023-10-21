import Client from './api'

export const LoginUser = async (data) => {
  try {
    const res = await Client.post('/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const ChangePassword = async (username, data) => {
  try {
    const res = await Client.put(`/changePassword/${username}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const ViewProfile = async (username) => {
  try {
    const res = await Client.get(`/profile/${username}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const EditProfile = async (username, data) => {
  try {
    const res = await Client.put(`/editProfile/${username}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    // Validate current session by token
    const res = await Client.get('/session')
    return res.data
  } catch (error) {
    throw error
  }
}
