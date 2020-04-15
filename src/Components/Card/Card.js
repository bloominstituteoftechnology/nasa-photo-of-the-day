import React from 'react';


const Card = props => {
    return (
        <>
        <img className='planet-img' src={props.img} alt={props.name} />
        <h3 className='planet-name'>Name: {props.name}</h3>
        <h4 className='planet-size'>Size: {props.size}</h4>
        <p className='planet-desc'>{props.description}</p>
        </>
    );
}




export default Card;