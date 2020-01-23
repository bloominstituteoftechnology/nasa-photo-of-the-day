import React from 'react';
import './DayPhoto.css';
import styled from 'styled-components';

const Header = styled.div`
color: white;
font-size: 26px;
font-family: 'ZCOOL QingKe HuangYou', cursive;
`





const DayPhoto = props => {
    return (
        
        <div class="background-container" style={{backgroundImage: `url(${props.image})`}}>
            <Header>NASA Photo of the Day</Header>
            {/* <img src={props.image} alt="" /> */}
       

        
        
        </div>
    );
};

export default DayPhoto;