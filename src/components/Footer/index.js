import styled from 'styled-components'
import {useContext} from "react";
import {ThemeContext} from "../../utils/Contexts";
//import styles from "../../index.scss";

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
`

function Footer() {
  return (
    <FooterContainer>
    </FooterContainer>
  )
}

export default Footer
