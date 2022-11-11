import React from "react";
import styled from "styled-components";

/**
 * To-Do
 * add in button functionality
 * find proper color theme
 */


const MainWrapper = styled.div`
    width: 50%;
    border: thick double;
    margin: 1% auto;

    h1, h3 {
        font-family: 'Anybody', cursive;
    }

    .dashboard {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }

    button {
        background-color: ${pr => pr.theme.secondary};
    }


`;

const Header = (props) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[props.header.date.slice(5,7) -1]
    const day = props.header.date.slice(8)
    const year = props.header.date.slice(0,4)


    return (
        <MainWrapper>
            <h1>Welcome to your NASA photo of the day!</h1>
            <div className="dashboard">
                <button>Previous Day</button>
                <h3>{month + " "+  day + ", " + year}</h3>
                <button>Current Day</button>
            </div>
        </MainWrapper>

    )
};


export default Header