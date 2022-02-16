import React, {useState} from "react"; 

export default function PodData(props){
    return(
        <div className={props.cName}>
            {/*centered title, bottom left: description, buttom right: -> top centered date, bottom list of tags*/}
            <h2>{props.title}</h2>
            <div className="LR">
                <div className="info-left">
                    <p className="description">{props.description}</p>
                </div>
                <div className="info-right">
                    <p>Date: {props.date}</p>
                    <p>Copyright: {props.copyright}</p>
                </div>
            </div>
        </div>
    )
}