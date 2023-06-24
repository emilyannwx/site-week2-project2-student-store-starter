import { Link } from "react-router-dom"
import { useState } from "react"
import "./ProductCard.css"



export default function ProductCard({product, cart, setCart, addToCart, removeFromCart, }) {

    const [quantity, setQuantity] = useState(0)

    const handleIncrement = () => {
        setQuantity(quantity + 1)
        addToCart(product, quantity)
    }

    const handleDecrement = () => {
        removeFromCart(product)
        setQuantity(quantity - 1)
        if (quantity < 1){
            setQuantity(0)
        }
    }

 


//()=>addToCart(product)
//() => removeFromCart(product)

    return (
       
            <div className="ProductCard"> {/* */}
                <Link className = "product-link" key={product.id} to={`/product/${product.id}`}>
                    <div className = "image-container">  {/* media */}
                        <img className ="image" src = {product.image} alt = "Image of product"/>
                    </div>
                </Link>
                <div className = "info-container">  {/* product-info*/}
                    <div className = "info">
                        <p className = "name">{product.name}</p> 
                        <p className = "price ">${product.price}</p>                  
                    </div>
                    <div className = "cart-btns">
                        <div className="btns">
                            <i className="material-icons" onClick={handleIncrement}  > 
                                add
                            </i>
                            <i className="material-icons" onClick ={handleDecrement} > 
                                remove
                            </i>
                        </div >
                        <div className = "product-quantity">
                            {quantity ? (
                                <span className="quantity">
                                    <span className="amt">{quantity}</span>
                                </span>
                                ) : null}
                  
          </div>
                    </div>
                </div>
            </div>
      
)}