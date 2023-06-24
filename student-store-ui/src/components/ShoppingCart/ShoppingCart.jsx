import "./ShoppingCart.css"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

export default function ShoppingCart({cart, isOpen, products = [], subtotal, tax, total, sumOfItems, email,name, setEmail, setName} ) {
    

    return ( 
        <div className={isOpen ? 'shopping-cart' : 'shopping-cart-hidden'} >
            {sumOfItems === 0  ? (<h1>
                No items added to cart yet. Start shopping now!
            </h1>) : 
            (<div className="cart-items">
                <div className="header">
                    <div className ="header-row">
                        <div className = "labels">
                        <span className ="name">Name</span> 
                        <span className="qty">Quantity</span>
                        <span className = "price"> Unit Price </span>
                        <span className = "cost">Cost</span>
                       </div>
                    </div>
                    <div className = "product-row">
                        {cart.map((item) => (
                            <li className="product-detail" key = {item.id + item.count + "product"}>
                                <span className="flex">{item.name}</span>
                                <span className="center">{item.count}</span> 
                                <span className="center">${item.price.toFixed(2)}</span>
                                <span className="center"> ${(item.count * item.price).toFixed(2)} </span>
                            </li>        
                        ))}
                    </div>
                </div>
                <div className="totals"> 
                    <div className="subtotal">
                        <span className = "label">
                            Subtotal
                        </span>
                        <span></span>
                        <span></span>
                        <span className = "cost">
                            {subtotal.toFixed(2)}
                        </span>
                    </div>
                    <div className="tax">
                        <span className = "label">
                            Taxes
                        </span>
                        <span></span>
                        <span></span>
                        <span className = "cost">
                            {tax.toFixed(2)}    
                        </span>
                    </div>
                    <div className="total">
                        <span className = "label">
                            Total
                        </span>
                        <span></span>
                        <span></span>
                        <span className = "cost">
                            {total.toFixed(2)}    
                        </span>
                    </div>

                </div>
            </div>  ) }
            <div className="checkout">
                <CheckoutForm 
                 email={email}
                name = {name}
                setEmail ={setEmail}
                setName = {setName}
                sumOfItems = {sumOfItems}
                cart = {cart}
                subtotal = {subtotal}
                total = {total}
                tax = {tax}
                />
      </div>
        </div>
        
//ternary operator here : if no items ^ if items show 

    )
                }
