import React,{setState} from "react";


function header (props){
    //console.log(props);
    //let [data] = setState[prop]
    //console.log(data);
    

    return (
        <div>
            <div className="title">Title of the Image:<br/> {props.info.title}</div>
            <img src= {props.info.url} alt="Image of the Day"></img>
            <p className="exp">{props.info.explanation}</p>
        </div>
    );

}

export default header;