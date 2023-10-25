import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { GetCategory } from '../services/Category'
import { CreateFavor } from '../services/Favor'
import { CreatePackage } from '../services/Package'
import PackageForm from '../components/PackageForm'

const FavorForm = ({ user }) => {
  const [categories, setCategories] = useState([])

  let navigate = useNavigate()

  useEffect(() => {
    const handleCategories = async () => {
      const data = await GetCategory()
      setCategories(data)
    }
    handleCategories()
  }, [])

  const [newFavor, setNewFavor] = useState({
    image: '',
    description: '',
    category: '',
    user: ''
  })
  const [newPackage, setNewPackage] = useState({
    price: 0,
    description: '',
    tier: '',
    favor: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    let favor = await CreateFavor(newFavor)
    await CreatePackage(newPackage, favor._id)
    setNewFavor({ image: '', description: '', category: '', user: '' })
    setNewPackage({ price: 0, description: '', tier: '', favor: '' })
    navigate('/')
  }
  const handleChangeFavor = (e) => {
    setNewFavor({ ...newFavor, [e.target.name]: e.target.value, user: user.id })
  }
  const handleChangePackage = (e) => {
    setNewPackage({ ...newPackage, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <h1>Add A Favor</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">Image:</label>
        <input
          className="input"
          type="text"
          value={newFavor.image}
          onChange={handleChangeFavor}
          name={'image'}
          placeholder={'image'}
        />
        <label className="label">Description:</label>
        <input
          className="input"
          type="text-area"
          value={newFavor.description}
          onChange={handleChangeFavor}
          name={'description'}
          placeholder={'description'}
        />
        <div>
          <label className="label">Category:</label>
          <select
            className="input"
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
        <PackageForm
          handleChangePackage={handleChangePackage}
          newPackage={newPackage}
        />
        <button className="button">Submit</button>
      </form>
    </div>
  )
}

export default FavorForm
