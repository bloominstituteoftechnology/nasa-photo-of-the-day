import React from "react";

const Apod = props =>{

    const {title, date, description, url, copyright} = props;
    console.log(props);


    if(!props.url){
        return (
            <div className="wrapper">
                <div className="display-header">
                    <h1>NASA Astronomy Picture of the Day</h1> <div><h1>Pick a Date: </h1><select><option>{date}</option></select></div>
                </div>
                <div className="display-body">
    
                    <h1>Loading..</h1>
    
                </div>
            </div>
        );
    }else{

    


    return (
        <div className="wrapper">
            <div className="display-header">
                <h1>NASA Astronomy Picture of the Day</h1> <div><h1>Pick a Date: </h1><select><option>{date}</option></select></div>
            </div>
            <div className="display-body">

                <img src={url} alt={title}/>

                <div className="display-description">
                    <h3>{title} picture provided by <i>{copyright}</i></h3>
                    <p>{description}</p>
                </div>

            </div>
        </div>
    );
}
};

export default Apod;