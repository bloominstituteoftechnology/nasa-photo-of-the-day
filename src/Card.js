// import React, { useState, useEffect } from 'react';
// // import ApodCard from './ApodCard';
// // import axios from 'axios';

// function Card() {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
//         .then(response => {
//             setData(response.data);
//         })
//         .catch( err => {
//             console.log("Nothing to Display!", err);
//         })
//     }, []);
//     return (
//         <div className="space">
//           {data.map(space => {
//               return (
//                   <ApodCard
//                     key={space.id}
//                     title={space.title}
//                     copyright={space.copyright}
//                     date={space.date}
//                     explanation={space.explanation}
//                     />                
//               );
//           })}
//         </div>  
//     )
// }

// export default Card;