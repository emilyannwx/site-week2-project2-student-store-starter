import "./ProductCard.css"

export default function ProductCard({product = {}}) {
    return (
      <div id="Buy" className="ProductCard">
        <div className="content">
            <div className = "product">
                <div className = "image-container">
                    <img src = {product.image} alt = "Image of product"/>
                </div>
                <div className = "info-container">
                    <div className = "info">
                        <p className = "name">{product.name}</p>
                        <p className = "price ">"$" + {product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}