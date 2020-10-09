import React from "react";
import styled from 'styled-components';

const App = styled.header`
color : #471f94;
background:lavenderblush;
margin:20px;
`;

const Head = props => {
    if(props.copyright){
return (
<App className = ".App-header">
    <h1>Nasa's Astronomy Picture of The Day</h1>
        <span>{props.title} by {props.copyright}</span>
</App>
  );}
  else{
    return (
        <App>
            <h1>Nasa's Astronomy Picture of The Day</h1>
        </App>
          );
  }
};
export default Head;