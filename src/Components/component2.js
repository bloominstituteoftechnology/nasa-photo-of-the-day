import React from "react";
// import Component1 from "./component1";

const Component2 = props => {
    if (!props.image) {
        return <h1>Loading</h1>
    }
    return (
        <div className="pic1" key={props.id}>
            <p>Date: {props.date}</p>
            <img src={props.image} alt=" of Space"></img>
            <p>Title: {props.title}</p>
            <p>Explanation: {props.description}</p>
            <p>Copyright: {props.copyright}</p>
        </div>
    );

};

export default Component2;