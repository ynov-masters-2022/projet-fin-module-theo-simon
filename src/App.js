import { BrowserRouter } from "react-router-dom";

import CartContextProvider from './utils/CartContextProvider';
import { ThemeProvider } from './utils/ThemeContextProvider';
import GlobalStyle from './utils/style/GlobalStyle';

import Header from './components/Header'
import AppRouter from './components/AppRouter';

const App = () => {

	return (
    <ThemeProvider>
      <GlobalStyle />
      <BrowserRouter>
        <CartContextProvider>
          <Header />
          <AppRouter />
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
	);
};

export default App;
