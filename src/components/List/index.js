import { Suspense, useState, useEffect, lazy } from 'react';
import { getAllProducts } from '../../utils/api';

const List = lazy(() => import('./List'));
import Loader from './Loader';

import styles from './index.styl';

export default () => {
	return (
		<div className={styles.list}>
      <h2>Products list:</h2>
      <Suspense fallback={<Loader />}>
        <List />
      </Suspense>
		</div>
	);
};