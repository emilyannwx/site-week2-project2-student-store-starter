import * as React from "react"
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <section className="sidebar closed">
      <div className = "wrapper">
        <button className= "toggle-button">
          open
        </button>
      </div>
      <div className = "cart">
      <button className= "cart-button">
          cart
        </button>
      </div>
    </section>
  )
}
