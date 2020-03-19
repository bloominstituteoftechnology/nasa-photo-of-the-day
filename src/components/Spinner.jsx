import React from 'react'


function Spinner({message}) {
    return (
        <>
        <div className="ui active dimmer">
    <div className="ui big text loader">{message}</div>
  </div>
</>
    );
};


Spinner.defaultProps = {
    message: 'Loading....'
};

export default Spinner