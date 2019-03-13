import React, { Component } from 'react';

class SearchBox extends Component {
	constructor(props) {
		super(props);
		this.state = { query: '' };
		this.onSubmitHandler = this.onSubmitHandler.bind(this);
		this.onChangeHandler = this.onChangeHandler.bind(this);
	}
	componentWillReceiveProps({ query }) {
		if (query) {
			this.setState({ query });
		}
	}
	onSubmitHandler(e) {
		e.preventDefault();
		this.props.onSearch(this.state.query);
	}
	onChangeHandler(e) {
		this.setState({ query: e.currentTarget.value });
	}
	render () {
		return (
			<form onSubmit={this.onSubmitHandler} role="search">
				<input onChange={this.onChangeHandler} value={this.state.query} type="text" placeholder="Nunca dejes de buscar" maxLength="120" autoFocus autoCapitalize="off" autoCorrect="off" spellCheck="false" autoComplete="off" tabIndex="2"/>
				<button type="submit">Buscar</button>
			</form>
		);
	}
}

export default SearchBox;