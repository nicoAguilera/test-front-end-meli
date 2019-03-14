import React from 'react';
import { Link } from 'react-router-dom';

import './logo.style.css';

const Logo = () => {
	return <Link to="/" className="logo">Mercado Libre - Donde comprar y vender de todo</Link>
};

export default Logo;