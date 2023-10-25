import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GetFavor } from '../services/Favor'
import '../style/favor.css'

const Favor = () => {
  const [favor, setFavor] = useState('')

  let { favorid } = useParams()

  useEffect(() => {
    const handleFavor = async () => {
      const selectedFavor = await GetFavor(favorid)
      setFavor(selectedFavor)
    }
    handleFavor()
  }, [favor, favorid])

  return favor ? (
    <div>
      <div key={favor.id}>
        <h2>
          {favor.user.firstname} {favor.user.lastname}
        </h2>
        <h3>{favor.description}</h3>
      </div>
    </div>
  ) : null
}

export default Favor
