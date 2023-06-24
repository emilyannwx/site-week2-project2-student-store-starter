import "./CheckoutForm.css"
import { useState } from "react"


export default function CheckoutForm({email,name, setName ,setEmail, sumOfItems,cart,subtotal,total}) {

    const[nameError, setNameError] = useState(false)
    const[cartError, setCartError] = useState(false)
    const[showReceipt, setShowReciept] = useState(false)
    const[noErrors, setNoErros] = useState(false)

    const handleOnNameInput = (event) => {
        setName(event.target.value)
      }

    const handleOnEmailInput = (event) => {
        setEmail(event.target.value)
      }
    
    const handleCheckout = () => {
        if(name == "" || email == "" ){
            setNameError(true)
        }else {
            setNameError(false)
        }
        if(sumOfItems === 0){
            setCartError(true)
        }else{
            setCartError(false) 
        }
        if (cartError == false && nameError == false){
            setNoErros(true)
        }
        if (cartError === false && nameError ===false && noErrors === true){
            setShowReciept(true)
        }
    }//if both false 
    
    
    return (
        <div className="checkout-form">
            <h3>Payment Info</h3>
            <div className = "input-field">
                <label className="label"> Name</label>
                <div className="control">
                    <input name = "name" className="checkout-form-input" type = "text" placeholder="Student Name" value ={name} onChange={handleOnNameInput}/>
                </div>
            </div>
            <div className = "input-field">
                <label className="label"> Email</label>
                <div className="control">
                    <input name = "email" className="checkout-form-input" type = "text" placeholder="student@codepath.org" value = {email} onChange={handleOnEmailInput}/>
                </div>
                <p className ={cartError ? "error1" : 'error1-hidden'}>No cart or items in cart found to checkout.</p>
                <p className={nameError ? "error2" : 'error2-hidden'}>User info must include an email and name.</p>
            </div>
            <div className="field">
                <div className="control">
                    <button className = "button checkout-button" onClick={handleCheckout}>
                        Checkout
                    </button>
                </div>
            </div>
            <div className="checkout-success">
                <h3>Checkout Info</h3>
                
                <div className="content">
                    <p className ={showReceipt ? "info-hidden" : "info"}>A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm room.</p>
                    <div className= {showReceipt ? "receipt" : "receipt-hidden"}>
                        <h4>
                        Reciept
                        </h4>
                        <ol>
                            <li>
                            Showing receipt for {name} available at {email}:
                            </li>
                            {cart.map((item) => (
                            <li>
                            {item.count.toFixed(2)} total {item.name} purchased at a cost of ${item.price.toFixed(2)} for a total cost of ${(item.price * item.count).toFixed(2)}
                            </li>
                            ))}
                            <li>
                                Before taxes, the subtotal was ${subtotal.toFixed(2)}
                            </li>
                            <li>
                                After taxes and fees were applied, the total comes out to ${total.toFixed(2)}
                            </li>
                        </ol>
                    </div>
                </div>

            </div>
            
        </div>

    )
}