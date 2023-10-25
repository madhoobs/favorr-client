const PackageCard = ({ packages }) => {
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
        </div>
      ))}
    </div>
  )
}

export default PackageCard
