import React from "react";
import Photo from "./Photo";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
    text-align: center;
    max-width: 1000px;
    width: 80%;
    margin: 0 auto;
    background-color: white;
    border-radius: 1rem;
    padding: 3rem;
    box-shadow: 3px 10px 10px rgba(0, 0, 0, 0.5);
`;

const App = () => {
    return (
        <Container>
            <h1>Astronomy Picture of the Day</h1>
            <p>
                <a href="https://apod.nasa.gov/apod/archivepix.html">Discover the cosmos!</a>
                Each day a different image or photograph of our fascinating universe is featured, along with a brief
                explanation written by a professional astronomer.
            </p>

            <Photo />
        </Container>
    );
};

export default App;
