import styled from "styled-components";

const CustomButton = styled.button`
background: blue;
font-size: 2rem;
color: white;
border: none;
border-radius: 4px;
padding: 10px 15px;
width: 80%;
margin: 10px;
cursor: pointer;
&:hover {
    opacity: 0.7
}
`

export default CustomButton;