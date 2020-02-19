import React from 'react';
// import './title.css';

const Explain = props => {
  console.log(props, " is props in ImgCredit")
  return (
      <p className="explain"> Explanation: {props.explanation}</p>
  );
};


export default Explain;