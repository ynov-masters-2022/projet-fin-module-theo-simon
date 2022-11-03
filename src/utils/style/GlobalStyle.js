const {useContext} = require("react");
const {ThemeContext} = require("../Contexts");
import {createGlobalStyle} from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
    body {
        background-color: ${({isDarkMode}) => isDarkMode ? '#2F2E41' : 'white'};
        color: ${({isDarkMode}) => isDarkMode ? 'white' : 'black'};
        margin: 0;
    }
`;

function GlobalStyle() {
  const {theme} = useContext(ThemeContext)

  return <StyledGlobalStyle isDarkMode={theme === 'dark'}/>
}

export default GlobalStyle
