import * as React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar"
import SearchBar  from "../SearchBar/SearchBar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductPage from "../ProductPage/ProductPage"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import "./App.css"







export default function App() {
 
  
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState (null);
  const [selectedCategory, setCategory] = useState ("All Categories")
  const [searchValue, setSearchValue] = useState("")
  const [products, setProducts] = useState([])
  const [isOpen, setOpen]= useState(false)
  const [quantity, setQuantity] = useState( )
  const [cart, setCart] = useState([])
  const [subtotal, setSubtotal] = useState (0)
  const [tax, setTax] = useState(0)
  const [total, setTotal] = useState (0)
  const [sumOfItems, setSumOfItems] = useState(0)
  const [cartisEmpty, setCartIsEmpty] = useState(true)
  const [name, setName] = useState ("")
  const [email, setEmail] = useState("")



 //opens sidebar
  const handleClick = event => {
    //  toggle isOpen state on click
    setOpen(current => !current);
  }
  const handleCheckout = event =>{
    setEmail
  }
  



  const addToCart = (item)=>{
    if(cart.includes(item)){
        (item.count)
        item.count++
      }else{
        item.count = 1
        cart.push(item)
      }
      setCart(cart)
      console.log("Cart")
      console.log(cart)
      setSumOfItems(sumOfItems + 1)
      setCartIsEmpty(false)
      setSubtotal(subtotal + item.price)
      setTax(tax + (item.price * 0.08875))
      setTotal((total + item.price + (item.price * 0.08875)))
      console.log("sub")
      console.log(subtotal)
  }
  
  const removeFromCart = (item, )=>{
    if(cart.includes(item)){

       setSumOfItems(sumOfItems - 1)
       setSubtotal(subtotal - item.price)
       setTax(tax - (item.price * 0.08875))
       setTotal((total - (item.price + (item.price * 0.08875))))
        item.count--
      }
      if(item.count == 0){
        let newCart = cart.filter(el => el.id != item.id)
        setCart(newCart)
        console.log("new")
        console.log(newCart)
      }else{

      setCart(cart)
      if(sumOfItems == 0){
        setCartIsEmpty(true)
      }
     
      console.log("Cart")
      console.log(cart)
      }
  }
    




  useEffect(() => {
    const fetchProducts = async () => {
      setIsFetching(true)

      try {
        const res = await axios.get("http://localhost:3002/store")
        if (res?.data?.products) {
          setProducts(res.data.products)
        } else {
          setError("Error fetching products.")
        }
      } catch (err) {
        const message = err?.response?.data?.error?.message
        setError(message ?? String(err))
      } finally {
        setIsFetching(false)
      }
    }

    fetchProducts()
  }, [])




 

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Sidebar isOpen = {isOpen} 
          handleClick = {handleClick} 
          cart = {cart}
          subtotal={subtotal}
          tax = {tax}
          total = {total}
          sumOfItems = {sumOfItems}
          cartisEmpty={cartisEmpty}
          email = {email}
          setEmail ={setEmail}
          name = {name}
          setName = {setName}/>

          <Navbar isOpen = {isOpen} /> 

          <Header/>

          <SearchBar selectedCategory = {selectedCategory} 
          setCategory = {setCategory} 
           products = {products} 
           searchValue = {searchValue} 
           setSearchValue = {setSearchValue}/> 
          <Routes>
            <Route path = "/" element = {<Home products = {products} 
            isFetching = {isFetching} 
            selectedCategory = {selectedCategory} 
            setCategory = {setCategory} 
            searchValue = {searchValue}
            setSearchValue = {setSearchValue} 
            isOpen = {isOpen}
            addToCart={addToCart} 
            removeFromCart={removeFromCart}
            cart = {cart}
            setCart ={setCart} 
            subtotal ={subtotal} />} />
            <Route path = "/product/:productId" element = {<ProductPage products = {products}/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
