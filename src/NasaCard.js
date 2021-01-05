import React from 'react';
import NasaPhoto from './NasaPhoto';
import Date from './Date';
import Title from './Title';
import Explanation from './Explanation';


const NasaCard = ({data}) => {
    return (

        <div>
            <Date date={data.date} />
            <Title title={data.title}/>
            <NasaPhoto photo={data.url}/>
            <Explanation explanation={data.explanation}/>
        </div>

    )

}

export default NasaCard;