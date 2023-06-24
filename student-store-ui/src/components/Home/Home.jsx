//import * as React from "react"import Header from "../Header/Header"
import Header from "../Header/Header"
import SearchBar  from "../SearchBar/SearchBar"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import ProductGrid from "../ProductGrid/ProductGrid"
import "./Home.css"

export default function Home({products, isFetching, selectedCategory, setCategory, searchValue, setSearchValue, addToCart, removeFromCart, cart, setCart, subtotal}) {
   //creates new array for products that have the same category of the currently selected category
   // if category selected is "All Categories" returns array with all products
 const filteredByCategory = selectedCategory && selectedCategory.toLowerCase() !== "all categories"
 ? products.filter((product) => product.category === selectedCategory.toLowerCase()) 
 : products //otherwise show all products


 //creates new array for products that incldue search value in name
 const productsDisplayed = searchValue
 ? products.filter((product) => product.name.toLowerCase().includes(searchValue.toLowerCase()))
 : filteredByCategory

 //display "No Search Results when no product names match searchValue"

  
  return (
    <div className="home">
      
      <ProductGrid products = {productsDisplayed} 
      isFetching = {isFetching}  
      addToCart = {addToCart} 
      removeFromCart = {removeFromCart}
      cart = {cart}
      setCart ={setCart}
      /> 
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}
