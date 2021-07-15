import React from 'react';
import styled from  'styled-components';

function Header(props){
    const {title} = props;
    const Headers = styled.div``;
    return (
        <Header>
            <h1>Picture of The Day From Nasa</h1>
            <h3>{title}</h3>
        </Header>
    )
}
export default Header;