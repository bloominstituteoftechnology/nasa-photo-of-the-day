import React from 'react';

const MiddleText = props => {
   const {explanation} = props;

   return (
       <div className='middleText'>
           <p>Here is some text from the middle </p>
           <p>{explanation}</p>
       </div>
   )
}

export default MiddleText;