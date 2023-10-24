
const FavorCard = ({ favors, onClick }) => {
  return (
    <div>
      {favors.map((favor) => (
        <div
          className="card game-card"
          key={favor._id}
          id={favor._id}
          onClick={onClick}
        >
          <div className="img-wrapper">
            <img src={favor.image}></img>
          </div>
          <div className="info-wrapper flex-col">
            <p>{favor.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FavorCard
