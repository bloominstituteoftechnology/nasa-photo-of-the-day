import React from 'react';
// import './title.css';

const Explain = props => {
  console.log(props, " is props in Explain")
  return (
      <p className="explain">{props.explain}</p>
  );
};


export default Explain;