import { use } from "react";

import Product from "./Product";
import { getAllProducts } from '../../utils/api';

import styles from './index.styl';

const List = () => {
  const products = use(getAllProducts);

	return (
		<div className={styles.itemsList}>
			{ products.map(p => 
					<Product key={p.id} product={p} />
				)
			}
		</div>
	)
};

export default List;