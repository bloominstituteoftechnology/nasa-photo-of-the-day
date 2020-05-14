import React from "react";
import "./postcontainer.css"


const PostContainer = props => {
    return (
    <> <h2 className="title-heading">{props.title}</h2>
    <img alt="" src={props.url} className="main-image"></img>
    
    <h2 className="date-heading">{props.date}</h2>

    <p className="explaination">{props.explanation}</p>
    
    <p className="copyright">Copyright: {props.copyright}</p>
    </>

    );
};

export default PostContainer;