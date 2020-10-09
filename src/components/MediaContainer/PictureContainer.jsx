import React from 'react'
import styled from 'styled-components'

const StyledPictureContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 0 auto;
    width: 90%;
    margin-top: 6%;

    * {
        /* border: 2px solid lightgray; */
    }
    img {
        width: 500px;
    }
    .text-div{
        padding: 2%;
    }
    .photo-info{
        display: flex;
        justify-content: center;
        align-items: baseline;
    }
    .photo-info p{
        margin-right: 2%;
    }    
`
    




const PictureContainer = (prop) => { 
    const {photoData} = prop //deconstructing
    return (
        <StyledPictureContainer>
            <img src={photoData.url} alt={photoData.title}/>
            <div className='text-div'>
                <h2>{photoData.title}</h2>
                <div className='photo-info'>
                    <p>{photoData.copyright}</p>
                    <h3>({photoData.date})</h3>
                </div>
                <p>{photoData.explanation}</p> 
            </div>       
        </StyledPictureContainer>
    )
}

export default PictureContainer;