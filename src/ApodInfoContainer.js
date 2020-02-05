import React, { useState, useEffect} from "react";

const ApodInfoContainer = (props) => {
    const [data, setData] = useState(props.data)
    
    useEffect(() => {
        setData(props.data)
    }, [props])
    return (
        <div className="info_container">
            <h1>{data.title}</h1>
            <p className="explanation">{data.explanation}</p>
        </div>
    );
}

export default ApodInfoContainer;