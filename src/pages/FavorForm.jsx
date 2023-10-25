import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GetCategory } from '../services/Category'
import { CreateFavor } from '../services/Favor'

const FavorForm = ({ user }) => {
  const [categories, setCategories] = useState([])
  // const [userId, setUserId] = useState('')

  // console.log(user)
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
    category: null,
    user: user.id
  })
  console.log('heereee', newFavor)
  const addFavor = async (e) => {
    e.preventDefault()

    await CreateFavor(newFavor)
    setNewFavor({ id: '', image: '', description: '', user: '' })
  }
  const handleSubmit = (e) => {
    addFavor(e)
    navigate('/')
  }
  const handleChangeFavor = (e) => {
    setNewFavor({ ...newFavor, [e.target.name]: e.target.value, user: user.id })
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
