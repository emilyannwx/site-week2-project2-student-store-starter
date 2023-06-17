import logo from "../../assets/codepath.logo.svg"
import { Link } from "react-router-dom"
import "./Navbar.css"


export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="content">
        <div className="logo">
            <img src={logo} alt="codepath logo" />
        </div>
        <ul className="links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#About">About Us</a>
        </li>
        <li>
          <a href="#Contact">Contact Us</a>
        </li>
        <li>
          <a href="#Buy">Buy Now</a>
        </li>
        </ul>
      </div>
    </nav>
  )
}
