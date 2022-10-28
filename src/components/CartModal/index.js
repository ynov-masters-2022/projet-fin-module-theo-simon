import { useContext, useState, useImperativeHandle, forwardRef } from 'react';

import { CartContext } from '../../utils/Contexts';

import styles from './index.styl';

export default forwardRef((props, ref) => {
  const { products } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    toggle,
  }));

  const toggle = () => setOpen(!open);
  
  return (
    <>
    { open && (
      <div className={styles.modal}>
        <h2>My cart</h2>
        { products.map(p => (
          <div>
            { p.title }
          </div>
        ))
        }
      </div>
    )}
    </>
  );
}); 