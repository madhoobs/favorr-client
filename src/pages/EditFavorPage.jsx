import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { EditFavor, GetFavor } from '../services/Favor'
import { GetPackageByFavor } from '../services/Package'
import PackageCard from '../components/PackageCard'
import { GetCategory } from '../services/Category'
import '../style/favor.css'

const Favor = ({ user }) => {
  const [favor, setFavor] = useState('')
  const [packages, setPackages] = useState('')
  const [categories, setCategories] = useState([])
  let navigate = useNavigate()
  let { favorid } = useParams()
  const [newFavor, setNewFavor] = useState(favor)

  useEffect(() => {
    const handleFavor = async () => {
      const selectedFavor = await GetFavor(favorid)

      setFavor(selectedFavor)
      setNewFavor(selectedFavor)
    }
    const handleCategories = async () => {
      const data = await GetCategory()
      setCategories(data)
    }
    handleCategories()
    handleFavor()
  }, [favorid])

  const editFavor = async (e) => {
    e.preventDefault()
    await EditFavor(favorid, newFavor)
    setNewFavor({ image: '', description: '', category: '' })
    navigate(`/favor/${favorid}`)
  }

  const handleChange = (e) => {
    setNewFavor({ ...newFavor, [e.target.name]: e.target.value })
  }

  return favor ? (
    <div className="container" style={{ padding: '50px 0 50px 0' }}>
      <h1 style={{ textAlign: 'center' }}>Edit Favor</h1>
      <br />
      <form className="form" onSubmit={editFavor}>
        <label className="label">Favor Image</label>
        <input
          className="input"
          type="text"
          value={newFavor.image}
          onChange={handleChange}
          name={'image'}
          placeholder={'Choose a descriptive image'}
          required
        />
        <label className="label">Description</label>
        <input
          className="input"
          value={newFavor.description}
          onChange={handleChange}
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
            onChange={handleChange}
            defaultValue={favor.category._id}
            required
          >
            <option disabled>Choose Favor Type</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button className="btn btn-warning">Edit Favor</button>
      </form>
    </div>
  ) : null
}

export default Favor
