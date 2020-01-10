import React from 'react';
import { Badge } from 'reactstrap';

const Header = (props) => {
    return (
        <div>
            <h1 className='header'><Badge color='secondary'>NASA Photo Of The Day</Badge></h1>            
        </div>
    );
}

export default Header;