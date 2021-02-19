import React from 'react';
import "./App.css";
import styled from 'styled-components';

const StyledPicture = styled.div`
border-top: ${props => props.theme.border};
border-bottom: ${props => props.theme.border};
padding: 20px;
margin-top: 20px;
`

function Picture(props) {
    const {picData} = props;

    return (
      <StyledPicture className="App">
        <div>
          {picData.title}
        </div>
 
        <img 
            src={picData.url}
            alt='new'
        />
        <div>
            Copyright: {picData.copyright}
          {picData.date}
        </div>
                     

      </StyledPicture>
    );
}
export default Picture;