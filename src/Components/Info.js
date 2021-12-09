import React from 'react';
import styled from 'styled-components';

const StyledInfo = styled.div`
    display: flex;
    background-color: lightgray;
    color: black;

    .footer{
        display: flex;
    }

    a{
        text-decoration:none;
        padding: 5%;
    }

    .exp{
        width:75%
    }
`
const Info = props => {
    const {exp, author, date} = props;

    return(
        <StyledInfo>
            <div>
                <nav className='footer'>
                    <a href="/">Photographer:<br/>{author}</a>
                    <a href="/">Date:<br/>{date}</a>
                </nav>
            </div>
            <div className="exp">
                <span>
                    {exp}
                </span>
            </div>
        </StyledInfo>
    )
}

export default Info