import { NavLink } from 'react-router-dom'

const CategoryDropdown = ({ categories, onClick }) => {
  return (
    <ul className="dropdown" id="categories">
      {categories.map((category) => (
        <li key={category._id}>
          <a onClick={onClick}>{category.name}</a>
        </li>
      ))}
      <li className="separator"></li>
      <li>
        <NavLink to="/">Show All</NavLink>
      </li>
    </ul>
  )
}

export default CategoryDropdown
