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
    <div className="container" style={{ padding: '50px 0 50px 0' }}>
      <h1 style={{ textAlign: 'center' }}>Edit My Profile</h1>
      <br />
      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="contact-label" htmlFor="name">
          Username
        </label>
        <input
          type="text"
          className="contact-input"
          name={'username'}
          placeholder={'Username'}
          value={newProfile.username}
          onChange={handleChange}
          required
        />

        <label className="contact-label" htmlFor="email">
          Email
        </label>
        <input
          type="text"
          className="contact-input"
          name={'email'}
          placeholder={'Email'}
          value={newProfile.email}
          onChange={handleChange}
          required
        />

        <label className="contact-label" htmlFor="firstname">
          First Name
        </label>
        <input
          type="text"
          className="contact-input"
          name={'firstname'}
          placeholder={'First Name'}
          value={newProfile.firstname}
          onChange={handleChange}
          required
        />
        <label className="contact-label" htmlFor="lastname">
          Last Name
        </label>
        <input
          type="text"
          className="contact-input"
          name={'lastname'}
          placeholder={'Last Name'}
          value={newProfile.lastname}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <button
          className="btn btn-warning"
          style={{ width: '100%' }}
          type="submit"
        >
          Edit Profile
        </button>
      </form>
    </div>
  )
}

export default EditProfilePage
