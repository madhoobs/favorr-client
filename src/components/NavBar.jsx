import { NavLink, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GetCategory } from '../services/Category'
import '../style/nav.css'
import CategoryDropdown from './CategoryNavDropdown'

const NavBar = ({ user, handleLogOut }) => {
  const script = () => import('../style/nav.js')
  const [categories, setCategories] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    const loadScript = async () => {
      await script()
    }
    const handleCategories = async () => {
      const data = await GetCategory()
      setCategories(data)
    }
    loadScript()
    handleCategories()
  }, [])

  const onClick = (e) => {
    // Navigating to specific Category Page & passing state as prop
    navigate('/category/' + e.currentTarget.innerText, {
      state: {
        category: e.currentTarget.innerText
      }
    })
  }

  let userOptions
  if (user) {
    userOptions = (
      <ul className="navbar-nav">
        <li className="navbar-dropdown">
          <NavLink to="#" className="dropdown-toggler" data-dropdown="profile">
            Welcome, {user.username}! <i className="fa fa-angle-down"></i>
          </NavLink>
          <ul className="dropdown" id="profile">
            <li>
              <NavLink to={`/profile/${user.username}`}>Profile</NavLink>
            </li>
            <li>
              <NavLink to="/favor/new">Post a Favor</NavLink>
            </li>
            <li className="separator"></li>
            <li>
              <NavLink to="#">Settings</NavLink>
            </li>
            <li className="separator"></li>
            <li>
              <NavLink onClick={handleLogOut} to="/">
                Logout
              </NavLink>
            </li>
          </ul>
        </li>
      </ul>
    )
  }

  const visitorOptions = (
    <ul className="navbar-nav">
      <li>
        <NavLink to="/login">Sign in</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </ul>
  )

  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggler" data-toggle="open-navbar1">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <NavLink to="/">
              <div className="logo-wrapper" alt="logo">
                <img className="logo" src="/logo.png" alt="Favorr Logo" />
              </div>
            </NavLink>
          </div>

          <div className="navbar-menu" id="open-navbar1">
            <ul className="navbar-nav">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="navbar-dropdown">
                <NavLink
                  to="#"
                  className="dropdown-toggler"
                  data-dropdown="categories"
                >
                  Categories <i className="fa fa-angle-down"></i>
                </NavLink>
                <CategoryDropdown categories={categories} onClick={onClick} />
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              {user ? userOptions : visitorOptions}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
