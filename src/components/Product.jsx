const Product =({ product })=>{
    
    const handleAddToCart = () =>{

    }
    return (
    <div className="card"
      style={{minHeight: "100%", 
        background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)),
        url(${product.urlImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover"      
    }}

    >   
        <div className="info">
            <span>{product.name}</span>
            <span>${product.price}</span>
        </div>
        <button className="btn btn-primary" onClick={handleAddToCart}>+</button>
    </div>    
    )
}

export default Product