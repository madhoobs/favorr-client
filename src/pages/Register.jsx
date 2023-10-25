import { useState } from 'react'
import { RegisterUser, LoginUser } from '../services/Auth'
import { useNavigate, Link } from 'react-router-dom'
import '../style/auth.css'

const Register = ({ setUser }) => {
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
    navigate('/')
  }

  return (
    <div>
      <div>
        <div>
          <form className="form" onSubmit={handleSubmit}>
            <h2>Create a new account</h2>
            <br /> <br />
            <label className="label" htmlFor="email">
              Email:
            </label>
            <input
              onChange={handleChange}
              name="email"
              className="input"
              type="email"
              value={formValues.email}
              required
            />
            <label className="label" htmlFor="password">
              Password:
            </label>
            <input
              onChange={handleChange}
              name="password"
              className="input"
              type="password"
              value={formValues.password}
              required
            />
            <label className="label" htmlFor="confirmPassword">
              Confirm Password:
            </label>
            <input
              onChange={handleChange}
              name="confirmPassword"
              className="input"
              type="password"
              value={formValues.confirmPassword}
              required
            />
            <label className="label" htmlFor="username">
              Username:
            </label>
            <input
              onChange={handleChange}
              name="username"
              className="input"
              type="text"
              value={formValues.username}
              required
            />
            <label className="label" htmlFor="firstname">
              First Name:
            </label>
            <input
              onChange={handleChange}
              name="firstname"
              className="input"
              type="text"
              value={formValues.firstname}
              required
            />
            <label className="label" htmlFor="lastname">
              Last Name:
            </label>
            <input
              onChange={handleChange}
              name="lastname"
              className="input"
              type="text"
              value={formValues.lastname}
              required
            />
            <button
              className="button"
              type="submit"
              disabled={!formValues.username || !formValues.password}
            >
              Register
            </button>
            <br />
            <p>
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
