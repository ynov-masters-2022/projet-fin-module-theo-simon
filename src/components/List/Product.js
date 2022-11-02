import { useContext } from 'react';
import styles from './index.styl';

import { CartContext } from '../../utils/Contexts';

const Product = ({ product }) => {

  const { addProductToCart } = useContext(CartContext);

  const addToCart = () => addProductToCart(product);


  return (
    <div className={styles.product}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <div className={styles.footer}>
        <button onClick={addToCart}>Add to cart</button>
        <p>{product.price}$</p>
      </div>
    </div>
  )
};

export default Product;