import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GetFavor } from '../services/Favor'
import { GetPackageByFavor } from '../services/Package'
import PackageCard from '../components/PackageCard'
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
    <div>
      <div key={favor.id}>
        <h2>{favor.user.firstname}</h2>
        <h3>{favor.description}</h3>
      </div>
      <PackageCard packages={packages} />
    </div>
  ) : null
}

export default Favor
