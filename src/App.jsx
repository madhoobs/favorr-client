import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Category from './pages/Category'
import Favor from './pages/Favor'
import FavorForm from './pages/FavorForm'
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
          <Route
            path="/category"
            element={<Category categories={categories} />}
          />
          <Route
            path="/favor/:favorid"
            element={<Favor favors={favors} setUser={setUser} />}
          />
          <Route
            path="/favoradd"
            element={
              <FavorForm
                newFavor={newFavor}
                addFavor={addFavor}
                handleChangeFavor={handleChangeFavor}
              />
            }
          />
          <Route
            path="/category/:category"
            element={<Category categories={categories} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
