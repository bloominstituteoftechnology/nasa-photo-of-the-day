import { Link } from 'react-router-dom'

const Home = props => {
    const { img } = props

    return (
        <>
            <div className='homePageContainer'>
                
            <div className='homePageSections'> 
                <Link to='/PhotoOfDay'>
                    <p>Photo Of The Day</p>
                    <img className='homePagePhotoOfDay' src={img}></img>
                </Link>
            </div>

            <div className='homePageSections'>
            <Link to='MarsPhotos'>
                    Hello World
                </Link>
            </div>
            </div>
        </>
    )

}

export default Home