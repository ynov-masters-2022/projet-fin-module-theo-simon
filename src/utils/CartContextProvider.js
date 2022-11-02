import { useReducer } from 'react';

import { CartContext } from './Contexts/index.js';

export default ({ children }) => {
  const reducer = (state, action) => ({ ...state, action })

  const [state, dispatch] = useReducer(reducer ,{
    products: [],
  });

  const getTotalAmount = () => {
    let total = 0;
    state.products.forEach(p => {
      total += Number(p.price)
    });
    return total;
  }

  const addProductToCart = product => {
    if(!state.products.find(p => p.title === product.title)){
      dispatch({ products: state.products.push(product)})
    }
  };

  const clearCart = () => {
    state.products = [];
    dispatch({ state });
  }

  const getContextValue = () => ({
    ...state,
    getTotalAmount,
    addProductToCart,
    clearCart,
  });

  return (
    <CartContext.Provider value={getContextValue()}>
      {children}
    </CartContext.Provider>
  )
};