import { useContext, useReducer } from "react";
import shopReducer, {initialState} from "./shopReducer"

const ShopContext = useContext(initialState)

export const ShopProvider = ( {children} ) => {
    const[state,dispatch] = useReducer(shopReducer, initialState)

    const addToCart = (product) => {
        const updateProduct = state.products.cocat(product)
        
        dispatch({
            type:"ADD_TO_CART",
            payload: {
                products: updateProduct
            }
        })
    }

    const values = {
        products: state.products,
        total:state.total,
        addToCart
    }

    return <ShopContext.provieder value={values}>
        {children}
    </ShopContext.provieder>
}

const useShop = () =>{
    const context = useContext(ShopContext);
    if(context === undefined){
        throw new error("context must be used inside shopContext");
        return context;
        
    }
}

export default useShop