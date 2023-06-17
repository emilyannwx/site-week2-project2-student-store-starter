import "./Header.css"
import smile from "../../assets/smiley.png"


export function Header() {
    return (
      <header className="header">
        <div className = "content">
          <div className = "welcome">
            <div className="text">
              <h1 className = "intro">Welcome!</h1>
              <h1 className = "intro">Find Your Merch!</h1>
              <p>We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</p>
            </div>
            <div className = "media">
            <img src = {smile} alt = "happy face"/>
            </div>
          </div>
        </div>
      </header>
    )
  }
  
  export default Header
  