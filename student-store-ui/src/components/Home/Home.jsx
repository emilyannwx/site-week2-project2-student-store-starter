import * as React from "react"
import ProductGrid from "../ProductGrid/ProductGrid"
import "./Home.css"

export default function Home({products, isFetching}) {
  console.log(products)
  return (
    <div className="home">
      <ProductGrid products = {products} isFetching = {isFetching}/>
       
    </div>
  )
}
