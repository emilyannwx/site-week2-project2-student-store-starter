import * as React from "react"
import { useState } from "react"

import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"


export default function Sidebar({isOpen, handleClick, cart, subtotal, tax, total, sumOfItems, cartisEmpty, email, name ,setEmail, setName}) {

  

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
          <ShoppingCart cart = {cart} subtotal ={subtotal}
          tax = {tax}
          total = {total}
          sumOfItems = {sumOfItems}
          cartisEmpty={cartisEmpty}
          isOpen={isOpen}
          email={email}
          name={name}
          setEmail = {setEmail}
          setName={setName}/>
        </div>
        
      </div>
    </section>
  )
}
