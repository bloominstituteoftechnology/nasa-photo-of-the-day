import React from "react";
import { Link } from 'react-router-dom'

const GlobalNavBar = () => {

    return (
        <div className="globalNavBar">
        <Link to='/'>Home</Link>
       <Link to='/PhotoOfDay'>Photo Of The Day</Link>
       <Link to='/MarsPhotos'>Mars Photo Selector</Link>
        </div>
    )

}

export default GlobalNavBar