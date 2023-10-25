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
    price: '',
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
    <div className="container" style={{ padding: '50px 0 50px 0' }}>
      <h1 style={{ textAlign: 'center' }}>Add a New Favor</h1>
      <br />
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">Favor Image</label>
        <input
          className="input"
          type="text"
          value={newFavor.image}
          onChange={handleChangeFavor}
          name={'image'}
          placeholder={'Choose a descriptive image'}
          required
        />
        <label className="label">Description</label>
        <input
          className="input"
          value={newFavor.description}
          onChange={handleChangeFavor}
          name={'description'}
          placeholder={'Enter your service description'}
          required
        />
        <div>
          <label className="label">Category</label>
          <select
            className="input"
            id="CategoryType"
            name="category"
            onChange={handleChangeFavor}
            required
          >
            <option disabled selected>
              Choose Favor Type
            </option>
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
        <button className="btn btn-warning" disabled={!newFavor.category}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default FavorForm
