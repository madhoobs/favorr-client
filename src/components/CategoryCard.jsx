const CategoryCard = ({ categories }) => {
  return (
    <div onClick={categories.onClick}>
      <h3>{categories.name}</h3>
      <div>
        <img src={categories.image} />
      </div>
    </div>
  )
}

export default CategoryCard
