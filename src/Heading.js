import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
	background-color: slate-gray;
	color: green;
`;

function Heading() {
	const message = 'Welcome to Nasa Photo of the Day';

	return (
		<StyledH1>
			<h1>{message}</h1>
		</StyledH1>
	);
}
export default Heading;
