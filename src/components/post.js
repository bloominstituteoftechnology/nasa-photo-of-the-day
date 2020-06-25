import React from "react" 

const Post = ({title,date,url,explanation,copyright})=>{
    return (
        <div>
           <h3>{title}-{date}</h3>
           <img src={url} alt="pic of the day"/>
           <p>{explanation}</p>
           <p>{copyright}</p>
        </div>
    );
}

export default Post;