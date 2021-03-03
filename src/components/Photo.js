import React from "react";
// import Title from './Title'
// import axios from 'axios'
// import Explanation from './Explanation'

const Photo = (props) => {
    // const [photo, setPhoto] = useState({})

    // useEffect(() => {
    //     axios.get('https://api.nasa.gov/planetary/apod?api_key=mKuUOhcDj4iX6SswbMgbgHEmmXuOQurAKhZKNnGc')
    //     .then(res=> {
    //         console.log(res)
    //         setPhoto(res.data)
    //     })
    // }, [])

    return(
        <div>
            {/* <Title title={photo.title}/> */}
            <img src={props.url} alt=''/>
            {/* <Explanation explanation={photo.explanation}/> */}
        </div>
    )
}

export default Photo