import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledTitle = styled.div`
    color: ${props => props.theme.secondaryColor}
`

export default function Title(){
    const [title, setTitle] = useState(null)

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=yHrcEEmqivYemLhaBk4hlo4s3H1JxlHQ1qEfEYsA&date=2012-03-14')
        .then(res => {
            setTitle(res.data.title)
        })
        .catch(err => (console.log(err)))
    }, [Title])

    return (
        <StyledTitle>
            <h2>{title}</h2>
        </StyledTitle>
    )

}