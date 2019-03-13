import React, { Component } from 'react';

import MELI_API from '../../utils/meli-api';
import ProductDetails from '../../components/ProductDetails/ProductDetails.component';

class ProductPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			product: {
				price: {}
			}
		};
		this.search = this.search.bind(this);
	}

	search() {
		MELI_API.getItemById(this.props.match.params.id)
			.then(({ item: product }) => {
				this.setState({ product });
			})
			.catch((error) => {
				console.warn('Query error', error);
				alert('Ha ocurrido un error. Para más información consultar la consola.');
			});
	}

	componentDidMount() {
		if (this.props.match.params.id) {
			this.search();
		}
	}

	render() {
		return (<ProductDetails product={this.state.product} />);
	}
}

export default ProductPage;