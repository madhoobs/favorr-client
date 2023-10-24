import '../style/CategoryCard.css'
const CategoryCard = ({ categories, onClick }) => {
  return (
    <div class="wrapper">
      {categories.map((category) => (
        <div
          class="card"
          key={category._id}
          id={category.name}
          onClick={onClick}
        >
          <div class="poster">
            <img src={`/${category.image}`} alt={category.name}></img>
          </div>
          <div class="details">
            <h1>{category.name}</h1>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoryCard
