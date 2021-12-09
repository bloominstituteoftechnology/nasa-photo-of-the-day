import React from 'react';
import styled from 'styled-components';

export default function DayCard(props){
const {data} = props;



return (
    <div className='topArea'>
        <div className='left'></div>
            <h1>{data.date} - {data.title} </h1>
            <p>{data.explanation}</p>
        <div className='right'>
            <img src={data.url} alt='This is a random NASA phenomenon'/>
        </div>
    </div>     
);
}









