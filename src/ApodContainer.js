import React, { useState, useEffect } from "react";

const ApodContainer = (props) => {
    const [data, setData] = useState(props.data)
    
    useEffect(() => {
        setData(props.data)
    }, [props])
    return (
        <div className="img_container">
            <h3>{data.date}</h3>
            <img src={data.url} alt="If you can't see this, you're missing the whole point of this page."/>
        </div>
    );
}

export default ApodContainer;