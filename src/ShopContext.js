import { createContext, useContext, useReducer } from "react";
import shopReducer, {initialState} from "./shopReducer"
import { type } from "@testing-library/user-event/dist/type";

const ShopContext = createContext(initialState);

export const ShopProvider = ( {children} ) => {  
    const[state,dispatch] = useReducer(shopReducer, initialState)

    const addToCart = (product) => {
        const updateProduct = state.products.concat(product)
        
        dispatch({
            type:"ADD_TO_CART",
            payload: {
                products: updateProduct
            }
        })
    }

    const removeFromCart = (product)=>{
        const updateProduct = state.products.filter(p => p.id !== product.id)
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updateProduct
            }
        });
    }

    const values = {
        products: state.products,
        total:state.total,
        addToCart,
        removeFromCart
    }

    return <ShopContext.Provider value={values}>
        {children}
    </ShopContext.Provider>
}

const useShop = () =>{
    const context = useContext(ShopContext);
    if(context === undefined){
        throw new Error("context must be used inside shopContext");        
    }
    return context;

}

export default useShop