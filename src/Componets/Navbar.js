import React from "react";
import "./index.css";
import styled from "styled-components";
function NavBar() {
	return (
		<StyledFriend>
			<StyledATag href="#">Topics</StyledATag>
			<StyledATag href="#">Missions</StyledATag>
			<StyledATag href="#">Galleries</StyledATag>
			<StyledATag href="#">Follow NASA</StyledATag>
			<StyledATag href="#">Download</StyledATag>
			<StyledATag href="#">About</StyledATag>
			<StyledATag href="#">NASA Audiences</StyledATag>
		</StyledFriend>
	);
}
const StyledATag = styled.a`
	color: white;
	text-decoration: none;
	height: 50px;
	margin: 1rem;
	font-size: 25px;
	border: 2px solid white;
	border-radius: 10%;
	padding: 10px;

	&:hover {
		color: red;
		border: 2px solid yellow;
		text-shadow: 1px 1px 2px white, 0 0 25px cyan, 0 0 5px deepskyblue;
	}
`;
const StyledFriend = styled.nav`
	color: white;
`;
export default NavBar;
