import React from 'react';
import "./App.css";

function Picture(props) {
    const {picData} = props;

    return (
      <div className="App">
        <div>
          {picData.title}
        </div>
 
        <img 
            src={picData.url}
            alt='new'
        />
        <div>
            Copyright: {picData.copyright}
          {picData.date}
        </div>
                     

      </div>
    );
}
export default Picture;