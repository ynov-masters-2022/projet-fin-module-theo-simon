import { useEffect, useState } from "react";

import Product from "./Product";

import styles from './index.styl';

const List = ({ productsProvider }) => {

	const [products, setProducts] = useState([]);

	const _products = productsProvider?.read();

	useEffect(() => {
		_products && setProducts(_products);
	}, [_products]);

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