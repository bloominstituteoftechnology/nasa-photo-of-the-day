import React from "react" 
const Post = ({title,date,url,explanation,copyright})=>{
    return (
        <div className="background">
           <h2 className="title">{title} - {date}</h2>
           <img className="image"src={url} alt="pic of the day"/>
           <p className="explain" >{explanation}</p>
           <p className="copyright">{copyright}</p>
        </div>
    );
}

export default Post;