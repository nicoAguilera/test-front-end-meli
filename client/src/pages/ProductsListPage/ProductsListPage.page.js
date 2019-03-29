import React, { Component } from 'react';

import MELI_API from '../../utils/meli-api';
import ProductList from '../../components/ProductsList/ProductsList.component';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb.component';

class ProductsListPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			categories: []
		};
		this.search = this.search.bind(this);
        this.parseQuery = this.parseQuery.bind(this);
	}

	search(query) {
		MELI_API.getItemsByQuery(query)
			.then(({ items: products, categories }) => {
				this.setState({ products, categories });
			})
			.catch((error) => {
				console.warn('Query error', error);
				alert('Ha ocurrido un error. Para más información consultar la consola.');
			});
	}
	
	parseQuery(search) {
		const params = new URLSearchParams(search);
		return params.get('q') || '';
	}

	componentWillReceiveProps(nextProps) {
		const newQuery = this.parseQuery(nextProps.location.search);
		const oldQuery = this.parseQuery(this.props.location.search);

		const areValidQuery = newQuery && oldQuery;
		const areDifferentQueries = newQuery !== oldQuery;

		if (areValidQuery && areDifferentQueries) {
			this.search(newQuery);
		}
	}

	componentDidMount() {
		const query = this.parseQuery(this.props.location.search);
		if (query) {
			this.search(query);
		}
	}

	render() {
		return (
			<div>
				<BreadCrumb path={this.state.categories} />
				<ProductList products={this.state.products} />
			</div>
		);
	}
}

export default ProductsListPage;