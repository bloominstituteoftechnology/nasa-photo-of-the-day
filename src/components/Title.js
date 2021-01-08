import React from 'react';
import { Alert } from 'reactstrap';

const Title = props => {

    const {title} = props
    
    

    return (
        <h2>{title}</h2>
    )
}

export default Title;