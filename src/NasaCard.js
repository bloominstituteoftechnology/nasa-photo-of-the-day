import React from 'react';
import NasaPhoto from './NasaPhoto';
import Date from './Date';
import Explanation from './Explanation';
import Title from './Title';


const NasaCard = ({data}) => {
    return (
      
        <div>
            <Date date={data.date} />
            <Title title={data.title}/>
            <NasaPhoto photo={data.date}/>
            <Explanation explanation={data.explanation}/>
        </div>
 
    )

}

export default NasaCard;