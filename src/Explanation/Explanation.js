import React from "react";

const Explanation = props => {
return (
    <div className = "Explanation" key = {props}>
     <p> Explanation: {props.explanation} </p>
    
    </div>
)

}
export default Explanation