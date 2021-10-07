import React from 'react'
import InnerCard from "../innerCard/InnerCard";
import styled from 'styled-components'

const ImageCard = styled.a`
height: 400px;
position: relative;
padding: 20px;
box-sizing: border-box;
display: flex;
align-items: flex-end;
text-decoration: none;
border: 4px solid #b0215e;
margin-bottom: 5px;
background-size: cover;
background-image: url('${props => props.imageUrl}');
@media (min-width: 768px) {
    height: 500px;
`

const ImageWrapper = ({ data }) => {
    const { url } = data
    return (
        <ImageCard imageUrl={url}><InnerCard data={data}/></ImageCard>
    )
}

export default ImageWrapper