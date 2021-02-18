import React from "react";
import "./index.css";
import styled from "styled-components";

function Imagefile(props) {
	return (
		<StyledImage className="imageFile">
			<img alt="" src={props.imageurl}></img>
		</StyledImage>
	);
}

const StyledImage = styled.div``;
export default Imagefile;
