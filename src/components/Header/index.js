import { useState, useContext } from 'react';

import { CartContext } from '../../utils/Contexts';

export default ({ onPageChange }) => {
  const { products } = useContext(CartContext);
  const onCartClick = () => console.log(products);

  const _onPageChange = page => onPageChange(page);

  return (
    <header>
      <button onClick={_onPageChange.bind(null, 'List')}>List</button>
      <button onClick={_onPageChange.bind(null, 'Add')}>Add</button>
      <button onClick={onCartClick}>Cart</button>
    </header>
  );
};