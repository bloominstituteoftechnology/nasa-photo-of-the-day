import React from "react";

const Post = ({title,date,url,explanation,copyright}) => {
    return(
        <div>
            <img src={url} alt = "pic of the day"/>
            <h2>Title: {title}</h2>
            <p> Date: {date}</p>
            <p>Description: {explanation}</p>
            <p>Copyright: {copyright}</p>
        </div>
    )
}

export default Post;