import React from "react";
import "./App.css";
import Photo from "./Photo";

function App() {
    return (
        <div className="container">
            <h1>Astronomy Picture of the Day</h1>
            <p>
                <a href="https://apod.nasa.gov/apod/archivepix.html">Discover the cosmos!</a>
                Each day a different image or photograph of our fascinating universe is featured, along with a brief
                explanation written by a professional astronomer.
            </p>

            <Photo />
        </div>
    );
}

export default App;
