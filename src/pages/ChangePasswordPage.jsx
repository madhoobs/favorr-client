import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ChangePassword } from '../services/Auth'

const ChangePasswordPage = () => {
  let navigate = useNavigate()

  const [newPassword, setNewPassword] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  let { username } = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await ChangePassword(username, newPassword)
    setNewPassword({
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    })
    navigate(`/profile/${username}`)
  }

  const handleChange = (e) => {
    setNewPassword({ ...newPassword, [e.target.name]: e.target.value })
  }

  return (
    <div className="container" style={{ padding: '50px 0 50px 0' }}>
      <h1 style={{ textAlign: 'center' }}>Change Password</h1>
      <br />
      <form className="contact-form" onSubmit={handleSubmit}>
        <label className="contact-label" htmlFor="name">
          Current Password
        </label>
        <input
          type="password"
          className="contact-input"
          name={'oldPassword'}
          placeholder={'Current Password'}
          value={newPassword.oldPassword}
          onChange={handleChange}
          required
        />

        <label className="contact-label" htmlFor="email">
          New Password
        </label>
        <input
          type="password"
          className="contact-input"
          name={'newPassword'}
          placeholder={'New Password'}
          value={newPassword.newPassword}
          onChange={handleChange}
          required
        />

        <label className="contact-label" htmlFor="firstname">
          Confirm Password
        </label>
        <input
          type="password"
          className="contact-input"
          name={'confirmPassword'}
          placeholder={'Confirm Password'}
          value={newPassword.confirmPassword}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <button
          className="btn btn-warning"
          style={{ width: '100%' }}
          type="submit"
          disabled={
            !newPassword.oldPassword ||
            !newPassword.newPassword ||
            !newPassword.confirmPassword
          }
        >
          Change Password
        </button>
      </form>
    </div>
  )

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Change Password</h3>
        <input
          type="password"
          name={'oldPassword'}
          placeholder={'Current Password'}
          value={newPassword.oldPassword}
          onChange={handleChange}
        />
        <input
          type="password"
          name={'newPassword'}
          placeholder={'New Password'}
          value={newPassword.newPassword}
          onChange={handleChange}
        />
        <input
          type="password"
          name={'confirmPassword'}
          placeholder={'Confirm Password'}
          value={newPassword.confirmPassword}
          onChange={handleChange}
        />
        <button
          className="button"
          type="submit"
          disabled={
            !newPassword.oldPassword ||
            !newPassword.newPassword ||
            !newPassword.confirmPassword
          }
        >
          Change Password
        </button>
      </form>
    </div>
  )
}

export default ChangePasswordPage
