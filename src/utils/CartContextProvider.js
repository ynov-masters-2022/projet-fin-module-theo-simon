import { useReducer } from 'react';

import { CartContext } from './Contexts/index.js';

export default ({ children }) => {
  const reducer = (state, action) => ({ ...state, action })

  const [state, dispatch] = useReducer(reducer ,{
    products: [],
  });

  const getTotalAmount = () => {
    const total = 0;
    state.products.forEach(p => {
      total += Number(p.price)
    });
  }

  const getContextValue = () => ({
    ...state,
    dispatch,
    getTotalAmount,
  });

  return (
    <CartContext.Provider value={getContextValue()}>
      {children}
    </CartContext.Provider>
  )
};