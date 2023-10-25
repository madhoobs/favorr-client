import { useNavigate } from 'react-router-dom'
import { CreateOrder } from '../services/Order'

const PackageCard = ({ packages }) => {
  let navigate = useNavigate()

  const orderPackage = async (id) => {
    let order = { status: 'new' }
    let response = await CreateOrder(id, order)

    navigate(`/order/${response._id}`)
  }

  return (
    <div>
      {packages.map((packg) => (
        <div key={packg._id} id={packg._id}>
          <div>
            <h4>{packg.price}</h4>
          </div>
          <div>
            <p>{packg.description}</p>
          </div>
          <div>
            <p>{packg.tier}</p>
          </div>
          <button onClick={() => orderPackage(packg._id)}>Order</button>
        </div>
      ))}
    </div>
  )
}

export default PackageCard
