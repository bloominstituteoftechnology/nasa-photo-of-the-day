import React from 'react';
// import './title.css';

const Title = props => {
  console.log(props, " is props in Title")
  return (
    <div className="Title-container">
      <h1 className="title">{props.title}</h1>
    </div>
  );
};


export default Title;
