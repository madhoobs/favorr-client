import { useState, useEffect } from 'react'
import { ViewProfile } from '../services/Auth'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const [profile, setProfile] = useState('')
  let { username } = useParams()

  useEffect(() => {
    const handleProfile = async () => {
      const data = await ViewProfile(username)
      setProfile(data)
    }
    handleProfile()
  }, [])

  return (
    <div>
      <div class="profile-pic">
        <label class="-label" for="file">
          <span class="glyphicon glyphicon-camera"></span>
          <span>Change Image</span>
        </label>
        <input id="file" type="file" />
        <img
          src={`/uploads/${profile.profilePicture}`}
          id="output"
          width="200"
        />
      </div>
      <h3>{profile.username}</h3>
      <p>First Name: {profile.firstname}</p>
      <p>Last Name: {profile.lastname}</p>
      <p>Email: {profile.email}</p>
    </div>
  )
}

export default Profile
