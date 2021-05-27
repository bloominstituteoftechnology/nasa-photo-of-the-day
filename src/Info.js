import React from 'react';
function Info(props){
return (
    <div className="App">
       <h2>{props.item.title}</h2> 
       <p>{props.item.explanation}</p>
    </div>
)
}
export default Info;