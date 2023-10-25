import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GetFavor } from '../services/Favor'
import { GetPackageByFavor } from '../services/Package'
import PackageCard from '../components/PackageCard'
import '../style/favor.css'

const Favor = () => {
  const [favor, setFavor] = useState('')
  const [packages, setPackages] = useState('')

  let { favorid } = useParams()

  useEffect(() => {
    const handleFavor = async () => {
      const selectedFavor = await GetFavor(favorid)
      const selectedPackages = await GetPackageByFavor(favorid)

      setFavor(selectedFavor)
      setPackages(selectedPackages)
    }
    handleFavor()
  }, [favor, favorid])

  return favor ? (
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="profile">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <img
                src={favor.image}
                alt="Favor Image"
                className="favor-image img-fluid"
              />
              <div className="card mb-5" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4">
                  <h4 className="mb-3">About This Creator</h4>
                  <hr className="my-4"></hr>
                  <a
                    href={`/profile/${favor.user.username}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <h5>
                      {favor.user.firstname} {favor.user.lastname}
                    </h5>
                    <p className="text-muted mb-4">@{favor.user.username}</p>
                  </a>
                </div>
              </div>
              <div className="card mb-5" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4">
                  <h4 className="mb-3">Favor Description</h4>
                  <hr className="my-4"></hr>
                  {favor.description}
                </div>
              </div>
              <div className="card" style={{ borderRadius: '15px' }}>
                <div className="card-body p-4">
                  <h4 className="mb-3">Reviews</h4>
                  <hr className="my-4"></hr>
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="mb-0 text-uppercase">
                      <span className="text-muted small">Show All</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PackageCard packages={packages} />
      </div>
    </section>
  ) : null
}

export default Favor
