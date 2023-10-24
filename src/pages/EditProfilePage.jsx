import { useState, useEffect } from 'react'
import { ViewProfile } from '../services/Auth'
import { useNavigate, useParams } from 'react-router-dom'
import { EditProfile } from '../services/Auth'

const EditProfilePage = () => {
  let navigate = useNavigate()

  const [profile, setProfile] = useState('')
  const [newProfile, setNewProfile] = useState({
    username: '',
    email: '',
    firstname: '',
    lastname: ''
  })
  let { username } = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await EditProfile(username, newProfile)
    setNewProfile({ username: '', email: '', firstname: '', lastname: '' })
    navigate(`/profile/${username}`)
  }

  const handleChange = (e) => {
    setNewProfile({ ...newProfile, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    const handleProfile = async () => {
      const data = await ViewProfile(username)
      setProfile(data)
      setNewProfile(data)
    }
    handleProfile()
  }, [])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Edit My Profile</h3>
        <input
          type="text"
          name={'username'}
          placeholder={'Username'}
          value={newProfile.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name={'email'}
          placeholder={'Email'}
          value={newProfile.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name={'firstname'}
          placeholder={'First Name'}
          value={newProfile.firstname}
          onChange={handleChange}
        />
        <input
          type="text"
          name={'lastname'}
          placeholder={'Last Name'}
          value={newProfile.lastname}
          onChange={handleChange}
        />
        <button>Edit Profile</button>
      </form>
    </div>
  )
}

export default EditProfilePage
