import { Link } from "react-router-dom"
import "./ProductCard.css"



export default function ProductCard({product}) {
    return (
        <Link className = "product-link" key={product.id} to={`/product/${product.id}`}>
            <div className="ProductCard"> {/* */}
                <div className = "image-container">  {/* media */}
                    <img className ="image" src = {product.image} alt = "Image of product"/>
                </div>
                <div className = "info-container">  {/* product-info*/}
                    <div className = "info">
                        <p className = "name">{product.name}</p> 
                        <p className = "price ">${product.price}</p>
                    </div>
                </div>
            </div>
        </Link>
)}