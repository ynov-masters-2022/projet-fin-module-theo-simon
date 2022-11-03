import { BrowserRouter } from "react-router-dom";

import CartContextProvider from './utils/CartContextProvider';
import ThemeContextProvider from './utils/ThemeContextProvider';
import GlobalStyle from './utils/style/GlobalStyle';

import Header from './components/Header'
import AppRouter from './components/AppRouter';

const App = () => {

	return (
    <ThemeContextProvider>
      <GlobalStyle />
      <BrowserRouter>
        <CartContextProvider>
          <Header />
          <AppRouter />
        </CartContextProvider>
      </BrowserRouter>
    </ThemeContextProvider>
	);
};

export default App;
