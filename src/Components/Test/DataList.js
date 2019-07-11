import React from "react";
import ApplicationData from './ApplicationData';

function DataList(props){
    return(
        <div>
            {props.data.map(ele => {
                return <ApplicationData ele = {ele}/>
            })}
        </div>
    )
}

export default DataList;