const CategoryCard = ({ categories, onClick }) => {
  return (
    <div>
      {categories.map((category) => (
        <div
          className="card game-card"
          key={category._id}
          id={category.name}
          onClick={onClick}
        >
          <div className="img-wrapper">
            <img src={category.image}></img>
          </div>
          <div className="info-wrapper flex-col">
            <h3>{category.name}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoryCard
