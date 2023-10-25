import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Profile from './pages/Profile'
import About from './pages/About'
import Contact from './pages/Contact'
import Category from './pages/Category'
import Favor from './pages/Favor'
import FavorForm from './pages/FavorForm'
import EditProfilePage from './pages/EditProfilePage'
import ChangePasswordPage from './pages/ChangePasswordPage'
import Footer from './components/Footer'
import { CheckSession } from './services/Auth'
import './App.css'

const App = ({ categories, favors, addFavor, newFavor, handleChangeFavor }) => {
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div>
      <NavBar user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/profile/:username" element={<Profile />} user={user} />
          <Route path="/profile/edit/:username" element={<EditProfilePage />} />
          <Route
            path="/profile/security/:username"
            element={<ChangePasswordPage />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/category"
            element={<Category categories={categories} />}
          />
          <Route path="/favor/:favorid" element={<Favor favors={favors} />} />
          <Route
            path="/favoradd"
            element={
              <FavorForm
                newFavor={newFavor}
                addFavor={addFavor}
                handleChangeFavor={handleChangeFavor}
                user={user}
              />
            }
          />
          <Route
            path="/category/:category"
            element={<Category categories={categories} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
