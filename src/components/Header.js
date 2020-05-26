import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
	color: #000000;
	background: #ffffff;
	text-shadow: 2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c;
	font-size: 3rem;
`;

const Header = () => {
	return (
		<header>
			<H1>Welcome to My NASA Photo Of The Day Page</H1>
		</header>
	);
};

export default Header;
