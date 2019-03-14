import React from 'react';

import SearchBox from '../SearchBox/SearchBox.component';
import Logo from '../Logo/Logo.component';

import './header.style.css';

const Header = ({ query, onSearch }) => {
	function onSearchHandler(query) {
		onSearch(query)
	}
	return (
		<header className="app-header" role="banner">
			<div className="app-header-container">
				<Logo />
				<SearchBox query={query} onSearch={onSearchHandler} />
			</div>
		</header>);
};

export default Header;