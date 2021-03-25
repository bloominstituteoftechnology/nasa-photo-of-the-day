import React from 'react';
import styled from 'styled-components';


const open = '\u25bc';
const close = '\u25b2';
let icon = open;
const Text = styled.div`
width:70%;
text-align:center;
justify-content:center;
margin:auto;
h2{
    cursor: pointer;
}
`;

const MiddleText = props => {
   const {isTrue,setIsTrue} = props;
   const {explanation} = props;
   const textArray = explanation.split('. ');
   return (
       <Text>
       <div className='middleText'>
           <h2>Story:</h2>
           <h2 className="story" onClick={ () => {
               if (isTrue===true){
                    icon = open;
                   setIsTrue(false);
               }
               else {
                    icon = close;
                   setIsTrue(true);
               }
               }}>{icon}</h2>
           {isTrue &&<div className='explanation'>{textArray.map((line,index) => {
               return(
               <p key={index}>{line}.</p>)
           })}</div>}
       </div>
       </Text>
   )
}

export default MiddleText;