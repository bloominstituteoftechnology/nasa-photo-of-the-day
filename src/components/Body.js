import React from "react";

// function Body(props) {
//     return(
//         <div className="image">
//             <img src={props.bod.hdurl} alt={props.bod.explanation}/>
//         </div>

//     );
// };
const Body = props => {
    return(
        <div className="image">
            <img src={props.bod.url} alt={props.bod.explanation}/>
        </div>
    );
};

export default Body;