import React from 'react';
import styled from 'styled-components';


const open = '\u25bc';
const close = '\u25b2';

const Text = styled.div`
width:70%;
text-align:center;
justify-content:center;
margin:auto;
`;

const MiddleText = props => {
   const {explanation} = props;
   return (
       <Text>
       <div className='middleText'>
           <h2 className="story">Story: {open}</h2>
           <p className='explanation'>{explanation}</p>
       </div>
       </Text>
   )
}

export default MiddleText;