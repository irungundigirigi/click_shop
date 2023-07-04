import {useEffect, createContext, useReducer, useContext} from "react";
import axios from "axios";
import {cartReducer} from "./Reducers";

const Cart = createContext();

const Context = ({children}) => {

  useEffect(() => {
    async function fetchProducts() {
      try {
        const {data} = await axios.get('https://fakestoreapi.com/products');
        dispatch({type:'SET_PRODUCTS', payload: data});
      }catch(error){
        console.error("Error fetching products");
      }
    }
    fetchProducts();
  }, []);

  const [state, dispatch] = useReducer(cartReducer, {
    products:[],
    cart:[]
  });
  return <Cart.Provider value={{state, dispatch}}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart)
}
