const FavorCard = ({ favors }) => {
  return (
    <div onClick={favors.onClick}>
      <h2>{favors.user.name}</h2>
      <h3>{favors.description}</h3>
      <div>
        <img src={favors.image} />
      </div>
    </div>
  )
}

export default FavorCard
