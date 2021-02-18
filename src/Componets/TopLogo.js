import React from "react";
import "./index.css";
import styled from "styled-components";

function TopLogo() {
	return (
		<StyledDiv>
			<StyledH1>
				<span role="img" aria-label="go!">
					🚀
				</span>
				Nasa Image Of The Day
				<span role="img" aria-label="go!">
					🚀
				</span>
			</StyledH1>
		</StyledDiv>
	);
}
const StyledDiv = styled.div`
	font-family: "Audiowide", cursive;
	&:hover {
		text-shadow: 1px 1px 2px white, 0 0 25px cyan, 0 0 5px deepskyblue;
	}
`;

const StyledH1 = styled.h1`
	color: white;
	margin-bottom: 2rem;
	font-size: 5rem;
`;
export default TopLogo;
