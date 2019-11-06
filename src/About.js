import React from "react";

function About() {
  return (
    <div className="About-container">
      <h2>A Space Pic A Day Keeps the Existential Dread at Bay!</h2>
      <p>
        This site is dedicated to showing you, yes, you, a fresh new shot of the
        breathtaking, indifferent expanse of space that engulfs the relatively
        microscopic planet we inhabit to remind you just how insignifigant you
        are :)
      </p>
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
    </div>
  );
}

export default About;
