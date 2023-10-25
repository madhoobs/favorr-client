import '../style/favor.css'

const FavorCard = ({ favors, onClick }) => {
  return (
    <div className="card-deck">
      {favors.map((favor) => (
        <div
          className="card"
          style={{ width: '18rem' }}
          key={favor._id}
          id={favor._id}
          onClick={() => onClick(favor._id)}
        >
          <img src={favor.image} className="card-img-top" alt="Favor Image" />
          <div className="card-body">
            <p className="card-text">{favor.description}</p>
            <div className="card-text">
              <div className="card-content-user-info">
                <img src={`/uploads/${favor.user.profilePicture}`} />
                <div className="card-content-user-contact">
                  <h6>
                    {favor.user.firstname} {favor.user.lastname}
                  </h6>
                  <p>@{favor.user.username}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FavorCard
