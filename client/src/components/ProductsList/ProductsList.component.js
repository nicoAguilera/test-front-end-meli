import React from 'react';

import ProductSummary from '../ProductSummary/ProductSummary.component';

import './productsList.style.css';

const ProductList = ({ products = [] }) => {
	return (
		<section className="products-list">
			<ol className="product-list-container">
				{products.map(product => <ProductSummary key={product.id} product={product} />)}
			</ol>
		</section>
	);
}

export default ProductList;