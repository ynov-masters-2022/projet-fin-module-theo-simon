import { useState } from 'react';

import CartContextProvider from './utils/CartContextProvider';
import List from './components/List';
import Add from './components/Add.js';

const App = () => {
	const [page, setPage] = useState('List');

	const onPageChange = type => setPage(type);

	return (
		<div>
			<header>
				<button onClick={onPageChange.bind(null, 'List')}>List</button>
				<button onClick={onPageChange.bind(null, 'Add')}>Add</button>
				<button>Cart</button>
			</header>
			<CartContextProvider>
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