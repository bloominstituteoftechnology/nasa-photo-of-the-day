import React from "react";
import Nav from "./Nav";
import "./Header.css";
import {Title, SubTitle} from "../Style";


const Header = (props) => {
    return (
        <div className="mainTitle">
        <Nav date={props.date}/>
        <Title>Astronomy Picture of the Day</Title>
        <SubTitle>This is a React app which uses NASA's "APOD" API to display the Astronomy Picture of the Day.</SubTitle>
        </div>
    )
}

export default Header; 