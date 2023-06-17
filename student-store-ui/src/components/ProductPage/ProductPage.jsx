import {useParams} from "react-router-dom"
import { useState } from "react";
import { useEffect } from "react";
import "./ProductPage.css"



export default function ProductPage( {products}) {

    const [yesProduct,setYesProduct] = useState(false);
    const [productFromId,setProductFromId] = useState({})
    const { productId } = useParams();
    
    
    useEffect(()=>{ 
        if(productId){
          let searchItem = products.find(el=>{
            return el.id==productId
          })
        if(searchItem){
          setProductFromId(searchItem)
          setYesProduct(true)
        }}
      })
    
 
    return ( 
        <>
  
       {yesProduct && <div className="product"> {/* */}
                <div className = "image-container">  {/* media */}
                    <img className ="image" src = {productFromId.image} alt = "Image of product"/>
                </div>
                <div className = "info-container">  {/* product-info*/}
                    <div className = "info">
                        <p className = "name">{productFromId.name}</p> 
                        <p className = "price ">${productFromId.price}</p>
                        <p className = "description">{productFromId.description}</p>
                    </div>
                </div>
            </div>}
            </>
    )
    }