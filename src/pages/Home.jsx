import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetCategory } from '../services/Category'
import CategoryCard from '../components/CategoryCard'
import '../style/home'
import '../style/home.css'

const Home = () => {
  const [categories, setCategories] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    const handleCategories = async () => {
      const data = await GetCategory()
      setCategories(data)
    }
    handleCategories()
  })

  const onClick = (e) => {
    // Navigating to specific Category Page & passing state as prop
    navigate('/category/' + e.currentTarget.innerText, {
      state: {
        category: e.currentTarget.innerText
      }
    })
  }

  return (
    <div>
      <div className="background">
        <div className="header">
          <div className="headerWrapper">
            <div className="logo-wrapper" alt="logo">
              <img className="logo" src="/logo-w.png" alt="Favorr Logo" />
            </div>
            <br />
            <h1>
              <b>Freelancing</b> <br /> <i>Redefinedd.</i>
            </h1>
            <div className="circle blue"></div>
            <div className="square red"></div>
            <div className="triangle green"></div>
            <div className="circle orange"></div>
          </div>
        </div>
      </div>
      <CategoryCard categories={categories} onClick={onClick} />
    </div>
  )
}

export default Home
