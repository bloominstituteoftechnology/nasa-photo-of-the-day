import React from 'react';
import "./App.css";

function Explanation(props) {
    const {explanation} = props;
    return (
      <div className="App">
        {explanation}     
      </div>
    );
}
export default Explanation;