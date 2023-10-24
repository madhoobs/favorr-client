import { useNavigate } from 'react-router-dom'

const FavorForm = (props) => {
  let navigate = useNavigate()
  const handleSubmit = (e) => {
    props.addFavor(e)
    navigate('/addfavor')
  }

  const newFavor = props.newFavor

  return (
    <div>
      <h1>Add A Favor</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newFavor.img}
          onChange={props.handleChange}
          name={'img'}
          placeholder={'image'}
        />
        <input
          type="text-area"
          value={newFavor.description}
          onChange={props.handleChange}
          name={'description'}
          placeholder={'description'}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default FavorForm
