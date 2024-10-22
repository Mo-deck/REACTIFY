import { useContext, useReducer } from "react";
import shopReducer, {initialState} from "./shopReducer"

const ShopContext = useContext(initialState)

const ShopProvider = ( {children} ) => {
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
}