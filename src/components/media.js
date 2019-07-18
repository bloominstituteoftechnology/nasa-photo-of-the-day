import React from 'react';
import styled from 'styled-components';
import { Player } from 'video-react';
// const WrapperDiv = styled.div`
//     width: 75%;
//     heigh: 33vh;
//     background-color: tomato;
//     padding: auto;
// `;

const ImgWrap = styled.img`
    max-width: 75%;
    max-height: auto;
    padding: 5%;

`;

const Media = ({type, url})=>{

    console.log(url);
    return(

        (type === 'image' ?  
            <ImgWrap src={url} className="img"/> : 
            <iframe id="inlineFrameExample"
                title="Inline Frame Example"
                width="80%"
                height="400"
                src={url}>
            </iframe>
        )
        // <WrapperDiv>
        // </WrapperDiv> 
    )

}

export default Media;