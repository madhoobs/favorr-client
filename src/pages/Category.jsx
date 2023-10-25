import { useState, useEffect } from 'react'
import { GetFavorByCategory } from '../services/Favor'
import { useNavigate, useParams } from 'react-router-dom'
import FavorCard from '../components/FavorCard'

const Category = () => {
  const [favors, setFavors] = useState([])
  let navigate = useNavigate()
  // Access category passed from Params
  let { category } = useParams()

  useEffect(() => {
    const handleFavors = async () => {
      const data = await GetFavorByCategory(category)
      setFavors(data)
    }
    handleFavors()
  }, [])

  const onClick = (id) => {
    // Navigating to specific Category Page & passing state as prop
    navigate('/favor/' + id)
  }

  return (
    <div>
      <h3>{category} Favors</h3>
      <FavorCard favors={favors} onClick={onClick} />
    </div>
  )
}

export default Category
