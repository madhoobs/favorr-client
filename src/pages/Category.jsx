import { useState, useEffect } from 'react'
import { GetCategory } from '../services/Category'

const Category = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const handleCategories = async () => {
      const data = await GetCategory()
      setCategories(data)
    }
    handleCategories()
  }, [])

  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <h3>{category.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default Category
