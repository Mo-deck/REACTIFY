import Product from "./Product"
import useShop from "../ShopContext"

const CartProducts = ()=>{
    const {products, removeFromCart, total} = useShop()

    return(

        <div className="cart-products">
          <h2>Cart Products</h2>
          {
            products.map((Product) =>(
                <div className="cart-product">
                    <div className="cart-title-img">
                        <img src={Product.urlImage} alt="" />
                        <span>{Product.name}</span>
                    </div>
                    <h5>${Product.price}</h5>
                    <span className="delete" onClick={() => removeFromCart(Product)}>
                        Delete
                    </span>
                </div>
            ))}
            <div className="total-price">
                <h2>Total Price : ${total}</h2>
            </div>
          
        </div>
    )
}

export default CartProducts;