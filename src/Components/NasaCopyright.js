import React from 'react';
import styled from 'styled-components'

const CopyrightP = styled.p`
margin: 2vh;
font-size: 2rem;
font-family: 'Gayathri', sans-serif;




`;

const NasaCopyright = props => {
    
    return (
        <div>
            <CopyrightP><p className="date">Photographer &copy;: {props.copyright}</p></CopyrightP>
        </div>
    );
};

export default NasaCopyright;