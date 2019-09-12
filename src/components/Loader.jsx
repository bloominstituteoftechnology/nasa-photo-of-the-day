import React from "react";

const Loader  = props =>{

    return (
        <div className="loader-component">
            <h3>{props.message}</h3>
            <div className="loader-container">
                <img className="loader-spinner" src={props.src} alt={props.alt} width={props.size} height={props.size}/>
            </div>
        </div>
    );

};

export default Loader;