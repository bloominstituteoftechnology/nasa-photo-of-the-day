import React from "react";


const PostContainer = props => {
    return (
    <> <h2>{props.title}</h2>
    <img alt="" src={props.url} className="main-image"></img>
    
    <h2 className="date-heading">{props.date}</h2>

    <p className="explaination">{props.explanation}</p>
    
    </>

    );
};

export default PostContainer;