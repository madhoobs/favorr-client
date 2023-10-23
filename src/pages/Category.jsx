import { useState, useEffect } from 'react'
import { GetFavorByCategory } from '../services/Favor'
import { useLocation } from 'react-router-dom'
import FavorCard from '../components/FavorCard'

const Category = () => {
  const [favors, setFavors] = useState([])
  const location = useLocation()
  // Access state passed from Home Page
  let category = location.state.category

  useEffect(() => {
    const handleFavors = async () => {
      const data = await GetFavorByCategory(category)
      setFavors(data)
    }
    handleFavors()
  }, [])

  return (
    <div>
      <h3>{category} Favors</h3>
      <FavorCard favors={favors} />
    </div>
  )
}

export default Category
