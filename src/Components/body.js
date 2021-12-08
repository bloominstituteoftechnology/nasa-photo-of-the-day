import React from "react";


const Body = (props) => {
    return (
        <div>
            <h1>NASA Photo of the Day!</h1>
                <p className="data">Date: {props.data.date}</p>
                <p className="title">Title: {props.data.title}</p>
                <img src={props.data.hdUrl} alt="item of the day"/>
                <p>Copyright: {props.copyright}</p>
        </div>
    )
}

export default Body;