import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ProductsListPage from '../../pages/ProductsListPage/ProductsListPage.page';
import ProductPage from '../../pages/ProductPage/ProductPage.page';
import Header from '../Header/Header.component';

class App extends Component {
	constructor(props) {
		super(props);
		this.onSearchHandler = this.onSearchHandler.bind(this);
	}
	onSearchHandler( query ) {
		this.props.history.push(`/items?q=${query}`);
	}
	render() {
		return (
			<div>
				<Header onSearch={this.onSearchHandler} />
				<main>
					<Switch>
						<Route exact path='/items' render={(props) => <ProductsListPage {...props} />} />
						<Route exact path='/items/:id' render={(props) => <ProductPage {...props} />} />
					</Switch>
				</main>
			</div>
		);
	}
}

export default App;