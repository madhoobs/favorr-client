import '../style/CategoryCard.css'
const CategoryCard = ({ categories, onClick }) => {
  return (
    <div className="wrapper">
      {categories.map((category) => (
        <div
          className="card"
          key={category._id}
          id={category.name}
          onClick={onClick}
        >
          <div className="poster">
            <img
              src="https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg"
              alt={category.name}
            ></img>
          </div>
          <div className="details">
            <h1>{category.name}</h1>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoryCard
