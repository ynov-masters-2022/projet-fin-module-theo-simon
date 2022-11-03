import {useContext, useRef} from 'react';

import CartModal from '../CartModal';

import styles from './index.styl';
import {ThemeContext} from "../../utils/Contexts";
import styled from "styled-components";
import Nav from "../../layout/Nav";
import {Outlet} from "react-router-dom";

export default ({ onPageChange }) => {
  const cartModalRef = useRef();

  const onCartClick = () => cartModalRef.current.toggle();

  const _onPageChange = page => onPageChange(page);
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
          <NightModeButton onClick={() => toggleTheme()}>
           {theme === 'light' ? '☀️' : '🌙'}
          </NightModeButton>
          <Nav />
          <Outlet />
          <div className={styles.cart}>
            <img
              src="/cart.svg"
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
