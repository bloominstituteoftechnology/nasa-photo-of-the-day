import React from "react";

const Head = props => {
    if(props.copyright){
return (
<header className = ".App-header">
    <h1>Nasa's Astronomy Picture of The Day</h1>
        <span>{props.title} by {props.copyright}</span>
</header>
  );}
  else{
    return (
        <header>
            <h1>Nasa's Astronomy Picture of The Day</h1>
        </header>
          );
  }
};
export default Head;
