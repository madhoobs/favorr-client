import '../style/favor.css'

const FavorCard = ({ favors, onClick }) => {
  return (
    <div className="favorcontainer">
      {favors.map((favor) => (
        <div
          className="favorcard"
          key={favor._id}
          id={favor._id}
          onClick={() => onClick(favor._id)}
        >
          <div className="favorheader">
            <img src={favor.image}></img>
          </div>
          <div class="descr">
            <h3>
              {favor.user.firstname} {favor.user.lastname}
            </h3>
            <p>{favor.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FavorCard
