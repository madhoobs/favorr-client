import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CreateFavor } from '../services/Favor'

const FavorForm = (props) => {
  let navigate = useNavigate()

  const [newFavor, setNewFavor] = useState({
    id: '',
    image: '',
    description: ''
  })
  const addFavor = (e) => {
    e.preventDefault()
    CreateFavor.post(newFavor)
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
      <form onSubmit={handleSubmit} addFavor={addFavor}>
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
        <select id="CategoryType" onChange={handleChangeFavor}>
          <option>UX Design</option>
          <option>Software Engineering</option>
          <option>Graphic Design</option>
          <option>Data Analytics</option>
        </select>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default FavorForm
