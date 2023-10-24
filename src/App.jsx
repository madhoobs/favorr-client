import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Category from './pages/Category'
import Favor from './pages/Favor'
import FavorForm from './pages/FavorForm'
import { CheckSession } from './services/Auth'
import './App.css'

const App = ({ categories, favors }) => {
  const [user, setUser] = useState(null)
  const [newFavor, setNewFavor] = useState({
    id: '',
    img: '',
    description: ''
  })
  const addFavor = (e) => {
    e.preventDefault()
    const currentFavors = favors
    const createdFavor = {
      ...newFavor,
      id: parseInt(favors.length + 1)
    }
    currentFavors.push(createdFavor)
    setFavor(currentFavors)
    setNewFavor({ id: '', img: '', description: '' })
  }
  const handleChangeFavor = (e) => {
    setNewFavor({ ...newFavor, [e.target.deescription]: e.target.value })
  }

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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/category"
            element={<Category categories={categories} />}
          />
          <Route
            path="/favor"
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
            }/>
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
