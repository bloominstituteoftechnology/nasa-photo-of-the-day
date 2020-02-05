import React, { useState, useEffect } from "react";

const ApodContainer = (props) => {
    const [data, setData] = useState(props.data)
    
    useEffect(() => {
        setData(props.data)
    }, [props])
   
    if (props.data.media_type === "video") {
        return (
            <div className="img_container">
                <h3>{data.date}</h3>
                <iframe width="720" height="480" src={data.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        );
            
    }
    else {
        return (
            <div className="img_container">
                <h3>{data.date}</h3>
                <img src={data.url} alt="Probably waiting on the api"/>
            </div>
        );
    }
    
}

export default ApodContainer;