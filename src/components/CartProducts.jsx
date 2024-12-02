import Product from "./Product"

const CartProducts = ()=>{
    const {products, removeFromCart, total} = useShop()

    return(

        <div className="cart-products">
          <h2>Cart Products</h2>
          {
            products.map((Product) =>(
                <div className="cart-product">
                    <div className="cart-title-img">
                        <img src={products.urlImage} alt="" />
                        <span>{products.name}</span>
                    </div>
                    <h5>${products.price}</h5>
                    <button className="delete" onClick={() => removeFromCart(Product)}>
                        Delete
                    </button>
                </div>
            ))}
            <div className="total-price">
                <h2>Total Price : ${total}</h2>
            </div>
          
        </div>
    )
}

export default CartProducts;