import React from 'react';
import Header from './Header';
import Image from './Image';
import Caption from './Caption';

const Card = props => {
    const { data } = props;
    return (
        <div>
            <Header data={data}/>
            <Image data={data}/>
            <Caption data={data}/>
        </div>
    )
}

export default Card;