import React from 'react'
import Nav from '../../components/Nav'
import Cards from '../../components/Cards'
//importing style
import '../../styles/App.css'
//importing nasa logo
import logo from '../../assets/images/logo.png'


const Home = ({ view, setView }) => {
    return (
        <div className='Home'>
            <Nav />
            <div className="hero">
                <div className="brand">
                    <img src={logo} alt='NASA Logo' />
                    <h1>NASA OPEN APIs</h1>
                </div>
                <div className="title">
                    <h2>
                        <span>The sky is the limit,</span>
                        <span><i>luckily</i> we got APIs</span>
                    </h2>
                </div>
            </div>
            
            { view === 'HOME' && <Cards setView={setView} /> }
            

        </div>
    )
}

export default Home;