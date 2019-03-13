import React from 'react';

const ProductDetails = ({ product }) => {
	let productDom = (
		<section>
			<h1>No se encuentra información para el producto solicitado.</h1>
		</section>
	);

	if (product.id) {
		const productInfo = (
			<div>
				<section>
					<img alt={product.title} src={product.picture} />
					<div>
						<h2>Descripción del producto</h2>
						<p>{product.description || `${product.title} no tiene descripción.`}</p>
					</div>
				</section>
				<section>
					<h6>{product.condition} - {product.sold_quantity} vendidos</h6>
					<h1>{product.title}</h1>
					<h4>{product.price.currency} {Number(product.price.amount).toLocaleString('es')}</h4>
					<button type="button">Comprar</button>
				</section>
			</div>
		);
		productDom = productInfo;
	}
	return productDom;
}

export default ProductDetails;