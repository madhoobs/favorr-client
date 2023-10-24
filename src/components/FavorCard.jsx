const FavorCard = ({ favors, onClick }) => {
  return (
    <div>
      {favors.map((favor) => (
        <div key={favor._id} id={favor._id} onClick={onClick}>
          <div>
            <img src={favor.image}></img>
          </div>
          <div>
            <p>{favor.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FavorCard
