import React ,{useState, useEffect}from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StylePhoto = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10%;
    img {
        width: 100%;
        border: 1px solid #ddd;
        border-radius: 10px;
        padding: 20px;
        height: 30%;
    }
    
`

export default function RoverPhotoComponent () {
    const [images, setImages] = useState([])

    useEffect(() => {
        axios.get('https://images-api.nasa.gov/asset/as11-40-5874')
          .then(res => {
            //console.log(res)
            setImages(res.data.collection.items)
          })
          .catch(err => {
            console.log(err)
          })
      }, [])

    useEffect(() => {
        console.log('Effect only after first render + dom surgery')
        return () => {
            console.log('clean up, removed from DOM')
        }
    }, [])
    
    return (
        <StylePhoto>
            {
                images.map((img, index) => <img src = {img.href} key = {index} alt = 'nasa picture'></img>)
            }
        </StylePhoto>
    )
}