import logo from "../../assets/codepath.logo.svg"
import "./Navbar.css"


export default function Navbar({isOpen}) {
  return (
    <nav className={isOpen ? 'Navbar-sidebar' : 'Navbar'}>
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
