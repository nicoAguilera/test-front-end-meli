import React from 'react';

import './breadCrumb.style.css';

const BreadCrumb = ({ path = [] }) => {
	return (
		<ul className="app-breadcrumb">
			{ path.map(element => <li key={element.id}>{element.name}</li>) }
		</ul>
	);
};

export default BreadCrumb;