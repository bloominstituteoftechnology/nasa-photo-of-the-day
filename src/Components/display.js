import React from 'react';

const Display = props => {
    const {date, title, url, explain} = props

    return (
        <div>
    <p>{date}</p>
    <img src={url}/>
    
    </div>
    )

}
// function Display({nasaData}) {
// //    const {date, url, title, explain} = props;
    
//     return (
//     <div>
//         <p>{date}</p>
//     </div>);
// }

export default Display;