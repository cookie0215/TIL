import { NavLink } from "react-router-dom"

export default function NavLinks() {
  const activeStyle = {
    color: 'green',
    fontSize: 21,
  };

  return (
    <ul>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}
          className={({ isActive }) => 'nav-link' + (isActive ? ' activated' : '')}
        >
          home 페이지로 이동
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          about 페이지로 이동
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile/:id"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          profile 페이지로 이동
        </NavLink>
      </li>
    </ul >
  )
}