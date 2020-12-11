import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <StyleHeader>
            <div className="header">
                <h1>{ '{ NASA APIs }' }</h1>
            </div>
        </StyleHeader>
    )
}

export default Header

const StyleHeader = styled.div`
  padding: 1rem;
  font-size: 0.6rem;

  h1 {
    margin: 0;
    color: red;
  }
`;