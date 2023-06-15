import "./Header.css"


export function Header() {
    return (
      <header className="header">
        <div className = "content">
          <div className = "welcome">
            <h1>Welcome!</h1>
            <h4>Find Your Merch!</h4>
            <p>We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</p>
            <div className = "media">
              <p>STORE IMAGE</p>
            </div>
          </div>
        </div>
      </header>
    )
  }
  
  export default Header
  