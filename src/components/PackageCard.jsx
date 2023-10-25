import { useNavigate } from 'react-router-dom'
import { CreateOrder } from '../services/Order'
import '../style/packageCard.css'

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
        <div className="packageplans" key={packg._id} id={packg._id}>
          <div className="packageplan lite">
            <h2 className="packageplan__title">{packg.tier}</h2>

            <p className="packageplan__price darkprice">${packg.price}</p>

            <p className="packageplan__description">{packg.description}</p>

            <button
              className="packageplan__button darkbutton"
              onClick={() => orderPackage(packg._id)}
            >
              Order
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PackageCard
