import React from "react"
function Picture(props) {
    let {imgUrl} = props;
    return (
        <div class = "imgContainer"><img src = {imgUrl}/></div>
    )
}


export default Picture;
