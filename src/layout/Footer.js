import React from "react";
import "../App.css";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <img className="footer-Img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/The_Earth_seen_from_Apollo_17_with_transparent_background.png/905px-The_Earth_seen_from_Apollo_17_with_transparent_background.png" alt="world"/>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background-image: url(https://cdn.pixabay.com/photo/2016/06/05/07/59/stars-1436950_1280.jpg);
img{
  width:10%;
}
`;