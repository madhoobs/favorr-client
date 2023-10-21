import { useState } from 'react'
import { RegisterUser, LoginUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstname: '',
    lastname: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
      confirmPassword: formValues.confirmPassword,
      firstname: formValues.firstname,
      lastname: formValues.lastname
    })
    setFormValues({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      firstname: '',
      lastname: ''
    })

    // Login user after registering successfully (not working properly)
    const payload = await LoginUser(formValues)
    setUser(payload)
    navigate('/home')
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              value={formValues.email}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input
              onChange={handleChange}
              name="username"
              type="text"
              value={formValues.username}
              required
            />
          </div>
          <div>
            <label htmlFor="firstname">First Name</label>
            <input
              onChange={handleChange}
              name="firstname"
              type="text"
              value={formValues.firstname}
              required
            />
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label>
            <input
              onChange={handleChange}
              name="lastname"
              type="text"
              value={formValues.lastname}
              required
            />
          </div>
          <button
            // This can be improved to be more informative
            disabled={
              !formValues.email ||
              !formValues.username ||
              !formValues.password ||
              formValues.confirmPassword != formValues.password
            }
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
