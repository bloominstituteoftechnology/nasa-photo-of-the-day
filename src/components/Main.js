import React from "react";
import "../App.css";

function Main({ img,content,title }){
    return (
        <div className="container">
            <div className = "main">
                <div className="main-content">
                        <h1>{title}</h1>
                        <p>{content}</p>
                </div>
                <img src = {img} alt =""/>
                

            </div>
          
        </div>
    )
}
export default Main;