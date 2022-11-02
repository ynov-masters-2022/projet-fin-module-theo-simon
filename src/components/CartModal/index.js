import { useContext, useState, useImperativeHandle, forwardRef } from 'react';

import { CartContext } from '../../utils/Contexts';

import styles from './index.styl';

export default forwardRef((props, ref) => {
  const { products, clearCart, getTotalAmount } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    toggle,
  }));

  const onClearClick = () => clearCart();

  const toggle = () => setOpen(!open);
  
  return (
    <>
    { open && (
      <div className={styles.modal}>
        <h2>My cart</h2>
        <div className={styles.content}>
          { products.length === 0 ? (
            <p>Your shopping cart is empty 😢</p>
          ) : (
            products.slice(0, 3).map(p => (
              <div className={styles.cartItem}>
                <div className={styles.image}>
                  <img src={p.image} />
                </div>
                <p>{p.title}</p>
              </div>
            ))
          )}
        </div>
        <div className={styles.footer}>
          <div>
            { products.length >= 3 ? (
              <button>See the entire cart</button>
            ) : (
              <button disabled={products.length === 0}>Process order</button>
            )}
            <button disabled={products.length === 0} onClick={onClearClick}>Clear cart</button>
          </div>
          <p>Total: {getTotalAmount()}$</p>
        </div>
      </div>
    )}
    </>
  );
}); 