const {useContext} = require("react");
const {ThemeContext} = require("../Contexts");
import {createGlobalStyle} from 'styled-components';
import colors from "./colors";

const StyledGlobalStyle = createGlobalStyle`
    body {
        background-color: ${({isDarkMode}) => isDarkMode ? '#1b1b1d' : 'white'};
        color: ${({isDarkMode}) => isDarkMode ? colors.white : colors.black};
        margin: 0;
    }

    body a {
      color: ${({isDarkMode}) => isDarkMode ? colors.white : colors.black};
    }
`;

function GlobalStyle() {
  const {theme} = useContext(ThemeContext)

  return <StyledGlobalStyle isDarkMode={theme === 'dark'}/>
}

export default GlobalStyle
