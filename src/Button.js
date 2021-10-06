import React from 'react'


const Button = (props) => {
   
    
  function saySomething() {
    console.log(`COPYRIGHT:${props}`);
  }
  
  return (
    <button onClick={saySomething}>
      Click me!
    </button>
  );

}

export default Button;