import React from 'react';
import styled from 'styled-components'

const Style = styled.div `
background-color: ${props => props.theme.secondaryColor};
padding: 2%;
border:1px solid blue;
`;

const ButtonStyle = styled.button`
background-color:${props => props.theme.tertiaryColor};
color: white;
padding:3% 5%;
margin:5%;
border-radius:50%;
 &:hover{
   transform: scale(1.2);
   background-color: green;
   transition: 0.3s;
   color:blue;
 }
 transition: 0.3s;

`
const Form = styled.form`
padding:1%;
display:inline-block;
padding-bottom:10%;
`
const Button = props => {
const {myFunction} = props;

document.onkeypress = (e => {
  if (e.key === 'Enter'){
    myFunction();
  }
})

    return(
          <Style>
      <div className="button">
        <ButtonStyle onClick={myFunction}>Touch me and<br></br> I'll find a picture!</ButtonStyle>
      <div className="forms">
      <Form className="search-day">
        <input id="textday" placeholder="Day"/>
      </Form>
      <Form className="search-month">
        <input id="textmonth" placeholder="Month" />
      </Form>
      <Form className="search-year">
        <input
          id="textyear"
          placeholder="Year" 
        />
      </Form>
      </div>
        </div>
        </Style>
    )
    
}

export default Button;