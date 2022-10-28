import { useRef } from 'react';

import CartModal from '../CartModal';

import styles from './index.styl';

export default ({ onPageChange }) => {
  const cartModalRef = useRef();

  const onCartClick = () => cartModalRef.current.toggle();

  const _onPageChange = page => onPageChange(page);

  return (
    <>
      <header>
        <h1>Buy products</h1>
        <div className={styles.menu}>
          <a onClick={_onPageChange.bind(null, 'List')} >Products list</a>
          <a onClick={_onPageChange.bind(null, 'Add')} >Add a product</a>
          <div className={styles.cart}>
            <img
              src="cart.svg"
              onClick={onCartClick}
              width="25px"
              height="25px"
            />
            <CartModal ref={cartModalRef} />
          </div>
        </div>
      </header>
    </>
  );
};