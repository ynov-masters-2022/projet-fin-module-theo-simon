import { Suspense, useState, useEffect } from 'react';
import { getAllProducts } from '../../utils/api';

import List from './List';
import Loader from './Loader';

export default () => {
	const [productsProvider, setProductsProvider] = useState(null);

	useEffect(() => {
		init();
	}, []);

	const init = async () => {
		const provider = await getAllProducts();
    console.log(provider);
		setProductsProvider(provider);
	};

	return (
		<div>
      <h2>Products:</h2>
      <Suspense fallback={<Loader />}>
        <List productsProvider={productsProvider} />
      </Suspense>
		</div>
	);
};