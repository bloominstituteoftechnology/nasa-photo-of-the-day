import React from "react";

export default function MarsCard({props}) {
// export default function PhotoCard(props) {
    console.log(props)
    // console.log("PhotoData.js: PhotoData: props:", props)

    return <img src={props} alt="NASA" />;
    
}

