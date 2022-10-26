import { useState } from 'react';

import CartContextProvider from './utils/CartContextProvider';

import Header from './components/Header'
import List from './components/List';
import Add from './components/Add.js';

const App = () => {
	const [page, setPage] = useState('List');

	const onPageChange = type => setPage(type);

	return (
		<div>
			<CartContextProvider>
        <Header onPageChange={onPageChange} />
				{  page === 'List' ? (
					<List />
				) : (
					<Add />
				)}
			</CartContextProvider>
		</div>
	);
};

export default App;