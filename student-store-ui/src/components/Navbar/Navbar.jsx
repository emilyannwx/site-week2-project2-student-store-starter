
import "./Navbar.css"

export default function Navbar({ navLinks }) {
  return (
    <nav>
      <div className="container">
        <div className = "logo">
          <a href = "/"> {/*makes logo a link*/}
            <img src = "/assets.codepath.logo.svg" alt = "codepath logo"/> 
        
          </a>
        </div>
        <NavLinks navLinks = {navLinks} />
      </div>
    </nav>
  )
}

export function NavLinks({ navLinks }) {
  {/*iterates over navLinks array*/}
  return <ul className="nav-links">
    {navLinks.map((navLink, index) => {
      return <NavLink key={index} navLink={navLink} />
          })
  }</ul>
}

export function NavLink({ navLink }) {
  return (
    <li className={navLink.className}>
      <span>{navLink.label}</span> {/*renders prop's label attribute*/}
    </li>
  )
}
