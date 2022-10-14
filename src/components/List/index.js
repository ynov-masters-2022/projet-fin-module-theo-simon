import { Suspense, useState, useEffect, lazy } from 'react';
import { getAllProducts } from '../../utils/api';

const List = lazy(() => import('./List'));
import Loader from './Loader';

import styles from './index.styl';

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
		<div className={styles.list}>
      <h2>Products:</h2>
      <Suspense fallback={<Loader />}>
        <List productsProvider={productsProvider} />
      </Suspense>
		</div>
	);
};