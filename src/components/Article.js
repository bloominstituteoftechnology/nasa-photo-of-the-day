import React from "react"
import TextStyle from "./TextStyle"

const Article = (props) => {
    return(
    <div>
        <TextStyle textType="article-title">{props.title}</TextStyle>
        <TextStyle textType="article-content">{props.content}</TextStyle>
    </div>
    )
}

export default Article