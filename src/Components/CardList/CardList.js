import React, { useState } from 'react';
import PlanetCard from '../Card/Card';
import { planetData } from '../../planetData';

const CardList = () => {
    const [ cards ] = useState(planetData);
    return (
        <div className='cardList'>
                {cards.map((card, index) => (
                    <PlanetCard
                            key={index}
                            img={card.img}
                            alt={card.alt}
                            name={card.name}
                            size={card.size}
                            description={card.description}
                            />

                ))}
        </div>
    )
}




export default CardList;