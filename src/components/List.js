import { useState, useEffect } from 'react';
import { getAllProducts } from '../utils/api';

const List = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		init();
	}, []);

	const init = async () => {
		const request = await getAllProducts();
		setProducts(request);
	};

	return (
		<div>
			<h2>Products:</h2>
			{ products.map(p => 
					<div key={p.id}>
						<p>{p.title}</p>
					</div>
				)
			}
		</div>
	);
};

export default List;