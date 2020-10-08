import React from 'react'

import styled from 'styled-components'



    const StyledBody = styled.div`
        div {
            width: 100%;
            margin: 0 auto;
            text-align: center;
            line-height: 1.7rem;
            
            
            
            
            
        }
        .Footer {
            border: none;
            margin: 2% 0;
        }
        div p{
            font-size: 1.3rem;
            width: 50%;
            margin: 0 auto;
        }
        h1 {
            border-bottom: 1px dashed black;
            padding-bottom: 2.8rem;
            font-weight: 200;
            font-size: 3.5rem;
        }
    `

const Body = (props) => {
    return (
        <StyledBody>
        <div className='details'>
            <h1>Title: {props.data.title}</h1>
            <p>{props.data.explanation}</p>
        </div>
        <div className="Footer">
    <p>Copyright: {props.data.copyright}</p>
        </div>
        </StyledBody>
    )
}

export default Body;
