import React from 'react'
import Nav from '../../components/Nav'
//importing nasa logo

const Home = () => {
    return (
        <div className='Home'>
            <Nav />
            <div className="hero">
                <div className="brand">
                    <img src={logo}>

                </div>
            </div>
        </div>
    )
}

export default Home;