import { useState } from 'react';

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
			</header>
			{  page === 'List' ? (
				<List />
			) : (
				<Add />
			)}
		</div>
	);
};

export default App;