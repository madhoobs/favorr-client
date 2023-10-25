import { NavLink } from 'react-router-dom'

const CategoryDropdown = ({ categories }) => {
  return (
    <ul className="dropdown" id="categories">
      {categories.map((category) => (
        <li key={category._id}>
          <NavLink className="navitem" to={`/category/${category.name}`}>
            {category.name}
          </NavLink>
        </li>
      ))}
      <li className="separator"></li>
      <li>
        <NavLink className="navitem" to="/">
          Show All
        </NavLink>
      </li>
    </ul>
  )
}

export default CategoryDropdown
