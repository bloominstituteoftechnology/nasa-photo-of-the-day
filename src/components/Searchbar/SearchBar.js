import React, {useState} from "react";
import alienImg from "./assets/NasaAlein1.png";
import "./SearchBarStyle.css";
const SearchBar = () =>{
    return (
        <div className="App-header">
            <div>
            <img className="App-logo" alt='noimg' src={alienImg} />
            </div>
            <h1>Welcome To NASA </h1>
            <input type="text"/>

        </div>
    );

};

export default SearchBar;