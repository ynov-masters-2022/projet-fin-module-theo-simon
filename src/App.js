import {useState} from 'react';

import CartContextProvider from './utils/CartContextProvider';

import Header from './components/Header'
import List from './components/List';
import Add from './components/Add';
import {ThemeProvider} from "./utils/ThemeProvider";
import Footer from "./components/Footer";
import GlobalStyle from "./utils/style/GlobalStyle";

const App = () => {
  const [page, setPage] = useState('List');

  const onPageChange = type => setPage(type);

  return (
    <ThemeProvider>
      <GlobalStyle />
      <div>
        <CartContextProvider>
          <Header onPageChange={onPageChange}/>
          {page === 'List' ? (
            <List/>
          ) : (
            <Add/>
          )}
        </CartContextProvider>
				<Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
