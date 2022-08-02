import MarsPhotos from './MarsRoverPhotosChild'
import MarsCameraSelector from './MarsCameraSelector'

import {
    MarsButtonsContainer,
    Button,
    MarsH2,
    Para,
    Para2,
    DateInput,
    ParaDiv
} from './css/MarsCSS'


function MarsRoverPhotos(props) {
    const { marsData, setMarsData, date, setDate, img, setImg } = props

    const nextPage = () => {
        setImg(img + 1)
    }

    const prevPage = () => {
        setImg(img - 1)
    }

    return (
        <div>
            <MarsButtonsContainer>
                <MarsH2>Mars Photo<br></br>Selector</MarsH2>
                <ParaDiv>Select a date <p className='icn-spinner'><i className="fa-solid fa-bahai"></i></p></ParaDiv>
                <DateInput type='date' onChange={(e) => { setDate(e.target.value) }}></DateInput>
                <Para>Date: {date}</Para>
                <Button onClick={nextPage}>Next Page</Button>
                <Button onClick={prevPage}>Prev Page</Button>
                <Para>Page: {img}</Para>
                <MarsCameraSelector />
            </MarsButtonsContainer>
            {
                marsData.length > 0 ? marsData.map(e =>
                    <MarsPhotos img={e.img_src} key={e.id} camera={e.camera.full_name} />
                )
                    : <Para2>Make sure you select a date!<br></br>
                        If you did, there was <br></br>
                        0 pictures taken on this day.<br></br>
                        Try a different date!</Para2>
            }
        </div>

    )
}

export default MarsRoverPhotos