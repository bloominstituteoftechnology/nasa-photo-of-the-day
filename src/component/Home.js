import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        
    <div className="background1">
      
        <Link to="/nasaphoto"> See into the stars!</Link>

        <div className="homecontent">
        <h2>NASA Photo Of The Day</h2>
        </div>
    </div>
    )
}