import React from 'react';
import { Link } from 'react-router-dom';

import './productSummary.style.css';

const ProductSummary = ({ product }) => {
	return (
		<li className="product-summary">
			<Link className="product-image-container" to={`/items/${product.id}`} title="Ver detalles del producto">
				<img className="product-image" alt={product.title} src={product.picture} />
			</Link>
			<header className="product-summary-header">
				<div className="product-summary-header__price">{product.price.currency} {Number(product.price.amount).toLocaleString('es')}</div>
				{product.free_shipping && <i className="icon icon--shipping">Envio Gratuito</i>}
				<h2 className="product-summary-header__title">{product.title}</h2>
			</header>
			<aside className="product-summary-address">
				<h5 className="product-summary-address__location">{product.address}</h5>
			</aside>
		</li>
	);
}

export default ProductSummary;