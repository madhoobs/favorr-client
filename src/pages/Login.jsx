import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginUser } from '../services/Auth'
import '../style/auth.css'

const Login = ({ setUser }) => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({ username: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await LoginUser(formValues)
    setFormValues({ username: '', password: '' })
    setUser(payload)
    navigate('/')
  }

  return (
    <div className="container" style={{ padding: '50px 0 50px 0' }}>
      <h1 style={{ textAlign: 'center' }}>Login to your account</h1>
      <br />
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <label className="label" htmlFor="username">
            Username or Email
          </label>
          <input
            onChange={handleChange}
            name="username"
            className="input"
            type="text"
            value={formValues.username}
            required
          />
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            onChange={handleChange}
            name="password"
            className="input"
            type="password"
            value={formValues.password}
            required
          />
          <button
            className="button"
            type="submit"
            disabled={!formValues.username || !formValues.password}
          >
            Login
          </button>
          <br />
          <p>
            Don&apos;t have an account?{' '}
            <Link to="/register">Register Here</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
