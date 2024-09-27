import React from 'react';
import styled from 'styled-components'


const Photo = props => {
    const { photo } = props;

    return (
        <div className='main-photo'>
            <img src = {photo}></img>
    <span className='caption'>{photo.text}</span>
        </div>
    );
};

export default Photo;

const StyledPhoto = styled.div`
  opacity: 0;
  animation: ${kf} 2s forwards;
   background-color: ${pr => pr.alert
    ? pr.theme.secondaryColor
    : pr.theme.primaryColor
  };

background-color: ${pr => pr.theme.primaryColor};
  border-bottom: 2px ${pr => pr.theme.white};
  color: ${pr => pr.theme.white};
  padding: ${pr => pr.theme.paddingSmall};
  width: 60%;
  display: flex;
  justify-content: space-between;

  @media ${pr => pr.theme.mobileBreakpoint} {
  width: initial;
}

transition: all 0.3s ease-in-out;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: ${pr => pr.theme.tertiaryColor};
  }
  `
