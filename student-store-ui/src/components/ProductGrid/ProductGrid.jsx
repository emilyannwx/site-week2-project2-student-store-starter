import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid({products =[], cart, setCart , addToCart, removeFromCart}) {
  
    return (
      <div id="Buy" className="ProductGrid">
        <div className="content">
          <h3>Best Selling Products</h3>
          <div className="grid">
            {products.map((product) => (
              <ProductCard product = {product} key = {product.id}  cart={cart} setCart={setCart}
              addToCart = {addToCart} removeFromCart = {removeFromCart} />
            ))}
          </div>
        </div>
    </div>
)}
