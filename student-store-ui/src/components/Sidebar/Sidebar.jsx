import * as React from "react"
import { useState } from "react"
import "./Sidebar.css"

export default function Sidebar({isOpen, handleClick}) {

  

  return (
    <section className={isOpen ? 'sidebar-open' : 'sidebar-closed'}>
      <div className = "wrapper">
        <button className= "toggle-button" onClick={handleClick}>
          open
        </button>
      </div>
      <div className = "shopping-cart">
        <h3>
          Shopping Cart
        </h3>
        <div className="cart">
          No items added to cart yet. Start shopping now!
        </div>
      </div>
    </section>
  )
}
