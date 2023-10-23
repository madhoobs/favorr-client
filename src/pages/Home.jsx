import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetCategory } from '../services/Category'
import CategoryCard from '../components/CategoryCard'

const Home = () => {
  const [categories, setCategories] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    const handleCategories = async () => {
      const data = await GetCategory()
      setCategories(data)
    }
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

  return (
    <div>
      <CategoryCard categories={categories} onClick={onClick} />
    </div>
  )
}

export default Home
