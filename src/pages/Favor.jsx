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
    <div className="favorcontainer">
      <div className="favorcard" key={favor.id}>
        <div className="favorheader">
          <img src={favor.image} alt="" />
        </div>
        <div class="descr">
          <h1>
            {favor.user.firstname} {favor.user.lastname}
          </h1>
          <p>{favor.description}</p>
        </div>
      </div>
      <PackageCard packages={packages} />
    </div>
  ) : null
}

export default Favor
