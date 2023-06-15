import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import Header from "../Header/Header"
import Navbar from "../Navbar/Navbar"
import SearchBar  from "../SearchBar/SearchBar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import "./App.css"





export const navLinks = [
  { label: "Home", className: "nav-link active" },
  { label: "About Us", className: "nav-link" },
  { label: "Contact Us", className: "nav-link" },
  { label: "Buy Now", className: "nav-link" },
] 
export default function App() {

  
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState (null);

  const[products, setProducts] = useState([])


  useEffect(() => {
    const fetchProducts = async () => {
      setIsFetching(true);

      try {
        const res = await axios.get("https://codepath-store-api.herokuapp.com/store");
        if (res?.data?.products) {
          console.log(res?.data?.products)
         await  setProducts(res.data.products);
        } else {
          setError("Error fetching products.");
        }
      } catch (err) {
        console.log(err);
        const message = err?.response?.data?.error?.message;
        setError(message ?? String(err));
      } finally {
        setIsFetching(false);
      }
    };

    fetchProducts();
  }, []);
  console.log(products)

 
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar navLinks = {navLinks} /> 
          <Header products = {products} isFetching = {isFetching}/>
          <SearchBar/>
          <Sidebar />
          <Home />
          <About/>
          <Contact/>
          <Footer/>
        </main>
      </BrowserRouter>
    </div>
  )
}
