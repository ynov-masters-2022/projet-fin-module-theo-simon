import { useEffect, useState } from "react";

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
					<div key={p.id}>
						<h2>{p.title}</h2>
						<p>{p.description}</p>
					</div>
				)
			}
		</div>
	)
};

export default List;