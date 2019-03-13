import React from 'react';

import ProductSummary from '../ProductSummary/ProductSummary.component';

const ProductList = ({ products = [] }) => {
	return (
		<section>
			<ol>
				{products.map(product => <ProductSummary key={product.id} product={product} />)}
			</ol>
		</section>
	);
}

export default ProductList;