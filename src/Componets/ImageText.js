import React from "react";
import styled from "styled-components";
import "./index.css";

function ImageText(props) {
	return (
		<StyledDivImageText className="imageText">
			<StylesP>{props.imagetext}</StylesP>
		</StyledDivImageText>
	);
}

const StylesP = styled.p`
	padding: 0 6rem;
`;

const StyledDivImageText = styled.div`
	align-self: center;
	color: white;
	font-size: 2rem;
	margin-top: 1.5rem;
	width: 50vw;
	background-image: url(../image/Space.png);
	&:hover {
		border: 1px solid deepskyblue;
	}
`;
export default ImageText;
