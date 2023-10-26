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
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-12 col-xl-4">
          {packages.map((packg) => (
            <div
              className="card"
              style={{ borderRadius: '15px' }}
              key={packg._id}
              id={packg._id}
            >
              <div className="card-body text-center">
                <br />
                <p className="mb-2 h5">{packg.tier} Package</p>
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    <h2>${packg.price}</h2>
                    <p className="text-muted mb-0">{packg.description}</p>
                  </div>
                </div>
              </div>
              <button
                className="btn btn-outline-warning"
                style={{
                  width: '80%',
                  alignSelf: 'center',
                  margin: '0 10px 20px 10px'
                }}
                onClick={() => orderPackage(packg._id)}
              >
                Select Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PackageCard
