import '../style/CategoryCard.css'

const CategoryCard = ({ categories, onClick }) => {
  return (
    <section className="hero-section">
      <div className="card-grid">
        {categories.map((category) => (
          <a
            className="card"
            key={category._id}
            id={category.name}
            onClick={onClick}
          >
            <div
              className="card__background"
              style={{ backgroundImage: `url(${category.image})` }}
            ></div>
            <div className="card__content">
              <p className="card__category"></p>
              <h3 className="card__heading">{category.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default CategoryCard
