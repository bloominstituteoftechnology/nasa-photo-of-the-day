import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import styled from 'styled-components'
import { Button } from 'reactstrap';





const StyledApp = styled.div`
color: ${pr => pr.theme.pokemonColor};

&:hover {
    color: ${pr => pr.theme.secondaryColor};
    background-color: cyan;
    transition: all 1s ease-in-out;
  }

app-header {
    color: ${pr => pr.theme.primaryColor};
    &:hover {
        transform: scale(2);
        transition: all 1s ease-in-out;
      }
}
app-link{
    color: ${pr => pr.theme.dangerColor};
}
`
// export default function App({ info, action }) {
    // const { info, action } = props
    return (
      <StyledApp danger={info.name === 'Nasa'} bold={bold}>
        {info.name}
        <button onClick={() => action(info.id)}>
          See details
        </button>
        {/* <StyledButton onClick={() => action(info.id)}>
          See details
        </StyledButton> */}
      </StyledApp>
    )
      }


function App() {
  const [dataSet, setDataSet] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(function(){
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=J1HZTloMkDyltYkA5IkQUYsKarYaqq3qrqwYWCvk')
    .then(function(res){
      setDataSet(res.data)
      setPhoto(res.data.hdurl)
      console.log(res.data.hdurl)
    })
    .catch(function(err){
      console.log(err)
    })
  })

  console.log(dataSet)

  const NasaImage = (props) => (
    <div>
      <img src = {props.photo} alt='alt'></img>
    </div>
  )


  return (
//     <StylePage>

// <StyleBody>
//   <img src='https://www.nasa.gov/site/default/files/thumbnails/image/nasa-logo-web-rbg.png' alt=''/>
//   <h1>National Aeronautics and Space Administration (NASA)</h1>
// </StyleBody>

// {setNavigation && (
//   <Navigation navigation={navigation}/>
// )}
// {setNasaPhoto && (
//   <Photo nasaPhoto={nasaPhoto} details={details} title={title}/>
// )}
      
//     </StylePage>
    <div className="App">
       <h1>Welcome to React</h1>
                                <p>
                                    <Button
                                        tag="a"
                                        color="success"
                                        size="large"
                                        href="http://reactstrap.github.io"
                                        target="_blank"
                                    >
                                        View Reactstrap Docs
                                    </Button>
                                </p>
      <NasaImage photo={photo}/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
