const PackageCard = (props) => {
  return (
    <div>
      <h2>{props.price}</h2>
      <p>{props.description}</p>
      <button onClick={props.favor}>Select Package</button>
    </div>
  )
}

export default PackageCard
