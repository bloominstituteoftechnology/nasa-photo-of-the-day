import React, { useState } from "react";
import styled from 'styled-components'

const Title = styled.h1 `
    color: Orange;
    font-size: 5rem;
    `
const Button = styled.button `
    font-size: 3rem;
    color: lime;
    padding: 1%;
    margin: 1%;
    background: red;
`
const ButtonContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`



const Header = ({ header }) => {


    let [starwarsOn, setStarWarsOn] = useState(false);
    function starAudio() {
        const starWars = new Audio("star-wars-theme-song.mp3");
        if (starwarsOn){starWars.play();
    }
        else{
            starWars.pause();
        }
    }
    return (
        <>
            <Title>Nasa Photo</Title>
            <ButtonContainer>
            <Button onClick={() => setStarWarsOn(starwarsOn == !setStarWarsOn)}>{starAudio()}
                A long long time ago...
         </Button>
            <Button onClick={() => {
                const anakin = new Audio("i-have-the-high-ground.mp3");
                anakin.play();
            }}>
                Oh NO!!!!
         </Button>
         </ButtonContainer>
        </>
    );
    // return <div>{displayValue}</div>;
};

export default Header;