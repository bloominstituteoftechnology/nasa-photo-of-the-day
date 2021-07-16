import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledExplnation = styled.div`
    padding: 1% 3%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 4px solid ${props => props.theme.primaryColor};
    border-radius: 10px;
    margin:10%;
    background-color: ${props => props.theme.white};

`

export default function Explanation(){
    const [ex, setEx] = useState(null)

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=yHrcEEmqivYemLhaBk4hlo4s3H1JxlHQ1qEfEYsA&date=2012-03-14')
        .then(res => {
            setEx(res.data.explanation)
        })
        .catch(err => (console.log(err)))
    }, [Explanation])

    return (
        <StyledExplnation>
            <h3>Explanation:</h3>
            <p>{ex}</p>
        </StyledExplnation>
    )
//fixing a push
}