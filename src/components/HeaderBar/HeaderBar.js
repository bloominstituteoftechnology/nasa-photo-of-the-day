import React from "react";
import "../../App.css"

const HeaderBar = (props) => {

    const { data } = props;

    return(
        
        <div className="header-container">
            <div className="header-item"> {data.title} </div>
            <div> Astronomy Picture of the Day</div>
            <div> {data.date} </div>
        </div>
    );
    
};



export default HeaderBar;