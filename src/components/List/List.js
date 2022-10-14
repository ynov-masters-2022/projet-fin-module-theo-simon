import { useEffect, useState } from "react";

const List = ({ productsProvider }) => {

	const [products, setProducts] = useState([]);

	const _products = productsProvider?.read();

	useEffect(() => {
		_products && setProducts(_products);
	}, [_products]);

	return (
		<>
			{ products.map(p => 
					<div key={p.id}>
						<p>{p.title}</p>
					</div>
				)
			}
		</>
	)
};

export default List;