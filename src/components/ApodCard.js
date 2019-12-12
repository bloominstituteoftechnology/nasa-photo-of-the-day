import React from 'react';
const ApodCard = props => {

    return (
        <div className="apod-card">
            <img className="image" src={props.url} alt= "NASA APOD" />
        <div className="bigDiv">
            <h2 className="title">Photo Title: {props.title}</h2>
            <p className="desc">PhotoDescription: {props.desc}</p>            
            <p className="date">Date: {props.date}</p>
        </div>
        </div>        
    );
}

export default ApodCard;




// "https://apod.nasa.gov/apod/image/1912/N63A_HubbleChandraSchmidt_960.jpg"




// //     display: grid;

// //     @media (max-width: 720px) {
// //         flex-direction: column;
// //     }
// // `;
// const cardDiv = "div";

// const textContainer = "h3"
//     // width:25%;
//     // @media (max-width: 720px) {
//     //      width: 100%;
//     // }
// ;
// const cardImg = "img"
//     // border: 3px dotted;
// ;
// const cardDesc = "p"
//     // font-size: 18px;
//     // margin: 0 auto;
//     // padding: 10%;
// ;
// const ApodCard = props => {
//     return (
//         <cardDiv className='apodCard'>
//             <cardImg className='apodImg' alt='Astronomy Image of the Day' src={props.url}/>
//             <textContainer>
//             <cardTitle>{props.title}</cardTitle>
//             <hr></hr>
//             <cardDesc>{props.cardDesc}</cardDesc>
//             <p>{props.date}</p>
//             </textContainer>
//         </cardDiv>
//     );
// };

// export default ApodCard