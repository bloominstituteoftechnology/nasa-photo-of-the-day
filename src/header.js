import React, { useState } from "react";

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
            <h1>Nasa Photo</h1>

            <button onClick={() => setStarWarsOn(starwarsOn == !setStarWarsOn)}>{starAudio()}>
                A long long time ago...
         </button>
            <button onClick={() => {
                const anakin = new Audio("i-have-the-high-ground.mp3");
                anakin.play();
            }}>
                Oh NO!!!!
         </button>
        </>
    );
    // return <div>{displayValue}</div>;
};

export default Header;