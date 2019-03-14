import React from 'react';

import './productDetails.style.css';

const ProductDetails = ({ product }) => {
	let productDom = (
		<h2>Buscando información sobre el producto solicitado...</h2>
	);

	const productInfo = (
		<div className="product-details">
			<section className="product-details-container">
				<img className="product-details-image" alt={product.title} src={product.picture} />
				<div className="product-details-footer">
					<h3 className="product-details-footer__title">Descripción del producto</h3>
					<p className="product-details-footer__description">{product.description || `${product.title} no tiene descripción.`}</p>
				</div>
			</section>
			<section className="product-details-header">
				<h6 className="product-details-header__condition-sold">{product.condition} - {product.sold_quantity} vendidos</h6>
				<h1 className="product-details-header__title">{product.title}</h1>
				<h4 className="product-details-header__price">{product.price.currency} {Number(product.price.amount).toLocaleString('es')}</h4>
				<button className="product-details-header__btn-buy" type="button">Comprar</button>
			</section>
		</div>
	);

	if (product.id) {
		productDom = productInfo;
	}
	
	return productDom;
}

export default ProductDetails;