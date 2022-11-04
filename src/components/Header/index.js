import {useContext, useRef} from 'react';

import CartModal from '../CartModal';

import styles from './index.styl';
import {ThemeContext} from "../../utils/Contexts";
import styled from "styled-components";
import Nav from "../../layout/Nav";

export default () => {
  const cartModalRef = useRef();

  const onCartClick = () => cartModalRef.current.toggle();

  const {toggleTheme, theme} = useContext(ThemeContext)
  const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: black;
    font-size: 16px; 
`

  return (
    <>
      <header>
        <h1>Buy products</h1>
        <div className={styles.menu}>
          <Nav />
          <div className={styles.cart}>
            <img
              src="/cart.svg"
              onClick={onCartClick}
              width="25px"
              height="25px"
            />
            <CartModal ref={cartModalRef} />
          </div>
          <NightModeButton onClick={() => toggleTheme()}>
           {theme === 'light' ? '☀️' : '🌙'}
          </NightModeButton>
        </div>
      </header>
    </>
  );
};
