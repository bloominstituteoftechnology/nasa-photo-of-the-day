import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledTitle = styled.div`
    color: ${props => props.theme.secondaryColor}
`

export default function Header(){
    const [header, setHeader] = useState(null)

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=QJvQ8epqTuHyftbwtNI2zWGIYkhTewyNThhIADJ5')
        .then(res => {
            setHeader(res.data.header)
        })
        .catch(err => (console.log(err)))
    }, [header])

    return (
        <StyledTitle>
            <h2>{header}</h2>
        </StyledTitle>
    )
} 