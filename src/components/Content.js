import React from 'react';
import style,{keyframes} from 'styled-components';

const videoStyle = style.iframe`
    display:block;
    width:0px;
    margin: 30px;
`;
const DivStyle = style.div`
    border:3px solid black;
    display:flex;
    margin:auto;
    padding:2%;
    background-color:${(props)=>props.theme.primaryColor};
    width:35%;
    
`;


export default function Content(props){
    const {photos} = props;
    
    return (<DivStyle>
        {(photos.media_type === 'video')?
        <videoStyle id = 'video' src= {`${photos.url}`}  title={`${photos.title}`}/>
        :
            <img width= {'100%'} src= {`${photos.url}`}></img>
        }
        
     
                </DivStyle>)
}