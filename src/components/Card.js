import React from 'react';
import CardHeader from './CardHeader'
import CardPhoto from './CardPhoto'

const Card = props => {
    const { dataFromNasa, title, description, date, imageURL } = props


  return (
    <div className='card-border'>
      <div className='card-header'>
        <CardHeader title={title}/>
      </div>
      
      <div className='card-photo'>
        <CardPhoto imageURL={imageURL}/>
      </div>



    </div>
  );
};

export default Card;
