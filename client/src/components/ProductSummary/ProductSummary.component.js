import React from 'react';
import { Link } from 'react-router-dom';

const ProductSummary = ({ product }) => {
	return (
		<li>
			<Link to={`/items/${product.id}`} title="Ver detalles del producto">
				<img alt={product.title} src={product.picture} />
			</Link>
			<div>{product.price.currency} {Number(product.price.amount).toLocaleString('es')}</div>
			{product.free_shipping && <mark><i>Envio Gratuito</i></mark>}
			<h2>{product.title}</h2>
			<h5>{product.address}</h5>
		</li>
	);
}

export default ProductSummary;