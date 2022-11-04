import { useContext } from 'react';
import styles from './index.styl';

import { CartContext } from '../../utils/Contexts';
import {Link} from "react-router-dom";

const Product = ({ product }) => {

  const { addProductToCart } = useContext(CartContext);

  const addToCart = () => addProductToCart(product);

  return (
    <div className={styles.product}>
      <h3>{product.title}</h3>
      <div className={styles.footer}>
        <button onClick={addToCart}>Add to cart</button>
        {
          //<Link to={`/product/${product.id}`}>Voir le produit en détail</Link>
        }
        <p>{product.price}$</p>
      </div>
    </div>
  )
};

export default Product;
