import React , {useState, useEffect} from 'react'
import axios from 'axios'

const Details = () => {
    const [images, setImages] = useState([])

    useEffect(() => {
        axios.get('https://images-api.nasa.gov/asset/as11-40-5874')
          .then(res => {
            console.log(res)
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
        <div className = "imageContainer">
            {
                images.map(img => <img src = {img.href} key = {img}></img>)
            }
        </div>
    )
}

export default Details