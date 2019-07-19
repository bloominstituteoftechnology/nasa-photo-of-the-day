import React from "react";
import "./App.css";
import MediaGrid from "./components/MediaGrid";
import { WrapperDiv, NewH1, NewH3, Button } from "./components/styleMe";
import { Header, Segment } from "semantic-ui-react";

function App() {
  return (
    <>
      <Header attached as="h2yar" color="purple">
        Attached Header
      </Header>
      <Segment attached>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Segment>

      <WrapperDiv>
        <NewH1>
          "Your Mind is like a parachute: If it isn't open, it doesn't work."
        </NewH1>
        <NewH3>Buzz Aldrin on Keeping an open mind</NewH3>
        <Button>Take me to The Moon</Button>

        <section>
          <MediaGrid />
        </section>
      </WrapperDiv>
    </>
  );
}

export default App;
