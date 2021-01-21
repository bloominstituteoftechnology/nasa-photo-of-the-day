import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

function AbovePhoto(props) {
	return (
		<StyledTopDiv className="aboveImage">
			<p>
				The Nasa Photo of the Day for Today {props.date} is ...{" "}
				<span role="img" aria-label="go!">
					🚀
				</span>
				!!!
			</p>
			<StyledH1>{props.title}</StyledH1>
		</StyledTopDiv>
	);
}
const StyledH1 = styled.h1`
	font-size: 3rem;
	&:hover {
		text-shadow: 1px 1px 2px white, 0 0 25px cyan, 0 0 5px deepskyblue;
	}
`;
const StyledTopDiv = styled.div`
	color: ${(pr) => (pr.theme.black ? pr.theme.white : pr.theme.primaryColor)};
	margin: 1.5rem 0.5rem 0 0;
	font-size: 1.5rem;
`;

export default AbovePhoto;
