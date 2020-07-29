import React from "react";

const Sidebar = (props) => {
    const {explanation}=props
    return(
        <div className="sidebar">
          <p>{explanation}</p>
        </div>);
}


export default Sidebar