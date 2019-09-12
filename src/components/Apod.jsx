import React from "react";
import Loader from "./Loader";
import DateSelector from "./DateSelector";

const Apod = props =>{

    const {title, description, url, copyright} = props;
    console.log(props);


    if(!props.url) return (
        <div className="display-body">
            <div className="display-header">
                <h1>NASA Astronomy Picture of the Day</h1>
            </div>
            <Loader src="https://i.imgur.com/WrdYUxd.png" alt="spinner" message="Attempting to fetch requested data.." size="30"/>
        </div>
        );

    
    let dataType;
    
    if(props.url.includes('youtube')){
        dataType = <iframe title={title} src={url} width="100%" height="100%" frameBorder="0"></iframe>
    }else{  
        dataType = <img src={url} alt={title} />
    }

    return (
        <div className="wrapper">
            <div className="display-header">
                <h1>NASA Astronomy Picture of the Day</h1>
                <DateSelector fnc={props.fnc}/>
            </div>
            <div className="display-body">
                
                {dataType}
                <div className="display-description">
                    <h3>{title} picture provided by <i>{copyright}</i></h3>
                    <p>{description}</p>
                </div>

            </div>
        </div>
    );
};

export default Apod;