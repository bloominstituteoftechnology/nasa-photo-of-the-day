import React from 'react';
import Title from './Title';
import NasaPic from './NasaPic';
import PicInfo from './PicInfo';

function NasaCard(props) {
    return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <div style={{backgroundColor: 'white', width: '700px', height: '700px', boxShadow: '10px 10px', border: 'solid', marginTop: '100px'}}>
            <Title spaceData={props.spaceData} />
            <NasaPic spaceData={props.spaceData} />
            <PicInfo spaceData={props.spaceData} />
        </div>
    </div>
        
    )
}

export default NasaCard;