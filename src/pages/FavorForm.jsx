import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GetCategory } from '../services/Category'
import { CreateFavor } from '../services/Favor'

const FavorForm = () => {
  const [categories, setCategories] = useState([])
  console.log(categories)
  let navigate = useNavigate()

  useEffect(() => {
    const handleCategories = async () => {
      const data = await GetCategory()
      setCategories(data)
    }
    handleCategories()
  }, [])

  const [newFavor, setNewFavor] = useState({
    id: '',
    image: '',
    description: '',
    category: null
    // user: user._id
  })
  const addFavor = async (e) => {
    e.preventDefault()

    await CreateFavor(newFavor)
    setNewFavor({ id: '', image: '', description: '' })
  }
  const handleSubmit = (e) => {
    addFavor(e)
    navigate('/')
  }
  const handleChangeFavor = (e) => {
    setNewFavor({ ...newFavor, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <h1>Add A Favor</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newFavor.image}
          onChange={handleChangeFavor}
          name={'image'}
          placeholder={'image'}
        />
        <input
          type="text-area"
          value={newFavor.description}
          onChange={handleChangeFavor}
          name={'description'}
          placeholder={'description'}
        />
        <div>
          <select
            id="CategoryType"
            name="category"
            onChange={handleChangeFavor}
          >
            {categories.map((category) => (
              <option key={category._id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default FavorForm
