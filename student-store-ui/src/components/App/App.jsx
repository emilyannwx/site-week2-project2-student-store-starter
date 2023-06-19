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
import "./App.css"







export default function App() {
 
  
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState (null);
  const [selectedCategory, setCategory] = useState ("All Categories")
  const [searchValue, setSearchValue] = useState("")
  const[products, setProducts] = useState([])
  const [isOpen, setOpen]= useState("false")

 //opens sidebar
  const handleClick = event => {
    //  toggle isOpen state on click
    setOpen(current => !current);
  }

  useEffect(() => {
    const fetchProducts = async () => {
      setIsFetching(true)

      try {
        const res = await axios.get("https://codepath-store-api.herokuapp.com/store")
        if (res?.data?.products) {
          setProducts(res.data.products)
        } else {
          setError("Error fetching products.")
        }
      } catch (err) {
        console.log(err)
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
          <Sidebar isOpen = {isOpen} handleClick = {handleClick} />
          <Navbar isOpen = {isOpen} /> 
          <Header/>
          <SearchBar selectedCategory = {selectedCategory} setCategory = {setCategory}  products = {products} searchValue = {searchValue} setSearchValue = {setSearchValue}/> 
          <Routes>
            <Route path = "/" element = {<Home products = {products} isFetching = {isFetching} selectedCategory = {selectedCategory} setCategory = {setCategory} searchValue = {searchValue} setSearchValue = {setSearchValue} isOpen = {isOpen}/>} />
            <Route path = "/product/:productId" element = {<ProductPage products = {products}/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
