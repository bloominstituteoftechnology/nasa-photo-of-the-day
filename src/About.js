import React from "react";
import styled from "styled-components";

const AboutCont = styled.div`
  color: rgba(245, 245, 245, 0.85);
  padding: 2% 10% 2% 10%;
  background-image: url("https://wallpapercave.com/wp/GjrkLhP.jpg");
  background-repeat: no-repeat;
  font-size: calc(10px + 2vmin);
`;

const AboutP = styled.p`
  color: rgb(220, 220, 220);
`;

function About() {
  return (
    <AboutCont className="About-container">
      <h2>A Space Pic A Day Keeps the Existential Dread at Bay!</h2>
      <AboutP>
        This site is dedicated to showing you, yes, you, a fresh new shot of the
        breathtaking, indifferent expanse of space that engulfs the relatively
        microscopic planet we inhabit to remind you just how insignifigant you
        are :)
      </AboutP>
      <h4>
        Check out NASA's original Astronomy Picture of the day website{" "}
        <a
          className="App-link"
          href="https://apod.nasa.gov/apod/astropix.html"
          target="blank_"
        >
          here
        </a>
      </h4>
    </AboutCont>
  );
}

export default About;
