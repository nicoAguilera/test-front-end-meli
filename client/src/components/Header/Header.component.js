import React from 'react';

import SearchBox from '../SearchBox/SearchBox.component';
import Logo from '../Logo/Logo.component';

const Header = ({ query, onSearch }) => {
	function onSearchHandler(query) {
		onSearch(query)
	}
	return (
		<header role="banner">
			<Logo />
			<SearchBox query={query} onSearch={onSearchHandler} />
		</header>);
};

export default Header;