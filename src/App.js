import React from "react";
import "./App.css";
import Image from './Components/Image'
import Title from './Components/Title'
import Explanation from './Components/Explanation'
import Copyright from './Components/Copyright'
import Date from './Components/Date'
import { Container, Header} from 'semantic-ui-react'
// import CardProp from './TestingSemanticUI/CardProps'


function App() {
  return (
    <div className="App">
                    {/* <CardProp /> */}
            <Container fluid style={{ height: "100vh", width: "80%", margin: "0 auto", marginTop: "40px"}}> 
              <Header as='h1' style={{ borderBottom: '2px, black'}}>
                 <Title />
              </Header>

              <Image/>

              <Date />

              <Explanation />

              <Copyright/>


            </Container>
      <div className='container'>
      </div>
    </div>
  );
}

export default App;
