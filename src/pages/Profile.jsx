import { useState, useEffect } from 'react'
import { ViewProfile } from '../services/Auth'
import { Link, useParams } from 'react-router-dom'

const Profile = ({ user }) => {
  const [profile, setProfile] = useState('')
  let { username } = useParams()

  useEffect(() => {
    const handleProfile = async () => {
      const data = await ViewProfile(username)
      setProfile(data)
    }
    handleProfile()
  }, [])

  let editOptions =
    user && user.username === username ? (
      <div>
        <Link to={`/profile/edit/${username}`}>Edit Profile</Link>
        <Link to={`/profile/security/${username}`}>Change Password</Link>
      </div>
    ) : null

  return (
    <div>
      {editOptions}
      <div className="profile-pic">
        <label className="-label" htmlFor="file">
          <span className="glyphicon glyphicon-camera"></span>
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
