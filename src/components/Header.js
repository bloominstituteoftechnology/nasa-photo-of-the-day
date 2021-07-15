import React from 'react';
import styled from  'styled-components';

export default function Header(props){
    const {title} = props;
    const Headers = styled.div``;
    return (
        <Headers>
            <h1>Picture of The Day From Nasa</h1>
            <h3>{title}</h3>
        </Headers>
    )
}
// export default Header;