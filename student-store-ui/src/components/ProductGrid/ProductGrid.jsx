import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid({products =[]}) {
  console.log(products)
    return (
      <div id="Buy" className="ProductGrid">
        <div className="content">
          <h3>Best Selling Products</h3>
          <div className="grid">
            {products.map((product) => (
              <ProductCard product = {product}/>
            ))}
          </div>
        </div>
    </div>
)}
