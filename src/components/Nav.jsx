import "../styles/nav.scss"
import { Link } from "react-router-dom"

function Nav() {

  const menu = [
    "GameList", 
    "friends", 
    "Home", 
    "timeline", 
    "setting"
  ]

  return (
    <ul className="nav-list">
      {menu.map((item, index) => (
        <li key={index}>
          
          <Link to={`./${item}`}>{item}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Nav