import React from "react";
import styled from "styled-components";
// import "./NavBar.css";

const Nav = styled.div`
    border-bottom: 6px solid #9d3947;
    height: 60px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #41b3a3;
    color: #b34151;
    text-shadow: 2px 1px #86313d;
    letter-spacing: 1px;
`;

const NavBar = props => {
    console.log("NavBar", props);
    return (
        <Nav>
            <div className="title">
                <h1>Astronomy Picture of the Day</h1>
            </div>
            <div className="todays-date">
                <h3>{props.date}</h3>
            </div>
        </Nav>
    );
};

export default NavBar;
