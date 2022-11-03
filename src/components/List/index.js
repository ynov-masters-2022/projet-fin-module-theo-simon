import { Suspense } from 'react';

import List from './List';
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