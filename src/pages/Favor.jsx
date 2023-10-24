import { useState, useEffect } from 'react'
import { GetFavorByUser } from '../services/Favor'

const Favor = ({ user }) => {
  const [favors, setFavors] = useState([])

  useEffect(() => {
    const handleFavors = async () => {
      const data = await GetFavorByUser()
      setFavors(data)
    }
    handleFavors()
  }, [])

  return (
    <div>
      {favors.map((favor) => (
        <div key={favor.id}>
          <h2>{favor.user.firstname}</h2>
          <h3>{favor.description}</h3>
        </div>
      ))}
    </div>
  )
}

export default Favor
