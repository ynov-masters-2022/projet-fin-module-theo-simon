import { useContext } from 'react';
import styles from './index.styl';

import { CartContext } from '../../utils/Contexts';

const Product = ({ product }) => {

  const { products, dispatch } = useContext(CartContext);

  const addToCart = () => dispatch({ products: products.push(product) });


  return (
    <div className={styles.product}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  )
};

export default Product;