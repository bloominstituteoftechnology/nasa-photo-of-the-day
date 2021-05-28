import React from 'react';
import styled from 'styled-components'



const StyledDate = styled.div`
    color: ${(props) => props.theme.primaryColor};
    display: flex;
    justify-content: flex-end;
    h2 {
        margin-left: 20px;
        margin-right: 20px;
    }
    button {
        height: 2em;
        font-size: 2em;
        &:hover {
            background-color: ${props => props.theme.hoverColor};
            color: white;
        }
    }
`

const DateDisplay = props => {
  
    const { date } = props;

    return (
        <StyledDate >
            <button>
                {`\<`}
            </button>
            <h2>
                {date}
            </h2>
            <button>
                {`\>`}
            </button>
        </StyledDate>
    )
}

export default DateDisplay;