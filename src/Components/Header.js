// imports
import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  background: navy;
  width: 100%;
  margin: 4%;
  padding: 4%;
  h1 {
      font-size: 3rem;
      font-weight: bold;
      color: white;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: lighter;
    font-style: italic;
    color: lavenderblush;
  }

`;

// Export default content
function Sidebar(props) {
    const { nasaTitle, nasaDate } = props;
    return (
       <Header>
            <h1>{nasaTitle}</h1> 
            <h2>{nasaDate}</h2>
       </Header>
    )
}

export default Sidebar;